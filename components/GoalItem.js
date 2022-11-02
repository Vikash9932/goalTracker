import {View, Text, StyleSheet, Pressable} from 'react-native';

const GoalItem = ({item, onGoalDelete}) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#960ddd'}}
        onPress={onGoalDelete.bind(this, item.id)}
        style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={styles.goalItemText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#530acc',
  },
  goalItemText: {
    padding: 8,
    color: 'white',
  },
  pressedItem: {
    opacity: 0.7,
  },
});

export default GoalItem;
