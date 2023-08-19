import "./Footer.css";

const FooterComp = () => {
  return (
    <div className="footer">
      <div id="social-apps">
        <a>
          {/* <img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png" /> */}
          <span style={{ color: "#86af49", fontSize: "3.5rem" }}>
            <i class="fab fa-twitter"></i>
          </span>
        </a>
        <a>
          {/* <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" /> */}
          <span style={{ color: "#86af49", fontSize: "3.5rem" }}>
            <i class="fab fa-facebook"></i>
          </span>
        </a>
        <a>
          {/* <img src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png" /> */}
          <span style={{ color: "#86af49", fontSize: "3.5rem" }}>
            <i class="fab fa-instagram"></i>
          </span>
        </a>
        <a href="https://github.com/ujjwalkr01/ReactJs_projects/tree/bdaab79dcdf22c4a60705821a0f4a27bf9ea7a8d/FoodOrder-project">
          {/* <img src="https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png" /> */}
          <span style={{ color: "#86af49", fontSize: "3.5rem" }}>
            <i class="fab fa-github"></i>
          </span>
        </a>
      </div>
      <div className="list">
        <p>Home</p>
        <p>Menu</p>
        <p>Story</p>
        <p>Detox</p>
        <p>Locations</p>
      </div>
      <div className="secList">
        <p>Contact</p>
        <span>|</span>
        <p>Blog</p>
        <span>|</span>
        <p>Offers</p>
        <span>|</span>
        <p>Delivery</p>
      </div>
      <div className="lastList">
        <p>
          Healthy Fast-Casual Food, Crafted With{" "}
          <i
            class="fa fa-heart"
            style={{ fontSize: "24px", color: "whitesmoke" }}
          ></i>{" "}
          In India.
        </p>
        <p>&copy;Kings Culture Kitchen & Press | All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default FooterComp;
