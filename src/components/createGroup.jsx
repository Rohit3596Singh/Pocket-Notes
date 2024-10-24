//object conversion(serialisation):-   https://blog.logrocket.com/storing-retrieving-javascript-objects-localstorage/#:~:text=The%20correct%20way%20to%20store,object%20data%20is%20called%20deserialization.
import React, { useState,useRef, useEffect } from 'react';
import "./createGroup.css";
import Group from '../images/Group.png';
import { json, Link } from 'react-router-dom';

const CreateGroup = (onSendData) => {
  const [modal, setModal] = useState(false);
  const [group,setGroup]=useState([])
  const [groupName,setGroupName] = useState("")
  let data=useRef();

  // localStorage.clear();

  useEffect(()=>{
    // localStorage.setItem("group", JSON.stringify(group));
    const storedGroup =JSON.parse(localStorage.getItem('group'))||[]
    setGroup(storedGroup);
  },[])

  // Function to toggle the modal state
  const toggleModal = () => {
    setModal(!modal);
    if (!modal) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }
  };

  // function addGroup(){
  //   console.log(data.current.value("initial value"))
  //   localStorage.setItem("inputValue",data.current.value)
  // }

  function addGroup(e) {
    e.preventDefault();
    let newName = data.current.value.trim();
    
    
    if(newName){
      let obj={groupName:newName,notes:""}
      const updatedArray=[...group,obj];
      setGroup(updatedArray);
      localStorage.setItem("group",JSON.stringify(updatedArray))
      // setGroup((prevGroups)=>({
      //   ...prevGroups,
      //   groupNmae:newName,
      // }));
      
      // const updatedGroup={...group,newName}
      // localStorage.setItem("group",JSON.stringify(group))
      data.current.value="";
      onSendData(groupdatedArrayup);
      setGroupName("");
      //
    }

    // //send data to parent via callback
    // const sendDataToParent=()=>{
    //   onSendData(group);
    // }

    // if (data.current) {
    //   console.log(data.current.value); // Logs the input value
    //   localStorage.setItem("inputValue", data.current.value); // Stores it in localStorage
    //   console.log(localStorage.getItem("inputValue")); // Retrieves and logs the value from localStorage
    //   let oldData = JSON.parse(localStorage.getItem("inputValue"));
    //   localStorage.setItem('items',JSON.stringify([...oldData, ...obj]));
    //   console.log(oldData)
    // }

    


    // setGroupName((prevGroups)=>{
    //   Array.isArray(prevGroups)? [...prevGroups, ...newGroup] : [newGroup]
    //})
  }
  // {**************************LOCAL STORAGE*****************************

// // Storing data
// localStorage.setItem('key', 'value');

// // Retrieving data
// const value = localStorage.getItem('key');
// console.log(value);

  // *********************************    
  // }

  console.log(localStorage.getItem("inputValue"))
  return (
    <>
      {/* <button onClick={toggleModal} id="openModalButton">Create Group</button> */}
      <Link to="/">
          <img src={Group} id="createGroup" onClick={toggleModal} />
        </Link>
      {modal && (
        <div id="createGroup-popup">
          <h3 id="popup-heading">Create New Group</h3>
          <label id="Group-name">Group Name:</label>
          <input onChange={(e)=> setGroupName(e.target.element)} 
            id="enter-group-name" 
            type="text" 
            placeholder='Enter Group Name' 
            ref={data} />
          <button id="closeBTN" onClick={toggleModal}>Close</button>
          <button id="addBTN" onClick={addGroup}>ADD</button>
        </div>
      )}
    </>
  );
};

export default CreateGroup;


































// import React, { useState, useRef, useEffect } from 'react';
// import "./createGroup.css";
// import Group from '../images/Group.png';
// import { Link } from 'react-router-dom';

// const CreateGroup = () => {
//   const [modal, setModal] = useState(false);
//   const [group, setGroup] = useState([]);
//   const [groupName, setGroupName] = useState("");
//   let data = useRef();

//   // localStorage.clear();

//   useEffect(() => {
//     const storedGroup = JSON.parse(localStorage.getItem('group')) || [];
//     setGroup(storedGroup);
//   }, []);

//   // Function to toggle the modal state
//   const toggleModal = () => {
//     setModal(!modal);
//     if (!modal) {
//       document.body.classList.add('active-modal');
//     } else {
//       document.body.classList.remove('active-modal');
//     }
//   };

//   function addGroup(e) {
//     e.preventDefault();
//     let newName = data.current.value.trim();

//     if (newName) {
//       // Create a new object with the group name
//       let newGroup = { groupName: newName, notes: "" };

//       // Update the group array with the new group object
//       const updatedArray = [...group, newGroup];
//       setGroup(updatedArray);
      
//       // Update local storage with the new array
//       localStorage.setItem("group", JSON.stringify(updatedArray));
      
//       // Clear the input field
//       data.current.value = "";
//       setGroupName("");
//     }
//   }

//   return (
//     <>
//       <Link to="/">
//         <img src={Group} id="createGroup" onClick={toggleModal} />
//       </Link>
//       {modal && (
//         <div id="createGroup-popup">
//           <h3 id="popup-heading">Create New Group</h3>
//           <label id="Group-name">Group Name:</label>
//           <input
//             onChange={(e) => setGroupName(e.target.value)}
//             id="enter-group-name"
//             type="text"
//             placeholder="Enter Group Name"
//             ref={data}
//           />
//           <button id="closeBTN" onClick={toggleModal}>Close</button>
//           <button id="addBTN" onClick={addGroup}>ADD</button>
//         </div>
//       )}
//     </>
//   );
// };

// export default CreateGroup;
