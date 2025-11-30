import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-4 p-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/test">Test</Link></li>
        <li><Link href="/test?abc=123">Test with Query</Link></li>
        <li><Link href="/test/subpath">Test with Subpath</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;