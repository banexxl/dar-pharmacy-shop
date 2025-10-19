import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import CountUp from "react-countup";
import { useVisibility } from "@/hooks/useVisibility";
import { fShortenNumber } from "@/utils/format-number";

export const BannerCountUp = () => {
     const theme = useTheme();
     const isScreenToMedium = useMediaQuery(theme.breakpoints.down("md"));
     const { isVisible, elementRef } = useVisibility(200);

     const SUMMARY = [
          { name: "Zadovoljnih potrošača", number: 3000 },
          { name: "Proizvoda na raspolaganju", number: 5000 },
          { name: "Procenata kupaca se vraća kod nas", number: 90 },
          { name: "Poslatih proizvoda", number: 10000 },
     ];

     return (
          <Box
               className="BannerContainer"
               sx={{
                    marginTop: "0px",
                    width: "100%",
                    height: "100%",
                    p: 3,
               }}
          >
               <Typography
                    sx={{
                         marginTop: "20px",
                         fontWeight: "bold",
                         fontSize: isScreenToMedium ? "1.8rem" : "2rem",
                    }}
               >
                    Naši uspesi
               </Typography>
               <Box
                    ref={elementRef}
                    sx={{
                         rowGap: 2,
                         columnGap: 1,
                         display: "grid",
                         textAlign: "center",
                         gridTemplateColumns: {
                              xs: "repeat(2, 1fr)",
                              md: "repeat(4, 1fr)",
                         },
                         pt: { xs: 1, md: 5 },
                         pl: "10px",
                         pb: "20px",
                    }}
               >
                    {SUMMARY.map((value) => (
                         <Stack key={value.name} spacing={1}>
                              <Typography
                                   component={"span"}
                                   sx={{
                                        textAlign: "center",
                                        fontSize: isScreenToMedium ? "1rem" : "1.4rem",
                                   }}
                              >
                                   {isVisible && (
                                        <CountUp
                                             start={value.number / 5}
                                             end={value.number}
                                             formattingFn={(newValue: number) =>
                                                  fShortenNumber(newValue)
                                             }
                                        />
                                   )}
                                   <Typography variant="h4" component="span">
                                        +
                                   </Typography>
                              </Typography>
                              <Typography
                                   component={"span"}
                                   sx={{
                                        maxWidth: "300px",
                                        textAlign: "center",
                                        fontSize: isScreenToMedium ? "1rem" : "1.4rem",
                                   }}
                              >
                                   {value.name}
                              </Typography>
                         </Stack>
                    ))}
               </Box>
          </Box>
     );
};
