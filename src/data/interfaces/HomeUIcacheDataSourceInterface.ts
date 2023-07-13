import { Components } from "../../domain/models/Components";

export interface HomeUIcacheDataSourceInterface {
    saveUICache(components: Components) : void
    getUIFromCache(): Promise<Components>
}