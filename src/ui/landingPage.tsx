import Cards from './cards';
import { Box, Grid2, TextField, Button } from '@mui/material';
import FilterModal from './filterModal';
import { useAppSelector } from '../hooks/useStore';
import { SetStateAction, useState } from 'react';

const LandingPage = () => {
  const users = useAppSelector((state) => state.user.original);
  console.log(users);

  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchChange = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
  };

  const filteredData = users.filter(
    (data) =>
      data.firstName.toLowerCase().includes(search.toLowerCase()) ||
      data.lastName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Box sx={{ flexGrow: 1, padding: '20px' }}>
        <TextField
          label="Search by Name"
          variant="outlined"
          value={search}
          onChange={handleSearchChange}
          sx={{ marginBottom: '20px', width: '600px', textAlign: 'center' }}
        />

        <Button variant="contained" onClick={() => setIsModalOpen(true)} sx={{ ml: 2 }}>
          Filter
        </Button>

        <Grid2 container spacing={3}>
          {filteredData.map((item, index) => (
            <Grid2 size={{ xs: 12, md: 3, sm: 6 }} key={item.phone}>
              <Cards item={item} index={index} />
            </Grid2>
          ))}
        </Grid2>
      </Box>

      <FilterModal open={isModalOpen} handleClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default LandingPage;
