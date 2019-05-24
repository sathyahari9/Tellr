import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const styles = StyleSheet.create({
    change: {
        height: 400,
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        padding: 50
    },
    atm: {
        height: 400,
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
    },
    inner: {
        height: 400,
        width: 400,
        padding: 40,
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#307FEA"
    },
    card: {
        marginTop: 25,
        marginBottom: 50,
    },
    atmtext: {
        textAlign: "center",
        color: "#fff",
        fontFamily: "Avenir",
        fontSize: 30,
        fontWeight: "bold"
    }
});
export default class AtmCardChooser extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            _id: "string",
            type: "Credit Card",
            nickname: "string",
            rewards: 0,
            balance: 0,
            account_number: "string",
            customer_id: "string",
            counter: 0
        }
    }
    render()
    {
        return(
            <React.Fragment>
                <TouchableOpacity onPress={this.displayAtm}>
                    <View style={styles.change}>
                        <Image source={require('./assets/change.png')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.push('Amount')}>
                    <View style={styles.atm}>
                        <View style={styles.inner}>
                            <Image style={styles.card} source={require('./assets/creditcard.png')}/>
                            <Text style={styles.atmtext}>
                                {"Use " + this.state.type + " with account number " + this.state.nickname}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </React.Fragment>
        );
    }
    displayAtm = () => {
        const cust_id = "5ce30e65322fa06b67794ce7";
        const url = "http://api.reimaginebanking.com/customers/" + cust_id + "/accounts" +"?key=";
        const key = "0a317ccb3fe11979ba8dfe5572000f77";
        fetch(url+key)
        .then((response) => response.json())
        .then((responseJson) => {
        this.setState({
            _id: responseJson[this.state.counter].id,
            type: responseJson[this.state.counter].type,
            nickname: responseJson[this.state.counter].nickname,
            rewards: responseJson[this.state.counter].rewards,
            balance: responseJson[this.state.counter].balance,
            account_number: responseJson[this.state.counter].account_number,
            customer_id: responseJson[this.state.counter].customer_id,
            counter: this.state.counter + 1,
            });
        })
        .catch((error) => {
        console.error(error);
        });
    }
}