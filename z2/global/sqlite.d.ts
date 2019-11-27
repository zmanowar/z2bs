declare class SQLite {
    public path: string;
    public statements: DBStatement;
    public isOpen: boolean;
    public lastRowId: number;
    public changes: number;

    public constructor(path: string, autoOpen: boolean);

    public execute(queryString: string): boolean;

    public query(sql: string, ...args: any): DBStatement;

    public open(): boolean;

    public close(): boolean;
}
