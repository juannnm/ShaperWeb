import { Box } from "@mui/material";
import * as React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { CarouselCard } from "./CarouselCard";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 5 },
};

const items = [
  <CarouselCard
    title="Basic Figma"
    tutor="Lucas Rodríguez"
    description="Basic introduccion to make layouts with Figma"
    score={4.7}
    key="1"
  />,
  <CarouselCard
    title="Basic Figma"
    tutor="Lucas Rodríguez"
    description="Basic introduccion to make layouts with Figma"
    score={4.7}
    key="1"
  />,
  <CarouselCard
    title="Basic Figma"
    tutor="Lucas Rodríguez"
    description="Basic introduccion to make layouts with Figma"
    score={4.7}
    key="1"
  />,
  <CarouselCard
    title="Basic Figma"
    tutor="Lucas Rodríguez"
    description="Basic introduccion to make layouts with Figma"
    score={4.7}
    key="1"
  />,
];

interface IProps {
  direction: string;
}

export const AliCarousel = (props: IProps) => {
  function useHover() {
    const [value, setValue] = React.useState(false);

    const ref: any = React.useRef(null);

    const handleMouseOver = () => setValue(false);
    const handleMouseOut = () => setValue(true);

    React.useEffect(() => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);

        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    }, [ref.current]);
    return [ref, value];
  }

  const [play, setPlay] = useHover();

  return (
    <AliceCarousel
      autoPlay={true}
      autoPlayStrategy="none"
      autoPlayInterval={1}
      animationDuration={5000}
      animationEasingFunction="linear"
      animationType="slide"
      infinite
      mouseTracking={true}
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      disableButtonsControls
      disableDotsControls
      autoPlayDirection={props.direction}
      swipeExtraPadding={100}
    />
  );
};
