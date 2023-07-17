import { HomeRepositoryInterface } from "../interfaces/HomeRepositoryInterface"
import { WidgetsUpdate } from "../models/WidgetsUpdate";

export class GetHomeUpdateUI {
    private readonly repository: HomeRepositoryInterface
    constructor(
        repository: HomeRepositoryInterface
    ) {
        this.repository = repository
    }

    public async invoke(): Promise<WidgetsUpdate> {
        return await this.repository.getUpdateUI()
    }
}