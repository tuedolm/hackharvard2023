// CreateSession.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CreateSession = () => {
  const [sessionId, setSessionId] = useState('');

  const startGame = () => {
    // Your logic to handle starting the game
    console.log('Starting game with session id: ', sessionId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Session</Text>
      <Text style={styles.sessionText}>Session ID: {sessionId}</Text>
      <Button title="Start Game" onPress={startGame} />
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
  sessionText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default CreateSession;
