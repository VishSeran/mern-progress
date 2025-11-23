import React from "react";
import ReactPlayer from "react-player";

function HomePage(){
    

    
    return(
        <div>
            <h1>Hello, welcome user!</h1>
            <ReactPlayer url="https://youtu.be/Pb9n23ILj-Y?si=fYjUKMvr_f38L4Gl" controls playing={false} volume={0.5}/>
        </div>
    );
}

export default HomePage;