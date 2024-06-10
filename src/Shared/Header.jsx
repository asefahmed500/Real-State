import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold"><img className="flex justify-center items-center" src={logo} alt="" /></h2>
            <p>Wlcome to Your Deam Home</p>
        </div>
    );
};

export default Header;