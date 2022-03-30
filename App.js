import {
  StyleSheet,
  View,
  Button,
  FlatList,
  ImageBackground,
} from "react-native";
import { React, useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisable, setModalIsVisable] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisable(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisable(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }, // this is ItemData.item
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <ImageBackground
        source={require("./assets/images/background-image.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
        blurRadius={1}
      >
        <Button
          title="Add new goal"
          color="orange"
          onPress={startAddGoalHandler}
        />
        {modalIsVisable && (
          <GoalInput
            visible={modalIsVisable}
            onAddGoal={addGoalHandler}
            onCancel={endAddGoalHandler}
          />
        )}
        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  value={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalContainer: {
    flex: 5,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
});
