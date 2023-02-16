import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import EntrySummaryChart from "./EntrySummaryChart"
import EntrySummaryList from "./EntrySummaryList"

import Colors from "../../styles/Colors"

const EntrySummary = ({ entriesGrouped }) => {

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Categorias</Text>
            <EntrySummaryChart />
            <EntrySummaryList entriesGrouped={entriesGrouped} />
            <View style={styles.actionContainer}>
                <Text style={styles.actionLabel}>Últimos 7 dias</Text>
                <TouchableOpacity style={styles.actionButton}>
                    <Icon name="insert-chart" style={styles.actionButtonIcon} />
                    <Text style={styles.actionButtonText}>Ver mais</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        margin: 5,
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
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

export default EntrySummary