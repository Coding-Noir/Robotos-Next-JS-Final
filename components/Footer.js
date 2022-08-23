import Button from "./microComponents/Button"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="domo-text">DOMO</div>
      <div className="domo-text purple">ARIGATO</div>

      <Button text="Mint Robotos" link="/" btnColor="purple" />

      <div className="follow">
        Follow Robotos on{" "}
        <a
          href="https://twitter.com/robotosnft"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Twitter</strong>
        </a>{" "}
        or{" "}
        <a href="#" target="_blank" rel="noopener noreferrer">
          <strong>Discord</strong>
        </a>{" "}
        <br />
        <a href="#" target="_blank" rel="noopener noreferrer">
          <strong>Smart Contract</strong>
        </a>
      </div>
    </footer>
  )
}

export default Footer
