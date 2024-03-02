import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';
import { ThemeProvider } from '@mui/material';
import {createTheme} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';

import { useState } from 'react';

const theme = createTheme();

const CustomAccordion = styled(Accordion)(({theme}) => ({
  backgroundColor: '#FFF2F2',
  '&.Mui-expanded': {
    color: 'white',
    backgroundColor: '#FF6B00',
  },
  '& .MuiAccordion-root': {
    borderRadius: '16px', 
    boxShadow: '0 0 0 1px #EFEEEE',
    padding: '15px 20px',
    width: '80%',
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
    boxShadow: '0 0 0 1px #EFEEEE',
    width: '100%',
    
  },
}));

const CustomTypography = styled(Typography)({
  fontSize: '18px', 
  fontWeight: 600,
  fontFamily: 'sans-serif', 
  lineHeight: '2.1',
});

const ExtendedTextTypography = styled(Typography)({
  fontSize: '16px', 
  fontWeight: 400,
  fontFamily: 'sans-serif',
});


function SimpleAccordion({texta,textb}) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <ThemeProvider theme={theme}>
    <div className='lg:w-[1140px] mx-auto mb-3 px-4 py-1'>
        <CustomAccordion expanded={expanded} onChange={handleChange}>
            <AccordionSummary
            expandIcon={expanded ? <RemoveIcon className="text-white"/> : <ExpandMoreIcon className="text-[#FF6B00] stroke-current stroke-3"/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <CustomTypography>{texta}</CustomTypography>
            </AccordionSummary>
            <AccordionDetails >
            <ExtendedTextTypography dangerouslySetInnerHTML={{ __html: textb }}/>
            </AccordionDetails>
        </CustomAccordion>
    </div>
    </ThemeProvider>
    
  );
}

export default function AccordianComponent(){
    return <div>
    <SimpleAccordion texta="How I’ll get the link to attend the program?" textb="You will get an email right after you register. Do check the spam and promotions tab just in case it landed there."/>
    <SimpleAccordion texta="How I’ll get the bonus items?" textb="You will get all the ebooks on your email right after your registration. <br/> </br>1 Month Exly Pro Subscription sign up link will be shared with you on the same email."/>
    <SimpleAccordion texta="Why does this program cost only ₹299?" textb="The fee is just to make sure to get a commitment from you that you will be there. It is not the value of the program. Attend the program and understand the value yourself."/>
    <SimpleAccordion texta="Will I get the recording of the program?" textb="This is a live program where Chethan will be training. So no recording will be provided." />
    <SimpleAccordion texta="Who is this seminar relevant for?" textb="Anyone who is a coach, trainer or a consultant who is looking to generate leads regardless of which domain they belong to." />
    <SimpleAccordion texta="What if I have questions about registration, attending, etc?" textb="You can reach out to us on dashy@exlyapp.com </br> </br>or +919319470097" />  
    <SimpleAccordion texta="If I miss attending this time can I attend this again?" textb="Yes you may attend it again at a later date" />
    <SimpleAccordion texta="What do I need to keep handy during the webinar?" textb="Just an open mind and a book to make a lot of notes." />
    <SimpleAccordion texta="Can I attend this program along with my business partner(s)?" textb="Yes you can, it is preferred you attend with your partners so that you can learn together." />
  </div>
    
}