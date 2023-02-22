import React from "react"
import { View, StyleSheet } from 'react-native'

import { TextInputMask } from 'react-native-masked-text'

import Colors from "../../../styles/Colors"

const NewEntryInput = ({ value, onChangeValue }) => {
    return(
        <View>
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
                    onChangeValue(rawValue)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    input: {
        fontSize: 28,
        color: Colors.white,
        textAlign: 'center',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: Colors.asphalt
    }

})

export default NewEntryInput