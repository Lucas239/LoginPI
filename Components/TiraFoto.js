import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';
import Cores from '../Constantes/Cores';
import * as ImagePicker from 'expo-image-picker';

const TiraFoto = (props) => {

    const [imagemURI, setImagemURI] = useState();

    const tirarFoto = async () => {
        const foto = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1
        });

        //console.log(foto);
        setImagemURI(foto.uri);
        props.onFotoTirada(foto.uri);
    }
    return (
        <View style={estilos.principal}>
            <View style={estilos.previewDaImagem}>

                {
                    !imagemURI ?
                        <Text>Nenhuma foto adicionada.</Text>
                        :
                        <Image
                            style={estilos.imagem}
                            source={{ uri: imagemURI }}
                        />
                }

            </View>
            <Button
                title="Tirar foto"
                color={Cores.primary}
                onPress={tirarFoto}
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    principal: {
        alignItems: 'center',
        marginBottom: 15,
        paddingRight:30
    },
    previewDaImagem: {
        width: '90%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderColor: 'black',
        borderWidth: 5,
        backgroundColor:'white'
    },
    imagem: {
        width: '100%',
        height: '100%'
    }
});
export default TiraFoto;