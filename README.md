# reference-architecture-doc

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

### Deploying Manually

You can also deploy them manually, by running:

```bash
./scripts/_deploy_preview_s3.sh
```

Note that you need to have the `aws` cli, AWS access, and `aws-mfa` set up on your machine for this to work.

## License

Apache License. Version 2.0
See [`./license`](./LICENSE.md) for more information.
