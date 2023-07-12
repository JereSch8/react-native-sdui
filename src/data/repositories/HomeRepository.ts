import { HomeRepositoryInterface } from '../../domain/interfaces/HomeRepositoryInterface';
import { Components } from '../../domain/models/Components';
import { WidgetsData } from '../../domain/models/WidgetsData';
import { HomeDatacacheDataSourceInterface } from '../interfaces/HomeDatacacheDataSourceInterface';
import { HomeDataremoteDataSourceInterface } from '../interfaces/HomeDataremoteDataSourceInterface';
import { HomeUIcacheDataSourceInterface } from '../interfaces/HomeUIcacheDataSourceInterface';
import { HomeUIremoteDataSourceInterface } from '../interfaces/HomeUIremoteDataSourceInterface';
import { HomeCache } from '../cache/HomeCache';

export class HomeRepository implements HomeRepositoryInterface {

    private readonly homeUIcacheDataSource: HomeUIcacheDataSourceInterface
    private readonly homeUIremoteDataSource: HomeUIremoteDataSourceInterface
    // private readonly homeDataCacheDataSource: HomeDatacacheDataSourceInterface
    private readonly homeDataRemoteDataSource: HomeDataremoteDataSourceInterface

    constructor(
        homeUIcacheDataSource: HomeUIcacheDataSourceInterface,
        homeUIremoteDataSource: HomeUIremoteDataSourceInterface,
        // homeDataCacheDataSource: HomeDatacacheDataSourceInterface,
        homeDataRemoteDataSource: HomeDataremoteDataSourceInterface
    ) {
        this.homeUIcacheDataSource = homeUIcacheDataSource
        this.homeUIremoteDataSource = homeUIremoteDataSource
        // this.homeDataCacheDataSource = homeDataCacheDataSource
        this.homeDataRemoteDataSource = homeDataRemoteDataSource
    }
    async getDataUI(): Promise<WidgetsData> {
        return this.homeDataRemoteDataSource.getWidgetData()
    }

    async getUI(): Promise<Components> {
        const componentsCache = await this.homeUIcacheDataSource.getUIFromCache()

        if (componentsCache.components.length > 0) {
            return componentsCache
        }

        const components = await this.homeUIremoteDataSource.getComponents()
        this.homeUIcacheDataSource.saveUICache(components)

        return components
    }
}