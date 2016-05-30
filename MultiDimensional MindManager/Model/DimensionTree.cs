using System.Collections.Generic;

namespace Koopakiller.Apps.MultiDimensionalMindManager.Model
{
    public class DimensionTree : ITaggable
    {
        public IList<Tag> Tags { get; } = new List<Tag>();

        public IList<SubDimensionTree> Items { get; } = new List<SubDimensionTree>();

        public string Name { get; set; }
    }
}