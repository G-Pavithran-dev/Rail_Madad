const Footer = () => {
  return (
    <footer className="bg-[#920b3e] text-white py-4 px-10 flex justify-between items-center">
      <div className="text-base">
        Copyright ©2019 RAILMADAD. All Rights Reserved.
      </div>
      <div className="text-base space-x-4">
        <a href="#" className="hover:underline">
          Home
        </a>
        <span>|</span>
        <a href="#" className="hover:underline">
          FAQs
        </a>
        <span>|</span>
        <a href="#" className="hover:underline">
          Railway Admin Login
        </a>
        <span>|</span>
        <a href="#" className="hover:underline">
          MIS Report Login
        </a>
      </div>
    </footer>
  );
};

export default Footer;
