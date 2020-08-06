import React, { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom';
import { Card, CardBody, CardFooter, CardHeader, CardImg } from 'reactstrap';
import axios from 'axios';
function MonsterSingle(props) {
    console.log(props)
    const { id } = useParams();
    const [monster, setMonster] = useState({})
    const getData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).
            then(res => res.data).then(data => {
                setMonster(data);
                console.log(data)
            }).catch(err => {
                setMonster(false)
            }
            )
    }
    useEffect(() => { getData(); }, []);
    return (
        <div className='MonsterSingle mt-1'>
            <Card>
                <CardHeader>{monster.name}</CardHeader>
                <CardImg className={'rounded-0'} top width='100%' src={'https://picsum.photos/700/200'} alt="Card image cap"/>
                <CardBody>
                    email: {monster.email}<br />
                    name: {monster.name}<br />
                    phone: {monster.phone}<br />
                    username: {monster.username}<br />
                    website: {monster.website}<br />
                </CardBody>
                <CardFooter></CardFooter>
            </Card>
        </div>
    )
}

export default MonsterSingle
