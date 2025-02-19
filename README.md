# UnoCSS Align with TailwindV4

This is a proof-of-concept repository, but it is also the direction I am working on. Due to the massive disruptive changes in [`TailwindCSS`  `V4`](https://tailwindcss.com/docs/v4-beta), I decided to align `UnoCSS` with `TailwindCSS` `V4`. This is a huge project, but I will do my best.

## Roadmap

- [x] Rules
  - [x] align
  - [x] behaviors
  - [x] border
  - [x] color
  - [x] container
  - [x] decoration
  - [x] flex
  - [x] gap
  - [x] grid
  - [x] layout
  - [x] position
  - [x] question-mark
  - [x] ring
  - [x] shadow
  - [x] size
  - [x] spacing
  - [x] static
  - [x] svg
  - [x] transform
  - [x] transition
  - [x] typography
  - [x] variable
  - PresetWind3
    - [x] animation
    - [x] background
    - [x] behaviors
    - [x] columns
    - [x] container
    - [ ] divide
    - [x] filter
    - [x] line-clamp
    - [x] placeholder
    - [x] scrolls
    - [ ] spacing
    - [x] static
    - [x] table
    - [x] touch-actions
    - [x] typography
    - [x] variables
    - [x] view-transition
- [x] Theme
  - [x] animate
  - [x] colors
  - [x] filters
  - [x] font
  - [x] misc
  - [x] screen
  - [x] transition
- [x] Variants
  - [x] aria
  - [x] breakpoints
  - [x] children
  - [x] combinators
  - [x] container
  - [x] dark
  - [x] data
  - [x] default
  - [x] directions
  - [x] important
  - [x] media
  - [x] misc
  - [x] negative
  - [x] pseudo
  - [x] startingstyle
  - [x] supports
  - PresetWind3
    - [ ] xxx
    - [ ] etc.

- [x] Supplementary test case comparison - [See the result](./packages/preset-uno-next/test/fixtures/token-different.test.md)
- [ ] Fix the difference

## Differences

- New preflights for UnoCSS theme
- Remove `zIndex` theme key
- Remove theme color short key
- etc.

## License

[MIT](./LICENSE)
