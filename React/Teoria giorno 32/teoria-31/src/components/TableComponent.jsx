import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import RowTableComponent from './RowTableComponent'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../action';

export default function TableComponent() {

    const userList = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        if (userList.length === 0) {
            dispatch(getAllUsers())
        }
    }, [])

    return (
        <Table bordered hover variant='dark'>
            <thead >
                <tr>
                    <th>#</th>
                    <th>Full Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead >
            <tbody>
                {userList.map((row, index) => <RowTableComponent key={index} user={row} index={index} />)}
            </tbody>
        </Table>
    )
}
