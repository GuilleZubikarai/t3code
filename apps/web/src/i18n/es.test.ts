// @effect-diagnostics nodeBuiltinImport:off - scans the web source tree for catalog keys.
import * as NodeFS from "node:fs";
import * as NodePath from "node:path";
import { describe, expect, it } from "vite-plus/test";

import { es } from "./es";

/**
 * Guards the fork's catalog after every upstream rebase: a key whose English
 * text no longer appears in the web source is dead and must be renamed or
 * dropped, otherwise the UI silently falls back to English.
 */
function collectSource(dir: string, out: string[]): void {
  for (const entry of NodeFS.readdirSync(dir)) {
    const path = NodePath.join(dir, entry);
    if (NodeFS.statSync(path).isDirectory()) {
      collectSource(path, out);
    } else if (
      /\.tsx?$/.test(entry) &&
      !entry.endsWith(".test.ts") &&
      !entry.endsWith(".test.tsx")
    ) {
      out.push(NodeFS.readFileSync(path, "utf8"));
    }
  }
}

describe("Spanish catalog", () => {
  const sources: string[] = [];
  collectSource(NodePath.join(import.meta.dirname, ".."), sources);
  const source = sources.filter((content) => !content.includes("export const es")).join("\n");

  it("has no empty translations", () => {
    for (const [key, value] of Object.entries(es)) {
      expect(value.trim(), key).not.toBe("");
    }
  });

  it("keeps the same placeholders as the English text", () => {
    for (const [key, value] of Object.entries(es)) {
      const placeholders = (key.match(/\{\w+\}/g) ?? []).toSorted();
      expect((value.match(/\{\w+\}/g) ?? []).toSorted(), key).toEqual(placeholders);
    }
  });

  it("only contains keys that still exist in the web source", () => {
    const stale = Object.keys(es).filter(
      (key) => !source.includes(JSON.stringify(key).slice(1, -1)),
    );
    expect(stale).toEqual([]);
  });
});
