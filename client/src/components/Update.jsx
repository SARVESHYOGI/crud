import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function Update() {
  const { id } = useParams()

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [age, setAge] = React.useState('')
  const navigate = useNavigate()


  React.useEffect(() => {
    axios.get(`https://crud-6d2c.onrender.com/getuser/${id}`).then((res) => {
      console.log(res)
      setName(res.data.name)
      setEmail(res.data.email)
      setAge(res.data.age)
    }).catch((err) => {
      console.log(err)
    }
    )
  }, [])

  const update = async (e) => {
    e.preventDefault()
    await axios.put(`https://crud-6d2c.onrender.com/Update/${id}`, { name, email, age }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
    navigate('/')
  }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
        <div className="text-2xl font-bold mb-4 text-white">Update User</div>
        <div>
          <form>
            <div className="mb-4">
              <label className="block text-gray-300">Name</label>
              <input type="text" className="mt-1 p-2 w-full border rounded bg-gray-700 text-white" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Email</label>
              <input type="email" className="mt-1 p-2 w-full border rounded bg-gray-700 text-white" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Age</label>
              <input type="number" className="mt-1 p-2 w-full border rounded bg-gray-700 text-white" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div>
              <button className="bg-blue-500 text-white p-2 rounded w-full" onClick={update}>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Update