import { currencyPairs } from "../common/utilities";
import Button from '@mui/material/Button';
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const Body = () => {
  // const navigate = useNavigate();

  // const [pair1, selectPair1] = useState('');
  // const [pair2, selectPair2] = useState('');
  // function handleOnClickTrack() {


  //   if ((pair1 !== '' && pair2 !== '') && pair1 !== pair2) {
  //     navigate(`/track/${pair1}/${pair2}`, { state: { pair1, pair2 } });
  //   }
  //   else {
  //     if (pair1 === '' || pair2 === '') {
  //       alert('Select any pair!!')
  //     }
  //     else {
  //       alert('Avoid Same pairs')
  //     }

  //   }


  // }

  // useEffect(() => {
  //   console.log("Learning useEffect Hook");
  // }, [])

  // const fetchData = async () => {
  //   const data = await fetch(
  //     " https://marketdata.tradermade.com/api/v1/live?api_key=H_3jbDkH3vIHOZ02lPND&currency=USDEUR"
  //   );

  //   const json = await data.json();

  //   console.log(json)
  // }




  // function selectedPair1(e) {
  //   selectPair1(e.target.value);

  // }
  // function selectedPair2(e) {
  //   selectPair2(e.target.value);

  // }

  // fetchData();



  return (
    <main>


      <div className="body">
        <h1>Forex Tracker</h1>
        <h3>Track live forex prices for your selected currency pairs.</h3>
        <h5>Click the Track Button Below to Start!!!</h5>
        <Link to='/track'>Click Here to Track</Link>
      </div>

      {/* <div className="container">


        <div className="search-bar">
          <select onChange={selectedPair1} value={pair1 || ''}>
            <option value="" disabled>Select Pair 1</option>
            {currencyPairs.map(pair => (
              <option key={pair} value={pair}>
                {pair}
              </option>
            ))}
          </select>
          <select onChange={selectedPair2} value={pair2 || ''}>
            <option value="" disabled>Select Pair 2</option>

            {currencyPairs.map(pair => (
              <option key={pair} value={pair}>
                {pair}
              </option>
            ))}
          </select>


        </div> */}
      {/* </div> */}

    </main>
  );
}

export default Body;