import { Button, ThemeProvider, Typography } from '@mui/material';
import theme from './theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">hello world</Typography>
      <Button variant="contained">click here</Button>
    </ThemeProvider>
  );
}

export default App;
