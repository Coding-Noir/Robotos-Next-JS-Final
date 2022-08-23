import Image from "next/image"
import { RobotHead } from "../components/microComponents/images"
import Button from "./microComponents/Button"
import Inventory from "./microComponents/Inventory"

const GetRobots = () => {
  return (
    <div className="get-robots">
      <div className="container">
        <div className="get-robot-card">
          <div className="get-robot-card-head">
            <div className="get-robot-card-head-img">
              <Image src={RobotHead} className="robot-head" loading="lazy" />
            </div>

            <h3 className="section-title">GET YOUR ROBOTOS</h3>

            <p>
              Robotos is a collection of droid characters designed by{" "}
              <a href="#" target="_blank" rel="noopener noreferrer">
                <strong> Pablo Stanley</strong>
              </a>{" "}
              and minted as NFTs. They are constructed from various metal
              outfits, tin faces, digital accessories, top pieces, faces,
              backpacks, arms, and colors. Get your own!
            </p>

            <Button text="Mint Robotos" link="/" btnColor="pink" />

            <Inventory inventoryBgColor="grey-bg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetRobots
