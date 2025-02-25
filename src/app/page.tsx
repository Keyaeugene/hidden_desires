import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
  <main>
    <section id="hero"> 
      <Hero />
    </section>
 <section id="new-products"> 
  <NewProducts />
 </section>
   <section id="about-us"> 
     <AboutUs />
   </section>
    <Testimonial />
  </main>
  );
}
