import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

import BalanceLabel from '../../components/BalanceLabel'
import EntrySummary from '../../components/EntrySummary'
import EntryList from '../../components/EntryList'

const Report = () =>  {

    return (
        <View>
            <BalanceLabel />

            <View>
                <Button title='Todas as Categorias'/>
                <Button title='Últimos 7 dias'/>
            </View>

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