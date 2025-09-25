import { Box, Drawer, IconButton, Portal, useBreakpointValue } from "@chakra-ui/react";
import { Outlet } from "@tanstack/react-router";
import { useState } from "react";

export const Layout = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const [open, setOpen] = useState(false);

  const Sidebar = (
    <Box as="nav" bg="tomato" minW="240px">
      <Box bg="orange" h="56px" /> {/* Logo + Title */}
      <Box bg="salmon" h="40px" /> {/* Nav item */}
      <Box bg="salmon" h="40px" /> {/* Nav item */}
    </Box>
  );

  return (
    <Box minH="100vh" minW="100vw" bg="gray.100">
      {/* Top bar */}
      <Box as="header" bg="skyblue" h="56px" display="flex" alignItems="center" px="4" gap="2">
        {!isDesktop && (
          <IconButton aria-label="Open menu" onClick={() => setOpen(true)} />
        )}
        <Box bg="teal" flex="1" h="32px" /> {/* Header filler */}
      </Box>

      {/* Main area */}
      <Box as="main" display="flex" minH="calc(100vh - 56px)">
        {isDesktop && Sidebar}

        {!isDesktop && (
          <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content bg="tomato" maxW="280px">
                  <Box bg="orange" h="56px" /> {/* Logo + Title */}
                  <Box bg="salmon" h="40px" /> {/* Nav item */}
                  <Box bg="salmon" h="40px" /> {/* Nav item */}
                  <Box p="4">
                    <IconButton aria-label="Close menu" onClick={() => setOpen(false)} />
                  </Box>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
        )}

        <Box bg="beige" flex="1" p="4">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
