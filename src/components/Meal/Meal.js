import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    // console.log(props.meal)
    const {strMeal, strMealThumb, strTags, idMeal} = props.meal
    return (
        <div>

            
            <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strTags}
                    </Card.Text>
                    <Link to={`/meal/${idMeal}`}>Visit Meal</Link>
                    <br />
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Meal;