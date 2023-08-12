import { React,useState } from "react";
import Comparison from "../Comparison/Comparison";
import SearchBar from "../SearchBar/SearchBar";
import MonthlyComparison from "../Content/MontlyComparison/MonthlyComparison";
import OverallComparison from "../Content/OverallComparison/OverallComparison";


export default function ComparisonContainer() {
    
    const[firstProductValue,setFirstProductValue] = useState("");
    const[secondProductValue,setSecondProductValue] = useState("");

    const receiveFirstProduct = (val) => {
        setFirstProductValue(val);
    }

    const receiveSecondProduct = (val) => {
        setSecondProductValue(val);
    }

    
    return(

        <div>
            <Comparison
                receiveFirstProduct = {receiveFirstProduct}
                receiveSecondProduct = {receiveSecondProduct}
            />
            <SearchBar/>
            <MonthlyComparison
                firstProductValue = {firstProductValue}
                secondProductValue = {secondProductValue}
            />
            <OverallComparison
                firstProductValue = {firstProductValue}
                secondProductValue = {secondProductValue}
            />
        </div>
    )
}

