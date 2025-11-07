import ButtonLight from "./ButtonLight";
import HomeLink from "./HomeLink";

function Nav() {
  return (
    <nav className="container mx-auto px-6 py-6 bg-slate-900">
      <div className="flex items-center justify-between">
        <HomeLink />
        <a
          className="md:block hidden"
          href="https://github.com/velinovjovan/Data-Visualizer"
          target="_blank"
        >
          <ButtonLight>GitHub Repo</ButtonLight>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
