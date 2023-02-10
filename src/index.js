import React from 'react'
import { StyleSheet, Text, View, Button, Alert, FlatList } from 'react-native'

const App = () => {

    const addEntry = () => {
        Alert.alert("Abrir a tela de adicionar lançamentos")
    }

	return(
		<View style={styles.container}>
			<Text style={styles.text}>Saldo: R$ 2.102,45</Text>

            <Button
                onPress={addEntry}
                title='Adicionar' 
            />

            <Text style={styles.text}>Categorias</Text>

            <FlatList
                data={[
                    { key: "Alimentação: R$ 200"},
                    { key: "Combustível: R$ 12"},
                    { key: "Aluguel: R$ 120"},
                    { key: "Lazer: R$ 250"},
                    { key: "Outros: R$ 1200"}
                ]}
                renderItem={({ item }) => <Text>{ item.key }</Text> }
            ></FlatList>

            <Text style={styles.text}>Últimos Lançamentos</Text>

            <FlatList
                data={[
                    { key: "Padaria Asa Branca: R$ 10"},
                    { key: "Supermercado Isadora: R$ 190"},
                    { key: "Posto Ipiranga: R$ 120"}
                ]}
                renderItem={({ item }) => <Text>{ item.key }</Text> }
            ></FlatList>

		</View>
	)
}

const styles = StyleSheet.create({

    container: {
        padding: 10
    },

    text: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    }
})

export default App