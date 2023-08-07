import * as React from 'react';
import { FC } from 'react';
import Alert, { AlertColor } from '@mui/material/Alert';
import { Box, IconButton, Collapse } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  open: boolean;
  updateIsOpen: () => void;
  severity: AlertColor;
  text: string;
};

const BaseAlert: FC<Props> = props => {
  const { open, updateIsOpen, severity, text } = props;

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          severity={severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => updateIsOpen()}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {text}
        </Alert>
      </Collapse>
    </Box>
  );
};

export default BaseAlert;
