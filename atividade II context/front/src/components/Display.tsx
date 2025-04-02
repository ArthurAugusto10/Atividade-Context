import { useContext } from "react";
import { LetterCtx } from "../contexts/LetterCtx";


export default function Display (){
   const {input} = useContext(LetterCtx);
   return <div>{input}</div>
}