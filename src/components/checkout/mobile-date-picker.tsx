import React from 'react'
import { StyledDatePicker } from '@/styles/checkout/mobile-date-picker';

function MobileDatePicker() {

          return (
                    <StyledDatePicker
                              label="Select a date"
                              disablePast
                    // value={selectedDate}
                    // onChange={handleDateChange}
                    />
          );
}

export default MobileDatePicker


