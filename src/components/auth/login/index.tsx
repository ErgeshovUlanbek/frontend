import React from 'react'
import style from './style.module.css'
import Greeting from './Greeting'
export default function LoginPage() {
  const name = 'Alex'
  return (
    <div>
      <h1>Login page</h1>
      <Greeting name={name}/>
    </div>
  )
}
