import React, { Component } from 'react';
import { TextInput, View, StyleSheet, Text, Image } from 'react-native';

export default class Square extends Component {
  static navigationOptions = {
    title: 'Square'
  }

  constructor () {
    super();
    this.state = {
      side: '',
    }
  }

  handleSideChange(event) {
    this.setState({side: event.target.value})
  }

  render() {
    const perimeter = this.state.side * 4
    const areaOfSquare = Math.pow(this.state.side, 2)
    const diagonalLength = this.state.side * Math.sqrt(2)
    return (
      <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.text}>
          Perimeter: {perimeter.toFixed(2)}
        </Text>
        <Text style={styles.text}>
          Area of square: {areaOfSquare.toFixed(2)}
        </Text>
        <Text style={styles.text}>
          Diagonal length: {diagonalLength.toFixed(2)}
        </Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.text}>Side: </Text>
          <TextInput
            style={styles.textBox}
            onChangeText={(side) => this.setState({side})}
            value={this.state.side}
          />      
      </View>
      <View style={styles.containerBottom}>
      <View style={styles.bottom}>
        <Image 
          style= {{width: 200, height: 200}}
          source={require('../assets/squareVariables.png')} 
        />
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
        <Text style={styles.bottomText}>
          Perimeter: 4s
        </Text>
        <Text style={styles.bottomText}>
          Area of square: s^2
        </Text>
        <Text style={styles.bottomText}>
          Diagonal length: s√2
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
    backgroundColor: '#87CEFA',
    width: 100 + "%"
  },
  top : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 1,
    backgroundColor: '#00BFFF',
    width: 100 + "%"
  },
  bottomText: {
    fontSize: 15
  }
})