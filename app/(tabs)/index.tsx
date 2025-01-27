import { View, ScrollView, StyleSheet } from "react-native";
import { Button, Dialog, Portal, TextInput, Text } from "react-native-paper";
import { useState } from "react";

interface DiceResult {
  id: number;
  dice: string;
  rolls: number[];
  total: number;
}

const ResultItem = ({ result }: { result: DiceResult }) => (
  <View style={styles.resultItem}>
    <Text style={styles.diceLabel}>{result.dice}</Text>
    <Text style={styles.rollResults}>Rolls: {result.rolls.join(", ")}</Text>
    <Text style={styles.totalResult}>Total: {result.total}</Text>
  </View>
);

export default function DiceRollerScreen() {
  const [results, setResults] = useState<DiceResult[]>([]);
  const [customDiceVisible, setCustomDiceVisible] = useState(false);
  const [customDiceSides, setCustomDiceSides] = useState("");
  const [diceCount, setDiceCount] = useState("1");
  const [modifier, setModifier] = useState("0");

  const rollDice = (sides: number) => {
    const count = parseInt(diceCount) || 1;
    const mod = parseInt(modifier) || 0;
    const rolls = [];
    let total = 0;

    for (let i = 0; i < count; i++) {
      const roll = Math.floor(Math.random() * sides) + 1;
      rolls.push(roll);
      total += roll;
    }

    total += mod;

    const newResult = {
      id: Date.now(),
      dice: `${count}d${sides}${mod >= 0 ? "+" : ""}${mod}`,
      rolls,
      total,
    };

    setResults((prev: any) => [newResult, ...prev]);
  };

  const clearResults = () => {
    setResults([]);
  };

  const handleCustomDiceRoll = () => {
    const sides = parseInt(customDiceSides);
    if (sides > 1) {
      rollDice(sides);
      setCustomDiceVisible(false);
      setCustomDiceSides("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <View style={styles.inputRow}>
          <TextInput
            label="Number of dice"
            value={diceCount}
            onChangeText={setDiceCount}
            keyboardType="numeric"
            style={[styles.diceCountInput, styles.input]}
          />
          <TextInput
            label="Modifier"
            value={modifier}
            onChangeText={setModifier}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
        <View style={styles.buttonGrid}>
          {[4, 6, 8, 10, 12, 20, 100].map((sides) => (
            <Button
              key={sides}
              mode="contained"
              onPress={() => rollDice(sides)}
              style={styles.diceButton}
            >
              d{sides}
            </Button>
          ))}
          <Button
            mode="contained"
            onPress={() => setCustomDiceVisible(true)}
            style={styles.diceButton}
          >
            Custom
          </Button>
        </View>
      </View>

      <View style={styles.lowerSection}>
        <ScrollView style={styles.resultsContainer}>
          {results.map((result) => (
            <ResultItem key={result.id} result={result} />
          ))}
        </ScrollView>
        <Button mode="contained" onPress={clearResults}>
          Clear Results
        </Button>
      </View>

      <Portal>
        <Dialog
          visible={customDiceVisible}
          onDismiss={() => setCustomDiceVisible(false)}
        >
          <Dialog.Title>Custom Dice</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Number of sides"
              value={customDiceSides}
              onChangeText={setCustomDiceSides}
              keyboardType="numeric"
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setCustomDiceVisible(false)}>Cancel</Button>
            <Button onPress={handleCustomDiceRoll}>Roll</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  upperSection: {
    flex: 2,
  },
  lowerSection: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 16,
  },
  buttonGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 16,
  },
  diceButton: {
    width: "48%",
    marginBottom: 8,
  },
  diceCountInput: {
    marginBottom: 0,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  input: {
    flex: 1,
    marginHorizontal: 4,
  },
  resultsContainer: {
    flex: 1,
    marginBottom: 16,
  },
  resultItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#f9f9f9",
    marginBottom: 8,
    borderRadius: 8,
  },
  diceLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  rollResults: {
    fontSize: 16,
    color: "#666",
  },
  totalResult: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
    color: "#0a7ea4",
  },
});
