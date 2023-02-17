import React, { useEffect, useState } from "react"
import { View, Text, FlatList, Button, StyleSheet  } from 'react-native'

import Container from "../Core/Container"
import EntryListItem from "./EntryListItem"
import { getEntries } from "../../services/Entries"

const EntryList = ({ navigation }) => {

    let entries = []

    async function loadEntries() {
        const data = await getEntries()
        data.map(item => {
            entries.push({
                id: item.id,
                amount: item.amount,
                description: item.description
            })
        })
    }

    useEffect(() => {
      
        loadEntries()

        // Atualiza a tela sempre que recebe o foco
        const unsubscribe = navigation.addListener('focus', () => {
            loadEntries()
        })
        return unsubscribe

    }, [navigation])

    return(
        <Container 
            title="Últimos Lançamentos"
            actionLabelText="Últimos 7 dias"
            actionButtonText="Ver mais"
            onPressActionButton={() => {}}
        >

            <FlatList
                data={entries}
                extraData={entries}
                keyExtractor={item => JSON.stringify(item.id)}
                renderItem={({ item }) => 
                    <View>
                        <Text>{ item.description } {
                            Number(item.amount).toLocaleString('pt-BR', 
                            {style: 'currency', currency: 'BRL'})
                        }</Text> 
                    </View>
                }
            />
          
        </Container>
    )
}

export default EntryList