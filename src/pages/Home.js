import React , {useEffect} from "react";
import Layout from "../compoents/Layout";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaAngular,
  FaJava,
} from "react-icons/fa";
import AOS from 'aos';
AOS.init({
  duration:1000
});
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
      <div>
        {/* Intro section */}
        <div className="h-screen bg-theme">
          <div
            className="grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 md:border-0
            mx-10 z-10 bg-theme
          border-yellow-500 transform rotate-12 md:rotate-0"
          >
            <div className="h-1/2">
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_ghs9bkkc.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className="font-bold text-white md:px-5">
              <h1 className="text-7xl md:text-4xl" data-aos='slide-right'>
                Hii , I am <b className="text-yellow-500">Artist</b>
              </h1>
              <h1 className="text-4xl md:text-xl" data-aos='slide-left'> A
                FullStack <b className="text-yellow-500"> Developer</b> , UX/UI Designer
              </h1>
            </div>
          </div>
        </div>

        {/* Technologies */}

        <div className="mt-20 bg-theme" >
          <h1 className="text-4xl text-yellow-500 font-bold text-center my-8" data-aos='slide-up'>
            Technologies
          </h1>
          <div className="grid md:grid-cols-1 grid-cols-4">
            <FaReact
              size={180}
              color="cyan"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaAngular
              size={180}
              color="red"
              className="w-full text-center mt-20 "
            />
            <FaJava
              size={180}
              color="orange"
              className="w-full text-center mt-20"
            />
            <FaNodeJs
              size={180}
              color="green"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaBootstrap
              size={180}
              color="blue"
              className="w-full text-center mt-20"
            />
            <FaJsSquare
              size={180}
              color="green"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaHtml5
              size={180}
              color="orange"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaCss3
              size={180}
              color="blue"
              className="w-full text-center mt-20 animate-bounce"
            />
          </div>
        </div>

        {/* {Javascript Buff} */}
        <div className="my-20 bg-theme">
          <div className="text-center h-52 bg-yellow-500">
            <h1 className="text-white font-bold text-4xl py-10">
              Did someone say Design???
            </h1>
          </div>

          <div className="md:mx-5 mx-32 shadow-2xl bg-theme text-white -mt-20 rounded-md hover:bg-yellow-500 hover:text-white">
            <div className="h-96" data-aos='zoom-in'>
              <lottie-player
                src="https://assets4.lottiefiles.com/packages/lf20_zf9mqyhk.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>

            <p className="text-xl my-5 font-semibold md:px-5 px-14 py-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod necessitatibus non, consectetur neque perspiciatis asperiores nesciunt rerum sunt tempore recusandae ducimus accusantium aliquid vitae labore obcaecati vero reiciendis, repellat quaerat.
            </p>
          </div>
        </div>

        {/* {Dev stack section} */}
        <div className="my-20">
          <div className="text-center h-52 bg-yellow-500">
            <h1 className="text-white font-bold text-4xl py-10">
              My DEV Stack
            </h1>
          </div>

          <div className="md:mx-5 mx-32 shadow-2xl bg-theme text-white -mt-20 rounded-lg hover:bg-yellow-500 hover:text-white">
            <div className="h-96" data-aos='zoom-in'>
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_aptscmnx.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className="grid md:grid-cols-1 grid-cols-3 p-5">
              <div>
                <h1 className="text-xl font-bold">FrontEnd</h1>
                <hr />
                <p className="font-semibold mt-2">HTML</p>
                <p className="font-semibold mt-2">CSS</p>

                <p className="font-semibold mt-2">Javascript</p>
                <p className="font-semibold mt-2">React</p>
                <p className="font-semibold mt-2">Vue</p>
              </div>

              <div className="text-center">
                <h1 className="text-xl font-bold">UI/UX</h1>
                <hr />
                <p className="font-semibold mt-2">Adobe Xd</p>
                <p className="font-semibold mt-2">Figma</p>

                <p className="font-semibold mt-2">InDesign</p>
                <p className="font-semibold mt-2">Material UI</p>
                
              </div>

              <div className="text-left">
                <h1 className="text-xl font-bold">Backend</h1>
                <hr />
                <p className="font-semibold mt-2">Node JS</p>
                <p className="font-semibold mt-2">Express JS</p>

                <p className="font-semibold mt-2">PHP</p>
                <p className="font-semibold mt-2">My SQL</p>
                <p className="font-semibold mt-2">Mongo DB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dev Info */}

        <div>
          <h1 className="text-4xl text-white text-center font-bold">
            Who am i ?
          </h1>

          <div className="h-screen relative text-gray-800">
            <div className="h-full">
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_j62mha6p.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className='absolute inset-0 flex flex-col items-center justify-center'>
               <h1 className='text-2xl font-bold text-white font-bold'>Hi , Hello , hola...

               <hr />

               <pre className='text-xl md:text-sm my-5 font-mont font-semibold text-white'>
                 {JSON.stringify({
                   FirstName: 'Artist',
                   LastName : 'Doe' ,
                   gender : 'Male' ,
                   Location : 'Beaverton, Oregon'
                 }, null , 2)}
               </pre>

               </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
