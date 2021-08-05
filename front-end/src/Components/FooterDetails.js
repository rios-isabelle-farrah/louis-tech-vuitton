import "./FooterDetails.css";
import Logo from "./Images/PV_Logo.png"
function FooterDetails() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-brand" > <img src={Logo} alt="logo"></img></div>
        <div className="footer-links">
            <a href="https://github.com/rios-isabelle-farrah/louis-tech-vuitton" target="_blank" rel="noreferrer" >Github</a>
            <a href="https://young-peak-76026.herokuapp.com/" target="_blank" rel="noreferrer" >Heroku</a>
            <a className="link-name" href="https://github.com/rios-isabelle-farrah" target="_blank" rel="noreferrer" >Farrah Rios</a>
            <a className="link-name" href="https://github.com/CoreenCooper" target="_blank" rel="noreferrer" >Coreen Cooper</a>
            <a className="link-name" href="https://github.com/bedonjonathan" target="_blank" rel="noreferrer" >Jonathan Bedon</a>
            <a className="link-name" href="https://github.com/carloecheverri" target="_blank" rel="noreferrer" >Carlo Echeverri</a>
        </div>
        <div>
          <span> &copy; {new Date().getFullYear()} creativeFour. </span>
        </div>
      </footer>
    </div>
  );
}
export default FooterDetails;