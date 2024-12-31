import React, { useState } from 'react';
import {
  Box, Paper, TextField, InputAdornment, IconButton,
  MenuItem, Menu, Button, Table, TableHead, TableBody,
  TableRow, TableCell, TablePagination
} from '@mui/material';
import { FilterList, Search, FileDownload } from '@mui/icons-material';
import { jsPDF } from 'jspdf';

const ReportedNumbers = () => {
  const [filterAnchor, setFilterAnchor] = useState(null);
  const [filters, setFilters] = useState({
    type: 'all',
    dateRange: 'all',
    status: 'all'
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const mockData = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    number: `+12345678${index.toString().padStart(2, '0')}`,
    type: index % 2 === 0 ? 'SMS' : 'Call',
    method: index % 3 === 0 ? 'Pattern Detection' : 'User Report',
    count: Math.floor(Math.random() * 50) + 1,
    lastReported: `2024-12-${(index % 30 + 1).toString().padStart(2, '0')}`,
    status: index % 2 === 0 ? 'Active' : 'Resolved'
  }));

  const filteredData = mockData.filter(item => {
    return (
      (filters.type === 'all' || item.type === filters.type) &&
      (filters.status === 'all' || item.status === filters.status)
    );
  });

  const handlePageChange = (_, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Scam Reports', 20, 10);
    filteredData.forEach((item, index) => {
      doc.text(`${index + 1}. ${item.number} - ${item.type}`, 10, 20 + index * 10);
    });
    doc.save('scam-reports.pdf');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <TextField
          placeholder="Search numbers..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Box>
          <IconButton onClick={(e) => setFilterAnchor(e.currentTarget)}>
            <FilterList />
          </IconButton>
          <Button
            variant="contained"
            startIcon={<FileDownload />}
            onClick={generatePDF}
          >
            Generate Report
          </Button>
        </Box>
      </Box>

      <Menu
        anchorEl={filterAnchor}
        open={Boolean(filterAnchor)}
        onClose={() => setFilterAnchor(null)}
      >
        <MenuItem onClick={() => setFilters({ ...filters, type: 'all' })}>All Types</MenuItem>
        <MenuItem onClick={() => setFilters({ ...filters, type: 'SMS' })}>SMS</MenuItem>
        <MenuItem onClick={() => setFilters({ ...filters, type: 'Call' })}>Call</MenuItem>
        <MenuItem onClick={() => setFilters({ ...filters, status: 'all' })}>All Statuses</MenuItem>
        <MenuItem onClick={() => setFilters({ ...filters, status: 'Active' })}>Active</MenuItem>
        <MenuItem onClick={() => setFilters({ ...filters, status: 'Resolved' })}>Resolved</MenuItem>
      </Menu>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Number</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Method</TableCell>
              <TableCell>Count</TableCell>
              <TableCell>Last Reported</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.number}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.method}</TableCell>
                  <TableCell>{row.count}</TableCell>
                  <TableCell>{row.lastReported}</TableCell>
                  <TableCell>{row.status}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        <TablePagination
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </Paper>
    </Box>
  );
};

export default ReportedNumbers;
