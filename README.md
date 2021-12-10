# Reference Architecture Documentation

> This is the official Reference Architecture documentation for the Mojaloop project.

## Building and testing locally

Our updated docs currently live in the `./docs` directory

```bash
# install npm dependencies
yarn 

# run the local server
yarn run dev
```

## Building the project

Run `yarn run build` to build the project to render the static vuepress site for a deployment.

## Versioning

To version the current `next` document version found in the `./docs` folder, run the following command

```bash
npx vuepress version docs ${VERSION}
```

Example: `npx vuepress version docs 1.0.1`.

This will preserve the documents found in `./docs` to `./website/versioned_docs/1.0.1`.

This is managed by a [vuepress versioning plugin](https://titanium-docs-devkit.netlify.app/guide/versioning.html).

The latest version will automatically be loaded when access the website, with a version drop-down list appearing on the top left (next to the Mojaloop logo). Here you can select the different versions that have been archived in the `./vuepress/website/versioned_docs/` folder, with `next` representing the working folder `./docs`.

## Publishing

We deploy these docs automatically with CircleCI upon merges to the `main` branch.

Follow this link to see the live site: https://docs.mojaloop.io/reference-architecture-doc

The live site is hosted using git-pages, and is served from the [vue-pages](https://github.com/mojaloop/reference-architecture-doc/tree/vue-pages) branch of this repository.

### Deploying Manually

You can also deploy them manually, by running:

```bash
sh ./scripts/.publish-gh-pages.sh
```

Note that you will need write access to this Github repository.

## License

Apache License. Version 2.0
See [`./license`](./LICENSE.md) for more information.
