// // components/Footer.js

// export default function Footer() {
//     return (
//       <footer className="bg-gray-800 text-white py-8">
//         <div className="container mx-auto px-6 md:px-12">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Column 1: General Information */}
//             <div>
//               <h2 className="text-2xl font-bold mb-4">Fortis Global Traders</h2>
//               <p className="text-gray-400">
//               Empowering individuals and institutions to confidently participate in the cryptocurrency market through innovative trading strategies and exceptional client service
//               </p>
//             </div>
  
//             {/* Column 2: Quick Links */}
//             <div>
//               <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
//               <ul>
//                 <li><a href="/" className="text-gray-400 hover:text-blue-500">Home</a></li>
//                 <li><a href="/about" className="text-gray-400 hover:text-blue-500">About Us</a></li>
//                 <li><a href="/team" className="text-gray-400 hover:text-blue-500">Our Team</a></li>
//                 <li><a href="/contact" className="text-gray-400 hover:text-blue-500">Contact Us</a></li>
//               </ul>
//             </div>
  
//             {/* Column 3: Social Media */}
//             <div>
//               <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
//               <ul>
//                 <li>
//                   <a href="https://instagram.com" className="text-gray-400 hover:text-blue-500" target="_blank" rel="noopener noreferrer">Instagram</a>
//                 </li>
//                 <li>
//                   <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-500" target="_blank" rel="noopener noreferrer">Whatsapp</a>
//                 </li>
//               </ul>
//             </div>
//           </div>
  
//           {/* Bottom Copyright */}
//           <div className="mt-8 text-center text-gray-400">
//             <p>&copy; 2024 Your Company. All Rights Reserved.</p>
//           </div>
//         </div>
//       </footer>
//     );
//   }


export default function Footer() {
  var year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: General Information */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Fortis Global Traders</h2>
            <p className="text-gray-400">
              Empowering individuals and institutions to confidently participate in the cryptocurrency market through innovative trading strategies and exceptional client service.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li><a href="/" className="text-gray-400 hover:text-blue-500">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-blue-500">About Us</a></li>
              <li><a href="/team" className="text-gray-400 hover:text-blue-500">Our Team</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-blue-500">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <ul>
              <li>
                <a href="https://www.instagram.com/fortisglobal1/" className="text-gray-400 hover:text-blue-500" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a href="https://wa.me/12702432385" className="text-gray-400 hover:text-blue-500" target="_blank" rel="noopener noreferrer">Whatsapp</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Subscribe to Newsletter */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-400 mb-4">
              Get the latest updates and offers directly in your inbox.
            </p>
            <form>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-blue-500 px-6 py-2 rounded-lg font-medium text-white transition-all duration-300 hover:bg-blue-600 shadow-md"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {`${year} Fortis Global Traders. All Rights Reserved`}.</p>
        </div>
      </div>
    </footer>
  );
}

  