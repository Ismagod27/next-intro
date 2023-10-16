# next-intro
Ismanol Ramírez 2020-0098

## EsLint
ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

ESLint is completely pluggable. Every single rule is a plugin and you can add more at runtime. You can also add community plugins, configurations, and parsers to extend the functionality of ESLint.

## Tailwind CSS
Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

It's fast, flexible, and reliable — with zero-runtime.

## Project Organization and File Colocation

**Safe colocation by default**

-In the app directory, nested folder hierarchy defines route structure.

-Each folder represents a route segment that is mapped to a corresponding segment in a URL path.

-However, even though route structure is defined through folders, a route is not publicly accessible until a page.js or route.js file is added to a route segment.

**Project organization features**

Next.js provides several features to help you organize your project.

-Private folders can be created by prefixing a folder with an underscore: _folderName

-This indicates the folder is a private implementation detail and should not be considered by the routing system, thereby opting the folder and all its subfolders out of routing.

Since files in the app directory can be safely colocated by default, private folders are not required for colocation. However, they can be useful for:

-Separating UI logic from routing logic.
-Consistently organizing internal files across a project and the Next.js ecosystem.
-Sorting and grouping files in code editors.
-Avoiding potential naming conflicts with future Next.js file conventions.


