import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    
      <>
        <div>
        <Image
          className='rounded-lg'
            src="/Achi Dokan Logo.png"
            width={90}
            height={90}
            alt="Picture of the author"
          />
      </div>
      </>
    
  )
}

export default Logo