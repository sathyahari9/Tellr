import React from 'react';
import { StyleSheet, Text, ScrollView, View, Link } from 'react-native';
import Visual from './Vis';
import AtmSelectionChal from './Atmselectionchal';
import AtmCardChooser from './card';
import Withdraw from './withdraw';
import {createStackNavigator, createAppContainer} from 'react-navigation';

// export default class App extends React.Component {
//   render() {
//     return (
//       <ScrollView>
//         <View style={styles.container}>
//           <AtmCardChooser>
//           </AtmCardChooser>
//         </View>
//       </ScrollView>
//     );
//   }
// }
class App extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </ScrollView>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: Visual,
    Atm: AtmSelectionChal,
    Card: AtmCardChooser,
    Amount: Withdraw
  },
  {
    initialRouteName: "Home",
    header: { visible: false }
  }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
