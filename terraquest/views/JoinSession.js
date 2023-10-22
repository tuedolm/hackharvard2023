// JoinSession.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const JoinSession = () => {
  const [sessionId, setSessionId] = useState('');

  const joinGame = () => {
    // Your logic to handle joining the game
    console.log('Joining game with session id: ', sessionId);
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

export default JoinSession;
