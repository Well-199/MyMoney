import Realm from "realm"

import CategorySchema from "../schemas/CategorySchema"
import EntrySchema from "../schemas/EntrySchema"

import { getDefaultCategories } from "./Categories"

// Funçao getRealm retorna a conexão com o banco de dados
export const getRealm = async () => {

    // Executa a conexao e inicializa o banco de dados
    const realm = await Realm.open({
        schema: [CategorySchema, EntrySchema],
        schemaVersion: 1
    })

    // dropDB

    // Executa a função que verifica se as categorias exustem no banco se não existir cria
    InitDB(realm)

    // Retorna o conexao
    return realm
}

export const InitDB = (realm) => {

    const categoriesLength = realm.objects('Category').length

    if(categoriesLength===0){
        const categories = getDefaultCategories()

        try {

            realm.write(() => {

                categories.forEach(category => {
                    realm.create("Category", category, true)
                })

            })

        } catch (error) {
            console.error("InitDB: ", error)
        }
        
    }

}

// Apaga todo o banco de dados
export const dropDB = (realm) => { 
    realm.write(() => {
        realm.deleteAll()
    })
}