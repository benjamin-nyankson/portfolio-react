const Footer = () => {
  const year = new Date().getFullYear()
    return (
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>&copy; {year} Benjamin Nyankson. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;