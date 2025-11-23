import { useState } from "react";

function HomePage(){
    
    const [login, setLogIn] = useState(false);
    
    return(
        <div>
            <h1>Hello, welcome user!</h1>
        </div>
    );
}

export default HomePage;