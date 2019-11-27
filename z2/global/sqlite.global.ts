import { DBStatement } from './dbstatement.global';

export class SQLite {
    public path: string;
    public statements: DBStatement;
    public isOpen: boolean;
    public lastRowId: number;
    public changes: number;

    public SQLite(path: string, autoOpen: boolean) {}

    public execute = (queryString: string): boolean => {
        return null;
    };

    public query = (sql: string, ...args: any): DBStatement => {
        return null;
    };

    public open = (): boolean => {
        return null;
    };

    public close = (): boolean => {
        return null;
    };
}
