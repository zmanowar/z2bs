declare class Sandbox {
    public constructor();

    public evaluate(code: string): Object;

    public include(file: string): Object;

    public isInclude(file: string): boolean;

    public clearScope(file: string): void;
}
