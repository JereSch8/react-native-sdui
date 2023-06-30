import { HomeRepositoryInterface } from "../interfaces/HomeRepositoryInterface"
import { DataComponents } from "../models/DataComponents"

export class GetHomeUIUseCase {
    private readonly repository: HomeRepositoryInterface
    constructor(
        repository: HomeRepositoryInterface
    ) {
        this.repository = repository
    }

    public async invoke(): Promise<DataComponents> {
        const components = await this.repository.getUI()

        return components
    }
}