# Digital Workplace App Template
An app template for our digital workplace full stack applications.

Built using Tanstack start & Chakra UI.

Project is structured following feature sliced design.

We use server functions primarily (basically RPCs) rather than traditional API routes for better type safety and simplicity.

If your app needs to expose a public API you can still do so in the routes folder but serverside app logic is best kept to server functions.

# UI Design
We fully embrace type safe component based design. Styles are handled by passing props and you should pretty much never need to define custom css. This will be familiar to you coming from powerapps, containers, vstack, etc are very similar to powerapp controls/positioning style.


# Get Started
https://www.chakra-ui.com/docs/get-started/cli
