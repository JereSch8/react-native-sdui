import React from 'react'
import { ScrollView, View } from 'react-native'

import { observer } from 'mobx-react-lite'

import { GetHomeUIUseCase } from '../../../domain/usecases/GetHomeUIUseCase'
import { HomeRepository } from '../../../data/repositories/HomeRepository'
import { HomeUIremoteDataSource } from '../../../data/datasources/HomeUIremoteDataSource'
import { HomeClient } from '../../../data/client/HomeClient'
import { widgetComposer } from '../../utils/widgetCompositer'

import { HomeViewModel } from './HomeViewModel'

export const HomeScreen = () => {

    const dataSource = new HomeUIremoteDataSource(new HomeClient())
    const repo = new HomeRepository(dataSource)
    const getUIuseCase = new GetHomeUIUseCase(repo)
    const viewModel = new HomeViewModel(getUIuseCase)

    viewModel.fetchUI()

    return (
        <ScrollView style={{ flex: 1 }}>
            <HomeView viewModel={viewModel} />
        </ScrollView>
    )
}

interface ViewProp {
    viewModel: HomeViewModel
}

const HomeView = observer(({ viewModel }: ViewProp) => {

    if (viewModel.uiState.components.length > 0) {
        return widgetComposer(viewModel.uiState)
    }

    return <View style={{ backgroundColor: 'red' }} />
})