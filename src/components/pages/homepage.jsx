import Navbar from '../layout/navbar'
import About from '../homepage/about';
function Homepage() {
  return (
    <div>
      <div class="text-neutral-300 min-h-screen min-w-full bg-cover bg-center bg-no-repeat bg-[url('../src/assets/images/header-background.webp')]"> 
          <Navbar />
          <About />
           
      </div>
      <div>

      </div>
    </div>
    
  );
}

export default Homepage;
