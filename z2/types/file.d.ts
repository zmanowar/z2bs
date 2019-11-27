declare class File {
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

    public close(): File;

    public reopen(): File;

    public read(count: number): string;

    public readLine(): string;

    public readAllLines(): string[];

    public readAll(): string;

    public write(): File;

    public seek(nBytes: number, isLines: boolean, fromStart: number): File;

    public flush(): File;

    public reset(): File;

    public end(): File;
}
