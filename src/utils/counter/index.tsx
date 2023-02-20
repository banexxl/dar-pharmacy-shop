import { IconButton, Typography } from "@mui/material";
import { FC } from "react";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from "@mui/icons-material/Remove";
import { Colors } from "../../styles/theme";
import { useDispatch } from "react-redux";
import { decrement, increment } from "@/store/cartSlice";

interface ICounterProps {
          id: string;
          count: number;
}

const ProductCounter: FC<ICounterProps> = ({ id, count }) => {

          const dispatch = useDispatch()

          return (
                    <Box display="flex" >
                              <IconButton
                                        sx={{
                                                  borderRadius: 0,
                                                  background: `${Colors.secondary}`,
                                        }}
                                        onClick={() => dispatch(decrement(id))}
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
                                        {count}
                              </Typography>
                              <IconButton
                                        sx={{
                                                  borderRadius: 0,
                                                  background: `${Colors.secondary}`,
                                        }}
                                        onClick={() => dispatch(increment(id))}
                              >
                                        <AddIcon />
                              </IconButton>
                    </Box>
          );
}

export default ProductCounter