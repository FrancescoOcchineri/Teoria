import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../action';

export default function RowTableComponent({ user, index }) {

    const dispatch = useDispatch();

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <Button variant="outline-danger" className='mx-1' onClick={() => dispatch(deleteUser(user))}>
                    {/* questa è l'action del reducer */}
                    <i className="bi bi-trash"></i>
                </Button>
                <Button variant="outline-warning" className='mx-1'>
                    <i className="bi bi-file-richtext"></i>
                </Button>
            </td>
        </tr>
    )
}
