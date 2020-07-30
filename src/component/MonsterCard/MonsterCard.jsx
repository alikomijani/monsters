import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
export default function MonsterCard({ monster, DeleteMe }) {
    return (
        <Card className='monster-card '>
            <CardImg top width="100%" src={'https://api.adorable.io/avatars/256/Ali@adorable.png' + monster.id} alt="Card image cap" />
            <CardBody>
                <CardTitle className='mt-2'>
                    <Link to={`/monsters/${monster.id}`}>
                        <h5>{monster.name.substring(0, 15)}</h5>
                    </Link>
                </CardTitle>
                <CardSubtitle>{monster.email}</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button block onClick={DeleteMe} color='warning'>Delete</Button>
            </CardBody>
            
        </Card>
    )
}
