import React, {useState} from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Image, TextInput, TouchableOpacity, Text, ScrollView} from 'react-native';

const Loja = (props)=> {

	return (
		<KeyboardAvoidingView style={styles.back}>

			<View style={styles.logo}>
			<Image
			source={require('../assets/store.png')}
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
				placeholder="Razão Social"
				autoCorrect={false}
				onChangeText={()=>{}}
				style={styles.input}
				/>
				<TextInput
				placeholder="Nome Fantasia"
				autoCorrect={false}
				onChangeText={()=>{}}
				style={styles.input}
				/>
				<TextInput
				placeholder="Endereço"
				autoCorrect={false}
				onChangeText={()=>{}}
				style={styles.input}
				/>
				<TextInput
				placeholder="Responsável"
				autoCorrect={false}
				onChangeText={()=>{}}
				style={styles.input}
				/>
				<TextInput
				placeholder="CPF Responsável"
				autoCorrect={false}
				onChangeText={()=>{}}
				style={styles.input}
				/>

			<TouchableOpacity style={styles.btnSubmit} onPress = {() => {props.navigation.navigate('Menu')}}>
				<Text style={styles.submitText}>Cadastrar Loja</Text>
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

export default Loja;

