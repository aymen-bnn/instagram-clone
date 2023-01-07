import React, { useEffect, useState } from 'react'
import { faker } from '@faker-js/faker';
import Story from "./Story"
import { useSession } from 'next-auth/react'

function stories() {
  const {data : session} = useSession();
  const[suggestions , setSugestions] = useState([]);
  useEffect(
    () => {
      const suggestions = [...Array(20)].map((_,i) => ({
        _id: faker.datatype.uuid(),
        avatar: faker.image.avatar(),
        birthday: faker.date.birthdate(),
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        sex: faker.name.sexType(),
      }))
      setSugestions(suggestions)
      console.log(suggestions)
    },[])
  return (
    <div className='flex space-x-2 p-0 bg-white pt-2 pb-2 
    rounded-sm overflow-x-scroll scrollbar-thin 
    scrollbar-thumb-black mx-auto'>

    {
      session && <Story 
        img={session.user.image} 
        username={session.user.name} />
    }
    {
      suggestions.map(profile => (
        <Story
        key={profile._id}
        img={profile.avatar}
        username={`${profile.firstName} ${profile.lastName}`}
        />
      ))
    }
    </div>

  )
} 

export default stories