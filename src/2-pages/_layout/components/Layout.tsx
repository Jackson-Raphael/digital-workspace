import { Dialog, Transition } from "@headlessui/react";
import { Outlet } from "@tanstack/react-router";
import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

// Sub-components following Feature-Sliced Design

// Mobile Header Component
const MobileHeader: React.FC<{ onMenuClick: () => void }> = ({
	onMenuClick,
}) => {
	return (
		<div className="lg:hidden">
			<div className="navbar bg-yellow-200 border border-yellow-400 p-4">
				<div className="navbar-start">
					<div className="text-black font-bold">MOBILE HEADER (Yellow)</div>
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
const DesktopSidebar: React.FC = () => {
	return (
		<div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:z-50">
			<div className="flex flex-col flex-grow bg-blue-200 border border-blue-400 overflow-y-auto min-h-full w-64">
				<div className="p-6 text-center">
					<div className="text-black font-bold text-lg">DESKTOP SIDEBAR</div>
					<div className="text-black text-sm">(Blue - Fixed 256px)</div>
					<div className="mt-4 text-xs text-black">
						• Logo area
						<br />• Navigation menu
						<br />• User profile
					</div>
				</div>
			</div>
		</div>
	);
};

// Mobile Sidebar Overlay Component
const MobileSidebarOverlay: React.FC<{
	isOpen: boolean;
	onClose: () => void;
}> = ({ isOpen, onClose }) => {
	return (
		<Transition show={isOpen} as={React.Fragment}>
			<Dialog as="div" className="relative z-50 lg:hidden" onClose={onClose}>
				<Transition.Child
					as={React.Fragment}
					enter="transition-opacity ease-linear duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-opacity ease-linear duration-300"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
				</Transition.Child>

				<div className="fixed inset-0 flex">
					<Transition.Child
						as={React.Fragment}
						enter="transition ease-in-out duration-300 transform"
						enterFrom="-translate-x-full"
						enterTo="translate-x-0"
						leave="transition ease-in-out duration-300 transform"
						leaveFrom="translate-x-0"
						leaveTo="-translate-x-full"
					>
						<Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
							<div className="flex flex-col flex-grow bg-purple-200 border border-purple-400 shadow-xl overflow-y-auto min-h-full w-full">
								<div className="flex items-center justify-between p-6 border-b border-purple-400">
									<div className="text-black font-bold">
										MOBILE SIDEBAR OVERLAY
									</div>
									<button
										type="button"
										className="btn btn-ghost btn-square btn-sm"
										onClick={onClose}
										aria-label="Close menu"
									>
										<MdClose className="h-5 w-5" />
									</button>
								</div>
								<div className="flex-1 p-6 text-center">
									<div className="text-black text-sm">(Purple - Overlay)</div>
									<div className="mt-4 text-xs text-black">
										• Same content as desktop sidebar
										<br />• Slides in from left
										<br />• Backdrop blur
									</div>
								</div>
							</div>
						</Dialog.Panel>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
};

// Breadcrumbs Component
const Breadcrumbs: React.FC = () => {
	return (
		<div className="bg-green-200 border border-green-400 px-4 py-3 lg:pl-68">
			<div className="text-center">
				<div className="text-black font-bold">BREADCRUMBS SECTION</div>
				<div className="text-black text-sm">
					(Green - Full width on mobile, offset on desktop)
				</div>
				<div className="mt-2 text-xs text-black">
					Home &gt; Dashboard &gt; Current Page
				</div>
			</div>
		</div>
	);
};

// Content Area Component
const ContentArea: React.FC = () => {
	return (
		<div className="lg:pl-64">
			<main className="p-6">
				<div className="bg-red-200 border border-red-400 p-6 min-h-96 text-center">
					<div className="text-black font-bold text-lg mb-4">CONTENT AREA</div>
					<div className="text-black text-sm mb-4">
						(Red - This is where TanStack Start Outlet renders)
					</div>
					<div className="bg-red-300 border-2 border-red-500 border-dashed p-8 rounded-lg">
						<div className="text-black font-bold text-xl mb-2">
							&lt;Outlet /&gt;
						</div>
						<div className="text-black text-sm">Child routes render here</div>
						<Outlet />
					</div>
				</div>
			</main>
		</div>
	);
};

// Main Layout Component
const Layout: React.FC = () => {
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

			{/* Content Area with Outlet */}
			<ContentArea />
		</div>
	);
};

export { Layout };
