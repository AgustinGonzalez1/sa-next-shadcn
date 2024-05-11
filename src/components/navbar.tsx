import Link from "next/link";
import { ModeToggle } from "./theme-toggle-button";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
	return (
		<nav className="flex items-center justify-between px-5 py-5">
			<h1>Navbar</h1>
			<div className="flex items-center gap-5">
				<Link href="/new" className={buttonVariants({ variant: "outline" })}>
					Create Task
				</Link>
				<ModeToggle />
			</div>
		</nav>
	);
};
export default Navbar;
