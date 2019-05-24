import React from 'react';
import { StyleSheet, Text, ScrollView, View, Link } from 'react-native';
import Slider from 'react-native';

class Withdraw extends React.Component{
    render()
    {
        return(
            <Slider
                style={{width: 200, height: 40}}
                minimumValue={0}
                maximumValue={1}
            />
        );
    }
}
export default Withdraw;