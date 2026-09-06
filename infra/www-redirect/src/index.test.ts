import { describe, it, expect } from "vitest";
import { buildApexRedirect } from "./index";

describe("www → apex redirect", () => {
  it("redirects the bare www host to the apex with 301", () => {
    expect(buildApexRedirect("https://www.alepes.com/")).toEqual({
      status: 301,
      location: "https://alepes.com/",
    });
  });

  it("preserves the path", () => {
    expect(buildApexRedirect("https://www.alepes.com/foo/bar")).toEqual({
      status: 301,
      location: "https://alepes.com/foo/bar",
    });
  });

  it("preserves the query string", () => {
    expect(
      buildApexRedirect("https://www.alepes.com/foo?a=1&b=2"),
    ).toEqual({
      status: 301,
      location: "https://alepes.com/foo?a=1&b=2",
    });
  });

  it("drops any port and forces https", () => {
    expect(buildApexRedirect("http://www.alepes.com:8080/x?q=1")).toEqual({
      status: 301,
      location: "https://alepes.com/x?q=1",
    });
  });
});