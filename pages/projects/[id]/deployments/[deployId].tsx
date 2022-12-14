import {
  Button,
  Grid,
  Box,
  Flex,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { Select, Input } from "../../../../components/composites";
import ProjectLayout from "../../../../components/projects/project-layout";
import { BsTrash } from "react-icons/bs";
import ModalComponent from "../../../../components/composites/modal";

const EnvSettings: NextPage = () => {
  const modalDisclosure = useDisclosure();
  return (
    <>
      <ProjectLayout
        breadcrumbs={[
          {
            name: "Home",
            to: "/",
          },
          {
            name: "Projects",
            to: "/projects",
          },
          {
            name: "gluestack",
            to: "/projects/22",
          },
          {
            name: "Deployments",
            to: "/projects/22/deployments",
          },
          {
            name: "#24",
            to: "/projects/22/deployments",
          },
        ]}
        project={{
          name: "gluestack project",
          desc: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              quia eligendi corporis nostrum reprehenderit repudiandae, enim
              consequuntur nobis veniam sequi ipsum, placeat porro quae beatae
              sit dolor perspiciatis ratione quam.`,
        }}
        page={{
          title: "Deployment #24",
          desc: "View all the logs for deplyments",
          actionButton: <></>,
        }}
      >
        <Grid my={4} gap={4}>
          <Box bg="gray.200" borderRadius="md" px={4} overflowX="auto">
            <pre>
              {`
10:43:17 AM: Build ready to start
10:43:19 AM: build-image version: d2c6dbeac570350a387d832f64bc980dc964ad65 (focal)
10:43:19 AM: build-image tag: v4.8.0
10:43:19 AM: buildbot version: 4aaa27647e859c2d38cfbb25901ceae1e7f3eeae
10:43:19 AM: Fetching cached dependencies
10:43:19 AM: Failed to fetch cache, continuing with build
10:43:19 AM: Starting to prepare the repo for build
10:43:19 AM: No cached dependencies found. Cloning fresh repo
10:43:19 AM: git clone git@gitlab.com:ashishb1/solidjs-todo-app
10:43:20 AM: Preparing Git Reference refs/heads/feat/managing-the-state-in-separate-store
10:43:21 AM: Parsing package.json dependencies
10:43:21 AM: Starting build script
10:43:22 AM: Installing dependencies
10:43:22 AM: Python version set to 2.7
10:43:22 AM: Downloading and installing node v16.15.1...
10:43:22 AM: Downloading https://nodejs.org/dist/v16.15.1/node-v16.15.1-linux-x64.tar.xz...
10:43:23 AM: Computing checksum with sha256sum
10:43:23 AM: Checksums matched!
10:43:25 AM: Now using node v16.15.1 (npm v8.11.0)
10:43:25 AM: Started restoring cached build plugins
10:43:25 AM: Finished restoring cached build plugins
10:43:25 AM: Attempting ruby version 2.7.2, read from environment
10:43:26 AM: Using ruby version 2.7.2
10:43:26 AM: Using PHP version 8.0
10:43:26 AM: Started restoring cached yarn cache
10:43:26 AM: Finished restoring cached yarn cache
10:43:27 AM: No yarn workspaces detected
10:43:27 AM: Started restoring cached node modules
10:43:27 AM: Finished restoring cached node modules
10:43:27 AM: Installing NPM modules using Yarn version 1.22.10
10:43:27 AM: npm WARN config tmp This setting is no longer used.  npm stores temporary files in a special
10:43:27 AM: npm WARN config location in the cache, and they are managed by
10:43:27 AM: npm WARN config     [](http://npm.im/cacache).
10:43:27 AM: yarn install v1.22.10
10:43:27 AM: [1/4] Resolving packages...
10:43:27 AM: [2/4] Fetching packages...
10:43:30 AM: info fsevents@2.3.2: The platform "linux" is incompatible with this module.
10:43:30 AM: info "fsevents@2.3.2" is an optional dependency and failed compatibility check. Excluding it from installation.
10:43:30 AM: info esbuild-android-64@0.14.42: The platform "linux" is incompatible with this module.
10:43:30 AM: info "esbuild-android-64@0.14.42" is an optional dependency and failed compatibility check. Excluding it from installation.
10:43:30 AM: info esbuild-android-arm64@0.14.42: The platform "linux" is incompatible with this module.
10:43:30 AM: info "esbuild-android-arm64@0.14.42" is an optional dependency and failed compatibility check. Excluding it from installation.
10:43:30 AM: info esbuild-android-arm64@0.14.42: The CPU architecture "x64" is incompatible with this module.
10:43:30 AM: info esbuild-darwin-64@0.14.42: The platform "linux" is incompatible with this module.
10:43:30 AM: info "esbuild-darwin-64@0.14.42" is an optional dependency and failed compatibility check. Excluding it from installation.
10:43:30 AM: info esbuild-darwin-arm64@0.14.42: The platform "linux" is incompatible with this module.
10:43:30 AM: info "esbuild-darwin-arm64@0.14.42" is an optional dependency and failed compatibility check. Excluding it from installation.
10:43:30 AM: info esbuild-darwin-arm64@0.14.42: The CPU architecture "x64" is incompatible with this module.
10:43:30 AM: info esbuild-freebsd-64@0.14.42: The platform "linux" is incompatible with this module.
10:43:30 AM: info "esbuild-freebsd-64@0.14.42" is an optional dependency and failed compatibility check. Excluding it from installation.
10:43:30 AM: info esbuild-freebsd-arm64@0.14.42: The platform "linux" is incompatible with this module.
10:43:30 AM: info "esbuild-freebsd-arm64@0.14.42" is an optional dependency and failed compatibility check. Excluding it from installation.
10:43:30 AM: info esbuild-freebsd-arm64@0.14.42: The CPU architecture "x64" is incompatible with this module.
10:43:30 AM: info esbuild-linux-32@0.14.42: The CPU architecture "x64" is incompatible with this module.
10:43:30 AM: info "esbuild-linux-32@0.14.42" is an optional dependency and failed compatibility check. Excluding it from installation.
10:43:30 AM: info esbuild-linux-arm@0.14.42: The CPU architecture "x64" is incompatible with this module.
10:43:30 AM: info "esbuild-linux-arm@0.14.42" is an optional dependency and failed compatibility check. Excluding it from installation.
10:43:30 AM: info esbuild-linux-arm64@0.14.42: The CPU architecture "x64" is incompatible with this module.
10:43:30 AM: info "esbuild-linux-arm64@0.14.42" is an optional dependency and failed compatibility check. Excluding it from installation.
10:43:30 AM: info esbuild-linux-mips64le@0.14.42: The CPU architecture "x64" is incompatible with this module.
10:43:30 AM: info "esbuild-linux-mips64le@0.14.42" is an optional dependency and failed compatibility check. Excluding it from installation.
10:43:30 AM: info esbuild-linux-ppc64le@0.14.42: The CPU architecture "x64" is incompatible with this module.
10:43:30 AM: info "esbuild-linux-ppc64le@0.14.42" is an optional dependency and failed compatibility check. Excluding it from installation.
10:43:30 AM: info esbuild-linux-riscv64@0.14.42: The CPU architecture "x64" is incompatible with this module.
10:43:30 AM: info "esbuild-linux-riscv64@0.14.42" is an optional dependency and failed compatibility check. Excluding it from installation.
10:43:30 AM: info esbuild-linux-s390x@0.14.42: The CPU architecture "x64" is incompatible with this module.
10:43:30 AM: info "esbuild-linux-s390x@0.14.42" is an optional dependency and failed compatibility check. Excluding it from installation.
10:43:30 AM: info esbuild-netbsd-64@0.14.42: The platform "linux" is incompatible with this module.
10:43:30 AM: info "esbuild-netbsd-64@0.14.42" is an optional dependency and failed compatibility check. Excluding it from installation.
10:43:30 AM: info esbuild-openbsd-64@0.14.42: The platform "linux" is incompatible with this module.
10:43:30 AM: info "esbuild-openbsd-64@0.14.42" is an optional dependency and failed compatibility check. Excluding it from installation.
10:43:30 AM: info esbuild-sunos-64@0.14.42: The platform "linux" is incompatible with this module.
10:43:30 AM: info "esbuild-sunos-64@0.14.42" is an optional dependency and failed compatibility check. Excluding it from installation.
10:43:30 AM: info esbuild-windows-32@0.14.42: The platform "linux" is incompatible with this module.
10:43:30 AM: info "esbuild-windows-32@0.14.42" is an optional dependency and failed compatibility check. Excluding it from installation.
10:43:30 AM: info esbuild-windows-32@0.14.42: The CPU architecture "x64" is incompatible with this module.
10:43:30 AM: info esbuild-windows-64@0.14.42: The platform "linux" is incompatible with this module.
10:43:30 AM: info "esbuild-windows-64@0.14.42" is an optional dependency and failed compatibility check. Excluding it from installation.
10:43:30 AM: info esbuild-windows-arm64@0.14.42: The platform "linux" is incompatible with this module.
10:43:30 AM: info "esbuild-windows-arm64@0.14.42" is an optional dependency and failed compatibility check. Excluding it from installation.
10:43:30 AM: info esbuild-windows-arm64@0.14.42: The CPU architecture "x64" is incompatible with this module.
10:43:30 AM: [3/4] Linking dependencies...
10:43:30 AM: warning " > bootstrap@4.6.1" has unmet peer dependency "jquery@1.9.1 - 3".
10:43:30 AM: warning " > bootstrap@4.6.1" has unmet peer dependency "popper.js@^1.16.1".
10:43:31 AM: [4/4] Building fresh packages...
10:43:31 AM: Done in 3.61s.
10:43:31 AM: NPM modules installed using Yarn
10:43:31 AM: Started restoring cached go cache
10:43:31 AM: Finished restoring cached go cache
10:43:31 AM: go version go1.16.5 linux/amd64
10:43:31 AM: go version go1.16.5 linux/amd64
10:43:31 AM: Installing missing commands
10:43:31 AM: Verify run directory
10:43:32 AM: ​
10:43:32 AM: ────────────────────────────────────────────────────────────────
10:43:32 AM:   Netlify Build                                                 
10:43:32 AM: ────────────────────────────────────────────────────────────────
10:43:32 AM: ​
10:43:32 AM: ❯ Version
10:43:32 AM:   @netlify/build 27.1.3
10:43:32 AM: ​
10:43:32 AM: ❯ Flags
10:43:32 AM:   baseRelDir: true
10:43:32 AM:   buildId: 6299986d6e9da51f717d86f3
10:43:32 AM:   deployId: 6299986d6e9da51f717d86f5
10:43:32 AM: ​
10:43:32 AM: ❯ Current directory
10:43:32 AM:   /opt/build/repo
10:43:32 AM: ​
10:43:32 AM: ❯ Config file
10:43:32 AM:   No config file was defined: using default values.
10:43:32 AM: ​
10:43:32 AM: ❯ Context
10:43:32 AM:   production
10:43:32 AM: ​
10:43:32 AM: ────────────────────────────────────────────────────────────────
10:43:32 AM:   1. Build command from Netlify app                             
10:43:32 AM: ────────────────────────────────────────────────────────────────
10:43:32 AM: ​
10:43:32 AM: $ yarn build
10:43:32 AM: yarn run v1.22.10
10:43:32 AM: $ vite build
10:43:33 AM: vite v2.9.9 building for production...
10:43:34 AM: Creating deploy upload records
10:43:33 AM: transforming...
10:43:33 AM: ✓ 24 modules transformed.
10:43:34 AM: rendering chunks...
10:43:34 AM: dist/assets/favicon.0e726a38.ico   14.73 KiB
10:43:34 AM: dist/index.html                    0.58 KiB
10:43:34 AM: dist/assets/index.9fa0578c.js      12.59 KiB / gzip: 5.22 KiB
10:43:34 AM: dist/assets/index.30f0e63e.css     157.30 KiB / gzip: 23.53 KiB
10:43:34 AM: Done in 1.17s.
10:43:34 AM: ​
10:43:34 AM: (build.command completed in 1.3s)
10:43:34 AM: ​
10:43:34 AM: ────────────────────────────────────────────────────────────────
10:43:34 AM:   2. Deploy site                                                
10:43:34 AM: ────────────────────────────────────────────────────────────────
10:43:34 AM: ​
10:43:34 AM: Starting post processing
10:43:34 AM: Starting to deploy site from 'dist'
10:43:34 AM: Creating deploy tree 
10:43:34 AM: 3 new files to upload
10:43:34 AM: 0 new functions to upload
10:43:34 AM: Post processing - HTML
10:43:34 AM: Site deploy was successfully initiated
10:43:34 AM: ​
10:43:34 AM: (Deploy site completed in 583ms)
10:43:34 AM: ​
10:43:34 AM: ────────────────────────────────────────────────────────────────
10:43:34 AM:   Netlify Build Complete                                        
10:43:34 AM: ────────────────────────────────────────────────────────────────
10:43:34 AM: ​
10:43:34 AM: (Netlify Build completed in 1.9s)
10:43:34 AM: Caching artifacts
10:43:35 AM: Post processing - header rules
10:43:34 AM: Started saving node modules
10:43:34 AM: Finished saving node modules
10:43:34 AM: Started saving build plugins
10:43:34 AM: Finished saving build plugins
10:43:35 AM: Post processing - redirect rules
10:43:34 AM: Started saving yarn cache
10:43:35 AM: Finished saving yarn cache
10:43:35 AM: Started saving pip cache
10:43:35 AM: Post processing done
10:43:35 AM: Finished saving pip cache
10:43:35 AM: Started saving emacs cask dependencies
10:43:35 AM: Finished saving emacs cask dependencies
10:43:35 AM: Started saving maven dependencies
10:43:35 AM: Finished saving maven dependencies
10:43:35 AM: Started saving boot dependencies
10:43:35 AM: Finished saving boot dependencies
10:43:35 AM: Started saving rust rustup cache
10:43:35 AM: Finished saving rust rustup cache
10:43:35 AM: Started saving go dependencies
10:43:35 AM: Finished saving go dependencies
10:43:36 AM: Build script success
10:43:38 AM: Site is live ✨
10:44:05 AM: Finished processing build request in 46.004482216s
              `}
            </pre>
          </Box>
        </Grid>
      </ProjectLayout>
    </>
  );
};

export default EnvSettings;
