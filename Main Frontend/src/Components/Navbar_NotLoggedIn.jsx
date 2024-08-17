import { Link } from 'react-router-dom';
// import logo_compilex from '../../assets/logo-compilex.png'
import PixIcon from "@mui/icons-material/Pix";

const Navbar_NotLoggedIn = () => {
  return (
    <div className="w-full text-white h-[10vh] px-16 flex flex-row justify-between align-center items-center">
        
        <Link to="/">
          <div className="w-1/2 flex flex-row gap-[0.75rem] inter-bold">
              <PixIcon sx={{ fontSize: "28px" }} />
              <h1>InsightsIQ</h1>
          </div>
        </Link>
        
        <div className="w-1/2 flex flex-row gap-5 justify-end align-center items-center">
            {/* <div className="rounded-[50%] p-1 bg-white text-black text-xl border-white">
                <GoSun />
            </div> */}
            <Link to="/categories" className="text-[14px] inter-normal px-10 py-2 text-white rounded-md">
              categories
            </Link>
        </div>
    </div>
  );
};

export default Navbar_NotLoggedIn;
