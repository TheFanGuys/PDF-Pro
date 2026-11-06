# First-load sizes

Decimal MB (1 MB = 1,000,000 bytes). Measurements exclude your own imported documents.

| Measurement | Previous ZIP | This build |
| --- | ---: | ---: |
| Automatic startup precache, uncompressed | 63.19 MB | 9.22 MB |
| Same files, gzip estimate | 31.67 MB | 3.43 MB |

Startup precache fell by about 85%. Before sizes were calculated from the unique URLs in the previous service worker; stale unused /docs assets were not counted as downloads.

A fresh production WebKit visit measured 9.25 MB uncompressed across unique requested URLs, or 3.74 MB of compressed response bodies from the test server. This includes startup requests beyond the precache itself. Network headers and transport overhead are excluded. Real transfer size depends on host compression and browser cache. The uncompressed first visit meets the approximately 10 MB target.

OCR, its worker/core and English language data are requested only when OCR opens. Template Studio is requested only when it opens. These assets cache after use; an unused tool is not available offline until downloaded. Built-in standard stamps and PDFium are local assets.

The ZIP and complete /docs are larger than the first visit because they include optional tools, language data and source. The build deletes old /docs before generating fresh files. See loading-sizes.json for the exact core file list and byte totals.
