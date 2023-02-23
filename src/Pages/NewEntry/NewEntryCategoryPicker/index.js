import React, { useEffect, useState } from "react"
import { View, TouchableOpacity, Text, Modal, FlatList, StyleSheet } from 'react-native'

import { getAllCategories } from "../../../services/Categories"

import Colors from "../../../styles/Colors"

const NewEntryCategoryPicker = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const [allCategories, setAllCategories] = useState([])

    useEffect(() => {
        async function loadCategories() {
            const data = await getAllCategories()
            setAllCategories(data)
        }

        loadCategories()

    }, [])

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

                <View style={styles.modal}>
                    <FlatList 
                        data={allCategories}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity>
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                <TouchableOpacity 
                    onPress={() => {
                        setModalVisible(false)
                    }}>
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
    },

    modal: {
        flex: 1,
        backgroundColor: Colors.asphalt,
    }

})

export default NewEntryCategoryPicker
