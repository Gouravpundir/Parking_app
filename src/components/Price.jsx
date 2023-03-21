import React from "react";
import "../styles/Price.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Price = () => {
  return (
    <div className=""  style={{backgroundColor: "rgb(202, 230, 165)", backgroundImage: "linear-gradient(135deg, rgb(79, 126, 72), rgb(202, 230, 165) 75%)"}}>
        <NavBar/>
        <h1 className="text-center mt-5">Pricing</h1>
    <div className="price-container" >
      <div className="price-card mt-5 pt-3" style={{backgroundColor: "rgb(202, 230, 165)", backgroundImage: "linear-gradient(135deg, rgb(79, 126, 72), rgb(202, 230, 165) 75%)"}}>
        <h3>Monthly Subscription</h3>
        <p className="text-dark">₹50/month</p>
        <Link type="button" class="btn btn-warning my-5" to="/payment">Subscribe Now</Link>
      </div>
      <div className="price-card mt-5 pt-3" style={{backgroundColor: "rgb(202, 230, 165)", backgroundImage: "linear-gradient(135deg, rgb(79, 126, 72), rgb(202, 230, 165) 75%)"}}>
        <h3>6-Month Subscription</h3>
        <p className="text-dark">₹250/6 months</p>
         <Link type="button" class="btn btn-warning my-5" to="/payment">Subscribe Now</Link>
      </div>
      <div className="price-card mt-5 pt-3 " style={{backgroundColor: "rgb(202, 230, 165)", backgroundImage: "linear-gradient(135deg, rgb(79, 126, 72), rgb(202, 230, 165) 75%)"}}>
        <h3>Yearly Subscription</h3>
        <p className="text-dark">₹400/year</p>
         <Link type="button" class="btn btn-warning my-5" to="/payment">Subscribe Now</Link>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Price;
