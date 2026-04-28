import "./Assign.css";
import logo from "../../assets/user1.jpg";
import chris from "../../assets/washington.png";

const Assign = () => {
  return (
    <div>
      <h1 className="text">Welcome to Whoba Ogo foundation</h1>;
      <img src={logo} className="" />
      <img src={chris} />
      <div className="bg-img">
        <h2>Hello Nigeria</h2>
      </div>
      <div className="bkg">
        <h3>
          Let this image be the background image of this text and to make it
          colorful
        </h3>
      </div>
      <div>
        <h1 style={{ color: "red", fontSize: "60px" }}>Hello Africa</h1>
      </div>
    </div>
  );
};

export default Assign;
