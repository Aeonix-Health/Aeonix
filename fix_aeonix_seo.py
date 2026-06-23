#!/usr/bin/env python3
"""
fix_aeonix_seo.py — Full SEO fix for aeonix.ch
================================================
Run from inside your Aeonix folder:

    python3 fix_aeonix_seo.py

Fixes applied to every HTML file:
  1. Injects <link rel="alternate" hreflang> tags after <link rel="canonical">
  2. Updates JSON-LD datePublished/dateModified to today
  3. Updates sitemap.xml lastmod dates to today
  4. Ensures robots.txt has Sitemap: directive
"""

import os, re, sys
from datetime import date

TODAY    = date.today().isoformat()   # e.g. 2026-06-24
BASE_URL = "https://aeonix.ch/"

# ── Multilingual groups ───────────────────────────────────────────────────────

GROUPS = [
    {"en-CH": "apob-test-zurich-switzerland.html",
     "de-CH": "apob-test-zuerich-schweiz.html",
     "fr-CH": "test-apob-zurich-suisse.html",
     "it-CH": "test-apob-zurigo-svizzera.html",
     "x-default": "apob-test-zurich-switzerland.html"},

    {"en-CH": "burnout-blood-test-switzerland.html",
     "de-CH": "burnout-bluttest-schweiz.html",
     "fr-CH": "test-sanguin-burnout-suisse.html",
     "it-CH": "analisi-sangue-burnout-svizzera.html",
     "x-default": "burnout-blood-test-switzerland.html"},

    {"en-CH": "homa-ir-test-switzerland.html",
     "de-CH": "homa-ir-test-schweiz.html",
     "fr-CH": "test-homa-ir-suisse.html",
     "it-CH": "test-homa-ir-svizzera.html",
     "x-default": "homa-ir-test-switzerland.html"},

    {"en-CH": "lp-a-test-cost-switzerland.html",
     "de-CH": "lpa-test-kosten-schweiz.html",
     "fr-CH": "cout-test-lpa-suisse.html",
     "it-CH": "costo-test-lpa-svizzera.html",
     "x-default": "lp-a-test-cost-switzerland.html"},

    {"en-CH": "preventive-health-check-cost-switzerland.html",
     "de-CH": "gesundheitscheck-kosten-schweiz.html",
     "fr-CH": "cout-bilan-sante-suisse.html",
     "it-CH": "costo-check-salute-svizzera.html",
     "x-default": "preventive-health-check-cost-switzerland.html"},

    {"de-CH": "vorsorgeuntersuchung-blut-schweiz.html",
     "fr-CH": "bilan-sanguin-preventif-suisse.html",
     "it-CH": "analisi-sangue-preventive-svizzera.html",
     "x-default": "bilan-sanguin-preventif-suisse.html"},

    {"en-CH": "health-screening-zurich.html",
     "de-CH": "gesundheitscheck-zuerich.html",
     "fr-CH": "bilan-sante-zurich.html",
     "it-CH": "check-salute-zurigo.html",
     "x-default": "health-screening-zurich.html"},

    {"en-CH": "health-screening-geneva.html",
     "de-CH": "gesundheitscheck-genf.html",
     "fr-CH": "bilan-sante-geneve.html",
     "it-CH": "check-salute-ginevra.html",
     "x-default": "health-screening-geneva.html"},

    {"en-CH": "health-screening-basel.html",
     "de-CH": "gesundheitscheck-basel.html",
     "fr-CH": "bilan-sante-bale.html",
     "it-CH": "check-salute-basilea.html",
     "x-default": "health-screening-basel.html"},

    {"en-CH": "health-screening-zug.html",
     "de-CH": "gesundheitscheck-zug.html",
     "fr-CH": "bilan-sante-zoug.html",
     "it-CH": "check-salute-zugo.html",
     "x-default": "health-screening-zug.html"},
]

# Build filename → hreflang block
FILE_TO_HREFLANG: dict[str, str] = {}
for group in GROUPS:
    lines = [f'<link rel="alternate" hreflang="{lang}" href="{BASE_URL}{fname}"/>'
             for lang, fname in group.items()]
    block = "\n".join(lines)
    for fname in group.values():
        FILE_TO_HREFLANG[fname] = block


# ── HTML fixer ────────────────────────────────────────────────────────────────

def has_hreflang(html: str) -> bool:
    return bool(re.search(r'hreflang\s*=', html))

def inject_hreflang(html: str, block: str) -> str:
    """Insert hreflang tags right after <link rel="canonical" .../>"""
    # Try after canonical first (cleanest position)
    canonical = re.search(r'(<link\s[^>]*rel="canonical"[^>]*/?>)', html, re.IGNORECASE)
    if canonical:
        pos = canonical.end()
        return html[:pos] + "\n" + block + html[pos:]
    # Fallback: just before </head>
    head_close = re.search(r'</head>', html, re.IGNORECASE)
    if head_close:
        return html[:head_close.start()] + block + "\n" + html[head_close.start():]
    return html  # give up if no </head>

def fix_jsonld_date(html: str) -> tuple[str, bool]:
    """Update datePublished and add/update dateModified to today in JSON-LD."""
    changed = False
    # datePublished — only update if year is wrong (not 2026) or it's stale
    def update_date(m):
        nonlocal changed
        changed = True
        return f'"dateModified": "{TODAY}"'
    # Add/update dateModified
    if '"dateModified"' in html:
        new_html = re.sub(r'"dateModified"\s*:\s*"\d{4}-\d{2}-\d{2}"',
                          f'"dateModified": "{TODAY}"', html)
    else:
        # Insert dateModified after datePublished
        new_html = re.sub(
            r'("datePublished"\s*:\s*"\d{4}-\d{2}-\d{2}")',
            r'\1,\n  "dateModified": "' + TODAY + '"',
            html
        )
    if new_html != html:
        changed = True
    return new_html, changed

def fix_html_file(path: str, fname: str) -> dict:
    with open(path, encoding="utf-8") as f:
        html = f.read()

    original = html
    results = {"hreflang": "skipped", "jsonld": False}

    # 1. Hreflang
    if has_hreflang(html):
        results["hreflang"] = "already_ok"
    elif fname in FILE_TO_HREFLANG:
        html = inject_hreflang(html, FILE_TO_HREFLANG[fname])
        results["hreflang"] = "injected"
    else:
        results["hreflang"] = "no_group"

    # 2. JSON-LD dateModified
    html, date_changed = fix_jsonld_date(html)
    results["jsonld"] = date_changed

    # Write only if changed
    if html != original:
        with open(path, "w", encoding="utf-8") as f:
            f.write(html)

    return results


# ── sitemap.xml fixer ─────────────────────────────────────────────────────────

def fix_sitemap(path: str) -> int:
    with open(path, encoding="utf-8") as f:
        content = f.read()
    new_content, count = re.subn(
        r'<lastmod>\d{4}-\d{2}-\d{2}</lastmod>',
        f'<lastmod>{TODAY}</lastmod>',
        content
    )
    if count:
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_content)
    return count


# ── robots.txt fixer ──────────────────────────────────────────────────────────

def fix_robots(path: str) -> str:
    sitemap_line = f"Sitemap: {BASE_URL}sitemap.xml"
    if os.path.exists(path):
        with open(path, encoding="utf-8") as f:
            content = f.read()
        if "sitemap.xml" in content.lower():
            return "already_ok"
        with open(path, "a", encoding="utf-8") as f:
            f.write(f"\n{sitemap_line}\n")
        return "sitemap_added"
    else:
        with open(path, "w", encoding="utf-8") as f:
            f.write(f"User-agent: *\nAllow: /\n\n{sitemap_line}\n")
        return "created"


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    directory = sys.argv[1] if len(sys.argv) > 1 else "."
    if not os.path.isdir(directory):
        print(f"ERROR: '{directory}' is not a directory"); sys.exit(1)

    print(f"\n{'='*64}")
    print(f"  Aeonix SEO Fix  ·  {TODAY}")
    print(f"  Folder: {os.path.abspath(directory)}")
    print(f"{'='*64}\n")

    html_files = sorted(f for f in os.listdir(directory) if f.endswith(".html"))

    counts = {"injected": 0, "already_ok": 0, "no_group": 0}

    print("── HTML files ──────────────────────────────────────────────")
    for fname in html_files:
        path = os.path.join(directory, fname)
        r = fix_html_file(path, fname)

        h = r["hreflang"]
        counts[h] = counts.get(h, 0) + 1
        icon  = {"injected": "🔧", "already_ok": "✅", "no_group": "ℹ️ "}.get(h, "❓")
        label = {"injected":   "hreflang injected",
                 "already_ok": "already had hreflang — skipped",
                 "no_group":   "single-language page (no group needed)"}.get(h, h)
        date_tag = "  +dateModified" if r["jsonld"] else ""
        print(f"  {icon}  {fname:<56}{label}{date_tag}")

    print(f"\n     injected: {counts.get('injected',0)}  |  "
          f"already ok: {counts.get('already_ok',0)}  |  "
          f"no group (solo pages): {counts.get('no_group',0)}")

    print("\n── sitemap.xml ─────────────────────────────────────────────")
    sitemap_path = os.path.join(directory, "sitemap.xml")
    if os.path.exists(sitemap_path):
        n = fix_sitemap(sitemap_path)
        print(f"  🔧  Updated {n} <lastmod> entries → {TODAY}")
    else:
        print("  ⚠️   sitemap.xml not found")

    print("\n── robots.txt ──────────────────────────────────────────────")
    result = fix_robots(os.path.join(directory, "robots.txt"))
    msgs = {"already_ok": "✅  already references sitemap — no change",
            "sitemap_added": "🔧  added Sitemap: line to existing robots.txt",
            "created": "🔧  created new robots.txt"}
    print(f"  {msgs.get(result, result)}")

    print(f"\n{'='*64}")
    print("  ✅  Done! Next steps:")
    print("  1.  git add -A && git commit -m 'seo: hreflang + sitemap fix'")
    print("      git push   (or deploy however you host the site)")
    print("  2.  GSC → Sitemaps → resubmit https://aeonix.ch/sitemap.xml")
    print("  3.  GSC → URL Inspection → 'Request Indexing' for:")
    print("        • health-screening-zurich.html")
    print("        • health-screening-geneva.html")
    print("        • health-screening-basel.html")
    print("        • burnout-blood-test-switzerland.html")
    print("        • homa-ir-test-switzerland.html")
    print(f"{'='*64}\n")

if __name__ == "__main__":
    main()
