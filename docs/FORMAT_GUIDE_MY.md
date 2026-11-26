# Flash Card V2.0 · File ပုံစံ လမ်းညွှန် (မြန်မာ)

> App ထဲမှာလည်း **File တင် → 📖 File ပုံစံ လမ်းညွှန်** ကနေ ကြည့်လို့ရပြီး ဥပမာတွေကို Copy ကူးလို့ရပါတယ်။
> နမူနာ file အဆင်သင့်: `samples/sample.csv` နဲ့ app ထဲက **sample.csv / sample.xlsx / sample.zip** ခလုတ်များ။

## ၁။ အခြေခံ စည်းမျဉ်း
- Row တစ်ကြောင်း = card တစ်ကတ်။ ပထမ row ကို ကော်လံ ခေါင်းစဉ် (header) အဖြစ် ထားပါ။
- ခေါင်းစဉ်ကို စာလုံးအကြီး/အသေး မခွဲပါ။ `Front`, `front`, `FRONT` အားလုံး အတူတူပါပဲ။
- ကော်လံ အားလုံး **မထည့်လည်း ရ** ပါတယ်။ မေးခွန်း (သို့ ပုံ/အသံ) နဲ့ အဖြေ (သို့ ပုံ) ပဲ လိုပါတယ်။
- မှားနေတဲ့ row ကို **row နံပါတ်** နဲ့ ပြပြီး ကျော်သွားပါတယ်။ မှန်တဲ့ row တွေကို အမြဲ ထည့်ပေးပါတယ်။
- Excel ကနေ save ရင် **CSV UTF-8 (Comma delimited)** ကို ရွေးပါ (သို့) .xlsx ကို တိုက်ရိုက်တင်ပါ။

## ၂။ V1.3 ပုံစံ (ဆက်သုံးလို့ရ)
```csv
Questions,Image,Answers,AnswerImage,Topic
မင်းကွန်းခေါင်းလောင်းကြီးကို __________ လက်ထက်မှာ သွန်းလုပ်ခဲ့သည်။,,ဘိုးတော်ဘုရား,bell.jpg,အနုပညာနှင့် ဗိသုကာ
ပုံ ① နဲ့ ② ထဲက အဆောက်အအုံတွေကို ဘယ်မြို့မှာ တွေ့နိုင်သလဲ။,q02_1.jpg|q02_2.jpg,မန္တလေး,,အနုပညာနှင့် ဗိသုကာ
```
Header မပါဘဲ paste လုပ်ရင်: ကော်လံ ၁ = မေးခွန်း၊ ကော်လံ ၂ = အဖြေ။

## ၃။ Card ကော်လံ အပြည့်အစုံ
| ကော်လံ | အခြား ခေါင်းစဉ် | အဓိပ္ပာယ် / ဥပမာ |
|---|---|---|
| `front` | Questions, question, prompt, term, မေးခွန်း | Card အရှေ့ စာ |
| `back` | Answers, answer, definition, meaning, အဖြေ | Card အနောက် စာ |
| `front_image` | Image, img, picture, photo, ပုံ | ပုံ ၁-၆ ပုံ: `map.png|key.png` |
| `back_image` | AnswerImage, answer_image, အဖြေပုံ | အဖြေဘက် ပုံ ၁-၆ ပုံ |
| `front_audio` | audio, sound, mp3 | အသံ ၁-၃ ခု: `word.mp3` |
| `front_audio_start` / `front_audio_end` | start, end | အစ/အဆုံး: `75` (စက္ကန့်) သို့ `1:15` |
| `back_audio`, `back_audio_start`, `back_audio_end` | | အဖြေဘက် အသံ |
| `front_3d` / `back_3d` | model, glb | 3D model တစ်ခု: `heart.glb` |
| `front_caption` / `back_caption` | caption | ပုံအောက်က စာတို |
| `front_lang` / `back_lang` | | ဘာသာစကား code: `fr-FR`, `zh-CN` |
| `direction` | | `front-first` (မူလ) · `back-first` · `both` (ကျပန်း) |
| `meaning_my` | myanmar, mm | မြန်မာ အဓိပ္ပာယ် (card ပေါ်က ခလုတ်နဲ့ ဖွင့်ကြည့်) |
| `cloze_answers` | cloze | ကွက်လပ်တစ်ခုချင်းရဲ့ အဖြေ (အောက်မှာ ကြည့်) |
| `accept` | also_correct | "အဖြေရိုက်" mode မှာ လက်ခံမယ့် အဖြေ အပို: `get up~awake` |
| `front_video`, `back_video`, `extra1`…`extra5` | | နောင်အတွက် ချန်ထားတာ (အခု မသုံးသေး) |

## ၄။ အများသုံး ကော်လံ (app မိသားစု အားလုံး)
| ကော်လံ | ဥပမာ | သုံးပုံ |
|---|---|---|
| `grade` | `1`, `KG`, `Year 9`, `IGCSE` | Library စစ်ထုတ်၊ ကလေး/အလယ်/အထက် profile ကို အလိုအလျောက် ရွေး |
| `subject` | `English`, `သင်္ချာ` | Library ထဲမှာ ဘာသာရပ်အလိုက် အုပ်စုခွဲ |
| `topic` | `Fractions` | Topic chip (တစ်ခုချင်း လေ့ကျင့်ဖို့) |
| `unit` | chapter, lesson, သင်ခန်းစာ | topic မရှိရင် chip အဖြစ် သုံး |
| `curriculum` | `Myanmar BE`, `Cambridge`, `IB` | စစ်ထုတ်ဖို့ |
| `level` | `easy` | မှတ်ချက် |
| `tags` | `verbs, unit3` | စစ်ထုတ်ဖို့ (`,` `;` `|` နဲ့ ခွဲ) |
| `lang` | `en`, `my` | Card တစ်ကတ်လုံးရဲ့ ဘာသာစကား |
| `hint` | `w…` | 💡 အရိပ်အမြွက် (မထည့်ရင် ပထမစာလုံးကို ပြ) |
| `explanation` | `go → went` | အဖြေဘက်မှာ ရှင်းလင်းချက် |
| `source` | `Textbook p.12` | မှတ်ချက် |
| `id` | `U3-01` | Card ID (မထည့်ရင် မေးခွန်း+အဖြေ စာသားကနေ ထုတ်ပေးတယ်။ စာသားပြင်ပြီး progress ဆက်ထားချင်ရင် id ထည့်ပါ) |

## ၅။ ကွက်လပ်ဖြည့် (Cloze)
- `_` (underscore) **၃ လုံးနဲ့အထက်** = ကွက်လပ်။ Card အရှေ့မှာ ပန်းရောင် အစက်မျဉ်းနဲ့ ပြပါတယ်။
- ကွက်လပ် တစ်ခုတည်းဆိုရင် `back` က ဖြည့်ပေးပါတယ်။
- ကွက်လပ် များရင် `cloze_answers` မှာ ကွက်လပ်ကြား `|` နဲ့ ခွဲပါ။ လက်ခံမယ့် အဖြေ အစားထိုးတွေကြားမှာ `~` ခံပါ (ပထမဟာကို ပြပါမယ်)။
```csv
front,back,cloze_answers
I usually ______ at 7.00.,wake up,
I ______ up at 6 and ______ breakfast.,get / have,get~wake|have~eat
ကုန်းဘောင်ခေတ် ပြည်သူအများစုမှာ __________ ဘာသာဝင်များ ဖြစ်ကြသည်။,ထေရဝါဒ ဗုဒ္ဓ,
```
အဖြေဘက်မှာ အဖြေကို အကြီး ပြပြီး ဖြည့်ပြီးသား စာကြောင်းကို ဝါရောင် highlight နဲ့ ပြပါတယ်။

## ၆။ ပုံ / အသံ / 3D
- ပုံ: png, jpg, gif, webp, svg, bmp, avif · အသံ: mp3, m4a, ogg, wav, webm, flac · 3D: glb (gltf ဆိုရင် .bin နဲ့ ပုံတွေကို zip တစ်ခုတည်းထဲ ထည့်ပါ)
- File တွေကို sheet နဲ့ **အတူတူ ရွေးပါ** (သို့) ZIP ထဲထည့်ပါ။ App က ဒီစက်ထဲ သိမ်းထားပါတယ်။ GitHub ပေါ်မှာ media folder မလိုပါ။
- နာမည် ကိုက်ပုံ: folder မပါဘဲ၊ စာလုံးအကြီးအသေး မခွဲဘဲ ကိုက်ပါတယ်။ မတွေ့ရင် extension မပါဘဲ ထပ်ရှာပါတယ် (`Cat` ဆိုရင် `cat.png` ကိုတွေ့)။
- File နာမည်ကို **English** နဲ့ ပေးပါ။ Space အစား `_` သုံးပါ။
- Media က deck အားလုံး မျှသုံးပါတယ်။ နာမည်တူ file အသစ်တင်ရင် အဟောင်းကို အစားထိုးပြီး သတိပေးပါတယ်။ ဒါကြောင့် `u3_cat.jpg` လို deck အလိုက် ရှေ့ဆက်ပေးပါ။
- Web link (`https://…`) တွေကို offline app မို့လို့ မဖွင့်ပါ။ File ကိုပဲ တင်ပါ။

### အသံ အပိုင်းလိုက် ဖွင့်ခြင်း (start / end)
```csv
front,back,front_audio,front_audio_start,front_audio_end
နားထောင်ပြီး စကားလုံးကို ရွေးပါ။,elephant,unit3.mp3,1:05,1:09
Listen again.,giraffe,unit3.mp3,72,75.5
```
အသံ file ကြီးတစ်ခုတည်းကို card အများကြီးမှာ သုံးလို့ရပါတယ်။ Player မှာ ဖွင့်/ရပ်၊ ၅ စက္ကန့် နောက်ပြန်၊ အစကပြန်၊ အမြန်နှုန်း 0.75x/1x/1.25x နဲ့ ထပ်ခါထပ်ခါ ဖွင့်တာ ပါပါတယ်။

## ၇။ ZIP တည်ဆောက်ပုံ
```
unit3.zip
├─ unit3.xlsx        (သို့ deck.csv — အများကြီး ထည့်လို့ရ)
├─ pictures/cat.jpg
├─ pictures/dog.jpg
├─ audio/unit3.mp3
└─ models/cube.glb
```
Folder တွေ ခွဲထားလည်း ရပါတယ်။ App က file နာမည်ကိုပဲ ကြည့်ပါတယ်။

## ၈။ Excel (.xlsx)
- Sheet တစ်ခု = deck တစ်ခု (`file · sheet` နာမည်နဲ့)။ ဥပမာ: Sheet "Unit 1", "Unit 2" ဆိုရင် deck ၂ ခု ရပါမယ်။
- Cell ထဲမှာ စာကြောင်းအသစ်ဆင်းချင်ရင် **Alt + Enter** နှိပ်ပါ။
- တန်ဖိုးကို ဖော်မြူလာနဲ့ တွက်ထားရင် ပြထားတဲ့ စာကိုပဲ ယူပါတယ်။

## ၉။ စာလုံးပုံစံ၊ စာရင်း၊ ဇယား
| ရေးပုံ | ပြပုံ |
|---|---|
| `**အထူ**` | **အထူ** |
| `*စောင်း*` | *စောင်း* |
| `++မျဉ်းသား++` | မျဉ်းသား |
| `~~ဖျက်~~` | ~~ဖျက်~~ |
| `H~2~O`, `x^2^` | H₂O, x² |
| `<b> <i> <u> <sup> <sub>` | ခွင့်ပြုထားတဲ့ tag (တခြား HTML ကို စာအဖြစ်ပဲ ပြ) |
| `- ` / `1. ` နဲ့ စတဲ့ စာကြောင်း | စာရင်း |
| `\n` (သို့ Alt+Enter) | စာကြောင်းအသစ် |

ဇယား (cell တစ်ခုထဲမှာ "…" နဲ့ ပိတ်ပြီး ရေးပါ):
```csv
front,back
Verb table: **go**,"| base | past | past participle |
|---|---|---|
| go | went | gone |
| have | had | had |"
```

## ၁၀။ သင်္ချာ နဲ့ ဓာတုဗေဒ
- `$ … $` = စာကြောင်းထဲ၊ `$$ … $$` = တစ်ကြောင်းလုံး (`\( \)`, `\[ \]` လည်း ရ)
- V1.3 အတိုကောက်တွေ ဆက်ရပါတယ်: `$3/4$`, `$x^2$`, `$a_1$`, `$sqrt(16)$`, `$5 * 6 = 30$` (×), `$180deg$` (°), `$x <= ၉$` (≤), `$pi r^2$`
- LaTeX:

| ရေးပုံ | အဓိပ္ပာယ် |
|---|---|
| `\frac{a+b}{2}` | အပိုင်းကိန်း |
| `\sqrt{x}`, `\sqrt[3]{27}` | နှစ်ထပ်ကိန်းရင်း / သုံးထပ်ကိန်းရင်း |
| `\begin{pmatrix} 2 & 1 \\ 3 & 4 \end{pmatrix}` | Matrix (`bmatrix`, `vmatrix` လည်း ရ) |
| `\int_0^1 x^2\,dx` | Integral |
| `\sum_{k=1}^{n} k` | Sum |
| `\lim_{x \to 0} \frac{\sin x}{x}` | Limit |
| `\vec{v}`, `\alpha`, `\theta`, `\pi`, `\le`, `\ne`, `\times` | Vector, Greek, သင်္ကေတ |
| `\ce{2H2 + O2 -> 2H2O}` | ဓာတုညီမျှခြင်း |
| `\ce{Fe^3+}`, `\ce{CO2(g)}` | Ion / အခြေအနေ |
| `\pu{9.8 m/s^2}` | ယူနစ် |

- မြန်မာဂဏန်း (၀-၉) ကို သင်္ချာထဲမှာ သုံးလို့ရပါတယ်: `$၂x - ၅ = ၉$`
- ပုံသေနည်း မှားနေရင် ရေးထားတဲ့ စာအတိုင်းပဲ ပြပါတယ် (app မပျက်ပါ)။
```csv
front,back,topic,grade
$\frac{1}{2} + \frac{1}{4} =$ ______,$\frac{3}{4}$,Fractions,6
"ဘာကို ပြတာလဲ?
$$\ce{2H2 + O2 -> 2H2O}$$",ရေ (H~2~O) ဖြစ်ပေါ်ခြင်း,Chemistry,8
```

## ၁၁။ ဘာသာစကား code (lang)
| Code | ဘာသာ | Code | ဘာသာ |
|---|---|---|---|
| `my` | မြန်မာ | `en` / `en-GB` / `en-US` | English |
| `fr-FR` | French | `zh-CN` | Chinese (Simplified) |
| `ja-JP` | Japanese | `ko-KR` | Korean |
| `th-TH` | Thai | `ar` | Arabic (ညာမှ ဘယ်) |
| `hi` | Hindi | `de-DE`, `es-ES` | German, Spanish |

- `lang` = card တစ်ကတ်လုံး၊ `front_lang` / `back_lang` = တစ်ဖက်ချင်း။ 🔊 အသံထွက်ဖတ်တာက အဲ့ဒီ code နဲ့ ကိုက်တဲ့ အသံကို သုံးပါတယ် (ဆက်တင်ထဲမှာ အသံ ရွေးလို့ရ)။ စက်ထဲမှာ အဲ့ဒီဘာသာရဲ့ အသံ မရှိရင် 🔊 ခလုတ် မပေါ်ပါ။
- Code မထည့်ရင် မြန်မာ / တရုတ် / ထိုင်း / အာရပ် စတာတွေကို စာလုံးကြည့်ပြီး ခန့်မှန်းပေးပါတယ်။

## ၁၂။ ဇော်ဂျီ နဲ့ စာလုံးပျက်
- **ဇော်ဂျီ** ပုံစံ row ကို ထည့်ပေးပေမဲ့ သတိပေးချက် ပြပါတယ်။ Zawgyi → Unicode converter နဲ့ ပြောင်းပြီး ပြန်သိမ်းပါ။
- **"????" (သို့) "�"** ပါတဲ့ row ကို ကျော်ပါတယ်။ Excel မှာ **CSV UTF-8** နဲ့ ပြန် save ပါ (သို့) .xlsx ကို တိုက်ရိုက်တင်ပါ။

## ၁၃။ ကော်လံ အစုံပါတဲ့ ဥပမာ (copy ကူးသုံးလို့ရ)
```csv
front,back,front_image,back_image,front_audio,front_audio_start,front_audio_end,back_3d,meaning_my,cloze_answers,accept,hint,explanation,topic,unit,grade,subject,curriculum,lang,front_lang,tags,direction
,cat,cat.jpg,,cat.mp3,,,,ကြောင်,,,c…,,Animals,Unit 1,1,English,Myanmar BE,en,,kids,front-first
Listen. Which word?,elephant,,elephant.jpg,unit3.mp3,1:05,1:09,,ဆင်,,,,,Vocabulary,Unit 3,4,English,Cambridge,en,,audio,
I ______ up and ______ breakfast.,get / have,,,,,,,,get~wake|have~eat,,,,Daily Routine,Unit 3,5,English,Cambridge,en,,cloze,
$\int_0^1 x^2\,dx =$ ______,$\frac{1}{3}$,,,,,,,,,1/3,,,Calculus,Ch 6,12,Mathematics,A Level,en,,math,
How many faces does a cube have?,6,,,,,,cube.glb,၆ မျက်နှာ,,six,,,Geometry,Ch 2,7,Mathematics,Myanmar BE,en,,3d,
la bibliothèque,library,,,,,,,စာကြည့်တိုက်,,,,,French,Unit 2,IGCSE,French,Cambridge,en,fr-FR,vocab,both
```

## ၁၄။ ရလဒ် file (ကျောင်းသားက ထုတ်ပေးတာ)
`name,app,deck,grade,subject,topic,mode,score,total,time_spent,date`
- `mode` = `self` (ကိုယ့်ကိုယ်စစ်) · `type` (အဖြေရိုက်) · `srs` (ပြန်နွှေး) · `match` (တွဲဖက်)
- `time_spent` = စက္ကန့်။ App မိသားစု အားလုံးက ဒီကော်လံတွေ အတိုင်းပဲ ထုတ်လို့ နောက်ပိုင်း အတန်းလိုက် ပေါင်းလို့ရပါမယ်။
