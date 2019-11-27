declare class Frame {
    public x: number;
    public y: number;
    // TODO: Check this is xsize and not x2
    public xsize: number;
    public ysize: number;
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
        align: number,
        automap: boolean,
        click: Function,
        Hover: Function,
    );

    public remove(): void;
}
