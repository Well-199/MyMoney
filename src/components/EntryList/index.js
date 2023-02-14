import React, { useEffect, useState } from "react"
import { View, Text, FlatList, Button, StyleSheet  } from 'react-native'

import EntryListItem from "./EntryListItem"
import { getEntries } from "../../services/Entries"

const EntryList = ({ navigation }) => {

    const [entries, setEntries] = useState([])

    useEffect(() => {

        async function loadEntries() {
            const data = await getEntries()
            setEntries(data)
        }
      
        loadEntries()

    }, [])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Últimos Lançamentos</Text>

            {entries.map(item =>
                <View key={item.id}>
                    <Text>{ item.description } {
                        Number(item.amount).toLocaleString('pt-BR', 
                        {style: 'currency', currency: 'BRL'})
                    }</Text> 
                    <Button 
                        title={item.id}
                        onPress={() => {
                            navigation.navigate("NewEntry", {entry: item})
                        }}
                    />
                </View>
            )}
          
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