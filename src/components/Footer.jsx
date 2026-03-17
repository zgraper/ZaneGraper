import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Zane Graper &mdash; Built with React &amp; Vite
      </p>
      <div className="footer-links">
        <a href="mailto:zgraper@gmail.com">zgraper@gmail.com</a>
        <a href="https://linkedin.com/in/zanegraper" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
