import { describe, it, expect } from "vitest";
import {
  formatCurrency,
  formatPercent,
  formatNumber,
  formatCompactCurrency,
  greeting,
} from "./format";

describe("formatCurrency", () => {
  it("formats dollars with two decimals", () => {
    expect(formatCurrency(1234.5)).toBe("$1,234.50");
  });

  it("prefixes negative amounts with a minus", () => {
    expect(formatCurrency(-42)).toBe("-$42.00");
  });

  it("adds an explicit sign when requested", () => {
    expect(formatCurrency(42, { sign: true })).toBe("+$42.00");
    expect(formatCurrency(-42, { sign: true })).toBe("-$42.00");
  });

  it("respects a custom precision", () => {
    expect(formatCurrency(1.2, { decimals: 3 })).toBe("$1.200");
  });
});

describe("formatPercent", () => {
  it("formats a percentage with one decimal by default", () => {
    expect(formatPercent(44.4)).toBe("44.4%");
  });
});

describe("formatNumber", () => {
  it("adds thousands separators", () => {
    expect(formatNumber(24812)).toBe("24,812");
  });
});

describe("formatCompactCurrency", () => {
  it("compacts large amounts", () => {
    expect(formatCompactCurrency(1740000)).toBe("$1.7M");
  });
});

describe("greeting", () => {
  it("returns a non-empty greeting for any hour", () => {
    expect(greeting()).toMatch(/^Good (morning|afternoon|evening)$/);
  });
});