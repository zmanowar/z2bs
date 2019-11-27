declare function getUnit(type: number, nameOrClassId: string | number, mode: number, nUnitId: number): Unit;

declare function getPath(
    area: number,
    x: number,
    y: number,
    dstX: number,
    dstY: number,
    reductionType: number,
    reject?: boolean,
    reduce?: boolean,
    mutate?: number,
): Object[];

declare function getCollision(area: number, x: number, y: number): number;

declare function getMercHp(): number;

declare function getCursorType(): number;

declare function getSkillByName(skillName: string): number;

declare function getSkillById(skillId: number): string;

declare function getlocaleString(localId: number): string;

declare function getTextSize(_string: string, font: number, asObject: boolean): number;

declare function getThreadPriority(): number;

declare function getUIFlag(UUID: number): boolean;

declare function getTradeInfo(mode: number): number;

declare function getWaypoint(waypointId: number): boolean;

declare function getScript(currentScript?: number | string): D2BSScript;

declare function getRoom(area: number, x?: number, y?: number): Room;

declare function getParty(name: string | number | Unit): Party;

declare function getPresetUnit(levelId: number, type: number, classId: number): PresetUnit;

declare function getPresetUnits(levelId: number, type: number, classId: number): PresetUnit[];

declare function getArea(area?: number): Area;

declare function getBaseStat(
    baseStatOrTableName: string | number,
    classId: number,
    statNameOrId: string | number,
): string;

declare function getControl(type: number, x: number, y: number, xSize: number, ySize: number): Control;

declare function getPlayerFlag(firstUnitId: number, secondUnitId: number, flag: number): boolean;

declare function getTickCount(): number;

declare function getInteractedNPC(): Unit;

declare function print(): void;

declare function delay(delay: number): void;

declare function load(file: string, ...args: any): D2BSScript;

declare function isIncluded(file: string): boolean;

declare function include(file: string): boolean;

declare function stop(stop: number | boolean): void;

declare function rand(low: number, high: number): number;

declare function copy(text: string): void;

declare function paste(): string;

declare function sendCopyData(
    windowClassName: string | number,
    windowName: string | number,
    modeId: number,
    data: string,
): number;

declare function sendDDE(mode: number, pszDDEServer: string, pszTopic: string, pszItem: string): string;

declare function keystate(vKey: number): boolean;

declare function addEventListener(event: string, eventHandler: Function): void;

declare function removeEventListener(event: string, eventHandler: Function): void;

declare function clearEvent(event: string): void;

declare function clearAllEvents(): void;

declare function js_strict(setStrictFlag?: boolean): boolean | void;

// TODO: Check that this takes in a number and not a boolean.
declare function version(print: number): string;

// TODO
declare function scriptBroadcast(...args: any): void;

declare function sqlite_version(): string;

declare function sqlite_memusage(): number;

declare function dopen(name: string): Folder;

declare function debugLog(...args: any);

declare function showConsole(): void;

declare function hideConsole(): void;

declare function login(profile?: string): void;

declare function selectCharacter(profile: string): boolean;

declare function createGame(name: string, password: string, difficulty: number): void;

declare function joinGame(name: string, password: string): void;

declare function addProfile(
    profile: string,
    mode: string,
    gateway: string,
    username: string,
    password: string,
    charname: string,
    singlePlayerDifficulty: number,
): void;

declare function getLocation(): number;

declare function loadMpq(path: string): void;

declare function submitItem(): boolean;

declare function getMouseCoords(flag: boolean, _return: boolean): number[];

declare function copyUnit(other: Unit): Unit;

// TODO:  Note be careful with this one, the params are pretty funky and heavily overloaded.
declare function clickMap(
    clickType: number,
    shift: number | boolean,
    toClickX: number | Unit,
    toClickY?: number,
): boolean;

declare function acceptTrade(action?: number): boolean;

declare function tradeOk(): void;

declare function getDialogLines(): object[];

declare function beep(beepId: number): void;

// TODO: Note be careful with this one, the params are pretty funky and heavily overloaded.
declare function clickItem(clickType: number, itemOrX: Unit | number, y: number, location: number): void;

// TODO: Note be careful with this one, the params are pretty funky and heavily overloaded.
// TODO: Figure out how to properly represent these.
declare function getDistance(toUnit: Unit, fromUnit?: Unit): number;

declare function gold(gold: number, mode: number): void;

declare function checkCollision(unitA: Unit, unitB: Unit, bitMask: number): number;

declare function playSound(soundId: number): boolean;

declare function quit(): void;

declare function quitGame(): void;

declare function say(...args: any): boolean;

declare function clickParty(player: Party, mode: number): boolean;

declare function weaponSwitch(dummy: number): number;

declare function transmute(): void;

declare function useStatPoint(skillIdOrStatType: number, count: number): void;

declare function takeScreenshot(): void;

declare function moveNPC(npc: Unit, x: number, y: number): boolean;

declare function getPacket(...args: any): boolean;

declare function sendPacket(...args: any): boolean;

declare function getIP(): string;

// TODO: These next automap functions are loose. Check'em.
declare function screenToAutomap(x: number, y: number): Object;

declare function automapToScreen(x: number, y: number): Object;

declare function md5(_string: string): string;

declare function sha1(_string: string): string;

declare function sha256(_string: string): string;

declare function sha384(_string: string): string;

declare function sha512(_string: string): string;

declare function md5_file(file: string): string;

declare function sha1_file(file: string): string;

declare function sha256_file(file: string): string;

declare function sha384_file(file: string): string;

declare function sha512_file(file: string): string;

/** Prints to console. */
declare function print(...args: any): void;
