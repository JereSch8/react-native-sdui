import { Components } from "../../domain/models/Components"
import { WidgetsData } from "../../domain/models/WidgetsData"

export interface HomeClientInterface {
    fetchUI(): Promise<Components>
    fetchData(): Promise<WidgetsData>
}