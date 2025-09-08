import Button from "./Button";
import { AiOutlineSend } from "react-icons/ai";

function Form({
    inputsArray,
    values,
    errors,
    onChange,
    onSubmit
}) {

        //let genId = crypto.randomUUID().slice(0, 8);
  return (

<>
    <form onSubmit={onSubmit} className="form-container" >
        {
            inputsArray.map(
                ({name, type, label }) => 
                    <div key={name} className="form-container">
                        <label htmlFor={name}>{label}</label> 
                             
                            <input 
                            type={type} 
                            id={name} 
                            name={name} 
                            value={type !== "file" ? values[name] : values[name]?.filename || ""} 
                            onChange={onChange} 
                            className={`form__input${ errors[name] ? "with-error" : ""} `}
                            />
                                {errors[name] && <span className="form__error">{errors[name]}</span>}
                            
                           
                    </div>
            )
        }
        <div >
        <Button className='submit-button' text={"Send"} >
            <AiOutlineSend />
        </Button>
        </div>

          

    </form>
</>

    
  )
}

export default Form
