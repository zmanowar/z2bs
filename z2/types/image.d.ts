declare class Image {
    public x: number;
    public y: number;
    public align: number;
    public zorder: number;
    public click: Function;
    public hover: Function;
    public location: string;

    public constructor(
        text: string,
        x: number,
        y: number,
        color: number,
        align: number,
        automap: boolean,
        click: Function,
        Hover: Function,
    );

    public remove(): void;
}
