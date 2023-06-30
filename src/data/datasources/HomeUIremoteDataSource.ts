import { DataComponents } from '../../domain/models/DataComponents';
import { HomeClientInterface } from '../interfaces/HomeClientInterface';
import { HomeUIremoteDataSourceInterface } from '../interfaces/HomeUIremoteDataSourceInterface';

export class HomeUIremoteDataSource implements HomeUIremoteDataSourceInterface {

    readonly client: HomeClientInterface

    constructor(client: HomeClientInterface) {
        this.client = client
    }

    async getComponents(): Promise<DataComponents> {
        return this.client.fetchUI()
    }

}