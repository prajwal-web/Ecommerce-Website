import { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';
import { useAppSelector } from './hooks/useStore';
import Cards from './ui/cards';
import { Box, Grid2, TextField } from '@mui/material';

function App() {
  const user = useAppSelector((state) => state.user.original);
  console.log(user);
  const [search, setSearch] = useState('');
  console.log(search);

  const onhandlechange = (e) => {
    setSearch(e.target.value);
  };
  const filtereduser = user.filter(
    (data) =>
      data.firstName.toLowerCase().includes(search.toLowerCase()) ||
      data.lastName.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, padding: '20px' }}>
        <TextField
          label="Search by Name"
          variant="outlined"
          value={search}
          onChange={onhandlechange}
          sx={{ marginBottom: '20px', width: '700px', textAlign: 'center' }}
        />

        <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {filtereduser.map((item) => (
            <Grid2 item xs={12} sm={6} md={4} key={item.phone}>
              <Cards item={item} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </ThemeProvider>
  );
}

export default App;
