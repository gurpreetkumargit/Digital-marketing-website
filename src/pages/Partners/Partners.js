import React from "react";
import { InfoSection } from "../../components";
// import { Services } from "../../components";
import { homeObjFour } from "./Data";

const Home = () => {
    return ( <
        > {
            /* <InfoSection {...homeObjOne} />
                   <InfoSection {...homeObjTwo} />
                  <InfoSection {...homeObjThree} /> 
                  <Services /> */
        } <
        InfoSection {...homeObjFour }
        /> <
        />
    );
};

export default Home;