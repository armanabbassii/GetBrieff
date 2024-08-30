import React from "react";
import { useNavigate} from  "react-router-dom"

function HomePage(){
const navigate = useNavigate()

const startPlaywrightTest = ()=>{
    navigate ('/questionBox')
}


  
return (

    <div className= "w-full h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-8">welcome to the Breif World!</h1>
        <button
        onClick={startQuiz}
        className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
>
Start Quiz


        </button>
    </div>
)
    
}
export default HomePage