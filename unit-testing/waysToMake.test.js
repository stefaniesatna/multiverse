import waysToMake from "./waysToMake.js"

test("works for simple case", () => {
    expect(waysToMake(4, [2, 1])).toBe(3);
});

test("returns 1 for value = [num] case", () => {
    expect(waysToMake(4, [4])).toBe(1);
});

test("returns 0 for value < [num] case", () => {
    expect(waysToMake(4, [5])).toBe(0);
});

test("returns 0 for value % [num] != 0 case", () => {
    expect(waysToMake(19, [2])).toBe(0);
});

test("works for large inputs", () => {
    // British Coin problem
    expect(waysToMake(200, [200, 100, 50, 20, 10, 5, 2, 1])).toBe(73682);
});