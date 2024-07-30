# How to Add New Icons

👋 In this guide, we'll walk you through the process of adding new icons to our project. 🎉

## Folder Structure

To keep things organized, each icon should have its own folder. Name the icon in correspondence with Figma. The folder's name should match the name of the icon itself. Inside the folder, you'll find an `Index.tsx` file that exports the React component from the `[Icon].tsx` file. Easy peasy! 😄

## Optimizing SVGs

Getting the vector graphic of the icon is as easy as finding the right icon in Figma, selecting the parent group (should always be 32x32) and exporting by using the feature 'Copy as SVG'. Before adding the icons, it's essential to optimize their SVG files. We recommend using [SVG Viewer](https://www.svgviewer.dev/svg-to-react-jsx) to optimize your SVGs for React JSX. This tool will ensure our icons look crisp and load lightning fast! 💨

Remember!
Make sure to avoid hard-coding the fill property of the SVG, and rather implement it using ```fill={color ?? '#000'}```.
Every [Icon].tsx also needs to include ```{children}```.

## Icon Types

Icons also have types, which need to be added to the `frontend/src/components/Icon/types.ts` file. Make sure to follow the existing format when adding the new icon type. When adding a type, keep the list in alphabetical order. Keeping things consistent makes life easier for everyone! 👍

## The Icon Component

Now, let's talk about the heart of our icons, the `Icon` component! This component lives in `frontend/src/components/Icon/Icon.tsx`. When adding a new icon, make sure to update this file to include the new icon type. Keeping all the icons in one place makes maintenance a breeze! 🌬️

## Icon Stories

Every good icon has a story to tell, and our `Icon` component is no exception! You can find the stories for all our icons in `frontend/src/components/Icon/Icon.stories.tsx`. When adding a new icon, don't forget to create a corresponding story. We love hearing tales from our icons! 📚✨

That's it! 🎉 You're now ready to add new icons to our project. Remember to keep things organized, optimize those SVGs, and don't forget to give our icons a voice through their stories. Happy coding! 💻😄

## Colouring Icons

:construction:

[//]: # (This section should detail the color, fill, stroke pattern when implemented. Maybe with a quick diagram)

## Caveats

There are a few things to note when using icons that are not within the relevant readme. These are, but not limited to:
- The icons' viewBox should always be `0 0 32 32` **when exported from figma**.
	- Do _not_ change the viewBox in the svg file itself. It should always come correctly from Figma.
- The IconComponent is of type `svg`. This means that icons should be treated like any _HTML_ element.
	- For example, the icons accept the `css` property from _styled-components_, rather than `inputCss` for React components.