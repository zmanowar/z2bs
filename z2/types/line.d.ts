declare class Line {
    public x: number;
    public y: number;
    public x2: number;
    public y2: number;
    public visible: boolean;
    public align: number;
    public zorder: number;
    public click: Function;
    public hover: Function;

    public constructor(
        x: number,
        y: number,
        x2: number,
        y2: number,
        color: number,
        automap: boolean,
        click: Function,
        Hover: Function,
    );

    public remove(): void;
}
