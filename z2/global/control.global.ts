export class Control {
    public text: string;
    public x: number;
    public y: number;
    // TODO: Check this is xsize and not x2
    public xsize: number;
    public ysize: number;
    public state: number;
    public password: boolean;
    public type: number;
    public cursorPos: number;
    public selectstart: number;
    public selectend: number;
    //TODO: Check if actually number
    public disabled: number;

    public getNext = (): Control => {
        return null;
    };
    public click = (x?: number, y?: number): void => {};
    public setText = (text: string): void => {};
    public getText = (): string[] => {
        return null;
    };
}
