import { LetterProvider } from "./contexts/LetterCtx";
import Input from "./components/Input";
import Ball from "./components/Ball";
import "./App.css";



export default function APP (){
    return <LetterProvider>
        <div style={{ border: '2px solid black',backgroundColor: '#D3D3D3'}} > 
        <Input/>
        <Ball/>
        </div>
        
    </LetterProvider>
}
