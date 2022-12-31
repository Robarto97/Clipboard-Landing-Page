import devices from '../images/image-devices.png'
const Access = () => {
  return (
    <section className="access">
      <h2>Access Clipboard Anywhere</h2>
      <p>
        Whether you're on the go, or at your computer, you can access all your
        Clipboard snippets in a few simple clicks.
      </p>
      <div className="img-wrapper">
        <img src={devices} alt="" />
      </div>
    </section>
  );
};

export default Access;
