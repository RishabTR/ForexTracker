import { currencyPairs } from "../common/utilities";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Body = () => {
  const navigate = useNavigate();

  let pair1, pair2

  function handleOnClickTrack() {
    
    navigate('/track', {state:{pair1, pair2}});

  }

  function handleOnChangeEventPair1(e) {
    pair1 = e.target.value;
  }
  function handleOnChangeEventPair2(e) {
    pair2 = e.target.value;
  }


  return (

    <main>
      <div className="container">
        <h1>Forex Tracker</h1>
        <h3>Track live forex prices for your selected currency pairs.</h3>

        <div className="search-bar">

          <select onChange={handleOnChangeEventPair1}>
            {currencyPairs.map(pair => (
              <option key={pair} value={pair}>
                {pair}
              </option>
            ))}
          </select>
          <select onChange={handleOnChangeEventPair2}>
            {currencyPairs.map(pair => (
              <option key={pair} value={pair}>
                {pair}
              </option>
            ))}
          </select>


        </div>
        <Button variant="contained" color="primary" onClick={handleOnClickTrack}>
          <Link to='/track'>Track</Link>
        </Button>
      </div>

    </main>
  );
}

export default Body;