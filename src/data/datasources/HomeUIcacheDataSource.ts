import { Components } from '../../domain/models/Components';
import { HomeUIcacheDataSourceInterface } from '../interfaces/HomeUIcacheDataSourceInterface';
import { HomeCacheInterface } from '../interfaces/HomeCacheInterface';


export class HomeUICacheDataSource implements HomeUIcacheDataSourceInterface {

    readonly cache: HomeCacheInterface

    constructor(cache: HomeCacheInterface) {
        this.cache = cache
    }

    async saveUICache(components: Components) {
        const isSaved = await this.cache.save(components)
        if (!isSaved) this.cache.save(components)
    }

    async getUIFromCache(): Promise<Components> {
        return await this.cache.get() || { components: [] }
    }

}