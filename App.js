import { StyleSheet, Text, View, Button, TextInput } from "react-native";


export default function App() {
  return (
    <View>
      <View>
        <TextInput placeholder="Your course goal!" />
        <Button title="Add Goal" onPress={() => console.log(1)}/>
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
