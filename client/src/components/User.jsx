import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

function User() {
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    axios.get('https://crud-6d2c.onrender.com/').then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const handeldelete = async (id) => {
    await axios.delete(`https://crud-6d2c.onrender.com/delete/${id}`).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
    setData(data.filter(user => user._id !== id))
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 shadow-md rounded-lg p-6">
        <div>
          <Link to='/create' > <button className="bg-blue-500 text-white px-4 py-2 rounded">+Add User</button></Link>
        </div>
        <div>
          <table className="min-w-full bg-gray-800 text-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-700">Name</th>
                <th className="py-2 px-4 border-b border-gray-700">Email</th>
                <th className="py-2 px-4 border-b border-gray-700">Age</th>
                <th className="py-2 px-4 border-b border-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index} className="hover:bg-gray-700">
                  <td className="py-2 px-4 border-b border-gray-700">{user.name}</td>
                  <td className="py-2 px-4 border-b border-gray-700">{user.email}</td>
                  <td className="py-2 px-4 border-b border-gray-700">{user.age}</td>
                  <td className="py-2 px-4 border-b border-gray-700">
                    <Link to={`/update/${user._id}`}><button className="bg-yellow-500 text-white px-4 py-2 rounded">Edit</button></Link>
                    <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={(e) => handeldelete(user._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default User