import React, { useEffect, useState } from 'react'
import UsersComponent from './UsersComponent'
import PostComponent from './PostComponent';
import CommentsComponent from './CommentsComponent';

export default function JsonPlaceHolderComponent() {

    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([])
    const [userSelected, setUserSelected] = useState(0)
    const [postSelected, setPostSelected] = useState(0)

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
        .catch(err => console.error(err))

    }, [])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/'+userSelected+'/posts')
        .then(response => response.json())
        .then(json => setPosts(json))
        .catch(err => console.error(err))
    }, [userSelected])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/'+postSelected+'/comments')
        .then(response => response.json())
        .then(json => setComments(json))
        .catch(err => console.error(err))
    }, [postSelected])

    const changeUser = (e) => {
        console.log("Change User " + e.target.value)
        setUserSelected(e.target.value)
    }

    const changePost = (e) => {
        setPostSelected(e.target.value)
    }

  return (
    <>
    <h1>JsonPlaceHolderComponent</h1>
    <UsersComponent users= {users} changeUser={changeUser}/>
    <hr />
    <PostComponent posts= {posts} changePost = {changePost} />
    <hr />
    <CommentsComponent comments= {comments} />
    </>
  )
}
