# Project Structure

## Overview

The project follows a strict structure enforced with custom rules setup on our linter.

## Important Notes

- The `~` character is setup as an alias to the `src` folder in tsconfig.
- The location of TanStack Starts routing related boilerplate has been changed to fit feature sliced design. (See vite.config.ts)
- FSD segments are not enforced. Feel free to structure your slices how you want only layering/slicing rules are enforced.

## Feature Sliced Design

Feature sliced design is a project structure that combines vertical slicing with traditional horizontal layering.

The slices keep code cohesive while the layering ensures loose, clearly defined coupling between our cohesive slices.

I explain feature sliced design and try to provide some conxtual examples below, but you should absolutely read the official feature-sliced design docs as well. This can be overwhelming at first but a little pain today saves alot of pain tomorrow.

## Layers

### App

### Pages

### Features

### Entities

### Shared

## Slices

## Segments

## Advice

Dont expect to intuitively understand the structure immediately. It takes time to adjust to thinking in vertical slices, particularly when you throw layers into the mix.

Dont abstract for the sake of it. A vast majority of your work should happen in the Pages layer. You only ever move down a layer if you find yourself needing to reuse UI or have cross cutting logic between slices on the same layer.

Slices are everything. They are not just a single component, they are logical groupings of UI, Business Logic, and Server Logic.

Focus on pages, if you have logic that cuts across multiple pages, youre likely looking at a feature. For us that would often be things like approval processes.

Finally, you will often find you have entities that are used in multiple pages & features. Perhaps I have a request feature and a reminders feature. They both share in the use of the entities "Request" and "User". Since they are both on the features layer and cant import from one another, we should abstract the Request and User entities down a layer.