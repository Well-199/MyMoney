import { Alert } from "react-native"
import { getRealm } from "./Realm"

export const getEntries = async () => {

    // Inicia a conexão com o banco
    const realm = await getRealm()

    // entries armazena os dados da tabela entry retornados do BD
    const entries = realm.objects('Entry')

    return entries
}

export const saveEntry = async ( value ) => {

    // Inicia a conexão com o banco
    const realm = await getRealm()
    let data = {}
    const { amount } = value

    try {

        // Inicia um metodo de escrita dentro do banco
        realm.write(() => {

            data = {
                id: "ABCD",
                amount: amount,
                entryAt: new Date(),
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
