export module messages {
    interface IMessage {
            msg: string | Unit;
            color?: number;
            tooltip?: string;
            trigger?: string;
        }

    export const printTo = (handle: number, func: string, message: IMessage) => {
        sendCopyData(
            null,
            handle,
            0,
            JSON.stringify({
                profile: me.profile,
                func: func,
                args: [JSON.stringify(message)],
            }),
        );
    };

    export const printToConsole = (msg: string, handle: number, color?: number, tooltip?: string, trigger?: string) => {
        printTo(handle, 'printToConsole', { msg, color, tooltip, trigger } as IMessage);
    };

    export const printToItemLog = (item: Unit, handle: number): void => {
        printTo(handle, 'printToItemLog', { msg: item } as IMessage);
    };
}