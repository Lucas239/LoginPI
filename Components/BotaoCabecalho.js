import React from 'react';
import{HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';
import {Platform} from 'react-native';

import Cores from '../Constantes/Cores'

'md-add'

const BotaoCabecalho = (props) =>{
    return(
        <HeaderButton
            {...props}
            IconComponent = {Ionicons}
            iconSize={24}
            color={Platform.OS==='android'?'black':Cores.primary}
        />
    );
};
export default BotaoCabecalho;