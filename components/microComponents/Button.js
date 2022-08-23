import Link from "next/link"

const Button = ({ text, link, btnColor }) => {
  return (
    <div className="button-container">
      <Link href={link}>
        <a className={`btn-prime ${btnColor}`}>{text}</a>
      </Link>
    </div>
  )
}

export default Button
