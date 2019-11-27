declare class Text {
    public x: number;
    public y: number;
    public visible: boolean;
    public align: number;
    public zorder: number;
    public click: Function;
    public hover: Function;

    public constructor(
        text: string,
        x: number,
        y: number,
        color: number,
        font: number,
        align: number,
        automap: boolean,
        click: Function,
        Hover: Function,
    );

    public remove(): void;
}
