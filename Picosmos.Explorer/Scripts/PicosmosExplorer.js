/// <reference path="typings/jquery/jquery.d.ts" />
var counter = 0;
$(document).ready(function () {
    $("#submitButton").click(function () {
        //http://localhost:54583
        var selected = $("#select").find(":selected");
        expandNewTable(selected.data("table"), selected.data("column"), $("#numberBox").val(), $("#box"));
    });
});
function expandNewTable(table, column, id, parent) {
    var url = "/Home/GetAssociatedData?table=" + table + "&column=" + column + "&value=" + id;
    $.getJSON(url, null, function (data) { return addTable(data, parent); });
}
function addTable(tables, parent) {
    var html = "";
    for (var _i = 0, _a = tables.Tables; _i < _a.length; _i++) {
        var table = _a[_i];
        html += "<b>" + table.Name + "</b>";
        html += "<table>";
        html += "<tr>";
        for (var _b = 0, _c = table.Columns; _b < _c.length; _b++) {
            var col = _c[_b];
            html += "<th data-ischild=\"" + col.IsChild + "\" data-isparent=\"" + col.IsParent + "\">" + col.ColumnName + "</th>";
        }
        html += "</tr>";
        for (var _d = 0, _e = table.Rows; _d < _e.length; _d++) {
            var row = _e[_d];
            html += "<tr>";
            for (var _f = 0, _g = row.Cells; _f < _g.length; _f++) {
                var cell = _g[_f];
                var mCol;
                for (var _h = 0, _j = table.Columns; _h < _j.length; _h++) {
                    var col = _j[_h];
                    if (col.OrdinalPosition === cell.OrdinalPosition) {
                        mCol = col;
                        break;
                    }
                }
                if (mCol) {
                    html += "<td>";
                    html += "<input type=\"button\" onclick=\"expand(" + counter + ", '" + mCol.ColumnName + "', " + table + ", " + cell
                        .Content + ", this);\" value=\"+\"/>";
                    html += "" + cell.Content;
                    html += "</td>";
                }
                else {
                    throw "Column not found";
                }
            }
            html += "</tr>";
            html += "<tr data-target=\"" + counter + "\"><td colspan=\"" + row.Cells.length + "\" style=\"display:none;\"></td></tr>";
            ++counter;
        }
        html += "</table>";
    }
    parent.html(html);
}
function expand(num, colName, table, content, button) {
    $(button).remove();
    var row = $("tr[data-target=" + num + "] > td");
    row.show();
    row.html("<div id=\"table_" + num + "_" + colName + "\"></div>" + row.html());
    expandNewTable(table, colName, content, $("#table_" + num + "_" + colName));
}
//# sourceMappingURL=PicosmosExplorer.js.map