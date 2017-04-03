using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Koopakiller.Apps.Picosmos.Explorer.Models;

namespace Koopakiller.Apps.Picosmos.Explorer.Controllers
{
    public class AdminController : Controller
    {
        private readonly Entities entities = new Entities();

        public ActionResult Index() => this.View();

        public ActionResult Update_Explorer_CircularReferences()
        {
            try
            {
                var data = this.entities.Explorer_GetDatabaseRelations();

                var crf = new CircularReferenceFinder
                {
                    Data = data.ToList()
                };
                crf.FindReferenceChains();
                crf.RemoveSimpleRelations();
                crf.AssignChainData();
                var res = crf.GetFlatResult();

                this.entities.Database.ExecuteSqlCommand(
                    $"DELETE FROM [{nameof(this.entities.Explorer_CircularReferences)}]");
                this.entities.Explorer_CircularReferences.AddRange(res);
                this.entities.SaveChanges();

                return this.View(nameof(this.Index), (Object)"Successfully updated");
            }
            catch
            {
                return this.View(nameof(this.Index), (Object)"Error");
            }
        }

        protected override void Dispose(Boolean disposing)
        {
            this.entities?.Dispose();
            base.Dispose(disposing);
        }
    }

    public class CircularReferenceFinder
    {
        public IList<Explorer_GetDatabaseRelations_Result> Data { get; set; }

        public IList<IList<Explorer_CircularReferences>> Result { get; private set; }

        public IEnumerable<Explorer_CircularReferences> GetFlatResult() => this.Result.SelectMany(x => x);

        public void FindReferenceChains()
        {
            this.Result = new List<IList<Explorer_CircularReferences>>();
            foreach (var item in this.Data)
            {
                var data = new[]
                {
                    item.ToTableEntry(),
                };
                if (item.SourceTableName == item.TargetTableName)
                {
                    //its a self referencing table
                    this.Result.Add(data.ToList());
                }
                else
                {
                    foreach (var item2 in this.FindReferenceChainsInternal(data))
                    {
                        this.Result.Add(item2.ToList());
                    }
                }
            }
        }

        private Explorer_CircularReferences[] Extend(Explorer_CircularReferences[]  arr, Explorer_GetDatabaseRelations_Result data)
        {
            var arr2 = new Explorer_CircularReferences[arr.Length + 1];
            for (var i = 0; i < arr.Length; ++i)
            {
                arr2[i] = arr[i].Copy();
            }
            arr2[arr2.Length - 1] = data.ToTableEntry();
            return arr2;
        }

        public IEnumerable<IEnumerable<Explorer_CircularReferences>> FindReferenceChainsInternal(Explorer_CircularReferences[] start)
        {
            var end = start.Last();
            foreach (var data in this.Data.Where(item => item.SourceTableName == end.TargetTableName))
            {
                if (data.TargetTableName == start.First().SourceTableName)
                {
                    //found a circular reference
                    var arr = this.Extend(start, data);
                    yield return arr.ToList();
                }
                else if (start.All(x => x.SourceTableName != data.TargetTableName))
                {
                    var arr = this.Extend(start, data);
                    foreach (var item in this.FindReferenceChainsInternal(arr))
                    {
                        yield return item.ToList();
                    }
                }
                // else:
                // start contains a circular reference, this will be found in another iteration
                // abort this chain
            }
        }

        public void RemoveSimpleRelations()
        {
            for (var i = this.Result.Count - 1; i >= 0; --i)
            {
                if (this.Result[i].Count == 2
                    && this.Result[i][0].SourceColumnName == this.Result[i][1].TargetColumnName
                    && this.Result[i][0].TargetColumnName == this.Result[i][1].SourceColumnName)
                {
                    this.Result.RemoveAt(i);
                }
            }
        }

        public void AssignChainData()
        {
            var chainId = 1;
            foreach (var chain in this.Result)
            {
                var pos = 1;
                foreach (var chainLink in chain)
                {
                    chainLink.ChainId = chainId;
                    chainLink.ChainPosition = pos;
                    pos++;
                }
                chainId++;
            }
        }
    }
}