import { Pressable, StyleSheet, Text, View } from "react-native";
import TouchableWithoutFeedbackExample from "./TouchableWithoutFeedback";
import { useCallback, useState } from "react";
import CheckBox from "expo-checkbox";
import { AntDesign, Feather } from "@expo/vector-icons";

export enum MainCheckboxState {
  ALL = "ALL",
  SOME = "SOME",
  NONE = "NONE",
}

export default function Lab2() {
  const [state, setState] = useState({
    react: false,
    next: false,
    java: false,
  });
  const [toggleButton, setToggleButton] = useState(false);

  const onPress = useCallback(() => {
    const chosenElems = Object.values(state).filter((x) => Boolean(x)).length;
    
    if (chosenElems === 3) return setState({
      react: false,
      next: false,
      java: false,
    });

    return setState({
      react: true,
      next: true,
      java: true,
    });
  }, [state]);

  const mainCheckBoxState = (() => {
    const chosenElems = Object.values(state).filter((x) => Boolean(x)).length;
    if (chosenElems === 3) return MainCheckboxState.ALL;
    if (chosenElems === 0) return MainCheckboxState.NONE;
    return MainCheckboxState.SOME;
  })();

  const iconName = ((): any => {
    switch (mainCheckBoxState) {
      case MainCheckboxState.ALL:
        return "check-square";
      case MainCheckboxState.SOME:
        return "minus-square";
      default:
        return "square";
    }
  })();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Select languages</Text>

      <Pressable style={{ width: 20 }} onPress={onPress}>
        <Feather name={iconName} size={20} color="#009687" />
      </Pressable>
      <View style={styles.row}>
        <CheckBox
          disabled={false}
          value={state.react}
          onValueChange={(newValue) => setState({ ...state, react: newValue })}
        />
        <Text>React.js</Text>
      </View>
      <View style={styles.row}>
        <CheckBox
          disabled={false}
          value={state.next}
          onValueChange={(newValue) => setState({ ...state, next: newValue })}
        />
        <Text>Next.js</Text>
      </View>
      <View style={styles.row}>
        <CheckBox
          disabled={false}
          value={state.java}
          onValueChange={(newValue) => setState({ ...state, java: newValue })}
        />
        <Text>Java</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    top: 150,
  },
  row: {
    top: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
