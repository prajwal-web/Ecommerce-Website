import { ThemeProvider, Button ,Typography, CssBaseline} from '@mui/material';
import theme from './theme/theme';
import { useAppSelector } from './hooks/useStore';


function App() {
  const count = useAppSelector((state) => state.counter.value);
  const name = useAppSelector((state) => state.counter.firstName);
  const user = useAppSelector((state)=>state.user)
  console.log("App",user)
  console.log(count);
  console.log(name);
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained"> click </Button>
      <CssBaseline />
      <Typography variant="h1">{name}</Typography>
      <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, accusamus.</Typography>
      <Button variant='outlined'>click here </Button>
    </ThemeProvider>
  );
}

export default App;
