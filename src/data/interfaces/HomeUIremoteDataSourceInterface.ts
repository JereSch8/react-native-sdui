import { DataComponents } from "../../domain/models/DataComponents";

export interface HomeUIremoteDataSourceInterface {
    getComponents(): Promise<DataComponents>
}