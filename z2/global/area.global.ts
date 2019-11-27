import { Exit } from './exit.global';

export class Area {
    public exits: Exit[];
    public name: string;
    public x: number;
    // TODO: Check this is xsize and not x2
    public xsize: number;
    public y: number;
    public ysize: number;
    public id: number;
}
