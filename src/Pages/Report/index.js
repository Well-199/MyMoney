import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import ActionFooter from '../../components/Core/ActionFooter'
import { ActionPrimaryButton } from '../../components/Core/ActionFooter'

import BalanceLabel from '../../components/BalanceLabel'
import EntrySummary from '../../components/EntrySummary'
import EntryList from '../../components/EntryList'

import Colors from '../../styles/Colors'

const Report = ({ navigation }) =>  {

    return (
        <View style={styles.container}>
            <BalanceLabel />

            <View>
                <Picker>
                    <Picker.Item label="Todas as Categorias" value="Todas" />
                </Picker>

                <Picker>
                    <Picker.Item label="Últimos 7 dias" value="7dias" />
                </Picker>
            </View>

            <ScrollView>
                <EntrySummary />
                <EntryList />
            </ScrollView>

            <ActionFooter>
                <ActionPrimaryButton 
                    title="Fechar"
                    onPress={() => navigation.goBack()}
                />
            </ActionFooter>
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.background
    }

})

export default Report