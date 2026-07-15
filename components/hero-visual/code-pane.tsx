"use client";

import { CODE } from "./data";

/** Seconds a single character takes to "type" — tuned so the whole snippet
    lands well inside one pane interval. */
const PER_CHAR = 0.018;
/** Beat between lines, so the typing reads as deliberate rather than a blur. */
const LINE_GAP = 0.09;

/**
 * Code pane — the snippet types itself in line by line, each line revealed with
 * a stepped clip so the reveal lands on character boundaries like a real editor
 * rather than sliding a mask across mid-glyph.
 *
 * Under reduced motion the whole snippet is simply present, fully typed.
 */
export function CodePane({ reduce }: { reduce: boolean }) {
  let elapsed = 0;

  return (
    <div className="hv-code">
      {CODE.map((tokens, i) => {
        const text = tokens.map(([, t]) => t).join("");
        const chars = Math.max(text.length, 1);
        const dur = chars * PER_CHAR;
        const delay = elapsed;
        elapsed += dur + LINE_GAP;

        return (
          <span className="hv-code-line" key={i}>
            <i className="hv-code-num">{i + 1}</i>
            <code
              className={reduce ? "hv-code-text" : "hv-code-text hv-code-type"}
              style={
                reduce
                  ? undefined
                  : {
                      animationDuration: `${dur.toFixed(2)}s`,
                      animationDelay: `${delay.toFixed(2)}s`,
                      animationTimingFunction: `steps(${chars}, end)`,
                    }
              }
            >
              {tokens.map(([kind, t], j) =>
                kind ? (
                  <span className={`hv-t hv-t--${kind}`} key={j}>
                    {t}
                  </span>
                ) : (
                  <span key={j}>{t}</span>
                ),
              )}
              {/* Non-breaking space keeps empty lines from collapsing. */}
              {tokens.length === 0 ? " " : null}
            </code>
          </span>
        );
      })}
    </div>
  );
}
