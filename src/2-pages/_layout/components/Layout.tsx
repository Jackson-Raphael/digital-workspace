// Manages state and pass it down via props to subcomponents
function Layout({ children, ...props }) {
	// return <div {...props}>{children}</div>;
	return (
		<>
			<h1>Hello</h1>
			{children}
		</>
	);
}

// Subcomponents (attached as static properties for compound pattern)
function LayoutSidebar({ children, ...props }) {
	return <aside {...props}>{children}</aside>;
}

function LayoutHeader({ children, ...props }) {
	return <header {...props}>{children}</header>;
}

function LayoutToggle({ ...props }) {
	return <button {...props}>Toggle Sidebar</button>;
}

function LayoutMain({ children, ...props }) {
	return <main {...props}>{children}</main>;
}

Layout.Sidebar = LayoutSidebar;
Layout.Header = LayoutHeader;
Layout.Toggle = LayoutToggle;
Layout.Main = LayoutMain;

export { Layout };
