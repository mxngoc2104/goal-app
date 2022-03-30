import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/images/goal.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#30adbf"/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center", // MAIN AXIS
    alignItems: "center", // CROSS AXIS
    padding: 16,
    backgroundColor: '#ffd966'
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#f4cccc",
    backgroundColor: "#f4cccc",
    color: "#a64d79",
    borderRadius: 6, // Rounded Corner
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row-reverse",
  },
  button: {
    width: 100,
    marginHorizontal: 9,
  },
});

export default GoalInput;
