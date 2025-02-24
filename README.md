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

We have aligned with Tailwind4 in many rules, but we have made some adjustments in some rules to better fit the design philosophy of UnoCSS. Here are some of the adjusted rules:

- Align with Tailwind4 rules & variants
- In some rules, we removed the `xxx-none` rule
- Remove theme color short key, don't support `bg-red-4`, `text-blue-4` etc
- Different from Tailwind4, we retain support for color opacity. For example: `bg-op-50`, `text-op-50` etc
- Output theme to css variables as preflight
- [ ] Support css nested output
- Rebuild the theme key to make it clearer

<details>
<summary>Click to see the differences</summary>

### Removed Properties
- `width`
- `height`
- `maxWidth`
- `maxHeight`
- `minWidth`
- `minHeight`
- `inlineSize`
- `blockSize`
- `maxInlineSize`
- `maxBlockSize`
- `minInlineSize`
- `minBlockSize`
- `borderColor`
- `backgroundColor`
- `textColor`
- `shadowColor`
- `accentColor`
- `fontFamily`
- `fontSize`
- `lineHeight`
- `letterSpacing`
- `wordSpacing`
- `boxShadow`
- `textIndent`
- `textStrokeWidth`
- `ringWidth`
- `lineWidth`
- `zIndex`
- `blur`
- `dropShadow`
- `easing`
- `transitionProperty`
- `media`
- `supports`
- `containers`
- `gridAutoColumn`
- `gridAutoRow`
- `gridColumn`
- `gridRow`
- `gridTemplateColumn`
- `gridTemplateRow`
- `preflightRoot`
- `preflightBase`
### Renamed Properties
`breakpoints` to `breakpoint`
`verticalBreakpoints` to `verticalBreakpoint`
`borderRadius` to `radius`
`boxShadow` to `shadow`
`easing` to `ease`
`animation` to `animate`
`blur` to `blur`
`transitionProperty` to `property`
### Restructured Properties
`text` now includes `fontSize`, `lineHeight`, and `letterSpacing` as nested properties.
`container` is now a nested object under `containers`.
### Added Properties
`font`
`tracking`
`leading`
`insetShadow`
`perspective`
`defaults`

</details>

## License

[MIT](./LICENSE)
