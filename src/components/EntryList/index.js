import React from "react"
import { View, Text, FlatList, StyleSheet  } from 'react-native'

import EntryListItem from "./EntryListItem"

const EntryList = () => {

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Últimos Lançamentos</Text>

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
        // flex: 1,
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    }

})

export default EntryList