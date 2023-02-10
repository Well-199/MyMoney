import React from "react"
import { View, Text, FlatList, StyleSheet } from 'react-native'

const EntrySummaryList = () => {

    return(
        <View>
            <Text style={styles.title}>Categorias</Text>

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
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        // flex: 1,
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    }

})

export default EntrySummaryList