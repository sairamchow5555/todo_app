/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { Todo, todoContext } from './src/realm';
import { TodoList } from './src/TodoList';
const { RealmProvider } = todoContext;

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <TodoList />
      </View>
    </SafeAreaView>
  );
}

const AppWrapeer = () => {
  return(
    <RealmProvider>
      <App />
    </RealmProvider>
  );
}

export default AppWrapeer;
