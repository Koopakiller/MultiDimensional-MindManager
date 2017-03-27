/// <reference path="typings/jquery/jquery.d.ts" />

var counter = 0;
$(document).ready(() => {

    $("#submitButton").click(() => {
        //http://localhost:54583
        var selected = $("#select").find(":selected");
        var url = `/Home/GetAssociatedData?table=${selected.data("table")}&column=${selected.data("column")}&value=${$("#numberBox").val()}`;
        $.getJSON(url, null, addTable);
    });

    function addTable(data: TableResultModel) {
        var html = "";

        html += "<table>";

        html += "<tr>";
        for (let col of data.Columns) {
            html += `<th data-ischild="${col.IsChild}" data-isparent="${col.IsParent}">${col.ColumnName}</th>`;
        }
        html += "</tr>";

        for (let row of data.Rows) {
            html += "<tr>";
            for (let cell of row.Cells) {

                var mCol;
                for (let col of data.Columns) {
                    if (col.OrdinalPosition === cell.OrdinalPosition) {
                        mCol = col;
                        break;
                    }
                }
                if (mCol) {
                    html += `<td>`;
                    html += `<input type="button" onclick="expand(${counter}, '${mCol.ColumnName}', this);" value="+"/>`;
                    html += `${cell.Content}`;
                    html += `</td>`;
                } else {
                    throw "Column not found";
                }
            }
            html += "</tr>";
            html += `<tr data-target="${counter}"><td colspan="${row.Cells.length}" style="display:none;"></td></tr>`;

            ++counter;
        }
        html += "</table>";

        $("#box").html(html);

    }

});

function expand(num, colName, button) {
    $(button).remove();
    var row = $(`tr[data-target=${num}] > td`);
    row.show();
    row.html(row.html() + `<br/>Column: ${colName}`);
}

interface TableResultModel {
    Columns: TableColumn[];

    Rows: TableRow[];
}

interface TableColumn {
    IsChild: boolean;
    IsParent: boolean;
    ColumnName: string;
    ColumnType: string;
    OrdinalPosition: number;
}

interface TableRow {
    RowNumber: number;
    Cells: TableCell[];
}

interface TableCell {
    OrdinalPosition: number;
    Content: any;
}