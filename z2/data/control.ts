import { messages } from '../bot/message';

export const Controls = {
    singlePlayer: {
        type: -1,
        x: 264,
        y: 324,
        xsize: 272,
        ysize: 35,
    },
};

/**
 * 
 * @param name Name of the Control to retrieve from the Controls object.
 */
export const getControlx = (name: string): Control => {
    const button: Partial<Control> = Controls[name];
    if (!button) {
        messages.error(new Error('Button undefined (' + name + '). '));
    }

    const control = getControl(button.type, button.x, button.y, button.xsize, button.ysize);
    if (!control) {
        messages.error(new Error('Control undefined (' + Object.values(button).join(',') + '). '));
    }
    return control;
};
