import React, { Component } from 'react';
import { TextInput, View, StyleSheet, Text, Image } from 'react-native';

export default class Circle extends Component {
  static navigationOptions = {
    title: 'Circle'
  }

  constructor () {
    super();
    this.state = {
      radius: '',
      angle: ''
    }
  }

  handleRadiusChange(event) {
    this.setState({radius: event.target.value})
  }

  render() {
    const circumference = 2 * Math.PI * this.state.radius
    const areaOfCircle = Math.PI * Math.pow(this.state.radius, 2)
    const arcLength = this.state.angle / 360 * 2 * Math.PI * this.state.radius
    const areaOfSector = this.state.angle / 360 * Math.PI * Math.pow(this.state.radius, 2)
    console.log('Radius: ', this.state.radius, 'Angle: ', this.state.angle)
    return (
      <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.text}>
          Circumference: {circumference.toFixed(2)}
        </Text>
        <Text style={styles.text}>
          Area of circle: {areaOfCircle.toFixed(2)}
        </Text>
        <Text style={styles.text}>
          Arc length: {arcLength.toFixed(2)}
        </Text>
        <Text style={styles.text}>
          Area of sector: {areaOfSector.toFixed(2)}
        </Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.text}>Radius: </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(radius) => this.setState({radius})}
            value={this.state.radius}
          />      
          <Text style={styles.text}>Angle:</Text>
          <TextInput 
            style={styles.textBox}
            onChangeText={(angle) => this.setState({angle})}
            value={this.state.angle}  
          />
      </View>
      <View style={styles.containerBottom}>
      <View style={styles.bottom}>
        <Image 
          style= {{width: 200, height: 200}}
          source={require('../assets/circleVariables.png')} 
        />
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
        <Text style={styles.bottomText}>
          Circumference: 2πr
        </Text>
        <Text style={styles.bottomText}>
          Area of circle: πr^2
        </Text>
        <Text style={styles.bottomText}>
          Arc length: α/360° * 2πr
        </Text>
        <Text style={styles.bottomText}>
          Area of sector: α/360° * πr^2
        </Text>
      </View>
      </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  containerBottom: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20
  },
  textBox: {
    height: 40,
    width: 150,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white'
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  text: {
    justifyContent: 'center',
    fontSize: 25
  },
  middle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: '#90EE90',
    width: 100 + "%"
  },
  top : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 1,
    backgroundColor: '#00FF7F',
    width: 100 + "%"
  },
  bottomText: {
    fontSize: 15
  }
})