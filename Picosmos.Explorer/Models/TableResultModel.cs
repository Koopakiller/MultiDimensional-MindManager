using System;
using System.Collections.Generic;

namespace Koopakiller.Apps.Picosmos.Explorer.Models
{
    public class TablesResultModel
    {
        public List<TableResultModel> Tables { get; set; }
    }

    public class TableResultModel
    {
        public String Name { get; set; }
        public List<TableColumn> Columns { get; set; }
        public List<TableRow> Rows { get; set; }
        public List<CircularReferenceModel> CircularReferences { get; set; }
    }

    public class TableColumn
    {
        public Boolean IsChild { get; set; }
        public Boolean IsParent { get; set; }
        public String ColumnName { get; set; }
        public String ColumnType { get; set; }
        public Int32 OrdinalPosition { get; set; }
    }

    public class TableRow
    {
        public Int32 RowNumber { get; set; }
        public List<TableCell> Cells { get; set; }
        public String PossibleHeader { get; set; }
    }

    public class TableCell
    {
        public String ColumnName { get; set; }
        public String Content { get; set; }
    }

    public class CircularReferenceModel
    {
        public Int32 ChainId { get; set; }
        public String Description { get; set; }
        public String FirstColumnName { get; set; }
    }
}