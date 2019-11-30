import { Bot } from './bot/bot';

class Z2Bot extends Bot {
    public start = (): void => {
        print('Starting: ' + this.handle);
        this.printToConsole('Starting...');
    };
}

//In other bots you may see `function main()`
//Technically this is within the iife `main` function.
print('Loading Bot');
const mainBot = new Z2Bot();

// This is gross, but it's how the entry scripts prefer to be handled.
// I'll be keeping it like this until I can figure out a better way to wait
// for copy data.

while (true) { // eslint-disable-line
    delay(10);
}
