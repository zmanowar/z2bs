import { messages } from './messages';

export class Bot {
    public handle: number;

    constructor() {
        addEventListener('copydata', this.receiveCopyData);
        addEventListener('scriptmsg', this.scriptMsgEvent);
        print('Added listeners');
    }

    public start = (): void => {};

    private receiveCopyData = (mode: number, msg: string): void => {
        switch (msg) {
            case 'Handle':
                this.handle = mode;
                this.start();
                break;
        }
    };

    private scriptMsgEvent = (...args: any): void => {
        debugLog('Script Message: ', args);
    };

    public printToConsole = (msg: string, color?: number, tooltip?: string, trigger?: string) => {
        messages.printToConsole(msg, this.handle, color, tooltip, trigger);
    };
}
