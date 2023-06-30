import { DataComponents } from "../../domain/models/DataComponents";
import { HomeClientInterface } from "../interfaces/HomeClientInterface";

import * as jsonResponseUI1 from './exampleResponseHomeUI1.json';
import * as jsonResponseUI2 from './exampleResponseHomeUI2.json';


export class HomeClient implements HomeClientInterface {

    async fetchUI(): Promise<DataComponents> {
        const jsonData = JSON.stringify(jsonResponseUI1)
        const dataComponents: DataComponents = JSON.parse(jsonData);

        return dataComponents
    }

    fetchData(): Promise<string> {
        throw new Error("Method not implemented.");
    }

}