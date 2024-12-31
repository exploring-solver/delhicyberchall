import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Card, Title, Paragraph, Button, Surface, DataTable, Searchbar, Chip, Portal, Modal } from 'react-native-paper';
// import { LineChart, PieChart } from 'react-native-chart-kit';

// Mock data
const mockAlerts = [
  {
    id: 1,
    type: 'VIDEO_CALL',
    description: 'Police uniform detected in video call',
    timestamp: '2024-12-31 14:23',
    phoneNumber: '+44 7700 900000',
    screenshot: '/path/to/screenshot.jpg',
    status: 'HIGH_RISK'
  },
  {
    id: 2,
    type: 'SMS',
    description: 'Suspicious banking URL detected',
    timestamp: '2024-12-31 13:15',
    phoneNumber: '+1 555 0123',
    message: 'Your account has been locked. Click here: http://suspicious-url.com',
    status: 'MEDIUM_RISK'
  }
];

const mockStats = {
  totalScams: 127,
  activeThreats: 23,
  scammerNumbers: 45,
  victimsSaved: 89,
  monthlyDetections: [23, 45, 67, 54, 76, 89]
};

export const HomeScreen = () => {
  const [activeMonitoring, setActiveMonitoring] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <Surface style={styles.surface}>
        <Title>Protection Status</Title>
        <View style={styles.statsContainer}>
          <Card style={styles.statCard}>
            <Card.Content>
              <Title>{mockStats.activeThreats}</Title>
              <Paragraph>Active Threats</Paragraph>
            </Card.Content>
          </Card>
          <Card style={styles.statCard}>
            <Card.Content>
              <Title>{mockStats.victimsSaved}</Title>
              <Paragraph>Prevented Scams</Paragraph>
            </Card.Content>
          </Card>
        </View>

        <Card style={styles.monitoringCard}>
          <Card.Content>
            <Title>SMS Monitoring</Title>
            <Paragraph>AI-powered message analysis</Paragraph>
            <View style={styles.statsRow}>
              <Chip icon="check">Messages Scanned: 1,234</Chip>
              <Chip icon="alert">Threats Detected: 15</Chip>
            </View>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained">View Logs</Button>
          </Card.Actions>
        </Card>

        <Card style={styles.monitoringCard}>
          <Card.Content>
            <Title>Call Protection</Title>
            <Paragraph>International call screening active</Paragraph>
            <View style={styles.statsRow}>
              <Chip icon="phone">Calls Analyzed: 892</Chip>
              <Chip icon="alert">Suspicious: 34</Chip>
            </View>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained">View History</Button>
          </Card.Actions>
        </Card>

        <Card style={styles.monitoringCard}>
          <Card.Content>
            <Title>Video Call Guard</Title>
            <Paragraph>Real-time uniform detection</Paragraph>
            <View style={styles.statsRow}>
              <Chip icon="video">Calls Monitored: 156</Chip>
              <Chip icon="alert">Uniforms Detected: 8</Chip>
            </View>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained">View Detections</Button>
          </Card.Actions>
        </Card>
      </Surface>
    </ScrollView>
  );
};

export const AlertScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <ScrollView style={styles.container}>
      <Searchbar
        placeholder="Search alerts"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchBar}
      />
      
      {mockAlerts.map(alert => (
        <Card key={alert.id} style={[styles.alertCard, styles[alert.status.toLowerCase()]]}>
          <Card.Content>
            <Title style={styles.warningText}>{alert.type === 'VIDEO_CALL' ? 'Police Uniform Detected' : 'Suspicious Message'}</Title>
            <Paragraph>{alert.description}</Paragraph>
            <View style={styles.alertDetails}>
              <Chip icon="clock">{alert.timestamp}</Chip>
              <Chip icon="phone">{alert.phoneNumber}</Chip>
            </View>
          </Card.Content>
          <Card.Actions>
            <Button mode="contained" onPress={() => {}}>Report</Button>
            <Button mode="outlined" onPress={() => {}}>Details</Button>
            <Button onPress={() => {}}>Dismiss</Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
};

export const ReportScreen = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  
  return (
    <ScrollView style={styles.container}>
      <Title>Scam Analysis Dashboard</Title>
      
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Number</DataTable.Title>
          <DataTable.Title>Type</DataTable.Title>
          <DataTable.Title numeric>Incidents</DataTable.Title>
          <DataTable.Title>Risk Level</DataTable.Title>
        </DataTable.Header>

        {mockAlerts.map(alert => (
          <DataTable.Row key={alert.id} onPress={() => setSelectedReport(alert)}>
            <DataTable.Cell>{alert.phoneNumber}</DataTable.Cell>
            <DataTable.Cell>{alert.type}</DataTable.Cell>
            <DataTable.Cell numeric>3</DataTable.Cell>
            <DataTable.Cell>
              <Chip
                style={styles[alert.status.toLowerCase() + 'Chip']}
              >
                {alert.status.replace('_', ' ')}
              </Chip>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>

      <Button mode="contained" style={styles.exportButton}>
        Export Data
      </Button>
    </ScrollView>
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  statCard: {
    flex: 1,
    marginHorizontal: 8,
  },
  monitoringCard: {
    marginVertical: 8,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  alertCard: {
    marginVertical: 8,
  },
  high_risk: {
    backgroundColor: '#FFE0E0',
  },
  medium_risk: {
    backgroundColor: '#FFF3E0',
  },
  warningText: {
    color: '#D32F2F',
  },
  alertDetails: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 8,
    marginTop: 8,
  },
  searchBar: {
    marginBottom: 16,
  },
  exportButton: {
    marginTop: 16,
  },
  high_riskChip: {
    backgroundColor: '#FFE0E0',
  },
  medium_riskChip: {
    backgroundColor: '#FFF3E0',
  }
});