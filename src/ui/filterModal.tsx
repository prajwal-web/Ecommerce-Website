// import { useState } from 'react';
import { Modal, Box, Button, Typography, TextField, Select, MenuItem } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FilterModal = ({ open, handleClose }: any) => {
  // const [filters, setFilters] = useState({
  //   ageFrom: 10,
  //   ageTo: 78,
  //   emailEnding: '',
  //   gender: 'All',
  //   companies: 'All',
  //   jobTitles: 'All'
  // });
  const filters = {
    ageFrom: 10,
    ageTo: 78,
    emailEnding: '',
    gender: 'All',
    companies: 'All',
    jobTitles: 'All'
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'white',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          width: 450
        }}
      >
        <Typography
          variant="h4"
          sx={{
            position: 'absolute',
            right: 20,
            top: 10,
            width: '30px',
            textAlign: 'center',
            borderRadius: '5px',
            border: '1px solid black',
            fontWeight: 500,
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#848484',
              transition: 'ease-in-out'
            }
          }}
          onClick={handleClose}
        >
          X
        </Typography>
        <Box>
          <Typography variant="h6" gutterBottom>
            Age :
          </Typography>
          <TextField
            label="Age From"
            type="number"
            name="ageFrom"
            value={18}
            margin="dense"
            sx={{ marginLeft: 2, width: 150 }}
          />
          <TextField
            label="Age To"
            type="number"
            name="ageTo"
            value={78}
            margin="dense"
            sx={{ marginLeft: 2, width: 150 }}
          />
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom>
            Email :
          </Typography>
          <TextField label="Email ending with" name="emailEnding" margin="dense" sx={{ width: 300, marginLeft: 2 }} />
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom>
            Genders :
          </Typography>
          <Select name="gender" value={filters.gender} margin="dense" sx={{ width: 300, marginLeft: 2 }}>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom>
            Companies :
          </Typography>
          <Select name="gender" value={filters.companies} margin="dense" sx={{ width: 300, marginLeft: 2 }}>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Male">TCS</MenuItem>
            <MenuItem value="Female">Appstec</MenuItem>
          </Select>
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom>
            Job Titles :
          </Typography>
          <Select name="gender" value={filters.jobTitles} margin="dense" sx={{ width: 300, marginLeft: 2 }}>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Male">Reactjs Developer</MenuItem>
            <MenuItem value="Female">Software Engineer</MenuItem>
          </Select>
        </Box>

        <Button variant="contained" sx={{ mt: 2 }}>
          Apply
        </Button>
      </Box>
    </Modal>
  );
};

export default FilterModal;
