import { Components } from "../../domain/models/Components"
import { UpdateUI } from "../models/UpdateUI"
import { WidgetsData } from "../../domain/models/WidgetsData"

export interface HomeClientInterface {
    fetchUI(): Promise<Components>
    fetchData(): Promise<WidgetsData>
    fetchVersionUI(): Promise<string>
    updateUI(): Promise<UpdateUI>
}