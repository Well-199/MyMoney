import React from "react"
import { View, Text, StyleSheet } from 'react-native'

import LinearGradient from "react-native-linear-gradient"

import Colors from "../../styles/Colors"

const BalanceLabel = () => {

    const currentBalance = 2064.34

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Saldo Atual</Text>

            <LinearGradient 
                style={styles.panel}
                colors={[Colors.violet, Colors.blue]}
            >
                <Text style={styles.value}>
                    {
                        Number(currentBalance).toLocaleString('pt-BR', 
                        {style: 'currency', currency: 'BRL'})
                    }
                </Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        padding: 20
    },

    label: {
        fontSize: 12,
        color: Colors.white,
    },

    panel: {
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginVertical: 10
    },

    value: {
        fontSize: 28,
        color: Colors.white,
    }

})

export default BalanceLabel