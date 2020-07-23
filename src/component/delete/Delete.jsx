import React from 'react';

export default function Delete({ handleDelete , id }) {
    return (
        <button onClick={()=>handleDelete(id)} >pack me!</button>
    )
}
