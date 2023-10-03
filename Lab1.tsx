import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import TouchableWithoutFeedbackExample from "./TouchableWithoutFeedback";
import { useCallback, useState } from "react";

export default function Lab1() {
  const [count, setCount] = useState(0);

  const onPress = useCallback(() => {
    setCount(count + 1);
  }, [count, setCount]);

  return (
    <>
      <Text style={{ fontSize: 36 }}>Lab 1</Text>

      <Text style={{ fontSize: 24, paddingVertical: 20 }}>Variant 1 Example 1</Text>
      <Pressable onPress={onPress}>
        <Text>I'm pressable!</Text>
      </Pressable>
      <Text style={{ fontSize: 24, paddingVertical: 20 }}>Variant 1 Example 2</Text>
      <Pressable onPress={onPress}>
        <View
          style={{
            flexDirection: "row",
            height: 100,
            width: 500,
            padding: 20,
          }}
        >
          <View style={{ backgroundColor: "blue", flex: 0.3 }} />
          <View style={{ backgroundColor: "red", flex: 0.5 }} />
        </View>
      </Pressable>
      <Text style={{ fontSize: 24, paddingVertical: 20 }}>Variant 2 Example 1</Text>
      <TouchableWithoutFeedbackExample count={count} onClick={onPress} />
    </>
  );
}
