import React from 'react'
import { Form } from 'react-bootstrap'

export default function CommentsComponent({comments}) {
  return (
    <Form.Select aria-label="Default select example" className='my-3'>
    <option>Open this select menu</option>
    {comments.map(c => <option value="1" key={c.id}>{c.name}</option>)}
  </Form.Select>
  )
}
