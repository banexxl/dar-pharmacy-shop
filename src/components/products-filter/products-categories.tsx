import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material';
import { Colors } from '@/styles/theme';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionPanels } from './all-categories'
import { useRouter } from 'next/router';

const transformToMuiAccordion = (data: any) => {

     return data.map((item: any) => {

          const { id, link, title, children } = item;
          const router = useRouter();

          return children && children.length > 0 ? (
               <Accordion key={id} sx={{ border: `1px solid ${Colors.neutral[200]}`, boxShadow: 'none', mb: 1, '&:before': { display: 'none' } }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} id={id}>
                         <Typography sx={{ cursor: 'pointer', fontWeight: 600, color: Colors.neutral[800] }}>{title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                         {transformToMuiAccordion(children)}
                    </AccordionDetails>
               </Accordion>
          ) : (
               <AccordionDetails key={id}>
                    <Typography onClick={() => router.push(link)} sx={{ cursor: 'pointer', color: Colors.neutral[700], '&:hover': { color: Colors.primary.main } }}>
                         {title}
                    </Typography>
               </AccordionDetails>
          );
     });
};

export default function ProductsAllCategories() {

     const router = useRouter();

     return (
          <Box>{transformToMuiAccordion(AccordionPanels)}</Box>
     )
}
