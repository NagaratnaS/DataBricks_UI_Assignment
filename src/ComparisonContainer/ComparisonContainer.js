import { React,useState } from "react";
import Comparison from "../Comparison/Comparison";
import SearchBar from "../SearchBar/SearchBar";
import MonthlyComparison from "../Content/MontlyComparison/MonthlyComparison";
import OverallComparison from "../Content/OverallComparison/OverallComparison";


export default function ComparisonContainer() {
    
    const[firstProductValue,setFirstProductValue] = useState("");
    const[secondProductValue,setSecondProductValue] = useState("");
    const[monthValueFromSearch,setMonthValueFromSearch] = useState("");
    const[isComingFromSearch,setIsComingFromSearch] = useState(false);


    const receiveFirstProduct = (val) => {
        setFirstProductValue(val);
    }

    const receiveSecondProduct = (val) => {
        setSecondProductValue(val);
    }

    const receiveMonthValue = (val,isSearch) => {
        setMonthValueFromSearch(val);
        setIsComingFromSearch(isSearch);
    }


    return(

        <div>
            <Comparison
                receiveFirstProduct = {receiveFirstProduct}
                receiveSecondProduct = {receiveSecondProduct}
            />
            <SearchBar receiveMonthValue = {receiveMonthValue} />
            <MonthlyComparison
                firstProductValue = {firstProductValue}
                secondProductValue = {secondProductValue}
                monthValueFromSearch = {monthValueFromSearch}
                isComingFromSearch = {isComingFromSearch}
            />
            <OverallComparison
                firstProductValue = {firstProductValue}
                secondProductValue = {secondProductValue}
            />
        </div>
    )
}

