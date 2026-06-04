# Stage 1 — Page blueprint

You are an SEO architect. Return a JSON blueprint for a single page. No prose, JSON only.

## Input files
[CONTEXT.md]
[geo-targets.json]
[semantic-clusters.json — paste the single cluster for this page]

## Output schema

```json
{
  "slug": "",
  "page_title": "",
  "meta_description": "",
  "h1": "",
  "h2_sections": [
    {
      "heading": "",
      "intent": "",
      "content_type": "",
      "keywords_covered": []
    }
  ],
  "schema_types": [],
  "geo_schema_types": [],
  "question_targets": [],
  "ai_citation_hooks": [],
  "comparison_angle": "",
  "internal_links": [],
  "user_intent": ""
}
```

## Field rules

- `page_title` — under 60 chars, primary keyword included
- `meta_description` — under 155 chars, must be a standalone complete answer, not a teaser
- `h1` — different from page_title, intent-matching
- `content_type` — one of: `prose` | `comparison_table` | `faq` | `list`. Max 1 `comparison_table` per page.
- `schema_types` — base types: FAQPage, Service, LocalBusiness, BreadcrumbList
- `geo_schema_types` — extended: HowTo, Review, PriceSpecification, speakable
- `question_targets` — pick 3–5 from geo-targets.json question_bank relevant to this page
- `ai_citation_hooks` — pick 2–3 from geo-targets.json citation_anchors relevant to this page
- `comparison_angle` — one "X vs Y" framing matching how buyers ask AI assistants
- `internal_links` — 2–3 slugs from the same site
- `user_intent` — one of: `informational` | `commercial` | `transactional`
