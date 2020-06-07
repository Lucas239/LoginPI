import React from 'react';
import Login from '../telas/Login';
import CadastroLoja  from '../telas/CadastroLoja';
import CadastrarProduto from '../telas/CadastrarProduto';
import EditarProduto from '../telas/EditarProduto';
import CadastroLogin from '../telas/CadastroLogin';
import Produtos from '../telas/Produtos';
import Menu from '../telas/Menu';
import DetalheProduto from '../telas/DetalheProduto';
import LoginADM from '../telas/LoginADM';
import {createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import Cores from '../Constantes/Cores';

const EstoqueNavigator = createStackNavigator({
    Menu:Menu,
    Login: Login,
    CadastroLoja: CadastroLoja,
    CadastrarProduto: CadastrarProduto,
    CadastroLogin:CadastroLogin,
    Produtos:Produtos,
    DetalheProduto:DetalheProduto,
    EditarProduto:EditarProduto,
    LoginADM:LoginADM
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Platform.OS ==='android'?Cores.second:''
        },
        headerTintColor: Platform.OS ==='android'?'black':'Cores.primary'
    }
});

export default createAppContainer(EstoqueNavigator);