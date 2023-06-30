import { makeAutoObservable, runInAction } from "mobx";

import { GetHomeUIUseCase } from "../../../domain/usecases/GetHomeUIUseCase";
import { DataComponents } from "../../../domain/models/DataComponents";

export class HomeViewModel {

    private readonly homeUIUseCase: GetHomeUIUseCase

    constructor(homeUIUseCase: GetHomeUIUseCase) {
        this.homeUIUseCase = homeUIUseCase
        makeAutoObservable(this)
    }

    private _uiState: DataComponents = { components: [] }
    public get uiState(): DataComponents { return this._uiState; }
    public set uiState(value: DataComponents) {
        runInAction(() => { this._uiState = value })
    }

    async fetchUI() {
        this.uiState = await this.homeUIUseCase.invoke()
    }

    async fetchData() {

    }

}
