import React from 'react';
import AddNewMonster from '../../component/AddNewMonster/AddNewMonster';
function AddMonster({handleAdd}) {
    return (
        <div className='AddMonster'>
            <AddNewMonster handleAdd={handleAdd} />
        </div>
    )
}

export default AddMonster;
