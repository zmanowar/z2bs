export module messages {
    interface IMessage {
        msg: string | Unit;
        color: number;
        tooltip: string;
        trigger: string;
    }

    /**
     * Prints message to the D2Bot Manager's console.
     * @param msg Message to be sent.
     * @param handle HWND of window to be sent to.
     * @param color ID of color.
     * @param tooltip Unknown
     * @param trigger Unknown
     */
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

    /**
     * Prints arguments to in-game console and attempts to log 
     * it to the Manager's console.
     * @param args Data to be output to the in-game console.
     */
    export const debug = (...args: any): boolean => {
        if (!me.debug) return false;
        const message = messages.log(...args);
        if (me['handle']) {
            messages.printToConsole('DEBUG: ' + message, me.handle, 3);
        }
        return true;
    };

    /**
     * Throws the error, logs it to the in-game console and attempts to also
     * print it to the Manager's console.
     * @param error Error to throw and log to console if the handle can be gotten
     * @param handle (Optional) HWND to emit the error to.
     */
    export const error = (error: Error, handle?: number): void => {
        const message = messages.log(error.message);

        if (!handle && me['handle']) {
            messages.printToConsole('ERROR: ' + message, me.handle, 7);
        }
        throw error;
    };

    /**
     * Outputs object agnostic data to the in-game console.
     * @param args Data to be output to the in-game console.
     */
    export const log = (...args: any): string => {
        let str = '';
        args.forEach(argument => {
            switch (typeof argument) {
                case 'string':
                    print(argument);
                    str += argument;
                    break;
                case 'object':
                    try {
                        const obj = JSON.stringify(argument);
                        print(obj);
                        str += argument;
                    } catch {
                        print('Failed to JSON.Stringify');
                        break;
                    }
                    break;
                default:
                    str += argument;
                    print(argument);
            }
        });
        return str;
    };
}
