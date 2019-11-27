declare class Unit {
    public type: number;
    public classId: number;
    public mode: number;
    public name: string;
    public mapid: number;
    public act: number;
    public gid: number;
    public x: number;
    public y: number;
    public targetx: number;
    public targety: number;
    public area: number;
    public hp: number;
    public hpmax: number;
    public mp: number;
    public mpmax: number;
    public stamina: number;
    public staminamax: number;
    public charlvl: number;
    public itemcount: number;
    public owner: number;
    public ownertype: number;
    public spectype: number;
    public direction: number;
    public code: string;
    public prefix: number;
    public suffix: number;
    public prefixNumber: number;
    public suffixNumber: number;
    public fullName: string;
    public quality: number;
    public node: number;
    public location: number;
    public sizex: number;
    public sizey: number;
    public itemType: number;
    public description: string;
    public bodylocation: number;
    public ilvl: number;
    // TODO: Verify not boolean
    public runwalk: number;
    public account: string;
    public charname: string;
    public diff: number;
    public maxdiff: number;
    public gamename: string;
    public gamepassword: string;
    public gameserverip: string;
    public gamestarttime: number;
    public gametype: number;
    public itemoncursor: boolean;
    public ladder: boolean;
    public ping: number;
    public fps: number;
    public playertype: number;
    public realm: string;
    public realmshort: string;
    public mercrevivecost: number;
    public chickenhp: number;
    public chickenmp: number;
    public quitonhostile: boolean;
    public blockKeys: boolean;
    public blockMouse: boolean;
    public gameReady: boolean;
    /** The profile name currently being used. */
    public static profile: string;
    public nopickup: boolean;
    public pid: number;
    // TODO: Verify not number[]
    public screensize: number;

    public static windowtitle: string;
    public ingame: boolean;
    public quitonerror: boolean;
    public maxgametime: number;

    public getNext(szNameOrClassId: string | number, dwMode: number): Unit;

    public cancel(): void;

    public repair(): boolean;

    public useMenu(menuItem: number): boolean;

    public interact(destId?: number): boolean;

    public getItem(nameOrClassId: string | number, mode: number, nUnitId: number): Unit;

    // TODO: Verify returns Unit (linked list) and not Unit[]
    public getItems(): Unit;

    public getMerc(): Unit;

    public getMercHP(): number;

    // TODO: Check overload extended is number and not bool.
    public getSkill(handOrSkillId: number, extended: number): number;

    public getParent(): Unit | string;

    public overhead(message: Object): void;

    public revive(): void;

    public getFlags(): number;

    public getStat(stat: number, subIndex: number): number;

    // TODO: Check returns boolean
    public getState(state: number): boolean;

    public getPrice(npc: Unit | number, buySell: number, difficulty?: number): number;

    public getEnchant(enchant: number): boolean;

    public setSkill(skill: string | number, hand: number, item?: Unit): boolean;

    public move(x?: number, y?: number): void;

    public getQuest(act: number, quest: number): number;

    public getMinionCount(type: number): number;

    public getRepairCost(npcClassId: number): number;

    public getItemCost(mode: number, npc: Unit | number, difficulty?: number): number;
}

declare class me extends Unit {}
