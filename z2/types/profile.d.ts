declare enum ProfileType {
    'singlePlayer',
    'battleNet',
    'openBattleNet',
    'tcpIpHost',
    'tcpIpJoin',
}

declare class Profile {
    public type: ProfileType;
    public ip: string;
    public username: string;
    // TODO: Verify what this actually returns. Seems like a string.
    public gateway: string;
    public difficulty: number;
    public maxLoginTime: number;
    public maxCharacterSelectTime: number;

    public constructor(
        profileNameOrType: string | ProfileType,
        charOrAccountName: string,
        difficultyOrPassOrIp: number | string,
        charName?: string,
        gateway?: string,
    );

    public login(): void;
}
