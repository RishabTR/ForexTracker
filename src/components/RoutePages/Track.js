import { useLocation } from "react-router-dom";


const Track = () => {

    const location = useLocation();
    const { pair1, pair2 } = location.state;
  
    return(
        <>

            <h1>This is the page for Tracking the entered pair</h1>
            <h1>{pair1} AND {pair2}</h1>
            
        </>
    );
}

export default Track;