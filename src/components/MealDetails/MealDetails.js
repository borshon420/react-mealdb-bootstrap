import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const MealDetails = () => {
    const {mealId} = useParams()
    const [meal, setMeal] = useState({})
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMeal(data.meals[0]))
    }, [])

    const history = useHistory()

    const handleMealClick = () => {
        history.push("/meals")
    }
    
    return (
        <div>
            
            <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={meal.strMealThumb} />
                <Card.Body>
                    <Card.Title>{meal.strMeal}</Card.Title>
                    <Card.Text>
                        {meal.strTags}
                    </Card.Text>
                    <Link to="/meals">Visit Meals</Link>
                    <br />
                    <Button onClick={handleMealClick} variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MealDetails;