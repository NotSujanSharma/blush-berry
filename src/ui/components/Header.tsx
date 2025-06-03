import { Logo } from "./Logo";
import { Nav } from "./nav/Nav";


export function Header({ channel }: { channel: string }) {

	const isScrolled = false;
	return (
		<header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-pink-100"
          : "bg-white/80 backdrop-blur-md shadow-sm"
      }`}
    >			<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-20">
					  {/* Logo with gradient */}
					  <div className="flex-shrink-0">
						  <span className="text-4xl font-serif font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent tracking-tight group-hover:scale-105 transition-transform duration-300 inline-block">
							<Logo />
						  </span>
					  </div>
			
					  {/* Desktop Navigation */}
						<Nav channel={channel} />

					  {/* Mobile Menu Button */}
					  <div className="md:hidden flex items-center">
						<button
						  className="text-gray-500 hover:text-pink-600 focus:outline-none p-2 rounded-lg hover:bg-pink-50 transition-all duration-300"
						>
						  <div className="relative w-6 h-6">
							<span
							  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${ "top-1"}`}
							/>
							<span
							  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 top-3 ${ "opacity-100"}`}
							/>
							<span
							  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${ "top-5"}`}
							/>
						  </div>
						</button>
					  </div>
					</div>
				  </div>
		</header>
	);
}
