import profile from '../data/profile';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} Zane Graper &mdash; Built with React &amp; Vite
      </p>
    </footer>
  );
}

export default Footer;
