import React from "react";
import ComparisonCard from "../ComparisonCard";
import './MonthlyComparison.css';
import List from "../List/List";


export default function MonthlyComparison( { firstProductValue, secondProductValue, monthValueFromSearch , isComingFromSearch } ) {
    const today = new Date();

    let getMonth = today.toLocaleString('default', {
        month: 'long',
    });

    let combinedProductValues = firstProductValue+secondProductValue;

    
    return(
        
        <ComparisonCard>
            <h3 className="month_name">{isComingFromSearch ? monthValueFromSearch : getMonth} comparison</h3>
            <List
                currentMonth = {getMonth}
                combinedProductValues = {combinedProductValues}
                isMonthlyComparison = {true}
                monthValueFromSearch = {monthValueFromSearch}
                isComingFromSearch = {isComingFromSearch}
            />
        </ComparisonCard>
    );
}