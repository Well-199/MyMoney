import Realm from "realm"

import CategorySchema from "../schemas/CategorySchema"
import EntrySchema from "../schemas/EntrySchema"

// Funçao getRealm retorna a conexão com o banco de dados
export const getRealm = async () => {

    // Executa a conexao e inicializa o banco de dados
    const realm = await Realm.open({
        schema: [CategorySchema, EntrySchema],
        schemaVersion: 1
    })
    // Retorna o conexao
    return realm
}