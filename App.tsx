import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TouchableWithoutFeedbackExample from "./TouchableWithoutFeedback";
import { useCallback, useState } from "react";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";

export default function App() {
  const [count, setCount] = useState(0);

  const onPress = useCallback(() => {
    setCount(count + 1);
  }, [count, setCount]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Lab1 />
      <Lab2 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
