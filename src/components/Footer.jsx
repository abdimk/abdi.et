const Footer = () => {
  const updateDate = "july 28 2025"; 

  return (
    <footer className="mt-8 pt-8 border-t border-border-color text-sm text-center text-text-color flex flex-col sm:flex-row justify-between items-center">
      <p className="text-base mb-2 sm:mb-0 ml-0 sm:ml-8">Made with ❤️ 2025 by Abdisa</p>
      <p className="border border-gray-400 py-1 px-2 -mt-1 bg-gray-300 mr-0 sm:mr-8">Updated: {updateDate}</p>
    </footer>
  );
};

export default Footer;