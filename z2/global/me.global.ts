export class Unit {
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
    public profile: string;
    public nopickup: boolean;
    public pid: number;
    // TODO: Verify not number[]
    public screensize: number;
    public windowtitle: string;
    public ingame: boolean;
    public quitonerror: boolean;
    public maxgametime: number;

    public getNext = (szNameOrClassId: string | number, dwMode: number): Unit => {
        return null;
    };

    public cancel = (): void => {};

    public repair = (): boolean => {
        return null;
    };

    public useMenu = (menuItem: number): boolean => {
        return null;
    };

    public interact = (destId?: number): boolean => {
        return null;
    };

    public getItem = (nameOrClassId: string | number, mode: number, nUnitId: number): Unit => {
        return null;
    };

    // TODO: Verify returns Unit (linked list) and not Unit[]
    public getItems = (): Unit => {
        return null;
    };

    public getMerc = (): Unit => {
        return null;
    };

    public getMercHP = (): number => {
        return null;
    };

    // TODO: Check overload extended is number and not bool.
    public getSkill = (handOrSkillId: number, extended: number): number => {
        return null;
    };

    public getParent = (): Unit | string => {
        return null;
    };

    public overhead = (message: Object): void => {};

    public revive = (): void => {};

    public getFlags = (): number => {
        return null;
    };

    public getStat = (stat: number, subIndex: number): number => {
        return null;
    };

    // TODO: Check returns boolean
    public getState = (state: number): boolean => {
        return null;
    };

    public getPrice = (npc: Unit | number, buySell: number, difficulty?: number): number => {
        return null;
    };

    public getEnchant = (enchant: number): boolean => {
        return null;
    };

    public setSkill = (skill: string | number, hand: number, item?: Unit): boolean => {
        return null;
    };

    public move = (x?: number, y?: number): void => {};

    public getQuest = (act: number, quest: number): number => {
        return null;
    };

    public getMinionCount = (type: number): number => {
        return null;
    };

    public getRepairCost = (npcClassId: number): number => {
        return null;
    };

    public getItemCost = (mode: number, npc: Unit | number, difficulty?: number): number => {
        return null;
    };
}

export class Me extends Unit {}
