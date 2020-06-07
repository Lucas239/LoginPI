import React, {useState} from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Image, TextInput, TouchableOpacity, Text, Button} from 'react-native';
import{useDispatch} from 'react-redux';
import * as estoqueActions from '../Store/estoque-actions';
import { ScrollView } from 'react-native-gesture-handler';
import TiraFoto from '../Components/TiraFoto';

const CadastrarProduto=(props)=> {
	const[nomeProduto, setNomeProduto] = useState('');
	const[precoProduto, setPrecoProduto] = useState('');
	const[unidadeProduto, setUnidadeProduto] = useState('');
	const[codigoProduto, setCodigoProduto] = useState('');

	const novoNome = (texto)=>{
		setNomeProduto(texto);
	}
	const novoPreco = (texto)=>{
		setPrecoProduto(texto);
	}
	const novaUnidade = (texto)=>{
		setUnidadeProduto(texto);
	}
	const novoCodigo = (texto)=>{
		setCodigoProduto(texto);
	}

	const adicionarProduto = ()=>{
		dispatch(estoqueActions.addProduto(nomeProduto, precoProduto, unidadeProduto, codigoProduto, imagemURI));
		props.navigation.goBack();
	}
	const dispatch = useDispatch();

	const [imagemURI, setImagemURI] = useState();

	const fotoTirada = imagemURI=>{
		setImagemURI(imagemURI);
	}

	return (
		<KeyboardAvoidingView style={styles.back}>

			<View style={styles.logo}>
			<Image
			source={require('../assets/produto.png')}
			/>
			</View>

			<ScrollView style={styles.container}>
				<TiraFoto onFotoTirada = {fotoTirada}/>
				<TextInput
					placeholder="Nome do Produto"
					autoCorrect={false}
					onChangeText={novoNome}
					value={nomeProduto}
					style={styles.input}
				/>
				<TextInput
					placeholder="Preço"
					autoCorrect={false}
					onChangeText={novoPreco}
					value={precoProduto}
					style={styles.input}
				/>
				<TextInput
					placeholder="Unidade"
					autoCorrect={false}
					onChangeText={novaUnidade}
					value={unidadeProduto}
					style={styles.input}
				/>
				<TextInput
					placeholder="Código do Produto"
					autoCorrect={false}
					onChangeText={novoCodigo}
					value={codigoProduto}
					style={styles.input}
				/>
			<TouchableOpacity style={styles.btnSubmit} onPress = {adicionarProduto}>
				<Text style={styles.submitText}>Cadastrar Produto</Text>
			</TouchableOpacity>
			</ScrollView>

		</KeyboardAvoidingView>

	);
 
}

const styles = StyleSheet.create(
	{
	  back: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#191919'
	},
	btnCadastrar:{
		paddingTop: 25
	},
	logo:{
		flex:1,
		justifyContent: 'center'
	},
	container:{
		flex: 1,
		width: '90%',
		paddingBottom: 50,
		paddingLeft: 25
	},
	input: {
		backgroundColor: '#121212',
		width: '90%',
		marginBottom: 15,
		color: 'white',
		fontSize: 20,
		borderRadius: 7,
		padding: 10

	},
	btnSubmit: {
		backgroundColor: '#35AAFF',
		width: '90%',
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 7
	},

	submitText:{
		color: '#FFF',
		fontSize: 18
	},

	btnRegister:{
		marginTop: 10,
	},

	registerText:{
		color: '#FFF'
	},

	textInput:{
		textAlign: 'center',
		fontSize: 20,
		color: '#FFF',
		fontWeight:'bold'
	},

	text: {
		marginTop: 65,
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 30,
		paddingRight: 30,
		alignItems: 'center'
	  }

	
});

export default CadastrarProduto;

