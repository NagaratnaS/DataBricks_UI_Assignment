import { React ,useState } from 'react'; 
import './Comparison.css';
import * as Constants from '../constants/constants';


export default function Comparison({receiveFirstProduct,receiveSecondProduct}){

    const[dropDownElements,setDropDownElements] = useState(Constants.PRODUCTS);
    const[firstDropdownValue,setFirstDropdownValue] = useState("");
    const[secondDropdownValue,setSecondDropdownValue] = useState("");

    const handleFirstDropdownChange = (event) => {
        setFirstDropdownValue(event.target.value);
        receiveFirstProduct(event.target.value);
    }   

    const handleSecondDropdownChange = (event) => {
        setSecondDropdownValue(event.target.value);
        receiveSecondProduct(event.target.value);
    }

    return(
        <div>
            <div className='button_and_text_container'>
                <h3>  What would you like to compare today? </h3>
                <div className='button_container'>
                    <select name="first_dropdown" id="first_dropdown" className="first_dropdown" onChange={handleFirstDropdownChange}>
                        <option value="none" selected disabled hidden>Select</option>
                        {
                            dropDownElements.map((ele) => (
                                <option value={ele}><p>Product</p>  {ele}</option>
                            ))
                        }
                    </select>
                    <select name="second_dropdown" id="second_dropdown" className="second_dropdown" onChange={handleSecondDropdownChange}>
                        <option value="none" selected disabled hidden>Select</option>
                        {
                            dropDownElements.map((ele) => (
                                <option value={ele}><p>Product</p>  {ele}</option>
                            ))
                        }
                    </select>
                </div>
                
            </div>
            
        </div>
    );
}