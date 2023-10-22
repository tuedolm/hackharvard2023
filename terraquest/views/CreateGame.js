import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CreateGame = () => {
  const [sessionId, setSessionId] = useState('');
  const [questions, setQuestions] = useState([
    { unlockKeyword: '', question: '', answer: '', hint: '' },
    { unlockKeyword: '', question: '', answer: '', hint: '' },
    { unlockKeyword: '', question: '', answer: '', hint: '' },
  ]);

  const startGame = async () => {
    console.log('Starting game with session id: ', sessionId);
    console.log('Questions:', questions);

    // Fetch API logic to send data to MongoDB
    const response = await fetch('YOUR_MONGODB_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sessionId, questions }),
    });

    const data = await response.json();
    console.log('Response from MongoDB:', data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Session</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Session ID"
        value={sessionId}
        onChangeText={text => setSessionId(text)}
      />
      {questions.map((question, index) => (
        <View key={index}>
          <TextInput
            style={styles.input}
            placeholder={`Unlock Keyword for Question ${index + 1}`}
            value={question.unlockKeyword}
            onChangeText={text => {
              const updatedQuestions = [...questions];
              updatedQuestions[index].unlockKeyword = text;
              setQuestions(updatedQuestions);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder={`Question ${index + 1}`}
            value={question.question}
            onChangeText={text => {
              const updatedQuestions = [...questions];
              updatedQuestions[index].question = text;
              setQuestions(updatedQuestions);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder={`Answer for Question ${index + 1}`}
            value={question.answer}
            onChangeText={text => {
              const updatedQuestions = [...questions];
              updatedQuestions[index].answer = text;
              setQuestions(updatedQuestions);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder={`Hint for Question ${index + 1}`}
            value={question.hint}
            onChangeText={text => {
              const updatedQuestions = [...questions];
              updatedQuestions[index].hint = text;
              setQuestions(updatedQuestions);
            }}
          />
        </View>
      ))}
      <Button title="Start Game" onPress={startGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '100%',
  },
});

export default CreateGame;
