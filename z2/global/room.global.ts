import { PresetUnit } from './presetunit.global';
import { Unit } from './unit.global';

export class Room {
    public number: number;
    public x: number;
    public y: number;
    public xsize: number;
    public ysize: number;
    public subnumber: number;
    public area: number;
    public level: number;
    public correcttomb: number;

    // TODO: Boolean Return Check (Possibly incorrect)
    public getNext = (): boolean => {
        return null;
    };

    public reveal = (): boolean => {
        return null;
    };

    public getPresetUnits = (type: number, _class: number): PresetUnit => {
        return null;
    };

    public getCollision = (): number => {
        return null;
    };

    public getNearby = (): Room => {
        return null;
    };

    public getStat = (stat: number): number => {
        return null;
    };

    public getFirst = (): Room => {
        return null;
    };

    public unitInRoom = (unit: Unit): boolean => {
        return null;
    };
}
