declare class FileTools {
    public static writeText(file: string, ...args: any): boolean;

    public static appendText(file: string, ...args: any): boolean;

    public static exists(file: string): boolean;

    public static readText(file: string): string;
}
