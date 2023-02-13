import { Alert } from "react-native"
import { getRealm } from "./Realm"

export const saveEntry = async () => {

    // Inicia a conexão com o banco
    const realm = await getRealm()
    let data = {}

    try {

        // Inicia um metodo de escrita dentro do banco
        realm.write(() => {

            data = {
                id: "ABC",
                amount: 12.4,
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
