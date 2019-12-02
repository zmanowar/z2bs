import { messages } from './message';

export module Menu {
    /**
     * Clicks on a control (button/element).
     * @param button The control to click. 
     */
    export const click = (button: Control): boolean => {
        try {
            button.click();
            return true;
        } catch {
            messages.error(new Error('Could not click control'));
            return false;
        }
    };
}
