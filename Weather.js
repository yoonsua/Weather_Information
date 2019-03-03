import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import {LinearGradient} from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
  Rain: {
    colors: ['#00C6F8', '#0058EA'],
    title: "It's raining today.",
    subtitle: "Take your umbrella.",
    icon: 'weather-rainy'
  },
  Clear: {
    colors: ['#FEF253', '#FF7300'],
    title: "The weather is clear today.",
    subtitle: "Apply your sunscreen.",
    icon: 'weather-sunny'
  },
  Thunderstorm: {
    colors: ['#00ECBC', '#007ADF'],
    title: "Thunderstorm is a day of lightning.",
    subtitle: "Stay home as much as possible.",
    icon: 'weather-lightning'
  },
  Clouds: {
    colors: ['#D7D2CC', '#304352'],
    title: "The weather is cloudy today.",
    subtitle: "It may rain.",
    icon: 'weather-cloudy' 
  },
  Snow: {
    colors: ['#7DE2FC', '#B9B6E5'],
    title: "Today is snowing.",
    subtitle: "Go outside and make a snowman.",
    icon: 'weather-snowy'
  },
  Drizzle: {
    colors: ['#89F7FE', '#66A6FF'],
    title: "Drizzle falls.",
    subtitle: "Take your umbrella.",
    icon: 'weather-hail'
  },
  Haze: {
    colors: ['#89F7FE', '#66A6FF'],
    title: "It is foggy.",
    subtitle: "Be careful.",
    icon: 'weather-windy'
  },
  Mist: {
    colors: ['#89F7FE', '#66A6FF'],
    title: "Mist",
    subtitle: "Be careful.",
    icon: 'weather-fog'
  }
}

function Weather({ weatherName, temp }) {
  console.log(weatherName);
  return (
    <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
      <View style={styles.upper}>
        <MaterialCommunityIcons color='white' size={144} name={weatherCases[weatherName].icon} />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  temp: {
    fontSize: 43,
    backgroundColor: 'transparent',
    color: 'white',
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    backgroundColor: 'transparent',
    color: 'white',
    marginBottom: 10,
    fontWeight: '300'
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: 'transparent',
    color: 'white',
    marginBottom: 80
  }
})