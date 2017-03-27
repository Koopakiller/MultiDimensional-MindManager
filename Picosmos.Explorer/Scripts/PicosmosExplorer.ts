/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="typings/jqueryui/jqueryui.d.ts"/>

var counter = 0;
$(document).ready(() => {

    $("#submitButton").click(() => {
        //http://localhost:54583
        var selected = $("#select").find(":selected");
        expandInitialTable(selected.data("table"), selected.data("column"), $("#numberBox").val(), $("#box"));
    });


});

function expandInitialTable(table, column, id, parent) {
    var url = `/Home/GetInitialTable?table=${table}&column=${column}&value=${id}`;
    $.getJSON(url, null, (data) => addTable(data, parent, table, column, id));
}

function expandNewTable(table, column, id, parent) {
    var url = `/Home/GetAssociatedData?table2=${table}&column2=${column}&value2=${id}`;
    $.getJSON(url, null, (data) => addTables(data, parent, table, column, id));
}

function addTable(table: TableResultModel, parent, sourceTable, sourceColumn, sourceId) {
    var html = "";
    html += `<h2>${sourceTable}.${sourceColumn}=${sourceId} references...</h2>`;

    html += appendTable(table, parent, sourceTable, sourceColumn, sourceId);

    parent.html(html);
}


function addTables(tables: TablesResultModel, parent, sourceTable, sourceColumn, sourceId) {
    var html = "";
    html += `<h2>${sourceTable}.${sourceColumn}=${sourceId} references...</h2>`;

    for (var table of tables.Tables) {
        html += appendTable(table, parent, sourceTable, sourceColumn, sourceId);
    }

    parent.html(html);
    parent.effect("highlight", "slow");
}

function appendTable(table: TableResultModel, parent, sourceTable, sourceColumn, sourceId) {
    var html = "";
    html += `<h3>${table.Name}</h3>`;
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
                html += `<td data-ischild="${mCol.IsChild}" data-isparent="${mCol.IsParent}">`;
                html += `<span>${cell.Content}</span>`;
                if ((mCol.IsChild || mCol.IsParent) && cell.Content !== "") {
                    html += `<a href="#table_${counter}_${mCol.ColumnName}" class="expand-link" onclick="expand(${counter}, '${mCol.ColumnName}', '${table.Name}', '${
                        cell.Content}', this);" >Expand</a>`;
                }
                html += `</td>`;
            } else {
                throw "Column not found";
            }
        }
        html += "</tr>";
        html += `<tr data-target="${counter}"><td colspan="${row.Cells.length}" class="extend-data-cell" style="display:none;"></td></tr>`;

        ++counter;
    }
    html += "</table>";

    return html;
}

function expand(num, colName, table, content, button) {
    $(button).remove();
    var row = $(`tr[data-target=${num}] > td`);
    row.show();
    row.html(`<div id="table_${num}_${colName}" class="dynamic-table-div" style="display:none;"></div>` + row.html());
    
    expandNewTable(table, colName, content, $(`#table_${num}_${colName}`));
}

interface TablesResultModel {
    Tables: TableResultModel[];
}

interface TableResultModel {
    Name: string;
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
    Content: string;
}