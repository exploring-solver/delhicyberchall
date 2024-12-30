// Mobile App Screens (React Native + React Native Paper)
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button, Surface } from 'react-native-paper';

// Home Screen - Main monitoring screen
export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Surface style={styles.surface}>
        <Title>Active Protection</Title>
        <Card style={styles.card}>
          <Card.Content>
            <Title>SMS Monitoring</Title>
            <Paragraph>Actively scanning messages for potential scams</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button>View Details</Button>
          </Card.Actions>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Call Protection</Title>
            <Paragraph>Recording and analyzing suspicious calls</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button>View History</Button>
          </Card.Actions>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Video Call Guard</Title>
            <Paragraph>Police uniform detection active</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button>View Detections</Button>
          </Card.Actions>
        </Card>
      </Surface>
    </View>
  );
};

// Alert Screen - Shows active threats and warnings
export const AlertScreen = () => {
  return (
    <View style={styles.container}>
      <Title>Active Alerts</Title>
      <Card style={styles.alertCard}>
        <Card.Content>
          <Title style={styles.warningText}>Suspicious Activity Detected</Title>
          <Paragraph>International call from unverified number</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained">Report</Button>
          <Button>Dismiss</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

// Report Screen - For users to submit scam reports
export const ReportScreen = () => {
  return (
    <View style={styles.container}>
      <Title>Report Scam Attempt</Title>
      {/* Form components for reporting */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  surface: {
    padding: 16,
    elevation: 4,
  },
  card: {
    marginVertical: 8,
  },
  alertCard: {
    marginVertical: 8,
    backgroundColor: '#FFE0E0',
  },
  warningText: {
    color: '#D32F2F',
  }
});