// import React from "react";
// import { RiSendPlaneFill } from "react-icons/ri";
// import Image from "next/image";

// //INTERNAL IMPORT
// import Style from "./Subscribe.module.css";
// import images from "../../img";

// const Subscribe = () => {
//   return (
//     <div className={Style.subscribe}>
//       <div className={Style.subscribe_box}>
//         <div className={Style.subscribe_box_left}>
//           <h2>Never miss a drop</h2>
//           <p>
//             Subcribe to our super-exclusive drop list and be the first to know
//             abour upcoming drops
//           </p>
//           <div className={Style.subscribe_box_left_box}>
//             <span>01</span>
//             <small>Get more discount</small>
//           </div>

//           <div className={Style.subscribe_box_left_box}>
//             <span>02</span>
//             <small>Get premium magazines</small>
//           </div>

//           <div className={Style.subscribe_box_left_input}>
//             <input type="email" placeholder="Enter your email" />
//             <RiSendPlaneFill className={Style.subscribe_box_left_input_icon} />
//           </div>
//         </div>

//         <div className={Style.subscribe_box_right}>
//           <Image
//             src={images.update}
//             alt="get update"
//             height={600}
//             width={800}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Subscribe;

import {useState} from "react"
import axios from "axios"

const EmailBar =() =>{
    const [showText, setShowText] = useState(true);
    const [email, setEmail] = useState("")

    const handleFormSubmit = async (e) => {
        e.preventDefault()
    }

}

try {
    await axios.post ("http://localhost:5173/api/email", {email})
    setShowText(false);

    setTimeout(() =>{
        setShowText(true)
        setEmail("")
        }, 5000);

    } catch(error){
        console.log("error sending email:", error)
    }
    


return (
    <div id="myForm">
        <p>
            {showText
            ? "SIGN UP FOR OUR DAILY INSIDER"
            : "THANKS YOU FOR SIGNING UP"
            }
        </p>
        <iframe title = "Sign Up" name="EmptyFrame" className="hidden"/>
        <form
        id = "EmailForm"
        action = "/subscribe"
        target = "EmptyFrame"
        method="Post"
        onSubmit = {handleFormSubmit}
        className= {showText ? null : "hidden"}
        >
            <input
            name="email"
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <button name="submit" type="submit"> 
subscribe
            </button>
        </form>
    </div>
)
}

export defualt EmailBar