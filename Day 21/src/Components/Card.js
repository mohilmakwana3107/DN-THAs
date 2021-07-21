import React,{useState} from 'react';

const Card = (props) => {

  const {id, food, calorie, state, setState } = props;
  // console.log(setState)
  const [isEditMode, setIsEditMode] = useState(false)
  const [editData, setEditData] = useState({
    foodName : food,
    calorieAmount : calorie
  })

  const deleteHandler = () => {
    // console.log(id)
    let newState = state.filter((element)=>
      element.id !== id
    )
    setState(newState)
  }

  const editHandler = ()=>{
setIsEditMode(true)
  }

    

  const onChangeDataHandler = (e) => {

    const name = e.target.name
    const value = e.target.value

    setEditData((current)=>({...current, [name] : value}))

// setEditData((editData) => {
//   console.log(editData)
//   editData = {...editData, [name] : value}
//   return editData
// })
    
  }

  const doneHandler = ()=>{




const array = state.map((data) => {

  if(data.id === id){
    return {...data, food : editData.foodName, cals : editData.calorieAmount}
    
  } else {
    return data;
  }
})
setState(array)
    
    
      setIsEditMode(false)

    }

  return (
    <div className="container">
      <div className="card">
        {
          
          isEditMode ? <><input type = "text" name = "foodName" value = {editData.foodName} placeholder = "Item Name..." onChange = {onChangeDataHandler}/> <input type = "number" onChange = {onChangeDataHandler} name = "calorieAmount" value = {editData.calorieAmount} placeholder = "Calorie Amount..."/> </>: <><h3>{food}</h3>
          <p>Consumed calorie : {calorie}</p>
        </>
        }
      
        <div className = "button">
        {
          isEditMode ? <button id="edit" onClick={doneHandler}>Done</button> : <button id="edit" onClick={editHandler}>Edit</button>
        }
        
        <button id="del" onClick={deleteHandler}>Delete</button>
        </div>
        
        
      </div>
      
    </div>
  );
};

export default Card;