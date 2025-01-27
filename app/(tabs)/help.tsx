import { ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function HelpScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>How to Use the Dice Roller</Text>

      <Text style={styles.section}>Basic Controls</Text>
      <Text style={styles.text}>
        • Number of Dice: Enter how many dice you want to roll{"\n"}• Modifier:
        Add or subtract a number from the total roll{"\n"}• Clear Results:
        Removes all previous rolls
      </Text>

      <Text style={styles.section}>Rolling Dice</Text>
      <Text style={styles.text}>
        1. Select how many dice to roll{"\n"}
        2. Add a modifier if needed (can be positive or negative){"\n"}
        3. Click on a dice button (d4, d6, d8, etc.){"\n"}
        4. The result will show:{"\n"}
        {"   "}• The dice notation (e.g., "2d6+1"){"\n"}
        {"   "}• Individual roll results{"\n"}
        {"   "}• Total sum including modifier
      </Text>

      <Text style={styles.section}>Custom Dice</Text>
      <Text style={styles.text}>
        Use the "Custom" button to roll dice with any number of sides.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  section: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});
