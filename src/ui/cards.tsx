import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Cards = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image="/static/images/cards/contemplative-reptile.jpg" title={item.firstName} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.firstName} {item.lastName}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.email}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.phone}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.address}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
