import blacklist from "../images/icon-blacklist.svg";
import text from "../images/icon-text.svg";
import preview from "../images/icon-preview.svg";
import google from "../images/logo-google.png";
import ibm from "../images/logo-ibm.png";
import microsoft from "../images/logo-microsoft.png";
import hp from "../images/logo-hp.png";
import vector from "../images/logo-vector-graphics.png";

const Supercharge = () => {
  return (
    <section className="supercharge">
      <h2>Supercharge your workflow</h2>
      <p>We've got the tools to boost your productivity</p>
      <ul>
        <li>
          <img src={blacklist} alt="" />
          <h3>Create blacklists</h3>
          <p>
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </p>
        </li>
        <li>
          <img src={text} alt="" />
          <h3>Plain text snippets</h3>
          <p>
            Remove unwanter formating from copied text for a consistent look.
          </p>
        </li>
        <li>
          <img src={preview} alt="" />
          <h3>Sneak preview</h3>
          <p>
            Quick preview of all snippets on your Clipboard for easy access.
          </p>
        </li>
      </ul>
      <ul>
        <li className="logo">
          <img src={google} alt="" />
        </li>
        <li className="logo">
          <img src={ibm} alt="" />
        </li>
        <li className="logo">
          <img src={microsoft} alt="" />
        </li>
        <li className="logo">
          <img src={hp} alt="" />
        </li>
        <li className="logo">
          <img src={vector} alt="" />
        </li>
      </ul>
    </section>
  );
};

export default Supercharge;
