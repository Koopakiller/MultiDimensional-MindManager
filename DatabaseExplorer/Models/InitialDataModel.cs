using System;
using System.Collections.Generic;

namespace DatabaseExplorer.Models
{
    public class InitialDataModel
    {
        public IList<Tuple<String, String, String>> TableColumns { get; set; }
    }
}