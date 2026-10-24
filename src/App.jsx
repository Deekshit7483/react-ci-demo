import { useEffect, useState } from 'react'
import axios from 'axios'
import { formatName } from './utils/formatName'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
      .catch(() => setError('Could not load users.'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'system-ui' }}>
      <h2>Hello, Deekshith H R!</h2>
      <h1>User list</h1>
      <p>deploying second time to check the changes deployed automatically with GitHub Actions.</p>
      {loading && <p>Loading…</p>}
      {error && <p style={{ color: 'crimson' }}>{error}</p>}
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <strong>{formatName(u)}</strong>: {u.email}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
