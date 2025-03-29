import { IconButton, Typography } from "@mui/material";
import { FC } from "react";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from "@mui/icons-material/Remove";
import { Colors } from "../../styles/theme";
import { useDispatch } from "react-redux";
import { decrement, increment } from "@/store/cart/cart.slice";


interface IProps {
     _id: string;
     count: number;
     children: React.ReactNode
}

const ProductCounter: FC<IProps> = ({ _id, count }) => {

     const dispatch = useDispatch()

     return (
          <Box sx={{ display: 'flex', gap: '5px' }}>
               <IconButton
                    sx={{
                         borderRadius: '10px',
                         background: `${Colors.primary.lighter}`,
                         width: '20px'
                    }}
                    onClick={() => dispatch(decrement(_id))}
                    disabled={count <= 1 ? true : false}
               >
                    <RemoveIcon />
               </IconButton>
               <Typography
                    sx={{
                         border: `1px solid ${Colors.primary.lighter}`,
                         borderRadius: '10px',
                         width: '20px'
                    }}
               >
                    {count <= 1 ? 1 : count}
               </Typography>
               <IconButton
                    sx={{
                         borderRadius: '10px',
                         background: `${Colors.primary.lighter}`,
                         width: '20px'
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