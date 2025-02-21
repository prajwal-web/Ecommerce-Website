import { ThemeProvider } from '@mui/material';
import theme from './theme/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>hello world</h1>
    </ThemeProvider>
  );
}

export default App;
