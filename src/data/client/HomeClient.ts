import { Components } from "../../domain/models/Components";
import { HomeClientInterface } from "../interfaces/HomeClientInterface";

import * as jsonResponseUI1 from './exampleResponseHomeUI1.json';
import * as jsonResponseUI2 from './exampleResponseHomeUI2.json';

import * as jsonResponseData1 from './exampleResponseHomeData1.json';
import * as jsonResponseData2 from './exampleResponseHomeData2.json';
import { WidgetsData } from "../../domain/models/WidgetsData";


export class HomeClient implements HomeClientInterface {

    async fetchUI(): Promise<Components> {
        const jsonData = JSON.stringify(jsonResponseUI2)
        const components: Components = JSON.parse(jsonData);

        return components
    }

    async fetchData(): Promise<WidgetsData> {
        const jsonData = JSON.stringify(jsonResponseData2)
        const dataWidgets: WidgetsData = JSON.parse(jsonData);

        return dataWidgets
    }

}