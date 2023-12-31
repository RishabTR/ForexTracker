import { useEffect, useState } from "react";
import { currencyPairs } from "../../common/utilities";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@mui/material";




const Track = () => {
    const [pair1, setPair1] = useState();
    const [pair2, setPair2] = useState();



    function setChangePair1(e) {
        setPair1(e.target.value);
    }

    function setChangePair2(e) {
        setPair2(e.target.value);
    }

    useEffect(()=>{
        console.log('Learning useEffect Hook');
    })


    
    return (

        

    
        <>
            <div className="container">
                <div>
                    <h1>Rock and Roll</h1>
                </div>
                <div className="combine">
                    <div className="input-block">
                        <div>
                            <h1>Input</h1>
                        </div>
                        <div>
                            Pair1:
                            <select value={pair1 || ''} onChange={setChangePair1}>
                                <option value="" disabled>Select Pair 1</option>
                                {currencyPairs.map(pair => (
                                    <option key={pair} value={pair}>
                                        {pair}
                                    </option>
                                ))}

                            </select>
                        </div>
                        <div>
                            Pair2:
                            <select value={pair2 || ''} onChange={setChangePair2}>
                                <option value="" disabled>Select Pair 2</option>

                                {currencyPairs.map(pair => (
                                    <option key={pair} value={pair}>
                                        {pair}
                                    </option>
                                ))}
                            </select>

                        </div>
                        <div>
                            <Button variant="contained" color="primary"><Link to='/track/output'>Track</Link></Button>
                        </div>


                    </div>
                    <div className="output-bar">
                        
                        <Outlet />
                    </div>
                </div>

            </div >


        </>
    );
}

export default Track;