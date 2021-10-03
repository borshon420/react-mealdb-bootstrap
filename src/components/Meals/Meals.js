import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([])
    const [searchText, setSearchText] = useState([])
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[searchText])

    const handleSearch = e => {
        const searchTextField = e.target.value;
        setSearchText(searchTextField)
    }
    return (
        <div>
            <InputGroup className="mb-3 search-field">
            <FormControl
                placeholder="Search food"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={handleSearch} 
            />
            </InputGroup>
            <div className="meals-component">
            {
                meals.map(meal => <Meal meal={meal}></Meal>)
            }
            </div>
        </div>
    );
};

export default Meals;