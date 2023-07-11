import { HomeRepositoryInterface } from "../interfaces/HomeRepositoryInterface"
import { WidgetsData } from "../models/WidgetsData"

export class GetHomeDataUseCase {
    private readonly repository: HomeRepositoryInterface
    constructor(
        repository: HomeRepositoryInterface
    ) {
        this.repository = repository
    }

    public async invoke(): Promise<WidgetsData> {
        return await this.repository.getDataUI()
    }
}