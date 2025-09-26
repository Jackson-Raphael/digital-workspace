import { Avatar, Button, Divider, Input } from "@heroui/react";
import { Outlet } from "@tanstack/react-router";
import { useState } from "react";
import {
	MdClose,
	MdComment,
	MdDashboard,
	MdExpandLess,
	MdExpandMore,
	MdFolder,
	MdLightMode,
	MdMenu,
	MdMenuOpen,
	MdPeople,
	MdSearch,
	MdSettings,
} from "react-icons/md";
import { Logo } from "./Logo";

const Layout = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className="flex min-h-screen flex-col">
			<div className="flex justify-between border-content3 border-b bg-primary px-3 py-2 text-primary-foreground">
				<b>Digital Workplace - ICT Assets</b>
			</div>
			<div className="border-content3 border-b">
				<Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
			</div>
			<div className="flex flex-1">
				<Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
				<main className="flex-1 bg-content2 lg:ml-0">
					<div className="h-full p-3">
						<Outlet />
					</div>
				</main>
			</div>
		</div>
	);
};

interface HeaderProps {
	onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
	return (
		<div className="flex justify-between gap-2 bg-background p-3">
			<div className="flex flex-row items-center gap-2">
				<div className="flex-none">
					<Button
						isIconOnly
						aria-label="Menu"
						color="primary"
						variant="light"
						onPress={onMenuClick}
					>
						<MdMenu className="h-6 w-6" />
						{/* <MdMenuOpen className="h-6 w-6" /> */}
					</Button>
				</div>
				<Logo />
			</div>
			<div className="flex flex-row items-center gap-2">
				<Input
					placeholder="Search..."
					startContent={<MdSearch className="h-6 w-6" />}
					isClearable={true}
					variant="faded"
				/>
				<Button
					isIconOnly
					aria-label="Comments"
					color="primary"
					variant="light"
				>
					<MdComment className="h-6 w-6" />
				</Button>
				<Button isIconOnly aria-label="Theme" color="primary" variant="light">
					<MdLightMode className="h-6 w-6" />
				</Button>
				<div className="flex items-center">
					<Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
				</div>
			</div>
		</div>
	);
};

interface SidebarProps {
	isOpen: boolean;
	onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
	return (
		<>
			{isOpen && (
				<button
					type="button"
					className="fixed inset-0 z-40 cursor-default bg-black/50 p-4 lg:hidden"
					onClick={onClose}
					aria-label="Close sidebar"
				/>
			)}

			<aside
				className={`fixed inset-y-0 left-0 z-50 w-60 transform border-content3 border-r bg-background transition-transform duration-200 ease-in-out lg:relative lg:z-auto lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}
			>
				<div className="flex items-center justify-between p-3 lg:hidden">
					<span className="font-semibold">Navigation</span>
					<Button isIconOnly variant="light" onPress={onClose}>
						<MdClose className="h-6 w-6" />
					</Button>
				</div>

				<Divider className="lg:hidden" />

				<nav className="flex flex-col space-y-1 p-3">
					<SidebarItem icon={<MdDashboard />} label="Dashboard" />

					<SidebarCollapsible
						icon={<MdFolder />}
						label="ICT Assets"
						defaultExpanded
					>
						<SidebarSubItem label="Hardware" />
						<SidebarSubItem label="Software" />
						<SidebarSubItem label="Licenses" />
					</SidebarCollapsible>

					<SidebarItem icon={<MdPeople />} label="Users" />

					<SidebarCollapsible icon={<MdSettings />} label="Administration">
						<SidebarSubItem label="System Config" />
						<SidebarSubItem label="User Management" />
						<SidebarSubItem label="Reports" />
					</SidebarCollapsible>
				</nav>
			</aside>
		</>
	);
};

interface SidebarItemProps {
	icon: React.ReactNode;
	label: string;
	onClick?: () => void;
}

const SidebarItem = ({ icon, label, onClick }: SidebarItemProps) => {
	return (
		<button
			type="button"
			className="flex w-full items-center gap-3 rounded-lg p-2 text-left transition-colors hover:bg-content1"
			onClick={onClick}
		>
			<span className="text-lg">{icon}</span>
			<span className="text-sm">{label}</span>
		</button>
	);
};

interface SidebarCollapsibleProps {
	icon: React.ReactNode;
	label: string;
	children: React.ReactNode;
	defaultExpanded?: boolean;
}

const SidebarCollapsible = ({
	icon,
	label,
	children,
	defaultExpanded = false,
}: SidebarCollapsibleProps) => {
	const [expanded, setExpanded] = useState(defaultExpanded);

	return (
		<div>
			<button
				type="button"
				className="flex w-full items-center justify-between rounded-lg p-2 text-left transition-colors hover:bg-content1"
				onClick={() => setExpanded(!expanded)}
			>
				<div className="flex items-center gap-3">
					<span className="text-lg">{icon}</span>
					<span className="text-sm">{label}</span>
				</div>
				{expanded ? <MdExpandLess /> : <MdExpandMore />}
			</button>
			{expanded && <div className="mt-1 ml-8 space-y-1">{children}</div>}
		</div>
	);
};

const SidebarSubItem = ({ label }: { label: string }) => {
	return (
		<button
			type="button"
			className="w-full rounded p-2 text-left text-foreground-600 text-sm transition-colors hover:bg-content1 hover:text-foreground"
		>
			{label}
		</button>
	);
};

export { Layout };
