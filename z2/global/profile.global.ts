export enum ProfileType {
    'singlePlayer',
    'battleNet',
    'openBattleNet',
    'tcpIpHost',
    'tcpIpJoin',
}

export class Profile {
    public type: ProfileType;
    public ip: string;
    public username: string;
    // TODO: Verify what this actually returns. Seems like a string.
    public gateway: string;
    public difficulty: number;
    public maxLoginTime: number;
    public maxCharacterSelectTime: number;

    public Profile(
        profileNameOrType: string | ProfileType,
        charOrAccountName: string,
        difficultyOrPassOrIp: number | string,
        charName?: string,
        gateway?: string,
    ) {}

    public login = (): void => {};
}
