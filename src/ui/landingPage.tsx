import Cards from './cards';
import { Box, Grid2, TextField, Button, Typography } from '@mui/material';
import FilterModal from './filterModal';
import { useAppDispatch, useAppSelector } from '../hooks/useStore';
import { searchUsers } from '../redux/slice/userSlice';
import { useState } from 'react';

const LandingPage = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.filteredUsers);

  const us = users.map((item, index) => {
    const { ...rest } = item;
    return {
      ...rest,
      id: index,
      company: 'Appstec-' + index,
      jobTitle: 'Developer-' + index
    };
  });
  console.log(us);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: 1, padding: '20px' }}>
        {/* {console.log('console3')} */}
        <TextField
          label="Search by Name"
          variant="outlined"
          onChange={(e) => dispatch(searchUsers(e.target.value))}
          sx={{ marginBottom: '20px', width: '600px', textAlign: 'center' }}
        />

        <Button variant="contained" onClick={() => setIsModalOpen(true)} sx={{ ml: 2 }}>
          Filter
        </Button>
        {users.length === 0 ? (
          <Typography variant="h1" sx={{ marginTop: '10%', marginLeft: '35%', color: '#df3f3f' }}>
            !!!OOPS no users found...
          </Typography>
        ) : (
          <Grid2 container spacing={3}>
            {us.map((item, index) => (
              <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={item.phone}>
                <Cards item={item} index={index} />
              </Grid2>
            ))}
          </Grid2>
        )}
      </Box>

      <FilterModal open={isModalOpen} handleClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default LandingPage;
