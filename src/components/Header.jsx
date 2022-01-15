import * as React from "react";
import { Container } from ".";

function Header() {
  const [onTop, setOnTop] = React.useState(true);
  React.useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.pageYOffset === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`w-full py-4 fixed z-50 transition duration-300 ${
        onTop ? "bg-transparent" : "bg-black"
      }`}
    >
      <Container>
        <div className="flex">
          <h1 className="text-2xl font-bold text-red-600 uppercase">Netplix</h1>
        </div>
      </Container>
    </header>
  );
}

export default Header;
