// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateSession from './views/CreateSession';
import JoinSession from './views/JoinSession';
import { StyleSheet,View,Text,Button, } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateSession" component={CreateSession} />
        <Stack.Screen name="JoinSession" component={JoinSession} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terra Quest</Text>
      <Button
        title="Create Session"
        onPress={() => navigation.navigate('CreateSession')}
      />
      <Button
        title="Join Session"
        onPress={() => navigation.navigate('JoinSession')}
      />
    </View>
  );
};

export default App;
