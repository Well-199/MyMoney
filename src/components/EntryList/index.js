import React, { useEffect, useState } from "react"
import { FlatList } from 'react-native'

import Container from "../Core/Container"
import EntryListItem from "./EntryListItem"
import { getEntries } from "../../services/Entries"

const EntryList = ({ onEntryPress, onPressActionButton }) => {

    const entries = []

    useEffect(() => {
        async function loadEntries() {
            const data = await getEntries()

            data.map(item => {
                entries.push({
                    id: item.id,
                    amount: item.amount, 
                    category: item.category,
                    address: item.address,
                    description: item.description,
                    entryAt: item.entryAt,
                    isInit: item.isInit,
                    latitude: item.latitude,
                    longitude: item.longitude,
                    photo: item.photo
                })
            })
            
        }
        
        loadEntries()
    }, [])

    console.log(entries)
    
    return(
        <Container 
            title="Últimos Lançamentos"
            actionLabelText="Últimos 7 dias"
            actionButtonText="Ver mais"
            onPressActionButton={onPressActionButton}
        >

            <FlatList
                data={entries}
                keyExtractor={item => JSON.stringify(item.id)}
                renderItem={({ item, index }) => ( 
                    <EntryListItem 
                        entry={item}
                        isFirstItem={ index===0 }
                        isLastItem={ index===entries.length - 1 }
                        onEntryPress={onEntryPress}
                    /> 
                )}
            />
          
        </Container>
    )
}

export default EntryList