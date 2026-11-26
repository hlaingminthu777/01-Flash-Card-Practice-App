# Flash Card Practice App V2.0.4

Offline flash cards for **every grade and subject** (KG–Grade 12, Myanmar Basic Education, Cambridge, IB, Edexcel, Common Core).
Pictures, audio clips, math, chemistry, tables and 3D models, with an English / Myanmar interface.
It is plain HTML + CSS + JS with no framework and no build step, and it makes **zero network requests**.

Part of the practice-app family: Fill in the Blank · Flash Card · Multiple Choice · Sentence Builder · Write It Right.

## Features
- Flip cards (3D flip; a cross-fade when "reduce motion" is on), swipe, keyboard, full screen, synthesised sounds, Moo mascot
- **Study modes** (remembered per deck): 👀 Browse · ✅ Self-check (I know it / Again) · 🧠 Spaced Review (Leitner 5 boxes, due-today queue, daily goal and streak) · ⌨️ Type the answer · 🧩 Match game
- Topic chips, filters (grade / subject / curriculum / tag / starred / missed), shuffle, reverse, hints, Myanmar meaning, stars
- Pictures (up to 6 per side, lightbox with pinch / double-tap zoom), audio (up to 3 per side, start/end segment, speed, loop, back 5 s), 3D `.glb`
- Rich text: **bold**, *italic*, ++underline++, ~~strike~~, H~2~O, x^2^, lists, pipe tables
- Math: `$…$`, `$$…$$`, `\(…\)`, `\[…\]` → MathML (Temml + mhchem), with a built-in fallback renderer; Myanmar digits supported
- Import: CSV (UTF-8 / UTF-16, `,` `;` tab), paste from Excel / Google Sheets, `.xlsx` (every sheet = one deck), `.zip` (sheets + media)
- Per-row import report (missing files, Zawgyi, "????" mojibake, bad audio times); bad rows never block good rows
- Library of decks; results screen with **Practice the ones I missed** / **Start over**; export missed cards and results (CSV, UTF-8 BOM); print cards (A4, 8 per page, 4 for Kids)
- Audience profiles: Kids (G1–4) · Junior (G5–8) · Senior (G9–12), set automatically from the deck's `grade` column
- PWA: installable, works offline after the first visit, shows an "Update available" toast
- V1.3 files work unchanged, and the V1.3 saved deck is migrated automatically

## Folder layout
```
index.html              the whole app
sw.js                   service worker (VERSION = 'fc-v2.0.4')
manifest.webmanifest
icons/                  icon.svg + PNGs (re-make them with tools/icon-maker.html)
fonts/                  woff2 fonts            (download, see below)
vendor/temml/           math renderer          (download)
vendor/xlsx/            SheetJS for .xlsx      (download)
vendor/jszip/           JSZip for .zip         (optional download)
vendor/model-viewer/    3D viewer              (download)
samples/sample.csv      template with every column
docs/FILE_FORMAT.md     file format reference (English)
docs/FORMAT_GUIDE_MY.md file format guide (Myanmar)
docs/SETUP_MY.md        setup / GitHub Pages / upgrade guide (Myanmar)
.nojekyll
```

## Third-party files (not included; download once)
| Path | Version | Download |
|---|---|---|
| `fonts/fredoka-latin-wght-normal.woff2` | Fontsource 5 | https://cdn.jsdelivr.net/npm/@fontsource-variable/fredoka@5/files/fredoka-latin-wght-normal.woff2 |
| `fonts/noto-sans-myanmar-myanmar-{400,600,800}-normal.woff2` | Fontsource 5.2.7 | https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-myanmar@5.2.7/files/noto-sans-myanmar-myanmar-400-normal.woff2 (replace 400 with 600 / 800) |
| `fonts/noto-sans-myanmar-latin-{400,600,800}-normal.woff2` | Fontsource 5.2.7 | https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-myanmar@5.2.7/files/noto-sans-myanmar-latin-400-normal.woff2 (English letters in the same font, as in V1.3) |
| `fonts/STIXTwoMath-Regular.woff2` | STIX Two 2.x | https://github.com/stipub/stixfonts |
| `vendor/temml/temml.min.js`, `Temml-Local.css`, `Temml.woff2` | Temml 0.14.0 | https://github.com/ronkok/Temml/releases (`dist/`) |
| `vendor/temml/mhchem.min.js` | Temml 0.14.0 | https://github.com/ronkok/Temml/tree/main/contrib/mhchem (`mhchem.min.js`) |
| `vendor/xlsx/xlsx.full.min.js` | SheetJS CE 0.20.3 | https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js |
| `vendor/jszip/jszip.min.js` | JSZip 3.10.1 | https://github.com/Stuk/jszip/releases/tag/v3.10.1 (`dist/`) |
| `vendor/model-viewer/model-viewer.min.js` | model-viewer 4.4.0 | https://cdn.jsdelivr.net/npm/@google/model-viewer@4.4.0/dist/model-viewer.min.js |

Every library is optional. Without it the app still runs: math falls back to the built-in renderer, `.zip` uses the browser's own reader, and fonts fall back to system fonts.
The `.xlsx` and 3D features do need their library.

## Run
- **Local:** double-click `index.html`. It works over `file://`, but the service worker and 3D are skipped there.
- **GitHub Pages:** push the folder, then go to *Settings → Pages → Deploy from branch → main / root*. The app works under `https://<user>.github.io/<repo>/`.

## Keyboard
`Space`/`Enter` flip · `←` `→` previous / next · `1` again · `2` know (Spaced Review: `1` `2` `3`) · `S` star · `H` hint · `M` mute · `F` full screen · `?` help · `Esc` close

## File format
See **docs/FILE_FORMAT.md** and the in-app **📖 File Format Guide**. Minimal file:
```csv
Questions,Answers
Capital of Myanmar?,Nay Pyi Taw
```

## Results CSV (shared by every app in the family)
`name,app,deck,grade,subject,topic,mode,score,total,time_spent,date`. `time_spent` is in seconds, `date` is `YYYY-MM-DD HH:MM`, and the file is UTF-8 with BOM.

## Upgrade notes (V1.3 → V2.0)
- V1.3 CSV / Excel / ZIP files work unchanged (`Questions, Image, Answers, AnswerImage, Topic`). Up to 6 pictures are now allowed (V1.3 allowed 4).
- On first run the deck saved by V1.3 (IndexedDB `fc-flashcards`) is copied into the Library as **"My previous deck"**. The old data is deleted only after the copy has been verified.
- The language choice (`fc-lang`) and mute setting (`fc-muted`) are kept.
- New installs start in English (V1.3 started in Myanmar).
- When you release a new version, raise `VERSION` in `sw.js`.

## Changelog
- **2.0.4**: phones: tapping the card quickly no longer zooms or scrolls the page (double-tap zoom off, pinch zoom kept). The Again / I know it bar is pinned to the bottom of the screen. The card keeps its height while flipping. Card size uses `svh`, so it does not jump when the browser address bar shows or hides.
- **2.0.3**: fix: pictures on cards were cropped (tall and square pictures showed only their middle). Every picture now shows whole inside its frame.
- **2.0.2**
  - Small phones (iPhone SE, 360×740 Android): compact header, smaller card height and Moo on short screens
  - The card scrolls clear of the bottom bar
  - Full screen button hidden on phones (as in V1.3)
  - Shorter Again/Know labels' line height
  - Match game skips table and long-text cards so tiles stay readable
  - Type-the-answer box scrolls into view
- **2.0.1**
  - Stable card ids, so re-uploading a file keeps stars and review history
  - Re-uploading a file with the same name updates that deck instead of making a copy
  - Warning when a media file replaces an older file with the same name
  - Asks the browser for persistent storage
  - Page loads are network-first in the service worker, so a missed `VERSION` bump no longer leaves students on an old version
  - Accessibility: every tap target is 44 px or larger (56 px for Kids), a real flip button instead of a clickable card containing buttons, focus stays inside dialogs, themed delete dialog
  - Translated sample names and the storage label
  - Noto Sans Myanmar Latin subset added
  - Planets are hidden on phones again, as in V1.3
- **2.0.0**: vanilla JS rebuild of V1.3 with 5 study modes, xlsx/zip import, Library, Spaced Review, export, print and 3D

## Known limitations
- 3D needs a web address (GitHub Pages / any https or localhost) because model-viewer is an ES module. It does not load from `file://`.
- Read Aloud depends on the voices installed on the device. Myanmar voices are rare, so the button hides when no voice exists.
- Zawgyi detection is a heuristic: it warns, it does not convert.
- `.xls` (old Excel) needs SheetJS. Password-protected workbooks and encrypted zips are not supported.
- Storage is per browser and per device. Use "Export my results" to collect results.

---

## မြန်မာ အကျဉ်း
- **ဘာလဲ:** အတန်းတိုင်း၊ ဘာသာရပ်တိုင်းအတွက် Flash Card app ပါ။ Internet မလိုဘဲ သုံးလို့ရပါတယ်။ ပုံ၊ အသံ၊ သင်္ချာ၊ ဓာတုဗေဒ၊ ဇယား၊ 3D model တွေ ထည့်လို့ရပြီး App ရဲ့ စာသားကို မြန်မာ / English ပြောင်းလို့ရပါတယ်။
- **တင်သွင်းနည်း:** CSV / Excel / ZIP file ရွေးပါ (သို့) Excel ကနေ copy ကူးပြီး paste လုပ်ပါ။ ပုံနဲ့ အသံ file တွေကို app ထဲမှာပဲ upload လုပ်ပါ။ GitHub ပေါ်မှာ media folder လုပ်စရာ မလိုပါဘူး။
- **လေ့ကျင့်ပုံ ၅ မျိုး:** ကြည့်ရှု · ကိုယ့်ကိုယ်စစ် · ပြန်နွှေး · အဖြေရိုက် · တွဲဖက်
- **V1.3 ကနေ upgrade လုပ်ရင်:** File အဟောင်းတွေ ဒီအတိုင်း သုံးလို့ရပါတယ်။ V1.3 မှာ သိမ်းထားခဲ့တဲ့ deck ကို "အရင်က ကိုယ့် deck" အဖြစ် အလိုအလျောက် ပြောင်းရွှေ့ပေးပါတယ်။
- အသေးစိတ်: `docs/SETUP_MY.md` (တင်ပုံ / GitHub Pages / upgrade) နဲ့ `docs/FORMAT_GUIDE_MY.md` (file ပုံစံ)

## License
MIT. See `LICENSE`.
