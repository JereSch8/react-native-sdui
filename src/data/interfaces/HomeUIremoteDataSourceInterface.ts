import { Components } from "../../domain/models/Components";

export interface HomeUIremoteDataSourceInterface {
    getComponents(): Promise<Components>
}