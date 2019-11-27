declare class D2BSScript {
    public name: string;
    public type: number;
    public running: boolean;
    public threadid: number;

    // TODO: Boolean Return Check (Possibly incorrect)
    public getNext(): boolean;

    public pause(): void;
    public resume(): void;
    public join(): void;
    public stop(): void;
    public send(...args: any): void;
}
