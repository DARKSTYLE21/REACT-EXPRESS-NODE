import React, { useEffect, useState } from 'react'

function App() {

  const [data, setData] = useState([{}]);

  useEffect(() => {

    fetch("/users").then(
      response => response.json()
    ).then(data => {
      setData(data);
      console.log(data);
    })

  }, [])

  return (
    <div>

      <div>
        {typeof data === 'undefined' ? (
          <p>No users found</p>
        ) : (
          data.users.map((user, i) => (<p key={i}>{user}</p>))
        )}
      </div>



    </div>
  )
}

export default App