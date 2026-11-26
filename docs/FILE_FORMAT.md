# File format (Flash Card V2.0)

Headers are case-insensitive and spaces/hyphens are treated as `_`. Every column is optional except a question and an answer.
One row is one card. Bad rows are reported by row number and skipped; good rows are always imported.

## Accepted files
| File | Notes |
|---|---|
| `.csv` `.tsv` `.txt` | Own RFC-4180 parser: quotes, newlines inside quotes, BOM, UTF-8 / UTF-16, delimiter `,` `;` or tab detected automatically. Save from Excel as **CSV UTF-8**. |
| Paste | Copy rows from Excel / Google Sheets and paste (tab separated). Without a header row: column 1 = question, column 2 = answer. |
| `.xlsx` | Every sheet becomes one deck named `file · sheet`. |
| `.zip` | Every `.csv` / `.xlsx` inside becomes a deck. Every other supported file is stored as media. Folders inside the zip are ignored when matching names. |
| media | Pick pictures, audio and 3D files together with the sheet (or later). They are stored in the browser (IndexedDB). |

Media name matching: case-insensitive file name (folders ignored), then the name without extension (`Cat` finds `cat.png`). Web links (`http…`) are never loaded and are reported.

## Card columns
| Column | Aliases | Meaning |
|---|---|---|
| `front` | Questions, question, prompt, term, q, မေးခွန်း | Front text (rich text, math, blanks) |
| `back` | Answers, answer, definition, meaning, a, အဖြေ | Back text |
| `front_image` | Image, img, picture, photo, Image 1… | Up to 6 files, `|` separated |
| `back_image` | AnswerImage, answer_image | Up to 6 files |
| `front_audio` / `back_audio` | audio, sound, mp3 | Up to 3 files, `|` separated |
| `front_audio_start` / `front_audio_end` | start, end | Play only this part: seconds (`12.5`) or `m:ss` (`1:05`) |
| `back_audio_start` / `back_audio_end` | | Same for the back audio |
| `front_3d` / `back_3d` | model, glb, model3d | One `.glb` (or `.gltf` + its files in the same zip) |
| `front_caption` / `back_caption` | caption | Small text under the media |
| `front_lang` / `back_lang` | | BCP-47 code for that side (Read Aloud voice, fonts, RTL) |
| `direction` | | `front-first` (default) · `back-first` · `both` (random per session) |
| `meaning_my` | myanmar, mm | Myanmar meaning (toggle button on the card) |
| `cloze_answers` | cloze, blanks | One answer per blank, `|` between blanks, `~` between accepted alternatives (the first is shown) |
| `accept` | also_correct | Extra answers accepted in *Type the answer*, `~` separated |
| `front_video`, `back_video`, `extra1`…`extra5` | | Reserved: kept and ignored |

## Shared columns (every app in the family)
`grade` (1–12, KG, "Year 9", "IGCSE") · `subject` · `topic` · `unit` (chapter, lesson) · `curriculum` (Myanmar BE, Cambridge, IB, Edexcel…) · `level` · `tags` (`,` `;` or `|`) · `lang` (default content language) · `hint` · `explanation` · `source` · `id`.
If there is no `topic` column, `unit` is used for the topic chips. Grade decides the Auto audience profile: KG–4 = Kids, 5–8 = Junior, 9–12 / IGCSE / A Level / IB = Senior.

## Blanks (cloze)
Three or more underscores (`___`) make a blank. Fill order:
1. `cloze_answers` (when present)
2. otherwise `back`, when it is one line without a table. With several blanks, `back` may give one answer per blank separated by `|`.

The back face shows the answer large, then the completed sentence with the filled words highlighted.

## Rich text (any text cell)
Processing order: blanks → math → tables → lists → inline. Text is never inserted as HTML.
- New line: a real line break in the cell, a literal `\n`, or `<br>`
- `**bold**`, `*italic*`, `++underline++`, `~~strike~~`, `^sup^`, `~sub~` (H~2~O, x^2^)
- Allowed tags: `<b> <i> <u> <sup> <sub>`. Any other HTML is shown as plain text.
- Lists: lines starting with `- ` or `1. `
- Tables: Markdown pipe rows; a `|---|` second row makes the first row a header. Tables scroll inside the card.

## Math and chemistry
- `$inline$`, `$$block$$`, `\( \)`, `\[ \]`, rendered as MathML with Temml (vendored) and a built-in fallback
- LaTeX: `\frac{a}{b}`, `\sqrt{x}`, `\sqrt[3]{27}`, `\begin{pmatrix}…\end{pmatrix}`, `\int_0^1`, `\sum`, `\lim_{x\to0}`, `\vec{v}`, Greek letters…
- V1.3 shorthand still works: `3/4`, `sqrt(16)`, `5 * 6`, `180deg`, `x <= ၉`, `pi`
- Chemistry `\ce{2H2 + O2 -> 2H2O}`, units `\pu{9.8 m/s^2}`
- Myanmar digits (၀–၉) are valid. If a formula cannot be rendered, its source text is shown.

## Languages and scripts
Myanmar uses Noto Sans Myanmar (line-height ≥ 1.8). Chinese, Japanese, Thai, Arabic, Devanagari and other scripts use system fonts. Every text block gets `dir="auto"` and its `lang`, so Arabic and Hebrew display right-to-left.
Common codes: `en`, `en-GB`, `my`, `fr-FR`, `zh-CN`, `ja-JP`, `ko-KR`, `th-TH`, `ar`, `hi`, `de-DE`, `es-ES`.

**Zawgyi:** rows that look like Zawgyi are imported with a warning. Convert them to Unicode and save again.
**"????" or "�":** the row is skipped. Save the file as *CSV UTF-8* or upload the `.xlsx` instead.

## ZIP example
```
unit3.zip
├─ unit3.xlsx      (or deck.csv)
├─ pictures/cat.jpg
├─ audio/unit3.mp3
└─ models/cube.glb
```

## Full example
```csv
front,back,front_image,front_audio,front_audio_start,front_audio_end,meaning_my,cloze_answers,accept,topic,grade,subject,curriculum,front_lang
,cat,cat.svg,cat.wav,,,ကြောင်,,,Animals,1,English,Myanmar BE,
I ______ up and ______ breakfast.,get / have,,,,,,get~wake|have~eat,,Daily Routine,5,English,Cambridge,
$\frac{1}{2}+\frac{1}{4}=$ ______,$\frac{3}{4}$,,,,,,,3/4,Fractions,6,Mathematics,Myanmar BE,
Listen. Which word?,elephant,,unit3.mp3,1:05,1:09,ဆင်,,,Vocabulary,4,English,Cambridge,
la bibliothèque,library,,,,,စာကြည့်တိုက်,,,French,IGCSE,French,Cambridge,fr-FR
```
`samples/sample.csv` and the in-app buttons **sample.csv / sample.xlsx / sample.zip** give ready-made templates.

## Results export
`name,app,deck,grade,subject,topic,mode,score,total,time_spent,date`. `mode` is one of `self`, `type`, `srs` or `match`. UTF-8 with BOM.
