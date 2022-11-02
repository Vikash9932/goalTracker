import {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native';

const GoalInput = ({onGoalAdd, showModal, onCancel}) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    onGoalAdd(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Enter your goal here"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          autoFocus
        />
        <View style={styles.inputButtons}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#530acc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#dd187b" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#7318c9',
  },
  image: {
    width: 100,
    height: 100,
    margin: 12,
  },
  inputText: {
    borderColor: '#ccc',
    borderWidth: 1,
    width: '100%',
    padding: 12,
    backgroundColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
  },
  inputButtons: {
    marginTop: 12,
    flexDirection: 'row-reverse',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default GoalInput;
