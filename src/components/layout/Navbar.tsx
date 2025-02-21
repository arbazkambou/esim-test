import Logo from "./Logo";
import NavLinks from "./NavLinks";
function Navbar() {
  return (
    <header className="container mt-6 flex items-center justify-between bg-background">
      <Logo />
      <NavLinks />
    </header>
  );
}

export default Navbar;
