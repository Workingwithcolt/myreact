import { useEffect, useState } from "react";
import "./App.css";
import { GenericInput } from "./Component/GenericInput";
import { GenericButton } from "./Component/GenericButton";
import { GenericCard } from "./Component/GenericCard";

function App() {
  const [todo, setTodo] = useState("")
  const [store, setStore] = useState([])
  const [Description, setDescription] = useState("")
  const [Error, setError] = useState(undefined);

  function removeItemOnce(arr, index) {
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }


  const handleSubmit = (e) => {
    //after clicking we have to push that particular object inside the array 
    //after that we have reintialise the staete to its initial phase
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === true) {
      const Object = {
        todo: todo,
        Description: Description
      }
      setStore(prev => [...prev, Object])
      setError(undefined)
      setTodo("")
      setDescription("")
    } else {
      setError("Form is Not Validated")
    }
  }

  const handleDelete = (i) => {
    const updatedItems = [...store];
    updatedItems.splice(i, 1);
    setStore(updatedItems);
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <form onSubmit={handleSubmit} noValidate={true}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <GenericInput
            name={"todo"}
            onChange={(value) => setTodo(value)}
            value={todo}
            required={true}
          />
          <GenericInput
            name={"Description"}
            onChange={(value) => setDescription(value)}
            value={Description}
            required={true}
          />
          <GenericButton type={"submit"} buttonText={"AddTodo"} />
        </div>
      </form>
      {
        Error && <h2>{Error}</h2>
      }
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        {
          store.map((element, index) =>
          (
            <GenericCard
              key={index}
              description={element.Description}
              title={element.todo}
              handleDelete={() => handleDelete(index)}
            />
          )
          )
        }
      </div>
    </div>
  );
}

export default App;

