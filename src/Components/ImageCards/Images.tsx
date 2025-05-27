import type { FC } from "react";

type Images={
    source:string;
    height:string
}

const Images:FC<Images> = ({source,height}) => {
  return (
    <img src={source} alt={source} className={`${height} p-2 m-2 hover:cursor-pointer hover:scale-75 duration-500`}/>
  )
}

export default Images