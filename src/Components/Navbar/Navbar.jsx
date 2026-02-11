import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="tab-wrap">
        <div className="tab">
          <i className="fa-regular fa-house"></i>
          <span>Home</span>
        </div>
        <div className="tab">
          <i className="fa-solid fa-ticket"></i>
          <span>Bookings</span>
        </div>
        <div className="tab">
          <i className="fa-solid fa-cart-shopping"></i>
          <span>Cart</span>
        </div>
        <div className="tab">
          <i className="fa-regular fa-user"></i>
          <span>Me</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
