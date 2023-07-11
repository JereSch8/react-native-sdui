import { WidgetsData } from '../../domain/models/WidgetsData';
import { HomeClientInterface } from '../interfaces/HomeClientInterface';
import { HomeDataremoteDataSourceInterface } from '../interfaces/HomeDataremoteDataSourceInterface';

export class HomeDataremoteDataSource implements HomeDataremoteDataSourceInterface {

    readonly client: HomeClientInterface

    constructor(client: HomeClientInterface) {
        this.client = client
    }

    async getWidgetData(): Promise<WidgetsData> {
        return this.client.fetchData()
    }
}