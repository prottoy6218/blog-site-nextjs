import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <label className='logo'><Link href='/'>BlogSite</Link></label>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/components/about">About</Link></li>
        <li><Link href="/components/blog">Blog</Link></li>
        <li><Link href="/components/singleBlog">Single-BLog</Link></li>
        <li><Link href="/components/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
