import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './Weather';

const API_KEY = "e65bb55c287a3b4f4acb39ef3839b90d";

export default class App extends Component {
  state = { // 날씨 데이터 외에 정보를 받았는지, 안받았는지 알려주는 indicator 필요
    isLoaded: false, // 데이터 api 불러오면 true
    error: null,
    temperature: null, // weather code, 온도 가져오기
    name: null
  };
  componentDidMount() { // 현재 위치정보 가져오기
    navigator.geolocation.getCurrentPosition ( position => {
      this._getWeather(position.coords.latitude, position.coords.longitude);
    }, error => {
        this.setState({
          error: error
        });
    });
  }  

  _getWeather = (lat, long) => { // 경도와 위도를 받아오면 실행
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`) // api
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState ({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
      });
    });
  };

  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {/* 로딩X -> 로딩화면 / 로딩O -> 정보화면 */}
        { isLoaded ? ( <Weather weatherName={name} temp = {Math.ceil(temperature - 273.15)}/> ) : (
          <View style={styles.loading}> 
            <Text style={styles.loadingText}>Getting weather information</Text>
            { error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorText:{
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 80
  }
});
