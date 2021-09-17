import sumOfOdd from "./sumOfOdd.js"

test("works for positive", () => {
    const posArr = [1, 2, 3]
    expect(sumOfOdd(posArr)).toBe(4)
})

test("works for negative", () => {
    const negArr = [-1, -2, -3]
    expect(sumOfOdd(negArr)).toBe(-4)
})

test("works and positive and negative", () => {
    const posAndNegArr = [-1, 0, -2, -3, 4, 5, 6]
    expect(sumOfOdd(posAndNegArr)).toBe(1)
})

test("for empty array, returns the array", () => {
    const empty = []
    expect(sumOfOdd([])).toEqual([])
})

test("works for 1-element array", () => {
    const odd = [1]
    const even = [2]
    expect(sumOfOdd(odd)).toBe(1)
    expect(sumOfOdd(even)).toBe(0)
})

test("all elements are integers", () => {
    const arrStrings = [1, 2, ""]
    const arrFloats = [1, 2, 3.5]
    const expectedError = new Error("Must pass an array of integers!")
    expect(() => sumOfOdd(arrStrings)).toThrow(expectedError)
    expect(() => sumOfOdd(arrFloats)).toThrow(expectedError)
})