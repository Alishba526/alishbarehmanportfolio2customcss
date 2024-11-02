import About from "./component/about";
import Contact from "./component/contact";
import Footer from "./component/footer";
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
<Footer/>
 
   </div>
  );
}
