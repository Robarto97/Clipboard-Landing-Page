import computer from "../images/image-computer.png";
const Snippets = () => {
  return (
    <section className="snippets">
      <h2>Keep track of your snippets</h2>
      <p>
        Clipboard instantly stores any item you copy in the cloud, meaning you
        can access your snippets immediately on all your devices. Our Mac and
        iOS apps will help you organize everything.
      </p>
      <div>
        <div className="img-wrapper">
          <img src={computer} alt="" />
        </div>
        <ul>
          <li>
            <h3>Quick Search</h3>
            <p>
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </li>
          <li>
            <h3>iCloud Sync</h3>
            <p>Instantly saves and syncs snippets across all your devices.</p>
          </li>
          <li>
            <h3>Complete History</h3>
            <p>
              Retrieve any snippets from the first moment you started using this
              app.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Snippets;
