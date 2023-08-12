import React from "react";
import './List.css';
import NewIcon from '../../Images/NewIcon.png';
import data from '../../data/compareX.json';


export default function List( { currentMonth,combinedProductValues,isMonthlyComparison } ) {

    let k = "Compare"+combinedProductValues;

    return(


        <div>
            <ul className="list_heading">

                {
                    isMonthlyComparison ?
                    (
                        data.monthly_comparison && data.monthly_comparison[currentMonth] && data.monthly_comparison[currentMonth][k] && data.monthly_comparison[currentMonth][k].map( (listEle) => (
                            <>
                                <li className="list_ele"> <img src={NewIcon}/> {listEle}</li>
                                <div className="list_line"></div>
                            </>
                        ) )
                    ) : 
                    (
                        Object.keys(data.monthly_comparison).map( (eachMonth) => (
                            Object.keys(data.monthly_comparison[eachMonth]).map((val) => (
                                k && val === k ?
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