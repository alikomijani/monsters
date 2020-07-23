import React, { useState } from 'react'

function MonsterSingle() {
    const [monster, SetMonster] = useState({
        address: { street: "Kulas Light", suite: "Apt. 556", city: "Gwenborough", zipcode: "92998-3874" },
        company: { name: "Romaguera-Crona", catchPhrase: "Multi-layered client-server neural-net", bs: "harness real-time e-markets" },
        email: "Sincere@april.biz",
        id: 1,
        name: "Leanne Graham",
        phone: "1-770-736-8031 x56442",
        username: "Bret",
        website: "hildegard.org",
    })
    return (
        <div className='MonsterSingle'>
            <div className='card'>
                <div className='card-header'>
                    {monster.name}
                </div>
                <div className='card-body'>
                    email: {monster.email}<br/>
                    name: {monster.name}<br/>
                    phone: {monster.phone}<br/>
                    username: {monster.username}<br/>
                    website: {monster.website}<br/>
                </div>

            </div>
        </div>
    )
}

export default MonsterSingle
