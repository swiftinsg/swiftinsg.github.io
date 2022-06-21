<p align="center">
  <a href="https://swiftinsg.org">
    <img alt="Swift" src="./src/images/logo.png" width="100" />
  </a>
</p>
<h1 align="center">
  SIS Website
</h1>

## Getting Started

This website was created using [Gatsby](https://www.gatsbyjs.com/) which is built on top of React. If you are not familiar with React, I have left a few links at the bottom under `Learning` that you can use to get started.

This website also uses SCSS and Typescript instead of CSS and Javascript. Resources to learn those are at the bottom of this README too.

If you feel confident enough in React, Typescript and SCSS, feel free to follow the instructions below.

1. **Developing**

    Please create and push your changes to a new branch with the name of what you plan to add/change. For example, if you are adding a new page for reviews, create a branch called `new-reviews-page` and work off that. Once you are done with all the changes you plan to make, create a pull request to merge with the **`dev`** branch.

    Do **NOT** push directly to **`main`** or **`dev`**.

    ## Install NodeJS and NPM
    
    Download for your platform here: https://nodejs.org/en/download/

    ## Setup and Running

    Run these commands to get started working on this repo:

    ```shell
    $ npm i
    $ npm run develop
    ```

    The website should then be running at http://localhost:8000

    ## Troubleshooting

    Do note that if, for some reason, assets are not showing, try restarting the node server. Otherwise, run the following command to clear the cache and rebuild everything:

    ```sh
    $ npm run clean
    $ npm run develop
    ```

    Do note that this requires you to have [`gastby-cli` installed globally](https://www.npmjs.com/package/gatsby-cli)

2. **Deploying**

    **Only** the Webmaster should deploy any new changes. To anyone else, this section is irrelevant to you.

    To deploy your changes to https://swiftinsg.github.io/, just do this:

    ```shell
    $ npm run deploy
    ```

    Please also remember to commit and push your changes to `main` so the rest of us can see your changes.


## Learning

HTML, CSS and Javascript:
- [W3 Schools](https://w3schools.com)

React:
- [Tutorial](https://reactjs.org/tutorial/tutorial.html)
- [Documentation](https://reactjs.org/docs/getting-started.html)

Gatsby:
- [Tutorial](https://www.gatsbyjs.com/docs/tutorial/)
- [Documentation](https://www.gatsbyjs.com/docs/)

Typescript:
- [Tutorial (For those new to coding)](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- [Tutorial (For those that understand JS)](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [React Typescript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example)

SCSS:

If you understand CSS well, you can probably skip this. SCSS is very similar to CSS. We do not use SASS in this website.
- [Sass Basics](https://sass-lang.com/guide)
- [Documentation](https://sass-lang.com/documentation)

Remember, when in doubt, consult Google and Stack Overflow first.