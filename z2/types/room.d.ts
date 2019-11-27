declare class Room {
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
    public getNext(): boolean;

    public reveal(): boolean;

    public getPresetUnits(type: number, _class: number): PresetUnit;

    public getCollision(): number;

    public getNearby(): Room;

    public getStat(stat: number): number;

    public getFirst(): Room;

    public unitInRoom(unit: Unit): boolean;
}
