import Image from "next/image"
import {
  ImageRow1,
  ImageRow2,
  ImageRow3,
} from "../components/microComponents/images"

const Intermission = () => {
  return (
    <div className="intermission">
      <div className="image-row">
        <Image src={ImageRow1} />
      </div>
      <div className="image-row _2">
        <Image src={ImageRow2} />
      </div>
      <div className="image-row _3">
        <Image src={ImageRow3} />
      </div>
    </div>
  )
}

export default Intermission
