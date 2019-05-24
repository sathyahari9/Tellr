import React from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Image } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import AtmSelectionChal from './Atmselectionchal';

const styles = StyleSheet.create({
    button1: {
        color: "#fff",
        backgroundColor: "#307FEA",
        padding: 25,
        textTransform: "uppercase",
        height: 100,
        width: 400,
        marginTop: 0
    },
    button2: {
        color: "#307FEA",
        backgroundColor: "#fff",
        borderWidth: 5,
        borderColor: "#307FEA",
        height: 500,
        width: 400,
        padding: 25,
        alignItems: 'center'
    },
    buttontext: {
        color: "#307FEA",
        margin: "auto",
        marginTop: 50,
        fontFamily: "Avenir",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 40,
        textTransform: "uppercase",
    },
    button1text: {
        color: "#fff",
        margin: "auto",
        fontFamily: "Avenir",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 40,
        textTransform: "uppercase",
    },
    row: {
        position: "relative",
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center",
        padding: 40
    },
    image1: {
        position: "relative",
        marginBottom: 40
    },
});

class Visual extends React.Component {
    render()
    {
        return(
        <ScrollView>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => this.props.navigation.push('Atm')}>
                <View style={styles.button2}>
                    <Image source={require('./assets/eyeregular.png')} style={styles.image1}>
                    </Image>
                    <Text style={styles.buttontext}>
                        VISUALLY CHALLENGED MODE
                    </Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <View style={styles.button1}>
                    <Text style={styles.button1text}>
                        VISUAL MODE
                    </Text>
                </View>
            </View>
        </ScrollView>
        );
    }
}

export default Visual;