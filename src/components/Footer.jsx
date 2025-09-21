import React, { useState } from 'react';

const Footer = () => {
  const [showLegal, setShowLegal] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="bg-[#242424] text-white py-10">
      <div className="container mx-auto px-4 text-center space-y-6">

        {/* Site Name */}
        <h2 className="text-2xl font-bold text-yellow-500" style={{ fontFamily: 'Playfair Display, serif' }}>
          WorldPlate
        </h2>

        {/* Tagline */}
        <p className="text-gray-300" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Discover, cook, savor!
        </p>

        {/* Interactive Links */}
        <div className="flex justify-center space-x-6 text-white/80">
          <span
            className="hover:text-yellow-500 cursor-pointer"
            style={{ fontFamily: 'Playfair Display, serif' }}
            onClick={() => {
              setShowLegal(!showLegal);
              setShowPrivacy(false);
            }}
          >
            Legal Notice
          </span>

          <span
            className="hover:text-yellow-500 cursor-pointer"
            style={{ fontFamily: 'Playfair Display, serif' }}
            onClick={() => {
              setShowPrivacy(!showPrivacy);
              setShowLegal(false);
            }}
          >
            Privacy Policy
          </span>

          <a
            href="#contact"
            className="hover:text-yellow-500 cursor-pointer"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Contact
          </a>
        </div>

        {/* Dynamic Content for Legal / Privacy */}
        <div className="mt-4 text-gray-300 max-w-3xl mx-auto text-left">
          {showLegal && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Legal Notice</h3>
              <p>
                WorldPlate is an international recipe website.  
                All content reproduction is prohibited without permission.  
                Using this site implies acceptance of these legal terms.
              </p>
            </div>
          )}
          {showPrivacy && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Privacy Policy</h3>
              <p>
                We respect your privacy. Information collected on WorldPlate  
                is only used to improve your experience on the site.  
                No personal data is shared with third parties without your consent.
              </p>
            </div>
          )}
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
          &copy; {new Date().getFullYear()} WorldPlate. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
