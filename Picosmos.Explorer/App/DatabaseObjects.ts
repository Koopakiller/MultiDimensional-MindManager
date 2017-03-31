interface InitialSelectorTable {
    tableName: string;
    columns: InitialSelectorColumn[];
}

interface InitialSelectorColumn {
    tableName: string;
    columnName: string;
}

interface DatasetIdentifier {
    tableName: string;
    columnName: string;
    columnValue: string;
}