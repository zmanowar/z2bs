declare class Folder {
    public name: string;

    public create(name: string): Folder;

    public remove(): boolean;

    public getFiles(): string[];
    public getFolders(): string[];
}
