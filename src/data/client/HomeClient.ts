import { Components } from "../../domain/models/Components";
import { HomeClientInterface } from "../interfaces/HomeClientInterface";

import * as jsonResponseUI1 from './exampleResponseHomeUI1.json';
import * as jsonResponseUI2 from './exampleResponseHomeUI2.json';

import * as jsonResponseData1 from './exampleResponseHomeData1.json';
import * as jsonResponseData2 from './exampleResponseHomeData2.json';

import * as jsonUpdateUI1 from './exampleUpdateHomeUI1.json';

import { WidgetsData } from "../../domain/models/WidgetsData";
import { UpdateUI } from '../models/UpdateUI';


export class HomeClient implements HomeClientInterface {

    async fetchVersionUI(): Promise<string> {
        return `1.0.0`
    }

    async fetchUI(): Promise<Components> {
        const jsonData = JSON.stringify(jsonResponseUI1)
        const components: Components = JSON.parse(jsonData);

        return components
    }

    async fetchData(): Promise<WidgetsData> {
        const jsonData = JSON.stringify(jsonResponseData2)
        const dataWidgets: WidgetsData = JSON.parse(jsonData);

        return dataWidgets
    }

    async updateUI(): Promise<UpdateUI> {
        const jsonData = JSON.stringify(jsonUpdateUI1)
        const uiUpdate: UpdateUI = JSON.parse(jsonData);

        return uiUpdate
    }

}