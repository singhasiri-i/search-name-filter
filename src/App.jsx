import './App.css'
import { useEffect, useState } from 'react'

//mock data
import userData from './userData'
// insert hook

function App() {
  const [showData, setShowData] = useState(userData)
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase())
    console.log(searchTerm);
  }

  useEffect(() => {
    const filteredData = userData.filter((user) => 
    // ต้องเอา data ต้นฉบับมา filter ทุกครั้ง ไม่ใช่ data ที่เกิดจากการ filter แล้วมาทำ
        user.first_name.toLowerCase().includes(searchTerm) 
        || user.last_name.toLowerCase().includes(searchTerm) 
      )
    setShowData(filteredData)
  }, [searchTerm])

  return (
    <div className='container'>
      <div className='banner'>
        <span className="material-symbols-outlined">arrow_back_ios</span>
        <div className='header'>
          <span>Your Name</span>
          <span>Bangkok, Thailand</span>
          <input 
            onChange={ handleChange } value={ searchTerm } 
            className='searchInput' type='text' placeholder='Search'/>
        </div>
      </div>
      <div className='user-list'>
        <ul>
          {showData.map((user) => {
            return (
            <li key={user.id}>
              <div className='user-box'>
                <div>
                  <img src={ user.avatar } alt={`${ user.first_name }`} />
                </div>
                <div>
                  <div>{`${ user.first_name } ${ user.last_name }`}</div>
                  <div>{ user.email }</div>
                </div>
                <div>
                  <span className="material-symbols-outlined">chat</span>
                </div>
              </div>
            </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App
