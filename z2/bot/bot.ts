import { messages } from './message';
import { Heartbeat } from './heartbeat';

export class Bot {
    public handle: number;
    public gameInfo: any;
    public heart: Heartbeat;

    constructor() {
        addEventListener('copydata', this.receiveCopyData);
        addEventListener('scriptmsg', this.scriptMsgEvent);
    }

    public start = (): void => {

    };

    private heartbeat = (): void => {
        messages.debug('Starting heart for ' + me.profile + ' (' + this.handle + ')');
        this.heart = new Heartbeat(this.handle);
        this.heart.start();
    }

    private receiveCopyData = (mode: number, msg: string): void => {
        if (msg === 'Handle') {
            this.handle = mode;
            this.heartbeat();
            this.start();
        } else {
            switch (mode) {
                case 2: // Game Info
                    this.gameInfo = JSON.parse(msg);
                    break;
                case 3: //Game Request
                    break;
                case 4: //Heartbeat Ping
                    print('ping');
                    break;
                default:
                    messages.debug('Unknown mode (' + mode + '): ' + msg);
                    break;
            }
        }
    };

    private scriptMsgEvent = (...args: any): void => {
        debugLog('Script Message: ', args);
    };

    public printToConsole = (msg: string, color?: number, tooltip?: string, trigger?: string) => {
        messages.printToConsole(msg, this.handle, color, tooltip, trigger);
    };
}

export function main(wait: boolean = true) {
    while (wait && !me.gameReady) {
        delay(10);
    }
}
