test("string.not", () => {
    const name = "Yuky Hendiawan";

    expect(name).not.toBe("lalala");
    expect(name).not.toEqual("lalala");
    expect(name).not.toMatch(/lalala/);
});

test("number.not", () => {
    const value = 2 + 2;

    expect(value).not.toBeGreaterThan(6);
    expect(value).not.toBeLessThan(3);
    expect(value).not.toBe(10);
});
