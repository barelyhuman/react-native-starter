# react-native-starter

This is a personal starter and while could be used as an inspiration, this may
or maynot be the best starting point for you.

## Stuff in here

### Direct Deps

- @react-navigation
- react-native-flash-message
- styled-components
- styled-system
- zustand

### Dev deps

- Prettier (`@barelyhuman/prettier-config`)
- Eslint
- PNPM

## Usage

1. Creating a new project is as simple as

```sh
degit barelyhuman/react-native-starter <project-name>
npx react-native-rename <project-name> -b <bundle/package-name>
```

2. Then we need to setup your system to be able to make sure that's consistent
   for both dev and CI. Feel free to add a setup script for your particular
   linux distro and raise a PR

**Arch**

```sh
./scripts/setup-arch.sh
```

**Ubuntu**

```sh
./scripts/setup-ubuntu.sh
```

**Mac**

```sh
./scripts/setup-mac.sh
```

3. Post setup, you can start but make sure you install react native
   dependencies.

> **Note**: The repo uses pnpm, so make sure you have pnpm installed (the setup
> scripts will take care of it)

```sh
pnpm i
pnpx pod-install

# run ios
pnpm ios

# run android
pnpm android
```

## License

[MIT](/license)
