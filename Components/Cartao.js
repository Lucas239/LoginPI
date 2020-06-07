import React from 'react';
import{View,StyleSheet} from 'react-native';
import Cores from '../Constantes/Cores'

const Cartao= (props)=>{
    return(
        <View style={{...estilos.cartao,...props.estilos}}>
            {props.children}
        </View>
    );
};

const estilos =StyleSheet.create({
    cartao:{
        shadowColor:Cores.shadowCartao,
            shadowOffset:{
                width:0,
                height:2
            },
        shadowRadius:6,
        shadowOpacity:0.32,
        backgroundColor:'white',
        elevation:4,
        padding:15,
        borderRadius:15
    }
});
export default Cartao;