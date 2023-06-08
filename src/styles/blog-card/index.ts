import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const BlogCardContainer = styled(Box)(({ theme }: any) => ({
          display: "flex",
          flexDirection: 'column',
          justifyContent: "center",
          [theme.breakpoints.down("md")]: {
                    height: '200px',
                    width: '400px',
          },
          background: Colors.light_gray,
})) as typeof Box;

export const BlogCardImageContainer = styled(Box)(({ theme }: any) => ({
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "50%",
          backgroundImage: `url(/images/banner/banner.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
})) as typeof Box;

export const BlogCardTitle = styled(Typography)(({ theme }: any) => ({

}))

export const BlogCardDescription = styled(Typography)(({ theme }: any) => ({

}))

export const BlogCardButton = styled(Button)(({ theme }: any) => ({

}))
