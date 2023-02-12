import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Main from './Pages/Main'
import NewEntry from './Pages/NewEntry'
import Report from './Pages/Report'

const Stack = createNativeStackNavigator()

const Routes = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{headerShown: false}}  
                initialRouteName="Main"
            >
                <Stack.Screen name="Main" component={Main} />
                <Stack.Screen name="NewEntry" component={NewEntry} />
                <Stack.Screen name="Report" component={Report} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Routes