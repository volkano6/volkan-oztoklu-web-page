import Content from "../components/homepage/content"
import Credia from "../components/homepage/credia"

function Home() {
    return (
      <div className="App">
        <div className="min-h-screen p-1">
          <div class="flex flex-row content-center">
            <div class="basis-1/4  border-2">
              <Credia />
            </div>
            <div class="basis-3/4 border-2">
              <Content />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  