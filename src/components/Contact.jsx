// const Contact = () => {
//   return (
//     <div
//       name="contact"
//       className="w-full bg-gradient-to-b from-gray-800 to-black p-4 text-white px-4"
//     >
//       <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Contact
//           </p>
//           <p className="py-6">Submit the form below to get in touch with me</p>
//         </div>

//         <div className="flex justify-center items-center">
//           <form
//             action="https://getform.io/f/710511b1-440e-4d39-b023-d3c3db0afd76"
//             method="POST"
//             className="flex flex-col w-full md:w-1/2"
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               autoComplete="off"
//               className="p-2 bg-transparent border-2 rounded-md text-white
//             focus:outline-none"
//             />
//             <input
//               type="email"
//               name="user_email"
//               placeholder="Enter your email"
//               autoComplete="new-email"
//               className="my-4 p-2 bg-transparent border-2 rounded-md text-white
//             focus:outline-none"
//             />
//             <textarea
//               name="message"
//               rows="10"
//               placeholder="Enter your message"
//               className="p-2 bg-transparent border-2 rounded-md text-white
//             focus:outline-none"
//             ></textarea>

//             <button className="text-white resize-none bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
//               Let's talk
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black px-4 lg:px-16 text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full">
        {/* Header */}
        <div className="pb-10 md:text-left">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 text-gray-300">
            Submit the form below to get in touch with me
          </p>
        </div>

        {/* Form Wrapper */}
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/710511b1-440e-4d39-b023-d3c3db0afd76"
            method="POST"
            autoComplete="off"
            className="
              w-full md:w-1/2
              bg-white/5 backdrop-blur-md
              border border-white/10
              rounded-xl p-8
              shadow-lg shadow-black/40
              space-y-5
            "
          >
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your name"
              autoComplete="off"
              className="
                w-full p-3 bg-transparent
                border border-gray-500 rounded-md
                text-white placeholder-gray-400
                hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400/20
                focus:outline-none focus:border-cyan-400
                focus:ring-2 focus:ring-cyan-400/40
                transition-all duration-300
              "
            />

            {/* Email */}
            <input
              type="email"
              name="user_email"
              placeholder="Your email"
              autoComplete="new-email"
              className="
                w-full p-3 bg-transparent
                border border-gray-500 rounded-md
                text-white placeholder-gray-400
                hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400/20
                focus:outline-none focus:border-cyan-400
                focus:ring-2 focus:ring-cyan-400/40
                transition-all duration-300
              "
            />

            {/* Message */}
            <textarea
              name="message"
              rows="5"
              placeholder="Your message"
              className="
                w-full p-3 bg-transparent resize-none
                border border-gray-500 rounded-md
                text-white placeholder-gray-400
                hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400/20
                focus:outline-none focus:border-cyan-400
                focus:ring-2 focus:ring-cyan-400/40
                transition-all duration-300
              "
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="
                w-full flex justify-center items-center
                bg-gradient-to-r from-cyan-500 to-blue-500
                text-white font-semibold
                py-3 rounded-md
                hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40
                active:scale-95
                transition-all duration-300
              "
            >
              Let’s Talk 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
