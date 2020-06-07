import * as SQLite from 'expo-sqlite';
import { Alert } from 'react-native';


const db = SQLite.openDatabase("produtos.db");


export const init = () => {
    const promise = new Promise((resolve, reject)=>{
    db.transaction((tx) =>{
        tx.executeSql('CREATE TABLE IF NOT EXISTS tb_produto (id INTEGER PRIMARY KEY, nome TEXT NOT NULL, preco REAL NOT NULL, unidade INTEGER NOT NULL, codigo INTEGER NOT NULL, imagem TEXT NOT NULL);',
        [],
        () => {resolve()},
        (_,err) => {reject(err)}
        );
    });
 });
 return promise
}


export const inserirProduto = (nome, preco, unidade, codigo, imagem) => {
    const promise = new Promise ((resolve, reject) =>{
        db.transaction((tx) =>{
            tx.executeSql('INSERT INTO tb_produto(nome, preco, unidade, codigo, imagem)  VALUES (?,?,?,?,?)',
            [nome, preco, unidade, codigo, imagem],
            (_,resultado)=> {resolve(resultado)},
            (_err) => {reject(err)}
            );
        });
    });
    return promise
}


export const buscarProduto = () =>{
    const promise = new Promise((resolve, reject) =>{

        db.transaction((tx) =>{
            tx.executeSql(" SELECT * FROM tb_produto",
            [],
            (_,resultado) => {resolve(resultado)},
            (_,err) => {reject(err)}
            
            );
        });
    });
    return promise
}

export const delProduto = (id) =>{
    const promise = new Promise ((resolve, reject)=>{
        db.transaction((tx) =>{
            tx.executeSql('DELETE FROM tb_produto WHERE ID = ?',
            [id],
            (_, resultado) => {resolve(resultado)},
            (_, err) => {reject(err)}
            );
        });
    });
    return promise;
}

export const editarProduto = (nome, preco, unidade, codigo, imagem) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`UPDATE tb_produto SET NOME = ?, PRECO = ?, UNIDADE = ?, CODIGO = ?, IMAGEM = ? WHERE ID = ?`,
                [nome, preco, unidade, codigo, imagem, id],
                (_, resultado) => { resolve(resultado) },
                (_, err) => { reject(err) }
            )
                ;
        });
    });
    return promise;
}