# Reference Architecture Documentation

> This is the official Reference Architecture documentation for the Mojaloop project.

## Building and testing locally

Our updated docs currently live in the `./vuepress` directory

```bash
cd ./vuepress

# install npm dependencies
yarn 

# run the local server
yarn run dev
```

## Building the project

Run `yarn run build` to build the project to render the static vuepress site for a deployment.

## Versioning

To version the current `next` document version found in the `./vuepress/docs` folder, run the following command

```bash
npx vuepress version docs ${VERSION}
```

Example: `npx vuepress version docs 1.0.1`.

This will preserve the documents found in `./vuepress/docs` to `./vuepress/website/versioned_docs/1.0.1`.

This is managed by a [vuepress versioning plugin](https://titanium-docs-devkit.netlify.app/guide/versioning.html).

The latest version will automatically be loaded when access the website, with a version drop-down list appearing on the top left (next to the Mojaloop logo). Here you can select the different versions that have been archived in the `./vuepress/website/versioned_docs/` folder, with `next` representing the working folder `./vuepress/docs`.

## Publishing

We deploy these docs automatically with CircleCI upon merges to the `main` branch.

Go to: https://ref-arch-docs.moja-lab.live/ to see the live site!

The deploy script does not currently take versioning into account, but will in the future.

> Note: for this to work, we have temporarily disabled the "only build pull requests" setting on Circleci
> Someone please remember to turn that back on!

### Deploying Manually

You can also deploy them manually, by running:

```bash
./scripts/_deploy_preview_s3.sh
```

Note that you need to have the `aws` cli, AWS access, and `aws-mfa` set up on your machine for this to work.

## License

Apache License. Version 2.0
See [`./license`](./LICENSE.md) for more information.
