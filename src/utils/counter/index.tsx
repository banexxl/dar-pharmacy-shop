import { IconButton, Typography } from "@mui/material";
import { FC } from "react";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from "@mui/icons-material/Remove";
import { Colors } from "../../styles/theme";
import { useDispatch } from "react-redux";
import { decrement, increment } from "@/store/cart-slice";
import ICartItem from "@/interfaces/cart/cart.interface";


interface IProps {
          _id: string;
          count: number;
          children: React.ReactNode
}

const ProductCounter: FC<IProps> = ({ _id, count }) => {

          const dispatch = useDispatch()

          return (
                    <Box display="flex" >
                              <IconButton
                                        sx={{
                                                  borderRadius: '10px',
                                                  background: `${Colors.secondary}`,
                                        }}
                                        onClick={() => dispatch(decrement(_id))}
                                        disabled={count <= 1 ? true : false}
                              >
                                        <RemoveIcon />
                              </IconButton>
                              <Typography
                                        variant="h6"
                                        sx={{
                                                  border: `1px solid ${Colors.secondary}`,
                                                  borderRadius: '10px',
                                                  p: 2,
                                        }}
                              >
                                        {count <= 1 ? 1 : count}
                              </Typography>
                              <IconButton
                                        sx={{
                                                  borderRadius: '10px',
                                                  background: `${Colors.secondary}`,
                                        }}
                                        onClick={() => dispatch(increment(_id))}
                                        disabled={count >= 100 ? true : false}
                              >
                                        <AddIcon />
                              </IconButton>
                    </Box>
          );
}

export default ProductCounter