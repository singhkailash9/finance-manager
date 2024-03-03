import "../style/footer.css"

const Footer = ()=> {
    const year = new Date().getFullYear();
    return <div className="footer-container">
        Copyright © {year}
    </div>
}

export default Footer;
