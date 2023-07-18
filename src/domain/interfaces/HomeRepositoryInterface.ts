import { Components } from "../models/Components";
import { UpdateUI } from "../../data/models/UpdateUI";
import { WidgetsData } from "../models/WidgetsData";
import { WidgetsUpdate } from '../models/WidgetsUpdate';

export interface HomeRepositoryInterface {
    getUI(): Promise<Components>
    getDataUI(): Promise<WidgetsData>
    getUpdateUI(): Promise<WidgetsUpdate>
}