import { Bot } from "./bot/bot";

class Z2Bot extends Bot {
    public start = (): void => {
        print('Starting: ' + this.handle);
        this.printToConsole('Starting...');
    };
}

const main = (): void => {
    print('Loading Bot');
    let x = new Z2Bot();
};
