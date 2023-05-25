import { EmailOutlined, Instagram, MenuOutlined } from "@material-ui/icons";
import { useState } from "react";
import { Menubar } from "./menubar";
import { Link, useNavigate } from "react-router-dom";



export const Navbar = () => { 

    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active);
    }

    const navigate = useNavigate();

    const handleHommeClick = () => {
        navigate('/');
    }

    return ( 
        
        <div className=" bg-blue-950 pl-8 z-0">
            <nav>
                
                <div className="flex items-end justify-between ">
                    
                    <h1 className="sm:text-6xl font-banger text-4xl  my-1 font-bold decoration-yellow-400 items-end text-slate-100 hover:cursor-pointer hover:text-yellow-300 hover:italic" 
                    onClick={handleHommeClick}> Sherlock Hommes </h1> 

                    <div className=' absolute right-7 text-slate-100 md:hidden top-3 sm:top-6 scale-150 hover:text-yellow-300 cursor-pointer' onClick={showMenu}>
                        <MenuOutlined/>
                    </div>

                    <div className="  hidden md:flex space-x-6 p-1 pr-6 text-slate-100 justify-end"> 

                        
                        <Link to='/about' className="hover:underline cursor-pointer"> About </Link>
                        <a href='https://www.instagram.com/slouisin/' className="hover:underline cursor-pointer" target="_blank"
                        rel="noopener noreferrer"> 
                            IG <Instagram className="scale-90"/> 
                        </a>
                        <a href='mailto:salouisin@gmail.com?subject = Feedback/Contact = Message' 
                        className="hover:underline cursor-pointer" > 
                            Contact <EmailOutlined className=" scale-90"/> 
                        </a>

                    </div>
                    
                </div> 
                <Menubar showMenu={showMenu} active={active}/>
            </nav> 
        </div>
    );

};

