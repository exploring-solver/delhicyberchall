import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, Typography, TextField, Card, CardContent, 
  Grid, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, TablePagination,
  Chip, IconButton, Tooltip
} from '@mui/material';
import { Search, FilterList, Timeline } from '@mui/icons-material';
import { generateMockData } from '../../utils/mockData';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

  const allData = useMemo(() => generateMockData(100), []);
  
  const filteredData = useMemo(() => 
    allData.filter(item => 
      item.number.includes(searchTerm) ||
      item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.country.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [searchTerm, allData]
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Search Numbers</Typography>
      
      <TextField
        fullWidth
        placeholder="Search by number, type, or country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: <Search sx={{ color: 'action.active', mr: 1 }} />
        }}
        sx={{ mb: 3 }}
      />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Number</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Reports</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Last Activity</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id} hover>
                  <TableCell>{row.number}</TableCell>
                  <TableCell>
                    <Chip 
                      label={row.type}
                      color={row.type === 'SMS' ? 'primary' : row.type === 'Call' ? 'secondary' : 'warning'}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{row.country}</TableCell>
                  <TableCell>{row.count}</TableCell>
                  <TableCell>
                    <Chip 
                      label={row.status}
                      color={row.status === 'Active' ? 'error' : 'success'}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{row.lastReported}</TableCell>
                  <TableCell>
                    <Tooltip title="View Timeline">
                      <IconButton onClick={() => navigate(`/number/${row.id}`)}>
                        <Timeline />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={filteredData.length}
          page={page}
          onPageChange={(e, newPage) => setPage(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
        />
      </TableContainer>
    </Box>
  );
};

export default SearchScreen