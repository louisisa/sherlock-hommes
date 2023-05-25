import { EmailOutlined, Instagram, MenuOutlined, QuestionAnswerOutlined } from "@material-ui/icons";
import { Close } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom';

export const Menubar = ({showMenu , active}) => {
  return (
    <div>
        <div className={active ? 'absolute flex-col flex inset-y-14 right-0 items-end p-6 py-1 -my-[8px] sm:my-[4px] gap-4 bg-opacity-85 max-h-screen text-slate-100  bg-blue-950 z-10 md:hidden ' : "hidden"} > 
            <Link to='/about' className="pr-7 hover:underline cursor-pointer"> About </Link>

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
  )
} 