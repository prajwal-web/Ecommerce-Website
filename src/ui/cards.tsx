import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Cards = ({ item, index }: any) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={`https://picsum.photos/200/300?random=${index}`} title={item.firstName} />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {item.firstName} {item.lastName}
        </Typography>
        <Typography variant="body2">{item.email}</Typography>
        <Typography variant="body2">{item.phone}</Typography>
        <Typography variant="body2">{item.address}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
