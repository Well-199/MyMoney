import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Colors from '../../../styles/Colors'

const ActionFooter = ({ children }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>{ children }</View>
        </View>
    )
}

export const ActionPrimaryButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.primaryButton} 
            onPress={onPress}
        >
            <Text style={styles.primaryButtonText} >{ title }</Text>
        </TouchableOpacity>
    )
}

export const ActionSecodaryButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={onPress}
        >
            <Text style={styles.secondaryButtonText}>{ title }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        paddingVertical: 10,
        backgroundColor: Colors.background
    },

    inner: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    primaryButton: {
        borderRadius: 150,
        borderWidth: 1,
        borderColor: Colors.green,
        paddingVertical: 10,
        paddingHorizontal: 20
    },

    primaryButtonText: {
        fontSize: 18,
        textAlign: 'center',
        color: Colors.green
    },

    secondaryButton: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },

    secondaryButtonText: {
        fontSize: 18,
        textAlign: 'center',
        color: Colors.white
    }

})

export default ActionFooter