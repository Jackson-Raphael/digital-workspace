// Manages state and pass it down via props to subcomponents
function DashboardLayout({ children, ...props }) {
	return <div {...props}>{children}</div>;
}

// Subcomponents (attached as static properties for compound pattern)
function DashboardSidebar({ children, ...props }) {
	return <aside {...props}>{children}</aside>;
}

function DashboardHeader({ children, ...props }) {
	return <header {...props}>{children}</header>;
}

function DashboardToggle({ ...props }) {
	return <button {...props}>Toggle Sidebar</button>;
}

function DashboardMain({ children, ...props }) {
	return <main {...props}>{children}</main>;
}

DashboardLayout.Sidebar = DashboardSidebar;
DashboardLayout.Header = DashboardHeader;
DashboardLayout.Toggle = DashboardToggle;
DashboardLayout.Main = DashboardMain;

export { DashboardLayout };
