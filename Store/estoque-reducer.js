import { ADD_PRODUTO, LISTA_PRODUTOS, DELETAR_PRODUTO, EDITAR_PRODUTO} from "./estoque-actions";
import Produto from '../modelo/Produto'

const estadoInicial={
    produtos:[]
};
export default(estado = estadoInicial,action)=>{
    switch(action.type){
        case ADD_PRODUTO:
            const p = new Produto(action.dadosProduto.id.toString(), action.dadosProduto.nome, action.dadosProduto.preco,
            action.dadosProduto.unidade, action.dadosProduto.codigo, action.dadosProduto.imagem);
            console.log(JSON.stringify(p))
            return{produtos:estado.produtos.concat(p)};
        
        case LISTA_PRODUTOS:
            return{produtos: action.produtos.map(p => new Produto(p.id, p.nome, p.preco, p.unidade, p.codigo, p.imagem))}    


        case DELETAR_PRODUTO:
            let newArray = estado.produtos.filter((p) => {return p.id != action.dadosProduto.id.toString()});
            return{produtos: estado.produtos = newArray}

        case EDITAR_PRODUTO: 
        let removedArray = estado.produtos.filter((p) => {return p.id != action.produto.id.toString() });
        estado.produtos = removedArray;
        const novoProduto = new produto(action.produto.id.toString(), action.produto.nome, action.produto.preco, action.produto.unidade, action.produto.codigo, action.produto.imagem);
        return {produtos: estado.produtos.concat(novoProduto)};

        default:
            console.log('aqui'+JSON.stringify(action))
            return estado;
    }
}