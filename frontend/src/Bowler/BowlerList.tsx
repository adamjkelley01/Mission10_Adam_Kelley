// Importing necessary hooks and types
import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';

// Defining the BowlerList component
function BowlerList() {
  // State to store bowler data
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);

  // Fetching bowler data from API when the component mounts
  useEffect(() => {
    const fetchBowlerData = async () => {
      // Fetching data from the specified endpoint
      const response = await fetch('http://localhost:5259/Bowler');
      // Parsing response as JSON
      const data = await response.json();
      // Updating state with fetched data
      setBowlerData(data);
    };
    // Calling the fetchBowlerData function
    fetchBowlerData();
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  // Rendering the list of bowlers
  return (
    <>
      <div className="row">
        {/* Heading */}
        <h4 className="text-center">The Squad</h4>
      </div>
      {/* Table to display bowler data */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping through bowler data to render rows */}
          {bowlerData.map((bowler) => (
            <tr key={bowler.bowlerID}>
              <td>{`${bowler.bowlerFirstName} ${bowler.bowlerMiddleInit ? bowler.bowlerMiddleInit + '. ' : ''}${bowler.bowlerLastName}`}</td>
              <td>{bowler.teamName}</td>
              <td>{bowler.bowlerAddress}</td>
              <td>{bowler.bowlerCity}</td>
              <td>{bowler.bowlerState}</td>
              <td>{bowler.bowlerZip}</td>
              <td>{bowler.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

// Exporting the BowlerList component as the default export
export default BowlerList;
