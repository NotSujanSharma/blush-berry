import { Logo } from "./Logo";
import { Nav } from "./nav/Nav";


export function Header({ channel }: { channel: string }) {

	return (
		<header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md shadow-sm`}>			<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-20">
					  {/* Logo with gradient */}
					  <div className="flex-shrink-0">
						  <span className="text-4xl font-serif font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent tracking-tight group-hover:scale-105 transition-transform duration-300 inline-block">
							<Logo />
						  </span>
					  </div>
			
					  {/* Desktop Navigation */}
						<Nav channel={channel} />

					  
					</div>
				  </div>
		</header>
	);
}
