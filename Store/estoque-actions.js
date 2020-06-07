export const ADD_PRODUTO = 'ADD_PRODUTO';
export const LISTA_PRODUTOS = 'LISTA_PRODUTOS';
export const DELETAR_PRODUTO = 'DELETAR_PRODUTO';
export const EDITAR_PRODUTO = 'EDITAR_PRODUTO';

import * as FileSystem from 'expo-file-system';
import {inserirProduto, buscarProduto, delProduto, editarProduto} from '../helpers/db';

// export const addProduto = (nomeProduto, precoProduto, unidadeProduto, codigoProduto, imagem)=>{
//     return{
//         type:ADD_PRODUTO, dadosProduto:{nomeProduto:nomeProduto, precoProduto:precoProduto,
//             unidadeProduto:unidadeProduto, codigoProduto: codigoProduto, imagem:imagem}
//     }
// }

export const addProduto = (nome, preco, unidade, codigo, imagem) => {
    return async dispatch => {
        const nomeArquivo = imagem.split("/").pop();
        const novoPath = FileSystem.documentDirectory + nomeArquivo;

        try {

            await FileSystem.moveAsync({
                from: imagem,
                to: novoPath
            })

            const resultadoDB = await inserirProduto(
                nome,
                preco,
                unidade,
                codigo,
                novoPath
            );

            console.log(resultadoDB)

            dispatch({type: ADD_PRODUTO, dadosProduto: {id: resultadoDB.insertId, nome: nome, preco: preco, unidade: unidade, codigo: codigo, imagem: novoPath}})
            
        } catch (err) {
            console.log(err);
            throw err;
            
        }

    };
}

export const listarProdutos = () =>{
    return async dispatch =>{
        try {
            const resultadoDB = await buscarProduto();
            dispatch({type: LISTA_PRODUTOS, produtos: resultadoDB.rows._array});
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}


export const deletarProduto = (id) =>{
    return async dispatch => {
        try {
            const resultadoDB = await delProduto(id);
            dispatch({type: DELETAR_PRODUTO, produto:{id: id}})
            
        } catch (err) {
            console.log(err);
            throw err;
            
        }
    }
}

export const atualizarProduto = (id, nome, preco, unidade, codigo, imagem) => {
    return async dispatch => {
        const nomeArquivo = imagem.split("/").pop();
        const novoPath = FileSystem.documentDirectory + nomeArquivo;
    
        try {
            await FileSystem.moveAsync({
                from: imagem,
                to: novoPath
            })
            const resultadoDB = await editarProduto(
                id,
                nome,
                preco,
                unidade,
                codigo,
                novoPath
            )

            dispatch({ type: EDITAR_PRODUTO, produto: { id: id, nome: nome, preco: preco, unidade: unidade, codigo: codigo, imagem: novoPath } })
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
}