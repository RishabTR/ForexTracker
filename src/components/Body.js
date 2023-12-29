import { currencyPairs } from "../common/utilities";
import Button from '@mui/material/Button';



const Body = () => {


  let pair1, pair2;

  function handleOnClickTrack(){
    console.log("PAIR1:",pair1,"PAIR2:",pair2)
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
        <Button variant="contained" color="primary" onClick={handleOnClickTrack}>Track</Button>
      </div>

    </main>
  );
}

export default Body;