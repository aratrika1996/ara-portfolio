import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import {FaEnvelope} from "react-icons/fa"
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import aru from "../public/aru.png";
import logo from "../public/logo.png";
import logo_dark from "../public/logo_dark.png";
import Image from "next/image";
import html from "../public/html-5.png";
import css from "../public/css-3.png";
import js from "../public/js.png";
import ts from "../public/typescript.png";
import react from "../public/physics.png";
import nodejs from "../public/nodejs.png";
import swift from "../public/swift.png";
import kotlin from "../public/kotlin.png";
import ui from "../public/urbanithaca.png";
import reddev from "../public/reddev.png";
import fr from "../public/fundraisin.png";
import catdrop from "../public/catdrop.png";
import hauler from "../public/hauler.png";
import yardsale from "../public/yardsale.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Aratrika Mukherjee</title>
        <meta name="description" content="Web & Mobile Developer" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
          <Image src={darkMode ? logo : logo_dark} width={60} height={60} />
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1QqkgDDEFwyrxyoO7tj2XTqeqduy-D2CJ/view?usp=sharing" target="_blank" rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Aratrika Mukherjee
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Web and Mobile Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I build things for web and mobile. Join me down below and let&apos;s get cracking!
            </p>
            <div className="text-4xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="mailto:aratrika.mukherjee.ca@gmail.com"><FaEnvelope /></a>
              <a href="https://www.linkedin.com/in/aratrika-mukherjee/"><AiFillLinkedin /></a>
              <a href="https://www.twitter.com/aramukherji26/"><AiFillTwitterCircle /></a>
              
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={aru} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            “Hello World!!”
            I am Aratrika, a post-grad student at George Brown College majoring in Mobile Application Development and Strategy. I am passionate about creating innovative and user-friendly mobile and web apps that make a positive impact on people&apos;s lives.

I am experienced in designing and building mobile applications for both iOS in Swift and Android in Kotlin. I have 2+ years of experience in full-stack web development, working with React, Vue, Bootstrap and other popular frontend technologies while also being adept at creating backend systems in Flask and Node JS. I also have experience working with databases like MongoDB and PostgreSQL.

In addition to technical expertise, I have strong communication and collaboration skills which enable me to work effectively and thrive in fast-paced and collaborative environments. I can work closely with cross-functional teams to bring ideas to life and deliver quality products within project timelines

Let&apos;s connect over a cup of coffee and discuss possibilities of creating something wonderful in tech.
            </p>
            
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Experience</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              These are the technologies I have worked with.
            </p>
          </div>
          <div className="lg:flex lg:flex-wrap gap-10">
            <div className="basis-1/5 flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={html} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                HTML
              </h3>
            </div>
            <div className="basis-1/5 flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={css} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                CSS
              </h3>
            </div>
            <div className="basis-1/5 flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={js} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">JavaScript</h3>
            </div>
            <div className="basis-1/5 flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={ts} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">TypeScript</h3>
            </div>
            <div className="basis-1/5 flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={react} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">React</h3>
            </div>
            <div className="basis-1/5 flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={nodejs} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Node.js</h3>
            </div>
            <div className="basis-1/5 flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={kotlin} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Kotlin</h3>
            </div>
            <div className="basis-1/5 flex-1 text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={swift} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Swift</h3>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Check out some of my work right here
            </p>
            
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a href="https://www.red.dev/" target="_blank" rel="noreferrer">
              <Image
                className="rounded-lg object-cover object-left"
                width={"100%"}
                height={"80%"}
                layout="responsive"
                src={reddev}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://www.urbanithaca.com/" target="_blank" rel="noreferrer">
              <Image
                className="rounded-lg object-cover object-left"
                width={"100%"}
                height={"80%"}
                layout="responsive"
                src={ui}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://www.fundraisin.app/" target="_blank" rel="noreferrer">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"80%"}
                layout="responsive"
                src={fr}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://catdrops.fundraisin.app/" target="_blank" rel="noreferrer">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"80%"}
                layout="responsive"
                src={catdrop}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://github.com/m-mraisi/hauler" target="_blank" rel="noreferrer">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"80%"}
                layout="responsive"
                src={hauler}
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://github.com/ytleevicky/android-yard-sale" target="_blank" rel="noreferrer">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"80%"}
                layout="responsive"
                src={yardsale}
              />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
