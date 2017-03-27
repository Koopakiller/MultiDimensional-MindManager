/// <reference path="typings/jquery/jquery.d.ts" />

var counter = 0;
$(document).ready(() => {

    $("#submitButton").click(() => {
        //http://localhost:54583
        var selected = $("#select").find(":selected");
        expandNewTable(selected.data("table"), selected.data("column"), $("#numberBox").val(), $("#box"));
    });


});

function expandNewTable(table, column, id, parent) {
    var url = `/Home/GetAssociatedData?table=${table}&column=${column}&value=${id}`;
    $.getJSON(url, null, (data) => addTable(data, parent));
}

function addTable(tables: TablesResultModel, parent) {
    var html = "";

    for (var table of tables.Tables) {
        html += `<b>${table.Name}</b>`
        html += "<table>";

        html += "<tr>";
        for (let col of table.Columns) {
            html += `<th data-ischild="${col.IsChild}" data-isparent="${col.IsParent}">${col.ColumnName}</th>`;
        }
        html += "</tr>";

        for (let row of table.Rows) {
            html += "<tr>";
            for (let cell of row.Cells) {

                var mCol;
                for (let col of table.Columns) {
                    if (col.OrdinalPosition === cell.OrdinalPosition) {
                        mCol = col;
                        break;
                    }
                }
                if (mCol) {
                    html += `<td>`;
                    html += `<input type="button" onclick="expand(${counter}, '${mCol.ColumnName}', ${table}, ${cell
                        .Content}, this);" value="+"/>`;
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
    }

    parent.html(html);
}

function expand(num, colName, table, content, button) {
    $(button).remove();
    var row = $(`tr[data-target=${num}] > td`);
    row.show();
    row.html(`<div id="table_${num}_${colName}"></div>` + row.html());

    expandNewTable(table, colName, content, $(`#table_${num}_${colName}`));
}

interface TablesResultModel {
    Tables: TableResultModel[];
}

interface TableResultModel {
    Name:string;
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