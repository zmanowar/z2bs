export class File {
    public readable: boolean;
    public writable: boolean;
    public seekable: boolean;
    public mode: number;
    public binaryMode: boolean;
    public length: number;
    public path: string;
    public position: number;
    public eof: boolean;
    public accessed: number;
    public created: number;
    public modified: number;
    public autoflush: boolean;

    public close = (): File => {
        return null;
    };

    public reopen = (): File => {
        return null;
    };

    public read = (count: number): string => {
        return null;
    };

    public readLine = (): string => {
        return null;
    };

    public readAllLines = (): string[] => {
        return null;
    };

    public readAll = (): string => {
        return null;
    };

    public write = (): File => {
        return null;
    };

    public seek = (nBytes: number, isLines: boolean, fromStart: number): File => {
        return null;
    };

    public fluysh = (): File => {
        return null;
    };

    public reset = (): File => {
        return null;
    };

    public end = (): File => {
        return null;
    };
}
