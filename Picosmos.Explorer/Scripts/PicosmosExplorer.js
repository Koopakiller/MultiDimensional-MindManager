/// <reference path="typings/jquery/jquery.d.ts" />
var counter = 0;
$(document).ready(function () {
    $("#submitButton").click(function () {
        //http://localhost:54583
        var selected = $("#select").find(":selected");
        var url = "/Home/GetAssociatedData?table=" + selected.data("table") + "&column=" + selected.data("column") + "&value=" + $("#numberBox").val();
        $.getJSON(url, null, addTable);
    });
    function addTable(data) {
        var html = "";
        html += "<table>";
        html += "<tr>";
        for (var _i = 0, _a = data.Columns; _i < _a.length; _i++) {
            var col = _a[_i];
            html += "<th data-ischild=\"" + col.IsChild + "\" data-isparent=\"" + col.IsParent + "\">" + col.ColumnName + "</th>";
        }
        html += "</tr>";
        for (var _b = 0, _c = data.Rows; _b < _c.length; _b++) {
            var row = _c[_b];
            html += "<tr>";
            for (var _d = 0, _e = row.Cells; _d < _e.length; _d++) {
                var cell = _e[_d];
                var mCol;
                for (var _f = 0, _g = data.Columns; _f < _g.length; _f++) {
                    var col = _g[_f];
                    if (col.OrdinalPosition === cell.OrdinalPosition) {
                        mCol = col;
                        break;
                    }
                }
                if (mCol) {
                    html += "<td>";
                    html += "<input type=\"button\" onclick=\"expand(" + counter + ", '" + mCol.ColumnName + "', this);\" value=\"+\"/>";
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
        $("#box").html(html);
    }
});
function expand(num, colName, button) {
    $(button).remove();
    var row = $("tr[data-target=" + num + "] > td");
    row.show();
    row.html(row.html() + ("<br/>Column: " + colName));
}
//# sourceMappingURL=PicosmosExplorer.js.map