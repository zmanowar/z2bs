import { Room } from './room.global';
import { Unit } from './me.global';
import { Party } from './party.global';
import { PresetUnit } from './presetunit.global';
import { Area } from './area.global';
import { Control } from './control.global';
import { Folder } from './folder.global';

export const getUnit = (type: number, nameOrClassId: string | number, mode: number, nUnitId: number): Unit => {
    return null;
};

export const getPath = (
    area: number,
    x: number,
    y: number,
    dstX: number,
    dstY: number,
    reductionType: number,
    reject?: boolean,
    reduce?: boolean,
    mutate?: number,
): Object[] => {
    return null;
};

export const getCollision = (area: number, x: number, y: number): number => {
    return null;
};

export const getMercHp = (): number => {
    return null;
};

export const getCursorType = (): number => {
    return null;
};

export const getSkillByName = (skillName: string): number => {
    return null;
};

export const getSkillById = (skillId: number): string => {
    return null;
};

export const getlocaleString = (localId: number): string => {
    return null;
};

export const getTextSize = (_string: string, font: number, asObject: boolean): number => {
    return null;
};

export const getThreadPriority = (): number => {
    return null;
};

export const getUIFlag = (UUID: number): boolean => {
    return null;
};

export const getTradeInfo = (mode: number): number => {
    return null;
};

export const getWaypoint = (waypointId: number): boolean => {
    return null;
};

export const getScript = (currentScript?: number | string): D2BSScript => {
    return null;
};

export const getRoom = (area: number, x?: number, y?: number): Room => {
    return null;
};

export const getParty = (name: string | number | Unit): Party => {
    return null;
};

export const getPresetUnit = (levelId: number, type: number, classId: number): PresetUnit => {
    return null;
};

export const getPresetUnits = (levelId: number, type: number, classId: number): PresetUnit[] => {
    return null;
};

export const getArea = (area?: number): Area => {
    return null;
};

export const getBaseStat = (
    baseStatOrTableName: string | number,
    classId: number,
    statNameOrId: string | number,
): string => {
    return null;
};

export const getControl = (type: number, x: number, y: number, xSize: number, ySize: number): Control => {
    return null;
};

export const getPlayerFlag = (firstUnitId: number, secondUnitId: number, flag: number): boolean => {
    return null;
};

export const getTickCount = (): number => {
    return null;
};

export const getInteractedNPC = (): Unit => {
    return null;
};

export const print = (): void => {};

export const delay = (delay: number): void => {};

export const load = (file: string, ...args: any): D2BSScript => {
    return null;
};

export const isIncluded = (file: string): boolean => {
    return null;
};

export const include = (file: string): boolean => {
    return null;
};

export const stop = (stop: number | boolean): void => {};

export const rand = (low: number, high: number): number => {
    return null;
};

export const copy = (text: string): void => {};

export const paste = (): string => {
    return null;
};

export const sendCopyData = (
    windowClassName: string | number,
    windowName: string,
    modeId: number,
    data: string,
): number => {
    return null;
};

export const sendDDE = (mode: number, pszDDEServer: string, pszTopic: string, pszItem: string): string => {
    return null;
};

export const keystate = (vKey: number): boolean => {
    return null;
};

export const addEventListener = (event: string, eventHandler: Function): void => {};

export const removeEventListener = (event: string, eventHandler: Function): void => {};

export const clearEvent = (event: string): void => {};

export const clearAllEvents = (): void => {};

export const js_strict = (setStrictFlag?: boolean): boolean | void => {
    return null;
};

// TODO: Check that this takes in a number and not a boolean.
export const version = (print: number): string => {
    return null;
};

// TODO
export const scriptBroadcast = (...args: any): void => {
    return null;
};

export const sqlite_version = (): string => {
    return null;
};

export const sqlite_memusage = (): number => {
    return null;
};

export const dopen = (name: string): Folder => {
    return null;
};

export const debugLog = (...args: any) => {
    return null;
};

export const showConsole = (): void => {};

export const hideConsole = (): void => {};

export const login = (profile?: string): void => {};

export const selectCharacter = (profile: string): boolean => {
    return null;
};

export const createGame = (name: string, password: string, difficulty: number): void => {};

export const joinGame = (name: string, password: string): void => {};

export const addProfile = (
    profile: string,
    mode: string,
    gateway: string,
    username: string,
    password: string,
    charname: string,
    singlePlayerDifficulty: number,
): void => {};

export const getLocation = (): number => {
    return null;
};

export const loadMpq = (path: string): void => {};

export const submitItem = (): boolean => {
    return null;
};

export const getMouseCoords = (flag: boolean, _return: boolean): number[] => {
    return null;
};

export const copyUnit = (other: Unit): Unit => {
    return null;
};

// TODO:  Note be careful with this one, the params are pretty funky and heavily overloaded.
export const clickMap = (
    clickType: number,
    shift: number | boolean,
    toClickX: number | Unit,
    toClickY?: number,
): boolean => {
    return null;
};

export const acceptTrade = (action?: number): boolean => {
    return null;
};

export const tradeOk = (): void => {};

export const getDialogLines = (): object[] => {
    return null;
};

export const beep = (beepId: number): void => {};

// TODO: Note be careful with this one, the params are pretty funky and heavily overloaded.
export const clickItem = (clickType: number, itemOrX: Unit | number, y: number, location: number): void => {};

// TODO: Note be careful with this one, the params are pretty funky and heavily overloaded.
// TODO: Figure out how to properly represent these.
export const getDistance = (toUnit: Unit, fromUnit?: Unit): number => {
    return null;
};

export const gold = (gold: number, mode: number): void => {};

export const checkCollision = (unitA: Unit, unitB: Unit, bitMask: number): number => {
    return null;
};

export const playSound = (soundId: number): boolean => {
    return null;
};

export const quit = (): void => {};

export const quitGame = (): void => {};

export const say = (...args: any): boolean => {
    return null;
};

export const clickParty = (player: Party, mode: number): boolean => {
    return null;
};

export const weaponSwitch = (dummy: number): number => {
    return null;
};

export const transmute = (): void => {};

export const useStatPoint = (skillIdOrStatType: number, count: number): void => {};

export const takeScreenshot = (): void => {};

export const moveNPC = (npc: Unit, x: number, y: number): boolean => {
    return null;
};

export const getPacket = (...args: any): boolean => {
    return null;
};

export const sendPacket = (...args: any): boolean => {
    return null;
};

export const getIP = (): string => {
    return null;
};

// TODO: These next automap functions are loose. Check'em.
export const screenToAutomap = (x: number, y: number): Object => {
    return null;
};

export const automapToScreen = (x: number, y: number): Object => {
    return null;
};

export const md5 = (_string: string): string => {
    return null;
};

export const sha1 = (_string: string): string => {
    return null;
};

export const sha256 = (_string: string): string => {
    return null;
};

export const sha384 = (_string: string): string => {
    return null;
};

export const sha512 = (_string: string): string => {
    return null;
};

export const md5_file = (file: string): string => {
    return null;
};

export const sha1_file = (file: string): string => {
    return null;
};

export const sha256_file = (file: string): string => {
    return null;
};

export const sha384_file = (file: string): string => {
    return null;
};

export const sha512_file = (file: string): string => {
    return null;
};
