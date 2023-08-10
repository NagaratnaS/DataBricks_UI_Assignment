import React from 'react'; 
import './Comparison.css';


export default function Comparison(){



    return(
        <div>
            <div className='button_and_text_container'>
                <h3>  What would you like to compare today? </h3>
                <div className='button_container'>
                    <select name="first_dropdown" id="first_dropdown" className="first_dropdown">
                        <option value="volvo">Product A</option>
                    </select>
                    <select name="second_dropdown" id="second_dropdown" className="second_dropdown">
                        <option value="volvo">Product B</option>
                    </select>
                </div>
                
            </div>
            
        </div>
    );
}