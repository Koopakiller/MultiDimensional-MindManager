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


class TableResultModel {
    public name: string;
    public columns: TableColumn[];
    public rows: TableRow[];
    public circularReferences: CircularReferenceModel[];
}

class CircularReferenceModel {
    public chainId: number;
    public description: string;
    public firstColumnName: string;
}

class TableColumn {
    public isChild: boolean;
    public isParent: boolean;
    public columnName: string;
    public columnType: string;
    public ordinalPosition: number;
}

class TableRow {
    public rowNumber: number;
    public cells: TableCell[];

    public expandedDatasets: DatasetIdentifier[];

    public expandedCircularReferences: TableResultModel[];
}

class TableCell {
    public columnName: string;
    public content: any;
    public isChild: boolean;
    public isParent: boolean;

    public canExpand: boolean;
    public wasAlreadyExpanded: boolean;
}