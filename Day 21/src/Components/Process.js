import React,{useState} from 'react'
import './main.css'

const Process = ({addItem}) => {

  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    itemName : "",
    calorie : ""
  })

  const [state, setState] = useState("")


 const handleFormDataChange = (e) => {

  const name = e.target.name;
  const value = e.target.value;

  const updateFormData = (data) => {
    let object = {...data, [name] : value}
    return object;
  }
  setFormData(updateFormData) 

 }

 const handleonSubmit = (e) => {
   e.preventDefault();
   let {itemName, calorie} = formData
   if(!itemName){
     alert("Item not entered")
     return;
   }

   if(!calorie){
    alert("Calorie Amount not entered")
    return;
  }

  setError("")
  
  // console.log(formData)
  addItem(formData)

  setFormData((data) => ({...data, itemName : "",
  calorie : ""}));
  
  // setFormData("")
 }


  return(
    <form className = "form">
      <div className = "input" >

{/* Controlled and uncontrolled */}

      <input type = "text" placeholder = "Item Name" value = {formData.itemName} name = "itemName" onChange = {handleFormDataChange}/>
        <input type ="number" placeholder = "Calorie Amount" value = {formData.calorie} name = "calorie" onChange = {handleFormDataChange}/>
<button onClick = {handleonSubmit}> Add Item </button>
</div>

<p style={{color : "White" }}>{error}</p>
        </form>
  )
}

export default Process;