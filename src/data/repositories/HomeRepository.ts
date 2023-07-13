import { HomeRepositoryInterface } from '../../domain/interfaces/HomeRepositoryInterface';
import { Components } from '../../domain/models/Components';
import { WidgetsData } from '../../domain/models/WidgetsData';
import { HomeDataremoteDataSourceInterface } from '../interfaces/HomeDataremoteDataSourceInterface';
import { HomeUIcacheDataSourceInterface } from '../interfaces/HomeUIcacheDataSourceInterface';
import { HomeUIremoteDataSourceInterface } from '../interfaces/HomeUIremoteDataSourceInterface';

export class HomeRepository implements HomeRepositoryInterface {

    private readonly homeUIcacheDataSource: HomeUIcacheDataSourceInterface
    private readonly homeUIremoteDataSource: HomeUIremoteDataSourceInterface
    private readonly homeDataRemoteDataSource: HomeDataremoteDataSourceInterface

    constructor(
        homeUIcacheDataSource: HomeUIcacheDataSourceInterface,
        homeUIremoteDataSource: HomeUIremoteDataSourceInterface,
        homeDataRemoteDataSource: HomeDataremoteDataSourceInterface
    ) {
        this.homeUIcacheDataSource = homeUIcacheDataSource
        this.homeUIremoteDataSource = homeUIremoteDataSource
        this.homeDataRemoteDataSource = homeDataRemoteDataSource
    }
    async getDataUI(): Promise<WidgetsData> {
        return this.homeDataRemoteDataSource.getWidgetData()
    }

    async getUI(): Promise<Components> {
        const componentsCache = await this.homeUIcacheDataSource.getUIFromCache()

        if (componentsCache.components.length > 0) {
            const currentVersionFromServer = await this.homeUIremoteDataSource.getVersion()

            if (currentVersionFromServer === componentsCache.version) {
                return componentsCache
            }

            const components = await this.homeUIremoteDataSource.getComponents()
            this.homeUIcacheDataSource.saveUICache(components)

            return components
        }

        const components = await this.homeUIremoteDataSource.getComponents()
        this.homeUIcacheDataSource.saveUICache(components)

        return components
    }
}