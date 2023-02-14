import { Alert } from "react-native"
import { getRealm } from "./Realm"

import { v4 as uuid } from 'uuid'

export const getEntries = async () => {

    // Inicia a conexão com o banco
    const realm = await getRealm()

    // entries armazena os dados da tabela entry retornados do BD
    const entries = realm.objects('Entry')

    return entries
}

export const saveEntry = async ( value, entry = {} ) => {

    // Inicia a conexão com o banco
    const realm = await getRealm()
    let data = {}

    try {

        // Inicia um metodo de escrita dentro do banco
        realm.write(() => {

            data = {
                id: value.id || entry.id || uuid(),
                amount: value.amount || entry.amount,
                entryAt: value.entryAt || entry.entryAt,
                isInit: false
            }
            // parametro true sempre checa se os dados existem caso sim atualiza
            realm.create("Entry", data, true)
        })

        console.log("Save...", data)

        return data

    } catch (error) {
        console.error("saveEntry: ", error)
        Alert.alert("Erro ao salvar no banco de dados")
    }

}

export const deleteEntry = async (entry) => {
    // Inicia a conexão com o banco
    const realm = await getRealm()

    try {
        realm.write(() => {
            realm.delete(entry)
        })
    } catch (error) {
        console.error("deleteEntry: ", error)
        Alert.alert("Erro ao excluir lançamento")
    }
}
