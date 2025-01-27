import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const HelpScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>How to Use the Dice Roller</Title>
          <Paragraph>
            1. Select the number of dice you want to roll using the input field at the top.
          </Paragraph>
          <Paragraph>
            2. Choose a die type by tapping one of the buttons (d4, d6, d8, etc.).
          </Paragraph>
          <Paragraph>
            3. For custom dice, tap the "Custom" button and enter the number of sides.
          </Paragraph>
          <Paragraph>
            4. Results will appear in the lower section, showing individual rolls and the total.
          </Paragraph>
          <Paragraph>
            5. Use the "Clear Results" button to reset the history.
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title>About the Dice</Title>
          <Paragraph>
            • d4: Four-sided die (1-4)
          </Paragraph>
          <Paragraph>
            • d6: Six-sided die (1-6)
          </Paragraph>
          <Paragraph>
            • d8: Eight-sided die (1-8)
          </Paragraph>
          <Paragraph>
            • d10: Ten-sided die (1-10)
          </Paragraph>
          <Paragraph>
            • d12: Twelve-sided die (1-12)
          </Paragraph>
          <Paragraph>
            • d20: Twenty-sided die (1-20)
          </Paragraph>
          <Paragraph>
            • d100: Hundred-sided die (1-100)
          </Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
});

export default HelpScreen; 