import React, { useEffect, useState } from "react"
import { View, Text, FlatList, StyleSheet  } from 'react-native'

import EntryListItem from "./EntryListItem"
import { getEntries } from "../../services/Entries"

const EntryList = () => {

    const [entries, setEntries] = useState([])

    useEffect(() => {

        async function loadEntries() {
            const data = await getEntries()
            setEntries(data)
            console.log(data)
        }

        loadEntries()

    }, [])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Últimos Lançamentos</Text>

            <FlatList
                data={entries}
                keyExtractor={ item => JSON.stringify(item.id)}
                renderItem={({ item }) => (
                    <Text>{ item.description } {
                        Number().toLocaleString('pt-BR', 
                        {style: 'currency', currency: 'BRL'})
                    }</Text> 
                )}
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