import React, { useState } from "react"
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import { TextInputMask } from 'react-native-masked-text'

import Colors from "../../../styles/Colors"

const NewEntryInput = ({ value, onChangeDebit, onChangeValue }) => {

    const [debit, setDebit] = useState(value <= 0 ? -1 : 1)
    const [debitPrefix, setDebitPrefix] = useState(value <= 0 ? '-' : '')
    const [colorDebit, setColorDebit] = useState(value <= 0 ? Colors.red : Colors.green)

    const onChangeDebitCredit = () => {
        if(debit < 0){
            setDebit(1)
            setDebitPrefix('')
            setColorDebit(Colors.green)
            onChangeDebit(false)
        }
        else{
            setDebit(-1)
            setDebitPrefix('-')
            onChangeDebit(true)
            setColorDebit(Colors.red)
        }

        onChangeValue(value * -1)
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity 
                style={[styles.debitButton, { backgroundColor: colorDebit }]}
                onPress={onChangeDebitCredit}
            >
                <Text style={styles.debitButtonPrefix}>{ debitPrefix }</Text>
                <Text style={styles.debitButtontext}>R$</Text>
            </TouchableOpacity>

            <TextInputMask
                style={styles.input} 
                type={'money'}
                options={{
                    precision: 2,
                    separator: ',',
                    delimiter: '.',
                    unit: '',
                    suffixUnit: ''
                }}
                value={value}
                includeRawValueInChangeText={true}
                onChangeText={(maskedValue, rawValue) => {
                    onChangeValue(rawValue * debit)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: Colors.asphalt
    },

    debitButton: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderTopStartRadius: 10,
        borderBottomLeftRadius: 10,
    },

    debitButtonPrefix: {
        fontSize: 28,
        minWidth: 8,
        color: Colors.white,
    },

    debitButtontext: {
        fontSize: 28,
        color: Colors.white,
    },

    input: {
        flex: 1,
        fontSize: 28,
        color: Colors.white,
        textAlign: 'center',
        paddingLeft: 0,
        paddingRight: 20,
    }

})

export default NewEntryInput