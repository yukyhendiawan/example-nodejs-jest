import {myName} from "../src/async.js";

test("test async function", async () => {
    const result = await myName("Yuky");
    expect(result).toBe("My Name Is Yuky");
});

test("test async matchers", async () => {
    await expect(myName("Yuky")).resolves.toBe("My Name Is Yuky");
    await expect(myName()).rejects.toBe("Name Is Empty");
});
