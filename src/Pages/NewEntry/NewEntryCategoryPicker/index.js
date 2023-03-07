import React, { useEffect, useState } from "react"
import { View, TouchableOpacity, Text, Modal, FlatList, StyleSheet } from 'react-native'

import ActionFooter from "../../../components/Core/ActionFooter"
import { ActionPrimaryButton } from "../../../components/Core/ActionFooter"

import { getDebitCategories, getCreditCategories } from "../../../services/Categories"

import Colors from "../../../styles/Colors"

const NewEntryCategoryPicker = ({ debit, category, onChangeCategory }) => {

    const [modalVisible, setModalVisible] = useState(false)
    const debitCategories = []
    const creditCategories = []

    useEffect(() => {

        async function loadCategories() {
            
            const dataDebit = await getDebitCategories()
            const dataCredit = await getCreditCategories()
    
            dataDebit.map(item => {
                debitCategories.push({
                    id: item.id,
                    name: item.name,
                    color: item.color,
                    isInit: item.isInit,
                    isDefault: item.isDefault,
                    isCredit: item.isCredit,
                    isDebit: item.isDebit,
                    order: item.order,
                    entries: item.entries
                })
            })
    
            dataCredit.map(item => {
                creditCategories.push({
                    id: item.id,
                    name: item.name,
                    color: item.color,
                    isInit: item.isInit,
                    isDefault: item.isDefault,
                    isCredit: item.isCredit,
                    isDebit: item.isDebit,
                    order: item.order,
                    entries: item.entries
                })
            })
    
            //setDebitCategories(dataDebit)
            //setCreditCategories(dataCredit)
        }
        
        loadCategories()
    }, [modalVisible])

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
                        data={ debit ? debitCategories : creditCategories }
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

                    <ActionFooter>
                        <ActionPrimaryButton 
                            title="Fechar"
                            onPress={onClosePress}
                        />
                    </ActionFooter>
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
    }

})

export default NewEntryCategoryPicker
