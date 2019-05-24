import React from 'react';
import { StyleSheet, Text, ScrollView, createStackNavigator, createAppContainer, View, Link } from 'react-native';
import Visual from './Vis';
import AtmSelectionChal from './Atmselectionchal';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <AtmSelectionChal>
          </AtmSelectionChal>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
