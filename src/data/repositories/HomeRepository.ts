import { HomeRepositoryInterface } from '../../domain/interfaces/HomeRepositoryInterface';
import { DataComponents } from '../../domain/models/DataComponents';
import { HomeDatacacheDataSourceInterface } from '../interfaces/HomeDatacacheDataSourceInterface';
import { HomeDataremoteDataSourceInterface } from '../interfaces/HomeDataremoteDataSourceInterface';
import { HomeUIcacheDataSourceInterface } from '../interfaces/HomeUIcacheDataSourceInterface';
import { HomeUIremoteDataSourceInterface } from '../interfaces/HomeUIremoteDataSourceInterface';

export class HomeRepository implements HomeRepositoryInterface {

    // private readonly homeUIcacheDataSource: HomeUIcacheDataSourceInterface
    private readonly homeUIremoteDataSource: HomeUIremoteDataSourceInterface
    // private readonly homeDataCacheDataSource: HomeDatacacheDataSourceInterface
    // private readonly homeDataRemoteDataSource: HomeDataremoteDataSourceInterface

    constructor(
        // homeUIcacheDataSource: HomeUIcacheDataSourceInterface,
        homeUIremoteDataSource: HomeUIremoteDataSourceInterface,
        // homeDataCacheDataSource: HomeDatacacheDataSourceInterface,
        // homeDataRemoteDataSource: HomeDataremoteDataSourceInterface
    ) {
        // this.homeUIcacheDataSource = homeUIcacheDataSource
        this.homeUIremoteDataSource = homeUIremoteDataSource
        // this.homeDataCacheDataSource = homeDataCacheDataSource
        // this.homeDataRemoteDataSource = homeDataRemoteDataSource
    }

    async getUI(): Promise<DataComponents> {
        return this.homeUIremoteDataSource.getComponents()
    }

}