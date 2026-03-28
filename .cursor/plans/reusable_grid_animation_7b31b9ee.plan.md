---
name: Reusable Grid Animation
overview: Extract the grid animation into a highly reusable React component that accepts images and timing configurations as props.
todos:
  - id: provide-code
    content: Provide the refactored AnimatedImageGrid component code to the user
    status: completed
isProject: false
---

# Reusable Grid Animation Component

I have refactored the preloader code into a standalone, reusable `AnimatedImageGrid` component. 

This component now accepts:

- `images`: An array of image URLs to display in the grid.
- `onComplete`: An optional callback function that fires when the animation finishes.
- `inDuration`, `outDuration`, `holdDuration`: Optional timing controls to adjust the speed of the animation.

You can use this anywhere in your app by passing it an array of images!