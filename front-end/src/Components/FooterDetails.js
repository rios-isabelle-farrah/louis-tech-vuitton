import "./FooterDetails.css";
import Logo from "./Images/PV_Logo.png"

function FooterDetails() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-brand"> <img src={Logo}></img></div>
        <div className="footer-links">
            <a href="https://github.com/rios-isabelle-farrah/louis-tech-vuitton" target="_blank">Github</a>
            <a href="">Heroku</a>
            <a className="link-name" href="https://github.com/rios-isabelle-farrah">Farrah Rios</a>
            <a className="link-name" href="https://github.com/CoreenCooper">Coreen Cooper</a>
            <a className="link-name" href="https://github.com/bedonjonathan">Jonathan Bedon</a>
            <a className="link-name" href="https://github.com/carloecheverri">Carlo Echeverri</a>
        </div>
        <div>
          <span> &copy; {new Date().getFullYear()} creativeFour. </span>
        </div>
      </footer>
    </div>
  );
}

export default FooterDetails;
