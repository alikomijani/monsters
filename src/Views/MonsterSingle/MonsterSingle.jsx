import React, { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom';
import axios from 'axios';
function MonsterSingle(props) {
    console.log(props)
    const { id } = useParams();
    const [monster, SetMonster] = useState({})
    const getData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).
        then(res => res.data).then(data => {
            SetMonster(data);
            console.log(data)
        }).catch(err=>{
            SetMonster(false)
        }
    )
    }
    useEffect(() => { getData(); }, []);
    return (
        <div className='MonsterSingle'>
            {monster ? <div className='card'>
                <div className='card-header'>
                    {monster.name}
                </div>
                <div className='card-body'>
                    email: {monster.email}<br />
                    name: {monster.name}<br />
                    phone: {monster.phone}<br />
                    username: {monster.username}<br />
                    website: {monster.website}<br />
                </div>
            </div> :
                <Redirect to='/monsters' />
            }
        </div>
    )
}

export default MonsterSingle
