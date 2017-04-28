import React, { Component } from 'react';
import { AppRegistry, Switch, Text, StyleSheet, TextInput, View } from 'react-native';

export default class BMRCalc extends Component {
  constructor (props) {
    super(props);
    this.state = {weight: 0, height: 0, age: 0, male: true};
  }

  render () {
    return (
      <View style={{padding: 10}}>
        <Text style={{padding: 10, fontSize: 42, fontWeight: "bold", textAlign: "center", margin: 20, marginTop: 40}}>
          { this.state.gender ? Math.round(10*this.state.weight*(0.453592) + 6.25*this.state.height*(2.54) - 5*this.state.age + 5) : Math.round(10*this.state.weight*(0.453592) + 6.25*this.state.height*(2.54) - 5*this.state.age - 161) } kcal
        </Text>
        <TextInput
          style={{height: 40, textAlign: "center"}}
          placeholder="Enter your weight in pounds"
          keyboardType="numeric"
          onChangeText={(weight) => this.setState({weight})}
        />
        <TextInput
          style={{height: 40, textAlign: "center"}}
          placeholder="Enter your height in inches"
          keyboardType="numeric"
          onChangeText={(height) => this.setState({height})}
        />
        <TextInput
          style={{height: 40, textAlign: "center"}}
          placeholder="Enter your age in years"
          keyboardType="numeric"
          onChangeText={(age) => this.setState({age})}
        />
        <View style={{flexDirection: "row", justifyContent: "center", alignContent: "center", marginTop: 20}}>
          <Text style={{ lineHeight: 31, fontWeight: "bold", fontSize: 20, color: "lightpink"}}>Female</Text>
          <Switch
            onValueChange={(gender) => this.setState({gender})}
            style={{marginLeft: 10, marginRight: 10}}
            value={this.state.gender} />
          <Text style={{ lineHeight: 31, fontWeight: "bold", fontSize: 20, color: "powderblue"}}>Male</Text>
        </View>
        <Text style={{margin: 20, textAlign: "center", color: "gray"}}>
          This calculator is based on the Mifflin St Jeor Equation for calculating Basal Metabolic Rate, which has been found to be the most accurate!
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('BMRCalc', () => BMRCalc);
