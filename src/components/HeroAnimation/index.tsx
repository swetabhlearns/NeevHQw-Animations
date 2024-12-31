import Lottie from "lottie-react";
import animation from "../../assets/animation/hero.json";

const HeroAnimation = () => {
  return (
    <Lottie
      animationData={animation}
      loop={true}
      className="h-[360px] md:h-[500px] w-full"
    />
  );
};

export default HeroAnimation;
