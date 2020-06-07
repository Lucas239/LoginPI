import React, {useState} from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Image, TextInput, TouchableOpacity, Text} from 'react-native';

const LoginADM=(props)=> {

	return (
		<KeyboardAvoidingView style={styles.back}>

			<View style={styles.logo}>
			<Image
			source={require('../assets/down.png')}
			/>
			</View>

			<View style={styles.container}>
				<TextInput
				placeholder="CNPJ"
				autoCorrect={false}
				onChangeText={()=>{}}
				style={styles.input}
				/>

			<TextInput
				placeholder="CPF do responsável"
				autoCorrect={false}
				onChangeText={()=>{}}
				style={styles.input}
				/>

			<TouchableOpacity style={styles.btnSubmit} onPress = {() => {props.navigation.navigate('Produtos')}}>
				<Text style={styles.submitText}>Acessar</Text>
				
			</TouchableOpacity>

			<TouchableOpacity style={styles.btnRegister} onPress = {() => {props.navigation.navigate('CadastroLoja')}}>
				<Text style={styles.registerText}>CADASTRE-SE</Text>
			</TouchableOpacity> 
			</View>

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
	  produtoView: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	produtoInputText: {
		width: '80%',
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		padding: 4
	},
	textoTitulo: {
		textAlign: 'center',
		padding: 5,
		fontSize: 30
	},
	textoText: {
		textAlign: 'center',
		paddingBottom: 20,
		paddingTop: 5,
		fontSize: 15
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
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%',
		paddingBottom: 50
	},
	input: {
		backgroundColor: '#FFF',
		width: '90%',
		marginBottom: 15,
		color: '#222',
		fontSize: 17,
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
	}
	
});
export default LoginADM;


