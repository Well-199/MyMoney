import React, { useState } from "react"
import { View, TextInput, Button, StyleSheet } from 'react-native'

import moment from "moment"

import BalanceLabel from "../../components/BalanceLabel"
import NewEntryInput from "./NewEntryInput"
import NewEntryCategoryPicker from "./NewEntryCategoryPicker"
import NewEntryDatePicker from "./NewEntryDatePicker"
import NewEntryDeleteAction from "./NewEntryDeleteAction"

import { saveEntry, deleteEntry } from "../../services/Entries"

import Colors from "../../styles/Colors"

const NewEntry = ({ navigation, route }) => {

    const defaultParams = {
        id: null,
        amount: 0,
        entryAt: new Date(),
        category: { id: null, name: 'Selecione' }
    }

    const entry = route.params?.entry ?? defaultParams

    const [debit, setDebit] = useState(entry.amount <= 0)
    const [amount, setAmount] = useState(entry.amount)
    const [category, setCategory] = useState(entry.category)
    const [entryAt, setEntryAt] = useState(entry.entryAt)
    
    const isValid = () => {
        if(parseFloat(amount) !== 0){
            return true
        }
        return false
    }

    const onSave = () => {
        const value = {
            amount: parseFloat(amount),
            category: category,
            entryAt: entryAt
        }

        saveEntry(value, entry)
        onClose()
    }

    const onDelete = () => {
        deleteEntry(entry)
        onClose()
    }

    const onClose = () => {
        navigation.goBack()
    }

    return(
        <View style={styles.container}>
            <BalanceLabel />

            <View style={styles.formContainer}>
                <NewEntryInput 
                    value={amount}
                    onChangeDebit={setDebit}
                    onChangeValue={setAmount}
                />

                <NewEntryCategoryPicker 
                    debit={debit}
                    category={category}
                    onChangeCategory={setCategory}
                />

                <View style={styles.formActionContainer}>
                    <NewEntryDatePicker 
                        value={entryAt}
                        onChange={setEntryAt}
                    />

                    <NewEntryDeleteAction 
                        entry={entry}
                        onOkPress={onDelete}
                    />
                </View>

            </View>

            <View>
                <Button 
                    title="Adicionar" 
                    onPress={() => {
                        isValid() && onSave()
                    }}
                />
                
                <Button 
                    title="Cancelar"
                    onPress={onClose} 
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
        backgroundColor: Colors.background,
    },

    formContainer: {
        flex: 1,
        paddingVertical: 20
    },

    formActionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    }

})

export default NewEntry