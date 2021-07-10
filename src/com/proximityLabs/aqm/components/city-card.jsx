import React from 'react';
import PropTypes from "prop-types";
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
import { 
  Sparklines,
  SparklinesLine,
  SparklinesSpots,
  SparklinesReferenceLine
} from 'react-sparklines';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      margin: '10px 10px 10px 10px',
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
    headerContent: {
      maxHeight: '50px',
    },
    expandedContent: {
      ...theme.typography.button,float: 'left',
      maxHeight: '300px',
      padding: theme.spacing(1),
    },
    
    sparklines: {
      width: '820px',
      height: '150px',
    }
  }),
);

const CityCard = ({
  city,
  aqi,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { precaution, healthImplication, color, level } = getCondition(aqi[0]);
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
        subheader={'Air Quality Index(AQI) is ' + level.toUpperCase()}
      />
      <CardContent className={classes.headerContent}>
        <Typography variant="subtitle1" color="textSecondary" component={'span'}>
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
          <Typography
            variant="body2" component={'span'}>
            {`Precaution: ${precaution}`}
          </Typography>
          <Sparklines data={aqi} width={600} height={100}>
            <SparklinesLine color={color} />
            <SparklinesSpots style={{ fill: color }} />
            <SparklinesReferenceLine type="avg" />
          </Sparklines>
          <Typography
            variant="caption" display="block" color="textSecondary">
            Above Sparkline chart shows live "Air Quality Index" for the city
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

CityCard.propTypes = {
  city: PropTypes.string,
  aqi: PropTypes.arrayOf(PropTypes.number).isRequired,
};

CityCard.defaultProps = {
  city: "",
};

export default CityCard;