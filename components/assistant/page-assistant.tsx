import { CONTACT_HREF } from "@/config/site";
import { buildPageTopics, type PageKnowledge } from "@/lib/assistant";
import { GuidedAssistant } from "@/components/assistant/guided-assistant";

/**
 * Server-side wrapper: builds the topic set from a page's own content at
 * export time and hands it to the client assistant. Every detail page uses
 * this rather than wiring `buildPageTopics` + `GuidedAssistant` itself.
 */
export function PageAssistant(knowledge: Omit<PageKnowledge, "contactHref">) {
  return (
    <GuidedAssistant
      subject={knowledge.label}
      topics={buildPageTopics({ ...knowledge, contactHref: CONTACT_HREF })}
      contactHref={CONTACT_HREF}
    />
  );
}
