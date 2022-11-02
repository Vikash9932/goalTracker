import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Button} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
  const [goalsList, setGoalsList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function startAddGoalHandler() {
    setIsModalVisible(true);
  }
  function endAddGoalHandler() {
    setIsModalVisible(false);
  }

  const addGoalHandler = enteredGoalText => {
    if (!enteredGoalText) return;
    setGoalsList(currentGoalsList => [
      ...currentGoalsList,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = id => {
    setGoalsList(currentGoalsList => {
      return currentGoalsList.filter(goal => goal.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Button
        color="#530acc"
        onPress={startAddGoalHandler}
        title="Add New Goal"
      />
      <GoalInput
        showModal={isModalVisible}
        onGoalAdd={addGoalHandler}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={itemData => (
            <GoalItem item={itemData.item} onGoalDelete={deleteGoalHandler} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 6,
  },
});

export default App;
