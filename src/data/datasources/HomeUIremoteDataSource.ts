import { Components } from '../../domain/models/Components';
import { HomeClientInterface } from '../interfaces/HomeClientInterface';
import { HomeUIremoteDataSourceInterface } from '../interfaces/HomeUIremoteDataSourceInterface';

export class HomeUIremoteDataSource implements HomeUIremoteDataSourceInterface {

    readonly client: HomeClientInterface

    constructor(client: HomeClientInterface) {
        this.client = client
    }
    getVersion(): Promise<string> {
        return this.client.fetchVersionUI()
    }

    getComponents(): Promise<Components> {
        return this.client.fetchUI()
    }
}