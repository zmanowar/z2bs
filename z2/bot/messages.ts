export module messages {
    interface IMessage {
        msg: string | Unit;
        color: number;
        tooltip: string;
        trigger: string;
    }

    export const printToConsole = (msg: string, handle: number, color?: number, tooltip?: string, trigger?: string) => {
        const message = {
            msg: msg,
            color: color || 0,
            tooltip: tooltip || '',
            trigger: trigger || '',
        } as IMessage;
        sendCopyData(
            null,
            handle,
            0,
            JSON.stringify({
                profile: me.profile,
                func: 'printToConsole',
                args: [JSON.stringify(message)],
            }),
        );
    };
}
