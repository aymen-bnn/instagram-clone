import React, { useEffect,useState } from 'react'
import { faker } from '@faker-js/faker';

function Suggentions() {

const [suggestions,setSugestions] = useState([])
useEffect(
    () => {
      const suggestions = [...Array(5)].map((_,i) => ({
        _id: faker.datatype.uuid(),
        avatar: faker.image.avatar(),
        birthday: faker.date.birthdate(),
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        sex: faker.name.sexType(),
      }))
      setSugestions(suggestions)
    },[])
  return (
    <div>
        <div className='flex justify-between mt-4 ml-10'>
            <h3 className='text-sx font-bold text-gray-400'>Suggestions for you</h3>
            <button className='text-gray-400'>See All</button>
        </div>
        {
            suggestions.map((profile)=>(
                <div key={profile._id}
                className='flex items-center mt-3'>
                    <img className='rounded-full h-10 w-10 border p-1 ' src={profile.avatar} alt="" />
                    <h2 className='font-semibold flex-1'>{`${profile.firstName} ${profile.lastName}`}</h2>
                    <button className='font-bold text-blue-500' >Follow</button>
                </div>
            ))
        }
    </div>
  )
}

export default Suggentions