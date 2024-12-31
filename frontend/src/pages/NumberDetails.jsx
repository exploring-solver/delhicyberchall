import { Timeline, TimelineItem, TimelineSeparator, TimelineContent, TimelineDot, TimelineConnector } from '@mui/lab';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { generateMockData } from '../../utils/mockData';
import { Box, Card, CardContent, Grid, Paper, Typography } from '@mui/material';

const NumberDetails = () => {
  const { id } = useParams();
  const details = useMemo(() => generateMockData(100)[id - 1], [id]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Number Details</Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Number Information</Typography>
              <Typography>Phone: {details.number}</Typography>
              <Typography>Country: {details.country}</Typography>
              <Typography>First Reported: {details.firstReported}</Typography>
              <Typography>Total Reports: {details.count}</Typography>
              <Typography>Total Amount: ₹{details.totalAmount.toLocaleString()}</Typography>
              <Typography>Status: {details.status}</Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Activity Timeline</Typography>
            <Timeline>
              {details.activities.map((activity, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot color={activity.type === 'SMS' ? 'primary' : 
                                      activity.type === 'Call' ? 'secondary' : 'warning'} />
                    {index < details.activities.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="subtitle2">{activity.date}</Typography>
                    <Typography variant="body1">{activity.type} - {activity.details}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Amount: ₹{activity.amount.toLocaleString()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Victim: {activity.victim} | Location: {activity.location}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NumberDetails