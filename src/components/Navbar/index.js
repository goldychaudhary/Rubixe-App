import './index.css'

const Navbar = () => (
<nav className="navbar navbar-expand-lg custom-nav">
<div className="container-fluid">
  <a className="navbar-brand" href="/">
  <img className='logo-pic' src='https://rubixe.com/assets/img/logo/white-rubixe-logo.png' alt='website-logo'/>
  </a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav custom-nav-link">
        <hr className='line'/>
      <a className="nav-link" aria-current="page" href="/">HOME</a>
      <a className="nav-link" href="/">SERVICES</a>
      <a className="nav-link" href="/">PRODUCTS</a>
      <a className="nav-link" href="/">AI INTERNSHIP</a>
      <a className="nav-link" href="/">CARRER</a>
      <a className="nav-link" href="/">BLOG</a>
      <a className="nav-link" href="/">ABOUT</a>
      <a className="nav-link" href="/">CONTACT US</a>
    </div>
  </div>
</div>
</nav>
)

export default Navbar