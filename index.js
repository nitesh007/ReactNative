//IMPORT A LIBRARY TO HELP CREATE COMPONENT;
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/component/header'

const App = () => {
    return (
        <Header />
    )
}


AppRegistry.registerComponent('albums',() => App)