export class DBStatement {
    public sql: string;
    public ready: boolean;

    public getObject = (): Object => {
        return null;
    };

    public getColumnCount = (): number => {
        return null;
    };

    public getColumnValue = (colIndex: number): number | string => {
        return null;
    };

    // TODO: Verify returns string
    public getColumnName = (colIndex: number): string => {
        return null;
    };

    public go = (): boolean => {
        return null;
    };

    public next = (): boolean => {
        return null;
    };

    public skip = (rows: number): number => {
        return null;
    };

    public reset = (): boolean => {
        return null;
    };

    public close = (): boolean => {
        return null;
    };

    public bind = (columNumber: number, value: boolean | string | number): boolean => {
        return null;
    };
}
