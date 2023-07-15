import { getQSParamFromURL } from "./helpers";

describe("getQSParamFromURL", () => {
    it("should return the value of the specified query string parameter", () => {
        const url = "https://example.com?param1=value1&param2=value2";
        const key = "param1";
        const result = getQSParamFromURL(key, url);
        expect(result).toEqual("value1");
    });

    it("should return null if the URL is not provided", () => {
        const key = "param1";
        const result = getQSParamFromURL(key, undefined);
        expect(result).toBeNull();
    });

    it("should return null if the specified query string parameter is not found", () => {
        const url = "https://example.com?param1=value1&param2=value2";
        const key = "param3";
        const result = getQSParamFromURL(key, url);
        expect(result).toBeNull();
    });
});
