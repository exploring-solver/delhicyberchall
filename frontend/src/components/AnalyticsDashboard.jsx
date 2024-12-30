// Web Dashboard Screens (React + MUI)
import React from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

// Analytics Dashboard
export const AnalyticsDashboard = () => {
  const mockData = [
    { month: 'Jan', scams: 65 },
    { month: 'Feb', scams: 59 },
    { month: 'Mar', scams: 80 },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Scam Prevention Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        {/* Statistics Cards */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Reports</Typography>
              <Typography variant="h3">1,234</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Active Threats</Typography>
              <Typography variant="h3">56</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Prevented Scams</Typography>
              <Typography variant="h3">789</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Charts */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Monthly Scam Attempts
            </Typography>
            <BarChart width={800} height={300} data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="scams" fill="#8884d8" />
            </BarChart>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

// Reported Numbers Table
export const ReportedNumbersScreen = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Reported Numbers
      </Typography>
      
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Phone Number</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Detection Method</TableCell>
              <TableCell>Report Count</TableCell>
              <TableCell>Last Reported</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>+1234567890</TableCell>
              <TableCell>SMS Scam</TableCell>
              <TableCell>Pattern Detection</TableCell>
              <TableCell>15</TableCell>
              <TableCell>2024-12-30</TableCell>
              <TableCell>
                <Button size="small" variant="contained">View Details</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

// Number Details Screen
export const NumberDetailsScreen = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Number Details
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Number Information</Typography>
              <Typography>Phone: +1234567890</Typography>
              <Typography>Country: International</Typography>
              <Typography>First Reported: 2024-11-15</Typography>
              <Typography>Total Reports: 15</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Activity Timeline
            </Typography>
            {/* Timeline component showing scam attempts */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};