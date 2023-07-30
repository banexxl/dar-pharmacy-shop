
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
          AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import theme, { Colors } from '../theme';
import { Box } from '@mui/material';

export const Accordion = styled((props: AccordionProps) => (
          <MuiAccordion square={false} disableGutters elevation={0} {...props}
          />
))(({ theme }) => ({
          border: `1px solid ${theme.palette.divider}`,
          '&:not(:last-child)': {
                    borderBottom: 0,
          },
          '&:before': {
                    display: 'none',
          },
}));

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
          <MuiAccordionSummary
                    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
                    {...props}
                    sx={{
                              '&.Mui-expanded': {
                                        // Remove the excess space when the Accordion is expanded
                              },
                              '& .MuiAccordionSummary-content': {
                                        margin: '8px 0', // Adjust the margin for the content (optional)
                              },
                    }}
          />
))(({ theme }) => ({

          backgroundColor: Colors.light_gray, // Set your desired background color here
          flexDirection: 'row-reverse',
          '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                    transform: 'rotate(90deg)',
          },
}));
export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
          borderTop: '1px solid rgba(0, 0, 0, .125)',
          padding: '0px'
}));

export const AccordionBox = styled(Box)(({ theme }) => ({
          height: '100%',
          padding: '0px'
})); 