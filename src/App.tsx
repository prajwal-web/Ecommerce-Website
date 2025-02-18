import { Button, ThemeProvider, Typography } from '@mui/material';
import theme from './theme/theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>hello there</h1>
      <Typography variant="h1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, blanditiis ad! Velit, corporis eveniet explicabo
      </Typography>
      <Button variant="contained">click</Button>
      <Typography variant="body1">Whereas recognition of the inherent dignity</Typography>
    </ThemeProvider>
  );
}

export default App;
