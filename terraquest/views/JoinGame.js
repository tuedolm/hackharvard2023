import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const JoinGame = () => {
  const [sessionId, setSessionId] = useState('');

  const joinGame = async () => {
    // Fetch API logic to check if the game with the provided session ID exists
    const response = await fetch(`YOUR_MONGODB_URL/${sessionId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (data) {
      console.log('Joining game with session id: ', sessionId);
      // Additional logic to handle joining the game
    } else {
      console.log('Game with session id not found');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join Session</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Session ID"
        onChangeText={(text) => setSessionId(text)}
        value={sessionId}
      />
      <Button title="Join Game" onPress={joinGame} />
    </View>
  );
};

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
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default JoinGame;