import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

function Search ({ search, handleChange  }) {
        return (
            <Form>
                <FormGroup>
                    <Label htmlFor='search'>Search</Label>
                    <Input type='search' id='search' name={'search'} value={search} onChange={handleChange}  />
                </FormGroup>
            </Form>
        )
}

export default Search
