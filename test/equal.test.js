test("test toBe", () => {
    const hello = "Hello Yuky";
    expect(hello).toBe("Hello Yuky");
});

test("test toEqual", () => {
    let person = {id: "1"};
    Object.assign(person, {name: "Yuky"});

    expect(person).toEqual({id: "1", name: "Yuky"});
})
