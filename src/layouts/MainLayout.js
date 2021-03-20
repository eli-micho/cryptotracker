import React from 'react';

//Components
import Sidebar from '../components/Sidebar';


const MainLayout = (props) => {
    return (
        <div className="fullWidth">
            {props.children}
        </div>
    );
};

export default MainLayout;
