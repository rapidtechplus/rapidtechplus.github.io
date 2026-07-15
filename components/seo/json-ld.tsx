/**
 * Emits a JSON-LD block. Centralised so pages never hand-roll the
 * `dangerouslySetInnerHTML` + `JSON.stringify` pair, and so escaping is fixed in
 * one place if it ever needs hardening.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
