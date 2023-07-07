import { Components } from "../models/Components";
import { WidgetsData } from "../models/WidgetsData";

export interface HomeRepositoryInterface {
    getUI(): Promise<Components>
    getDataUI(): Promise<WidgetsData>
}