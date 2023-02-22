import Realm from "realm"

import CategorySchema from "../schemas/CategorySchema"
import EntrySchema from "../schemas/EntrySchema"

import { getAllCategories } from "./Categories"

// Funçao getRealm retorna a conexão com o banco de dados
export const getRealm = async () => {

    // Executa a conexao e inicializa o banco de dados
    const realm = await Realm.open({
        schema: [CategorySchema, EntrySchema],
        schemaVersion: 1
    })

    // Executa a função que verifica se as categorias exustem no banco se não existir cria
    InitDB(realm)

    // Retorna o conexao
    return realm
}

export function InitDB (realm) {

    const categoriesLength = realm.objects('Category').length

    if(categoriesLength===0){
        const categories = getAllCategories()

        try {

            realm.write(() => {

                categories.forEach(category => {
                    console.table(category)
                    realm.create("Category", category, true)
                })

            })

        } catch (error) {
            console.error("InitDB: ", error)
        }
        
    }
    else {
        console.log('InttDB: categories already existing... Skypping')
    }

}