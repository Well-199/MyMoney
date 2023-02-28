import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import DateTimePickerModal from "react-native-modal-datetime-picker"
import Icon from 'react-native-vector-icons/MaterialIcons'

import Colors from '../../../styles/Colors'

const NewEntryDatePicker = ({ value, onChange }) => {

    const [modalVisible, setModalVisible] = useState(false)

    const onCancel = () => {
        setModalVisible(false)
    }

    const onChangeValue = (date) => {
        onChange(date)
        onCancel()
    }

    return(
        <View>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <Icon name="today" size={40} color={Colors.white} />
            </TouchableOpacity>

            <DateTimePickerModal
                mode="date"
                datePickerModeAndroid="calendar"
                isVisible={modalVisible}
                onConfirm={onChangeValue}
                onCancel={onCancel}
                date={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    button: {
        width: 60,
        height: 60,
        borderRadius: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.asphalt
    }

})

export default NewEntryDatePicker