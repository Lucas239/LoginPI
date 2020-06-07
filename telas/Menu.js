import React, {useState} from 'react';
import { StyleSheet, KeyboardAvoidingView, View, Image, TextInput, TouchableOpacity, Text} from 'react-native';

const Menu=(props) =>{

	return (
		<KeyboardAvoidingView style={styles.back}>

			<View style={styles.container}>

				<Image
					source={require('../assets/menu.png')}
				/>

           </View>
				<TouchableOpacity style={styles.btLogin} onPress = {() => {props.navigation.navigate('Login')}}>
					<Text style={styles.submitText}>Login</Text>
					
				</TouchableOpacity>

				<TouchableOpacity style={styles.BtLoginAdm} onPress = {() => {props.navigation.navigate('LoginADM')}}>
					<Text style={styles.submitText}>Login ADM</Text>
					
				</TouchableOpacity>
			

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
	container:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%',
		paddingBottom: 50
	},
	btnSubmit: {
		backgroundColor: '#35AAFF',
		width: '90%',
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
        borderRadius: 7,
        marginBottom: 15
	},

	submitText:{
		color: '#FFF',
		fontSize: 18
    },

    btLogin:{
        backgroundColor: '#35AAFF',
		width: '90%',
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
        borderRadius: 7,
        marginBottom: 15
    },
    btLoja:{
        backgroundColor: '#35AAFF',
		width: '90%',
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
        borderRadius: 7,
        marginBottom: 15
    },

    BtLoginAdm:{

        backgroundColor: '#35AAFF',
		width: '90%',
		height: 45,
		alignItems: 'center',
		justifyContent: 'center',
        borderRadius: 7,
        marginBottom: 15

    }
    
});
export default Menu;


