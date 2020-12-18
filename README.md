
# z2bs
z2 is a framework for developing Diablo 2 bots on the [D2BS](https://github.com/noah-/d2bs) system.

**This is not a functioning Diablo 2 bot.** 

This is intended to aid in the development of bots and scripts by providing defining the functions and classes exposed in the D2BS system, while providing usual benefits of a typed language.

## Building
- Clone: `git clone git@github.com:zmanowar/z2.git`
- Edit: `rollup.config.js` to point to your correct d2bs installation.
- Run: `npm run build`
- Configure: D2BS' entry point to `example.dbj.js`

## Types: [z2/types](https://github.com/zmanowar/z2/tree/master/z2/types)
Exposes global functions and classes and attempts to keep the same method signatures.

**d2bs** *cpp*:

    public int getPrice ( Unit npc, int buysell )
    public int getPrice ( int npcId, int buysell )
    public int getPrice ( Unit npc, int buysell, int difficulty )
    public int getPrice ( int npcId, int buysell, int difficulty )
    public bool getEnchant ( int nEnchant )

**z2** *ts*:

    public getPrice(npc: Unit | number, buySell: number, difficulty?: number): number;
    public getEnchant(enchant: number): boolean;

## Example Bot
An example bot is provided with very limited functionality ([example.dbj.ts](https://github.com/zmanowar/z2/blob/master/z2/example.dbj.ts)). The only functionality in this script is to click on the single player menu button.

The main heartbeat thread and event listeners are used in the base bot ([bot/bot.ts](https://github.com/zmanowar/z2/blob/master/z2/bot/bot.ts)). Other supplemental modules and classes are contained within the [bot/](https://github.com/zmanowar/z2/tree/master/z2/bot) directory.
