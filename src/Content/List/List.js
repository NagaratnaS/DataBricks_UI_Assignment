import { React , useEffect , useState } from "react";
import './List.css';
import NewIcon from '../../Images/NewIcon.png';
import data from '../../data/compareX.json';



export default function List( { currentMonth,combinedProductValues,isMonthlyComparison } ) {


    const[key,setKey] = useState("");
    


    useEffect( () => {
        if(combinedProductValues && combinedProductValues.length === 2){
            let tempKey = "Compare" + combinedProductValues;
            if(tempKey in data.monthly_comparison[getMonth]){
                setKey(tempKey);
            }
            else if( (tempKey in data.monthly_comparison[getMonth]) === false ){
                let reversedKey = "Compare" + combinedProductValues.split("").reverse().join("");
                setKey(reversedKey);
            }
            else{
                setKey("");
            }
        }
    },[combinedProductValues])


    const today = new Date();

    let getMonth = today.toLocaleString('default', {
        month: 'long',
    });

    
    return(


        <div>
            <ul className="list_heading">

                {
                    isMonthlyComparison ?
                    (
                        data.monthly_comparison && data.monthly_comparison[getMonth] && data.monthly_comparison[getMonth][key] && data.monthly_comparison[getMonth][key].map( (listEle) => (
                            <>
                                <li className="list_ele"> <img src={NewIcon}/> {listEle}</li>
                                <div className="list_line"></div>
                            </>
                        ) )
                    ) : 
                    (
                        Object.keys(data.monthly_comparison).map( (eachMonth) => (
                            Object.keys(data.monthly_comparison[eachMonth]).map((val) => (
                                key && val === key ?
                                    (
                        
                                        data.monthly_comparison[eachMonth][val].map( (listEle) => (
                                            <>
                                                <li className="list_ele"> <img src={NewIcon}/> {listEle}</li>
                                                <div className="list_line"></div>
                                            </> 
                                        ) )

                                    )
                                : null
                            ))
                        ))
                    )
                }

                {

                    
                }
                    

                
            </ul>
        </div>
    );
}