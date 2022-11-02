import {useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

const GoalInput = ({onGoalAdd}) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    onGoalAdd(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        placeholder="Enter your goal here"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  inputText: {
    borderColor: '#ccc',
    borderWidth: 1,
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
