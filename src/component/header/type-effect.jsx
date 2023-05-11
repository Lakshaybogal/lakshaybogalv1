import React from 'react';
import Typewriter from "typewriter-effect";

const Type = () => {
   
    return (
        <div className="Type">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                    .typeString("Web Developer").pauseFor(1500).deleteAll()
                    .typeString("Programmer").pauseFor(1500).deleteAll()
                    .typeString("Explorer").pauseFor(1500).deleteAll()
                    .start();
                  }}
                  options={{
                    loop: true,
                    autoStart: true,
                  }}
            />

        </div>
    );
}

export default Type;
