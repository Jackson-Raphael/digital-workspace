import {
	Accordion,
	Box,
	CloseButton,
	Flex,
	Icon,
	Link,
	Text,
} from "@chakra-ui/react";
import type { IconType } from "react-icons";
import {
	MdExplore,
	MdHome,
	MdSettings,
	MdStar,
	MdTrendingUp,
} from "react-icons/md";

interface LinkItemProps {
	name: string;
	icon: IconType;
	subLinks?: { name: string }[];
}

interface NavItemProps {
	icon: IconType;
	children: React.ReactNode;
}

interface SidebarProps {
	onClose: () => void;
	display?: object;
}

const LinkItems: Array<LinkItemProps> = [
	{ name: "Home", icon: MdHome },
	{ name: "Trending", icon: MdTrendingUp },
	{
		name: "Explore",
		icon: MdExplore,
		subLinks: [{ name: "Design" }, { name: "Development" }],
	},
	{ name: "Favourites", icon: MdStar },
	{ name: "Settings", icon: MdSettings },
];

const NavItem = ({ icon, children, ...rest }: NavItemProps) => (
	<Link href="#" style={{ textDecoration: "none" }}>
		<Flex
			align="center"
			p="4"
			mx="4"
			borderRadius="lg"
			role="group"
			cursor="pointer"
			_hover={{ bg: "cyan.400", color: "white" }}
			{...rest}
		>
			<Icon mr="4" fontSize="16" as={icon} />
			{children}
		</Flex>
	</Link>
);

export const Sidebar = ({ onClose, display }: SidebarProps) => {
	return (
		<Box
			bg="white"
			w={{ base: "full", md: 60 }}
			pos="fixed"
			h="full"
			display={display}
		>
			<Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
				<Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
					Logo
				</Text>
				<CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
			</Flex>

			{LinkItems.map((link) =>
				!link.subLinks ? (
					<NavItem key={link.name} icon={link.icon}>
						{link.name}
					</NavItem>
				) : (
					<Accordion.Root key={link.name} multiple={false} collapsible>
						<Accordion.Item value={link.name}>
							<Accordion.ItemTrigger
								_hover={{ bg: "blackAlpha.50", _dark: { bg: "whiteAlpha.50" } }}
								borderRadius="lg"
								mx="4"
							>
								<Flex align="center" p="4" role="group" w="full">
									<Icon mr="4" fontSize="16" as={link.icon} />
									<Box as="span" flex="1" textAlign="left">
										{link.name}
									</Box>
									<Accordion.ItemIndicator />
								</Flex>
							</Accordion.ItemTrigger>
							<Accordion.ItemContent>
								<Box>
									{link.subLinks.map((subLink) => (
										<Link
											key={subLink.name}
											href="#"
											display="block"
											p="2"
											pl="16"
											_hover={{ bg: "cyan.50", _dark: { bg: "cyan.900" } }}
										>
											{subLink.name}
										</Link>
									))}
								</Box>
							</Accordion.ItemContent>
						</Accordion.Item>
					</Accordion.Root>
				),
			)}
		</Box>
	);
};
