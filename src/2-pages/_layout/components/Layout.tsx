import { Dialog, DialogPanel } from "@headlessui/react";
import { useEffect, useState } from "react";

const Layout = () => {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	return (
		<div className="flex min-h-screen flex-col lg:flex-row">
			<div className="navbar bg-base-100 shadow-sm">
				<div className="flex-none">
					<button type="button" className="btn btn-square btn-ghost">
						=
					</button>
				</div>
				<div className="flex-1">daisyUI</div>
				<div className="flex-none">
					<button type="button" className="btn btn-square btn-ghost">
						=
					</button>
				</div>
			</div>
		</div>
	);
};

const Menu = () => {
	return (
		<ul className="menu w-56 rounded-box bg-base-200">
			<li>
				<a>Item 1</a>
			</li>
			<li>
				<details open>
					<summary>Parent</summary>
					<ul>
						<li>
							<a>Submenu 1</a>
						</li>
						<li>
							<a>Submenu 2</a>
						</li>
						<li>
							<details open>
								<summary>Parent</summary>
								<ul>
									<li>
										<a>Submenu 1</a>
									</li>
									<li>
										<a>Submenu 2</a>
									</li>
								</ul>
							</details>
						</li>
					</ul>
				</details>
			</li>
			<li>
				<a>Item 3</a>
			</li>
		</ul>
	);
};

export { Layout };
