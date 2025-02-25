import { Button, ThemeProvider, Typography } from '@mui/material';
import theme from './theme';
import { Camera } from 'lucide-react';
import { Icon } from 'lucide-react';
import { burger } from '@lucide/lab';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">hello world</Typography>
      <Button variant="contained">click here</Button>
      <Camera color="red" size={48} />
      <Icon iconNode={burger} />
    </ThemeProvider>
  );
}

export default App;
