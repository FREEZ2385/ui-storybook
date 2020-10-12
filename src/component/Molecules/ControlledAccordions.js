import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions(props) {
  const classes = useStyles();
  const { componentGuideList } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {componentGuideList.map((componentGuide, index) => (
        <Accordion expanded={expanded === index} onChange={handleChange(index)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${index}-contents`}
          id={`${index}-header`}
        >
          <Typography className={classes.heading}>{componentGuide.header}</Typography>
          <Typography className={classes.secondaryHeading}>{componentGuide.secondHeader}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {componentGuide.content}
          </Typography>
        </AccordionDetails>
      </Accordion>
      ))}
      
    </div>
  );
}
