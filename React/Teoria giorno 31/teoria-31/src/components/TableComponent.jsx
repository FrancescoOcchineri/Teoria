import React from 'react'
import { Table } from 'react-bootstrap'
import RowTableComponent from './RowTableComponent'
import { useSelector } from 'react-redux'

export default function TableComponent() {

    const userList = useSelector(state => state)

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
