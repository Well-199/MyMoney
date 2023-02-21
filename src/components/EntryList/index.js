import React, { useEffect, useState } from "react"
import { FlatList } from 'react-native'

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
    }, [])
    
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
                renderItem={({ item, index }) => ( 
                    <EntryListItem 
                        entry={item}
                        isFirstItem={ index===0 }
                        isLastItem={ index===entries.length - 1 }
                    /> 
                )}
            />
          
        </Container>
    )
}

export default EntryList