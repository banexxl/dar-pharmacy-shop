import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionBox, AccordionDetails, AccordionSummary } from '@/styles/accordions/accordions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import { AccordionPanels } from './all-categories'
import Link from 'next/link';
import { useState } from 'react';

const transformToMuiAccordion = (data: any) => {

          return data.map((item: any) => {
                    const { id, link, title, children } = item;

                    if (children && children.length > 0) {
                              return (
                                        <Accordion key={id}>
                                                  <AccordionSummary expandIcon={<ExpandMoreIcon />} id={id}>
                                                            <Link href={link}>
                                                                      <Typography>{title}</Typography>
                                                            </Link>
                                                  </AccordionSummary>
                                                  <AccordionDetails>
                                                            <Link href={link}>
                                                                      {transformToMuiAccordion(children)}
                                                            </Link>
                                                  </AccordionDetails>
                                        </Accordion>
                              );
                    }

                    return (
                              <Accordion key={id}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />} id={id}>
                                                  <Link href={link}>
                                                            <Typography>{title}</Typography>
                                                  </Link>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                                  <Typography>
                                                            <Link href={link}>{title}</Link>
                                                  </Typography>
                                        </AccordionDetails>
                              </Accordion>
                    );
          });
};
export default function ProductsAllCategories() {

          return (
                    <AccordionBox>{transformToMuiAccordion(AccordionPanels)}</AccordionBox>
          )
}
