import React from "react"
import { View, Text, FlatList, StyleSheet } from 'react-native'

import Colors from "../../../styles/Colors"

const EntrySummaryList = ({ entriesGrouped }) => {

    return(
        <View>
            <FlatList
                data={entriesGrouped}
                renderItem={({ item }) => (
                    <Text style={styles.description}>{ item.description } 
                    { 
                        Number(item.amount).toLocaleString('pt-BR', 
                        {style: 'currency', currency: 'BRL'})
                    }
                    </Text> 
                )}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        // flex: 1,
    },

    description: {
        marginBottom: 5,
        color: Colors.metal
    },

})

export default EntrySummaryList