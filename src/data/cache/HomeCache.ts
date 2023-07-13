import AsyncStorage from '@react-native-async-storage/async-storage';;
import { Components } from '../../domain/models/Components';
import { HomeCacheInterface } from '../interfaces/HomeCacheInterface';

export class HomeCache implements HomeCacheInterface {

    async save(components: Components) {
        try {
            const jsonValue = JSON.stringify(components)

            await AsyncStorage.setItem('@key_homeComponents', jsonValue)
            return true
        }
        catch (e) {
            console.error(`ERROR al guardar usuario: ${JSON.stringify(e)}`)
            return false
        }
    }

    async get(): Promise<Components | null> {
        try {
            const jsonValue = await AsyncStorage.getItem('@key_homeComponents')
            return jsonValue !== null ? JSON.parse(jsonValue) : null;
        }
        catch (e) {
            console.error(`ERROR al obtener el usuario logeado: ${JSON.stringify(e)}`)
            return null
        }
    }

}
