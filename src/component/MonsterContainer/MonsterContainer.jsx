import React, { useState, useEffect } from 'react';
import MonsterCard from '../MonsterCard/MonsterCard';
import Search from '../Search/Search';
import { Row, Col, Modal, ModalHeader, ModalFooter, ModalBody, Button, Spinner } from 'reactstrap'
export default function MonsterContainer() {

    const [monsters, setMonsters] = useState(localStorage.getItem('monsters')?JSON.parse(localStorage.getItem('monsters')):[]);
    const [search, setSearch] = useState('');
    const [deleteModal, setDeleteModal] = useState(false);
    const [selectedMonster, setSelectedMonster] = useState(null);
    const [pending, setPending] = useState(false);

    const handleDelete = (id) => {
        setMonsters(monsters.filter(monster => monster.id !== id));
        localStorage.setItem('monsters',JSON.stringify(monsters.filter(monster => monster.id !== id)))
    }
    useEffect(() => {
        
    }, []);

    const handleChange = (event) => {
        const { value } = event.target;
        setSearch(value);
    }
    // const handleAddMonster = (obj) => {
    //     setMonsters([obj, ...monsters])
    // }
    const toggleDeleteModal = (id = null) => {
        setDeleteModal(!deleteModal);
        setSelectedMonster(id);
    }
    console.log(monsters);
    let filteredMonsters = monsters.filter(item => item.name.toLowerCase().startsWith(search.toLowerCase()))
    return (
        <>
            <Modal isOpen={deleteModal} toggle={toggleDeleteModal}>
                <ModalHeader toggle={toggleDeleteModal} className='bg-warning'>DELETE</ModalHeader>
                <ModalBody>Are your sure to delete this item?</ModalBody>
                <ModalFooter>
                    <Button onClick={() => {
                        handleDelete(selectedMonster);
                        toggleDeleteModal();
                    }
                    } color='danger'>Delete</Button>
                    <Button onClick={toggleDeleteModal} color='primary'>Cancel</Button>
                </ModalFooter>
            </Modal>
            <Search handleChange={handleChange} search={search} />
            {
                pending ? <div className='text-center'>
                    <Spinner color="primary" />
                    <Spinner color="secondary" />
                    <Spinner color="success" />
                    <Spinner color="danger" />
                    <Spinner color="warning" />
                    <Spinner color="info" />
                    <Spinner color="dark" />
                </div> : <Row className='monster-container' xs="1" sm="2" md="3" xl="4" >
                        {filteredMonsters.map((item) => (
                            <Col key={item.id} className={'mt-4'}>
                                <MonsterCard monster={item} DeleteMe={() => toggleDeleteModal(item.id)} />
                            </Col>
                        ))}
                    </Row>
            }

        </>
    )
}
