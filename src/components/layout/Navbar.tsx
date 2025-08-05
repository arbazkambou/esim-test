import Logo from "./Logo";
import NavLinksWrapper from "./NavLinksWrapper";
function Navbar() {
  return (
    <header className="container mt-4 flex items-center justify-between bg-background">
      <Logo />
      <NavLinksWrapper />
    </header>
  );
}

export default Navbar;
