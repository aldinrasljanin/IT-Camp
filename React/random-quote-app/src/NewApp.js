// import React from "react";
// import "./App.css";

// const App (props)=>{
//     getRandomQuote() {
//         fetch("https://js-course-server.onrender.com/quotes/get-random-quote")
//           .then((res) => res.json())
//           .then((data) => {
//             this.setState({
//               text: data.quoteText,
//               author: data.quoteAuthor,
//               likes: data.likes,
//             });
//           });
//       }
//     return (
//         <div className="app">
//           <div className="quote-wrapper">
//             <div className="quote-card">
//               <h3>Author:{this.state.author}</h3>
//               <p className="quote-text">{this.state.text}</p>
//               <p>Likes:{this.state.likes}</p>
//             </div>
//             <button
//               onClick={() => {
//                 this.getRandomQuote();
//               }}
//             >
//               Get random quote
//             </button>
//           </div>
//         </div>
//       );
// }
