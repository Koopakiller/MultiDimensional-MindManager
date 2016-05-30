using System.Collections.Generic;

namespace Koopakiller.Apps.MultiDimensionalMindManager.Model
{
    public interface ITaggable
    {
        IList<Tag> Tags { get; } 
    }
}