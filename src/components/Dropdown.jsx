import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: '#FFF2F2',
  '&.Mui-expanded': {
    color: 'white',
    backgroundColor: '#FF6B00',
  },
  '& .MuiAccordion-root': {
    borderRadius: '16px', 
  },
  '& .MuiAccordionDetails-root': {
    color : 'black',
    backgroundColor: '#FFF2F2',
  },
  '&:before': {
    display: 'none', 
  },
  '&.MuiPaper-rounded': {
    borderRadius: '16px', 
  },
}));

const CustomTypography = styled(Typography)({
  fontSize: '18px', 
  fontWeight: 600, 
});

const ExtendedTextTypography = styled(Typography)({
  fontSize: '16px', 
  fontWeight: 400,
});

export default function SimpleAccordion({texta,textb}) {
  return (
    <div>
      <CustomAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <CustomTypography>{texta}</CustomTypography>
        </AccordionSummary>
        <AccordionDetails>
          <ExtendedTextTypography>
            {textb}
          </ExtendedTextTypography>
        </AccordionDetails>
      </CustomAccordion>
    </div>
  );
}