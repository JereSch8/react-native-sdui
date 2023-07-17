import React from 'react'
import { Button, ScrollView, View } from 'react-native'

import { observer } from 'mobx-react-lite'

import { GetHomeUIUseCase } from '../../../domain/usecases/GetHomeUIUseCase'
import { HomeRepository } from '../../../data/repositories/HomeRepository'
import { HomeUIremoteDataSource } from '../../../data/datasources/HomeUIremoteDataSource'
import { HomeClient } from '../../../data/client/HomeClient'
import { widgetComposer } from '../../utils/widgetComposer'

import { HomeViewModel } from './HomeViewModel'
import { HomeDataremoteDataSource } from '../../../data/datasources/HomeDataremoteDataSource'
import { GetHomeDataUseCase } from '../../../domain/usecases/GetHomeDataUseCase'
import { HomeUICacheDataSource } from '../../../data/datasources/HomeUIcacheDataSource';
import { HomeCache } from '../../../data/cache/HomeCache'
import { GetHomeUpdateUI } from '../../../domain/usecases/GetHomeUpdateUI'

export const HomeScreen = () => {

    const client = new HomeClient()
    const cache = new HomeCache()
    const datauiDataSource = new HomeDataremoteDataSource(client)
    const uiDataSource = new HomeUIremoteDataSource(client)
    const uiCacheSource = new HomeUICacheDataSource(cache)
    const repo = new HomeRepository(uiCacheSource, uiDataSource, datauiDataSource)
    const getUIuseCase = new GetHomeUIUseCase(repo)
    const getDatauseCase = new GetHomeDataUseCase(repo)
    const getUpdateuseCase = new GetHomeUpdateUI(repo)
    const viewModel = new HomeViewModel(getUIuseCase, getDatauseCase, getUpdateuseCase)

    viewModel.fetchUI()
    viewModel.fetchData()

    return (
        <View style={{ flex: 1 }} >
            <ScrollView key={1} style={{ flex: 1 }}>
                <HomeView key={viewModel.fetchData.toString()} viewModel={viewModel} />
            </ScrollView>
            <Button
                title='Update'
                onPress={() => viewModel.updateUI()}
            />
        </View >

    )
}

interface ViewProp {
    viewModel: HomeViewModel
}

const HomeView = observer(({ viewModel }: ViewProp) => {
    if (viewModel.uiState.components.length > 0) {
        return widgetComposer(viewModel.uiState, viewModel.dataUIState)
    }
    return <View style={{ backgroundColor: 'red' }} />
})