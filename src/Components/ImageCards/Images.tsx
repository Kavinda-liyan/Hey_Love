import type { FC } from "react";

type Images={
    source:string;
}

const Images:FC<Images> = ({source}) => {
  return (
    <img src={source} alt={source} className='h-64 p-2 m-2 hover:cursor-pointer hover:animate-spin duration-500'/>
  )
}

export default Images