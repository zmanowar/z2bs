/* 
    Also known as RosterUnit
*/
declare class Party {
    public x: number;
    public y: number;
    public area: number;
    public gid: number;
    public life: number;
    public partyflag: number;
    public partyid: number;
    public name: string;
    public classid: number;
    public level: number;

    public getNext(): void;
}
