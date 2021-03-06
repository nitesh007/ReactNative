//IMPORT A LIBRARY TO HELP CREATE COMPONENT;
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/component/header';
import AlbumsList from './src/component/AlbumsList';

const App = () => (
        <View style={{ flex: 1 }}>
        <Header headerText={'Albums!'} />
        <AlbumsList />
        </View>
    );


AppRegistry.registerComponent('albums', () => App);
