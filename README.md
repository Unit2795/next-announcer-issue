# next-announcer-issue

This is a minimal reproduction repository for an issue with Next.js where the aria-live route announcer does not announce navigation changes when using the `Link` component from `next/link` and navigating to a page with the same document title but a different path.

## Steps to Reproduce
1. Ensure you have a screen reader and node.js installed.
2. Clone the repository.
3. Install dependencies using `npm install`.
4. Run the development server using `npm run dev`.
5. Start your screen reader
6. Open the application in a web browser, you should see the homepage with a few link buttons.
7. Click on the "Test" link to navigate to the `/test` page
8. Observe that the screen reader announces the navigation change.
9. Click on the "Test with Subpath" link to navigate to the `/test/subpath` page.
10. Observe that the screen reader does not announce the navigation change.