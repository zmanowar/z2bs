import { Bot, main } from './bot/bot';
import { Menu } from './bot/menu';
import { messages } from './bot/message';
import { getControlx } from './data/control';

me.debug = true;

class Z2Bot extends Bot {
    public start = (): void => {
        setInterval(this.mainLoop, 100);
        messages.log('Starting main loop.');
    };
    
    public mainLoop = (): void => {
        Menu.click(getControlx('singlePlayer'));
    }
}

//In other bots you may see `function main()`
//Technically this is within the iife `main` function.
const mainBot = new Z2Bot();

main();
