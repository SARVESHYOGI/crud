import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Create() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [age, setAge] = React.useState('')
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3000/Create', { name, email, age }).then((res) => {
        console.log(res)
      })
      navigate('/')

    } catch (error) {
      console.log(error)

    }

  }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
        <div className="text-2xl font-bold mb-4 text-white">Add User</div>
        <div>
          <form>
            <div className="mb-4">
              <label className="block text-gray-300">Name</label>
              <input type="text" className="mt-1 p-2 w-full border rounded bg-gray-700 text-white" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Email</label>
              <input type="email" className="mt-1 p-2 w-full border rounded bg-gray-700 text-white" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Age</label>
              <input type="number" className="mt-1 p-2 w-full border rounded bg-gray-700 text-white" onChange={(e) => setAge(e.target.value)} />
            </div>
            <div>
              <button onClick={submit} className="bg-blue-500 text-white p-2 rounded w-full">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create