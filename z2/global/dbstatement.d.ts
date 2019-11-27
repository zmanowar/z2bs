declare class DBStatement {
    public sql: string;
    public ready: boolean;

    public getObject(): Object;

    public getColumnCount(): number;

    public getColumnValue(colIndex: number): number | string;

    // TODO: Verify returns string
    public getColumnName(colIndex: number): string;

    public go(): boolean;

    public next(): boolean;

    public skip(rows: number): number;

    public reset(): boolean;

    public close(): boolean;

    public bind(columNumber: number, value: boolean | string | number): boolean;
}
