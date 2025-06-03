import { ShoppingBagIcon } from "lucide-react";
import clsx from "clsx";
import * as Checkout from "@/lib/checkout";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";

export const CartNavItem = async ({ channel }: { channel: string }) => {
	const checkoutId = await Checkout.getIdFromCookies(channel);
	const checkout = checkoutId ? await Checkout.find(checkoutId) : null;

	const lineCount = checkout ? checkout.lines.reduce((result, line) => result + line.quantity, 0) : 0;

	return (
		<LinkWithChannel href="/cart" className="relative flex items-center bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full group hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl" data-testid="CartNavItem">
			<ShoppingBagIcon size={18}
                className="mr-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
			{lineCount > 0 ? (
				              <span className="text-sm font-medium">{lineCount}</span>

			) : (
				<span className="sr-only">0 items in cart</span>
			)}
		</LinkWithChannel>
	);
};
