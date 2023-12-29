import { useRouteError } from "react-router-dom";

const Error = () => {

    const err=useRouteError();


    return (
        <>
            <h1>{err.status}</h1>
            <h3>Please provide the correct url</h3>
        </>
    );
}

export default Error;