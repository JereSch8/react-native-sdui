import { HomeRepositoryInterface } from '../../domain/interfaces/HomeRepositoryInterface';
import { Component } from '../../domain/models/Component';
import { Components } from '../../domain/models/Components';
import { TypeComponent } from '../../domain/models/TypeComponent';
import { WidgetData } from '../../domain/models/WidgetData';
import { WidgetsData } from '../../domain/models/WidgetsData';
import { WidgetsUpdate } from '../../domain/models/WidgetsUpdate';
import { HomeDataremoteDataSourceInterface } from '../interfaces/HomeDataremoteDataSourceInterface';
import { HomeUIcacheDataSourceInterface } from '../interfaces/HomeUIcacheDataSourceInterface';
import { HomeUIremoteDataSourceInterface } from '../interfaces/HomeUIremoteDataSourceInterface';

export class HomeRepository implements HomeRepositoryInterface {

    private readonly homeUIcacheDataSource: HomeUIcacheDataSourceInterface
    private readonly homeUIremoteDataSource: HomeUIremoteDataSourceInterface
    private readonly homeDataRemoteDataSource: HomeDataremoteDataSourceInterface
    private tempDataUI: WidgetsData

    constructor(
        homeUIcacheDataSource: HomeUIcacheDataSourceInterface,
        homeUIremoteDataSource: HomeUIremoteDataSourceInterface,
        homeDataRemoteDataSource: HomeDataremoteDataSourceInterface
    ) {
        this.homeUIcacheDataSource = homeUIcacheDataSource
        this.homeUIremoteDataSource = homeUIremoteDataSource
        this.homeDataRemoteDataSource = homeDataRemoteDataSource

        this.tempDataUI = { widgetsData: [] }
    }

    async getUpdateUI(): Promise<WidgetsUpdate> {
        const newUI = await this.homeUIremoteDataSource.getUpdateUI();
        const savedComponents = (await this.homeUIcacheDataSource.getUIFromCache()).components;

        const updatedComponents = this.replaceComponents(newUI.components, savedComponents);
        const updatedData = this.replaceData(newUI.widgetsData, this.tempDataUI.widgetsData);

        return {
            components: { components: updatedComponents },
            widgetsData: { widgetsData: updatedData }
        };
    }

    async getDataUI(): Promise<WidgetsData> {
        this.tempDataUI = await this.homeDataRemoteDataSource.getWidgetData()
        return this.tempDataUI
    }

    async getUI(): Promise<Components> {
        const componentsCache = await this.homeUIcacheDataSource.getUIFromCache()

        if (componentsCache.components.length > 0) {
            const currentVersionFromServer = await this.homeUIremoteDataSource.getVersion()

            if (currentVersionFromServer === componentsCache.version) {
                return componentsCache
            }

            const components = await this.homeUIremoteDataSource.getComponents()
            this.homeUIcacheDataSource.saveUICache(components)

            return components
        }

        const components = await this.homeUIremoteDataSource.getComponents()
        this.homeUIcacheDataSource.saveUICache(components)

        return components
    }

    private replaceComponents(
        newComponents: Component[],
        components: Component[]
    ): Component[] {
        return components.map(savedComponent => {
            if (savedComponent.widget?.type === TypeComponent.COLUMN
                || savedComponent.widget?.type === TypeComponent.ROW
            ) {
                savedComponent.widget.widgets = this.replaceComponents(newComponents, savedComponent.widget.widgets);
            }
            const matchingComponent = newComponents.find(component => component.uid === savedComponent.uid);

            return (matchingComponent) ? matchingComponent : savedComponent;
        });
    }

    private replaceData(
        newData: WidgetData[],
        data: WidgetData[]
    ): WidgetData[] {
        return data.map(savedData => {
            if (savedData.data?.type === TypeComponent.COLUMN
                || savedData.data?.type === TypeComponent.ROW
            ) {
                savedData.data.widgets = this.replaceData(newData, savedData.data.widgets);
            }
            const matchingData = newData.find(data => data.uid === savedData.uid);

            return (matchingData) ? matchingData : savedData
        });
    }
}