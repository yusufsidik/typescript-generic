"use strict";
describe("generate", function () {
    // generic class
    class GenericData {
        constructor(value) {
            this.value = value;
        }
    }
    it("should can only accept one type", function () {
        const data = new GenericData("yusuf");
        expect(data.value).toBe("yusuf");
        const dataNumber = new GenericData(123);
        expect(dataNumber.value).toBe(123);
    });
    // function generic
    function create(value) {
        return value;
    }
    it("should support function generic", () => {
        const result = create("Hello");
        expect(result).toBe("Hello");
        const result2 = create(123);
        expect(result2).toBe(123);
    });
    // multiple generic
    class Entry {
        constructor(key, value) {
            this.key = key;
            this.value = value;
        }
    }
    class Triple {
        constructor(first, second, third) {
            this.first = first;
            this.second = second;
            this.third = third;
        }
    }
    it("should supprt multiple generic", function () {
        const entry = new Entry(1, "hello");
        expect(entry.key).toBe(1);
        expect(entry.value).toBe("hello");
        const triple = new Triple(1, "hello", "yusuf");
        expect(triple.first).toBe(1);
        expect(triple.second).toBe("hello");
        expect(triple.third).toBe("yusuf");
    });
});
