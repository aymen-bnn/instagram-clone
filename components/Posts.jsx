import React from 'react'
import Post from "./Post"
const postsData = [
    {
        id : '1',
        username : 'robot.me',
        userImg:'https://links.papareact.com/3ke',
        img:'https://links.papareact.com/3ke',
        caption: 'Welcome to instagram 2.0 ',
    },
    {
        id : '2',
        username : 'robot.me',
        userImg:'https://links.papareact.com/3ke',
        img:'https://links.papareact.com/3ke',
        caption: 'Welcome to instagram 2.0 ',
    },
]

function Posts() {

  return (
    <div>
        {
          postsData.map((postData)=> (
            <Post
            key={postData.id}
            id={postData.id}
            img={postData.img}
            username={postData.username}
            userImg={postData.userImg}
            caption={postData.caption} />
          ))  
        }
    </div>
  )
}

export default Posts