import { makeAutoObservable, runInAction } from "mobx";

import { GetHomeUIUseCase } from "../../../domain/usecases/GetHomeUIUseCase";
import { Components } from "../../../domain/models/Components";
import { WidgetsData } from "../../../domain/models/WidgetsData";
import { GetHomeDataUseCase } from "../../../domain/usecases/GetHomeDataUseCase";
import { GetHomeUpdateUI } from '../../../domain/usecases/GetHomeUpdateUI';

export class HomeViewModel {
    private readonly homeUIUseCase: GetHomeUIUseCase
    private readonly homeDataUIUseCase: GetHomeDataUseCase
    private readonly homeUpdateUIUseCase: GetHomeUpdateUI

    constructor(
        homeUIUseCase: GetHomeUIUseCase,
        homeDataUIUseCase: GetHomeDataUseCase,
        homeUpdateUIUseCase: GetHomeUpdateUI
    ) {
        this.homeUIUseCase = homeUIUseCase
        this.homeDataUIUseCase = homeDataUIUseCase
        this.homeUpdateUIUseCase = homeUpdateUIUseCase
        makeAutoObservable(this)
    }

    private _uiState: Components = { components: [] }
    public get uiState(): Components { return this._uiState; }
    public set uiState(value: Components) {
        runInAction(() => { this._uiState = value })
    }

    private _dataUIState: WidgetsData = { widgetsData: [] }
    public get dataUIState(): WidgetsData { return this._dataUIState; }
    public set dataUIState(value: WidgetsData) {
        runInAction(() => { this._dataUIState = value })
    }

    async fetchUI() {
        this.uiState = await this.homeUIUseCase.invoke()
    }

    async fetchData() {
        this.dataUIState = await this.homeDataUIUseCase.invoke()
    }

    async updateUI() {
        console.log(`llamando al useCase`);
        
        const result = await this.homeUpdateUIUseCase.invoke()
        this.dataUIState = result.widgetsData
        this.uiState = result.components
    }

}
