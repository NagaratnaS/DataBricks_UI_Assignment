import { React , useState } from "react";
import './SearchBar.css';
import SearchIcon from '../Images/SearchIcon.png';

export default function SearchBar( { receiveMonthValue  } ){

    const[textInput,setTextInput] = useState("");
    
    const textInputChangeHandler = (event) => {
        setTextInput(event.target.value);
    }

    const searchButtonHandler = () => {
        let tempInput = textInput;
        if(tempInput.length === 0){
            alert("Please enter a month value!!!");
        }
        else if(tempInput === tempInput.toUpperCase()){
            tempInput = textInput.charAt(0)+ textInput.slice(1).toLowerCase();
            setTextInput(tempInput);
        }
        else{
            tempInput = textInput.charAt(0).toUpperCase() + textInput.slice(1);
            setTextInput(tempInput);
        }
        receiveMonthValue(tempInput,true);
        setTextInput("");
    }


    return(

        <div>
            <div className="search_container">
                <img src={SearchIcon} className="search_icon"></img>

                <input 
                    type="text" 
                    placeholder="What can we help you find?" 
                    className="search_field"
                    onChange={textInputChangeHandler}
                    value={textInput}
                >
                </input>

                <button className="search_button" onClick={searchButtonHandler}> Search </button>
            </div>
        </div>
        
    );
}