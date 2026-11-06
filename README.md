# PDF Pro — Local Edition 0.2

Your personal PDF workbench. No paid services, keys, accounts, document uploads, or backend server. Your documents stay in this browser on this device.

## Upload this version to GitHub

**The `/docs` folder is freshly built and ready to upload. You do not need to run a build.**

1. Unzip `PDF-Pro-GitHub-Ready.zip`.
2. Replace your repository's old files with the files from this ZIP. Replace the old `/docs` folder rather than merging old and new assets.
3. Include `.github/workflows/pages.yml`. It is a deliberately **disabled** replacement for the old deployment workflow: it does not run on pushes, and its only job always skips. It cannot publish or conflict with `/docs`.
4. In GitHub, open **Settings → Pages → Deploy from a branch → main → /docs**, then Save. This is the only supported deployment method.
5. Open the website link GitHub shows. If PDF Pro offers an update, save your work and tap **Save & reload**. Close other old PDF Pro tabs while updating.

For a new free GitHub Pages site, use a public repository. The app source is public; documents you open in the app are not added to the repository. If your browser upload does not include hidden folders, delete the old `.github/workflows/pages.yml` in GitHub so it cannot run. Keep `/docs/.nojekyll` when replacing files.

## Two saved signatures

Open a PDF and tap **Sign**. Both slots appear immediately.

- Tap a saved signature once, then tap the PDF to place it.
- Rename either slot, for example **Chris** or **Initials**.
- Create or replace either slot by drawing or typing. Choose **Save slot** or **Save & place**.
- Delete either slot with its trash button.
- PNG download and placement without saving are still available.

Your old single saved signature is automatically moved into Signature 1. Saved signatures remain local to the current browser. They are graphical marks, not certificate-based digital signatures or a remote signing service.

## Quick tools for flat PDFs

Above the viewer are **Text, Check mark, X mark, Today's date, White-out, and Select / move**.

Tap a tool, then tap the page. Text opens an editor. Tap an item to select it, then drag it to move or use its resize corners. The large arrow and minus/plus controls also let you move and resize it precisely with a finger. The trash button deletes the selected item. Text can also be changed in the **Selected item text** field.

**White-out is only a visual cover.** It does not securely remove the old content, which may still be searchable or recoverable. Place a white box first, then add new text on top. Secure redaction remains disabled.

## Fillable forms and page tools

- Reordering, rotating, deleting, or extracting pages from **one source PDF** now keeps its standard fillable fields and their values working.
- Fields belonging only to deleted pages are removed. A field shared with a kept page remains.
- Adding pages from **different PDFs** produces a new flattened copy. The app asks you to confirm before combining PDFs because their form fields become fixed content.
- Your source documents remain available as originals.
- XFA forms are not supported for these operations; the app refuses to modify them rather than silently damaging them.

Editing or reorganizing a digitally signed PDF can invalidate its certificate signatures. Preserve the original when signature validation matters. Links or bookmarks pointing to deleted pages can become invalid.

## Save, export, and iPhone sharing

Tap **Save** or **Export**. PDF Pro prepares the file first and shows **File ready**. Then tap the separate **Share / Save to Files** button. That tap calls the share sheet immediately with an already-prepared file, avoiding the earlier iOS timing problem.

You can also download the PDF or save it on this device. If direct sharing is unavailable in your browser, use **Download PDF** and attach it in your email app.

Choose **Lock form fields** to prepare a copy whose standard fields are read-only. Values remain visible and the original editable PDF is kept. This is not password protection: a capable PDF editor can remove a read-only flag.

Tracked edits still autosave locally every 15 seconds while the PDF is open. **Ctrl / Command S** saves the current working document directly. Save/Export offers the additional copy-locking and sharing options.

## First load and offline use

Only the core viewer, form tools, signatures, page tools, and app shell are precached. OCR and the Template Studio are excluded from startup downloads.

- The OCR screen loads on demand. Its engine and English language data download when you first recognize text, then cache locally.
- The Template Studio and its dependencies download when opened and cache as they are used.
- Once a tool has been used online, it can be used again without reaching the website. A new optional feature or background document type may need an additional first download.
- The original OCR English file is still bundled; it is not removed or fetched from a paid service.

See **LOADING-SIZES.md** for the measured before/after amounts. The full ZIP is much larger than a first app visit because it contains source code and every optional tool for deployment.

On iPhone: open the GitHub Pages link in Safari, then **Share → Add to Home Screen**. Safe-area spacing accounts for the notch and home indicator. Inputs use at least 16px text, and primary controls have at least 44px touch areas.

## Where your work is saved

The active IndexedDB database is now **pdf-pro-v1**. Documents, original bytes, all settings, and templates migrate from **docketra-private-v1** on the same website origin. Migration is transactional and does not overwrite records already in the new database. The old database is left intact as a fallback. The old signature setting becomes two named slots in the new database.

**Use the same GitHub Pages address when updating.** Browser security prevents a new website origin from reading another origin's local documents. Keep old tabs closed during migration so an old app version does not keep writing to the old database.

Browser storage is not a backup. Clearing site data, private browsing, or browser eviction can remove local work. Download important files, or use **Settings → Download document backup**. That ZIP contains saved PDFs and imported originals. Templates export separately as JSON. Backups and local databases are not encrypted vaults.

## All existing tools retained

PDF reading/search/zoom/print/thumbnails, annotations and comments, free text/ink/shapes/image insertion, form filling and field creation, drawn/typed signatures, multiple document tabs, local saving/recovery, original downloads, page extraction/merging/reordering/rotation/deletion, PNG/JPEG to PDF, lossless optimization attempts, English OCR, template design/import/export/PDF generation, business details, document search/favorites/rename/duplicate/removal, document backups, keyboard shortcuts, and installable/offline app support.

## Known limits

This is not Acrobat or Word parity. Original PDF text editing, DOCX editing/conversion, certificate signing, remote signature requests, live collaboration, hosted sharing links, and verified secure redaction remain outside this build. Standard PDF inputs and image batches are limited to 50 MB, with lower practical limits on memory-constrained phones. OCR is English text extraction only; check its accuracy. It does not add a searchable PDF layer or reconstruct Word documents. Lossless optimization does not guarantee a smaller file. The visual template designer works best on a tablet or computer.

## What was tested

See **TEST-RESULTS.md** for this release's actual checks and remaining hardware limitations. The native iOS share sheet, Apple Files destination, physical notch/home-bar layout, and real finger hardware cannot be fully verified in Linux WebKit automation.

## Source code — optional developer information

The source and all deployment files are included. You do not need these commands to upload `/docs`.

With Node.js 22.12 or later:

```sh
npm ci
npm run prepare:assets
npm test
npm run build
```

Every build deletes `/docs` before writing a complete fresh copy. `/dist` is also removed so old output cannot be accidentally reused. `npm run dev` starts the development app; `npm run preview` serves the built `/docs`.

`npm run test:webkit` is an optional browser-test script for a development environment with Playwright WebKit installed. Playwright is not shipped as an app dependency. The production app has no new heavy dependencies; only small test/type packages were added for verification.

## Open source

EmbedPDF, pdf-lib, pdfme, Tesseract.js, Signature Pad, PDF.js, Workbox, React, Lucide, idb, and fflate. SuperDoc and paid server components are not included. Retain the bundled third-party notices and licenses when redistributing.
