import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from "../../../styles/Colors"

const Container = ({ title, actionLabelText, actionButtonText, onPressActionButton, children }) => {
    return(
        <View style={styles.container}>

            {title && (
                <Text style={styles.title}>{ title }</Text>
            )}
            
            { children }

            {(actionLabelText || actionButtonText) && (

                <View style={styles.actionContainer}>
                    <Text style={styles.actionLabel}>{ actionLabelText }</Text>

                    {actionButtonText && (

                        <TouchableOpacity 
                            style={styles.actionButton}
                            onPress={onPressActionButton}
                        >
                            <Icon name="insert-chart" style={styles.actionButtonIcon} />
                            <Text style={styles.actionButtonText}>{ actionButtonText }</Text>
                        </TouchableOpacity>

                    )}

                </View>

            )}
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        margin: 5,
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        margin: 5,
        padding: 8,
        borderStyle: 'solid',
        borderColor: Colors.borderComponent,
        backgroundColor: Colors.asphalt
    },

    title: {
        fontSize: 12,
        color: Colors.white,
        marginBottom: 5,
    },

    actionContainer: {
        flexDirection: 'row'
    },

    actionLabel: {
        flex: 1,
        fontSize: 12,
        color: Colors.white
    },

    actionButton: {
        flexDirection: 'row',
    },

    actionButtonIcon: {
        fontSize: 12,
        color: Colors.white,
        marginTop: 3,
        marginRight: 2
    },

    actionButtonText: {
        fontSize: 12,
        color: Colors.white,
    }

})

export default Container