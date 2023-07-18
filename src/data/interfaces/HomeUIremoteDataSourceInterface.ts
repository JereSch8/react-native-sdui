import { Components } from "../../domain/models/Components";
import { UpdateUI } from "../models/UpdateUI";

export interface HomeUIremoteDataSourceInterface {
    getComponents(): Promise<Components>
    getVersion(): Promise<string>
    getUpdateUI(): Promise<UpdateUI>
}