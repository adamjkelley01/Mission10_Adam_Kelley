// Importing the logo image from the correct file path
import logo from './kevinjames.jpg';

// Defining the Header component
function Header(props: any) {
  return (
    // Header section with a row layout using Bootstrap classes
    <header className="row navbar navbar-dark bg-dark">
      {/* Left column for the logo */}
      <div className="col-4">
        {/* Rendering the logo image */}
        <img
          src={logo} // Using the imported logo as the image source
          className="logo" // Applying CSS class for styling
          alt="logo" // Alternative text for accessibility
          style={{ maxWidth: '100%', height: 'auto' }} // Styling for image
        />
      </div>
      {/* Right column for the title and description */}
      <div className="col subtitle">
        {/* Title */}
        <h1 className="text-white">{props.title}</h1>
        {/* Adding line breaks for spacing */}
        <br />
        <br />
        <br />
        <br />
        {/* Description */}
        <p className="text-white">
          This is a list of all bowlers that are just absolute ballers
        </p>
      </div>
    </header>
  );
}

// Exporting the Header component as the default export
export default Header;
