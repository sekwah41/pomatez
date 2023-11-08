# Changelog

## [1.4.0](https://github.com/sekwah41/pomatez/compare/v1.3.1...v1.4.0) (2023-11-08)


### Features ✨

* add base tauri app ([f1ee205](https://github.com/sekwah41/pomatez/commit/f1ee205cf010e6403ef4781295c14c98a1978ee4))
* make tauri version draggable ([bf891c5](https://github.com/sekwah41/pomatez/commit/bf891c5d7d2f4ca546943e7d1ebd68902973e33b))
* restructure connector in a way that allows easy switching out for platforms ([f4d8d77](https://github.com/sekwah41/pomatez/commit/f4d8d7714781e72f13b36b2231d0b5a7fdf390a1))
* **tauri:** add base connector with placeholders for logging ([67cb272](https://github.com/sekwah41/pomatez/commit/67cb272172337952f3c0f9e98554af45fab298c0))
* **tauri:** add closing logic ([f57caa0](https://github.com/sekwah41/pomatez/commit/f57caa005debd0aa78271c5f639f117b65e092c3))
* **tauri:** add easy command interface for frontend -&gt; backend ([69bab00](https://github.com/sekwah41/pomatez/commit/69bab0008b962a81d7908a4f9118d30b060f02fb))
* **tauri:** add global show and hide shortcuts as well as block reload ([d17b63d](https://github.com/sekwah41/pomatez/commit/d17b63d66abe19ef01a1dc000d1d6bdca7515611))
* **tauri:** add tray icon updating and a number of other commands ([dadf80f](https://github.com/sekwah41/pomatez/commit/dadf80f2ec9b6e1860021a33c5d99da83b011601))
* **tauri:** added connection hooks for all of the base tauri commands ([a325e0b](https://github.com/sekwah41/pomatez/commit/a325e0be081e1958a16760146baaa128cda85f13))
* **tauri:** always on top command ([f8c3cea](https://github.com/sekwah41/pomatez/commit/f8c3cea292aae4bae75f9c07a7b54bd4fbf625ef))
* **tauri:** auto updater ([dd1bf65](https://github.com/sekwah41/pomatez/commit/dd1bf652eeda0929cb1601c71ad5526f0c46f54d))
* **tauri:** compact mode resizing ([76ace97](https://github.com/sekwah41/pomatez/commit/76ace97c75875d0e15bf67902fc6c366d554e52b))
* **tauri:** debug menu in dev mode ([f1f4fc2](https://github.com/sekwah41/pomatez/commit/f1f4fc257b87a028a8d161a16de153c1ff5fb65e))
* **tauri:** full screen mode ([ba75f3d](https://github.com/sekwah41/pomatez/commit/ba75f3dcdee4afae1d30295a58a302feacd0e921))
* **tauri:** improve installer ([0b3df63](https://github.com/sekwah41/pomatez/commit/0b3df63371f4f323ea61e921ce1ca8734ce07cf6))
* **tauri:** pass the data from the frontend  into the commands ([2e8faf9](https://github.com/sekwah41/pomatez/commit/2e8faf9841d09db74e783b356d6ca14a94340ee6))


### Bug Fixes 🐛

* **tauri:** allow context menu on list titles ([efc7bd2](https://github.com/sekwah41/pomatez/commit/efc7bd28623c75d7791d638f8779dc4ed868573b))
* **tauri:** catch audio playing errors gracefully ([90d662a](https://github.com/sekwah41/pomatez/commit/90d662ab4a0cee61d6e3020ef4a465a18b49f272))
* **tauri:** fullscreen break being resizeable ([391f5b5](https://github.com/sekwah41/pomatez/commit/391f5b51c397e82db72f7f2f11483f460c0f73cd))
* **tauri:** update to tauri v2 (fixes audio) ([8d5a273](https://github.com/sekwah41/pomatez/commit/8d5a2739f0fd4e2b3da29b6330f07a66f472756f))

## [1.3.1](https://github.com/zidoro/pomatez/compare/v1.3.0...v1.3.1) (2023-10-19)

### Bug Fixes 🐛

- javascript error on launch ([#414](https://github.com/zidoro/pomatez/issues/414)) ([c6c18fb](https://github.com/zidoro/pomatez/commit/c6c18fb47b424be62a9b91ed64c7c95e8eaa41a3))
- **lang:** Switch "released notes" with "release notes" ([#439](https://github.com/zidoro/pomatez/issues/439)) ([d9a3afa](https://github.com/zidoro/pomatez/commit/d9a3afa11f828084483c1d1e3693ff9b0dc1c8e1))
- toast notification ([#382](https://github.com/zidoro/pomatez/issues/382)) ([25403d7](https://github.com/zidoro/pomatez/commit/25403d742d83d0d3654418a43bc5efe8316dc019))

## [1.3.0](https://github.com/zidoro/pomatez/compare/v1.2.3...v1.3.0) (2023-09-26)

### Features ✨

- add support for open at login in the settings tab ([f57e133](https://github.com/zidoro/pomatez/commit/f57e1335d59938d95c6de4455b96aafcc8a878a2))
- increase maximum focus time to 2 hours ([#383](https://github.com/zidoro/pomatez/issues/383)) ([3fc1493](https://github.com/zidoro/pomatez/commit/3fc14937ee4b08e74390fbd36eb115278f55f179))

### Bug Fixes 🐛

- compact mode layout broke with 120 minutes max timer config ([#393](https://github.com/zidoro/pomatez/issues/393)) ([c8c3c66](https://github.com/zidoro/pomatez/commit/c8c3c66460116aefe8a172b4237fa08b52583ffc))
- disable dragging for navigation links ([#387](https://github.com/zidoro/pomatez/issues/387)) ([a5b147f](https://github.com/zidoro/pomatez/commit/a5b147fbac812b2be6e92ce218841bfebe29d790))
- fix security issues ([bcbd65f](https://github.com/zidoro/pomatez/commit/bcbd65fa18d5f5531b20ab2ee0462b03ec766b5c)), closes [#407](https://github.com/zidoro/pomatez/issues/407)
- notification type selection issue in settings ([04ddca1](https://github.com/zidoro/pomatez/commit/04ddca16023bfea1b6496d41769ee7715700354d))

## [1.2.3](https://github.com/zidoro/pomatez/compare/v1.2.2...v1.2.3) (2023-05-03)

### Bug Fixes 🐛

- **app/renderer:** fix linter warnings that causes CI test build failing ([26edd59](https://github.com/zidoro/pomatez/commit/26edd59b26155954208fafc0dc3d933501c11bc9))
- Set Application Menu to Fix Mac Shortcuts ([0e6d47f](https://github.com/zidoro/pomatez/commit/0e6d47f0eb166256f914494518b4ea9e63160c06))

## [1.2.2](https://github.com/zidoro/pomatez/compare/v1.2.1...v1.2.2) (2022-12-21)

### Bug Fixes 🐛

- missing app icon ([c0617bd](https://github.com/zidoro/pomatez/commit/c0617bdee55923aad9da4fc09e1238c966f77958))

## [1.2.1](https://github.com/zidoro/pomatez/compare/v1.2.1...v1.2.1) (2022-12-20)

### Changes to Existing Features 🔧

- increase max rounds to 10 ([#241](https://github.com/zidoro/pomatez/issues/241)) ([270701d](https://github.com/zidoro/pomatez/commit/270701db906ca314a552c8ea629f6ce083424cd8))

### Miscellaneous Chores

- this is just to try and trigger the right release version ([2f6fb49](https://github.com/zidoro/pomatez/commit/2f6fb49c77694d99cdb0e26a5765688834841cf6))

### Features ✨

- added compact mode ([#178](https://github.com/zidoro/pomatez/issues/178)) ([c057c11](https://github.com/zidoro/pomatez/commit/c057c11b88122b8bac90867738b1c4319ad7a8ae))
- allow other UI to scale to the new resizeable mode ([dee69fe](https://github.com/zidoro/pomatez/commit/dee69fe70020913f407fd8ae0c06698afa81649d))
- allow the window to be resized and app to scale ([9bd0128](https://github.com/zidoro/pomatez/commit/9bd0128120fccd8e9c6810a50434700f14a4cc17))
- **compact mode:** prevent user from resizing the window ([dd69232](https://github.com/zidoro/pomatez/commit/dd69232cee804ced9a51566512b196a902453bb4))
- **website:** update downloadable installer version ([cd1b1cd](https://github.com/zidoro/pomatez/commit/cd1b1cdaccf0ff8d17a1dcff4cd6d2f8f3536bcc))

### Bug Fixes 🐛

- app icon on mac ([ce12ace](https://github.com/zidoro/pomatez/commit/ce12ace0701f2e4bce298c5b8ae0e9533fb89afd))
- **app:** invalid .desktop category mentioned here [#127](https://github.com/zidoro/pomatez/issues/127) ([534db41](https://github.com/zidoro/pomatez/commit/534db4111b1969cec953e9545c0d3f1d724c13c6))
- **app:** try to fix issue [#106](https://github.com/zidoro/pomatez/issues/106) ([1061494](https://github.com/zidoro/pomatez/commit/1061494f96dff436564001ae49aac8153687176b))
- broken styles during compact mode ([b142a47](https://github.com/zidoro/pomatez/commit/b142a47ade65196be406bf78529ce10f723ca012))
- bump version for main package.json (was resulting in wrong release version) ([c1530ce](https://github.com/zidoro/pomatez/commit/c1530ce20b3e340237c6857a6eac4eba0aead6e9))
- center add card element creating started ([6d4ce16](https://github.com/zidoro/pomatez/commit/6d4ce16f7160dfd2240d58703c5a37d472d9e34e))
- change help links cursor to pointer ([930e79a](https://github.com/zidoro/pomatez/commit/930e79aad7fa2fec154a8565c8570499f7b51cf4)), closes [#167](https://github.com/zidoro/pomatez/issues/167)
- don't close cards when clicking as its easy to lose info ([8394249](https://github.com/zidoro/pomatez/commit/839424935bdb74446d11c0c11fabba399146b41f))
- drag logic for logo on title bar ([460090b](https://github.com/zidoro/pomatez/commit/460090b8f015c696fe6cffa6823fffd322ae9a5a))
- exiting fullscreen error on linux ([a08ec7a](https://github.com/zidoro/pomatez/commit/a08ec7abca7eaba3ed7eeb1bf3e1f5d9ebb5c47a))
- explicitly define security policy to stop electron complaining ([d19fead](https://github.com/zidoro/pomatez/commit/d19fead0fde4a778afcbb62e92f38544ff01b175))
- flag extra files for version bumps ([a9b2a31](https://github.com/zidoro/pomatez/commit/a9b2a319f20563b15325a734e3fa167faab81dc2))
- fullscreen break escape key issue ([b4affbb](https://github.com/zidoro/pomatez/commit/b4affbb3d70421be5383669afd9337c44d763a72))
- lower electron version as bumping causes release build failures ([dff7116](https://github.com/zidoro/pomatez/commit/dff7116286907b0d80e397661c907856a78ff897))
- lower uuid version to fix lib export issue ([fd30315](https://github.com/zidoro/pomatez/commit/fd303150b853964e2a4bd425f0104804dc4b5866))
- mac fullscreen break ([42dd82d](https://github.com/zidoro/pomatez/commit/42dd82d3d37cd71e6e4ff63aafaea39427a6fe1a))
- make tasks not edit when clicking contained links ([7b4de89](https://github.com/zidoro/pomatez/commit/7b4de89bab6421561bba63fa146dcfd3fdc2a49f))
- make the settings menu vertically resize ([eec4ef0](https://github.com/zidoro/pomatez/commit/eec4ef0372e1979a856832ce3c0333dbb2c5bc1b))
- min size not respected when coming out of compact mode ([1d3171f](https://github.com/zidoro/pomatez/commit/1d3171f24b216892fe08da3b266f96948dc5588a))
- range slider visual bug on window resized ([365fda3](https://github.com/zidoro/pomatez/commit/365fda3e8d116a22c301142dabbd48e6e5ffed26))
- re-enable resizeable as it may be causing issues on ubuntu ([e7befeb](https://github.com/zidoro/pomatez/commit/e7befeb933119ae616d7a93de22267f98f645d31))
- styling issues with compact mode + fullscreen ([3cb1725](https://github.com/zidoro/pomatez/commit/3cb1725f201f38fd0b37fe10fed75d5c1e829a92))
- task links not opening in new windows ([a32807f](https://github.com/zidoro/pomatez/commit/a32807f757315606b3c2c2048f3d85f8a794ad8b))
- timer task preview size ([5ed1275](https://github.com/zidoro/pomatez/commit/5ed12752f8de3a30694582ea6a24d138b1e721d5))
- update to electron 18 to avoid gpu issues on certain linux distros ([bcd4755](https://github.com/zidoro/pomatez/commit/bcd475596c689b7d13fd179a54373a1ca3c5ae24))
- **website:** force render on client-side ([#206](https://github.com/zidoro/pomatez/issues/206)) ([fb9f111](https://github.com/zidoro/pomatez/commit/fb9f111b65737fc5d6f317704618df819d8cc7f3))
- **website:** remove canonical link as because it's unnecessary ([a4cd6ba](https://github.com/zidoro/pomatez/commit/a4cd6babcc9ece0854a60423857f1155ba500c0b))
- **website:** remove the clean script on predeploy ([065a0a6](https://github.com/zidoro/pomatez/commit/065a0a695f6641da731ded84c45dfcb39a54bb5e))
- **website:** scrolling issues ([0649dcf](https://github.com/zidoro/pomatez/commit/0649dcf92cda2f27d948e7755d9dc01925b54ca6))
- window randomly vanishing on mac after minimise ([fbfaca9](https://github.com/zidoro/pomatez/commit/fbfaca95a2788a3e4dc02e5d04fe6b18fe572679))
- windows full screen mode issues ([55344a2](https://github.com/zidoro/pomatez/commit/55344a2c97c7ab064a565cc7973663469aff5ff1))

### [1.2.1](https://github.com/zidoro/pomatez/compare/root-v1.2.0...root-v1.2.1) (2022-04-14)

### Features ✨

- added compact mode ([#178](https://github.com/zidoro/pomatez/issues/178)) ([c057c11](https://github.com/zidoro/pomatez/commit/c057c11b88122b8bac90867738b1c4319ad7a8ae))
- **website:** update downloadable installer version ([cd1b1cd](https://github.com/zidoro/pomatez/commit/cd1b1cdaccf0ff8d17a1dcff4cd6d2f8f3536bcc))

### Changes to Existing Features 🔧

- increase max rounds to 10 ([#241](https://github.com/zidoro/pomatez/issues/241)) ([270701d](https://github.com/zidoro/pomatez/commit/270701db906ca314a552c8ea629f6ce083424cd8))

### Bug Fixes 🐛

- **app:** invalid .desktop category mentioned here [#127](https://github.com/zidoro/pomatez/issues/127) ([534db41](https://github.com/zidoro/pomatez/commit/534db4111b1969cec953e9545c0d3f1d724c13c6))
- **app:** try to fix issue [#106](https://github.com/zidoro/pomatez/issues/106) ([1061494](https://github.com/zidoro/pomatez/commit/1061494f96dff436564001ae49aac8153687176b))
- bump version for main package.json (was resulting in wrong release version) ([c1530ce](https://github.com/zidoro/pomatez/commit/c1530ce20b3e340237c6857a6eac4eba0aead6e9))
- change help links cursor to pointer ([930e79a](https://github.com/zidoro/pomatez/commit/930e79aad7fa2fec154a8565c8570499f7b51cf4)), closes [#167](https://github.com/zidoro/pomatez/issues/167)
- flag extra files for version bumps ([a9b2a31](https://github.com/zidoro/pomatez/commit/a9b2a319f20563b15325a734e3fa167faab81dc2))
- lower electron version as bumping causes release build failures ([dff7116](https://github.com/zidoro/pomatez/commit/dff7116286907b0d80e397661c907856a78ff897))
- **website:** force render on client-side ([#206](https://github.com/zidoro/pomatez/issues/206)) ([fb9f111](https://github.com/zidoro/pomatez/commit/fb9f111b65737fc5d6f317704618df819d8cc7f3))
- **website:** remove canonical link as because it's unnecessary ([a4cd6ba](https://github.com/zidoro/pomatez/commit/a4cd6babcc9ece0854a60423857f1155ba500c0b))
- **website:** remove the clean script on predeploy ([065a0a6](https://github.com/zidoro/pomatez/commit/065a0a695f6641da731ded84c45dfcb39a54bb5e))
- **website:** scrolling issues ([0649dcf](https://github.com/zidoro/pomatez/commit/0649dcf92cda2f27d948e7755d9dc01925b54ca6))

### Miscellaneous Chores

- this is just to try and trigger the right release version ([2f6fb49](https://github.com/zidoro/pomatez/commit/2f6fb49c77694d99cdb0e26a5765688834841cf6))

## [1.2.0](https://github.com/zidoro/pomatez/compare/root-v1.1.0...root-v1.2.0) (2022-04-11)

### Features ✨

- added compact mode ([#178](https://github.com/zidoro/pomatez/issues/178)) ([c057c11](https://github.com/zidoro/pomatez/commit/c057c11b88122b8bac90867738b1c4319ad7a8ae))
- **website:** update downloadable installer version ([cd1b1cd](https://github.com/zidoro/pomatez/commit/cd1b1cdaccf0ff8d17a1dcff4cd6d2f8f3536bcc))

### Bug Fixes 🐛

- **app:** invalid .desktop category mentioned here [#127](https://github.com/zidoro/pomatez/issues/127) ([534db41](https://github.com/zidoro/pomatez/commit/534db4111b1969cec953e9545c0d3f1d724c13c6))
- **app:** try to fix issue [#106](https://github.com/zidoro/pomatez/issues/106) ([1061494](https://github.com/zidoro/pomatez/commit/1061494f96dff436564001ae49aac8153687176b))
- change help links cursor to pointer ([930e79a](https://github.com/zidoro/pomatez/commit/930e79aad7fa2fec154a8565c8570499f7b51cf4)), closes [#167](https://github.com/zidoro/pomatez/issues/167)
- **website:** force render on client-side ([#206](https://github.com/zidoro/pomatez/issues/206)) ([fb9f111](https://github.com/zidoro/pomatez/commit/fb9f111b65737fc5d6f317704618df819d8cc7f3))
- **website:** remove canonical link as because it's unnecessary ([a4cd6ba](https://github.com/zidoro/pomatez/commit/a4cd6babcc9ece0854a60423857f1155ba500c0b))
- **website:** remove the clean script on predeploy ([065a0a6](https://github.com/zidoro/pomatez/commit/065a0a695f6641da731ded84c45dfcb39a54bb5e))
- **website:** scrolling issues ([0649dcf](https://github.com/zidoro/pomatez/commit/0649dcf92cda2f27d948e7755d9dc01925b54ca6))

### Changes to Existing Features 🔧

- increase max rounds to 10 ([#241](https://github.com/zidoro/pomatez/issues/241)) ([270701d](https://github.com/zidoro/pomatez/commit/270701db906ca314a552c8ea629f6ce083424cd8))
