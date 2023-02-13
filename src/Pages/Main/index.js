import React from "react"
import { View, Button, StyleSheet } from 'react-native'

import BalancePanel from "../../components/BalancePanel"
import EntrySummary from "../../components/EntrySummary"
import EntryList from "../../components/EntryList"

const Main = ({ navigation }) => {

    const currentBalance = 2064.34

    return(
        <View style={styles.container}>
            <BalancePanel currentBalance={currentBalance}/>
            <Button 
                onPress={() => navigation.navigate("NewEntry") } 
                title='Adicionar' 
            />
            <EntrySummary />
            <EntryList />
        </View>
    )
}

const styles = StyleSheet.create({

    container : {
        // flex: 1,
        padding: 10
    }

})

export default Main