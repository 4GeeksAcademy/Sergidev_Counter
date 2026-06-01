import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import vecnaImage from "../../img/vecna.png";

import SecondsCounter from "./SecondsCounter";

//create your first component
const Home = (props) => {
	return (
		<>
            <div className="d-flex justify-content-center align-items-center min-vh-100 w-100 p3 animated-pulse-bg">
            	<SecondsCounter seconds={props.seconds} />
        	</div>

            <div id="vecna-overlay" className="vecna-overlay d-none">
                <img src={vecnaImage} alt="Vecna Event" className="vecna-image"/>
            </div>
		</>
	);
};

export default Home;