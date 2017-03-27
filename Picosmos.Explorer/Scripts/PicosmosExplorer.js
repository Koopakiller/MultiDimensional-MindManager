/// <reference path="typings/jquery/jquery.d.ts" />
var counter = 0;
$(document).ready(function () {
    $("#submitButton").click(function () {
        //http://localhost:54583
        var selected = $("#select").find(":selected");
        expandInitialTable(selected.data("table"), selected.data("column"), $("#numberBox").val(), $("#box"));
    });
});
function expandInitialTable(table, column, id, parent) {
    var url = "/Home/GetInitialTable?table=" + table + "&column=" + column + "&value=" + id;
    $.getJSON(url, null, function (data) { return addTable(data, parent, table, column, id); });
}
function expandNewTable(table, column, id, parent) {
    var url = "/Home/GetAssociatedData?table2=" + table + "&column2=" + column + "&value2=" + id;
    $.getJSON(url, null, function (data) { return addTables(data, parent, table, column, id); });
}
function addTable(table, parent, sourceTable, sourceColumn, sourceId) {
    var html = "";
    html += "<h2>" + sourceTable + "." + sourceColumn + "=" + sourceId + " references...</h2>";
    html += appendTable(table, parent, sourceTable, sourceColumn, sourceId);
    parent.html(html);
}
function addTables(tables, parent, sourceTable, sourceColumn, sourceId) {
    var html = "";
    html += "<h2>" + sourceTable + "." + sourceColumn + "=" + sourceId + " references...</h2>";
    for (var _i = 0, _a = tables.Tables; _i < _a.length; _i++) {
        var table = _a[_i];
        html += appendTable(table, parent, sourceTable, sourceColumn, sourceId);
    }
    parent.html(html);
}
function appendTable(table, parent, sourceTable, sourceColumn, sourceId) {
    var html = "";
    html += "<h3>" + table.Name + "</h3>";
    html += "<table>";
    html += "<tr>";
    for (var _i = 0, _a = table.Columns; _i < _a.length; _i++) {
        var col = _a[_i];
        html += "<th data-ischild=\"" + col.IsChild + "\" data-isparent=\"" + col.IsParent + "\">" + col.ColumnName + "</th>";
    }
    html += "</tr>";
    for (var _b = 0, _c = table.Rows; _b < _c.length; _b++) {
        var row = _c[_b];
        html += "<tr>";
        for (var _d = 0, _e = row.Cells; _d < _e.length; _d++) {
            var cell = _e[_d];
            var mCol;
            for (var _f = 0, _g = table.Columns; _f < _g.length; _f++) {
                var col = _g[_f];
                if (col.OrdinalPosition === cell.OrdinalPosition) {
                    mCol = col;
                    break;
                }
            }
            if (mCol) {
                html += "<td>";
                html += "<input type=\"button\" onclick=\"expand(" + counter + ", '" + mCol.ColumnName + "', '" + table.Name + "', '" + cell.Content + "', this);\" value=\"+\"/>";
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
    return html;
}
function expand(num, colName, table, content, button) {
    $(button).remove();
    var row = $("tr[data-target=" + num + "] > td");
    row.show();
    row.html("<div id=\"table_" + num + "_" + colName + "\"></div>" + row.html());
    expandNewTable(table, colName, content, $("#table_" + num + "_" + colName));
}
//# sourceMappingURL=PicosmosExplorer.js.map