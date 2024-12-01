import { useState } from 'react'

export default function Profile() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      {/* <Button size="lg" onClick={() => setCount((count) => count + 1)}>
        Click {count}
      </Button> */}
    </div>
  )
}
