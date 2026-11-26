# တင်ပုံ · GitHub Pages · Upgrade လမ်းညွှန် (Flash Card V2.0)

## ၁။ လိုအပ်တဲ့ file များ ဒေါင်းခြင်း (တစ်ကြိမ်ပဲ)
ZIP ကို ဖြည်ပြီး အောက်က file တွေကို သတ်မှတ်ထားတဲ့ folder ထဲ **နာမည်မပြောင်းဘဲ** ထည့်ပါ။ (`fonts/PUT_FONTS_HERE.txt` နဲ့ `vendor/PUT_LIBRARIES_HERE.txt` ထဲမှာလည်း link တွေ ရှိပါတယ်)

| ထည့်ရမယ့်နေရာ | ဘာအတွက်လဲ | မထည့်ရင် |
|---|---|---|
| `fonts/fredoka-…woff2`, `fonts/noto-sans-myanmar-myanmar-…(400/600/800)…woff2`, `fonts/noto-sans-myanmar-latin-…(400/600/800)…woff2` | စာလုံးပုံစံ (offline) | စက်ထဲက font ကို သုံးပါမယ် |
| `fonts/STIXTwoMath-Regular.woff2` | သင်္ချာ font | စက်ထဲက font ကို သုံးပါမယ် |
| `vendor/temml/` (temml.min.js, mhchem.min.js, Temml-Local.css, Temml.woff2) | သင်္ချာ / ဓာတုဗေဒ ပိုလှအောင် | App ထဲမှာ ပါပြီးသား renderer နဲ့ ပြပါမယ် |
| `vendor/xlsx/xlsx.full.min.js` | .xlsx ဖွင့်ဖို့ | .xlsx မရ (CSV ရ) |
| `vendor/jszip/jszip.min.js` | .zip ဖွင့်ဖို့ | Browser အသစ်တွေမှာ ပါပြီးသား reader နဲ့ ရပါတယ် |
| `vendor/model-viewer/model-viewer.min.js` | 3D model ပြဖို့ | 3D မပြ |

Link ကို Chrome မှာ ဖွင့်ပြီး **Ctrl + S** (ဖုန်းမှာ ⋮ → Download) နဲ့ save ပါ။

## ၂။ ကွန်ပျူတာမှာ စမ်းခြင်း
`index.html` ကို double-click နှိပ်ပါ။ ဒီလိုဖွင့်ရင် (file://) offline cache နဲ့ 3D မရပေမဲ့ ကျန်တာ အကုန်ရပါတယ်။

## ၃။ GitHub Pages ပေါ်တင်ခြင်း
1. github.com မှာ **New repository** နှိပ်ပါ (ဥပမာ `flashcard-practice`)၊ Public ရွေးပါ။
2. **Add file → Upload files** နှိပ်ပြီး folder ထဲက file နဲ့ folder **အားလုံး** ကို ဆွဲထည့်ပါ (`.nojekyll` ပါရပါမယ်)။ ပြီးရင် **Commit changes** နှိပ်ပါ။
3. **Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save**
4. ၁-၂ မိနစ်စောင့်ပြီး `https://<username>.github.io/flashcard-practice/` ကို ဖွင့်ပါ။
5. App ကို တစ်ကြိမ် ဖွင့်ပြီးရင် Internet ပိတ်ထားလည်း ဆက်သုံးလို့ရပါတယ်။ ဖုန်းမှာ **Add to Home screen** နဲ့ app လို ထည့်ထားလို့ရပါတယ်။
6. Repo description နဲ့ topics: About ⚙ ထဲမှာ `docs/REPO.md` က စာသားကို copy ကူးထည့်ပါ။

## ၄။ ကျောင်းသားတွေကို ပေးပုံ
- Link ကို ပေးပါ (QR code လုပ်ပြီးလည်း ပေးလို့ရ)။ ကျောင်းသားက တစ်ကြိမ်ဖွင့်ပြီးတာနဲ့ offline ရပါပြီ။
- Card file ကို ZIP တစ်ခုတည်း (csv/xlsx + ပုံ + အသံ) လုပ်ပြီး Viber / Telegram နဲ့ ပို့ပါ။ ကျောင်းသားက **File တင်** ကနေ ရွေးလိုက်ရင် ရပါပြီ။
- ရလဒ်တွေကို ကျောင်းသားက **⬇ ကိုယ့်ရလဒ် ထုတ်မယ်** နှိပ်ပြီး .csv ပြန်ပို့ပါ။ ⚙ ဆက်တင်ထဲမှာ ကျောင်းသားအမည် အရင်ရိုက်ခိုင်းပါ။ နောင် "Class Results Merger" app နဲ့ အတန်းလိုက် ပေါင်းလို့ရပါမယ်။

## ၅။ V1.3 ကနေ V2.0 ကို upgrade လုပ်ခြင်း
1. Repo ထဲက `index.html` အဟောင်းကို အသစ်နဲ့ အစားထိုးပါ။ ပြီးရင် `sw.js`, `manifest.webmanifest`, `icons/`, `fonts/`, `vendor/`, `docs/`, `samples/`, `.nojekyll` တွေ ထပ်ထည့်ပါ။
2. ကျောင်းသားတွေ app ကို ပြန်ဖွင့်တဲ့အခါ V1.3 မှာ သိမ်းထားခဲ့တဲ့ deck ကို **"အရင်က ကိုယ့် deck"** အဖြစ် အလိုအလျောက် ကူးပေးပါတယ်။ ကူးပြီး ပြန်စစ်လို့ မှန်မှပဲ data အဟောင်းကို ဖျက်ပါတယ်။
3. Card file အဟောင်းတွေ (Questions, Image, Answers, AnswerImage, Topic) ကို ဘာမှ ပြင်စရာ မလိုပါ။
4. နောင် version အသစ်ထုတ်တိုင်း `sw.js` ထဲက `VERSION = 'fc-v2.0.1'` ကို တိုးပေးပါ (ဥပမာ `'fc-v2.0.2'`)။ ကျောင်းသားတွေရဲ့ စက်မှာ "Update available · Reload" ပေါ်လာပါမယ်။

## ၅.၁ V2.0 → V2.0.1
`index.html` နဲ့ `sw.js` ကို အစားထိုးပြီး `fonts/` ထဲကို `noto-sans-myanmar-latin-400/600/800-normal.woff2` ၃ ခု ထပ်ထည့်ပါ။ Data နဲ့ progress မပျောက်ပါ။
- **မှတ်ချက်:** Card ID စနစ်အသစ်ကြောင့် `id` ကော်လံ မပါတဲ့ deck တွေမှာ V2.0 က ⭐ / ပြန်နွှေး မှတ်တမ်းကို တစ်ကြိမ်တော့ ပြန်စရပါမယ်။ နောက်ပိုင်းကစပြီး file ပြန်တင်လည်း မပျောက်တော့ပါ။

## ၆။ ပြဿနာ ဖြေရှင်းနည်း
| ဖြစ်တာ | ဖြေရှင်းနည်း |
|---|---|
| မြန်မာစာ "????" ပေါ်တယ် | Excel → Save As → **CSV UTF-8** (သို့) .xlsx ကို တိုက်ရိုက်တင်ပါ |
| ဇော်ဂျီ သတိပေးချက် ပေါ်တယ် | Zawgyi → Unicode converter နဲ့ ပြောင်းပြီး ပြန်သိမ်းပါ |
| "🖼️ ပုံမတွေ့" ပေါ်တယ် | ပုံ file ကို sheet နဲ့အတူ ရွေးပါ (သို့) zip ထဲထည့်ပါ။ File နာမည်ကို English နဲ့ ပေးပါ |
| 3D မပေါ်ဘူး | `vendor/model-viewer/` ထဲ file ထည့်ပြီးပြီလား စစ်ပါ။ GitHub Pages link ကနေ ဖွင့်ပါ |
| Update အသစ် မမြင်ရဘူး | App ကို ပိတ်ပြီး ပြန်ဖွင့်ပါ (သို့) Reload toast ကို နှိပ်ပါ |
| နာမည်တူ ပုံ အစားထိုးခံရတယ် | Deck တစ်ခုစီရဲ့ ပုံနာမည်ကို မတူအောင် ပေးပါ (ဥပမာ `u3_cat.jpg`) |
| File ပြန်တင်ရင် deck အသစ် မလိုချင်ဘူး | File နာမည် တူတူပဲ ထားပါ၊ deck အဟောင်းကို update လုပ်ပေးပါမယ် |
