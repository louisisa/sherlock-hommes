import { useNavigate } from 'react-router-dom';

// interface ArticleFormat {
//     title: string;
//     desc: string;
//     imglink: string;
//     id: number;
//     urlroute: To;
// }

export const Articleview = (props: any) => {
    
    const blogs = props.blogs;
    const navigate = useNavigate();


  return (

    <div className='flex flex-col gap-2 m-2 px-2 '>
        {blogs.map((blog: any) => (
            <div className='grid grid-col-1 justify-center lg:flex bg-slate-100 border-2 border-black/10 h-[50%] cursor-pointer group' onClick={() =>{
                const artName = blog.urlroute;
                navigate(artName);
            }}>
                 
                <img className= 'max-h-64 w-full lg:w-6/12   m-1 p-2 translate-x-[-3px] sm:translate-x-0 rounded-sm group-hover:scale-105 transition duration-500' 
                    src={blog.imglink} alt='article preview' />

                 <div className=' font-light px-3 m-0.5 w-16 h-8 border-2 border-black/10 rounded-full bg-yellow-300/70'> 
                    <span> <i>{blog.category}</i></span>
                    
                </div>

                <div className='translate-y-[-30px] sm:translate-y-0 container justify-center font-sanspub'> 
                    <span className='text-4xl md:text-5xl font-medium font-bebasneue group-hover:underline'> {blog.title} </span>
                    <p className='text-left text-sm sm:text-base py-1 mx-1'> {blog.desc} </p>
                </div>
               
            </div>
        ))}
    </div>
            

    // <div className='grid gap-5 p-10 m-1 grid-cols-1 justify-evenly  sm:grid-cols-2 '>
    //     {blogs.map((blog: any) => (
    //         <div className=' bg-slate-100 justify-center shadow rounded-lg border-black border-0 hover: cursor-pointer' onClick={() =>{
    //             const artName = blog.urlroute;
    //             navigate(artName);
    //         }}>
    //             <img className= 'max-h-64 m-1 p-2 rounded-sm'
    //                 src={blog.imglink} alt='article preview' /> 
    //             <span className='text-4xl'> {blog.title} </span>
    //             <p className='text-left p-1 mx-1'> {blog.desc} </p>
    //         </div>
    //     ))}
    // </div>
            

  
  );
};

