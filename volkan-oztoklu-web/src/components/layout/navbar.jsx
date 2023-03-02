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
        <div class="flex justify-center gap-x-2 text-lg py-7">
            {contents.map(content => (
                    <button
                    type="button"
                    class="inline-block rounded border-2 border-neutral-800 px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:border-neutral-800 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-800 focus:border-neutral-800 focus:text-neutral-800 focus:outline-none focus:ring-0 active:border-neutral-900 active:text-neutral-900 dark:border-neutral-900 dark:text-neutral-900 dark:hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 dark:hover:text-neutral-900 dark:focus:border-neutral-900 dark:focus:text-neutral-900 dark:active:border-neutral-900 dark:active:text-neutral-900"
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
