import { ImgWrapper } from "./HeroStyles";

const HeroImg = () => {
  return (
    <ImgWrapper
      style={{
        position: "absolute",
        right: "20px",
        bottom: 0,
        zIndex: -1,
        margin: 0,
        textAlign: "center",
      }}
    >
      <img src="/images/hero-img.png" width="450px" />
      <figcaption
        style={{
          color: "rgba(255, 255, 255, 0.3)",
          fontWeight: 100,
          fontSize: "12px",
        }}
      >
        Image generated using Midjourney
      </figcaption>
    </ImgWrapper>
  );
};

export default HeroImg;
