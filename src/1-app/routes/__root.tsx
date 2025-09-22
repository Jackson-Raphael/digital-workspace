// src/routes/__root.tsx
// https://tanstack.com/start/latest/docs/framework/react/build-from-scratch
// https://chakra-ui.com/docs/theming/overview

/// <reference types="vite/client" />
import type { ReactNode } from 'react';
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router';
import {
  ChakraProvider
} from '@chakra-ui/react';
import { system } from '~/1-app/theme';

// Define the Root Route for TanStack Router
export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start with Chakra UI v3',
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <ChakraProvider value={system}>
        <Outlet />
      </ChakraProvider>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
