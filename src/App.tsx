import { ThemeProvider, Button } from '@mui/material';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained"> click </Button>
    </ThemeProvider>
  );
}

export default App;
