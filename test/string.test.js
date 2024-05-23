test("string", () => {
    const name = "Yuky Hendiawan";

    expect(name).toBe("Yuky Hendiawan");
    expect(name).toMatch(/awan/);
});
