// const Contact = () => {
//   return (
//     <div
//       name="contact"
//       className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black px-4 md:px-16 text-white"
//     >
//       <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full">
//         {/* Header */}
//         <div className="pb-10 md:text-left">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Contact
//           </p>
//           <p className="py-6 text-gray-300">
//             Submit the form below to get in touch with me
//           </p>
//         </div>

//         {/* Form Wrapper */}
//         <div className="flex justify-center items-center">
//           <form
//             action="https://getform.io/f/710511b1-440e-4d39-b023-d3c3db0afd76"
//             method="POST"
//             autoComplete="off"
//             className="
//               w-full md:w-1/2
//               bg-white/5 backdrop-blur-md
//               border border-white/10
//               rounded-xl p-8
//               shadow-lg shadow-black/40
//               space-y-5
//             "
//           >
//             {/* Name */}
//             <input
//               type="text"
//               name="name"
//               placeholder="Your name"
//               autoComplete="off"
//               className="
//                 w-full p-3 bg-transparent
//                 border border-gray-500 rounded-md
//                 text-white placeholder-gray-400
//                 hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400/20
//                 focus:outline-none focus:border-cyan-400
//                 focus:ring-2 focus:ring-cyan-400/40
//                 transition-all duration-300
//               "
//             />

//             {/* Email */}
//             <input
//               type="email"
//               name="user_email"
//               placeholder="Your email"
//               autoComplete="new-email"
//               className="
//                 w-full p-3 bg-transparent
//                 border border-gray-500 rounded-md
//                 text-white placeholder-gray-400
//                 hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400/20
//                 focus:outline-none focus:border-cyan-400
//                 focus:ring-2 focus:ring-cyan-400/40
//                 transition-all duration-300
//               "
//             />

//             {/* Message */}
//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Your message"
//               className="
//                 w-full p-3 bg-transparent resize-none
//                 border border-gray-500 rounded-md
//                 text-white placeholder-gray-400
//                 hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-400/20
//                 focus:outline-none focus:border-cyan-400
//                 focus:ring-2 focus:ring-cyan-400/40
//                 transition-all duration-300
//               "
//             ></textarea>

//             {/* Button */}
//             <button
//               type="submit"
//               className="
//                 w-full flex justify-center items-center
//                 bg-gradient-to-r from-cyan-500 to-blue-500
//                 text-white font-semibold
//                 py-3 rounded-md
//                 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40
//                 active:scale-95
//                 transition-all duration-300
//               "
//             >
//               Let’s Talk 🚀
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";

const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 px-4 md:px-16 pt-5 pb-10 text-white"
    >
      <div className="max-w-[1140px] mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
        {/* Section Heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Get In{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <div className="mt-3 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

          <p className="mt-3 text-sm sm:text-base text-gray-400">
            Have a question or opportunity? Let's connect.
          </p>
        </div>

        {/* Contact Form */}

        <form
          action="https://getform.io/f/710511b1-440e-4d39-b023-d3c3db0afd76"
          method="POST"
          autoComplete="off"
          className="group relative w-full max-w-xl mx-auto rounded-xl border border-cyan-500/25 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.04)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.14)] animate-contact-enter space-y-5"
        >
          {/* Subtle top highlight */}
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              autoComplete="name"
              required
              className="w-full rounded-md border border-gray-500/80 bg-black/20 px-4 py-2 text-sm text-white placeholder:text-gray-400 outline-none transition-all duration-300 hover:border-cyan-400/70 hover:shadow-[0_0_12px_rgba(34,211,238,0.10)] focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="Enter your email address"
              autoComplete="email"
              required
              className="w-full rounded-md border border-gray-500/80 bg-black/20 px-4 py-2 text-sm text-white placeholder:text-gray-400 outline-none transition-all duration-300 hover:border-cyan-400/70 hover:shadow-[0_0_12px_rgba(34,211,238,0.10)] focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-300"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              required
              className="w-full resize-none rounded-md border border-gray-500/80 bg-black/20 px-4 py-2 text-sm text-white placeholder:text-gray-400 outline-none transition-all duration-300 hover:border-cyan-400/70 hover:shadow-[0_0_12px_rgba(34,211,238,0.10)] focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_5px_22px_rgba(34,211,238,0.25)] active:translate-y-0 active:scale-[0.98]"
          >
            Send Message
            <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
