import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import LegendImage from '../images/aqi_legend.png';

const { forwardRef, useImperativeHandle } = React;

const LegendModal = forwardRef((props, ref) =>
{
  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState('md');

  const handleClose = () => {
    setOpen(false);
  };
  useImperativeHandle(ref, () => ({
    openModal() {
      setOpen(true);
    }
  }));

  const legendImage = {
    img: LegendImage,
    title: 'Legend Image',
  };

  return (
    <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
      <DialogTitle>Legend for Air Quality Index(AQI)</DialogTitle>
      
      <DialogContent>
        <DialogContentText>
          You can review the index and relevant color coding for the given city.
        </DialogContentText>
        <DialogContentText>
          Below color legends may vary from the actual color codes as this is static images provided.
        </DialogContentText>
        <img src={legendImage.img} alt={legendImage.title} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export default LegendModal;
