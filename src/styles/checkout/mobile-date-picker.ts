import { styled } from '@mui/material';
import { MobileDateRangePicker } from '@mui/x-date-pickers-pro';

export const StyledDatePicker = styled(MobileDateRangePicker)(({ theme }) => ({
          backgroundColor: '#F44336', // set the background color for selected days
          '&:hover': {
                    backgroundColor: '#D32F2F', // set the background color for selected days on hover
          }
}))


