import React, { useState } from "react"
import { View, TouchableOpacity, Text, Modal, StyleSheet } from 'react-native'

import Colors from "../../../styles/Colors"

const NewEntryCategoryPicker = () => {

    const [modalVisible, setModalVisible] = useState(false)

    return(
        <View>
            <TouchableOpacity
                style={styles.pickerButton}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.pickerButtonText}>Alimentação</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
            >

                <Text>Modal</Text>

                <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                >
                    <Text>Fechar</Text>
                </TouchableOpacity>

            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({

    pickerButton: {
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: Colors.asphalt,
    },

    pickerButtonText: {
        fontSize: 28,
        textAlign: 'center',
        color: Colors.white,
    }

})

export default NewEntryCategoryPicker
