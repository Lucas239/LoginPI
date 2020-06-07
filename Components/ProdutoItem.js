import React, { useState } from 'react';
import{Text, StyleSheet, TouchableOpacity, Button, Image} from 'react-native';
import Cartao from '../Components/Cartao';
import Cores from '../Constantes/Cores';

const ProdutoItem =(props) =>{
   
    return(
        <TouchableOpacity onPress={props.onSelect}style={estilos.produtoItem}>
            <Image
                style={estilos.imagem} 
                source={{uri:props.imagem}}
            />
            <Cartao estilos={estilos.itemNaLista}>
                <Text style={estilos.nomeContato}>Nome: {props.nomeProduto}</Text>
                <Text style={estilos.numero}>Preço: {props.precoProduto}</Text>
                <Text style={estilos.numero}>Unidade: {props.unidadeProduto}</Text>
                <Text style={estilos.numero}>Código: {props.codigoProduto}</Text>
                <Text style={estilos.numero}>id: {props.idProduto}</Text>
            </Cartao>
        </TouchableOpacity> 
    );
}
const estilos = StyleSheet.create({
    produtoItem: {
        flexDirection: 'row',
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: 'center'
    },
    itemNaLista:{
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    imagem: {
        width: 70,
        height: 75,
        borderRadius: 5,
        backgroundColor: '#CCC',
        borderColor: Cores.primary,
        borderWidth: 1
    },
    nome: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5
    },
    numero: {
        color: '#666',
        fontSize: 16
    }
});
export default ProdutoItem;