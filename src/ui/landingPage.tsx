
import Cards from './cards';
import { Box, Grid2, TextField, Button } from '@mui/material';
import FilterModal from './filterModal';
import { useAppDispatch, useAppSelector } from '../hooks/useStore';
import { searchUsers } from '../redux/slice/userSlice';
import { useState } from 'react';

const LandingPage = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.filteredUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);

 
  return (
    <>
      <Box sx={{ flexGrow: 1, padding: '20px' }}>
        <TextField
          label="Search by Name"
          variant="outlined"
           onChange={(e) => dispatch(searchUsers(e.target.value))}
          sx={{ marginBottom: '20px', width: '600px', textAlign: 'center' }}
        />

        <Button variant="contained" onClick={() => setIsModalOpen(true)} sx={{ ml: 2 }}>
          Filter
        </Button>

        <Grid2 container spacing={3}>
          {users.map((item, index) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={item.phone}>
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
