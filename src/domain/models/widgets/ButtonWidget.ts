import { Actions } from "../Actions";

export interface ButtonWidget {
    type: 'button';
    title: string;
    action?: Actions;
}
