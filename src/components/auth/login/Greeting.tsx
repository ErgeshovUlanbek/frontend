import React from 'react'

interface IGreeting {
    name: string
}

export default function Greeting(props: IGreeting) {
  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  )
}
