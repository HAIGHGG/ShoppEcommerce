import React from 'react'
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='flex flex-col items-center'>
      <p>2022 Shopp All rights reserved</p>
      <p className='flex flex-row gap-2'>
      <AiOutlineTwitter />
        <AiFillInstagram />
      </p>
    </div>
  )
}

export default Footer