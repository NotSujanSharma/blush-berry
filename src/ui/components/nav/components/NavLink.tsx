"use client";

import clsx from "clsx";
import { type ReactElement } from "react";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";
import useSelectedPathname from "@/hooks/useSelectedPathname";

export function NavLink({ href, children }: { href: string; children: ReactElement | string }) {
	const pathname = useSelectedPathname();
	const isActive = pathname === href;

	return (
		<li className="inline-flex">
			<LinkWithChannel
				href={href}
				className={clsx(
					isActive ? "border-neutral-900 text-pink-600" : "border-transparent text-gray-600",
					" relative group font-medium transition-all duration-300 hover:text-pink-600 px-4 py-2 text-sm",
				)}
			>
				{children}
				<span className="absolute left-4 bottom-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 group-hover:w-[80%] transition-all duration-300" />
			</LinkWithChannel>
		</li>
	);
}
