import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <h1>A history of everything you copy</h1>
      <p>
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <div className="btn-group">
        <button className="green">Download for iOS</button>
        <button className="blue">Download for Mac</button>
      </div>
    </header>
  );
};

export default Header;
