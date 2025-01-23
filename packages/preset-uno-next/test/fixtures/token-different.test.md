
# Overview

| Token | Same | UnoNext | Uno |
| --- | --- | --- | --- |
| text-left | ✅ | `.text-left{text-align:left;}` | `.text-left{text-align:left;}` |
| text-align-right | ✅ | `.text-align-right{text-align:right;}` | `.text-align-right{text-align:right;}` |
| text-align-inherit | ✅ | `.text-align-inherit{text-align:inherit;}` | `.text-align-inherit{text-align:inherit;}` |
| vertical-baseline | ✅ | `.vertical-baseline{vertical-align:baseline;}` | `.vertical-baseline{vertical-align:baseline;}` |
| vertical-super | ✅ | `.vertical-super{vertical-align:super;}` | `.vertical-super{vertical-align:super;}` |
| vertical-inherit | ✅ | `.vertical-inherit{vertical-align:inherit;}` | `.vertical-inherit{vertical-align:inherit;}` |
| align-text-bottom | ✅ | `.align-text-bottom{vertical-align:text-bottom;}` | `.align-text-bottom{vertical-align:text-bottom;}` |
| align-revert | ✅ | `.align-revert{vertical-align:revert;}` | `.align-revert{vertical-align:revert;}` |
| align-start | ✅ | `.align-start{vertical-align:top;}` | `.align-start{vertical-align:top;}` |
| v-top | ✅ | `.v-top{vertical-align:top;}` | `.v-top{vertical-align:top;}` |
| v-mid | ✅ | `.v-mid{vertical-align:middle;}` | `.v-mid{vertical-align:middle;}` |
| v-unset | ✅ | `.v-unset{vertical-align:unset;}` | `.v-unset{vertical-align:unset;}` |
| v-end | ✅ | `.v-end{vertical-align:bottom;}` | `.v-end{vertical-align:bottom;}` |
| outline-none | ❌ | `.outline-none{--un-outline-style:none;outline-style:none;}` | `.outline-none{outline:2px solid transparent;outline-offset:2px;}` |
| outline | ❌ | `.outline{outline-style:var(--un-outline-style);outline-width:1px;}` | `.outline{outline-style:solid;}` |
| outline-inherit | ❌ | `.outline-inherit{--un-outline-style:inherit;outline-style:inherit;}` | `.outline-inherit{outline-style:inherit;}` |
| outline-size-none | ❌ | `` | `.outline-size-none{outline-width:0;}` |
| outline-size-unset | ❌ | `.outline-size-unset{outline-style:var(--un-outline-style);outline-width:unset;}` | `.outline-size-unset{outline-width:unset;}` |
| outline-width-revert | ❌ | `.outline-width-revert{outline-style:var(--un-outline-style);outline-width:revert;}` | `.outline-width-revert{outline-width:revert;}` |
| outline-offset-inherit | ✅ | `.outline-offset-inherit{outline-offset:inherit;}` | `.outline-offset-inherit{outline-offset:inherit;}` |
| outline-hidden | ❌ | `.outline-hidden{--un-outline-style:hidden;outline-style:hidden;}` | `.outline-hidden{outline-style:hidden;}` |
| outline-gray | ❌ | `.outline-gray{--un-outline-color-opacity:100%;outline-color:color-mix(in oklch, var(--color-gray-400) var(--un-outline-color-opacity), transparent);}` | `.outline-gray{--un-outline-color-opacity:1;outline-color:rgb(156 163 175 / var(--un-outline-color-opacity));}` |
| outline-gray-400 | ❌ | `.outline-gray-400{--un-outline-color-opacity:100%;outline-color:color-mix(in oklch, var(--color-gray-400) var(--un-outline-color-opacity), transparent);}` | `.outline-gray-400{--un-outline-color-opacity:1;outline-color:rgb(156 163 175 / var(--un-outline-color-opacity));}` |
| outline-size-4 | ❌ | `.outline-size-4{outline-style:var(--un-outline-style);outline-width:4px;}` | `.outline-size-4{outline-width:4px;}` |
| outline-width-4 | ❌ | `.outline-width-4{outline-style:var(--un-outline-style);outline-width:4px;}` | `.outline-width-4{outline-width:4px;}` |
| outline-offset-4 | ✅ | `.outline-offset-4{outline-offset:4px;}` | `.outline-offset-4{outline-offset:4px;}` |
| outline-offset-none | ❌ | `` | `.outline-offset-none{outline-offset:0;}` |
| outline-unset | ❌ | `.outline-unset{--un-outline-style:unset;outline-style:unset;}` | `.outline-unset{outline-style:unset;}` |
| outline-revert-layer | ❌ | `.outline-revert-layer{--un-outline-style:revert-layer;outline-style:revert-layer;}` | `.outline-revert-layer{outline-style:revert-layer;}` |
| outline-solid | ❌ | `.outline-solid{--un-outline-style:solid;outline-style:solid;}` | `.outline-solid{outline-style:solid;}` |
| outline-color-red-1 | ❌ | `` | `.outline-color-red-1{--un-outline-color-opacity:1;outline-color:rgb(254 226 226 / var(--un-outline-color-opacity));}` |
| outline-width-10px | ❌ | `.outline-width-10px{outline-style:var(--un-outline-style);outline-width:10px;}` | `.outline-width-10px{outline-width:10px;}` |
| outline-inset | ❌ | `.outline-inset{--un-outline-style:inset;outline-style:inset;}` | `.outline-inset{outline-style:inset;}` |
| outline-110 | ❌ | `.outline-110{outline-style:var(--un-outline-style);outline-width:110px;}` | `.outline-110{outline-width:110px;}` |
| outline-blue-2 | ❌ | `` | `.outline-blue-2{--un-outline-color-opacity:1;outline-color:rgb(191 219 254 / var(--un-outline-color-opacity));}` |
| outline-[var(--red)] | ❌ | `.outline-\[var\(--red\)\]{--un-outline-color-opacity:100%;outline-color:color-mix(in oklch, var(--red) var(--un-outline-color-opacity), transparent);}` | `.outline-\[var\(--red\)\]{outline-color:var(--red);}` |
| outline-[calc(1rem-1px)] | ❌ | `.outline-\[calc\(1rem-1px\)\]{outline-style:var(--un-outline-style);outline-width:calc(1rem - 1px);}` | `.outline-\[calc\(1rem-1px\)\]{outline-width:calc(1rem - 1px);}` |
| outline-size-[var(--width)] | ❌ | `.outline-size-\[var\(--width\)\]{outline-style:var(--un-outline-style);outline-width:var(--width);}` | `.outline-size-\[var\(--width\)\]{outline-width:var(--width);}` |
| outline-offset-[var(--offset)] | ✅ | `.outline-offset-\[var\(--offset\)\]{outline-offset:var(--offset);}` | `.outline-offset-\[var\(--offset\)\]{outline-offset:var(--offset);}` |
| appearance-none | ✅ | `.appearance-none{-webkit-appearance:none;appearance:none;}` | `.appearance-none{-webkit-appearance:none;appearance:none;}` |
| appearance-auto | ✅ | `.appearance-auto{-webkit-appearance:auto;appearance:auto;}` | `.appearance-auto{-webkit-appearance:auto;appearance:auto;}` |
| will-change-margin,padding | ✅ | `.will-change-margin\,padding{will-change:margin,padding;}` | `.will-change-margin\,padding{will-change:margin,padding;}` |
| will-change-padding,margin | ✅ | `.will-change-padding\,margin{will-change:padding,margin;}` | `.will-change-padding\,margin{will-change:padding,margin;}` |
| will-change-transform | ✅ | `.will-change-transform{will-change:transform;}` | `.will-change-transform{will-change:transform;}` |
| will-change-unset | ✅ | `.will-change-unset{will-change:unset;}` | `.will-change-unset{will-change:unset;}` |
| will-change-auto | ✅ | `.will-change-auto{will-change:auto;}` | `.will-change-auto{will-change:auto;}` |
| will-change-scroll | ✅ | `.will-change-scroll{will-change:scroll-position;}` | `.will-change-scroll{will-change:scroll-position;}` |
| will-change-contents | ✅ | `.will-change-contents{will-change:contents;}` | `.will-change-contents{will-change:contents;}` |
| b-2 | ✅ | `.b-2{border-width:2px;}` | `.b-2{border-width:2px;}` |
| border | ✅ | `.border{border-width:1px;}` | `.border{border-width:1px;}` |
| border-double | ❌ | `.border-double{--un-border-style:double;border-style:double;}` | `.border-double{border-style:double;}` |
| border-none | ❌ | `.border-none{--un-border-style:none;border-style:none;}` | `.border-none{border-style:none;}` |
| border-inherit | ❌ | `.border-inherit{--un-border-style:inherit;border-style:inherit;}` | `.border-inherit{border-style:inherit;}` |
| border-size-none | ❌ | `.border-size-none{border-width:none;}` | `.border-size-none{border-width:0;}` |
| border-4 | ✅ | `.border-4{border-width:4px;}` | `.border-4{border-width:4px;}` |
| border-b | ✅ | `.border-b{border-bottom-width:1px;}` | `.border-b{border-bottom-width:1px;}` |
| border-x | ❌ | `.border-x{border-inline-width:1px;}` | `.border-x{border-left-width:1px;border-right-width:1px;}` |
| border-t-2 | ✅ | `.border-t-2{border-top-width:2px;}` | `.border-t-2{border-top-width:2px;}` |
| border-be | ✅ | `.border-be{border-block-end-width:1px;}` | `.border-be{border-block-end-width:1px;}` |
| border-ie-unset | ❌ | `.border-ie-unset{--un-border-style:unset;border-inline-end-style:unset;}` | `.border-ie-unset{border-inline-end-style:unset;}` |
| border-inline | ✅ | `.border-inline{border-inline-start-width:1px;border-inline-end-width:1px;}` | `.border-inline{border-inline-start-width:1px;border-inline-end-width:1px;}` |
| border-bs-2 | ✅ | `.border-bs-2{border-block-start-width:2px;}` | `.border-bs-2{border-block-start-width:2px;}` |
| border-size-2 | ✅ | `.border-size-2{border-width:2px;}` | `.border-size-2{border-width:2px;}` |
| border-x-size-2 | ❌ | `.border-x-size-2{border-inline-width:2px;}` | `.border-x-size-2{border-left-width:2px;border-right-width:2px;}` |
| border-t-size-2 | ✅ | `.border-t-size-2{border-top-width:2px;}` | `.border-t-size-2{border-top-width:2px;}` |
| border-width-3 | ✅ | `.border-width-3{border-width:3px;}` | `.border-width-3{border-width:3px;}` |
| border-width-[2em] | ✅ | `.border-width-\[2em\]{border-width:2em;}` | `.border-width-\[2em\]{border-width:2em;}` |
| border-width-[calc(1em-1px)] | ✅ | `.border-width-\[calc\(1em-1px\)\]{border-width:calc(1em - 1px);}` | `.border-width-\[calc\(1em-1px\)\]{border-width:calc(1em - 1px);}` |
| border-size-unset | ✅ | `.border-size-unset{border-width:unset;}` | `.border-size-unset{border-width:unset;}` |
| border-x-width-3 | ❌ | `.border-x-width-3{border-inline-width:3px;}` | `.border-x-width-3{border-left-width:3px;border-right-width:3px;}` |
| border-t-width-3 | ✅ | `.border-t-width-3{border-top-width:3px;}` | `.border-t-width-3{border-top-width:3px;}` |
| border-[calc(var(--border-width)*1px)] | ✅ | `.border-\[calc\(var\(--border-width\)\*1px\)\]{border-width:calc(var(--border-width) * 1px);}` | `.border-\[calc\(var\(--border-width\)\*1px\)\]{border-width:calc(var(--border-width) * 1px);}` |
| border-[calc(10px+1px)] | ✅ | `.border-\[calc\(10px\+1px\)\]{border-width:calc(10px + 1px);}` | `.border-\[calc\(10px\+1px\)\]{border-width:calc(10px + 1px);}` |
| rounded-[4px] | ✅ | `.rounded-\[4px\]{border-radius:4px;}` | `.rounded-\[4px\]{border-radius:4px;}` |
| rounded-1/2 | ✅ | `.rounded-1\/2{border-radius:50%;}` | `.rounded-1\/2{border-radius:50%;}` |
| rounded-full | ❌ | `.rounded-full{border-radius:calc(infinity * 1px);}` | `.rounded-full{border-radius:9999px;}` |
| rounded-unset | ✅ | `.rounded-unset{border-radius:unset;}` | `.rounded-unset{border-radius:unset;}` |
| rounded-md | ❌ | `.rounded-md{border-radius:var(--un-radius-md);}` | `.rounded-md{border-radius:0.375rem;}` |
| rounded-rb-1/2 | ✅ | `.rounded-rb-1\/2{border-bottom-right-radius:50%;}` | `.rounded-rb-1\/2{border-bottom-right-radius:50%;}` |
| rounded-rb-1/2 | ✅ | `.rounded-rb-1\/2{border-bottom-right-radius:50%;}` | `.rounded-rb-1\/2{border-bottom-right-radius:50%;}` |
| rounded-t-sm | ❌ | `.rounded-t-sm{border-top-left-radius:var(--un-radius-sm);border-top-right-radius:var(--un-radius-sm);}` | `.rounded-t-sm{border-top-left-radius:0.125rem;border-top-right-radius:0.125rem;}` |
| rounded-b-revert | ✅ | `.rounded-b-revert{border-bottom-left-radius:revert;border-bottom-right-radius:revert;}` | `.rounded-b-revert{border-bottom-left-radius:revert;border-bottom-right-radius:revert;}` |
| rounded-tr | ✅ | `.rounded-tr{border-top-right-radius:0.25rem;}` | `.rounded-tr{border-top-right-radius:0.25rem;}` |
| rounded-ie-be-1/2 | ✅ | `.rounded-ie-be-1\/2{border-end-end-radius:50%;}` | `.rounded-ie-be-1\/2{border-end-end-radius:50%;}` |
| rounded-bs-sm | ❌ | `.rounded-bs-sm{border-start-start-radius:var(--un-radius-sm);border-start-end-radius:var(--un-radius-sm);}` | `.rounded-bs-sm{border-start-start-radius:0.125rem;border-start-end-radius:0.125rem;}` |
| rounded-bs-ie | ✅ | `.rounded-bs-ie{border-start-end-radius:0.25rem;}` | `.rounded-bs-ie{border-start-end-radius:0.25rem;}` |
| mt-6 | ❌ | `.mt-6{margin-top:calc(var(--spacing) * 6);}` | `.mt-6{margin-top:1.5rem;}` |
| mx-1 | ❌ | `.mx-1{margin-inline:calc(var(--spacing) * 1);}` | `.mx-1{margin-left:0.25rem;margin-right:0.25rem;}` |
| ms-4 | ❌ | `.ms-4{margin-inline-start:calc(var(--spacing) * 4);}` | `.ms-4{margin-inline-start:1rem;}` |
| me-8 | ❌ | `.me-8{margin-inline-end:calc(var(--spacing) * 8);}` | `.me-8{margin-inline-end:2rem;}` |
| pt-6 | ❌ | `.pt-6{padding-top:calc(var(--spacing) * 6);}` | `.pt-6{padding-top:1.5rem;}` |
| px-1 | ❌ | `.px-1{padding-inline:calc(var(--spacing) * 1);}` | `.px-1{padding-left:0.25rem;padding-right:0.25rem;}` |
| ps-4 | ❌ | `.ps-4{padding-inline-start:calc(var(--spacing) * 4);}` | `.ps-4{padding-inline-start:1rem;}` |
| pe-8 | ❌ | `.pe-8{padding-inline-end:calc(var(--spacing) * 8);}` | `.pe-8{padding-inline-end:2rem;}` |
| start-4 | ❌ | `` | `.start-4{inset-inline-start:1rem;}` |
| end-8 | ❌ | `` | `.end-8{inset-inline-end:2rem;}` |
| border-s-0 | ✅ | `.border-s-0{border-inline-start-width:0px;}` | `.border-s-0{border-inline-start-width:0px;}` |
| border-e-4 | ✅ | `.border-e-4{border-inline-end-width:4px;}` | `.border-e-4{border-inline-end-width:4px;}` |
| border-black | ❌ | `.border-black{--un-border-opacity:100%;border-color:color-mix(in oklch, var(--color-black) var(--un-border-opacity), transparent);}` | `.border-black{--un-border-opacity:1;border-color:rgb(0 0 0 / var(--un-border-opacity));}` |
| border-s-green-500 | ❌ | `.border-s-green-500{--un-border-opacity:100%;--un-border-inline-start-opacity:var(--un-border-opacity);border-inline-start-color:color-mix(in oklch, var(--color-green-500) var(--un-border-inline-start-opacity), transparent);}` | `.border-s-green-500{--un-border-opacity:1;--un-border-inline-start-opacity:var(--un-border-opacity);border-inline-start-color:rgb(34 197 94 / var(--un-border-inline-start-opacity));}` |
| border-e-red-400 | ❌ | `.border-e-red-400{--un-border-opacity:100%;--un-border-inline-end-opacity:var(--un-border-opacity);border-inline-end-color:color-mix(in oklch, var(--color-red-400) var(--un-border-inline-end-opacity), transparent);}` | `.border-e-red-400{--un-border-opacity:1;--un-border-inline-end-opacity:var(--un-border-opacity);border-inline-end-color:rgb(248 113 113 / var(--un-border-inline-end-opacity));}` |
| rounded-s | ✅ | `.rounded-s{border-end-start-radius:0.25rem;border-start-start-radius:0.25rem;}` | `.rounded-s{border-end-start-radius:0.25rem;border-start-start-radius:0.25rem;}` |
| rounded-e | ✅ | `.rounded-e{border-start-end-radius:0.25rem;border-end-end-radius:0.25rem;}` | `.rounded-e{border-start-end-radius:0.25rem;border-end-end-radius:0.25rem;}` |
| rounded-ss | ✅ | `.rounded-ss{border-start-start-radius:0.25rem;}` | `.rounded-ss{border-start-start-radius:0.25rem;}` |
| rounded-es | ✅ | `.rounded-es{border-end-start-radius:0.25rem;}` | `.rounded-es{border-end-start-radius:0.25rem;}` |
| rounded | ✅ | `.rounded{border-radius:0.25rem;}` | `.rounded{border-radius:0.25rem;}` |
| rounded-none | ✅ | `.rounded-none{border-radius:0;}` | `.rounded-none{border-radius:0;}` |
| border-rounded | ✅ | `.border-rounded{border-radius:0.25rem;}` | `.border-rounded{border-radius:0.25rem;}` |
| border-dashed | ❌ | `.border-dashed{--un-border-style:dashed;border-style:dashed;}` | `.border-dashed{border-style:dashed;}` |
| border-solid | ❌ | `.border-solid{--un-border-style:solid;border-style:solid;}` | `.border-solid{border-style:solid;}` |
| border-dotted | ❌ | `.border-dotted{--un-border-style:dotted;border-style:dotted;}` | `.border-dotted{border-style:dotted;}` |
| border-double | ❌ | `.border-double{--un-border-style:double;border-style:double;}` | `.border-double{border-style:double;}` |
| border-hidden | ❌ | `.border-hidden{--un-border-style:hidden;border-style:hidden;}` | `.border-hidden{border-style:hidden;}` |
| border-none | ❌ | `.border-none{--un-border-style:none;border-style:none;}` | `.border-none{border-style:none;}` |
| b-rounded | ✅ | `.b-rounded{border-radius:0.25rem;}` | `.b-rounded{border-radius:0.25rem;}` |
| b-dashed | ❌ | `.b-dashed{--un-border-style:dashed;border-style:dashed;}` | `.b-dashed{border-style:dashed;}` |
| b-solid | ❌ | `.b-solid{--un-border-style:solid;border-style:solid;}` | `.b-solid{border-style:solid;}` |
| b-dotted | ❌ | `.b-dotted{--un-border-style:dotted;border-style:dotted;}` | `.b-dotted{border-style:dotted;}` |
| b-double | ❌ | `.b-double{--un-border-style:double;border-style:double;}` | `.b-double{border-style:double;}` |
| b-hidden | ❌ | `.b-hidden{--un-border-style:hidden;border-style:hidden;}` | `.b-hidden{border-style:hidden;}` |
| b-none | ❌ | `.b-none{--un-border-style:none;border-style:none;}` | `.b-none{border-style:none;}` |
| border-l-dashed | ❌ | `.border-l-dashed{--un-border-style:dashed;border-left-style:dashed;}` | `.border-l-dashed{border-left-style:dashed;}` |
| border-t-dashed | ❌ | `.border-t-dashed{--un-border-style:dashed;border-top-style:dashed;}` | `.border-t-dashed{border-top-style:dashed;}` |
| border-b-dashed | ❌ | `.border-b-dashed{--un-border-style:dashed;border-bottom-style:dashed;}` | `.border-b-dashed{border-bottom-style:dashed;}` |
| border-r-dashed | ❌ | `.border-r-dashed{--un-border-style:dashed;border-right-style:dashed;}` | `.border-r-dashed{border-right-style:dashed;}` |
| border-s-dashed | ❌ | `.border-s-dashed{--un-border-style:dashed;border-inline-start-style:dashed;}` | `.border-s-dashed{border-inline-start-style:dashed;}` |
| border-e-dashed | ❌ | `.border-e-dashed{--un-border-style:dashed;border-inline-end-style:dashed;}` | `.border-e-dashed{border-inline-end-style:dashed;}` |
| border-x-dashed | ❌ | `.border-x-dashed{--un-border-style:dashed;border-inline-style:dashed;}` | `.border-x-dashed{border-left-style:dashed;border-right-style:dashed;}` |
| border-y-unset | ❌ | `.border-y-unset{--un-border-style:unset;border-block-style:unset;}` | `.border-y-unset{border-top-style:unset;border-bottom-style:unset;}` |
| border-y-revert-layer | ❌ | `.border-y-revert-layer{--un-border-style:revert-layer;border-block-style:revert-layer;}` | `.border-y-revert-layer{border-top-style:revert-layer;border-bottom-style:revert-layer;}` |
| border-is-style-double | ❌ | `.border-is-style-double{--un-border-style:double;border-inline-start-style:double;}` | `.border-is-style-double{border-inline-start-style:double;}` |
| border-block-style-double | ❌ | `.border-block-style-double{--un-border-style:double;border-block-start-style:double;border-block-end-style:double;}` | `.border-block-style-double{border-block-start-style:double;border-block-end-style:double;}` |
| border-[#124] | ❌ | `.border-\[\#124\]{--un-border-opacity:100%;border-color:color-mix(in oklch, #124 var(--un-border-opacity), transparent);}` | `.border-\[\#124\]{--un-border-opacity:1;border-color:rgb(17 34 68 / var(--un-border-opacity));}` |
| border-black/10 | ❌ | `.border-black\/10{--un-border-opacity:10%;border-color:color-mix(in oklch, var(--color-black) var(--un-border-opacity), transparent);}` | `.border-black\/10{border-color:rgb(0 0 0 / 0.1);}` |
| border-blue | ❌ | `.border-blue{--un-border-opacity:100%;border-color:color-mix(in oklch, var(--color-blue-400) var(--un-border-opacity), transparent);}` | `.border-blue{--un-border-opacity:1;border-color:rgb(96 165 250 / var(--un-border-opacity));}` |
| border-red-100 | ❌ | `.border-red-100{--un-border-opacity:100%;border-color:color-mix(in oklch, var(--color-red-100) var(--un-border-opacity), transparent);}` | `.border-red-100{--un-border-opacity:1;border-color:rgb(254 226 226 / var(--un-border-opacity));}` |
| border-red-200/10 | ❌ | `.border-red-200\/10{--un-border-opacity:10%;border-color:color-mix(in oklch, var(--color-red-200) var(--un-border-opacity), transparent);}` | `.border-red-200\/10{border-color:rgb(254 202 202 / 0.1);}` |
| border-red-300/20 | ❌ | `.border-red-300\/20{--un-border-opacity:20%;border-color:color-mix(in oklch, var(--color-red-300) var(--un-border-opacity), transparent);}` | `.border-red-300\/20{border-color:rgb(252 165 165 / 0.2);}` |
| border-red100 | ❌ | `.border-red100{--un-border-opacity:100%;border-color:color-mix(in oklch, var(--color-red-100) var(--un-border-opacity), transparent);}` | `.border-red100{--un-border-opacity:1;border-color:rgb(254 226 226 / var(--un-border-opacity));}` |
| border-red2 | ❌ | `` | `.border-red2{--un-border-opacity:1;border-color:rgb(254 202 202 / var(--un-border-opacity));}` |
| border-[var(--color)] | ❌ | `.border-\[var\(--color\)\]{--un-border-opacity:100%;border-color:color-mix(in oklch, var(--color) var(--un-border-opacity), transparent);}` | `.border-\[var\(--color\)\]{border-color:var(--color);}` |
| border-green-100/20 | ❌ | `.border-green-100\/20{--un-border-opacity:20%;border-color:color-mix(in oklch, var(--color-green-100) var(--un-border-opacity), transparent);}` | `.border-green-100\/20{border-color:rgb(220 252 231 / 0.2);}` |
| border-opacity-20 | ❌ | `.border-opacity-20{--un-border-opacity:20%;}` | `.border-opacity-20{--un-border-opacity:0.2;}` |
| border-opacity-$opacity-variable | ✅ | `.border-opacity-\$opacity-variable{--un-border-opacity:var(--opacity-variable);}` | `.border-opacity-\$opacity-variable{--un-border-opacity:var(--opacity-variable);}` |
| border-y-red | ❌ | `.border-y-red{--un-border-opacity:100%;--un-border-block-opacity:var(--un-border-opacity);border-block-color:color-mix(in oklch, var(--color-red-400) var(--un-border-block-opacity), transparent);}` | `.border-y-red{--un-border-opacity:1;--un-border-top-opacity:var(--un-border-opacity);border-top-color:rgb(248 113 113 / var(--un-border-top-opacity));--un-border-bottom-opacity:var(--un-border-opacity);border-bottom-color:rgb(248 113 113 / var(--un-border-bottom-opacity));}` |
| border-y-op-30 | ❌ | `.border-y-op-30{--un-border-block-opacity:30%;}` | `.border-y-op-30{--un-border-top-opacity:0.3;--un-border-bottom-opacity:0.3;}` |
| border-x-[rgb(1,2,3)]/[0.5] | ❌ | `.border-x-\[rgb\(1\,2\,3\)\]\/\[0\.5\]{--un-border-opacity:[0.5]%;--un-border-inline-opacity:var(--un-border-opacity);border-inline-color:color-mix(in oklch, rgb(1,2,3) var(--un-border-inline-opacity), transparent);}` | `.border-x-\[rgb\(1\,2\,3\)\]\/\[0\.5\]{border-left-color:rgb(1 2 3 / 0.5);border-right-color:rgb(1 2 3 / 0.5);}` |
| border-x-[rgb(4_5_6)]/[0.5] | ❌ | `.border-x-\[rgb\(4_5_6\)\]\/\[0\.5\]{--un-border-opacity:[0.5]%;--un-border-inline-opacity:var(--un-border-opacity);border-inline-color:color-mix(in oklch, rgb(4 5 6) var(--un-border-inline-opacity), transparent);}` | `.border-x-\[rgb\(4_5_6\)\]\/\[0\.5\]{border-left-color:rgb(4 5 6 / 0.5);border-right-color:rgb(4 5 6 / 0.5);}` |
| border-t-[#124] | ❌ | `.border-t-\[\#124\]{--un-border-opacity:100%;--un-border-top-opacity:var(--un-border-opacity);border-top-color:color-mix(in oklch, #124 var(--un-border-top-opacity), transparent);}` | `.border-t-\[\#124\]{--un-border-opacity:1;--un-border-top-opacity:var(--un-border-opacity);border-top-color:rgb(17 34 68 / var(--un-border-top-opacity));}` |
| border-t-black/10 | ❌ | `.border-t-black\/10{--un-border-opacity:10%;--un-border-top-opacity:var(--un-border-opacity);border-top-color:color-mix(in oklch, var(--color-black) var(--un-border-top-opacity), transparent);}` | `.border-t-black\/10{border-top-color:rgb(0 0 0 / 0.1);}` |
| border-b-blue | ❌ | `.border-b-blue{--un-border-opacity:100%;--un-border-bottom-opacity:var(--un-border-opacity);border-bottom-color:color-mix(in oklch, var(--color-blue-400) var(--un-border-bottom-opacity), transparent);}` | `.border-b-blue{--un-border-opacity:1;--un-border-bottom-opacity:var(--un-border-opacity);border-bottom-color:rgb(96 165 250 / var(--un-border-bottom-opacity));}` |
| border-b-op40 | ❌ | `.border-b-op40{--un-border-bottom-opacity:40%;}` | `.border-b-op40{--un-border-bottom-opacity:0.4;}` |
| border-s-red-100 | ❌ | `.border-s-red-100{--un-border-opacity:100%;--un-border-inline-start-opacity:var(--un-border-opacity);border-inline-start-color:color-mix(in oklch, var(--color-red-100) var(--un-border-inline-start-opacity), transparent);}` | `.border-s-red-100{--un-border-opacity:1;--un-border-inline-start-opacity:var(--un-border-opacity);border-inline-start-color:rgb(254 226 226 / var(--un-border-inline-start-opacity));}` |
| border-s-opacity50 | ❌ | `.border-s-opacity50{--un-border-inline-start-opacity:50%;}` | `.border-s-opacity50{--un-border-inline-start-opacity:0.5;}` |
| border-e-red-200/10 | ❌ | `.border-e-red-200\/10{--un-border-opacity:10%;--un-border-inline-end-opacity:var(--un-border-opacity);border-inline-end-color:color-mix(in oklch, var(--color-red-200) var(--un-border-inline-end-opacity), transparent);}` | `.border-e-red-200\/10{border-inline-end-color:rgb(254 202 202 / 0.1);}` |
| border-e-red-300/[20] | ❌ | `.border-e-red-300\/\[20\]{--un-border-opacity:[20]%;--un-border-inline-end-opacity:var(--un-border-opacity);border-inline-end-color:color-mix(in oklch, var(--color-red-300) var(--un-border-inline-end-opacity), transparent);}` | `.border-e-red-300\/\[20\]{border-inline-end-color:rgb(252 165 165 / 20);}` |
| c-[#157] | ❌ | `.c-\[\#157\]{--un-text-opacity:100%;color:color-mix(in oklch, #157 var(--un-text-opacity), transparent);}` | `.c-\[\#157\]{--un-text-opacity:1;color:rgb(17 85 119 / var(--un-text-opacity));}` |
| c-[#157]/10 | ❌ | `.c-\[\#157\]\/10{--un-text-opacity:10%;color:color-mix(in oklch, #157 var(--un-text-opacity), transparent);}` | `.c-\[\#157\]\/10{color:rgb(17 85 119 / 0.1);}` |
| c-[#2573] | ❌ | `.c-\[\#2573\]{--un-text-opacity:100%;color:color-mix(in oklch, #2573 var(--un-text-opacity), transparent);}` | `.c-\[\#2573\]{--un-text-opacity:0.2;color:rgb(34 85 119 / var(--un-text-opacity));}` |
| c-[#2573]/10 | ❌ | `.c-\[\#2573\]\/10{--un-text-opacity:10%;color:color-mix(in oklch, #2573 var(--un-text-opacity), transparent);}` | `.c-\[\#2573\]\/10{color:rgb(34 85 119 / 0.1);}` |
| c-[#335577] | ❌ | `.c-\[\#335577\]{--un-text-opacity:100%;color:color-mix(in oklch, #335577 var(--un-text-opacity), transparent);}` | `.c-\[\#335577\]{--un-text-opacity:1;color:rgb(51 85 119 / var(--un-text-opacity));}` |
| c-[#335577]/10 | ❌ | `.c-\[\#335577\]\/10{--un-text-opacity:10%;color:color-mix(in oklch, #335577 var(--un-text-opacity), transparent);}` | `.c-\[\#335577\]\/10{color:rgb(51 85 119 / 0.1);}` |
| c-[#44557733] | ❌ | `.c-\[\#44557733\]{--un-text-opacity:100%;color:color-mix(in oklch, #44557733 var(--un-text-opacity), transparent);}` | `.c-\[\#44557733\]{--un-text-opacity:0.2;color:rgb(68 85 119 / var(--un-text-opacity));}` |
| c-[#44557733]/10 | ❌ | `.c-\[\#44557733\]\/10{--un-text-opacity:10%;color:color-mix(in oklch, #44557733 var(--un-text-opacity), transparent);}` | `.c-\[\#44557733\]\/10{color:rgb(68 85 119 / 0.1);}` |
| c-#157 | ❌ | `.c-\#157{--un-text-opacity:100%;color:color-mix(in oklch, #157 var(--un-text-opacity), transparent);}` | `.c-\#157{--un-text-opacity:1;color:rgb(17 85 119 / var(--un-text-opacity));}` |
| c-#157/10 | ❌ | `.c-\#157\/10{--un-text-opacity:10%;color:color-mix(in oklch, #157 var(--un-text-opacity), transparent);}` | `.c-\#157\/10{color:rgb(17 85 119 / 0.1);}` |
| c-#2573 | ❌ | `.c-\#2573{--un-text-opacity:100%;color:color-mix(in oklch, #2573 var(--un-text-opacity), transparent);}` | `.c-\#2573{--un-text-opacity:0.2;color:rgb(34 85 119 / var(--un-text-opacity));}` |
| c-#2573/10 | ❌ | `.c-\#2573\/10{--un-text-opacity:10%;color:color-mix(in oklch, #2573 var(--un-text-opacity), transparent);}` | `.c-\#2573\/10{color:rgb(34 85 119 / 0.1);}` |
| c-#335577 | ❌ | `.c-\#335577{--un-text-opacity:100%;color:color-mix(in oklch, #335577 var(--un-text-opacity), transparent);}` | `.c-\#335577{--un-text-opacity:1;color:rgb(51 85 119 / var(--un-text-opacity));}` |
| c-#335577/10 | ❌ | `.c-\#335577\/10{--un-text-opacity:10%;color:color-mix(in oklch, #335577 var(--un-text-opacity), transparent);}` | `.c-\#335577\/10{color:rgb(51 85 119 / 0.1);}` |
| c-#44557733 | ❌ | `.c-\#44557733{--un-text-opacity:100%;color:color-mix(in oklch, #44557733 var(--un-text-opacity), transparent);}` | `.c-\#44557733{--un-text-opacity:0.2;color:rgb(68 85 119 / var(--un-text-opacity));}` |
| c-#44557733/10 | ❌ | `.c-\#44557733\/10{--un-text-opacity:10%;color:color-mix(in oklch, #44557733 var(--un-text-opacity), transparent);}` | `.c-\#44557733\/10{color:rgb(68 85 119 / 0.1);}` |
| c-hex-157 | ❌ | `.c-hex-157{--un-text-opacity:100%;color:color-mix(in oklch, #157 var(--un-text-opacity), transparent);}` | `.c-hex-157{--un-text-opacity:1;color:rgb(17 85 119 / var(--un-text-opacity));}` |
| c-hex-157/10 | ❌ | `.c-hex-157\/10{--un-text-opacity:10%;color:color-mix(in oklch, #157 var(--un-text-opacity), transparent);}` | `.c-hex-157\/10{color:rgb(17 85 119 / 0.1);}` |
| c-hex-2573 | ❌ | `.c-hex-2573{--un-text-opacity:100%;color:color-mix(in oklch, #2573 var(--un-text-opacity), transparent);}` | `.c-hex-2573{--un-text-opacity:0.2;color:rgb(34 85 119 / var(--un-text-opacity));}` |
| c-hex-2573/10 | ❌ | `.c-hex-2573\/10{--un-text-opacity:10%;color:color-mix(in oklch, #2573 var(--un-text-opacity), transparent);}` | `.c-hex-2573\/10{color:rgb(34 85 119 / 0.1);}` |
| c-hex-335577 | ❌ | `.c-hex-335577{--un-text-opacity:100%;color:color-mix(in oklch, #335577 var(--un-text-opacity), transparent);}` | `.c-hex-335577{--un-text-opacity:1;color:rgb(51 85 119 / var(--un-text-opacity));}` |
| c-hex-335577/10 | ❌ | `.c-hex-335577\/10{--un-text-opacity:10%;color:color-mix(in oklch, #335577 var(--un-text-opacity), transparent);}` | `.c-hex-335577\/10{color:rgb(51 85 119 / 0.1);}` |
| c-hex-44557733 | ❌ | `.c-hex-44557733{--un-text-opacity:100%;color:color-mix(in oklch, #44557733 var(--un-text-opacity), transparent);}` | `.c-hex-44557733{--un-text-opacity:0.2;color:rgb(68 85 119 / var(--un-text-opacity));}` |
| c-hex-44557733/10 | ❌ | `.c-hex-44557733\/10{--un-text-opacity:10%;color:color-mix(in oklch, #44557733 var(--un-text-opacity), transparent);}` | `.c-hex-44557733\/10{color:rgb(68 85 119 / 0.1);}` |
| c-[#157]/$opacity-variable | ❌ | `.c-\[\#157\]\/\$opacity-variable{--un-text-opacity:$opacity-variable%;color:color-mix(in oklch, #157 var(--un-text-opacity), transparent);}` | `.c-\[\#157\]\/\$opacity-variable{color:rgb(17 85 119 / var(--opacity-variable));}` |
| c-[#2573]/$opacity-variable | ❌ | `.c-\[\#2573\]\/\$opacity-variable{--un-text-opacity:$opacity-variable%;color:color-mix(in oklch, #2573 var(--un-text-opacity), transparent);}` | `.c-\[\#2573\]\/\$opacity-variable{color:rgb(34 85 119 / var(--opacity-variable));}` |
| c-[#335577]/$opacity-variable | ❌ | `.c-\[\#335577\]\/\$opacity-variable{--un-text-opacity:$opacity-variable%;color:color-mix(in oklch, #335577 var(--un-text-opacity), transparent);}` | `.c-\[\#335577\]\/\$opacity-variable{color:rgb(51 85 119 / var(--opacity-variable));}` |
| c-[#44557733]/$opacity-variable | ❌ | `.c-\[\#44557733\]\/\$opacity-variable{--un-text-opacity:$opacity-variable%;color:color-mix(in oklch, #44557733 var(--un-text-opacity), transparent);}` | `.c-\[\#44557733\]\/\$opacity-variable{color:rgb(68 85 119 / var(--opacity-variable));}` |
| c-$color-variable | ❌ | `.c-\$color-variable{--un-text-opacity:100%;color:color-mix(in oklch, var(--color-variable) var(--un-text-opacity), transparent);}` | `.c-\$color-variable{color:var(--color-variable);}` |
| c-$color-variable/10 | ❌ | `.c-\$color-variable\/10{--un-text-opacity:10%;color:color-mix(in oklch, var(--color-variable) var(--un-text-opacity), transparent);}` | `.c-\$color-variable\/10{color:var(--color-variable);}` |
| c-$color-variable/$opacity-variable | ❌ | `.c-\$color-variable\/\$opacity-variable{--un-text-opacity:$opacity-variable%;color:color-mix(in oklch, var(--color-variable) var(--un-text-opacity), transparent);}` | `.c-\$color-variable\/\$opacity-variable{color:var(--color-variable);}` |
| c-$color-variable,red | ❌ | `.c-\$color-variable\,red{--un-text-opacity:100%;color:color-mix(in oklch, var(--color-variable, red) var(--un-text-opacity), transparent);}` | `.c-\$color-variable\,red{color:var(--color-variable, red);}` |
| op-10 | ❌ | `.op-10{opacity:10%;}` | `.op-10{opacity:0.1;}` |
| opacity-0 | ❌ | `.opacity-0{opacity:0%;}` | `.opacity-0{opacity:0;}` |
| opacity-$opa | ✅ | `.opacity-\$opa{opacity:var(--opa);}` | `.opacity-\$opa{opacity:var(--opa);}` |
| color-blue | ❌ | `.color-blue{--un-text-opacity:100%;color:color-mix(in oklch, var(--color-blue-400) var(--un-text-opacity), transparent);}` | `.color-blue{--un-text-opacity:1;color:rgb(96 165 250 / var(--un-text-opacity));}` |
| color-blue-400 | ❌ | `.color-blue-400{--un-text-opacity:100%;color:color-mix(in oklch, var(--color-blue-400) var(--un-text-opacity), transparent);}` | `.color-blue-400{--un-text-opacity:1;color:rgb(96 165 250 / var(--un-text-opacity));}` |
| color-blue-400/10 | ❌ | `.color-blue-400\/10{--un-text-opacity:10%;color:color-mix(in oklch, var(--color-blue-400) var(--un-text-opacity), transparent);}` | `.color-blue-400\/10{color:rgb(96 165 250 / 0.1);}` |
| color-blue/10 | ❌ | `.color-blue\/10{--un-text-opacity:10%;color:color-mix(in oklch, var(--color-blue-400) var(--un-text-opacity), transparent);}` | `.color-blue\/10{color:rgb(96 165 250 / 0.1);}` |
| color-blue-gray | ❌ | `` | `.color-blue-gray{--un-text-opacity:1;color:rgb(148 163 184 / var(--un-text-opacity));}` |
| color-blue-gray-400 | ❌ | `` | `.color-blue-gray-400{--un-text-opacity:1;color:rgb(148 163 184 / var(--un-text-opacity));}` |
| color-bluegray | ❌ | `` | `.color-bluegray{--un-text-opacity:1;color:rgb(148 163 184 / var(--un-text-opacity));}` |
| color-bluegray-400 | ❌ | `` | `.color-bluegray-400{--un-text-opacity:1;color:rgb(148 163 184 / var(--un-text-opacity));}` |
| color-blue-gray-400/10 | ❌ | `` | `.color-blue-gray-400\/10{color:rgb(148 163 184 / 0.1);}` |
| color-blue-gray/10 | ❌ | `` | `.color-blue-gray\/10{color:rgb(148 163 184 / 0.1);}` |
| color-bluegray-400/10 | ❌ | `` | `.color-bluegray-400\/10{color:rgb(148 163 184 / 0.1);}` |
| color-bluegray/10 | ❌ | `` | `.color-bluegray\/10{color:rgb(148 163 184 / 0.1);}` |
| color-inherit | ✅ | `.color-inherit{color:inherit;}` | `.color-inherit{color:inherit;}` |
| color-initial | ✅ | `.color-initial{color:initial;}` | `.color-initial{color:initial;}` |
| text-inherit | ✅ | `.text-inherit{color:inherit;}` | `.text-inherit{color:inherit;}` |
| text-revert | ✅ | `.text-revert{color:revert;}` | `.text-revert{color:revert;}` |
| text-black/10 | ❌ | `.text-black\/10{--un-text-opacity:10%;color:color-mix(in oklch, var(--color-black) var(--un-text-opacity), transparent);}` | `.text-black\/10{color:rgb(0 0 0 / 0.1);}` |
| text-rose | ❌ | `.text-rose{--un-text-opacity:100%;color:color-mix(in oklch, var(--color-rose-400) var(--un-text-opacity), transparent);}` | `.text-rose{--un-text-opacity:1;color:rgb(251 113 133 / var(--un-text-opacity));}` |
| text-red-100 | ❌ | `.text-red-100{--un-text-opacity:100%;color:color-mix(in oklch, var(--color-red-100) var(--un-text-opacity), transparent);}` | `.text-red-100{--un-text-opacity:1;color:rgb(254 226 226 / var(--un-text-opacity));}` |
| text-red-200/10 | ❌ | `.text-red-200\/10{--un-text-opacity:10%;color:color-mix(in oklch, var(--color-red-200) var(--un-text-opacity), transparent);}` | `.text-red-200\/10{color:rgb(254 202 202 / 0.1);}` |
| text-red-300/20 | ❌ | `.text-red-300\/20{--un-text-opacity:20%;color:color-mix(in oklch, var(--color-red-300) var(--un-text-opacity), transparent);}` | `.text-red-300\/20{color:rgb(252 165 165 / 0.2);}` |
| text-red-300:20 | ❌ | `.text-red-300\:20{--un-text-opacity:20%;color:color-mix(in oklch, var(--color-red-300) var(--un-text-opacity), transparent);}` | `.text-red-300\:20{color:rgb(252 165 165 / 0.2);}` |
| text-red:20 | ❌ | `.text-red\:20{--un-text-opacity:20%;color:color-mix(in oklch, var(--color-red-400) var(--un-text-opacity), transparent);}` | `.text-red\:20{color:rgb(248 113 113 / 0.2);}` |
| text-red100 | ❌ | `.text-red100{--un-text-opacity:100%;color:color-mix(in oklch, var(--color-red-100) var(--un-text-opacity), transparent);}` | `.text-red100{--un-text-opacity:1;color:rgb(254 226 226 / var(--un-text-opacity));}` |
| text-red2 | ❌ | `` | `.text-red2{--un-text-opacity:1;color:rgb(254 202 202 / var(--un-text-opacity));}` |
| text-opacity-[13.3333333%] | ✅ | `.text-opacity-\[13\.3333333\%\]{--un-text-opacity:13.3333333%;}` | `.text-opacity-\[13\.3333333\%\]{--un-text-opacity:13.3333333%;}` |
| text-opacity-$opacity-variable | ✅ | `.text-opacity-\$opacity-variable{--un-text-opacity:var(--opacity-variable);}` | `.text-opacity-\$opacity-variable{--un-text-opacity:var(--opacity-variable);}` |
| text-[--variable] | ❌ | `.text-\[--variable\]{--un-text-opacity:100%;color:color-mix(in oklch, var(--variable) var(--un-text-opacity), transparent);}` | `.text-\[--variable\]{color:var(--variable);}` |
| text-[var(--color)] | ❌ | `.text-\[var\(--color\)\]{--un-text-opacity:100%;color:color-mix(in oklch, var(--color) var(--un-text-opacity), transparent);}` | `.text-\[var\(--color\)\]{color:var(--color);}` |
| text-[#124] | ❌ | `.text-\[\#124\]{--un-text-opacity:100%;color:color-mix(in oklch, #124 var(--un-text-opacity), transparent);}` | `.text-\[\#124\]{--un-text-opacity:1;color:rgb(17 34 68 / var(--un-text-opacity));}` |
| text-[2em] | ✅ | `.text-\[2em\]{font-size:2em;}` | `.text-\[2em\]{font-size:2em;}` |
| text-[100px] | ✅ | `.text-\[100px\]{font-size:100px;}` | `.text-\[100px\]{font-size:100px;}` |
| text-[calc(1em-1px)] | ✅ | `.text-\[calc\(1em-1px\)\]{font-size:calc(1em - 1px);}` | `.text-\[calc\(1em-1px\)\]{font-size:calc(1em - 1px);}` |
| text-[length:--variable] | ✅ | `.text-\[length\:--variable\]{font-size:var(--variable);}` | `.text-\[length\:--variable\]{font-size:var(--variable);}` |
| text-[length:var(--size)] | ✅ | `.text-\[length\:var\(--size\)\]{font-size:var(--size);}` | `.text-\[length\:var\(--size\)\]{font-size:var(--size);}` |
| text-[length:2em] | ✅ | `.text-\[length\:2em\]{font-size:2em;}` | `.text-\[length\:2em\]{font-size:2em;}` |
| text-[length:calc(1em-1px)] | ✅ | `.text-\[length\:calc\(1em-1px\)\]{font-size:calc(1em - 1px);}` | `.text-\[length\:calc\(1em-1px\)\]{font-size:calc(1em - 1px);}` |
| text-[color:--variable] | ❌ | `.text-\[color\:--variable\]{--un-text-opacity:100%;color:color-mix(in oklch, var(--variable) var(--un-text-opacity), transparent);}` | `.text-\[color\:--variable\]{color:var(--variable);}` |
| text-[color:var(--color)] | ❌ | `.text-\[color\:var\(--color\)\]{--un-text-opacity:100%;color:color-mix(in oklch, var(--color) var(--un-text-opacity), transparent);}` | `.text-\[color\:var\(--color\)\]{color:var(--color);}` |
| text-[color:var(--color-x)]:[trick] | ❌ | `.text-\[color\:var\(--color-x\)\]\:\[trick\]{--un-text-opacity:[trick]%;color:color-mix(in oklch, var(--color-x) var(--un-text-opacity), transparent);}` | `.text-\[color\:var\(--color-x\)\]\:\[trick\]{color:var(--color-x);}` |
| text-sm/3 | ❌ | `` | `.text-sm\/3{font-size:0.875rem;line-height:0.75rem;}` |
| text-sm/[10px] | ❌ | `` | `.text-sm\/\[10px\]{font-size:0.875rem;line-height:10px;}` |
| text-[11px]/4 | ❌ | `` | `.text-\[11px\]\/4{font-size:11px;line-height:1rem;}` |
| text-[12px]/[13px] | ❌ | `` | `.text-\[12px\]\/\[13px\]{font-size:12px;line-height:13px;}` |
| text-[length:var(--size)]:$leading | ❌ | `` | `.text-\[length\:var\(--size\)\]\:\$leading{font-size:var(--size);line-height:var(--leading);}` |
| text-[calc(1rem-1px)] | ✅ | `.text-\[calc\(1rem-1px\)\]{font-size:calc(1rem - 1px);}` | `.text-\[calc\(1rem-1px\)\]{font-size:calc(1rem - 1px);}` |
| text-size-1em | ✅ | `.text-size-1em{font-size:1em;}` | `.text-size-1em{font-size:1em;}` |
| font-size-1.5rem | ✅ | `.font-size-1\.5rem{font-size:1.5rem;}` | `.font-size-1\.5rem{font-size:1.5rem;}` |
| bg-[#153]/10 | ❌ | `.bg-\[\#153\]\/10{--un-bg-opacity:10%;background-color:color-mix(in oklch, #153 var(--un-bg-opacity), transparent);}` | `.bg-\[\#153\]\/10{background-color:rgb(17 85 51 / 0.1);}` |
| bg-[#1533] | ❌ | `.bg-\[\#1533\]{--un-bg-opacity:100%;background-color:color-mix(in oklch, #1533 var(--un-bg-opacity), transparent);}` | `.bg-\[\#1533\]{--un-bg-opacity:0.2;background-color:rgb(17 85 51 / var(--un-bg-opacity));}` |
| bg-[#1533]/10 | ❌ | `.bg-\[\#1533\]\/10{--un-bg-opacity:10%;background-color:color-mix(in oklch, #1533 var(--un-bg-opacity), transparent);}` | `.bg-\[\#1533\]\/10{background-color:rgb(17 85 51 / 0.1);}` |
| bg-[rgba(1,2,3,0.5)] | ❌ | `.bg-\[rgba\(1\,2\,3\,0\.5\)\]{--un-bg-opacity:100%;background-color:color-mix(in oklch, rgba(1,2,3,0.5) var(--un-bg-opacity), transparent);}` | `.bg-\[rgba\(1\,2\,3\,0\.5\)\]{--un-bg-opacity:0.5;background-color:rgba(1, 2, 3, var(--un-bg-opacity));}` |
| bg-[rgba(4_5_6/0.7)] | ❌ | `.bg-\[rgba\(4_5_6\/0\.7\)\]{--un-bg-opacity:100%;background-color:color-mix(in oklch, rgba(4 5 6/0.7) var(--un-bg-opacity), transparent);}` | `.bg-\[rgba\(4_5_6\/0\.7\)\]{--un-bg-opacity:0.7;background-color:rgba(4, 5, 6, var(--un-bg-opacity));}` |
| bg-[rgba(4_5_6/0.7)]/80 | ❌ | `.bg-\[rgba\(4_5_6\/0\.7\)\]\/80{--un-bg-opacity:80%;background-color:color-mix(in oklch, rgba(4 5 6/0.7) var(--un-bg-opacity), transparent);}` | `.bg-\[rgba\(4_5_6\/0\.7\)\]\/80{background-color:rgba(4, 5, 6, 0.8);}` |
| bg-[rgb(4_5_6/0.7)]/[calc(100/3)] | ❌ | `.bg-\[rgb\(4_5_6\/0\.7\)\]\/\[calc\(100\/3\)\]{--un-bg-opacity:[calc(100/3)]%;background-color:color-mix(in oklch, rgb(4 5 6/0.7) var(--un-bg-opacity), transparent);}` | `.bg-\[rgb\(4_5_6\/0\.7\)\]\/\[calc\(100\/3\)\]{background-color:rgb(4 5 6 / calc(100 / 3));}` |
| bg-#452233/40 | ❌ | `.bg-\#452233\/40{--un-bg-opacity:40%;background-color:color-mix(in oklch, #452233 var(--un-bg-opacity), transparent);}` | `.bg-\#452233\/40{background-color:rgb(69 34 51 / 0.4);}` |
| bg-red-100 | ❌ | `.bg-red-100{--un-bg-opacity:100%;background-color:color-mix(in oklch, var(--color-red-100) var(--un-bg-opacity), transparent);}` | `.bg-red-100{--un-bg-opacity:1;background-color:rgb(254 226 226 / var(--un-bg-opacity));}` |
| bg-teal-100/55 | ❌ | `.bg-teal-100\/55{--un-bg-opacity:55%;background-color:color-mix(in oklch, var(--color-teal-100) var(--un-bg-opacity), transparent);}` | `.bg-teal-100\/55{background-color:rgb(204 251 241 / 0.55);}` |
| bg-teal-200:55 | ❌ | `.bg-teal-200\:55{--un-bg-opacity:55%;background-color:color-mix(in oklch, var(--color-teal-200) var(--un-bg-opacity), transparent);}` | `.bg-teal-200\:55{background-color:rgb(153 246 228 / 0.55);}` |
| bg-teal-300:[.55] | ❌ | `.bg-teal-300\:\[\.55\]{--un-bg-opacity:[.55]%;background-color:color-mix(in oklch, var(--color-teal-300) var(--un-bg-opacity), transparent);}` | `.bg-teal-300\:\[\.55\]{background-color:rgb(94 234 212 / .55);}` |
| bg-teal-400/[.55] | ❌ | `.bg-teal-400\/\[\.55\]{--un-bg-opacity:[.55]%;background-color:color-mix(in oklch, var(--color-teal-400) var(--un-bg-opacity), transparent);}` | `.bg-teal-400\/\[\.55\]{background-color:rgb(45 212 191 / .55);}` |
| bg-teal-500/[55%] | ❌ | `.bg-teal-500\/\[55\%\]{--un-bg-opacity:[55%]%;background-color:color-mix(in oklch, var(--color-teal-500) var(--un-bg-opacity), transparent);}` | `.bg-teal-500\/\[55\%\]{background-color:rgb(20 184 166 / 55%);}` |
| bg-hex-452233/40 | ❌ | `.bg-hex-452233\/40{--un-bg-opacity:40%;background-color:color-mix(in oklch, #452233 var(--un-bg-opacity), transparent);}` | `.bg-hex-452233\/40{background-color:rgb(69 34 51 / 0.4);}` |
| bg-opacity-45 | ❌ | `.bg-opacity-45{--un-bg-opacity:45%;}` | `.bg-opacity-45{--un-bg-opacity:0.45;}` |
| bg-opacity-[--opacity-variable] | ✅ | `.bg-opacity-\[--opacity-variable\]{--un-bg-opacity:var(--opacity-variable);}` | `.bg-opacity-\[--opacity-variable\]{--un-bg-opacity:var(--opacity-variable);}` |
| bg-opacity-$opacity-variable | ✅ | `.bg-opacity-\$opacity-variable{--un-bg-opacity:var(--opacity-variable);}` | `.bg-opacity-\$opacity-variable{--un-bg-opacity:var(--opacity-variable);}` |
| bg-[10px] | ✅ | `.bg-\[10px\]{background-position:10px;}` | `.bg-\[10px\]{background-position:10px;}` |
| bg-[10%] | ✅ | `.bg-\[10\%\]{background-position:10%;}` | `.bg-\[10\%\]{background-position:10%;}` |
| bg-[10vw] | ✅ | `.bg-\[10vw\]{background-position:10vw;}` | `.bg-\[10vw\]{background-position:10vw;}` |
| bg-[calc(10%+10px)] | ✅ | `.bg-\[calc\(10\%\+10px\)\]{background-position:calc(10% + 10px);}` | `.bg-\[calc\(10\%\+10px\)\]{background-position:calc(10% + 10px);}` |
| bg-[calc(10vw+10px)] | ✅ | `.bg-\[calc\(10vw\+10px\)\]{background-position:calc(10vw + 10px);}` | `.bg-\[calc\(10vw\+10px\)\]{background-position:calc(10vw + 10px);}` |
| bg-[url(https://test.unocss.png)] | ✅ | `.bg-\[url\(https\:\/\/test\.unocss\.png\)\]{--un-url:url(https://test.unocss.png);background-image:var(--un-url);}` | `.bg-\[url\(https\:\/\/test\.unocss\.png\)\]{--un-url:url(https://test.unocss.png);background-image:var(--un-url);}` |
| bg-[image:$variable] | ✅ | `.bg-\[image\:\$variable\]{background-image:var(--variable);}` | `.bg-\[image\:\$variable\]{background-image:var(--variable);}` |
| bg-[image:https://test.unocss.png] | ✅ | `.bg-\[image\:https\:\/\/test\.unocss\.png\]{background-image:url(https://test.unocss.png);}` | `.bg-\[image\:https\:\/\/test\.unocss\.png\]{background-image:url(https://test.unocss.png);}` |
| bg-[length:--variable] | ✅ | `.bg-\[length\:--variable\]{background-size:var(--variable);}` | `.bg-\[length\:--variable\]{background-size:var(--variable);}` |
| bg-[length:10_20rem] | ✅ | `.bg-\[length\:10_20rem\]{background-size:10px 20rem;}` | `.bg-\[length\:10_20rem\]{background-size:10px 20rem;}` |
| bg-[length:1/2_20rem] | ✅ | `.bg-\[length\:1\/2_20rem\]{background-size:50% 20rem;}` | `.bg-\[length\:1\/2_20rem\]{background-size:50% 20rem;}` |
| bg-[size:--variable] | ✅ | `.bg-\[size\:--variable\]{background-size:var(--variable);}` | `.bg-\[size\:--variable\]{background-size:var(--variable);}` |
| bg-[size:10_20rem] | ✅ | `.bg-\[size\:10_20rem\]{background-size:10px 20rem;}` | `.bg-\[size\:10_20rem\]{background-size:10px 20rem;}` |
| bg-[size:1/2_20rem] | ✅ | `.bg-\[size\:1\/2_20rem\]{background-size:50% 20rem;}` | `.bg-\[size\:1\/2_20rem\]{background-size:50% 20rem;}` |
| bg-[position:--variable] | ✅ | `.bg-\[position\:--variable\]{background-position:var(--variable);}` | `.bg-\[position\:--variable\]{background-position:var(--variable);}` |
| bg-[position:10_20rem] | ✅ | `.bg-\[position\:10_20rem\]{background-position:10px 20rem;}` | `.bg-\[position\:10_20rem\]{background-position:10px 20rem;}` |
| bg-[position:1/2_20rem] | ✅ | `.bg-\[position\:1\/2_20rem\]{background-position:50% 20rem;}` | `.bg-\[position\:1\/2_20rem\]{background-position:50% 20rem;}` |
| bg-[position:bottom_left_10%] | ✅ | `.bg-\[position\:bottom_left_10\%\]{background-position:bottom left 10%;}` | `.bg-\[position\:bottom_left_10\%\]{background-position:bottom left 10%;}` |
| bg-[position:top_right_1/3] | ✅ | `.bg-\[position\:top_right_1\/3\]{background-position:top right 33.3333333333%;}` | `.bg-\[position\:top_right_1\/3\]{background-position:top right 33.3333333333%;}` |
| bg-[linear-gradient(45deg,#0072ff,#00d2e8,#04fd8f,#70fd6c)] | ✅ | `.bg-\[linear-gradient\(45deg\,\#0072ff\,\#00d2e8\,\#04fd8f\,\#70fd6c\)\]{background-image:linear-gradient(45deg,#0072ff,#00d2e8,#04fd8f,#70fd6c);}` | `.bg-\[linear-gradient\(45deg\,\#0072ff\,\#00d2e8\,\#04fd8f\,\#70fd6c\)\]{background-image:linear-gradient(45deg,#0072ff,#00d2e8,#04fd8f,#70fd6c);}` |
| bg-[conic-gradient(red,blue)] | ✅ | `.bg-\[conic-gradient\(red\,blue\)\]{background-image:conic-gradient(red,blue);}` | `.bg-\[conic-gradient\(red\,blue\)\]{background-image:conic-gradient(red,blue);}` |
| bg-[radial-gradient(red,blue)] | ✅ | `.bg-\[radial-gradient\(red\,blue\)\]{background-image:radial-gradient(red,blue);}` | `.bg-\[radial-gradient\(red\,blue\)\]{background-image:radial-gradient(red,blue);}` |
| ring-red2 | ❌ | `` | `.ring-red2{--un-ring-opacity:1;--un-ring-color:rgb(254 202 202 / var(--un-ring-opacity));}` |
| ring-red2/5 | ❌ | `` | `.ring-red2\/5{--un-ring-color:rgb(254 202 202 / 0.05);}` |
| ring-px | ❌ | `.ring-px{--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(1px + var(--un-ring-offset-width)) var(--un-ring-color, currentColor);box-shadow:var(--un-inset-shadow), var(--un-inset-ring-shadow), var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}` | `.ring-px{--un-ring-width:1px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}` |
| ring-width-px | ❌ | `` | `.ring-width-px{--un-ring-width:1px;}` |
| ring-size-px | ❌ | `` | `.ring-size-px{--un-ring-width:1px;}` |
| ring-op-5 | ❌ | `.ring-op-5{--un-ring-opacity:5%;}` | `.ring-op-5{--un-ring-opacity:0.05;}` |
| ring-op-$opacity-variable | ✅ | `.ring-op-\$opacity-variable{--un-ring-opacity:var(--opacity-variable);}` | `.ring-op-\$opacity-variable{--un-ring-opacity:var(--opacity-variable);}` |
| ring-offset-red2 | ❌ | `` | `.ring-offset-red2{--un-ring-offset-opacity:1;--un-ring-offset-color:rgb(254 202 202 / var(--un-ring-offset-opacity));}` |
| ring-offset-red2/5 | ❌ | `` | `.ring-offset-red2\/5{--un-ring-offset-color:rgb(254 202 202 / 0.05);}` |
| ring-offset-op-5 | ❌ | `.ring-offset-op-5{--un-ring-offset-opacity:5%;}` | `.ring-offset-op-5{--un-ring-offset-opacity:0.05;}` |
| ring-offset-op-$opacity-variable | ✅ | `.ring-offset-op-\$opacity-variable{--un-ring-offset-opacity:var(--opacity-variable);}` | `.ring-offset-op-\$opacity-variable{--un-ring-offset-opacity:var(--opacity-variable);}` |
| decoration-none | ✅ | `.decoration-none{text-decoration:none;}` | `.decoration-none{text-decoration:none;}` |
| decoration-size-none | ❌ | `` | `.decoration-size-none{text-decoration-thickness:0;}` |
| decoration-transparent | ❌ | `` | `.decoration-transparent{-webkit-text-decoration-color:transparent;text-decoration-color:transparent;}` |
| decoration-purple/50 | ❌ | `.decoration-purple\/50{-webkit-text-decoration-color:color-mix(in oklch, var(--color-purple-400) var(--un-line-opacity), transparent);--un-line-opacity:50%;text-decoration-color:color-mix(in oklch, var(--color-purple-400) var(--un-line-opacity), transparent);}` | `.decoration-purple\/50{-webkit-text-decoration-color:rgb(192 132 252 / 0.5);text-decoration-color:rgb(192 132 252 / 0.5);}` |
| decoration-5 | ✅ | `.decoration-5{text-decoration-thickness:5px;}` | `.decoration-5{text-decoration-thickness:5px;}` |
| decoration-offset-0.6rem | ✅ | `.decoration-offset-0\.6rem{text-underline-offset:0.6rem;}` | `.decoration-offset-0\.6rem{text-underline-offset:0.6rem;}` |
| decoration-offset-none | ❌ | `` | `.decoration-offset-none{text-underline-offset:0;}` |
| decoration-underline | ✅ | `.decoration-underline{text-decoration-line:underline;}` | `.decoration-underline{text-decoration-line:underline;}` |
| decoration-size-unset | ✅ | `.decoration-size-unset{text-decoration-thickness:unset;}` | `.decoration-size-unset{text-decoration-thickness:unset;}` |
| decoration-[calc(1rem-1px)] | ✅ | `.decoration-\[calc\(1rem-1px\)\]{text-decoration-thickness:calc(1rem - 1px);}` | `.decoration-\[calc\(1rem-1px\)\]{text-decoration-thickness:calc(1rem - 1px);}` |
| underline | ✅ | `.underline{text-decoration-line:underline;}` | `.underline{text-decoration-line:underline;}` |
| underline-dashed | ✅ | `.underline-dashed{text-decoration-style:dashed;}` | `.underline-dashed{text-decoration-style:dashed;}` |
| underline-red-500 | ❌ | `.underline-red-500{-webkit-text-decoration-color:color-mix(in oklch, var(--color-red-500) var(--un-line-opacity), transparent);--un-line-opacity:100%;text-decoration-color:color-mix(in oklch, var(--color-red-500) var(--un-line-opacity), transparent);}` | `.underline-red-500{-webkit-text-decoration-color:rgb(239 68 68 / var(--un-line-opacity));--un-line-opacity:1;text-decoration-color:rgb(239 68 68 / var(--un-line-opacity));}` |
| underline-op80 | ❌ | `.underline-op80{--un-line-opacity:80%;}` | `.underline-op80{--un-line-opacity:0.8;}` |
| underline-op-$opacity-variable | ✅ | `.underline-op-\$opacity-variable{--un-line-opacity:var(--opacity-variable);}` | `.underline-op-\$opacity-variable{--un-line-opacity:var(--opacity-variable);}` |
| underline-auto | ✅ | `.underline-auto{text-decoration-thickness:auto;}` | `.underline-auto{text-decoration-thickness:auto;}` |
| underline-inherit | ✅ | `.underline-inherit{text-decoration-style:inherit;}` | `.underline-inherit{text-decoration-style:inherit;}` |
| underline-5 | ✅ | `.underline-5{text-decoration-thickness:5px;}` | `.underline-5{text-decoration-thickness:5px;}` |
| underline-[calc(1rem-1px)] | ✅ | `.underline-\[calc\(1rem-1px\)\]{text-decoration-thickness:calc(1rem - 1px);}` | `.underline-\[calc\(1rem-1px\)\]{text-decoration-thickness:calc(1rem - 1px);}` |
| underline-1rem | ✅ | `.underline-1rem{text-decoration-thickness:1rem;}` | `.underline-1rem{text-decoration-thickness:1rem;}` |
| underline-offset-auto | ✅ | `.underline-offset-auto{text-underline-offset:auto;}` | `.underline-offset-auto{text-underline-offset:auto;}` |
| underline-offset-4 | ✅ | `.underline-offset-4{text-underline-offset:4px;}` | `.underline-offset-4{text-underline-offset:4px;}` |
| underline-offset-0.6rem | ✅ | `.underline-offset-0\.6rem{text-underline-offset:0.6rem;}` | `.underline-offset-0\.6rem{text-underline-offset:0.6rem;}` |
| flex-[hi] | ✅ | `.flex-\[hi\]{flex:hi;}` | `.flex-\[hi\]{flex:hi;}` |
| flex-[1_0_100%] | ✅ | `.flex-\[1_0_100\%\]{flex:1 0 100%;}` | `.flex-\[1_0_100\%\]{flex:1 0 100%;}` |
| flex-[0_0_auto] | ✅ | `.flex-\[0_0_auto\]{flex:0 0 auto;}` | `.flex-\[0_0_auto\]{flex:0 0 auto;}` |
| flex-[1_1_1/2] | ✅ | `.flex-\[1_1_1\/2\]{flex:1 1 50%;}` | `.flex-\[1_1_1\/2\]{flex:1 1 50%;}` |
| flex-[1_auto] | ✅ | `.flex-\[1_auto\]{flex:1 auto;}` | `.flex-\[1_auto\]{flex:1 auto;}` |
| flex-[fit-content] | ✅ | `.flex-\[fit-content\]{flex:fit-content;}` | `.flex-\[fit-content\]{flex:fit-content;}` |
| flex | ✅ | `.flex{display:flex;}` | `.flex{display:flex;}` |
| flex-row | ✅ | `.flex-row{flex-direction:row;}` | `.flex-row{flex-direction:row;}` |
| flex-col-reverse | ✅ | `.flex-col-reverse{flex-direction:column-reverse;}` | `.flex-col-reverse{flex-direction:column-reverse;}` |
| flex-shrink | ✅ | `.flex-shrink{flex-shrink:1;}` | `.flex-shrink{flex-shrink:1;}` |
| flex-shrink-0 | ✅ | `.flex-shrink-0{flex-shrink:0;}` | `.flex-shrink-0{flex-shrink:0;}` |
| flex-grow | ✅ | `.flex-grow{flex-grow:1;}` | `.flex-grow{flex-grow:1;}` |
| flex-grow-0 | ✅ | `.flex-grow-0{flex-grow:0;}` | `.flex-grow-0{flex-grow:0;}` |
| !flex-grow-0 | ✅ | `.\!flex-grow-0{flex-grow:0 !important;}` | `.\!flex-grow-0{flex-grow:0 !important;}` |
| flex-basis-0 | ❌ | `.flex-basis-0{flex-basis:calc(var(--spacing) * 0);}` | `.flex-basis-0{flex-basis:0;}` |
| flex-basis-1/2 | ❌ | `.flex-basis-1\/2{flex-basis:calc(var(--spacing) * 0.5);}` | `.flex-basis-1\/2{flex-basis:50%;}` |
| flex-$variable | ✅ | `.flex-\$variable{flex:var(--variable);}` | `.flex-\$variable{flex:var(--variable);}` |
| flex-[$variable1_$variable2_$variable3] | ✅ | `.flex-\[\$variable1_\$variable2_\$variable3\]{flex:var(--variable1) var(--variable2) var(--variable3);}` | `.flex-\[\$variable1_\$variable2_\$variable3\]{flex:var(--variable1) var(--variable2) var(--variable3);}` |
| shrink | ✅ | `.shrink{flex-shrink:1;}` | `.shrink{flex-shrink:1;}` |
| shrink-0 | ✅ | `.shrink-0{flex-shrink:0;}` | `.shrink-0{flex-shrink:0;}` |
| shrink-10 | ✅ | `.shrink-10{flex-shrink:10;}` | `.shrink-10{flex-shrink:10;}` |
| shrink-$variable | ✅ | `.shrink-\$variable{flex-shrink:var(--variable);}` | `.shrink-\$variable{flex-shrink:var(--variable);}` |
| grow | ✅ | `.grow{flex-grow:1;}` | `.grow{flex-grow:1;}` |
| grow-0 | ✅ | `.grow-0{flex-grow:0;}` | `.grow-0{flex-grow:0;}` |
| grow-10 | ✅ | `.grow-10{flex-grow:10;}` | `.grow-10{flex-grow:10;}` |
| grow-$variable | ✅ | `.grow-\$variable{flex-grow:var(--variable);}` | `.grow-\$variable{flex-grow:var(--variable);}` |
| basis-auto | ✅ | `.basis-auto{flex-basis:auto;}` | `.basis-auto{flex-basis:auto;}` |
| basis-none | ❌ | `` | `.basis-none{flex-basis:0;}` |
| gap-none | ❌ | `` | `.gap-none{gap:0;}` |
| gap-inherit | ✅ | `.gap-inherit{gap:inherit;}` | `.gap-inherit{gap:inherit;}` |
| gap-4 | ❌ | `.gap-4{gap:calc(var(--spacing) * 4);}` | `.gap-4{gap:1rem;}` |
| gap-x-1 | ❌ | `.gap-x-1{column-gap:calc(var(--spacing) * 1);}` | `.gap-x-1{column-gap:0.25rem;}` |
| gap-col-1 | ❌ | `.gap-col-1{column-gap:calc(var(--spacing) * 1);}` | `.gap-col-1{column-gap:0.25rem;}` |
| gap2 | ❌ | `.gap2{gap:calc(var(--spacing) * 2);}` | `.gap2{gap:0.5rem;}` |
| flex-gap-y-1 | ❌ | `.flex-gap-y-1{row-gap:calc(var(--spacing) * 1);}` | `.flex-gap-y-1{row-gap:0.25rem;}` |
| flex-gap-row-1 | ❌ | `.flex-gap-row-1{row-gap:calc(var(--spacing) * 1);}` | `.flex-gap-row-1{row-gap:0.25rem;}` |
| flex-gap-y-unset | ✅ | `.flex-gap-y-unset{row-gap:unset;}` | `.flex-gap-y-unset{row-gap:unset;}` |
| flex-gap-row-unset | ✅ | `.flex-gap-row-unset{row-gap:unset;}` | `.flex-gap-row-unset{row-gap:unset;}` |
| grid-gap-y-1 | ❌ | `.grid-gap-y-1{row-gap:calc(var(--spacing) * 1);}` | `.grid-gap-y-1{row-gap:0.25rem;}` |
| grid-gap-row-1 | ❌ | `.grid-gap-row-1{row-gap:calc(var(--spacing) * 1);}` | `.grid-gap-row-1{row-gap:0.25rem;}` |
| grid-cols-$1 | ✅ | `.grid-cols-\$1{grid-template-columns:var(--\31 );}` | `.grid-cols-\$1{grid-template-columns:var(--\31 );}` |
| grid-cols-[1fr_2fr_100px_min-content] | ✅ | `.grid-cols-\[1fr_2fr_100px_min-content\]{grid-template-columns:1fr 2fr 100px min-content;}` | `.grid-cols-\[1fr_2fr_100px_min-content\]{grid-template-columns:1fr 2fr 100px min-content;}` |
| grid-cols-2 | ✅ | `.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr));}` | `.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr));}` |
| grid-cols-[repeat(3,auto)] | ✅ | `.grid-cols-\[repeat\(3\,auto\)\]{grid-template-columns:repeat(3,auto);}` | `.grid-cols-\[repeat\(3\,auto\)\]{grid-template-columns:repeat(3,auto);}` |
| cols-[repeat(3,auto)] | ✅ | `.cols-\[repeat\(3\,auto\)\]{grid-template-columns:repeat(3,auto);}` | `.cols-\[repeat\(3\,auto\)\]{grid-template-columns:repeat(3,auto);}` |
| grid-rows-[1fr_2fr_100px_min-content] | ✅ | `.grid-rows-\[1fr_2fr_100px_min-content\]{grid-template-rows:1fr 2fr 100px min-content;}` | `.grid-rows-\[1fr_2fr_100px_min-content\]{grid-template-rows:1fr 2fr 100px min-content;}` |
| grid-rows-3 | ✅ | `.grid-rows-3{grid-template-rows:repeat(3,minmax(0,1fr));}` | `.grid-rows-3{grid-template-rows:repeat(3,minmax(0,1fr));}` |
| rows-3 | ✅ | `.rows-3{grid-template-rows:repeat(3,minmax(0,1fr));}` | `.rows-3{grid-template-rows:repeat(3,minmax(0,1fr));}` |
| grid | ✅ | `.grid{display:grid;}` | `.grid{display:grid;}` |
| auto-rows-min | ✅ | `.auto-rows-min{grid-auto-rows:min-content;}` | `.auto-rows-min{grid-auto-rows:min-content;}` |
| auto-rows-fr | ✅ | `.auto-rows-fr{grid-auto-rows:minmax(0,1fr);}` | `.auto-rows-fr{grid-auto-rows:minmax(0,1fr);}` |
| row-auto | ✅ | `.row-auto{grid-row:auto;}` | `.row-auto{grid-row:auto;}` |
| row-span-[hi] | ✅ | `.row-span-\[hi\]{grid-row:span hi/span hi;}` | `.row-span-\[hi\]{grid-row:span hi/span hi;}` |
| row-[span_1/span_2] | ✅ | `.row-\[span_1\/span_2\]{grid-row:span 1/span 2;}` | `.row-\[span_1\/span_2\]{grid-row:span 1/span 2;}` |
| auto-cols-auto | ✅ | `.auto-cols-auto{grid-auto-columns:auto;}` | `.auto-cols-auto{grid-auto-columns:auto;}` |
| auto-rows-auto | ✅ | `.auto-rows-auto{grid-auto-rows:auto;}` | `.auto-rows-auto{grid-auto-rows:auto;}` |
| col-span-1 | ✅ | `.col-span-1{grid-column:span 1/span 1;}` | `.col-span-1{grid-column:span 1/span 1;}` |
| row-span-full | ✅ | `.row-span-full{grid-row:1/-1;}` | `.row-span-full{grid-row:1/-1;}` |
| row-end-1 | ✅ | `.row-end-1{grid-row-end:1;}` | `.row-end-1{grid-row-end:1;}` |
| row-start-full | ✅ | `.row-start-full{grid-row-start:full;}` | `.row-start-full{grid-row-start:full;}` |
| auto-flow-col-dense | ✅ | `.auto-flow-col-dense{grid-auto-flow:column dense;}` | `.auto-flow-col-dense{grid-auto-flow:column dense;}` |
| grid-cols-minmax-1rem | ✅ | `.grid-cols-minmax-1rem{grid-template-columns:repeat(auto-fill,minmax(1rem,1fr));}` | `.grid-cols-minmax-1rem{grid-template-columns:repeat(auto-fill,minmax(1rem,1fr));}` |
| grid-rows-minmax-100px | ✅ | `.grid-rows-minmax-100px{grid-template-rows:repeat(auto-fill,minmax(100px,1fr));}` | `.grid-rows-minmax-100px{grid-template-rows:repeat(auto-fill,minmax(100px,1fr));}` |
| grid-flow-dense | ✅ | `.grid-flow-dense{grid-auto-flow:dense;}` | `.grid-flow-dense{grid-auto-flow:dense;}` |
| grid-flow-col-dense | ✅ | `.grid-flow-col-dense{grid-auto-flow:column dense;}` | `.grid-flow-col-dense{grid-auto-flow:column dense;}` |
| grid-area-[content] | ✅ | `.grid-area-\[content\]{grid-area:content;}` | `.grid-area-\[content\]{grid-area:content;}` |
| grid-area-$variable | ✅ | `.grid-area-\$variable{grid-area:var(--variable);}` | `.grid-area-\$variable{grid-area:var(--variable);}` |
| grid-areas-[prepend_content_append] | ✅ | `.grid-areas-\[prepend_content_append\]{grid-template-areas:"prepend content append";}` | `.grid-areas-\[prepend_content_append\]{grid-template-areas:"prepend content append";}` |
| grid-areas-[prepend_content_append]-[prepend_content_append] | ✅ | `.grid-areas-\[prepend_content_append\]-\[prepend_content_append\]{grid-template-areas:"prepend content append" "prepend content append";}` | `.grid-areas-\[prepend_content_append\]-\[prepend_content_append\]{grid-template-areas:"prepend content append" "prepend content append";}` |
| grid-areas-$variable | ✅ | `.grid-areas-\$variable{grid-template-areas:var(--variable);}` | `.grid-areas-\$variable{grid-template-areas:var(--variable);}` |
| grid-cols-subgrid | ✅ | `.grid-cols-subgrid{grid-template-columns:subgrid;}` | `.grid-cols-subgrid{grid-template-columns:subgrid;}` |
| grid-rows-subgrid | ✅ | `.grid-rows-subgrid{grid-template-rows:subgrid;}` | `.grid-rows-subgrid{grid-template-rows:subgrid;}` |
| of-y-visible | ❌ | `` | `.of-y-visible{overflow-y:visible;}` |
| of-x-unset | ❌ | `` | `.of-x-unset{overflow-x:unset;}` |
| overflow-auto | ❌ | `` | `.overflow-auto{overflow:auto;}` |
| overflow-inherit | ❌ | `` | `.overflow-inherit{overflow:inherit;}` |
| overflow-x-scroll | ❌ | `` | `.overflow-x-scroll{overflow-x:scroll;}` |
| overflow-y-clip | ❌ | `` | `.overflow-y-clip{overflow-y:clip;}` |
| static | ❌ | `` | `.static{position:static;}` |
| relative | ❌ | `` | `.relative{position:relative;}` |
| absolute | ❌ | `` | `.absolute{position:absolute;}` |
| pos-fixed | ❌ | `` | `.pos-fixed{position:fixed;}` |
| pos-unset | ❌ | `` | `.pos-unset{position:unset;}` |
| position-sticky | ❌ | `` | `.position-sticky{position:sticky;}` |
| position-inherit | ❌ | `` | `.position-inherit{position:inherit;}` |
| justify-inherit | ❌ | `` | `.justify-inherit{justify-content:inherit;}` |
| justify-start | ❌ | `` | `.justify-start{justify-content:flex-start;}` |
| justify-center | ❌ | `` | `.justify-center{justify-content:center;}` |
| justify-items-end | ❌ | `` | `.justify-items-end{justify-items:end;}` |
| justify-items-unset | ❌ | `` | `.justify-items-unset{justify-items:unset;}` |
| justify-self-stretch | ❌ | `` | `.justify-self-stretch{justify-self:stretch;}` |
| justify-self-revert | ❌ | `` | `.justify-self-revert{justify-self:revert;}` |
| order-first | ❌ | `` | `.order-first{order:-9999;}` |
| order-none | ❌ | `` | `.order-none{order:0;}` |
| content-start | ❌ | `` | `.content-start{align-content:flex-start;}` |
| content-inherit | ❌ | `` | `.content-inherit{align-content:inherit;}` |
| content-center | ❌ | `` | `.content-center{align-content:center;}` |
| items-end | ❌ | `` | `.items-end{align-items:flex-end;}` |
| items-unset | ❌ | `` | `.items-unset{align-items:unset;}` |
| self-stretch | ❌ | `` | `.self-stretch{align-self:stretch;}` |
| self-revert | ❌ | `` | `.self-revert{align-self:revert;}` |
| place-content-stretch | ❌ | `` | `.place-content-stretch{place-content:stretch;}` |
| place-items-stretch | ❌ | `` | `.place-items-stretch{place-items:stretch;}` |
| place-self-stretch | ❌ | `` | `.place-self-stretch{place-self:stretch;}` |
| place-content-inherit | ❌ | `` | `.place-content-inherit{place-content:inherit;}` |
| place-items-unset | ❌ | `` | `.place-items-unset{place-items:unset;}` |
| place-self-revert | ❌ | `` | `.place-self-revert{place-self:revert;}` |
| top-0 | ❌ | `` | `.top-0{top:0;}` |
| top-$top-height | ❌ | `` | `.top-\$top-height{top:var(--top-height);}` |
| inset-none | ❌ | `` | `.inset-none{inset:0;}` |
| inset-unset | ❌ | `` | `.inset-unset{inset:unset;}` |
| inset-x-5 | ❌ | `` | `.inset-x-5{left:1.25rem;right:1.25rem;}` |
| inset-y-5 | ❌ | `` | `.inset-y-5{top:1.25rem;bottom:1.25rem;}` |
| inset-t-5 | ❌ | `` | `.inset-t-5{top:1.25rem;}` |
| inset-b-5 | ❌ | `` | `.inset-b-5{bottom:1.25rem;}` |
| inset-e-5 | ❌ | `` | `.inset-e-5{inset-inline-end:1.25rem;}` |
| inset-e-inherit | ❌ | `` | `.inset-e-inherit{inset-inline-end:inherit;}` |
| inset-bs-5 | ❌ | `` | `.inset-bs-5{inset-block-start:1.25rem;}` |
| inset-ie-5 | ❌ | `` | `.inset-ie-5{inset-inline-end:1.25rem;}` |
| inset-ie-revert | ❌ | `` | `.inset-ie-revert{inset-inline-end:revert;}` |
| inset-0 | ❌ | `` | `.inset-0{inset:0;}` |
| inset-5 | ❌ | `` | `.inset-5{inset:1.25rem;}` |
| inset-[5px] | ❌ | `` | `.inset-\[5px\]{inset:5px;}` |
| inset-inline-5 | ❌ | `` | `.inset-inline-5{inset-inline-start:1.25rem;inset-inline-end:1.25rem;}` |
| inset-block-5 | ❌ | `` | `.inset-block-5{inset-block-start:1.25rem;inset-block-end:1.25rem;}` |
| inset-block-unset | ❌ | `` | `.inset-block-unset{inset-block-start:unset;inset-block-end:unset;}` |
| float-left | ❌ | `` | `.float-left{float:left;}` |
| float-none | ❌ | `` | `.float-none{float:none;}` |
| float-unset | ❌ | `` | `.float-unset{float:unset;}` |
| clear-both | ❌ | `` | `.clear-both{clear:both;}` |
| clear-none | ❌ | `` | `.clear-none{clear:none;}` |
| clear-revert | ❌ | `` | `.clear-revert{clear:revert;}` |
| box-content | ❌ | `` | `.box-content{box-sizing:content-box;}` |
| box-border | ❌ | `` | `.box-border{box-sizing:border-box;}` |
| box-inherit | ❌ | `` | `.box-inherit{box-sizing:inherit;}` |
| z0 | ❌ | `` | `.z0{z-index:0;}` |
| z-0 | ❌ | `` | `.z-0{z-index:0;}` |
| z-1 | ❌ | `` | `.z-1{z-index:1;}` |
| z-100 | ❌ | `` | `.z-100{z-index:100;}` |
| z-auto | ❌ | `` | `.z-auto{z-index:auto;}` |
| z-inherit | ❌ | `` | `.z-inherit{z-index:inherit;}` |
| pos-z--1 | ❌ | `` | `.pos-z--1{z-index:-1;}` |
| position-z-auto | ❌ | `` | `.position-z-auto{z-index:auto;}` |
| ring | ❌ | `.ring{--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(1px + var(--un-ring-offset-width)) var(--un-ring-color, currentColor);box-shadow:var(--un-inset-shadow), var(--un-inset-ring-shadow), var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}` | `.ring{--un-ring-width:3px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}` |
| ring-10 | ❌ | `.ring-10{--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(10px + var(--un-ring-offset-width)) var(--un-ring-color, currentColor);box-shadow:var(--un-inset-shadow), var(--un-inset-ring-shadow), var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}` | `.ring-10{--un-ring-width:10px;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}` |
| ring-none | ❌ | `` | `.ring-none{--un-ring-width:0;--un-ring-offset-shadow:var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);--un-ring-shadow:var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}` |
| ring-offset | ❌ | `.ring-offset{--un-ring-offset-width:1px;--un-ring-offset-shadow:var(--un-ring-inset,) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);}` | `.ring-offset{--un-ring-offset-width:1px;}` |
| ring-offset-none | ❌ | `` | `.ring-offset-none{--un-ring-offset-width:0;}` |
| ring-offset-4 | ❌ | `.ring-offset-4{--un-ring-offset-width:4px;--un-ring-offset-shadow:var(--un-ring-inset,) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color);}` | `.ring-offset-4{--un-ring-offset-width:4px;}` |
| ring-offset-green5 | ❌ | `` | `.ring-offset-green5{--un-ring-offset-opacity:1;--un-ring-offset-color:rgb(34 197 94 / var(--un-ring-offset-opacity));}` |
| ring-inset | ✅ | `.ring-inset{--un-ring-inset:inset;}` | `.ring-inset{--un-ring-inset:inset;}` |
| ring-[calc(1rem-1px)] | ❌ | `.ring-\[calc\(1rem-1px\)\]{--un-ring-opacity:100%;--un-ring-color:color-mix(in oklch, calc(1rem - 1px) var(--un-ring-opacity), transparent);}` | `.ring-\[calc\(1rem-1px\)\]{--un-ring-width:calc(1rem - 1px);}` |
| shadow | ❌ | `.shadow{--un-shadow:var(--un-shadow-inset) 0 1px 3px 0 var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 1px 2px -1px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-inset-shadow), var(--un-inset-ring-shadow), var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}` | `.shadow{--un-shadow:var(--un-shadow-inset) 0 1px 3px 0 var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 1px 2px -1px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}` |
| shadow-transparent | ❌ | `` | `.shadow-transparent{--un-shadow-color:transparent;}` |
| shadow-current | ❌ | `` | `.shadow-current{--un-shadow-color:currentColor;}` |
| shadow-none | ❌ | `.shadow-none{--un-shadow:0 0 var(--un-shadow-color, rgb(0 0 0 / 0));box-shadow:var(--un-inset-shadow), var(--un-inset-ring-shadow), var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}` | `.shadow-none{--un-shadow:0 0 var(--un-shadow-color, rgb(0 0 0 / 0));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}` |
| shadow-xl | ❌ | `.shadow-xl{--un-shadow:var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-inset-shadow), var(--un-inset-ring-shadow), var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}` | `.shadow-xl{--un-shadow:var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}` |
| shadow-green-500 | ❌ | `.shadow-green-500{--un-shadow-opacity:100%;--un-shadow-color:color-mix(in oklch, var(--color-green-500) var(--un-shadow-opacity), transparent);}` | `.shadow-green-500{--un-shadow-opacity:1;--un-shadow-color:rgb(34 197 94 / var(--un-shadow-opacity));}` |
| shadow-green-900/50 | ❌ | `.shadow-green-900\/50{--un-shadow-opacity:50%;--un-shadow-color:color-mix(in oklch, var(--color-green-900) var(--un-shadow-opacity), transparent);}` | `.shadow-green-900\/50{--un-shadow-color:rgb(20 83 45 / 0.5);}` |
| shadow-[#fff] | ❌ | `.shadow-\[\#fff\]{--un-shadow-opacity:100%;--un-shadow-color:color-mix(in oklch, #fff var(--un-shadow-opacity), transparent);}` | `.shadow-\[\#fff\]{--un-shadow-opacity:1;--un-shadow-color:rgb(255 255 255 / var(--un-shadow-opacity));}` |
| shadow-op-50 | ❌ | `.shadow-op-50{--un-shadow-opacity:50%;}` | `.shadow-op-50{--un-shadow-opacity:0.5;}` |
| shadow-op-$opacity-variable | ✅ | `.shadow-op-\$opacity-variable{--un-shadow-opacity:var(--opacity-variable);}` | `.shadow-op-\$opacity-variable{--un-shadow-opacity:var(--opacity-variable);}` |
| shadow-inset | ✅ | `.shadow-inset{--un-shadow-inset:inset;}` | `.shadow-inset{--un-shadow-inset:inset;}` |
| shadow-[0px_4px_4px_0px_rgba(237,_0,_0,_1)] | ❌ | `.shadow-\[0px_4px_4px_0px_rgba\(237\,_0\,_0\,_1\)\]{--un-shadow:0px 4px 4px 0px var(--un-shadow-color, rgba(237, 0, 0, 1));box-shadow:var(--un-inset-shadow), var(--un-inset-ring-shadow), var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}` | `.shadow-\[0px_4px_4px_0px_rgba\(237\,_0\,_0\,_1\)\]{--un-shadow:0px 4px 4px 0px var(--un-shadow-color, rgba(237, 0, 0, 1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}` |
| shadow-[0px_4px_4px_0px_rgba(238_0_0/1)] | ❌ | `.shadow-\[0px_4px_4px_0px_rgba\(238_0_0\/1\)\]{--un-shadow:0px 4px 4px 0px var(--un-shadow-color, rgba(238, 0, 0, 1));box-shadow:var(--un-inset-shadow), var(--un-inset-ring-shadow), var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}` | `.shadow-\[0px_4px_4px_0px_rgba\(238_0_0\/1\)\]{--un-shadow:0px 4px 4px 0px var(--un-shadow-color, rgba(238, 0, 0, 1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}` |
| shadow-$variable | ❌ | `.shadow-\$variable{--un-shadow:var(--variable);box-shadow:var(--un-inset-shadow), var(--un-inset-ring-shadow), var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}` | `.shadow-\$variable{--un-shadow:var(--variable);box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}` |
| h-auto | ✅ | `.h-auto{height:auto;}` | `.h-auto{height:auto;}` |
| h-inherit | ✅ | `.h-inherit{height:inherit;}` | `.h-inherit{height:inherit;}` |
| h-1 | ❌ | `.h-1{height:calc(var(--spacing) * 1);}` | `.h-1{height:0.25rem;}` |
| h-1.000% | ✅ | `.h-1\.000\%{height:1%;}` | `.h-1\.000\%{height:1%;}` |
| h-1.001% | ✅ | `.h-1\.001\%{height:1.001%;}` | `.h-1\.001\%{height:1.001%;}` |
| h-1.010% | ✅ | `.h-1\.010\%{height:1.01%;}` | `.h-1\.010\%{height:1.01%;}` |
| h-1.100% | ✅ | `.h-1\.100\%{height:1.1%;}` | `.h-1\.100\%{height:1.1%;}` |
| h20 | ❌ | `.h20{height:calc(var(--spacing) * 20);}` | `.h20{height:5rem;}` |
| h1/100 | ✅ | `.h1\/100{height:1%;}` | `.h1\/100{height:1%;}` |
| h-21 | ❌ | `.h-21{height:calc(var(--spacing) * 21);}` | `.h-21{height:5.25rem;}` |
| h-1/2 | ✅ | `.h-1\/2{height:50%;}` | `.h-1\/2{height:50%;}` |
| h-2/2 | ✅ | `.h-2\/2{height:100%;}` | `.h-2\/2{height:100%;}` |
| h-3/2 | ✅ | `.h-3\/2{height:150%;}` | `.h-3\/2{height:150%;}` |
| h-1/3 | ✅ | `.h-1\/3{height:33.3333333333%;}` | `.h-1\/3{height:33.3333333333%;}` |
| h-2/3 | ✅ | `.h-2\/3{height:66.6666666667%;}` | `.h-2\/3{height:66.6666666667%;}` |
| h-1/4 | ✅ | `.h-1\/4{height:25%;}` | `.h-1\/4{height:25%;}` |
| h-2/4 | ✅ | `.h-2\/4{height:50%;}` | `.h-2\/4{height:50%;}` |
| h-3/4 | ✅ | `.h-3\/4{height:75%;}` | `.h-3\/4{height:75%;}` |
| h-1/5 | ✅ | `.h-1\/5{height:20%;}` | `.h-1\/5{height:20%;}` |
| h-1/6 | ✅ | `.h-1\/6{height:16.6666666667%;}` | `.h-1\/6{height:16.6666666667%;}` |
| h-2/6 | ✅ | `.h-2\/6{height:33.3333333333%;}` | `.h-2\/6{height:33.3333333333%;}` |
| h-3/6 | ✅ | `.h-3\/6{height:50%;}` | `.h-3\/6{height:50%;}` |
| h-4/6 | ✅ | `.h-4\/6{height:66.6666666667%;}` | `.h-4\/6{height:66.6666666667%;}` |
| h-5/6 | ✅ | `.h-5\/6{height:83.3333333333%;}` | `.h-5\/6{height:83.3333333333%;}` |
| h-6/7 | ✅ | `.h-6\/7{height:85.7142857143%;}` | `.h-6\/7{height:85.7142857143%;}` |
| h-8/7 | ✅ | `.h-8\/7{height:114.2857142857%;}` | `.h-8\/7{height:114.2857142857%;}` |
| h-lg | ✅ | `.h-lg{height:32rem;}` | `.h-lg{height:32rem;}` |
| w-none | ✅ | `` | `` |
| w-auto | ✅ | `.w-auto{width:auto;}` | `.w-auto{width:auto;}` |
| w-unset | ✅ | `.w-unset{width:unset;}` | `.w-unset{width:unset;}` |
| w-1 | ❌ | `.w-1{width:calc(var(--spacing) * 1);}` | `.w-1{width:0.25rem;}` |
| w-21 | ❌ | `.w-21{width:calc(var(--spacing) * 21);}` | `.w-21{width:5.25rem;}` |
| w-1/4 | ✅ | `.w-1\/4{width:25%;}` | `.w-1\/4{width:25%;}` |
| w-lg | ✅ | `.w-lg{width:32rem;}` | `.w-lg{width:32rem;}` |
| w-1in | ✅ | `.w-1in{width:1in;}` | `.w-1in{width:1in;}` |
| h-screen-sm | ❌ | `.h-screen-sm{height:40rem;}` | `.h-screen-sm{height:640px;}` |
| h-screen-lg | ❌ | `.h-screen-lg{height:64rem;}` | `.h-screen-lg{height:1024px;}` |
| max-h-[1px] | ✅ | `.max-h-\[1px\]{max-height:1px;}` | `.max-h-\[1px\]{max-height:1px;}` |
| max-h-unset | ✅ | `.max-h-unset{max-height:unset;}` | `.max-h-unset{max-height:unset;}` |
| max-w-none | ❌ | `` | `.max-w-none{max-width:none;}` |
| max-w-20 | ❌ | `.max-w-20{max-width:calc(var(--spacing) * 20);}` | `.max-w-20{max-width:5rem;}` |
| max-w-lg | ✅ | `.max-w-lg{max-width:32rem;}` | `.max-w-lg{max-width:32rem;}` |
| max-w-full | ✅ | `.max-w-full{max-width:100%;}` | `.max-w-full{max-width:100%;}` |
| max-w-$var | ✅ | `.max-w-\$var{max-width:var(--var);}` | `.max-w-\$var{max-width:var(--var);}` |
| max-w-screen-lg | ❌ | `.max-w-screen-lg{max-width:64rem;}` | `.max-w-screen-lg{max-width:1024px;}` |
| max-w-revert | ✅ | `.max-w-revert{max-width:revert;}` | `.max-w-revert{max-width:revert;}` |
| min-h-[1px] | ✅ | `.min-h-\[1px\]{min-height:1px;}` | `.min-h-\[1px\]{min-height:1px;}` |
| min-h-unset | ✅ | `.min-h-unset{min-height:unset;}` | `.min-h-unset{min-height:unset;}` |
| min-w-none | ❌ | `` | `.min-w-none{min-width:none;}` |
| min-w-20 | ❌ | `.min-w-20{min-width:calc(var(--spacing) * 20);}` | `.min-w-20{min-width:5rem;}` |
| min-w-lg | ✅ | `.min-w-lg{min-width:32rem;}` | `.min-w-lg{min-width:32rem;}` |
| min-w-full | ✅ | `.min-w-full{min-width:100%;}` | `.min-w-full{min-width:100%;}` |
| min-w-$var | ✅ | `.min-w-\$var{min-width:var(--var);}` | `.min-w-\$var{min-width:var(--var);}` |
| min-w-screen-lg | ❌ | `.min-w-screen-lg{min-width:64rem;}` | `.min-w-screen-lg{min-width:1024px;}` |
| min-w-revert-layer | ✅ | `.min-w-revert-layer{min-width:revert-layer;}` | `.min-w-revert-layer{min-width:revert-layer;}` |
| h-$var | ✅ | `.h-\$var{height:var(--var);}` | `.h-\$var{height:var(--var);}` |
| h-[calc(1000px-4rem)] | ✅ | `.h-\[calc\(1000px-4rem\)\]{height:calc(1000px - 4rem);}` | `.h-\[calc\(1000px-4rem\)\]{height:calc(1000px - 4rem);}` |
| w-[calc(calc(100px*10)-4rem)] | ✅ | `.w-\[calc\(calc\(100px\*10\)-4rem\)\]{width:calc(calc(100px * 10) - 4rem);}` | `.w-\[calc\(calc\(100px\*10\)-4rem\)\]{width:calc(calc(100px * 10) - 4rem);}` |
| w-[calc(1-var(--something)*0.5)] | ✅ | `.w-\[calc\(1-var\(--something\)\*0\.5\)\]{width:calc(1 - var(--something) * 0.5);}` | `.w-\[calc\(1-var\(--something\)\*0\.5\)\]{width:calc(1 - var(--something) * 0.5);}` |
| w-[calc(1-(var(--something)*0.5))] | ✅ | `.w-\[calc\(1-\(var\(--something\)\*0\.5\)\)\]{width:calc(1 - (var(--something) * 0.5));}` | `.w-\[calc\(1-\(var\(--something\)\*0\.5\)\)\]{width:calc(1 - (var(--something) * 0.5));}` |
| w-[calc(1-((12-3)*0.5))] | ✅ | `.w-\[calc\(1-\(\(12-3\)\*0\.5\)\)\]{width:calc(1 - ((12 - 3) * 0.5));}` | `.w-\[calc\(1-\(\(12-3\)\*0\.5\)\)\]{width:calc(1 - ((12 - 3) * 0.5));}` |
| size-w-10 | ❌ | `.size-w-10{width:calc(var(--spacing) * 10);}` | `.size-w-10{width:2.5rem;}` |
| size-h-[calc(1000px-4rem)] | ✅ | `.size-h-\[calc\(1000px-4rem\)\]{height:calc(1000px - 4rem);}` | `.size-h-\[calc\(1000px-4rem\)\]{height:calc(1000px - 4rem);}` |
| size-min-w-full | ✅ | `.size-min-w-full{min-width:100%;}` | `.size-min-w-full{min-width:100%;}` |
| size-10 | ❌ | `.size-10{width:calc(var(--spacing) * 10);height:calc(var(--spacing) * 10);}` | `.size-10{width:2.5rem;height:2.5rem;}` |
| size-[calc(1000px-4rem)] | ✅ | `.size-\[calc\(1000px-4rem\)\]{width:calc(1000px - 4rem);height:calc(1000px - 4rem);}` | `.size-\[calc\(1000px-4rem\)\]{width:calc(1000px - 4rem);height:calc(1000px - 4rem);}` |
| size-[var(--something)] | ✅ | `.size-\[var\(--something\)\]{width:var(--something);height:var(--something);}` | `.size-\[var\(--something\)\]{width:var(--something);height:var(--something);}` |
| size-min-10 | ❌ | `.size-min-10{min-width:calc(var(--spacing) * 10);min-height:calc(var(--spacing) * 10);}` | `.size-min-10{min-width:2.5rem;min-height:2.5rem;}` |
| size-max-10 | ❌ | `.size-max-10{max-width:calc(var(--spacing) * 10);max-height:calc(var(--spacing) * 10);}` | `.size-max-10{max-width:2.5rem;max-height:2.5rem;}` |
| block-auto | ✅ | `.block-auto{block-size:auto;}` | `.block-auto{block-size:auto;}` |
| block-unset | ✅ | `.block-unset{block-size:unset;}` | `.block-unset{block-size:unset;}` |
| block-1 | ❌ | `.block-1{block-size:calc(var(--spacing) * 1);}` | `.block-1{block-size:0.25rem;}` |
| block-21 | ❌ | `.block-21{block-size:calc(var(--spacing) * 21);}` | `.block-21{block-size:5.25rem;}` |
| block-1/2 | ✅ | `.block-1\/2{block-size:50%;}` | `.block-1\/2{block-size:50%;}` |
| block-8/7 | ✅ | `.block-8\/7{block-size:114.2857142857%;}` | `.block-8\/7{block-size:114.2857142857%;}` |
| block-lg | ✅ | `.block-lg{block-size:32rem;}` | `.block-lg{block-size:32rem;}` |
| inline-auto | ✅ | `.inline-auto{inline-size:auto;}` | `.inline-auto{inline-size:auto;}` |
| inline-inherit | ✅ | `.inline-inherit{inline-size:inherit;}` | `.inline-inherit{inline-size:inherit;}` |
| inline-1 | ❌ | `.inline-1{inline-size:calc(var(--spacing) * 1);}` | `.inline-1{inline-size:0.25rem;}` |
| inline-21 | ❌ | `.inline-21{inline-size:calc(var(--spacing) * 21);}` | `.inline-21{inline-size:5.25rem;}` |
| inline-1/4 | ✅ | `.inline-1\/4{inline-size:25%;}` | `.inline-1\/4{inline-size:25%;}` |
| inline-lg | ✅ | `.inline-lg{inline-size:32rem;}` | `.inline-lg{inline-size:32rem;}` |
| max-block-[1px] | ✅ | `.max-block-\[1px\]{max-block-size:1px;}` | `.max-block-\[1px\]{max-block-size:1px;}` |
| max-block-revert | ✅ | `.max-block-revert{max-block-size:revert;}` | `.max-block-revert{max-block-size:revert;}` |
| max-inline-inherit | ✅ | `.max-inline-inherit{max-inline-size:inherit;}` | `.max-inline-inherit{max-inline-size:inherit;}` |
| max-inline-none | ❌ | `` | `.max-inline-none{max-inline-size:none;}` |
| max-inline-20 | ❌ | `.max-inline-20{max-inline-size:calc(var(--spacing) * 20);}` | `.max-inline-20{max-inline-size:5rem;}` |
| max-inline-lg | ✅ | `.max-inline-lg{max-inline-size:32rem;}` | `.max-inline-lg{max-inline-size:32rem;}` |
| max-inline-full | ✅ | `.max-inline-full{max-inline-size:100%;}` | `.max-inline-full{max-inline-size:100%;}` |
| max-inline-$var | ✅ | `.max-inline-\$var{max-inline-size:var(--var);}` | `.max-inline-\$var{max-inline-size:var(--var);}` |
| min-block-[1px] | ✅ | `.min-block-\[1px\]{min-block-size:1px;}` | `.min-block-\[1px\]{min-block-size:1px;}` |
| min-inline-none | ❌ | `` | `.min-inline-none{min-inline-size:none;}` |
| min-inline-20 | ❌ | `.min-inline-20{min-inline-size:calc(var(--spacing) * 20);}` | `.min-inline-20{min-inline-size:5rem;}` |
| min-inline-lg | ✅ | `.min-inline-lg{min-inline-size:32rem;}` | `.min-inline-lg{min-inline-size:32rem;}` |
| min-inline-full | ✅ | `.min-inline-full{min-inline-size:100%;}` | `.min-inline-full{min-inline-size:100%;}` |
| min-inline-$var | ✅ | `.min-inline-\$var{min-inline-size:var(--var);}` | `.min-inline-\$var{min-inline-size:var(--var);}` |
| block-$var | ✅ | `.block-\$var{block-size:var(--var);}` | `.block-\$var{block-size:var(--var);}` |
| block-[calc(1000px-4rem)] | ✅ | `.block-\[calc\(1000px-4rem\)\]{block-size:calc(1000px - 4rem);}` | `.block-\[calc\(1000px-4rem\)\]{block-size:calc(1000px - 4rem);}` |
| inline-[calc(calc(100px*10)-4rem)] | ✅ | `.inline-\[calc\(calc\(100px\*10\)-4rem\)\]{inline-size:calc(calc(100px * 10) - 4rem);}` | `.inline-\[calc\(calc\(100px\*10\)-4rem\)\]{inline-size:calc(calc(100px * 10) - 4rem);}` |
| aspect-ratio-square | ✅ | `.aspect-ratio-square{aspect-ratio:1/1;}` | `.aspect-ratio-square{aspect-ratio:1/1;}` |
| aspect-ratio-video | ✅ | `.aspect-ratio-video{aspect-ratio:16/9;}` | `.aspect-ratio-video{aspect-ratio:16/9;}` |
| aspect-ratio-revert | ✅ | `.aspect-ratio-revert{aspect-ratio:revert;}` | `.aspect-ratio-revert{aspect-ratio:revert;}` |
| aspect-auto | ✅ | `.aspect-auto{aspect-ratio:auto;}` | `.aspect-auto{aspect-ratio:auto;}` |
| aspect-unset | ✅ | `.aspect-unset{aspect-ratio:unset;}` | `.aspect-unset{aspect-ratio:unset;}` |
| aspect-ratio-3/2 | ✅ | `.aspect-ratio-3\/2{aspect-ratio:3/2;}` | `.aspect-ratio-3\/2{aspect-ratio:3/2;}` |
| aspect-ratio-0.7 | ✅ | `.aspect-ratio-0\.7{aspect-ratio:0.7;}` | `.aspect-ratio-0\.7{aspect-ratio:0.7;}` |
| aspect-ratio-$var | ✅ | `.aspect-ratio-\$var{aspect-ratio:var(--var);}` | `.aspect-ratio-\$var{aspect-ratio:var(--var);}` |
| aspect-ratio-[auto_16/9] | ✅ | `.aspect-ratio-\[auto_16\/9\]{aspect-ratio:auto 16/9;}` | `.aspect-ratio-\[auto_16\/9\]{aspect-ratio:auto 16/9;}` |
| aspect-[auto_16/9] | ✅ | `.aspect-\[auto_16\/9\]{aspect-ratio:auto 16/9;}` | `.aspect-\[auto_16\/9\]{aspect-ratio:auto 16/9;}` |
| p-none | ❌ | `` | `.p-none{padding:0;}` |
| p-unset | ✅ | `.p-unset{padding:unset;}` | `.p-unset{padding:unset;}` |
| p-2 | ❌ | `.p-2{padding:calc(var(--spacing) * 2);}` | `.p-2{padding:0.5rem;}` |
| p-t-2 | ❌ | `.p-t-2{padding-top:calc(var(--spacing) * 2);}` | `.p-t-2{padding-top:0.5rem;}` |
| p2 | ❌ | `.p2{padding:calc(var(--spacing) * 2);}` | `.p2{padding:0.5rem;}` |
| pl-10px | ❌ | `` | `.pl-10px{padding-left:10px;}` |
| pl-revert | ✅ | `.pl-revert{padding-left:revert;}` | `.pl-revert{padding-left:revert;}` |
| pt-2 | ❌ | `.pt-2{padding-top:calc(var(--spacing) * 2);}` | `.pt-2{padding-top:0.5rem;}` |
| pt2 | ❌ | `.pt2{padding-top:calc(var(--spacing) * 2);}` | `.pt2{padding-top:0.5rem;}` |
| pt-$title2 | ✅ | `.pt-\$title2{padding-top:var(--title2);}` | `.pt-\$title2{padding-top:var(--title2);}` |
| pa | ✅ | `.pa{padding:auto;}` | `.pa{padding:auto;}` |
| m-inherit | ✅ | `.m-inherit{margin:inherit;}` | `.m-inherit{margin:inherit;}` |
| m-[3em] | ✅ | `.m-\[3em\]{margin:3em;}` | `.m-\[3em\]{margin:3em;}` |
| m-0 | ❌ | `.m-0{margin:calc(var(--spacing) * 0);}` | `.m-0{margin:0;}` |
| m-1/2 | ❌ | `.m-1\/2{margin:calc(var(--spacing) * 0.5);}` | `.m-1\/2{margin:50%;}` |
| m-auto | ✅ | `.m-auto{margin:auto;}` | `.m-auto{margin:auto;}` |
| mt-[-10.2%] | ✅ | `.mt-\[-10\.2\%\]{margin-top:-10.2%;}` | `.mt-\[-10\.2\%\]{margin-top:-10.2%;}` |
| mt-$height | ✅ | `.mt-\$height{margin-top:var(--height);}` | `.mt-\$height{margin-top:var(--height);}` |
| my-auto | ❌ | `.my-auto{margin-block:auto;}` | `.my-auto{margin-top:auto;margin-bottom:auto;}` |
| my-revert-layer | ❌ | `.my-revert-layer{margin-block:revert-layer;}` | `.my-revert-layer{margin-top:revert-layer;margin-bottom:revert-layer;}` |
| my-[var(--hello-space-y)] | ❌ | `.my-\[var\(--hello-space-y\)\]{margin-block:var(--hello-space-y);}` | `.my-\[var\(--hello-space-y\)\]{margin-top:var(--hello-space-y);margin-bottom:var(--hello-space-y);}` |
| m-none | ❌ | `` | `.m-none{margin:0;}` |
| p-ie-none | ❌ | `` | `.p-ie-none{padding-inline-end:0;}` |
| p-ie-revert | ✅ | `.p-ie-revert{padding-inline-end:revert;}` | `.p-ie-revert{padding-inline-end:revert;}` |
| p-bs-2 | ❌ | `.p-bs-2{padding-block-start:calc(var(--spacing) * 2);}` | `.p-bs-2{padding-block-start:0.5rem;}` |
| pis-10px | ❌ | `` | `.pis-10px{padding-inline-start:10px;}` |
| pbs-2 | ❌ | `.pbs-2{padding-block-start:calc(var(--spacing) * 2);}` | `.pbs-2{padding-block-start:0.5rem;}` |
| pbs2 | ❌ | `.pbs2{padding-block-start:calc(var(--spacing) * 2);}` | `.pbs2{padding-block-start:0.5rem;}` |
| pbs-$title2 | ✅ | `.pbs-\$title2{padding-block-start:var(--title2);}` | `.pbs-\$title2{padding-block-start:var(--title2);}` |
| mbs-unset | ✅ | `.mbs-unset{margin-block-start:unset;}` | `.mbs-unset{margin-block-start:unset;}` |
| mbs-[-10.2%] | ✅ | `.mbs-\[-10\.2\%\]{margin-block-start:-10.2%;}` | `.mbs-\[-10\.2\%\]{margin-block-start:-10.2%;}` |
| mbs-$height | ✅ | `.mbs-\$height{margin-block-start:var(--height);}` | `.mbs-\$height{margin-block-start:var(--height);}` |
| m-block-auto | ✅ | `.m-block-auto{margin-block-start:auto;margin-block-end:auto;}` | `.m-block-auto{margin-block-start:auto;margin-block-end:auto;}` |
| m-inline-none | ❌ | `` | `.m-inline-none{margin-inline-start:0;margin-inline-end:0;}` |
| m-block-inherit | ✅ | `.m-block-inherit{margin-block-start:inherit;margin-block-end:inherit;}` | `.m-block-inherit{margin-block-start:inherit;margin-block-end:inherit;}` |
| p | ✅ | `` | `` |
| pb | ❌ | `` | `.pb{padding-bottom:1rem;}` |
| px | ❌ | `` | `.px{padding-left:1rem;padding-right:1rem;}` |
| p-x | ❌ | `` | `.p-x{padding-left:1rem;padding-right:1rem;}` |
| pxy | ❌ | `` | `.pxy{padding:1rem;}` |
| p-xy | ❌ | `` | `.p-xy{padding:1rem;}` |
| pis | ❌ | `` | `.pis{padding-inline-start:1rem;}` |
| p-is | ❌ | `` | `.p-is{padding-inline-start:1rem;}` |
| m-block | ❌ | `` | `.m-block{margin-block-start:1rem;margin-block-end:1rem;}` |
| mbs | ❌ | `` | `.mbs{margin-block-start:1rem;}` |
| mxy | ❌ | `` | `.mxy{margin:1rem;}` |
| m-xy | ❌ | `` | `.m-xy{margin:1rem;}` |
| -m-lg | ❌ | `.-m-lg{margin:calc(calc(var(--spacing) * 4.5) * -1);}` | `.-m-lg{margin:-1.125rem;}` |
| -m-md | ✅ | `` | `` |
| m--lg | ❌ | `.m--lg{margin:calc(var(--spacing) * -4.5);}` | `.m--lg{margin:calc(1.125rem * -1);}` |
| m--md | ✅ | `` | `` |
| m-lg | ❌ | `.m-lg{margin:calc(var(--spacing) * 4.5);}` | `.m-lg{margin:1.125rem;}` |
| m-md | ✅ | `` | `` |
| contents | ✅ | `.contents{display:contents;}` | `.contents{display:contents;}` |
| display-$var | ✅ | `.display-\$var{display:var(--var);}` | `.display-\$var{display:var(--var);}` |
| display-inherit | ✅ | `.display-inherit{display:inherit;}` | `.display-inherit{display:inherit;}` |
| visible | ✅ | `.visible{visibility:visible;}` | `.visible{visibility:visible;}` |
| backface-hidden | ✅ | `.backface-hidden{backface-visibility:hidden;}` | `.backface-hidden{backface-visibility:hidden;}` |
| backface-revert | ✅ | `.backface-revert{backface-visibility:revert;}` | `.backface-revert{backface-visibility:revert;}` |
| cursor-pointer | ✅ | `.cursor-pointer{cursor:pointer;}` | `.cursor-pointer{cursor:pointer;}` |
| cursor-inherit | ✅ | `.cursor-inherit{cursor:inherit;}` | `.cursor-inherit{cursor:inherit;}` |
| cursor-$pointer-var | ✅ | `.cursor-\$pointer-var{cursor:var(--pointer-var);}` | `.cursor-\$pointer-var{cursor:var(--pointer-var);}` |
| cursor-[url(cursor_2.png)_2_2,_pointer] | ✅ | `.cursor-\[url\(cursor_2\.png\)_2_2\,_pointer\]{cursor:url(cursor_2.png) 2 2, pointer;}` | `.cursor-\[url\(cursor_2\.png\)_2_2\,_pointer\]{cursor:url(cursor_2.png) 2 2, pointer;}` |
| pointer-events-none | ✅ | `.pointer-events-none{pointer-events:none;}` | `.pointer-events-none{pointer-events:none;}` |
| pointer-events-auto | ✅ | `.pointer-events-auto{pointer-events:auto;}` | `.pointer-events-auto{pointer-events:auto;}` |
| pointer-events-unset | ✅ | `.pointer-events-unset{pointer-events:unset;}` | `.pointer-events-unset{pointer-events:unset;}` |
| resize | ✅ | `.resize{resize:both;}` | `.resize{resize:both;}` |
| resize-none | ✅ | `.resize-none{resize:none;}` | `.resize-none{resize:none;}` |
| resize-inherit | ✅ | `.resize-inherit{resize:inherit;}` | `.resize-inherit{resize:inherit;}` |
| select-all | ✅ | `.select-all{-webkit-user-select:all;user-select:all;}` | `.select-all{-webkit-user-select:all;user-select:all;}` |
| select-none | ✅ | `.select-none{-webkit-user-select:none;user-select:none;}` | `.select-none{-webkit-user-select:none;user-select:none;}` |
| select-inherit | ✅ | `.select-inherit{user-select:inherit;}` | `.select-inherit{user-select:inherit;}` |
| whitespace-pre-wrap | ✅ | `.whitespace-pre-wrap{white-space:pre-wrap;}` | `.whitespace-pre-wrap{white-space:pre-wrap;}` |
| whitespace-unset | ✅ | `.whitespace-unset{white-space:unset;}` | `.whitespace-unset{white-space:unset;}` |
| ws-nowrap | ✅ | `.ws-nowrap{white-space:nowrap;}` | `.ws-nowrap{white-space:nowrap;}` |
| ws-revert | ✅ | `.ws-revert{white-space:revert;}` | `.ws-revert{white-space:revert;}` |
| contain-layout | ✅ | `.contain-layout{contain:layout;}` | `.contain-layout{contain:layout;}` |
| contain-[size_layout] | ✅ | `.contain-\[size_layout\]{contain:size layout;}` | `.contain-\[size_layout\]{contain:size layout;}` |
| contain-[size_layout_paint] | ✅ | `.contain-\[size_layout_paint\]{contain:size layout paint;}` | `.contain-\[size_layout_paint\]{contain:size layout paint;}` |
| break-normal | ✅ | `.break-normal{overflow-wrap:normal;word-break:normal;}` | `.break-normal{overflow-wrap:normal;word-break:normal;}` |
| break-words | ✅ | `.break-words{overflow-wrap:break-word;}` | `.break-words{overflow-wrap:break-word;}` |
| break-keep | ✅ | `.break-keep{word-break:keep-all;}` | `.break-keep{word-break:keep-all;}` |
| text-clip | ✅ | `.text-clip{text-overflow:clip;}` | `.text-clip{text-overflow:clip;}` |
| text-wrap | ✅ | `.text-wrap{text-wrap:wrap;}` | `.text-wrap{text-wrap:wrap;}` |
| text-nowrap | ✅ | `.text-nowrap{text-wrap:nowrap;}` | `.text-nowrap{text-wrap:nowrap;}` |
| text-balance | ✅ | `.text-balance{text-wrap:balance;}` | `.text-balance{text-wrap:balance;}` |
| text-pretty | ✅ | `.text-pretty{text-wrap:pretty;}` | `.text-pretty{text-wrap:pretty;}` |
| case-upper | ✅ | `.case-upper{text-transform:uppercase;}` | `.case-upper{text-transform:uppercase;}` |
| case-normal | ✅ | `.case-normal{text-transform:none;}` | `.case-normal{text-transform:none;}` |
| case-inherit | ✅ | `.case-inherit{text-transform:inherit;}` | `.case-inherit{text-transform:inherit;}` |
| italic | ✅ | `.italic{font-style:italic;}` | `.italic{font-style:italic;}` |
| oblique | ✅ | `.oblique{font-style:oblique;}` | `.oblique{font-style:oblique;}` |
| antialiased | ✅ | `.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}` | `.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}` |
| content-empty | ✅ | `.content-empty{content:"";}` | `.content-empty{content:"";}` |
| content-none | ✅ | `.content-none{content:none;}` | `.content-none{content:none;}` |
| content-[normal] | ✅ | `.content-\[normal\]{content:normal;}` | `.content-\[normal\]{content:normal;}` |
| content-[quoted:!] | ✅ | `.content-\[quoted\:\!\]{content:"!";}` | `.content-\[quoted\:\!\]{content:"!";}` |
| content-[quoted:unocss] | ✅ | `.content-\[quoted\:unocss\]{content:"unocss";}` | `.content-\[quoted\:unocss\]{content:"unocss";}` |
| content-['quoted1'] | ✅ | `.content-\[\'quoted1\'\]{content:'quoted1';}` | `.content-\[\'quoted1\'\]{content:'quoted1';}` |
| content-['quoted_with_space'] | ✅ | `.content-\[\'quoted_with_space\'\]{content:'quoted with space';}` | `.content-\[\'quoted_with_space\'\]{content:'quoted with space';}` |
| content-["quoted2"] | ✅ | `.content-\[\"quoted2\"\]{content:"quoted2";}` | `.content-\[\"quoted2\"\]{content:"quoted2";}` |
| content-[string:attr(dashed-attr)] | ✅ | `.content-\[string\:attr\(dashed-attr\)\]{content:attr(dashed-attr);}` | `.content-\[string\:attr\(dashed-attr\)\]{content:attr(dashed-attr);}` |
| content-[string:attr(underlined\_attr)] | ✅ | `.content-\[string\:attr\(underlined\\_attr\)\]{content:attr(underlined_attr);}` | `.content-\[string\:attr\(underlined\\_attr\)\]{content:attr(underlined_attr);}` |
| content-$unocss-var | ❌ | `.content-\$unocss-var{align-content:var(--unocss-var);}` | `.content-\$unocss-var{content:var(--unocss-var);}` |
| content-visibility-auto | ✅ | `.content-visibility-auto{content-visibility:auto;}` | `.content-visibility-auto{content-visibility:auto;}` |
| content-visibility-visible | ✅ | `.content-visibility-visible{content-visibility:visible;}` | `.content-visibility-visible{content-visibility:visible;}` |
| content-visibility-hidden | ✅ | `.content-visibility-hidden{content-visibility:hidden;}` | `.content-visibility-hidden{content-visibility:hidden;}` |
| content-visibility-unset | ✅ | `.content-visibility-unset{content-visibility:unset;}` | `.content-visibility-unset{content-visibility:unset;}` |
| intrinsic-size-200 | ✅ | `.intrinsic-size-200{contain-intrinsic-size:50rem;}` | `.intrinsic-size-200{contain-intrinsic-size:50rem;}` |
| intrinsic-size-200px | ✅ | `.intrinsic-size-200px{contain-intrinsic-size:200px;}` | `.intrinsic-size-200px{contain-intrinsic-size:200px;}` |
| intrinsic-size-1/2 | ✅ | `.intrinsic-size-1\/2{contain-intrinsic-size:50%;}` | `.intrinsic-size-1\/2{contain-intrinsic-size:50%;}` |
| intrinsic-size-unset | ✅ | `.intrinsic-size-unset{contain-intrinsic-size:unset;}` | `.intrinsic-size-unset{contain-intrinsic-size:unset;}` |
| fill-none | ❌ | `` | `.fill-none{fill:none;}` |
| fill-current | ❌ | `` | `.fill-current{fill:currentColor;}` |
| fill-green-400 | ❌ | `` | `.fill-green-400{--un-fill-opacity:1;fill:rgb(74 222 128 / var(--un-fill-opacity));}` |
| fill-opacity-80 | ❌ | `` | `.fill-opacity-80{--un-fill-opacity:0.8;}` |
| fill-opacity-$opacity-variable | ❌ | `` | `.fill-opacity-\$opacity-variable{--un-fill-opacity:var(--opacity-variable);}` |
| fill-[#123] | ❌ | `` | `.fill-\[\#123\]{--un-fill-opacity:1;fill:rgb(17 34 51 / var(--un-fill-opacity));}` |
| stroke-none | ❌ | `` | `.stroke-none{stroke:none;}` |
| stroke-current | ❌ | `` | `.stroke-current{stroke:currentColor;}` |
| stroke-green-400 | ❌ | `` | `.stroke-green-400{--un-stroke-opacity:1;stroke:rgb(74 222 128 / var(--un-stroke-opacity));}` |
| stroke-opacity-80 | ❌ | `` | `.stroke-opacity-80{--un-stroke-opacity:0.8;}` |
| stroke-opacity-$opacity-variable | ❌ | `` | `.stroke-opacity-\$opacity-variable{--un-stroke-opacity:var(--opacity-variable);}` |
| stroke-[#123] | ❌ | `` | `.stroke-\[\#123\]{--un-stroke-opacity:1;stroke:rgb(17 34 51 / var(--un-stroke-opacity));}` |
| stroke-[1rem] | ❌ | `` | `.stroke-\[1rem\]{stroke-width:1rem;}` |
| stroke-[calc(1rem-1px)] | ❌ | `` | `.stroke-\[calc\(1rem-1px\)\]{stroke-width:calc(1rem - 1px);}` |
| stroke-size-none | ❌ | `` | `.stroke-size-none{stroke-width:0;}` |
| stroke-size-1 | ❌ | `` | `.stroke-size-1{stroke-width:1px;}` |
| stroke-size-1px | ❌ | `` | `.stroke-size-1px{stroke-width:1px;}` |
| stroke-size-[1rem] | ❌ | `` | `.stroke-size-\[1rem\]{stroke-width:1rem;}` |
| stroke-size-$variable | ❌ | `` | `.stroke-size-\$variable{stroke-width:var(--variable);}` |
| stroke-width-1 | ❌ | `` | `.stroke-width-1{stroke-width:1px;}` |
| stroke-width-1px | ❌ | `` | `.stroke-width-1px{stroke-width:1px;}` |
| stroke-width-[1rem] | ❌ | `` | `.stroke-width-\[1rem\]{stroke-width:1rem;}` |
| stroke-width-$variable | ❌ | `` | `.stroke-width-\$variable{stroke-width:var(--variable);}` |
| stroke-dash-1 | ❌ | `` | `.stroke-dash-1{stroke-dasharray:1;}` |
| stroke-dash-[5,3,2] | ❌ | `` | `.stroke-dash-\[5\,3\,2\]{stroke-dasharray:5,3,2;}` |
| stroke-offset-1 | ❌ | `` | `.stroke-offset-1{stroke-dashoffset:1px;}` |
| stroke-offset-1px | ❌ | `` | `.stroke-offset-1px{stroke-dashoffset:1px;}` |
| stroke-offset-[1rem] | ❌ | `` | `.stroke-offset-\[1rem\]{stroke-dashoffset:1rem;}` |
| stroke-offset-none | ❌ | `` | `.stroke-offset-none{stroke-dashoffset:0;}` |
| stroke-cap-round | ❌ | `` | `.stroke-cap-round{stroke-linecap:round;}` |
| stroke-cap-auto | ❌ | `` | `.stroke-cap-auto{stroke-linecap:butt;}` |
| stroke-join-clip | ❌ | `` | `.stroke-join-clip{stroke-linejoin:miter-clip;}` |
| stroke-join-auto | ❌ | `` | `.stroke-join-auto{stroke-linejoin:miter;}` |
| transform | ❌ | `.transform{transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.transform{transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| transform-gpu | ❌ | `.transform-gpu{transform:translateZ(0) var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.transform-gpu{transform:translate3d(var(--un-translate-x), var(--un-translate-y), var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| transform-cpu | ❌ | `.transform-cpu{transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.transform-cpu{transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) rotate(var(--un-rotate)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y));}` |
| transform-none | ✅ | `.transform-none{transform:none;}` | `.transform-none{transform:none;}` |
| transform-unset | ✅ | `.transform-unset{transform:unset;}` | `.transform-unset{transform:unset;}` |
| translate-none | ❌ | `` | `.translate-none{--un-translate-x:0;--un-translate-y:0;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| translate-y-1/4 | ❌ | `.translate-y-1\/4{--un-translate-y:calc(var(--spacing) * 0.25);translate:var(--un-translate-x) var(--un-translate-y);}` | `.translate-y-1\/4{--un-translate-y:25%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| translate-[var(--x),var(--y)] | ❌ | `.translate-\[var\(--x\)\,var\(--y\)\]{--un-translate-x:var(--x);--un-translate-y:var(--y);translate:var(--un-translate-x) var(--un-translate-y);}` | `.translate-\[var\(--x\)\,var\(--y\)\]{--un-translate-x:var(--x);--un-translate-y:var(--y);transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| translate-[var(--x),var(--y),25%] | ❌ | `.translate-\[var\(--x\)\,var\(--y\)\,25\%\]{--un-translate-x:var(--x);--un-translate-y:var(--y);--un-translate-z:25%;translate:var(--un-translate-x) var(--un-translate-y);}` | `.translate-\[var\(--x\)\,var\(--y\)\,25\%\]{--un-translate-x:var(--x);--un-translate-y:var(--y);--un-translate-z:25%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| translate-y-px | ❌ | `.translate-y-px{--un-translate-y:1px;translate:var(--un-translate-x) var(--un-translate-y);}` | `.translate-y-px{--un-translate-y:1px;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| translate-full | ❌ | `.translate-full{--un-translate-x:calc(var(--spacing) * 1);--un-translate-y:calc(var(--spacing) * 1);translate:var(--un-translate-x) var(--un-translate-y);}` | `.translate-full{--un-translate-x:100%;--un-translate-y:100%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| translate-x-full | ❌ | `.translate-x-full{--un-translate-x:calc(var(--spacing) * 1);translate:var(--un-translate-x) var(--un-translate-y);}` | `.translate-x-full{--un-translate-x:100%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| rotate-1deg | ❌ | `.rotate-1deg{rotate:1deg;}` | `.rotate-1deg{--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-rotate:1deg;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| rotate-[var(--spin)] | ❌ | `.rotate-\[var\(--spin\)\]{rotate:var(--spin);}` | `.rotate-\[var\(--spin\)\]{--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-rotate:var(--spin);transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| rotate-x-1deg | ❌ | `.rotate-x-1deg{--un-rotate-x:rotateX(1deg);transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.rotate-x-1deg{--un-rotate:0;--un-rotate-x:1deg;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| rotate-y-1 | ❌ | `.rotate-y-1{--un-rotate-y:rotateY(1deg);transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.rotate-y-1{--un-rotate:0;--un-rotate-y:1deg;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| transform-rotate-y-1 | ❌ | `.transform-rotate-y-1{--un-rotate-y:rotateY(1deg);transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.transform-rotate-y-1{--un-rotate:0;--un-rotate-y:1deg;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| transform-rotate-z-[var(--spin)] | ❌ | `.transform-rotate-z-\[var\(--spin\)\]{--un-rotate-z:var(--spin);transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.transform-rotate-z-\[var\(--spin\)\]{--un-rotate:0;--un-rotate-z:var(--spin);transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| rotate-z-[var(--spin)] | ❌ | `.rotate-z-\[var\(--spin\)\]{--un-rotate-z:var(--spin);transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.rotate-z-\[var\(--spin\)\]{--un-rotate:0;--un-rotate-z:var(--spin);transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| skew-10 | ❌ | `.skew-10{--un-skew-x:skewX(10deg);--un-skew-y:skewY(10deg);transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.skew-10{--un-skew-x:10deg;--un-skew-y:10deg;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| skew-[var(--x),var(--y)] | ❌ | `.skew-\[var\(--x\)\,var\(--y\)\]{--un-skew-x:var(--x),var(--y);--un-skew-y:var(--x),var(--y);transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.skew-\[var\(--x\)\,var\(--y\)\]{--un-skew-x:var(--x);--un-skew-y:var(--y);transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| skew-[var(--x),var(--y),25%] | ❌ | `.skew-\[var\(--x\)\,var\(--y\)\,25\%\]{--un-skew-x:var(--x),var(--y),25%;--un-skew-y:var(--x),var(--y),25%;transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.skew-\[var\(--x\)\,var\(--y\)\,25\%\]{--un-skew-x:var(--x);--un-skew-y:var(--y);--un-skew-z:25%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| skew-x-10 | ❌ | `.skew-x-10{--un-skew-x:skewX(10deg);transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.skew-x-10{--un-skew-x:10deg;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| skew-x-10deg | ❌ | `.skew-x-10deg{--un-skew-x:skewX(10deg);transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.skew-x-10deg{--un-skew-x:10deg;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| skew-x-10.00deg | ❌ | `.skew-x-10\.00deg{--un-skew-x:skewX(10deg);transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.skew-x-10\.00deg{--un-skew-x:10deg;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| skew-x-10.01deg | ❌ | `.skew-x-10\.01deg{--un-skew-x:skewX(10.01deg);transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.skew-x-10\.01deg{--un-skew-x:10.01deg;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| skew-x-10.10deg | ❌ | `.skew-x-10\.10deg{--un-skew-x:skewX(10.1deg);transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.skew-x-10\.10deg{--un-skew-x:10.1deg;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| skew-x-10.11deg | ❌ | `.skew-x-10\.11deg{--un-skew-x:skewX(10.11deg);transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.skew-x-10\.11deg{--un-skew-x:10.11deg;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| skew-x-[var(--skew-x)] | ❌ | `.skew-x-\[var\(--skew-x\)\]{--un-skew-x:var(--skew-x);transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.skew-x-\[var\(--skew-x\)\]{--un-skew-x:var(--skew-x);transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| skew-y-10 | ❌ | `.skew-y-10{--un-skew-y:skewY(10deg);transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.skew-y-10{--un-skew-y:10deg;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| skew-y-10deg | ❌ | `.skew-y-10deg{--un-skew-y:skewY(10deg);transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.skew-y-10deg{--un-skew-y:10deg;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| skew-y-[var(--skew-y)] | ❌ | `.skew-y-\[var\(--skew-y\)\]{--un-skew-y:var(--skew-y);transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.skew-y-\[var\(--skew-y\)\]{--un-skew-y:var(--skew-y);transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| skew-y-0.5turn | ❌ | `.skew-y-0\.5turn{--un-skew-y:0.5turn;transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.skew-y-0\.5turn{--un-skew-y:0.5turn;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| skew-y-2grad | ❌ | `.skew-y-2grad{--un-skew-y:2grad;transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.skew-y-2grad{--un-skew-y:2grad;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| skew-y-3.14rad | ❌ | `.skew-y-3\.14rad{--un-skew-y:3.14rad;transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.skew-y-3\.14rad{--un-skew-y:3.14rad;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| preserve-3d | ❌ | `` | `.preserve-3d{transform-style:preserve-3d;}` |
| preserve-flat | ❌ | `` | `.preserve-flat{transform-style:flat;}` |
| origin-top-left | ✅ | `.origin-top-left{transform-origin:top left;}` | `.origin-top-left{transform-origin:top left;}` |
| perspect-100 | ❌ | `.perspect-100{perspective:100px;}` | `.perspect-100{-webkit-perspective:100px;perspective:100px;}` |
| perspect-800px | ❌ | `.perspect-800px{perspective:800px;}` | `.perspect-800px{-webkit-perspective:800px;perspective:800px;}` |
| perspect-23rem | ❌ | `.perspect-23rem{perspective:23rem;}` | `.perspect-23rem{-webkit-perspective:23rem;perspective:23rem;}` |
| perspect-origin-center | ❌ | `.perspect-origin-center{perspective-origin:center;}` | `.perspect-origin-center{-webkit-perspective-origin:center;perspective-origin:center;}` |
| perspect-origin-top-right | ❌ | `.perspect-origin-top-right{perspective-origin:top right;}` | `.perspect-origin-top-right{-webkit-perspective-origin:top right;perspective-origin:top right;}` |
| perspect-origin-[150%] | ❌ | `.perspect-origin-\[150\%\]{perspective-origin:150%;}` | `.perspect-origin-\[150\%\]{-webkit-perspective-origin:150%;perspective-origin:150%;}` |
| perspect-origin-[150%_150%] | ❌ | `.perspect-origin-\[150\%_150\%\]{perspective-origin:150% 150%;}` | `.perspect-origin-\[150\%_150\%\]{-webkit-perspective-origin:150% 150%;perspective-origin:150% 150%;}` |
| transition-none | ✅ | `.transition-none{transition:none;}` | `.transition-none{transition:none;}` |
| transition-delay-300 | ✅ | `.transition-delay-300{transition-delay:300ms;}` | `.transition-delay-300{transition-delay:300ms;}` |
| transition-duration-300 | ❌ | `.transition-duration-300{--un-duration:300ms;transition-duration:300ms;}` | `.transition-duration-300{transition-duration:300ms;}` |
| transition-property-width | ✅ | `.transition-property-width{transition-property:width;}` | `.transition-property-width{transition-property:width;}` |
| transition-property-all | ✅ | `.transition-property-all{transition-property:all;}` | `.transition-property-all{transition-property:all;}` |
| transition-property-[border] | ✅ | `.transition-property-\[border\]{transition-property:border;}` | `.transition-property-\[border\]{transition-property:border;}` |
| transition-200 | ❌ | `.transition-200{--un-duration:200ms;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,--un-gradient-from,--un-gradient-via,--un-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter;transition-timing-function:var(--un-ease, var(--default-transition-timing-function));transition-duration:var(--un-duration, var(--default-transition-duration));}` | `.transition-200{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;}` |
| transition-opacity-200 | ❌ | `.transition-opacity-200{--un-duration:200ms;transition-property:opacity;transition-timing-function:var(--un-ease, var(--default-transition-timing-function));transition-duration:var(--un-duration, var(--default-transition-duration));}` | `.transition-opacity-200{transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;}` |
| transition-colors | ❌ | `.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,--un-gradient-from,--un-gradient-via,--un-gradient-to;transition-timing-function:var(--un-ease, var(--default-transition-timing-function));transition-duration:var(--un-duration, var(--default-transition-duration));}` | `.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}` |
| transition-colors,opacity | ❌ | `.transition-colors\,opacity{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,--un-gradient-from,--un-gradient-via,--un-gradient-to,opacity;transition-timing-function:var(--un-ease, var(--default-transition-timing-function));transition-duration:var(--un-duration, var(--default-transition-duration));}` | `.transition-colors\,opacity{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}` |
| transition-colors,opacity-200 | ❌ | `.transition-colors\,opacity-200{--un-duration:200ms;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,--un-gradient-from,--un-gradient-via,--un-gradient-to,opacity;transition-timing-function:var(--un-ease, var(--default-transition-timing-function));transition-duration:var(--un-duration, var(--default-transition-duration));}` | `.transition-colors\,opacity-200{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;}` |
| transition-color,background-color-200 | ❌ | `.transition-color\,background-color-200{--un-duration:200ms;transition-property:color,background-color;transition-timing-function:var(--un-ease, var(--default-transition-timing-function));transition-duration:var(--un-duration, var(--default-transition-duration));}` | `.transition-color\,background-color-200{transition-property:color,background-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;}` |
| transition-background-color,color-200 | ❌ | `.transition-background-color\,color-200{--un-duration:200ms;transition-property:background-color,color;transition-timing-function:var(--un-ease, var(--default-transition-timing-function));transition-duration:var(--un-duration, var(--default-transition-duration));}` | `.transition-background-color\,color-200{transition-property:background-color,color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;}` |
| transition-$variant | ❌ | `.transition-\$variant{transition-property:var(--variant);transition-timing-function:var(--un-ease, var(--default-transition-timing-function));transition-duration:var(--un-duration, var(--default-transition-duration));}` | `.transition-\$variant{transition-property:var(--variant);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}` |
| transition-[width,height] | ❌ | `.transition-\[width\,height\]{transition-property:width,height;transition-timing-function:var(--un-ease, var(--default-transition-timing-function));transition-duration:var(--un-duration, var(--default-transition-duration));}` | `.transition-\[width\,height\]{transition-property:width,height;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}` |
| transition-[width,height,colors] | ❌ | `.transition-\[width\,height\,colors\]{transition-property:width,height,color,background-color,border-color,text-decoration-color,fill,stroke,--un-gradient-from,--un-gradient-via,--un-gradient-to;transition-timing-function:var(--un-ease, var(--default-transition-timing-function));transition-duration:var(--un-duration, var(--default-transition-duration));}` | `.transition-\[width\,height\,colors\]{transition-property:width,height,color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}` |
| transition-[width,height,colors]-200 | ❌ | `.transition-\[width\,height\,colors\]-200{--un-duration:200ms;transition-property:width,height,color,background-color,border-color,text-decoration-color,fill,stroke,--un-gradient-from,--un-gradient-via,--un-gradient-to;transition-timing-function:var(--un-ease, var(--default-transition-timing-function));transition-duration:var(--un-duration, var(--default-transition-duration));}` | `.transition-\[width\,height\,colors\]-200{transition-property:width,height,color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms;}` |
| transition | ❌ | `.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,--un-gradient-from,--un-gradient-via,--un-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter;transition-timing-function:var(--un-ease, var(--default-transition-timing-function));transition-duration:var(--un-duration, var(--default-transition-duration));}` | `.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}` |
| transition-revert-layer | ✅ | `.transition-revert-layer{transition:revert-layer;}` | `.transition-revert-layer{transition:revert-layer;}` |
| property-none | ✅ | `.property-none{transition-property:none;}` | `.property-none{transition-property:none;}` |
| property-all | ✅ | `.property-all{transition-property:all;}` | `.property-all{transition-property:all;}` |
| property-unset | ✅ | `.property-unset{transition-property:unset;}` | `.property-unset{transition-property:unset;}` |
| property-color | ✅ | `.property-color{transition-property:color;}` | `.property-color{transition-property:color;}` |
| property-background-color | ✅ | `.property-background-color{transition-property:background-color;}` | `.property-background-color{transition-property:background-color;}` |
| property-border-color | ✅ | `.property-border-color{transition-property:border-color;}` | `.property-border-color{transition-property:border-color;}` |
| property-outline-color | ✅ | `.property-outline-color{transition-property:outline-color;}` | `.property-outline-color{transition-property:outline-color;}` |
| property-text-decoration-color | ✅ | `.property-text-decoration-color{transition-property:text-decoration-color;}` | `.property-text-decoration-color{transition-property:text-decoration-color;}` |
| property-fill | ✅ | `.property-fill{transition-property:fill;}` | `.property-fill{transition-property:fill;}` |
| property-stroke | ✅ | `.property-stroke{transition-property:stroke;}` | `.property-stroke{transition-property:stroke;}` |
| property-margin,padding | ✅ | `.property-margin\,padding{transition-property:margin,padding;}` | `.property-margin\,padding{transition-property:margin,padding;}` |
| property-padding,margin | ✅ | `.property-padding\,margin{transition-property:padding,margin;}` | `.property-padding\,margin{transition-property:padding,margin;}` |
| property-[padding,margin] | ✅ | `.property-\[padding\,margin\]{transition-property:padding,margin;}` | `.property-\[padding\,margin\]{transition-property:padding,margin;}` |
| duration-111 | ❌ | `.duration-111{--un-duration:111ms;transition-duration:111ms;}` | `.duration-111{transition-duration:111ms;}` |
| ease-linear | ❌ | `.ease-linear{--un-ease:var(--ease-linear);transition-timing-function:var(--ease-linear);}` | `.ease-linear{transition-timing-function:linear;}` |
| ease-out | ❌ | `.ease-out{--un-ease:var(--ease-out);transition-timing-function:var(--ease-out);}` | `.ease-out{transition-timing-function:cubic-bezier(0, 0, 0.2, 1);}` |
| transition-ease-in | ❌ | `.transition-ease-in{--un-ease:var(--ease-in);transition-timing-function:var(--ease-in);}` | `.transition-ease-in{transition-timing-function:cubic-bezier(0.4, 0, 1, 1);}` |
| transition-discrete | ✅ | `.transition-discrete{transition-behavior:allow-discrete;}` | `.transition-discrete{transition-behavior:allow-discrete;}` |
| transition-normal | ✅ | `.transition-normal{transition-behavior:normal;}` | `.transition-normal{transition-behavior:normal;}` |
| font-mono | ❌ | `.font-mono{font-family:var(--font-mono);}` | `.font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;}` |
| font-[system-ui] | ✅ | `.font-\[system-ui\]{font-family:system-ui;}` | `.font-\[system-ui\]{font-family:system-ui;}` |
| font-550 | ❌ | `.font-550{--un-font-weight:550;font-weight:550;}` | `.font-550{font-weight:550;}` |
| font-$font-name | ✅ | `.font-\$font-name{font-family:var(--font-name);}` | `.font-\$font-name{font-family:var(--font-name);}` |
| text-4xl | ❌ | `.text-4xl{font-size:var(--text-4xl-font-size);line-height:var(--un-leading, var(--text-4xl--line-height));}` | `.text-4xl{font-size:2.25rem;line-height:2.5rem;}` |
| text-base | ❌ | `.text-base{font-size:var(--text-base-font-size);line-height:var(--un-leading, var(--text-base--line-height));}` | `.text-base{font-size:1rem;line-height:1.5rem;}` |
| text-lg | ❌ | `.text-lg{font-size:var(--text-lg-font-size);line-height:var(--un-leading, var(--text-lg--line-height));}` | `.text-lg{font-size:1.125rem;line-height:1.75rem;}` |
| text-2em | ✅ | `.text-2em{font-size:2em;}` | `.text-2em{font-size:2em;}` |
| text-size-unset | ✅ | `.text-size-unset{font-size:unset;}` | `.text-size-unset{font-size:unset;}` |
| text-size-[2em] | ✅ | `.text-size-\[2em\]{font-size:2em;}` | `.text-size-\[2em\]{font-size:2em;}` |
| font-thin | ❌ | `.font-thin{--un-font-weight:var(--font-weight-thin);font-weight:var(--font-weight-thin);}` | `.font-thin{font-weight:100;}` |
| font-900 | ❌ | `.font-900{--un-font-weight:900;font-weight:900;}` | `.font-900{font-weight:900;}` |
| font-050 | ❌ | `.font-050{--un-font-weight:50;font-weight:50;}` | `.font-050{font-weight:50;}` |
| font-50 | ❌ | `.font-50{--un-font-weight:50;font-weight:50;}` | `.font-50{font-weight:50;}` |
| font-synthesis-weight | ✅ | `.font-synthesis-weight{font-synthesis:weight;}` | `.font-synthesis-weight{font-synthesis:weight;}` |
| font-synthesis-small-caps | ✅ | `.font-synthesis-small-caps{font-synthesis:small-caps;}` | `.font-synthesis-small-caps{font-synthesis:small-caps;}` |
| font-synthesis-[weight_style] | ✅ | `.font-synthesis-\[weight_style\]{font-synthesis:weight style;}` | `.font-synthesis-\[weight_style\]{font-synthesis:weight style;}` |
| font-synthesis-$synth | ✅ | `.font-synthesis-\$synth{font-synthesis:var(--synth);}` | `.font-synthesis-\$synth{font-synthesis:var(--synth);}` |
| font-synthesis-inherit | ✅ | `.font-synthesis-inherit{font-synthesis:inherit;}` | `.font-synthesis-inherit{font-synthesis:inherit;}` |
| font-inherit | ✅ | `.font-inherit{font-family:inherit;}` | `.font-inherit{font-family:inherit;}` |
| font-["custom_fontFamily_name"] | ✅ | `.font-\[\"custom_fontFamily_name\"\]{font-family:"custom fontFamily name";}` | `.font-\[\"custom_fontFamily_name\"\]{font-family:"custom fontFamily name";}` |
| fw-inherit | ❌ | `.fw-inherit{--un-font-weight:inherit;font-weight:inherit;}` | `.fw-inherit{font-weight:inherit;}` |
| fw-900 | ❌ | `.fw-900{--un-font-weight:900;font-weight:900;}` | `.fw-900{font-weight:900;}` |
| fw-050 | ❌ | `.fw-050{--un-font-weight:50;font-weight:50;}` | `.fw-050{font-weight:50;}` |
| fw-50 | ❌ | `.fw-50{--un-font-weight:50;font-weight:50;}` | `.fw-50{font-weight:50;}` |
| font-italic | ✅ | `.font-italic{font-style:italic;}` | `.font-italic{font-style:italic;}` |
| font-oblique | ✅ | `.font-oblique{font-style:oblique;}` | `.font-oblique{font-style:oblique;}` |
| leading-2 | ❌ | `.leading-2{--un-font-weight:0.5rem;line-height:0.5rem;}` | `.leading-2{line-height:0.5rem;}` |
| leading-inherit | ❌ | `.leading-inherit{--un-font-weight:inherit;line-height:inherit;}` | `.leading-inherit{line-height:inherit;}` |
| font-leading-2 | ❌ | `.font-leading-2{--un-font-weight:0.5rem;line-height:0.5rem;}` | `.font-leading-2{line-height:0.5rem;}` |
| lh-[1.5] | ❌ | `.lh-\[1\.5\]{--un-font-weight:1.5;line-height:1.5;}` | `.lh-\[1\.5\]{line-height:1.5;}` |
| line-height-[1.5] | ❌ | `.line-height-\[1\.5\]{--un-font-weight:1.5;line-height:1.5;}` | `.line-height-\[1\.5\]{line-height:1.5;}` |
| tracking-wide | ❌ | `.tracking-wide{--un-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide);}` | `.tracking-wide{letter-spacing:0.025em;}` |
| tracking-[2/5] | ❌ | `.tracking-\[2\/5\]{--un-tracking:2/5;letter-spacing:2/5;}` | `.tracking-\[2\/5\]{letter-spacing:2/5;}` |
| tracking-inherit | ❌ | `.tracking-inherit{--un-tracking:inherit;letter-spacing:inherit;}` | `.tracking-inherit{letter-spacing:inherit;}` |
| font-tracking-1em | ❌ | `.font-tracking-1em{--un-tracking:1em;letter-spacing:1em;}` | `.font-tracking-1em{letter-spacing:1em;}` |
| font-stretch-normal | ✅ | `.font-stretch-normal{font-stretch:normal;}` | `.font-stretch-normal{font-stretch:normal;}` |
| font-stretch-[ultra-expanded] | ✅ | `.font-stretch-\[ultra-expanded\]{font-stretch:ultra-expanded;}` | `.font-stretch-\[ultra-expanded\]{font-stretch:ultra-expanded;}` |
| font-stretch-1/2 | ✅ | `.font-stretch-1\/2{font-stretch:50%;}` | `.font-stretch-1\/2{font-stretch:50%;}` |
| word-spacing-1 | ❌ | `.word-spacing-1{--un-word-spacing:0.25rem;word-spacing:0.25rem;}` | `.word-spacing-1{word-spacing:0.25rem;}` |
| word-spacing-wide | ❌ | `.word-spacing-wide{--un-word-spacing:var(--word-spacing-wide);word-spacing:var(--word-spacing-wide);}` | `.word-spacing-wide{word-spacing:0.025em;}` |
| word-spacing-2 | ❌ | `.word-spacing-2{--un-word-spacing:0.5rem;word-spacing:0.5rem;}` | `.word-spacing-2{word-spacing:0.5rem;}` |
| word-spacing-inherit | ❌ | `.word-spacing-inherit{--un-word-spacing:inherit;word-spacing:inherit;}` | `.word-spacing-inherit{word-spacing:inherit;}` |
| tab | ✅ | `.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4;}` | `.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4;}` |
| tab-6 | ✅ | `.tab-6{-moz-tab-size:6;-o-tab-size:6;tab-size:6;}` | `.tab-6{-moz-tab-size:6;-o-tab-size:6;tab-size:6;}` |
| tab-inherit | ✅ | `.tab-inherit{-moz-tab-size:inherit;-o-tab-size:inherit;tab-size:inherit;}` | `.tab-inherit{-moz-tab-size:inherit;-o-tab-size:inherit;tab-size:inherit;}` |
| indent | ❌ | `` | `.indent{text-indent:1.5rem;}` |
| indent-1/2 | ❌ | `.indent-1\/2{text-indent:calc(var(--spacing) * 0.5);}` | `.indent-1\/2{text-indent:50%;}` |
| indent-lg | ❌ | `` | `.indent-lg{text-indent:2rem;}` |
| indent-unset | ✅ | `.indent-unset{text-indent:unset;}` | `.indent-unset{text-indent:unset;}` |
| indent-revert-layer | ✅ | `.indent-revert-layer{text-indent:revert-layer;}` | `.indent-revert-layer{text-indent:revert-layer;}` |
| text-stroke-6 | ✅ | `.text-stroke-6{-webkit-text-stroke-width:6px;}` | `.text-stroke-6{-webkit-text-stroke-width:6px;}` |
| text-stroke-sm | ❌ | `.text-stroke-sm{-webkit-text-stroke-width:var(--text-stroke-width-sm);}` | `.text-stroke-sm{-webkit-text-stroke-width:thin;}` |
| text-stroke-blue-500 | ❌ | `.text-stroke-blue-500{--un-text-stroke-opacity:100%;-webkit-text-stroke-color:color-mix(in oklch, var(--color-blue-500) var(--un-text-stroke-opacity), transparent);}` | `.text-stroke-blue-500{--un-text-stroke-opacity:1;-webkit-text-stroke-color:rgb(59 130 246 / var(--un-text-stroke-opacity));}` |
| text-stroke-op-60 | ❌ | `.text-stroke-op-60{--un-text-stroke-opacity:60%;}` | `.text-stroke-op-60{--un-text-stroke-opacity:0.6;}` |
| text-stroke-op-$opacity-variable | ✅ | `.text-stroke-op-\$opacity-variable{--un-text-stroke-opacity:var(--opacity-variable);}` | `.text-stroke-op-\$opacity-variable{--un-text-stroke-opacity:var(--opacity-variable);}` |
| text-shadow | ❌ | `` | `.text-shadow{--un-text-shadow:0 0 1px var(--un-text-shadow-color, rgb(0 0 0 / 0.2)),0 0 1px var(--un-text-shadow-color, rgb(1 0 5 / 0.1));text-shadow:var(--un-text-shadow);}` |
| text-shadow-lg | ❌ | `` | `.text-shadow-lg{--un-text-shadow:3px 3px 6px var(--un-text-shadow-color, rgb(0 0 0 / 0.26)),0 0 5px var(--un-text-shadow-color, rgb(15 3 86 / 0.22));text-shadow:var(--un-text-shadow);}` |
| text-shadow-none | ❌ | `` | `.text-shadow-none{--un-text-shadow:0 0 var(--un-text-shadow-color, rgb(0 0 0 / 0));text-shadow:var(--un-text-shadow);}` |
| text-shadow-$var | ❌ | `` | `.text-shadow-\$var{text-shadow:var(--var);}` |
| text-shadow-color-red-300 | ❌ | `.text-shadow-color-red-300{--un-text-shadow-opacity:100%;--un-text-shadow-color:color-mix(in oklch, var(--color-red-300) var(--un-text-shadow-opacity), transparent);}` | `.text-shadow-color-red-300{--un-text-shadow-opacity:1;--un-text-shadow-color:rgb(252 165 165 / var(--un-text-shadow-opacity));}` |
| text-shadow-color-op-30 | ❌ | `.text-shadow-color-op-30{--un-text-shadow-opacity:30%;}` | `.text-shadow-color-op-30{--un-text-shadow-opacity:0.3;}` |
| text-shadow-color-op-$opacity-variable | ✅ | `.text-shadow-color-op-\$opacity-variable{--un-text-shadow-opacity:var(--opacity-variable);}` | `.text-shadow-color-op-\$opacity-variable{--un-text-shadow-opacity:var(--opacity-variable);}` |
| color-scheme-light | ✅ | `.color-scheme-light{color-scheme:light;}` | `.color-scheme-light{color-scheme:light;}` |
| color-scheme-dark | ✅ | `.color-scheme-dark{color-scheme:dark;}` | `.color-scheme-dark{color-scheme:dark;}` |
| bg-[--test-variable] | ❌ | `.bg-\[--test-variable\]{--un-bg-opacity:100%;background-color:color-mix(in oklch, var(--test-variable) var(--un-bg-opacity), transparent);}` | `.bg-\[--test-variable\]{background-color:var(--test-variable);}` |
| bg-$test-variable | ❌ | `.bg-\$test-variable{--un-bg-opacity:100%;background-color:color-mix(in oklch, var(--test-variable) var(--un-bg-opacity), transparent);}` | `.bg-\$test-variable{background-color:var(--test-variable);}` |
| border-$color | ❌ | `.border-\$color{--un-border-opacity:100%;border-color:color-mix(in oklch, var(--color) var(--un-border-opacity), transparent);}` | `.border-\$color{border-color:var(--color);}` |
| border-t-$color | ❌ | `.border-t-\$color{--un-border-opacity:100%;--un-border-top-opacity:var(--un-border-opacity);border-top-color:color-mix(in oklch, var(--color) var(--un-border-top-opacity), transparent);}` | `.border-t-\$color{border-top-color:var(--color);}` |
| border-x-$color | ❌ | `.border-x-\$color{--un-border-opacity:100%;--un-border-inline-opacity:var(--un-border-opacity);border-inline-color:color-mix(in oklch, var(--color) var(--un-border-inline-opacity), transparent);}` | `.border-x-\$color{border-left-color:var(--color);border-right-color:var(--color);}` |
| color-$red | ❌ | `.color-\$red{--un-text-opacity:100%;color:color-mix(in oklch, var(--red) var(--un-text-opacity), transparent);}` | `.color-\$red{color:var(--red);}` |
| items-$size | ✅ | `.items-\$size{align-items:var(--size);}` | `.items-\$size{align-items:var(--size);}` |
| tab-$tabprop | ✅ | `.tab-\$tabprop{-moz-tab-size:var(--tabprop);-o-tab-size:var(--tabprop);tab-size:var(--tabprop);}` | `.tab-\$tabprop{-moz-tab-size:var(--tabprop);-o-tab-size:var(--tabprop);tab-size:var(--tabprop);}` |
| outline-$variable | ❌ | `.outline-\$variable{--un-outline-color-opacity:100%;outline-color:color-mix(in oklch, var(--variable) var(--un-outline-color-opacity), transparent);}` | `.outline-\$variable{outline-color:var(--variable);}` |
| outline-width-$variable | ❌ | `.outline-width-\$variable{outline-style:var(--un-outline-style);outline-width:var(--variable);}` | `.outline-width-\$variable{outline-width:var(--variable);}` |
| outline-size-$variable | ❌ | `.outline-size-\$variable{outline-style:var(--un-outline-style);outline-width:var(--variable);}` | `.outline-size-\$variable{outline-width:var(--variable);}` |
| outline-offset-$variable | ✅ | `.outline-offset-\$variable{outline-offset:var(--variable);}` | `.outline-offset-\$variable{outline-offset:var(--variable);}` |
| border-size-$variable | ✅ | `.border-size-\$variable{border-width:var(--variable);}` | `.border-size-\$variable{border-width:var(--variable);}` |
| border-width-$variable | ✅ | `.border-width-\$variable{border-width:var(--variable);}` | `.border-width-\$variable{border-width:var(--variable);}` |
| border-s-width-$variable | ✅ | `.border-s-width-\$variable{border-inline-start-width:var(--variable);}` | `.border-s-width-\$variable{border-inline-start-width:var(--variable);}` |
| b-block-size-$variable | ✅ | `.b-block-size-\$variable{border-block-start-width:var(--variable);border-block-end-width:var(--variable);}` | `.b-block-size-\$variable{border-block-start-width:var(--variable);border-block-end-width:var(--variable);}` |
| rounded-$variable | ✅ | `.rounded-\$variable{border-radius:var(--variable);}` | `.rounded-\$variable{border-radius:var(--variable);}` |
| flex-basis-$variable | ✅ | `.flex-basis-\$variable{flex-basis:var(--variable);}` | `.flex-basis-\$variable{flex-basis:var(--variable);}` |
| gap-$variable | ✅ | `.gap-\$variable{gap:var(--variable);}` | `.gap-\$variable{gap:var(--variable);}` |
| grid-row-$variable | ✅ | `.grid-row-\$variable{grid-row:var(--variable);}` | `.grid-row-\$variable{grid-row:var(--variable);}` |
| grid-col-$variable | ✅ | `.grid-col-\$variable{grid-column:var(--variable);}` | `.grid-col-\$variable{grid-column:var(--variable);}` |
| grid-auto-rows-$variable | ✅ | `.grid-auto-rows-\$variable{grid-auto-rows:var(--variable);}` | `.grid-auto-rows-\$variable{grid-auto-rows:var(--variable);}` |
| grid-auto-cols-$variable | ✅ | `.grid-auto-cols-\$variable{grid-auto-columns:var(--variable);}` | `.grid-auto-cols-\$variable{grid-auto-columns:var(--variable);}` |
| order-$variable | ❌ | `` | `.order-\$variable{order:var(--variable);}` |
| inset-$variable | ❌ | `` | `.inset-\$variable{inset:var(--variable);}` |
| inset-s-$variable | ❌ | `` | `.inset-s-\$variable{inset-inline-start:var(--variable);}` |
| inset-inline-$variable | ❌ | `` | `.inset-inline-\$variable{inset-inline-start:var(--variable);inset-inline-end:var(--variable);}` |
| z-$variable | ❌ | `` | `.z-\$variable{z-index:var(--variable);}` |
| ring-offset-$variable | ❌ | `.ring-offset-\$variable{--un-ring-offset-opacity:100%;--un-ring-offset-color:color-mix(in oklch, var(--variable) var(--un-ring-offset-opacity), transparent);}` | `.ring-offset-\$variable{--un-ring-offset-color:var(--variable);}` |
| ring-offset-width-$variable | ❌ | `` | `.ring-offset-width-\$variable{--un-ring-offset-width:var(--variable);}` |
| ring-offset-size-$variable | ❌ | `` | `.ring-offset-size-\$variable{--un-ring-offset-width:var(--variable);}` |
| stroke-dash-$variable | ❌ | `` | `.stroke-dash-\$variable{stroke-dasharray:var(--variable);}` |
| stroke-offset-$variable | ❌ | `` | `.stroke-offset-\$variable{stroke-dashoffset:var(--variable);}` |
| perspect-$variable | ❌ | `.perspect-\$variable{perspective:var(--variable);}` | `.perspect-\$variable{-webkit-perspective:var(--variable);perspective:var(--variable);}` |
| perspect-origin-$variable | ❌ | `.perspect-origin-\$variable{perspective-origin:var(--variable);}` | `.perspect-origin-\$variable{-webkit-perspective-origin:var(--variable);perspective-origin:var(--variable);}` |
| translate-x-$variable | ❌ | `.translate-x-\$variable{--un-translate-x:var(--variable);translate:var(--un-translate-x) var(--un-translate-y);}` | `.translate-x-\$variable{--un-translate-x:var(--variable);transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| rotate-$variable | ❌ | `.rotate-\$variable{rotate:var(--variable);}` | `.rotate-\$variable{--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-rotate:var(--variable);transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| rotate-x-$variable | ❌ | `.rotate-x-\$variable{--un-rotate-x:var(--variable);transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.rotate-x-\$variable{--un-rotate:0;--un-rotate-x:var(--variable);transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| skew-x-$variable | ❌ | `.skew-x-\$variable{--un-skew-x:var(--variable);transform:var(--un-rotate-x) var(--un-rotate-y) var(--un-rotate-z) var(--un-skew-x) var(--un-skew-y);}` | `.skew-x-\$variable{--un-skew-x:var(--variable);transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| scale-$variable | ❌ | `.scale-\$variable{--un-scale-x:var(--variable);--un-scale-y:var(--variable);scale:var(--un-scale-x) var(--un-scale-y);}` | `.scale-\$variable{--un-scale-x:var(--variable);--un-scale-y:var(--variable);transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| scale-[var(--x),var(--y)] | ❌ | `.scale-\[var\(--x\)\,var\(--y\)\]{--un-scale-x:var(--x);--un-scale-y:var(--y);scale:var(--un-scale-x) var(--un-scale-y);}` | `.scale-\[var\(--x\)\,var\(--y\)\]{--un-scale-x:var(--x);--un-scale-y:var(--y);transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| scale-[var(--x),var(--y),20%] | ❌ | `.scale-\[var\(--x\)\,var\(--y\)\,20\%\]{--un-scale-x:var(--x);--un-scale-y:var(--y);--un-scale-z:20%;scale:var(--un-scale-x) var(--un-scale-y);}` | `.scale-\[var\(--x\)\,var\(--y\)\,20\%\]{--un-scale-x:var(--x);--un-scale-y:var(--y);--un-scale-z:20%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| scale-x-$variable | ❌ | `.scale-x-\$variable{--un-scale-x:var(--variable);scale:var(--un-scale-x) var(--un-scale-y);}` | `.scale-x-\$variable{--un-scale-x:var(--variable);transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| transition-delay-$variable | ✅ | `.transition-delay-\$variable{transition-delay:var(--variable);}` | `.transition-delay-\$variable{transition-delay:var(--variable);}` |
| transition-duration-$variable | ❌ | `.transition-duration-\$variable{--un-duration:var(--variable);transition-duration:var(--variable);}` | `.transition-duration-\$variable{transition-duration:var(--variable);}` |
| ease-$variable | ❌ | `.ease-\$variable{--un-ease:var(--variable);transition-timing-function:var(--variable);}` | `.ease-\$variable{transition-timing-function:var(--variable);}` |
| text-$variable | ❌ | `.text-\$variable{--un-text-opacity:100%;color:color-mix(in oklch, var(--variable) var(--un-text-opacity), transparent);}` | `.text-\$variable{color:var(--variable);}` |
| text-size-$variable | ✅ | `.text-size-\$variable{font-size:var(--variable);}` | `.text-size-\$variable{font-size:var(--variable);}` |
| fw-$variable | ✅ | `.fw-\$variable{font-weight:var(--variable);}` | `.fw-\$variable{font-weight:var(--variable);}` |
| leading-$variable | ❌ | `.leading-\$variable{--un-font-weight:var(--variable);line-height:var(--variable);}` | `.leading-\$variable{line-height:var(--variable);}` |
| lh-$variable | ❌ | `.lh-\$variable{--un-font-weight:var(--variable);line-height:var(--variable);}` | `.lh-\$variable{line-height:var(--variable);}` |
| tracking-$variable | ❌ | `.tracking-\$variable{--un-tracking:var(--variable);letter-spacing:var(--variable);}` | `.tracking-\$variable{letter-spacing:var(--variable);}` |
| word-spacing-$variable | ❌ | `.word-spacing-\$variable{--un-word-spacing:var(--variable);word-spacing:var(--variable);}` | `.word-spacing-\$variable{word-spacing:var(--variable);}` |
| ws-$variable | ✅ | `.ws-\$variable{white-space:var(--variable);}` | `.ws-\$variable{white-space:var(--variable);}` |
| [a:b] | ✅ | `.\[a\:b\]{a:b;}` | `.\[a\:b\]{a:b;}` |
| [margin:logical_1rem_2rem_3rem] | ✅ | `.\[margin\:logical_1rem_2rem_3rem\]{margin:logical 1rem 2rem 3rem;}` | `.\[margin\:logical_1rem_2rem_3rem\]{margin:logical 1rem 2rem 3rem;}` |
| [content:attr(attr_content)] | ✅ | `.\[content\:attr\(attr_content\)\]{content:attr(attr content);}` | `.\[content\:attr\(attr_content\)\]{content:attr(attr content);}` |
| [content:attr(attr\_content)] | ✅ | `.\[content\:attr\(attr\\_content\)\]{content:attr(attr_content);}` | `.\[content\:attr\(attr\\_content\)\]{content:attr(attr_content);}` |
| [background-image:url(star_transparent.gif),_url(cat_front.png)] | ✅ | `.\[background-image\:url\(star_transparent\.gif\)\,_url\(cat_front\.png\)\]{background-image:url(star_transparent.gif), url(cat_front.png);}` | `.\[background-image\:url\(star_transparent\.gif\)\,_url\(cat_front\.png\)\]{background-image:url(star_transparent.gif), url(cat_front.png);}` |
| [font-family:var(--font-family)] | ✅ | `.\[font-family\:var\(--font-family\)\]{font-family:var(--font-family);}` | `.\[font-family\:var\(--font-family\)\]{font-family:var(--font-family);}` |
| [font-family:'Inter',_sans-serif] | ✅ | `.\[font-family\:\'Inter\'\,_sans-serif\]{font-family:'Inter', sans-serif;}` | `.\[font-family\:\'Inter\'\,_sans-serif\]{font-family:'Inter', sans-serif;}` |
| [font-feature-settings:'cv02','cv03','cv04','cv11'] | ✅ | `.\[font-feature-settings\:\'cv02\'\,\'cv03\'\,\'cv04\'\,\'cv11\'\]{font-feature-settings:'cv02','cv03','cv04','cv11';}` | `.\[font-feature-settings\:\'cv02\'\,\'cv03\'\,\'cv04\'\,\'cv11\'\]{font-feature-settings:'cv02','cv03','cv04','cv11';}` |
| [font-variation-settings:"wght"_400,_"opsz"_14] | ✅ | `.\[font-variation-settings\:\"wght\"_400\,_\"opsz\"_14\]{font-variation-settings:"wght" 400, "opsz" 14;}` | `.\[font-variation-settings\:\"wght\"_400\,_\"opsz\"_14\]{font-variation-settings:"wght" 400, "opsz" 14;}` |
| [padding:theme(spacing.xl)] | ❌ | `.\[padding\:theme\(spacing\.xl\)\]{padding:calc(var(--spacing) * 5);}` | `.\[padding\:theme\(spacing\.xl\)\]{padding:1.25rem;}` |
| [color:theme(colors.blue.300/40%)] | ❌ | `.\[color\:theme\(colors\.blue\.300\/40\%\)\]{color:oklch(0.809 0.105 251.813 / 40%);}` | `.\[color\:theme\(colors\.blue\.300\/40\%\)\]{color:rgb(147 197 253 / 40%);}` |
| [--css-variable:"wght"_400,_"opsz"_14] | ✅ | `.\[--css-variable\:\"wght\"_400\,_\"opsz\"_14\]{--css-variable:"wght" 400, "opsz" 14;}` | `.\[--css-variable\:\"wght\"_400\,_\"opsz\"_14\]{--css-variable:"wght" 400, "opsz" 14;}` |
| [--css-variable-color:theme(colors.red.500)] | ❌ | `.\[--css-variable-color\:theme\(colors\.red\.500\)\]{--css-variable-color:oklch(0.637 0.237 25.331);}` | `.\[--css-variable-color\:theme\(colors\.red\.500\)\]{--css-variable-color:#ef4444;}` |
| [--css-variable-color:theme(colors.red.500/50%)] | ❌ | `.\[--css-variable-color\:theme\(colors\.red\.500\/50\%\)\]{--css-variable-color:oklch(0.637 0.237 25.331 / 50%);}` | `.\[--css-variable-color\:theme\(colors\.red\.500\/50\%\)\]{--css-variable-color:rgb(239 68 68 / 50%);}` |
| [--css-variable-color:theme(colors.green.500),theme(colors.blue.500)] | ❌ | `.\[--css-variable-color\:theme\(colors\.green\.500\)\,theme\(colors\.blue\.500\)\]{--css-variable-color:oklch(0.723 0.219 149.579),oklch(0.623 0.214 259.815);}` | `.\[--css-variable-color\:theme\(colors\.green\.500\)\,theme\(colors\.blue\.500\)\]{--css-variable-color:#22c55e,#3b82f6;}` |
| [--css-spacing:theme(spacing.sm)] | ❌ | `.\[--css-spacing\:theme\(spacing\.sm\)\]{--css-spacing:calc(var(--spacing) * 3.5);}` | `.\[--css-spacing\:theme\(spacing\.sm\)\]{--css-spacing:0.875rem;}` |
| bg-[--css-spacing,theme(spacing.sm)] | ❌ | `.bg-\[--css-spacing\,theme\(spacing\.sm\)\]{--un-bg-opacity:100%;background-color:color-mix(in oklch, var(--css-spacing,calc(var(--spacing) * 3.5)) var(--un-bg-opacity), transparent);}` | `.bg-\[--css-spacing\,theme\(spacing\.sm\)\]{background-color:var(--css-spacing,0.875rem);}` |
| text-[theme(spacing.sm)] | ❌ | `.text-\[theme\(spacing\.sm\)\]{--un-text-opacity:100%;color:color-mix(in oklch, calc(var(--spacing) * 3.5) var(--un-text-opacity), transparent);}` | `.text-\[theme\(spacing\.sm\)\]{color:0.875rem;}` |
| c-[theme(colors.red.500/50%)] | ❌ | `.c-\[theme\(colors\.red\.500\/50\%\)\]{--un-text-opacity:100%;color:color-mix(in oklch, oklch(0.637 0.237 25.331 / 50%) var(--un-text-opacity), transparent);}` | `.c-\[theme\(colors\.red\.500\/50\%\)\]{color:rgb(239 68 68 / 50%);}` |
| active:scale-4 | ❌ | `.active\:scale-4:active{--un-scale-x:4%;--un-scale-y:4%;scale:var(--un-scale-x) var(--un-scale-y);}` | `.active\:scale-4:active{--un-scale-x:0.04;--un-scale-y:0.04;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| hover:scale-4 | ❌ | `.hover\:scale-4:hover{--un-scale-x:4%;--un-scale-y:4%;scale:var(--un-scale-x) var(--un-scale-y);}` | `.hover\:scale-4:hover{--un-scale-x:0.04;--un-scale-y:0.04;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| hover:translate-x-3 | ❌ | `.hover\:translate-x-3:hover{--un-translate-x:calc(var(--spacing) * 3);translate:var(--un-translate-x) var(--un-translate-y);}` | `.hover\:translate-x-3:hover{--un-translate-x:0.75rem;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| peer-checked:translate-x-[var(--reveal)] | ❌ | `.peer:checked~.peer-checked\:translate-x-\[var\(--reveal\)\]{--un-translate-x:var(--reveal);translate:var(--un-translate-x) var(--un-translate-y);}` | `.peer:checked~.peer-checked\:translate-x-\[var\(--reveal\)\]{--un-translate-x:var(--reveal);transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| !hover:px-10 | ❌ | `.\!hover\:px-10:hover{padding-inline:calc(var(--spacing) * 10) !important;}` | `.\!hover\:px-10:hover{padding-left:2.5rem !important;padding-right:2.5rem !important;}` |
| at-2xl:m2 | ❌ | `@media (min-width: 96rem){
.at-2xl\:m2{margin:calc(var(--spacing) * 2);}
}` | `@media (min-width: 1536px){
.at-2xl\:m2{margin:0.5rem;}
}` |
| at-lg:m2 | ❌ | `@media (min-width: 64rem) and (max-width: calc(80rem - 0.1px)){
.at-lg\:m2{margin:calc(var(--spacing) * 2);}
}` | `@media (min-width: 1024px) and (max-width: 1279.9px){
.at-lg\:m2{margin:0.5rem;}
}` |
| at-sm:m1 | ❌ | `@media (min-width: 40rem) and (max-width: calc(48rem - 0.1px)){
.at-sm\:m1{margin:calc(var(--spacing) * 1);}
}` | `@media (min-width: 640px) and (max-width: 767.9px){
.at-sm\:m1{margin:0.25rem;}
}` |
| ~sm:m1 | ❌ | `@media (min-width: 40rem) and (max-width: calc(48rem - 0.1px)){
.\~sm\:m1{margin:calc(var(--spacing) * 1);}
}` | `@media (min-width: 640px) and (max-width: 767.9px){
.\~sm\:m1{margin:0.25rem;}
}` |
| disabled:op50 | ❌ | `.disabled\:op50:disabled{opacity:50%;}` | `.disabled\:op50:disabled{opacity:0.5;}` |
| first:p-2 | ❌ | `.first\:p-2:first-child{padding:calc(var(--spacing) * 2);}` | `.first\:p-2:first-child{padding:0.5rem;}` |
| first-line:bg-green-400 | ❌ | `.first-line\:bg-green-400::first-line{--un-bg-opacity:100%;background-color:color-mix(in oklch, var(--color-green-400) var(--un-bg-opacity), transparent);}` | `.first-line\:bg-green-400::first-line{--un-bg-opacity:1;background-color:rgb(74 222 128 / var(--un-bg-opacity));}` |
| first-letter:bg-green-400 | ❌ | `.first-letter\:bg-green-400::first-letter{--un-bg-opacity:100%;background-color:color-mix(in oklch, var(--color-green-400) var(--un-bg-opacity), transparent);}` | `.first-letter\:bg-green-400::first-letter{--un-bg-opacity:1;background-color:rgb(74 222 128 / var(--un-bg-opacity));}` |
| group-hover:group-focus:text-center | ✅ | `.group:hover:focus .group-hover\:group-focus\:text-center{text-align:center;}` | `.group:hover:focus .group-hover\:group-focus\:text-center{text-align:center;}` |
| focus-visible:outline-none | ❌ | `.focus-visible\:outline-none:focus-visible{--un-outline-style:none;outline-style:none;}` | `.focus-visible\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px;}` |
| hover:!p-1 | ❌ | `.hover\:\!p-1:hover{padding:calc(var(--spacing) * 1) !important;}` | `.hover\:\!p-1:hover{padding:0.25rem !important;}` |
| hover:not-first:checked:bg-red/10 | ❌ | `.hover\:not-first\:checked\:bg-red\/10:checked:not(:first-child):hover{--un-bg-opacity:10%;background-color:color-mix(in oklch, var(--color-red-400) var(--un-bg-opacity), transparent);}` | `.hover\:not-first\:checked\:bg-red\/10:checked:not(:first-child):hover{background-color:rgb(248 113 113 / 0.1);}` |
| hover:p-5 | ❌ | `.hover\:p-5:hover{padding:calc(var(--spacing) * 5);}` | `.hover\:p-5:hover{padding:1.25rem;}` |
| lt-lg:m2 | ❌ | `@media (max-width: calc(64rem - 0.1px)){
.lt-lg\:m2{margin:calc(var(--spacing) * 2);}
}` | `@media (max-width: 1023.9px){
.lt-lg\:m2{margin:0.5rem;}
}` |
| lt-sm:m1 | ❌ | `@media (max-width: calc(40rem - 0.1px)){
.lt-sm\:m1{margin:calc(var(--spacing) * 1);}
}` | `@media (max-width: 639.9px){
.lt-sm\:m1{margin:0.25rem;}
}` |
| max-sm:m1 | ❌ | `@media (max-width: calc(40rem - 0.1px)){
.max-sm\:m1{margin:calc(var(--spacing) * 1);}
}` | `@media (max-width: 639.9px){
.max-sm\:m1{margin:0.25rem;}
}` |
| <sm:m1 | ❌ | `@media (max-width: calc(40rem - 0.1px)){
.\<sm\:m1{margin:calc(var(--spacing) * 1);}
}` | `@media (max-width: 639.9px){
.\<sm\:m1{margin:0.25rem;}
}` |
| md:!hidden | ❌ | `@media (min-width: 48rem){
.md\:\!hidden{display:none !important;}
}` | `@media (min-width: 768px){
.md\:\!hidden{display:none !important;}
}` |
| md:m-1 | ❌ | `@media (min-width: 48rem){
.md\:m-1{margin:calc(var(--spacing) * 1);}
}` | `@media (min-width: 768px){
.md\:m-1{margin:0.25rem;}
}` |
| not-hover:p-3 | ❌ | `.not-hover\:p-3:not(:hover){padding:calc(var(--spacing) * 3);}` | `.not-hover\:p-3:not(:hover){padding:0.75rem;}` |
| peer-not-placeholder-shown:text-2xl | ❌ | `.peer:not(:placeholder-shown)~.peer-not-placeholder-shown\:text-2xl{font-size:var(--text-2xl-font-size);line-height:var(--un-leading, var(--text-2xl--line-height));}` | `.peer:not(:placeholder-shown)~.peer-not-placeholder-shown\:text-2xl{font-size:1.5rem;line-height:2rem;}` |
| sm:m-1 | ❌ | `@media (min-width: 40rem){
.sm\:m-1{margin:calc(var(--spacing) * 1);}
}` | `@media (min-width: 640px){
.sm\:m-1{margin:0.25rem;}
}` |
| sm:m1 | ❌ | `@media (min-width: 40rem){
.sm\:m1{margin:calc(var(--spacing) * 1);}
}` | `@media (min-width: 640px){
.sm\:m1{margin:0.25rem;}
}` |
| important:p-3 | ❌ | `.important\:p-3{padding:calc(var(--spacing) * 3) !important;}` | `.important\:p-3{padding:0.75rem !important;}` |
| sm:important:p-3 | ❌ | `@media (min-width: 40rem){
.sm\:important\:p-3{padding:calc(var(--spacing) * 3) !important;}
}` | `@media (min-width: 640px){
.sm\:important\:p-3{padding:0.75rem !important;}
}` |
| p3! | ❌ | `.p3\!{padding:calc(var(--spacing) * 3) !important;}` | `.p3\!{padding:0.75rem !important;}` |
| -mt-safe | ✅ | `` | `` |
| -!mb-safe | ✅ | `` | `` |
| !-ms-safe | ✅ | `` | `` |
| *:p-2 | ❌ | `.\*\:p-2 > *{padding:calc(var(--spacing) * 2);}` | `.\*\:p-2 > *{padding:0.5rem;}` |
| *-p-2 | ❌ | `.\*-p-2 > *{padding:calc(var(--spacing) * 2);}` | `.\*-p-2 > *{padding:0.5rem;}` |
| all-[.target]-[combinator:test-2] | ✅ | `.all-\[\.target\]-\[combinator\:test-2\] .target{combinator:test-2;}` | `.all-\[\.target\]-\[combinator\:test-2\] .target{combinator:test-2;}` |
| children-[.target]-[combinator:test-2] | ✅ | `.children-\[\.target\]-\[combinator\:test-2\]>.target{combinator:test-2;}` | `.children-\[\.target\]-\[combinator\:test-2\]>.target{combinator:test-2;}` |
| next-[.target]-[combinator:test-2] | ✅ | `.next-\[\.target\]-\[combinator\:test-2\]+.target{combinator:test-2;}` | `.next-\[\.target\]-\[combinator\:test-2\]+.target{combinator:test-2;}` |
| sibling-[div:hover]-[combinator:test-4] | ✅ | `.sibling-\[div\:hover\]-\[combinator\:test-4\]+div:hover{combinator:test-4;}` | `.sibling-\[div\:hover\]-\[combinator\:test-4\]+div:hover{combinator:test-4;}` |
| all-[svg]:fill-red | ❌ | `` | `.all-\[svg\]\:fill-red svg{--un-fill-opacity:1;fill:rgb(248 113 113 / var(--un-fill-opacity));}` |
| all-[[data-hvr]:hover]:[color:red] | ✅ | `.all-\[\[data-hvr\]\:hover\]\:\[color\:red\] [data-hvr]:hover{color:red;}` | `.all-\[\[data-hvr\]\:hover\]\:\[color\:red\] [data-hvr]:hover{color:red;}` |
| all:m-auto | ✅ | `.all\:m-auto *{margin:auto;}` | `.all\:m-auto *{margin:auto;}` |
| all:m1/1 | ❌ | `.all\:m1\/1 *{margin:calc(var(--spacing) * 1);}` | `.all\:m1\/1 *{margin:100%;}` |
| children:m-auto | ✅ | `.children\:m-auto>*{margin:auto;}` | `.children\:m-auto>*{margin:auto;}` |
| next:mt-0 | ❌ | `.next\:mt-0+*{margin-top:calc(var(--spacing) * 0);}` | `.next\:mt-0+*{margin-top:0;}` |
| dark:not-odd:text-red | ❌ | `.dark .dark\:not-odd\:text-red:not(:nth-child(odd)){--un-text-opacity:100%;color:color-mix(in oklch, var(--color-red-400) var(--un-text-opacity), transparent);}` | `.dark .dark\:not-odd\:text-red:not(:nth-child(odd)){--un-text-opacity:1;color:rgb(248 113 113 / var(--un-text-opacity));}` |
| dark:text-xl | ❌ | `.dark .dark\:text-xl{font-size:var(--text-xl-font-size);line-height:var(--un-leading, var(--text-xl--line-height));}` | `.dark .dark\:text-xl{font-size:1.25rem;line-height:1.75rem;}` |
| light:text-sm | ❌ | `.light .light\:text-sm{font-size:var(--text-sm-font-size);line-height:var(--un-leading, var(--text-sm--line-height));}` | `.light .light\:text-sm{font-size:0.875rem;line-height:1.25rem;}` |
| uno-layer-1:translate-0 | ❌ | `/* layer: 1 */
.uno-layer-1\:translate-0{--un-translate-x:calc(var(--spacing) * 0);--un-translate-y:calc(var(--spacing) * 0);translate:var(--un-translate-x) var(--un-translate-y);}` | `/* layer: 1 */
.uno-layer-1\:translate-0{--un-translate-x:0;--un-translate-y:0;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| uno-layer-uno_css:block | ✅ | `/* layer: uno_css */
.uno-layer-uno_css\:block{display:block;}` | `/* layer: uno_css */
.uno-layer-uno_css\:block{display:block;}` |
| layer-base:translate-0 | ❌ | `@layer base{
.layer-base\:translate-0{--un-translate-x:calc(var(--spacing) * 0);--un-translate-y:calc(var(--spacing) * 0);translate:var(--un-translate-x) var(--un-translate-y);}
}` | `@layer base{
.layer-base\:translate-0{--un-translate-x:0;--un-translate-y:0;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
}` |
| layer-[utility]:block | ✅ | `@layer utility{
.layer-\[utility\]\:block{display:block;}
}` | `@layer utility{
.layer-\[utility\]\:block{display:block;}
}` |
| uno-layer-[uno_css]:block | ✅ | `/* layer: uno css */
.uno-layer-\[uno_css\]\:block{display:block;}` | `/* layer: uno css */
.uno-layer-\[uno_css\]\:block{display:block;}` |
| -rotate-2 | ❌ | `.-rotate-2{rotate:-2deg;}` | `.-rotate-2{--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-rotate:-2deg;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| -translate-full | ❌ | `.-translate-full{--un-translate-x:calc(calc(var(--spacing) * 1) * -1);--un-translate-y:calc(calc(var(--spacing) * 1) * -1);translate:calc(var(--un-translate-x) * -1) var(--un-translate-y);}` | `.-translate-full{--un-translate-x:-100%;--un-translate-y:-100%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| -translate-x-full | ❌ | `.-translate-x-full{--un-translate-x:calc(calc(var(--spacing) * 1) * -1);translate:calc(var(--un-translate-x) * -1) var(--un-translate-y);}` | `.-translate-x-full{--un-translate-x:-100%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| -translate-y-1/2 | ❌ | `.-translate-y-1\/2{--un-translate-y:calc(calc(var(--spacing) * 0.5) * -1);translate:calc(var(--un-translate-x) * -1) var(--un-translate-y);}` | `.-translate-y-1\/2{--un-translate-y:-50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| -scale-x-full | ❌ | `.-scale-x-full{--un-scale-x:-100%;scale:calc(var(--un-scale-x) * -1) var(--un-scale-y);}` | `.-scale-x-full{--un-scale-x:-100%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| !m-$c-m | ✅ | `.\!m-\$c-m{margin:var(--c-m) !important;}` | `.\!m-\$c-m{margin:var(--c-m) !important;}` |
| !p-5px | ❌ | `` | `.\!p-5px{padding:5px !important;}` |
| -gap-y-5 | ❌ | `.-gap-y-5{row-gap:calc(calc(var(--spacing) * 5) * -1);}` | `.-gap-y-5{row-gap:-1.25rem;}` |
| -gap-row-5 | ❌ | `.-gap-row-5{row-gap:calc(calc(var(--spacing) * 5) * -1);}` | `.-gap-row-5{row-gap:-1.25rem;}` |
| -mb-px | ❌ | `` | `.-mb-px{margin-bottom:-1px;}` |
| -mt--5cm | ❌ | `` | `.-mt--5cm{margin-top:5cm;}` |
| -p-px | ❌ | `` | `.-p-px{padding:-1px;}` |
| -z-1 | ❌ | `` | `.-z-1{z-index:-1;}` |
| supports-[(display:_grid)]:block | ✅ | `@supports (display: grid){
.supports-\[\(display\:_grid\)\]\:block{display:block;}
}` | `@supports (display: grid){
.supports-\[\(display\:_grid\)\]\:block{display:block;}
}` |
| media-mouse:block | ❌ | `` | `@media (hover) and (pointer: fine){
.media-mouse\:block{display:block;}
}` |
| media-[(--cssvar)]:block | ✅ | `@media (--cssvar){
.media-\[\(--cssvar\)\]\:block{display:block;}
}` | `@media (--cssvar){
.media-\[\(--cssvar\)\]\:block{display:block;}
}` |
| group-hover:media-mouse:bg-red | ❌ | `` | `@media (hover) and (pointer: fine){
.group:hover .group-hover\:media-mouse\:bg-red{--un-bg-opacity:1;background-color:rgb(248 113 113 / var(--un-bg-opacity));}
}` |
| print:block | ✅ | `@media print{
.print\:block{display:block;}
}` | `@media print{
.print\:block{display:block;}
}` |
| print:link:!underline | ✅ | `@media print{
.print\:link\:\!underline:link{text-decoration-line:underline !important;}
}` | `@media print{
.print\:link\:\!underline:link{text-decoration-line:underline !important;}
}` |
| before:translate-y-full | ❌ | `.before\:translate-y-full::before{--un-translate-y:calc(var(--spacing) * 1);translate:var(--un-translate-x) var(--un-translate-y);}` | `.before\:translate-y-full::before{--un-translate-y:100%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| after:content-[quoted:unocss] | ✅ | `.after\:content-\[quoted\:unocss\]::after{content:"unocss";}` | `.after\:content-\[quoted\:unocss\]::after{content:"unocss";}` |
| placeholder-opacity-60 | ❌ | `.placeholder-opacity-60::placeholder{opacity:60%;}` | `.placeholder-opacity-60::placeholder{--un-placeholder-opacity:0.6;}` |
| placeholder-color-opacity-60 | ❌ | `.placeholder-color-opacity-60::placeholder{--un-text-opacity:60%;}` | `.placeholder-color-opacity-60::placeholder{--un-text-opacity:0.6;}` |
| placeholder-color-red-1 | ❌ | `` | `.placeholder-color-red-1::placeholder{--un-text-opacity:1;color:rgb(254 226 226 / var(--un-text-opacity));}` |
| placeholder:color-transparent | ❌ | `` | `.placeholder\:color-transparent::placeholder{color:transparent;}` |
| selection:color-[var(--select-color)] | ❌ | `.selection\:color-\[var\(--select-color\)\] *::selection,
.selection\:color-\[var\(--select-color\)\]::selection{--un-text-opacity:100%;color:color-mix(in oklch, var(--select-color) var(--un-text-opacity), transparent);}` | `.selection\:color-\[var\(--select-color\)\] *::selection,
.selection\:color-\[var\(--select-color\)\]::selection{color:var(--select-color);}` |
| marker:bg-violet-200 | ❌ | `.marker\:bg-violet-200 *::marker,
.marker\:bg-violet-200::marker{--un-bg-opacity:100%;background-color:color-mix(in oklch, var(--color-violet-200) var(--un-bg-opacity), transparent);}` | `.marker\:bg-violet-200 *::marker,
.marker\:bg-violet-200::marker{--un-bg-opacity:1;background-color:rgb(221 214 254 / var(--un-bg-opacity));}` |
| file:bg-violet-50 | ❌ | `.file\:bg-violet-50::file-selector-button{--un-bg-opacity:100%;background-color:color-mix(in oklch, var(--color-violet-50) var(--un-bg-opacity), transparent);}` | `.file\:bg-violet-50::file-selector-button{--un-bg-opacity:1;background-color:rgb(245 243 255 / var(--un-bg-opacity));}` |
| hover:file:bg-violet-100 | ❌ | `.hover\:file\:bg-violet-100::file-selector-button:hover{--un-bg-opacity:100%;background-color:color-mix(in oklch, var(--color-violet-100) var(--un-bg-opacity), transparent);}` | `.hover\:file\:bg-violet-100::file-selector-button:hover{--un-bg-opacity:1;background-color:rgb(237 233 254 / var(--un-bg-opacity));}` |
| backdrop:shadow-green | ❌ | `.backdrop\:shadow-green::backdrop{--un-shadow-opacity:100%;--un-shadow-color:color-mix(in oklch, var(--color-green-400) var(--un-shadow-opacity), transparent);}` | `.backdrop\:shadow-green::backdrop{--un-shadow-opacity:1;--un-shadow-color:rgb(74 222 128 / var(--un-shadow-opacity));}` |
| backdrop-element:shadow-green-100 | ❌ | `.backdrop-element\:shadow-green-100::backdrop{--un-shadow-opacity:100%;--un-shadow-color:color-mix(in oklch, var(--color-green-100) var(--un-shadow-opacity), transparent);}` | `.backdrop-element\:shadow-green-100::backdrop{--un-shadow-opacity:1;--un-shadow-color:rgb(220 252 231 / var(--un-shadow-opacity));}` |
| rtl:text-right | ✅ | `[dir="rtl"] .rtl\:text-right{text-align:right;}` | `[dir="rtl"] .rtl\:text-right{text-align:right;}` |
| ltr:text-left | ✅ | `[dir="ltr"] .ltr\:text-left{text-align:left;}` | `[dir="ltr"] .ltr\:text-left{text-align:left;}` |
| placeholder-shown-color-transparent | ❌ | `` | `.placeholder-shown-color-transparent:placeholder-shown{color:transparent;}` |
| open:color-pink-100 | ❌ | `.open\:color-pink-100[open]{--un-text-opacity:100%;color:color-mix(in oklch, var(--color-pink-100) var(--un-text-opacity), transparent);}` | `.open\:color-pink-100[open]{--un-text-opacity:1;color:rgb(252 231 243 / var(--un-text-opacity));}` |
| in-range:color-pink-100 | ❌ | `.in-range\:color-pink-100:in-range{--un-text-opacity:100%;color:color-mix(in oklch, var(--color-pink-100) var(--un-text-opacity), transparent);}` | `.in-range\:color-pink-100:in-range{--un-text-opacity:1;color:rgb(252 231 243 / var(--un-text-opacity));}` |
| out-of-range:color-pink-100 | ❌ | `.out-of-range\:color-pink-100:out-of-range{--un-text-opacity:100%;color:color-mix(in oklch, var(--color-pink-100) var(--un-text-opacity), transparent);}` | `.out-of-range\:color-pink-100:out-of-range{--un-text-opacity:1;color:rgb(252 231 243 / var(--un-text-opacity));}` |
| not-hover:p-4px | ❌ | `` | `.not-hover\:p-4px:not(:hover){padding:4px;}` |
| is-hover:p-4px | ❌ | `` | `.is-hover\:p-4px:is(:hover){padding:4px;}` |
| where-hover:p-2 | ❌ | `.where-hover\:p-2:where(:hover){padding:calc(var(--spacing) * 2);}` | `.where-hover\:p-2:where(:hover){padding:0.5rem;}` |
| has-hover:p-2 | ❌ | `.has-hover\:p-2:has(:hover){padding:calc(var(--spacing) * 2);}` | `.has-hover\:p-2:has(:hover){padding:0.5rem;}` |
| peer-not-placeholder-shown:text-3xl | ❌ | `.peer:not(:placeholder-shown)~.peer-not-placeholder-shown\:text-3xl{font-size:var(--text-3xl-font-size);line-height:var(--un-leading, var(--text-3xl--line-height));}` | `.peer:not(:placeholder-shown)~.peer-not-placeholder-shown\:text-3xl{font-size:1.875rem;line-height:2.25rem;}` |
| hover:not-first:checked:bg-true-gray/10 | ❌ | `` | `.hover\:not-first\:checked\:bg-true-gray\/10:checked:not(:first-child):hover{background-color:rgb(163 163 163 / 0.1);}` |
| peer-is-placeholder-shown:text-3xl | ❌ | `.peer:is(:placeholder-shown)~.peer-is-placeholder-shown\:text-3xl{font-size:var(--text-3xl-font-size);line-height:var(--un-leading, var(--text-3xl--line-height));}` | `.peer:is(:placeholder-shown)~.peer-is-placeholder-shown\:text-3xl{font-size:1.875rem;line-height:2.25rem;}` |
| hover:is-first:checked:bg-true-gray/10 | ❌ | `` | `.hover\:is-first\:checked\:bg-true-gray\/10:checked:is(:first-child):hover{background-color:rgb(163 163 163 / 0.1);}` |
| group-where-placeholder-shown:text-4xl | ❌ | `.group:where(:placeholder-shown) .group-where-placeholder-shown\:text-4xl{font-size:var(--text-4xl-font-size);line-height:var(--un-leading, var(--text-4xl--line-height));}` | `.group:where(:placeholder-shown) .group-where-placeholder-shown\:text-4xl{font-size:2.25rem;line-height:2.5rem;}` |
| focus-within:where-first:checked:bg-gray/20 | ❌ | `.focus-within\:where-first\:checked\:bg-gray\/20:checked:where(:first-child):focus-within{--un-bg-opacity:20%;background-color:color-mix(in oklch, var(--color-gray-400) var(--un-bg-opacity), transparent);}` | `.focus-within\:where-first\:checked\:bg-gray\/20:checked:where(:first-child):focus-within{background-color:rgb(156 163 175 / 0.2);}` |
| group-has-placeholder-shown:text-4xl | ❌ | `.group:has(:placeholder-shown) .group-has-placeholder-shown\:text-4xl{font-size:var(--text-4xl-font-size);line-height:var(--un-leading, var(--text-4xl--line-height));}` | `.group:has(:placeholder-shown) .group-has-placeholder-shown\:text-4xl{font-size:2.25rem;line-height:2.5rem;}` |
| focus-within:has-first:checked:bg-gray/20 | ❌ | `.focus-within\:has-first\:checked\:bg-gray\/20:checked:has(:first-child):focus-within{--un-bg-opacity:20%;background-color:color-mix(in oklch, var(--color-gray-400) var(--un-bg-opacity), transparent);}` | `.focus-within\:has-first\:checked\:bg-gray\/20:checked:has(:first-child):focus-within{background-color:rgb(156 163 175 / 0.2);}` |
| has-[:hover]:m-1 | ❌ | `.has-\[\:hover\]\:m-1:has(:hover){margin:calc(var(--spacing) * 1);}` | `.has-\[\:hover\]\:m-1:has(:hover){margin:0.25rem;}` |
| group-not-[[data-potato]]:m-1 | ❌ | `.group:not([data-potato]) .group-not-\[\[data-potato\]\]\:m-1{margin:calc(var(--spacing) * 1);}` | `.group:not([data-potato]) .group-not-\[\[data-potato\]\]\:m-1{margin:0.25rem;}` |
| previous-is-[div]:m-1 | ❌ | `.previous:is(div)+.previous-is-\[div\]\:m-1{margin:calc(var(--spacing) * 1);}` | `.previous:is(div)+.previous-is-\[div\]\:m-1{margin:0.25rem;}` |
| peer-where-[.child]:m-1 | ❌ | `.peer:where(.child)~.peer-where-\[\.child\]\:m-1{margin:calc(var(--spacing) * 1);}` | `.peer:where(.child)~.peer-where-\[\.child\]\:m-1{margin:0.25rem;}` |
| parent-not-[#someId]:m-1 | ❌ | `.parent:not(#someId)>.parent-not-\[\#someId\]\:m-1{margin:calc(var(--spacing) * 1);}` | `.parent:not(#someId)>.parent-not-\[\#someId\]\:m-1{margin:0.25rem;}` |
| scope-[.scope\_class]:translate-0 | ❌ | `.scope_class .scope-\[\.scope\\_class\]\:translate-0{--un-translate-x:calc(var(--spacing) * 0);--un-translate-y:calc(var(--spacing) * 0);translate:var(--un-translate-x) var(--un-translate-y);}` | `.scope_class .scope-\[\.scope\\_class\]\:translate-0{--un-translate-x:0;--un-translate-y:0;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}` |
| scope-[unocss]:block | ✅ | `unocss .scope-\[unocss\]\:block{display:block;}` | `unocss .scope-\[unocss\]\:block{display:block;}` |
| scope-[[data-any]]:inline | ✅ | `[data-any] .scope-\[\[data-any\]\]\:inline{display:inline;}` | `[data-any] .scope-\[\[data-any\]\]\:inline{display:inline;}` |
| group-focus:p-4 | ❌ | `.group:focus .group-focus\:p-4{padding:calc(var(--spacing) * 4);}` | `.group:focus .group-focus\:p-4{padding:1rem;}` |
| peer-checked:bg-blue-500 | ❌ | `.peer:checked~.peer-checked\:bg-blue-500{--un-bg-opacity:100%;background-color:color-mix(in oklch, var(--color-blue-500) var(--un-bg-opacity), transparent);}` | `.peer:checked~.peer-checked\:bg-blue-500{--un-bg-opacity:1;background-color:rgb(59 130 246 / var(--un-bg-opacity));}` |
| parent-hover:text-center | ✅ | `.parent:hover>.parent-hover\:text-center{text-align:center;}` | `.parent:hover>.parent-hover\:text-center{text-align:center;}` |
| previous-checked/label:bg-red-500 | ❌ | `.previous\/label:checked+.previous-checked\/label\:bg-red-500{--un-bg-opacity:100%;background-color:color-mix(in oklch, var(--color-red-500) var(--un-bg-opacity), transparent);}` | `.previous\/label:checked+.previous-checked\/label\:bg-red-500{--un-bg-opacity:1;background-color:rgb(239 68 68 / var(--un-bg-opacity));}` |
| group-hover:font-10 | ❌ | `.group:hover .group-hover\:font-10{--un-font-weight:10;font-weight:10;}` | `.group:hover .group-hover\:font-10{font-weight:10;}` |
| group-[:hover]:font-11 | ❌ | `.group:hover .group-\[\:hover\]\:font-11{--un-font-weight:11;font-weight:11;}` | `.group:hover .group-\[\:hover\]\:font-11{font-weight:11;}` |
| group-[[data-attr]]:font-12 | ❌ | `.group[data-attr] .group-\[\[data-attr\]\]\:font-12{--un-font-weight:12;font-weight:12;}` | `.group[data-attr] .group-\[\[data-attr\]\]\:font-12{font-weight:12;}` |
| group-[.as-parent_&]:font-13 | ❌ | `.as-parent .group .group-\[\.as-parent_\&\]\:font-13{--un-font-weight:13;font-weight:13;}` | `.as-parent .group .group-\[\.as-parent_\&\]\:font-13{font-weight:13;}` |
| group-[.not-parent]:font-14 | ❌ | `.group.not-parent .group-\[\.not-parent\]\:font-14{--un-font-weight:14;font-weight:14;}` | `.group.not-parent .group-\[\.not-parent\]\:font-14{font-weight:14;}` |
| group-hover/label:font-15 | ❌ | `.group\/label:hover .group-hover\/label\:font-15{--un-font-weight:15;font-weight:15;}` | `.group\/label:hover .group-hover\/label\:font-15{font-weight:15;}` |
| group-[:hover]/label:font-16 | ❌ | `.group\/label:hover .group-\[\:hover\]\/label\:font-16{--un-font-weight:16;font-weight:16;}` | `.group\/label:hover .group-\[\:hover\]\/label\:font-16{font-weight:16;}` |
| group-[[data-attr]]/label:font-17 | ❌ | `.group\/label[data-attr] .group-\[\[data-attr\]\]\/label\:font-17{--un-font-weight:17;font-weight:17;}` | `.group\/label[data-attr] .group-\[\[data-attr\]\]\/label\:font-17{font-weight:17;}` |
| group-[.as-parent_&]/label:font-18 | ❌ | `.as-parent .group\/label .group-\[\.as-parent_\&\]\/label\:font-18{--un-font-weight:18;font-weight:18;}` | `.as-parent .group\/label .group-\[\.as-parent_\&\]\/label\:font-18{font-weight:18;}` |
| group-[.not-parent]/label:font-19 | ❌ | `.group\/label.not-parent .group-\[\.not-parent\]\/label\:font-19{--un-font-weight:19;font-weight:19;}` | `.group\/label.not-parent .group-\[\.not-parent\]\/label\:font-19{font-weight:19;}` |
| group-aria-focus:p-4 | ❌ | `.group-aria:focus .group-aria-focus\:p-4{padding:calc(var(--spacing) * 4);}` | `.group-aria:focus .group-aria-focus\:p-4{padding:1rem;}` |
| peer-aria-checked:bg-blue-500 | ❌ | `.peer-aria:checked~.peer-aria-checked\:bg-blue-500{--un-bg-opacity:100%;background-color:color-mix(in oklch, var(--color-blue-500) var(--un-bg-opacity), transparent);}` | `.peer-aria:checked~.peer-aria-checked\:bg-blue-500{--un-bg-opacity:1;background-color:rgb(59 130 246 / var(--un-bg-opacity));}` |
| parent-aria-hover:text-center | ✅ | `.parent-aria:hover>.parent-aria-hover\:text-center{text-align:center;}` | `.parent-aria:hover>.parent-aria-hover\:text-center{text-align:center;}` |
| previous-aria-checked/label:bg-red-500 | ❌ | `.previous-aria\/label:checked+.previous-aria-checked\/label\:bg-red-500{--un-bg-opacity:100%;background-color:color-mix(in oklch, var(--color-red-500) var(--un-bg-opacity), transparent);}` | `.previous-aria\/label:checked+.previous-aria-checked\/label\:bg-red-500{--un-bg-opacity:1;background-color:rgb(239 68 68 / var(--un-bg-opacity));}` |
| group-aria-hover:font-10 | ❌ | `.group-aria:hover .group-aria-hover\:font-10{--un-font-weight:10;font-weight:10;}` | `.group-aria:hover .group-aria-hover\:font-10{font-weight:10;}` |
| group-aria-[:hover]:font-11 | ❌ | `.group-aria:hover .group-aria-\[\:hover\]\:font-11{--un-font-weight:11;font-weight:11;}` | `.group-aria:hover .group-aria-\[\:hover\]\:font-11{font-weight:11;}` |
| group-aria-[[data-attr]]:font-12 | ❌ | `.group-aria[data-attr] .group-aria-\[\[data-attr\]\]\:font-12{--un-font-weight:12;font-weight:12;}` | `.group-aria[data-attr] .group-aria-\[\[data-attr\]\]\:font-12{font-weight:12;}` |
| group-aria-[.as-parent_&]:font-13 | ❌ | `.as-parent .group-aria .group-aria-\[\.as-parent_\&\]\:font-13{--un-font-weight:13;font-weight:13;}` | `.as-parent .group-aria .group-aria-\[\.as-parent_\&\]\:font-13{font-weight:13;}` |
| group-aria-[.not-parent]:font-14 | ❌ | `.group-aria.not-parent .group-aria-\[\.not-parent\]\:font-14{--un-font-weight:14;font-weight:14;}` | `.group-aria.not-parent .group-aria-\[\.not-parent\]\:font-14{font-weight:14;}` |
| group-aria-hover/label:font-15 | ❌ | `.group-aria\/label:hover .group-aria-hover\/label\:font-15{--un-font-weight:15;font-weight:15;}` | `.group-aria\/label:hover .group-aria-hover\/label\:font-15{font-weight:15;}` |
| group-aria-[:hover]/label:font-16 | ❌ | `.group-aria\/label:hover .group-aria-\[\:hover\]\/label\:font-16{--un-font-weight:16;font-weight:16;}` | `.group-aria\/label:hover .group-aria-\[\:hover\]\/label\:font-16{font-weight:16;}` |
| group-aria-[[data-attr]]/label:font-17 | ❌ | `.group-aria\/label[data-attr] .group-aria-\[\[data-attr\]\]\/label\:font-17{--un-font-weight:17;font-weight:17;}` | `.group-aria\/label[data-attr] .group-aria-\[\[data-attr\]\]\/label\:font-17{font-weight:17;}` |
| group-aria-[.as-parent_&]/label:font-18 | ❌ | `.as-parent .group-aria\/label .group-aria-\[\.as-parent_\&\]\/label\:font-18{--un-font-weight:18;font-weight:18;}` | `.as-parent .group-aria\/label .group-aria-\[\.as-parent_\&\]\/label\:font-18{font-weight:18;}` |
| group-aria-[.not-parent]/label:font-19 | ❌ | `.group-aria\/label.not-parent .group-aria-\[\.not-parent\]\/label\:font-19{--un-font-weight:19;font-weight:19;}` | `.group-aria\/label.not-parent .group-aria-\[\.not-parent\]\/label\:font-19{font-weight:19;}` |
| [&:nth-child(2)]:m-10 | ❌ | `.\[\&\:nth-child\(2\)\]\:m-10:nth-child(2){margin:calc(var(--spacing) * 10);}` | `.\[\&\:nth-child\(2\)\]\:m-10:nth-child(2){margin:2.5rem;}` |
| [&>*]:m-11 | ❌ | `.\[\&\>\*\]\:m-11>*{margin:calc(var(--spacing) * 11);}` | `.\[\&\>\*\]\:m-11>*{margin:2.75rem;}` |
| [*>&]:m-12 | ❌ | `*>.\[\*\>\&\]\:m-12{margin:calc(var(--spacing) * 12);}` | `*>.\[\*\>\&\]\:m-12{margin:3rem;}` |
| [&_&]:m-13 | ❌ | `.\[\&_\&\]\:m-13 .\[\&_\&\]\:m-13{margin:calc(var(--spacing) * 13);}` | `.\[\&_\&\]\:m-13 .\[\&_\&\]\:m-13{margin:3.25rem;}` |
| [&[open]]:m-14 | ❌ | `.\[\&\[open\]\]\:m-14[open]{margin:calc(var(--spacing) * 14);}` | `.\[\&\[open\]\]\:m-14[open]{margin:3.5rem;}` |
| [&[readonly][disabled]]:m-15 | ❌ | `.\[\&\[readonly\]\[disabled\]\]\:m-15[readonly][disabled]{margin:calc(var(--spacing) * 15);}` | `.\[\&\[readonly\]\[disabled\]\]\:m-15[readonly][disabled]{margin:3.75rem;}` |
| [&[open]:readonly]:m-16 | ❌ | `.\[\&\[open\]\:readonly\]\:m-16[open]:readonly{margin:calc(var(--spacing) * 16);}` | `.\[\&\[open\]\:readonly\]\:m-16[open]:readonly{margin:4rem;}` |
| [*[open]:readonly_&]:[&[open]:disabled]:m-17 | ❌ | `*[open]:readonly .\[\*\[open\]\:readonly_\&\]\:\[\&\[open\]\:disabled\]\:m-17[open]:disabled{margin:calc(var(--spacing) * 17);}` | `*[open]:readonly .\[\*\[open\]\:readonly_\&\]\:\[\&\[open\]\:disabled\]\:m-17[open]:disabled{margin:4.25rem;}` |
| [@supports(display:grid)]:bg-red/33 | ❌ | `@supports(display:grid){
.\[\@supports\(display\:grid\)\]\:bg-red\/33{--un-bg-opacity:33%;background-color:color-mix(in oklch, var(--color-red-400) var(--un-bg-opacity), transparent);}
}` | `@supports(display:grid){
.\[\@supports\(display\:grid\)\]\:bg-red\/33{background-color:rgb(248 113 113 / 0.33);}
}` |
| [@supports(display:grid)]:[*+&]:bg-red/34 | ❌ | `@supports(display:grid){
*+.\[\@supports\(display\:grid\)\]\:\[\*\+\&\]\:bg-red\/34{--un-bg-opacity:34%;background-color:color-mix(in oklch, var(--color-red-400) var(--un-bg-opacity), transparent);}
}` | `@supports(display:grid){
*+.\[\@supports\(display\:grid\)\]\:\[\*\+\&\]\:bg-red\/34{background-color:rgb(248 113 113 / 0.34);}
}` |
| before:[&[data-active='true']]:content-['test'] | ✅ | `.before\:\[\&\[data-active\=\'true\'\]\]\:content-\[\'test\'\][data-active='true']::before{content:'test';}` | `.before\:\[\&\[data-active\=\'true\'\]\]\:content-\[\'test\'\][data-active='true']::before{content:'test';}` |
| [&[data-active="true"]]:bg-red | ❌ | `.\[\&\[data-active\=\"true\"\]\]\:bg-red[data-active="true"]{--un-bg-opacity:100%;background-color:color-mix(in oklch, var(--color-red-400) var(--un-bg-opacity), transparent);}` | `.\[\&\[data-active\=\"true\"\]\]\:bg-red[data-active="true"]{--un-bg-opacity:1;background-color:rgb(248 113 113 / var(--un-bg-opacity));}` |
| checked:next:text-slate-100 | ❌ | `.checked\:next\:text-slate-100+*:checked{--un-text-opacity:100%;color:color-mix(in oklch, var(--color-slate-100) var(--un-text-opacity), transparent);}` | `.checked\:next\:text-slate-100+*:checked{--un-text-opacity:1;color:rgb(241 245 249 / var(--un-text-opacity));}` |
| next:checked:text-slate-200 | ❌ | `.next\:checked\:text-slate-200:checked+*{--un-text-opacity:100%;color:color-mix(in oklch, var(--color-slate-200) var(--un-text-opacity), transparent);}` | `.next\:checked\:text-slate-200:checked+*{--un-text-opacity:1;color:rgb(226 232 240 / var(--un-text-opacity));}` |
| checked:next:hover:text-slate-500 | ❌ | `.checked\:next\:hover\:text-slate-500:hover+*:checked{--un-text-opacity:100%;color:color-mix(in oklch, var(--color-slate-500) var(--un-text-opacity), transparent);}` | `.checked\:next\:hover\:text-slate-500:hover+*:checked{--un-text-opacity:1;color:rgb(100 116 139 / var(--un-text-opacity));}` |
| next:checked:children:text-slate-600 | ❌ | `.next\:checked\:children\:text-slate-600>*:checked+*{--un-text-opacity:100%;color:color-mix(in oklch, var(--color-slate-600) var(--un-text-opacity), transparent);}` | `.next\:checked\:children\:text-slate-600>*:checked+*{--un-text-opacity:1;color:rgb(71 85 105 / var(--un-text-opacity));}` |
| sm:lt-lg:p-10 | ❌ | `@media (max-width: calc(64rem - 0.1px)){@media (min-width: 40rem){
.sm\:lt-lg\:p-10{padding:calc(var(--spacing) * 10);}
}}` | `@media (max-width: 1023.9px){@media (min-width: 640px){
.sm\:lt-lg\:p-10{padding:2.5rem;}
}}` |
| aria-[invalid=spelling]:underline-red-600 | ❌ | `.aria-\[invalid\=spelling\]\:underline-red-600[aria-invalid=spelling]{-webkit-text-decoration-color:color-mix(in oklch, var(--color-red-600) var(--un-line-opacity), transparent);--un-line-opacity:100%;text-decoration-color:color-mix(in oklch, var(--color-red-600) var(--un-line-opacity), transparent);}` | `.aria-\[invalid\=spelling\]\:underline-red-600[aria-invalid=spelling]{-webkit-text-decoration-color:rgb(220 38 38 / var(--un-line-opacity));--un-line-opacity:1;text-decoration-color:rgb(220 38 38 / var(--un-line-opacity));}` |
| data-[inline]:inline | ✅ | `.data-\[inline\]\:inline[data-inline]{display:inline;}` | `.data-\[inline\]\:inline[data-inline]{display:inline;}` |
| data-[invalid~=grammar]:underline-green-600 | ❌ | `.data-\[invalid\~\=grammar\]\:underline-green-600[data-invalid~=grammar]{-webkit-text-decoration-color:color-mix(in oklch, var(--color-green-600) var(--un-line-opacity), transparent);--un-line-opacity:100%;text-decoration-color:color-mix(in oklch, var(--color-green-600) var(--un-line-opacity), transparent);}` | `.data-\[invalid\~\=grammar\]\:underline-green-600[data-invalid~=grammar]{-webkit-text-decoration-color:rgb(22 163 74 / var(--un-line-opacity));--un-line-opacity:1;text-decoration-color:rgb(22 163 74 / var(--un-line-opacity));}` |
| group-data-[state=open]:font-bold | ❌ | `.group[data-state=open] .group-data-\[state\=open\]\:font-bold{--un-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold);}` | `.group[data-state=open] .group-data-\[state\=open\]\:font-bold{font-weight:700;}` |
| group-data-[state=open]/named:font-medium | ❌ | `.group\/named[data-state=open] .group-data-\[state\=open\]\/named\:font-medium{--un-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium);}` | `.group\/named[data-state=open] .group-data-\[state\=open\]\/named\:font-medium{font-weight:500;}` |
| peer-data-[state=closed]:border-3 | ✅ | `.peer[data-state=closed]~.peer-data-\[state\=closed\]\:border-3{border-width:3px;}` | `.peer[data-state=closed]~.peer-data-\[state\=closed\]\:border-3{border-width:3px;}` |
| @container | ✅ | `.\@container{container-type:inline-size;}` | `.\@container{container-type:inline-size;}` |
| @container/label | ✅ | `.\@container\/label{container-type:inline-size;container-name:label;}` | `.\@container\/label{container-type:inline-size;container-name:label;}` |
| @container-normal | ✅ | `.\@container-normal{container-type:normal;}` | `.\@container-normal{container-type:normal;}` |
| @container/label-normal | ✅ | `.\@container\/label-normal{container-type:normal;container-name:label;}` | `.\@container\/label-normal{container-type:normal;container-name:label;}` |
| @sm:text-red | ❌ | `@container (min-width: 24rem){
.\@sm\:text-red{--un-text-opacity:100%;color:color-mix(in oklch, var(--color-red-400) var(--un-text-opacity), transparent);}
}` | `@container (min-width: 24rem){
.\@sm\:text-red{--un-text-opacity:1;color:rgb(248 113 113 / var(--un-text-opacity));}
}` |
| @lg-text-red | ❌ | `@container (min-width: 32rem){
.\@lg-text-red{--un-text-opacity:100%;color:color-mix(in oklch, var(--color-red-400) var(--un-text-opacity), transparent);}
}` | `@container (min-width: 32rem){
.\@lg-text-red{--un-text-opacity:1;color:rgb(248 113 113 / var(--un-text-opacity));}
}` |
| @[10.5rem]-text-red | ❌ | `@container (min-width: 10.5rem){
.\@\[10\.5rem\]-text-red{--un-text-opacity:100%;color:color-mix(in oklch, var(--color-red-400) var(--un-text-opacity), transparent);}
}` | `@container (min-width: 10.5rem){
.\@\[10\.5rem\]-text-red{--un-text-opacity:1;color:rgb(248 113 113 / var(--un-text-opacity));}
}` |
| @xs/label:text-green | ❌ | `@container label (min-width: 20rem){
.\@xs\/label\:text-green{--un-text-opacity:100%;color:color-mix(in oklch, var(--color-green-400) var(--un-text-opacity), transparent);}
}` | `@container label (min-width: 20rem){
.\@xs\/label\:text-green{--un-text-opacity:1;color:rgb(74 222 128 / var(--un-text-opacity));}
}` |
| @[100px]/label:text-green | ❌ | `@container label (min-width: 100px){
.\@\[100px\]\/label\:text-green{--un-text-opacity:100%;color:color-mix(in oklch, var(--color-green-400) var(--un-text-opacity), transparent);}
}` | `@container label (min-width: 100px){
.\@\[100px\]\/label\:text-green{--un-text-opacity:1;color:rgb(74 222 128 / var(--un-text-opacity));}
}` |
| starting:opacity-0 | ❌ | `@starting-style{
.starting\:opacity-0{opacity:0%;}
}` | `@starting-style{
.starting\:opacity-0{opacity:0;}
}` |
| starting:popover-open:opacity-0 | ❌ | `@starting-style{
.starting\:popover-open\:opacity-0:popover-open{opacity:0%;}
}` | `@starting-style{
.starting\:popover-open\:opacity-0:popover-open{opacity:0;}
}` |
