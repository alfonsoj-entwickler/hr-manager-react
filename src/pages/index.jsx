import { useLoaderData } from "react-router-dom";

export function loader() {
    return 'From index loader';
}

function Index () {
    const dataLoader = useLoaderData();
    
    return(
        <h3>Home</h3>
    )
}

export default Index;