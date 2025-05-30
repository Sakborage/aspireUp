const Footer = () => {
    return (
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 border-t pt-6 text-gray-700">
        {/* Location */}
        <div className="flex flex-col items-center text-center">
          <svg className="w-6 h-6 text-gray-600 mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> 
            <path d="M12 2c-4.42 0-8 3.58-8 8 0 5.25 8 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8z"></path> 
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <p className="text-gray-600">Sainagar, Kondhwa, Pune-411016</p>
        </div>
  
        {/* Response Hours */}
        <div className="flex flex-col items-center text-center">
          <svg className="w-6 h-6 text-gray-600 mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> 
            <circle cx="12" cy="12" r="10"></circle> 
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <p>Response hours: 8 to 20</p>
        </div>
  
        {/* Telephone */}
        <div className="flex flex-col items-center text-center">
          <svg className="w-6 h-6 text-gray-600 mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> 
            <path d="M22 16.92v3a2 2 0 0 1-2 2 19.79 19.79 0 0 1-8.59-2 19.79 19.79 0 0 1-8.58-8.59 2 2 0 0 1 2-2h3a2 2 0 0 1 2 1.72 12.35 12.35 0 0 0 .93 2.84 2 2 0 0 1-.45 2.1l-1.35 1.35a16 16 0 0 0 5.64 5.64l1.35-1.35a2 2 0 0 1 2.1-.45 12.35 12.35 0 0 0 2.84.93 2 2 0 0 1 1.72 2z"></path>
          </svg>
          <p>Tel: +9229341037</p>
        </div>
  
        {/* Email */}
        <div className="flex flex-col items-center text-center">
          <svg className="w-6 h-6 text-gray-600 mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> 
            <path d="M4 4h16v16H4z"></path> 
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <p>Email: info@aspireup.com</p>
        </div>
      </div>
    );
  };
  
  export default Footer;
  