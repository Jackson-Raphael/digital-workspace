import {
	Dialog,
	DialogPanel,
	Transition,
	TransitionChild,
} from "@headlessui/react";
import { Outlet } from "@tanstack/react-router";
import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

// Mobile Header Component
const MobileHeader = ({ onMenuClick }) => {
	return (
		<div className="lg:hidden">
			<div className="navbar bg-blue-900 p-4">
				<div className="navbar-start">
					<div className="font-bold text-white">LOGO</div>
				</div>
				<div className="navbar-end">
					<button
						type="button"
						className="btn btn-ghost btn-square"
						onClick={onMenuClick}
						aria-label="Open menu"
					>
						<MdMenu className="h-6 w-6" />
					</button>
				</div>
			</div>
		</div>
	);
};

// Desktop Sidebar Component
const DesktopSidebar = () => {
	return (
		<div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
			<div className="flex min-h-full w-64 flex-grow flex-col overflow-y-auto bg-blue-200">
				<div className="p-4 font-bold text-black text-lg">LOGO</div>
			</div>
		</div>
	);
};

// Mobile Sidebar Overlay Component
const MobileSidebarOverlay = ({ isOpen, onClose }) => {
	return (
		<Transition show={isOpen} as={React.Fragment}>
			<Dialog as="div" className="relative z-50 lg:hidden" onClose={onClose}>
				<TransitionChild
					as={React.Fragment}
					enter="transition-opacity ease-linear duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-opacity ease-linear duration-300"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black/25" />
				</TransitionChild>

				<div className="fixed inset-0 flex">
					<TransitionChild
						as={React.Fragment}
						enter="transition ease-in-out duration-300 transform"
						enterFrom="-translate-x-full"
						enterTo="translate-x-0"
						leave="transition ease-in-out duration-300 transform"
						leaveFrom="translate-x-0"
						leaveTo="-translate-x-full"
					>
						<DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
							<div className="flex min-h-full w-full flex-grow flex-col overflow-y-auto bg-purple-200 shadow-xl">
								<div className="flex items-center justify-between p-6">
									<div className="font-bold text-black">
										MOBILE SIDEBAR OVERLAY
									</div>
									<button
										type="button"
										className="btn btn-square btn-sm"
										onClick={onClose}
										aria-label="Close menu"
									>
										<MdClose className="h-5 w-5" />
									</button>
								</div>
							</div>
						</DialogPanel>
					</TransitionChild>
				</div>
			</Dialog>
		</Transition>
	);
};

// Breadcrumbs Component
const Breadcrumbs = () => {
	return (
		<div className="bg-green-200 px-4 py-3 text-black lg:pl-68">
			Home &gt; Dashboard &gt; Current Page
		</div>
	);
};

// Main Layout Component
const Layout = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className="min-h-screen bg-gray-100">
			{/* Desktop Sidebar */}
			<DesktopSidebar />

			{/* Mobile Sidebar Overlay */}
			<MobileSidebarOverlay
				isOpen={sidebarOpen}
				onClose={() => setSidebarOpen(false)}
			/>

			{/* Mobile Header */}
			<MobileHeader onMenuClick={() => setSidebarOpen(true)} />

			{/* Breadcrumbs */}
			<Breadcrumbs />

			{/* Content */}
			<Outlet />
		</div>
	);
};

export { Layout };
