using System;
using System.Collections.Generic;
using System.Linq;

namespace Koopakiller.Apps.MultiDimensionalMindManager.Model
{
    public class DimensionTree<T> : ITaggable
    {
        public IList<Tag> Tags { get; } = new List<Tag>();

        public IList<SubDimensionTree<T>> Items { get; } = new List<SubDimensionTree<T>>();

        public string Name { get; set; }


        public IEnumerable<DimensionValue<T>> EnumerateValues()
        {
            var foundValues = new List<DimensionValue<T>>();
            return this.Items.SelectMany(tree => tree.EnumerateValues(foundValues));
        }

    }

    public class SubDimensionTree<T> : ITaggable
    {
        public IList<Tag> Tags { get; } = new List<Tag>();

        public IList<SubDimensionTree<T>> Items { get; } = new List<SubDimensionTree<T>>();

        public string Name { get; set; }

        public IList<DimensionValue<T>> Values { get; } = new List<DimensionValue<T>>();

        public IEnumerable<DimensionValue<T>> EnumerateValues(List<DimensionValue<T>> foundValues)
        {
            foreach (var item in this.Items.SelectMany(subTree => subTree.EnumerateValues(foundValues)))
            {
                yield return item;
            }
            foreach (var item in this.Values)
            {
                yield return item;
            }
        }
    }

    public class DimensionValue<T> : ITaggable
    {
        public IList<Tag> Tags { get; } = new List<Tag>();

        public T Value { get; set; }
    }
    public class LinearDimension<T> 
    {
    }

    public class DateTimeDimension : LinearDimension<DateTime>
    {
        
    }

    public class ItemList<T>
    {
        
    }
}