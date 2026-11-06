# PDF Pro 0.2 — tested release

Built and checked on November 6, 2026. The included /docs is the production build, not development output.

## Passed

- All 7 automated document/database tests: migration, original-byte preservation, editable form widgets, shared widgets, page order/rotation/deletion, multi-document flattening, and read-only fields.
- All 17 production-browser checks in Playwright WebKit 26.5, using an iPhone-sized 390 × 844 touch viewport and a landscape 844 × 390 viewport.
- Old documents, settings, templates and the old signature migrate; new installations use only pdf-pro-v1. Migration is repeatable without overwriting new data.
- Both signature slots: naming, typed/drawn saving, replacing, deleting and placement.
- Form filling, saving and reopening; page edits preserve values and editable widgets. Locked exports retain values. Merging another PDF requires the flattening acknowledgement.
- Text, check, X, date and white-out placement; move, resize and delete controls.
- File preparation followed by a separate Share / Save to Files tap, with a ready File and active user gesture.
- Core viewer works with the origin server unavailable after installation. OCR recognizes text locally and works on repeat use with the origin unavailable. Template Studio generates a PDF and its module loads again with the origin unavailable. Optional tools are absent from core precache and cold-start downloads.
- App inputs use at least 16px fonts, primary controls meet 44px targets, no horizontal overflow, and landscape Settings remains reachable by scrolling.
- No external requests during the complete browser test, including built-in PDF stamps.
- Clean-build checks: a deliberately stale asset was removed; repeated builds did not accumulate assets. TypeScript and the production build passed.

## What automation cannot prove

The share API was replaced with a test stub to inspect file readiness and user activation. The actual Apple share sheet, Save to Files destination, physical notch/home bar, real finger gestures and physical iPhone memory limits were not tested. Offline checks made the origin server unreachable; they were not a physical airplane-mode test. CSS includes safe-area spacing, but hardware placement still needs a phone check.

WebKit reported one nonfatal ResizeObserver layout notification. No associated broken behavior was observed; it is recorded rather than treated as a functional failure.

## Existing limits remain

Original PDF text editing, DOCX editing/conversion, certificate signatures, remote signing and live collaboration are not implemented by this build. White-out covers text visually; it is not secure redaction. Field locking sets standard read-only flags, not password or cryptographic protection. Unsupported XFA forms are rejected for page assembly rather than silently damaged. OCR and template design retain their documented limits.

No document uploads, paid APIs, keys or sign-in were added. Keep your own downloaded backups.
