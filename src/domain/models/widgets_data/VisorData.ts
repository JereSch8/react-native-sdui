import { TypeComponent } from "../TypeComponent";

export interface VisorData {
    type: TypeComponent.VISOR;
    currentAmount: string,
    monthlyAmount: string,
    spentAmount: string,
}