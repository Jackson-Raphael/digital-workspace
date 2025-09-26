import { Button } from "@heroui/react";
import { useEffect, useState } from "react";
import { MdComment, MdLightMode, MdMenu } from "react-icons/md";
import { Logo } from "./Logo";

const Layout = () => {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	return (
		<div className="flex min-h-screen flex-col lg:flex-row">
			{/* HEADER */}
			<div className="flex h-15 items-center justify-between gap-4 border-b bg-background p-3 lg:hidden">
				<div className="flex-none">
					<Button isIconOnly aria-label="Like" color="primary" variant="light">
						<MdMenu className="h-6 w-6 text-primary" />
					</Button>
				</div>
				<div className="flex-1 font-bold text-primary text-xl">
					<Logo />
				</div>
				<div className="flex flex-none gap-2">
					<Button isIconOnly aria-label="Like" color="primary" variant="light">
						<MdComment className="h-6 w-6 text-primary" />
					</Button>
					<Button isIconOnly aria-label="Like" color="primary" variant="light">
						<MdLightMode className="h-6 w-6 text-primary" />
					</Button>
				</div>
			</div>
			{/* SIDEBAR */}
			<div className="hidden min-h-100 min-w-60 border-r bg-background p-3 lg:block">
				<div className="flex-1 font-bold text-primary-foreground text-xl">
					<Logo />
				</div>
			</div>
		</div>
	);
};

const Menu = () => {
	return (
		<div>
			<h1>Menu</h1>
		</div>
	);
};

export { Layout };
