import { Components } from "../../domain/models/Components"

export interface HomeCacheInterface {
    save(components: Components): Promise<boolean>
    get(): Promise<Components | null>
}