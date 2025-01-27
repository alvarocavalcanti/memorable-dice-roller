import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button, Dialog, Portal, TextInput, Text } from 'react-native-paper';

const DiceRollerScreen = () => {
  const [results, setResults] = useState([]);
  const [customDiceVisible, setCustomDiceVisible] = useState(false);
  const [customDiceSides, setCustomDiceSides] = useState('');
  const [diceCount, setDiceCount] = useState('1');

  const rollDice = (sides) => {
    const count = parseInt(diceCount) || 1;
    const rolls = [];
    let total = 0;

    for (let i = 0; i < count; i++) {
      const roll = Math.floor(Math.random() * sides) + 1;
      rolls.push(roll);
      total += roll;
    }

    const newResult = {
      id: Date.now(),
      dice: `${count}d${sides}`,
      rolls,
      total
    };

    setResults(prev => [newResult, ...prev]);
  };

  const clearResults = () => {
    setResults([]);
  };

  const handleCustomDiceRoll = () => {
    const sides = parseInt(customDiceSides);
    if (sides > 1) {
      rollDice(sides);
      setCustomDiceVisible(false);
      setCustomDiceSides('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <TextInput
          label="Number of dice"
          value={diceCount}
          onChangeText={setDiceCount}
          keyboardType="numeric"
          style={styles.diceCountInput}
        />
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
            <View key={result.id} style={styles.resultItem}>
              <Text>
                {result.dice}: {result.rolls.join(', ')} = {result.total}
              </Text>
            </View>
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
};

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
    borderTopColor: '#ccc',
    paddingTop: 16,
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  diceButton: {
    width: '48%',
    marginBottom: 8,
  },
  diceCountInput: {
    marginBottom: 8,
  },
  resultsContainer: {
    flex: 1,
    marginBottom: 16,
  },
  resultItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default DiceRollerScreen; 