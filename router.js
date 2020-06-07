import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './telas/Login';
import Loja  from './telas/Loja';
import CadastrarProduto from './telas/CadastrarProduto';
import CadastroLogin from './telas/CadastroLogin';
import Produtos from './telas/Produtos';
import Menu from './telas/Menu';
import DetalheProduto from './telas/DetalheProduto';
import LoginADM from './telas/LoginADM';
import EditarProduto from './telas/EditarProduto';

const Stack = createStackNavigator();

export default function Router(){

    return(
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Menu" component={Menu}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="LoginADM" component={LoginADM}/>
            <Stack.Screen name="Loja" component={Loja}/>
            <Stack.Screen name="CadastrarProduto" component={CadastrarProduto}/>
            <Stack.Screen name="CadastroLogin" component={CadastroLogin}/>
            <Stack.Screen name="Produtos" component={Produtos}/>
            <Stack.Screen name="DetalheProduto" component={DetalheProduto}/>
            <Stack.Screen name="EditarProduto" component={EditarProduto}/>

        </Stack.Navigator>
    </NavigationContainer>
    )
  
}