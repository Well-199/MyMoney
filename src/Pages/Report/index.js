import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import BalanceLabel from '../../components/BalanceLabel'
import EntrySummary from '../../components/EntrySummary'
import EntryList from '../../components/EntryList'

const Report = () =>  {

    return (
        <View>
            <BalanceLabel />

            <Picker
                selectedValue={''}
                onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
            }>
                <Picker.Item label="Todas as Categorias" value="Todas" />
            </Picker>

            <Picker
                selectedValue={''}
                onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
            }>
                <Picker.Item label="Últimos 7 dias" value="7dias" />
            </Picker>

            <EntrySummary />
            <EntryList />

            <View>
                <Button title='Salvar'/>
                <Button title='Cancelar'/>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        // flex: 1,
    }

})

export default Report