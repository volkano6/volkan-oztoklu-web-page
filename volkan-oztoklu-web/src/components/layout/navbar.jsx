const RenderList = props => {
    const contents = [
        {name: "Home"},
        {name: "Resume"},
        {name: "Portfolio"},
        {name: "Testimonials"},
        {name: "About"},
        {name: "Contact"},
    ] 
  
    return (
        <div class="flex justify-center backdrop-brightness-75 gap-8 text-lg py-3 backdrop-blur-2xl">
            {contents.map(content => (
                    <button
                    type="button"
                    class=""
                    data-te-ripple-init>
                    {content.name}
                  </button>
            ))}
        </div>
    );
  };

  
function Navbar() {
    return (
        <RenderList />
    );
}

export default Navbar;
