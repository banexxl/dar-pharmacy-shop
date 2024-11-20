import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionBox, AccordionDetails, AccordionSummary } from '@/styles/accordions/accordions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionPanels } from './all-categories'
import Link from 'next/link';

const transformToMuiAccordion = (data: any) => {
     return data.map((item: any) => {
          const { id, link, title, children } = item;

          return children && children.length > 0 ? (
               <Accordion key={id}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} id={id}>
                         <Typography>{title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                         {transformToMuiAccordion(children)}
                    </AccordionDetails>
               </Accordion>
          ) : (
               <AccordionDetails key={id}>
                    <Typography>
                         <Link rel="canonical" href={`${link}?part=1`}>
                              {title}
                         </Link>
                    </Typography>
               </AccordionDetails>
          );
     });
};

export default function ProductsAllCategories() {

     return (
          <AccordionBox>{transformToMuiAccordion(AccordionPanels)}</AccordionBox>
     )
}
