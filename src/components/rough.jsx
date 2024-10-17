import React, { useState, useRef, useEffect } from 'react';
import "./createGroup.css";
import Group from '../images/Group.png';
import { Link } from 'react-router-dom';

const CreateGroup = () => {
  const [modal, setModal] = useState(false);
  const [names, setNames] = useState([]); // State to keep track of all the names
  const data = useRef();

  // Function to toggle the modal state
  const toggleModal = () => {
    setModal(!modal);
    if (!modal) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }
  };

  // Load the names from localStorage when the component mounts
  useEffect(() => {
    const storedNames = JSON.parse(localStorage.getItem('names')) || [];
    setNames(storedNames);
  }, []);

  // Function to add a new name to the list
  const addGroup = (e) => {
    e.preventDefault();
    const newName = data.current.value.trim(); // Get the input value

    if (newName) {
      const updatedNames = [...names, newName]; // Add the new name to the existing list
      setNames(updatedNames); // Update state
      localStorage.setItem('names', JSON.stringify(updatedNames)); // Save to localStorage
      data.current.value = ''; // Clear the input field
    }
  };

  return (
    <>
      <Link to="/">
        <img src={Group} id="createGroup" onClick={toggleModal} />
      </Link>
      {modal && (
        <div id="createGroup-popup">
          <h3 id="popup-heading">Create New Group</h3>
          <label id="Group-name">Group Name:</label>
          <input
            ref={data}
            id="enter-group-name"
            type="text"
            placeholder='Enter Name'
          />
          <button id="closeBTN" onClick={toggleModal}>Close</button>
          <button id="addBTN" onClick={addGroup}>ADD</button>
        </div>
      )}
      <div id="namesList">
        <h3>Names List:</h3>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CreateGroup;









//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------








// //object conversion(serialisation):-   https://blog.logrocket.com/storing-retrieving-javascript-objects-localstorage/#:~:text=The%20correct%20way%20to%20store,object%20data%20is%20called%20deserialization.
// import React, { useState,useRef, useEffect } from 'react';
// import "./createGroup.css";
// import Group from '../images/Group.png';
// import { Link } from 'react-router-dom';

// const CreateGroup = () => {
//   const [modal, setModal] = useState(false);
//   const [group,setGroup]=useState({groupName:"",notes:""})
//   const [groupName,setGroupName] = useState("")
//   let data=useRef();

//   // localStorage.clear();


//   useEffect(()=>{
//     // localStorage.setItem("group", JSON.stringify(group));
//     const storedGroup =JSON.parse(localStorage.getItem('group'))||{}
//     setGroup(storedGroup);
//   },[])

//   // Function to toggle the modal state
//   const toggleModal = () => {
//     setModal(!modal);
//     if (!modal) {
//       document.body.classList.add('active-modal');
//     } else {
//       document.body.classList.remove('active-modal');
//     }
//   };

//   // function addGroup(){
//   //   console.log(data.current.value("initial value"))
//   //   localStorage.setItem("inputValue",data.current.value)
//   // }

//   function addGroup(e) {
//     e.preventDefault();
//     let newName = data.current.value.trim();
//     if(newName){
//       setGroup((prevGroups)=>({
//         ...prevGroups,
//         groupNmae:newName,
//       }));
//       // const updatedGroup={...group,newName}
//       localStorage.setItem("group",JSON.stringify(group))
//       setGroupName("");
//       //
//     }
//     // if (data.current) {
//     //   console.log(data.current.value); // Logs the input value
//     //   localStorage.setItem("inputValue", data.current.value); // Stores it in localStorage
//     //   console.log(localStorage.getItem("inputValue")); // Retrieves and logs the value from localStorage
//     //   let oldData = JSON.parse(localStorage.getItem("inputValue"));
//     //   localStorage.setItem('items',JSON.stringify([...oldData, ...obj]));
//     //   console.log(oldData)
//     // }

    


//     // setGroupName((prevGroups)=>{
//     //   Array.isArray(prevGroups)? [...prevGroups, ...newGroup] : [newGroup]
//     //})
//   }
//   // {**************************LOCAL STORAGE*****************************

// // // Storing data
// // localStorage.setItem('key', 'value');

// // // Retrieving data
// // const value = localStorage.getItem('key');
// // console.log(value);

//   // *********************************    
//   // }

//   console.log(localStorage.getItem("inputValue"))
//   return (
//     <>
//       {/* <button onClick={toggleModal} id="openModalButton">Create Group</button> */}
//       <Link to="/">
//           <img src={Group} id="createGroup" onClick={toggleModal} />
//         </Link>
//       {modal && (
//         <div id="createGroup-popup">
//           <h3 id="popup-heading">Create New Group</h3>
//           <label id="Group-name">Group Name:</label>
//           <input onChange={(e)=> setGroupName(e.target.element)} 
//             id="enter-group-name" 
//             type="text" 
//             placeholder='Enter Group Name' 
//             ref={data} />
//           <button id="closeBTN" onClick={toggleModal}>Close</button>
//           <button id="addBTN" onClick={addGroup}>ADD</button>
//         </div>
//       )}
//     </>
//   );
// };

// export default CreateGroup;







//************************************************************************************************************************* */



//local storage object

{/*// // // Sample object
// // const myObject = { 
// //   name: "John Doe", 
// //   age: 30, 
// //   city: "New York" 
// // };

// // // Store the object
// // localStorage.setItem("myObject", JSON.stringify(myObject));

// // // Retrieve the object
// // const retrievedObject = JSON.parse(localStorage.getItem("myObject"));

// // // Access properties of the retrieved object
// // console.log(retrievedObject.name); // Output: John Doe
// // console.log(retrievedObject.age); // Output: 30*/}