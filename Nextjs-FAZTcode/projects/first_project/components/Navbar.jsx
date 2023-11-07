import Link from "next/link";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link href="/">Home</Link>

        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/carrito">Carrito</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
