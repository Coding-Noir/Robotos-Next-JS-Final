import Image from "next/image"
import { motion } from "framer-motion"
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
} from "../components/microComponents/images"
import Button from "./microComponents/Button"
import Inventory from "./microComponents/Inventory"

// Animations
const robots = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const ctaContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delay: 1.5,
    },
  },
}

const Hero = () => {
  return (
    <section className="hero-area">
      <motion.div
        className="hero-container"
        variants={robots}
        initial="hidden"
        animate="show"
      >
        <div className="hero-text" initial="hidden" animate="show">
          <motion.h1 className="hero-heading">Ro</motion.h1>
          <motion.h1 className="hero-heading h2">Bot</motion.h1>
          <motion.h1 className="hero-heading h3">os</motion.h1>
        </div>

        <motion.div className="img1" variants={robots}>
          <Image
            src={Image1}
            width={300}
            height={160}
            className="hero-img"
            priority
          />
        </motion.div>

        <motion.div className="img2" variants={robots}>
          <Image
            src={Image2}
            className="hero-img"
            width={300}
            height={160}
            priority
          />
        </motion.div>

        <motion.div className="img3" variants={robots}>
          <Image
            src={Image3}
            className="hero-img"
            width={300}
            height={160}
            priority
          />
        </motion.div>

        <motion.div className="img4" variants={robots}>
          <Image
            src={Image4}
            className="hero-img"
            width={300}
            height={160}
            priority
          />
        </motion.div>

        <motion.div className="img5" variants={robots}>
          <Image
            src={Image5}
            className="hero-img"
            width={300}
            height={160}
            priority
          />
        </motion.div>

        <motion.div className="img6" variants={robots}>
          <Image
            src={Image6}
            className="hero-img"
            width={300}
            height={160}
            priority
          />
        </motion.div>

        <motion.div className="img7" variants={robots}>
          <Image
            src={Image7}
            className="hero-img"
            width={300}
            height={160}
            priority
          />
        </motion.div>

        <motion.div className="img8" variants={robots}>
          <Image
            src={Image8}
            className="hero-img"
            width={300}
            height={160}
            priority
          />
        </motion.div>

        <motion.div className="img9" variants={robots}>
          <Image
            src={Image9}
            className="hero-img"
            width={300}
            height={160}
            priority
          />
        </motion.div>

        <motion.div className="img10" variants={robots}>
          <Image
            src={Image10}
            className="hero-img"
            width={300}
            height={160}
            priority
          />
        </motion.div>

        <motion.div className="img11" variants={robots}>
          <Image
            src={Image11}
            className="hero-img"
            width={300}
            height={160}
            priority
          />
        </motion.div>

        <motion.div
          className="cta-container"
          variants={ctaContainer}
          initial="hidden"
          animate="show"
        >
          <Button text="Mint Robotos" link="/" btnColor="mint" />

          <Inventory inventoryBgColor="red" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
