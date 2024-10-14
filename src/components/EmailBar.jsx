// import { useState } from "react";
// import axios from "axios";

// const EmailBar = () => {
//   const [showText, setShowText] = useState(true);
//   const [email, setEmail] = useState("");

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:3001/app/email", { email });
//       setShowText(false);

//       // Reset the text and email after 5 seconds
//       setTimeout(() => {
//         setShowText(true);
//         setEmail("");
//       }, 5000);
//     } catch (error) {
//       console.log("Error sending email:", error);
//     }
//   };

//   return (
//     <div id="myForm">
//       <p>
//         {showText
//           ? "SIGN UP FOR OUR DAILY INSIDER"
//           : "THANK YOU FOR SIGNING UP"}
//       </p>
//       <iframe title="Sign Up" name="EmptyFrame" className="hidden" />
//       <form
//         id="EmailForm"
//         action="/subscribe"
//         target="EmptyFrame"
//         method="POST"
//         onSubmit={handleFormSubmit}
//         className={showText ? null : "hidden"}
//       >
//         <input
//           name="email"
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button name="submit" type="submit">
//           Subscribe
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EmailBar;
