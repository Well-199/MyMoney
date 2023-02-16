import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'

import BalancePanelLabel from './BalancePanelLabel'
import BalancePanelChart from './BalancePanelChart'

import Colors from '../../styles/Colors'

const BalancePanel = ({ onNewEntryPress }) => {

    const currentBalance = 2064.34

    return (
        <View style={styles.container}>
            <LinearGradient 
                colors={[Colors.violet, Colors.blue]}
                style={styles.panel}
            >
                <BalancePanelLabel currentBalance={currentBalance} />
                <BalancePanelChart />
            </LinearGradient>

            <TouchableOpacity 
                style={styles.button}
                onPress={onNewEntryPress}
            >
                <Icon name="add" size={30} color={Colors.white} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },

    panel: {
        paddingVertical: 10,
    },

    button: {
        width: 50,
        height: 50,
        marginTop: -24,
        marginRight: 10,
        borderRadius: 150,
        alignItems: 'center',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        shadowColor: Colors.black,
        backgroundColor: Colors.green
    }
})

export default BalancePanel