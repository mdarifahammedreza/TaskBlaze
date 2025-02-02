const Header = () => {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }
  return (
    <header className="bg-white text-pink-700 flex justify-between items-center h-16 shadow-lg gap-10 shadow-pink-700 mb-10">
        <p>Task<span>Blaze</span></p>
      <ul className="bg-white gap-10 text-pink-700 flex justify-between items-center h-16 shadow-lg shadow-pink-700 ">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>

      </ul>
    </header>
  );
};

export default Header;