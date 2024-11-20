import { forwardRef } from "react";
import { Slide, SlideProps } from "@mui/material";

// Forward the ref and props to the Slide component
const SlideTransition = forwardRef(function SlideTransition(
     props: SlideProps, // Include SlideProps to inherit required prop types
     ref
) {
     return <Slide {...props} ref={ref} />;
});

export default SlideTransition;
