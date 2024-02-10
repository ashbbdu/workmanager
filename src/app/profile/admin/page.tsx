import React from 'react'

async function fakeDelay () {
    await new Promise((resolve , reject) => {
        setTimeout(resolve , 3000)
    } )
}   


const AdminProfile = async () => {
    await fakeDelay()
  return (
    <div>AdminProfile</div>
  )
}

export default AdminProfile