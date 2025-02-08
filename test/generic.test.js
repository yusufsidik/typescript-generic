"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    // function generic , with default parameter type
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
    it("should support multiple generic", function () {
        const entry = new Entry(1, "hello");
        expect(entry.key).toBe(1);
        expect(entry.value).toBe("hello");
        const triple = new Triple(1, "hello", "yusuf");
        expect(triple.first).toBe(1);
        expect(triple.second).toBe("hello");
        expect(triple.third).toBe("yusuf");
        // tanpa menuliskan secara explisit juga bisa, jika ada di constructor
        const newTriple = new Triple(2, "hola", "yusuf");
        expect(newTriple.first).toBe(2);
        expect(newTriple.second).toBe("hola");
        expect(newTriple.third).toBe("yusuf");
    });
    class SimpleGeneric {
        setValue(value) {
            this.value = value;
        }
        getValue() {
            return this.value;
        }
    }
    it("simple generic", function () {
        const simple = new SimpleGeneric();
        simple.setValue("yusuf");
        expect(simple.getValue()).toBe("yusuf");
    });
    class EmployeeData {
        constructor(employee) {
            this.employee = employee;
        }
    }
    // only interface Employee and inheritance Employee can support generic type
    it("should support constraint", () => __awaiter(this, void 0, void 0, function* () {
        const data1 = new EmployeeData({
            id: "1",
            name: "sidik",
            totalEmployee: 12
        });
    }));
    it("should support array type", () => {
        const array = new Array();
        array.push("sidik");
        array.push("amar");
        expect(array).toBe(["sidik", "amar"]);
        const arrayOfObject = new Array();
        arrayOfObject.push({
            id: 1,
            nama: "ammar",
            kelas: "1A"
        });
        expect(arrayOfObject).toBe([{ id: 1, nama: "ammar", kelas: "1A" }]);
    });
});
