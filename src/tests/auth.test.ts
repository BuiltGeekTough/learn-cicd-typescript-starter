import { describe, expect, it } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  it("returns null if the authorization header is missing", () => {
    expect(getAPIKey({})).toBeNull();
  });

  it("returns null if the authorization header is present but does not contain 'ApiKey'", () => {
    const mockHeaders = {
      authorization: "test-api-key",
    };

    expect(getAPIKey(mockHeaders)).toBeNull();
  });
  it("returns the API key if the authorization header is present and contains 'ApiKey'", () => {
    const mockHeaders = {
      authorization: "ApiKey test-api-key",
    };

    expect(getAPIKey(mockHeaders)).toBe("test-api-key");
  });
});
