// src/routes/_layout.tsx
import { createFileRoute, Outlet, Link } from '@tanstack/react-router'
import { Box, Heading, VStack, Button } from '@chakra-ui/react'

export const Route = createFileRoute('/_layout')({
  component: Layout,
})

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/insights', label: 'Insights' },
  { to: '/observations', label: 'Observations' },
  { to: '/reports', label: 'Reports' },
  { to: '/lessons', label: 'Lessons' },
  { to: '/recommendations', label: 'Recommendations' },
  { to: '/actions', label: 'Actions' },
]

function Layout() {
  return (
    <Box display="flex" minH="100vh">
      {/* Sidebar Navigation */}
      <Box
        as="nav"
        w="250px"
        bg="gray.50"
        p={4}
        borderRight="1px solid"
        borderColor="gray.200"
      >
        <Heading as="h1" size="md" mb={8} color="teal.600">
          Operational Improvement
        </Heading>
        <VStack as="ul" gap={2} align="stretch" listStyleType="none" m={0} p={0}>
          {navLinks.map((navLink) => (
            <Box as="li" key={navLink.to}>
              <Link to={navLink.to}>
                {({ isActive }) => (
                  <Button
                    as="div" // Use 'as' prop to render a div but keep button styles
                    variant={isActive ? 'solid' : 'ghost'}
                    colorScheme={isActive ? 'teal' : 'gray'}
                    justifyContent="flex-start"
                    w="100%"
                  >
                    {navLink.label}
                  </Button>
                )}
              </Link>
            </Box>
          ))}
        </VStack>
      </Box>

      {/* Main Content Area */}
      <Box as="main" flex={1} p={8}>
        <Outlet />
      </Box>
    </Box>
  )
}
