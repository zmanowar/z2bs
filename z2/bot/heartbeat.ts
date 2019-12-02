export class Heartbeat {
    /** Handle for the running bot. */
    public handle: number;

    constructor(handle: number) {
        this.handle = handle;
    }

    /**
     * Sends a ping to D2BS to notify the bot
     * is still running.
     */
    private beat = (): void => {
        sendCopyData(null, this.handle, 0xbbbb, JSON.stringify({
            profile: me.profile,
            func: 'heartBeat',
            args: []
        }));
    }

    /**
     * Sends pings every 1000ms to D2BS to keep
     * it from thinking the bot has stalled.
     */
    public start = (): void => {
        setInterval(this.beat, 100);
    }
}