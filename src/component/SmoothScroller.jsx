import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import './Scroller.css'

const Example = () => {
  return (
    <div className="backg">
      <SmoothScroller />
    </div>
  );
};

const SmoothScroller = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["15%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] backg">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4" id="gapper">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
<div
  key={card.id}
  className="group relative h-[450px] w-[1000px] overflow-hidden" id="carder"
>
  <div
    className="absolute left-0 top-0 h-full w-[60%] z-0" 
    style={{
      backgroundImage: `url(${card.url})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>
  <div className="absolute right-0 top-0 h-full w-[40%] z-10 flex flex-col justify-flex-start p-8">
    <h2 className="text-3xl font-bold text-white">{card.title}</h2>
    <p className="text-white mt-4">{card.description}</p>
    <button className="mt-4 px-4 py-2 rounded-md bg-blue-500 text-white w-[40%]" id="button-view">View Project</button>
  </div>
</div>

  );
};

export default Example;

const cards = [
  {
    url: require("../newski.PNG"),
    title: "A&A Transport",
    description:"This website i made for my FBLA website coding and development project provides a seamless experience for customers looking to transport their cars safely and securely. With a user-friendly interface and intuitive navigation, you can easily request a quote, track your shipment, and stay updated throughout the entire process.",
    id: 1,
  },
  {
    url: require("../sliders.PNG"),
    title: "Turbo rush",
    description:"Turbo Rush is an infinite top-down racing game that thrills players with high-speed action in futuristic cityscapes. With dynamically generated tracks and turbocharged vehicles, each race offers a unique challenge. Players must navigate obstacles, execute daring maneuvers, and use turbo boosts strategically to outpace rivals. Multiplayer mode amps up the intensity, allowing for head-to-head duels and global competitions. With stunning visuals and an adrenaline-pumping soundtrack, Turbo Rush delivers an unforgettable racing experience.",
    id: 2,
  },
  {
    url: require("../blackerrr.avif"),
    title: "Title 3",
    description:"Turbo Rush is an infinite top-down racing game that thrills players with high-speed action in futuristic cityscapes. With dynamically generated tracks and turbocharged vehicles, each race offers a unique challenge. Players must navigate obstacles, execute daring maneuvers, and use turbo boosts strategically to outpace rivals. Multiplayer mode amps up the intensity, allowing for head-to-head duels and global competitions. With stunning visuals and an adrenaline-pumping soundtrack, Turbo Rush delivers an unforgettable racing experience.",
    id: 3,
  }
];