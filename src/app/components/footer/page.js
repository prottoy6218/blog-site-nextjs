import Link from "next/link";
const Footer = () => {
  return (
    <footer className='footer-content'>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/components/about">About</Link></li>
        <li><Link href="/components/blog">Blog</Link></li>
        <li><Link href="/components/single-blog">Single-BLog</Link></li>
        <li><Link href="/components/contact">Contact</Link></li>
      </ul>
      <h3>© 2023 by Nazmul Hasan Prottoy. All right reserved.</h3>
    </footer>
  );
}

export default Footer;
