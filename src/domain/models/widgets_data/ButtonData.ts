import { Actions } from "../Actions";
import { TypeComponent } from "../TypeComponent";

export interface ButtonData {
    type: TypeComponent.BUTTON;
    title: string;
    action?: Actions;
}
