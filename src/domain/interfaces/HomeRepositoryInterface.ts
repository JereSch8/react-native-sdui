import { DataComponents } from "../models/DataComponents";

export interface HomeRepositoryInterface {
    getUI(): Promise<DataComponents>
}