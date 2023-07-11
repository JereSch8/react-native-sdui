import React from 'react'
import { ScrollView, View } from 'react-native'

import { observer } from 'mobx-react-lite'

import { GetHomeUIUseCase } from '../../../domain/usecases/GetHomeUIUseCase'
import { HomeRepository } from '../../../data/repositories/HomeRepository'
import { HomeUIremoteDataSource } from '../../../data/datasources/HomeUIremoteDataSource'
import { HomeClient } from '../../../data/client/HomeClient'
import { widgetComposer } from '../../utils/widgetComposer'

import { HomeViewModel } from './HomeViewModel'
import { HomeDataremoteDataSource } from '../../../data/datasources/HomeDataremoteDataSource'
import { GetHomeDataUseCase } from '../../../domain/usecases/GetHomeDataUseCase'

export const HomeScreen = () => {

    const client = new HomeClient()
    const datauiDataSource = new HomeDataremoteDataSource(client)
    const uiDataSource = new HomeUIremoteDataSource(client)
    const repo = new HomeRepository(uiDataSource, datauiDataSource)
    const getUIuseCase = new GetHomeUIUseCase(repo)
    const getDatauseCase = new GetHomeDataUseCase(repo)
    const viewModel = new HomeViewModel(getUIuseCase, getDatauseCase)

    viewModel.fetchUI()
    viewModel.fetchData()

    return (
        <ScrollView key={1} style={{ flex: 1 }}>
            <HomeView key={viewModel.fetchData.toString()} viewModel={viewModel} />
        </ScrollView>
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