import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { getCondition } from '../util/condition';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoodIcon from '@material-ui/icons/Mood';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      margin: '10px 100px 10px 10px',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    expandedContent: {
      maxHeight: '300px',
    },
  }),
);

const CityCard = ({
  city,
  aqi,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { precaution, healthImplication, color, level } = getCondition(aqi[0]);
  const aqiHistory = [aqi[0], aqi[0], aqi[0], aqi[0]];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader style={{ background: color }}
        avatar={
          <Avatar style={{ background: color }}>
            {level ==='Good' ? <MoodIcon /> : <MoodBadIcon />}
          </Avatar>
        }
        title={city}
        subheader={'Air Quality Index is ' + level.toUpperCase()}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component={'span'}>
          {healthImplication}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.expandedContent}>
          <Typography component={'span'}>Precaution:</Typography>
          <Typography component={'span'}>
           {precaution}
          </Typography>
          <Sparklines data={aqiHistory} >
            <SparklinesLine />
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CityCard;