import { HomeRepositoryInterface } from "../interfaces/HomeRepositoryInterface"
import { Components } from "../models/Components"

export class GetHomeUIUseCase {
    private readonly repository: HomeRepositoryInterface
    constructor(
        repository: HomeRepositoryInterface
    ) {
        this.repository = repository
    }

    public async invoke(): Promise<Components> {
        return await this.repository.getUI()
    }
}