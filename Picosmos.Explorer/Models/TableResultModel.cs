using System;
using System.Collections.Generic;

namespace Koopakiller.Apps.Picosmos.Explorer.Models
{
    public class TableResultModel
    {
        public List<TableColumn> Columns { get; set; }

        public List<TableRow> Rows { get; set; }
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
    }

    public class TableCell
    {
        public Int32 OrdinalPosition { get; set; }
        public Object Content { get; set; }
    }
}