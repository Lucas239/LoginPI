import React, {useEffect} from 'react';
import {Text,View, Image, StyleSheet, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import{useSelector, useDispatch} from 'react-redux';
import ProdutoItem from '../Components/ProdutoItem';
import {Ionicons} from '@expo/vector-icons';
import * as estoqueActions from '../Store/estoque-actions';

const Produtos = (props) =>{

    const produtos = useSelector(estado=>estado.produtos.produtos);
    const dispatch = useDispatch();

    const confirmaExclusao = () => {
        Alert.alert(
            'Deletar contato',
            'Tem certeza que deseja excluir esse item?', //mensagem
            //coleção de botões, cada botão é um JSON
            [
                {text: 'Deletar', style: 'default', onPress: () => deletar(props.id)},
                {text: 'Cancelar', style: 'default', onPress:  Keyboard.dismiss()},
            ]
        );
       
    }

    useEffect(()=>{
        dispatch(estoqueActions.listarProdutos())
    }, [dispatch]);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                marginHorizontal={10}
                data={produtos}
                keyExtractor={produto=>produto.id}
                renderItem={produto=>
                    <ProdutoItem style={styles.nomes}
                        idProduto={produto.item.id}
                        nomeProduto={produto.item.nome}
                        precoProduto={produto.item.preco}
                        unidadeProduto={produto.item.unidade}
                        codigoProduto={produto.item.codigo}
                        imagem={produto.item.imagemURI}
                        onSelect={()=>
                        props.navigation.navigate('DetalheProduto',
                        {nomeDoProduto:produto.item.nome,
                        unidadeDoProduto:produto.item.unidade,
                        precoDoProduto:produto.item.preco,
                        imagemDoProduto:produto.item.imagemURI,
                        idDoProduto:produto.item.id})}
                    />
                }
            />
                <TouchableOpacity style={styles.icon} onPress = {() => {props.navigation.navigate('CadastrarProduto')}}>
                    <Ionicons name="ios-add" size={35} color="black"/> 
                </TouchableOpacity>
        </SafeAreaView>   
    )
}


const styles = StyleSheet.create({
    container:{
        borderWidth: 0.4,
        borderColor: "#191919",
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        flex: 1,
        margin: 6,
        elevation: 1.5,
        shadowOpacity: 0.2
    },

    imagem:{
        height: 80,
        width: 100,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },

    descricao:{
        flex: 2,
        padding: 10
    },

    titulo:{
        fontWeight: 'bold',
        fontSize: 18
    },
    tituloNome:{
        color: 'gray'
    },icon:{
        position: 'absolute',
        width: 60,
        height: 60,
        backgroundColor: '#0094FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        right: 25,
        bottom: 25,
        elevation: 2,
        zIndex: 9,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        textShadowOffset:{
            width: 1,
            height: 3
        }        
    },
    nomes:{
        color: '#121212',
        fontSize: 20,
        paddingLeft: 8,
        paddingRight: 20
    }
})

export default Produtos;
