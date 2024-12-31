import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Box,
  CssBaseline
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  List as ListIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import Dashboard from './pages/Dashboard';
import ReportedNumbers from './pages/ReportedNumbers';
import NumberDetails from './pages/NumberDetails';
import SearchScreen from './pages/SearchScreen';
// import { 
//   AnalyticsDashboard, 
//   ReportedNumbersScreen, 
//   NumberDetailsScreen 
// } from './components/AnalyticsDashboard';

const drawerWidth = 240;

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        
        {/* App Bar */}
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              RakshaNetra Dashboard
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Side Navigation Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            ['& .MuiDrawer-paper']: { 
              width: drawerWidth, 
              boxSizing: 'border-box' 
            },
          }}
        >
          <Toolbar /> {/* This provides spacing below the AppBar */}
          <List>
            <ListItem button component={Link} to="/">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            
            <ListItem button component={Link} to="/reported-numbers">
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Reported Numbers" />
            </ListItem>

            <ListItem button component={Link} to="/search">
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Search Numbers" />
            </ListItem>
          </List>
        </Drawer>

        {/* Main Content */}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar /> {/* This provides spacing below the AppBar */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/reported-numbers" element={<ReportedNumbers />} />
            <Route path="/number/:id" element={<NumberDetails />} />
            <Route path="/search" element={<SearchScreen />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
};

// Additional components referenced in routes
// const SearchScreen = () => (
//   <Typography variant="h4">Search Numbers</Typography>
// );

const NotFound = () => (
  <Typography variant="h4">404 - Page Not Found</Typography>
);

export default App;