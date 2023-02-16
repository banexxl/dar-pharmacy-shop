import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { limit } from "./limiter";
import { Colors } from "../../../styles/theme";

export default function ProductCounter() {

          const clampV = limit(1, 50);
          const [value, setValue] = useState(1);

          return (
                    <Box display="flex">
                              <IconButton
                                        sx={{
                                                  borderRadius: 0,
                                                  background: `${Colors.secondary}`,
                                        }}
                                        onClick={() => setValue(clampV(value - 1))}
                              >
                                        <RemoveIcon />
                              </IconButton>
                              <Typography
                                        variant="h6"
                                        sx={{
                                                  border: `1px solid ${Colors.secondary}`,
                                                  p: 2,
                                        }}
                              >
                                        {value}
                              </Typography>
                              <IconButton
                                        sx={{
                                                  borderRadius: 0,
                                                  background: `${Colors.secondary}`,
                                        }}
                                        onClick={() => setValue(clampV(value + 1))}
                              >
                                        <AddIcon />
                              </IconButton>
                    </Box>
          );
}