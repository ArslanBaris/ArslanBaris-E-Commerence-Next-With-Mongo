"use client"
import {RxAvatar} from 'react-icons/rx'
import Avatar from "../general/Avatar"
import { Rating } from '@mui/material'

const Comment = ({review}: {review : any}) => {

  return (
    <div className='border w-full md:w-1/3 p-2 rounded-lg my-3'>
       {/* <Avatar image={review?.user?.image}/> */}
       <div className='flex items-center gap-1'>
         <RxAvatar size="45"/>
         <div>
            <div>{review?.user?.name}</div>
            <Rating name="read-only" value={review?.user?.rating} readOnly />
         </div>
       </div>
       <div className='text-slate-500'>{review.comment}</div>
    </div>
  )
}

export default Comment