import { DataComponents } from "../../domain/models/DataComponents"

export interface HomeClientInterface {
    fetchUI(): Promise<DataComponents>
    fetchData(): Promise<string>
}