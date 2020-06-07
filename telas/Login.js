import React, {useState} from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import ENV from '../env';

import * as firebase from 'firebase/app';
import 'firebase/auth';

if(!firebase.apps.length)
  firebase.initializeApp(ENV)

	const Login = (props) =>{
	const[email, setEmail] = useState('');
	const[password, setPassword] = useState('');
	const[isAuthenticated, setIsAuthenticated] = useState(false);

	const capturarEmail = (email) =>{
		setEmail(email);
	}

	const capturarPassword = (password) =>{
		setPassword(password);
	}
	if(isAuthenticated === true){
		props.navigation.navigate('Produtos');
	}
	const login = async() =>{
		if (email.length < 4) {
			alert('Please enter an email address.');
			return;
		}
		if (password.length < 4) {
			alert('Please enter a password.');
			return;
		}
		try {
			const user = await firebase.auth().signInWithEmailAndPassword(email, password);
			setIsAuthenticated(true);
			alert("logado com sucesso");
			//console.log(user);
			console.log(isAuthenticated);
		} catch (error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			if (errorCode === 'auth/wrong-password') {
			  alert('Wrong password.');
			} else {
			  alert(errorMessage);
			}
			console.log(error);
		}
	}
	return (
		<KeyboardAvoidingView style={styles.back}>

			<View style={styles.logo}>
			<Image
			source={require('../assets/down.png')}
			/>
			</View>

			<View style={styles.container}>
				<TextInput
					style={styles.input}
					placeholder="Digite seu email"
					value={email}
					onChangeText={capturarEmail}
				/>
				<TextInput
					style={styles.input}
					placeholder="Digite seu email"
					value={password}
					onChangeText={capturarPassword}
				/>

			<TouchableOpacity style={styles.btnSubmit} onPress = {login}>
				<Text style={styles.submitText}>Acessar</Text>
				
			</TouchableOpacity>

			<TouchableOpacity style={styles.btnRegister} onPress = {() => {props.navigation.navigate('CadastroLogin')}}>
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

export default Login;

