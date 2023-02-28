import React, { useEffect, useState } from "react"
import { View, TouchableOpacity, Text, Modal, FlatList, StyleSheet } from 'react-native'

import { getDebitCategories, getCreditCategories } from "../../../services/Categories"

import Colors from "../../../styles/Colors"

const NewEntryCategoryPicker = ({ debit, category, onChangeCategory }) => {

    const [modalVisible, setModalVisible] = useState(false)
    const [debitCategories, setDebitCategories] = useState([])
    const [creditCategories, setCreditCategories] = useState([])

    useEffect(() => {
        async function loadCategories() {
            
            const dataDebit = await getDebitCategories()
            const dataCredit = await getCreditCategories()

            console.log(dataCredit)

            setDebitCategories(dataDebit)
            setCreditCategories(dataCredit)
        }

        loadCategories()
    }, [])

    const onClosePress = () => {
        setModalVisible(false)
    }

    const onCategoryPress = (item) => {
        onChangeCategory(item)
        onClosePress()
    }

    return(
        <View>
            <TouchableOpacity
                style={styles.pickerButton}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.pickerButtonText}>{category.name}</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
            >

                <View style={styles.modal}>
                    <FlatList 
                        data={debit ? creditCategories : debitCategories}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.modalItem}
                                onPress={() => onCategoryPress(item)}
                            >
                                <Text style={[styles.modalItemText, {color: item.color}]}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />

                    <TouchableOpacity
                        style={styles.closeButton} 
                        onPress={onClosePress}>
                        <Text style={styles.closeButtonText}>Fechar</Text>
                    </TouchableOpacity>
                </View>
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
        backgroundColor: Colors.background,
    },

    modalItem: {
        padding: 20,
        borderRadius: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: Colors.asphalt
    },

    modalItemText: {
        fontSize: 22,
        textAlign: 'center',
        color: Colors.white
    },

    closeButton: {
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: Colors.background,
        borderColor: Colors.green,
        marginBottom: 20,
    },

    closeButtonText: {
        fontSize: 20,
        textAlign: 'center',
        color: Colors.green,
    }

})

export default NewEntryCategoryPicker
