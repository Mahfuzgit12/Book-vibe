
import Navbar from './../Components/shared/navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayOut = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
};

export default MainLayOut;