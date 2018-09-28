import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { Header } from './components/common';
import { createStore } from 'redux';
import reducers from './reducers';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText = {"FireTest"} />
      </View>
    </Provider>
  )
}

export default App;
