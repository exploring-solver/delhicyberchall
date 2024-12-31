
import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Paper } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie } from 'recharts';
const Dashboard = () => {
  const scamData = [
    { month: 'Jan', sms: 65, calls: 42, video: 23 },
    { month: 'Feb', sms: 59, calls: 38, video: 28 },
    { month: 'Mar', sms: 80, calls: 45, video: 35 },
    { month: 'Apr', sms: 75, calls: 51, video: 29 },
  ];

  const distributionData = [
    { name: 'SMS Scams', value: 235 },
    { name: 'Call Scams', value: 178 },
    { name: 'Video Scams', value: 147 },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>RakshaNetra Dashboard</Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Reports</Typography>
              <Typography variant="h3">1,234</Typography>
              <Typography color="text.secondary">↑12% from last month</Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Similar cards for Active Threats, Prevented Scams, Success Rate */}
        
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Monthly Trends</Typography>
            <BarChart width={700} height={300} data={scamData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sms" fill="#8884d8" name="SMS Scams" />
              <Bar dataKey="calls" fill="#82ca9d" name="Call Scams" />
              <Bar dataKey="video" fill="#ffc658" name="Video Scams" />
            </BarChart>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Distribution</Typography>
            <PieChart width={300} height={300}>
              <Pie data={distributionData} dataKey="value" nameKey="name" cx="50%" cy="50%" />
              <Tooltip />
              <Legend />
            </PieChart>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;