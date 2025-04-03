import { expect, test } from "vitest"
import { generate } from "../Generator"


test("generator with not running host returns an null", async () => {
    expect(await generate("prompt", "model", "nonexistent/")).toBe(null)
    }
)

test("generator with no host returns an null", async () => {
    expect(await generate("prompt", "model", "")).toBe(null)
    }
)

test("generator with no prompt returns an null", async () => {
    expect(await generate("", "model")).toBe(null)
    }
)

test("generator with no model returns an null", async () => {
    expect(await generate("prompt", "")).toBe(null)
    }
)