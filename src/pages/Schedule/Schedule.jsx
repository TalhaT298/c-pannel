import React from 'react';
import { Link } from 'react-router-dom';
// import { PopupButton } from "react-calendly";

const Schedule = () => {
    return (
        <div>
            <Link to="/sched"></Link>
            {/* <PopupButton
                url="https://calendly.com/tariquetalha6/oceancapp"
                
                rootElement={document.getElementById("root")}
                text="Click here to schedule!"
                textColor="#ffffff"
                color="#00a2ff
            /> */}
            <div>
                <iframe 
                
                
                src="https://calendly.com/tariquetalha6/oceancapp" 
                width="100%"
                height="600"
                color=''
                frameborder="0"></iframe>
            </div>
        </div>
    );
};

export default Schedule;
