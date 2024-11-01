import About from "./component/about";
import Contact from "./component/contact";
import Hero from "./component/hero";
import Portfolio from "./component/portfolio";
import Skills from "./component/skills";

export default function Home() {
  return (
   <div>
  <Hero/>
  <About/>
  <Skills/>
<Portfolio/>
<Contact/>
 
   </div>
  );
}
