import About from "./component/about";
import Hero from "./component/hero";
import Portfolio from "./component/portfolio";
import Service from './component/service';
import Skills from "./component/skills";
import Contact from "./component/contact";


export default function Home() {
  return (
   <div>
 <Hero/>
 <About/>
 <Service/>
 <Skills/>
 <Portfolio/>
 <Contact/>
   </div>
  );
}
