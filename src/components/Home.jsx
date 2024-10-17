// import React from "react";
// import Group from '../images/Group.png'
// import {Link} from 'react-router-dom'
// import './Home.css'
// import createGroup from './createGroup'

// const Home=()=>{
//     return(
//         <>
//             <div id="">
//                 <Link to="/"><img src={Group} id="createGroup" onClick={createGroup} /></Link>
//             </div>
//         </>
//     )
// }

// export default Home;

















import React from "react";

import './Home.css';
import CreateGroup from './createGroup'; // Make sure this import is correct

const Home = () => {
  return (
    <>
      {/*<div id="">
        {/* <Link to="/">
          <img src={Group} id="createGroup" />
        </Link> */}
        {/* Render the CreateGroup component */}
        <CreateGroup />
      {/*</div>*/}
    </>
  );
};

export default Home;
