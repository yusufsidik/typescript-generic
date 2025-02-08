describe("generate", function(){

  // generic class
  class GenericData<T> {
    value: T

    constructor(value:T){
      this.value = value
    }
  }

  it("should can only accept one type", function(){
    const data = new GenericData<string>("yusuf")
    expect(data.value).toBe("yusuf")
    
    const dataNumber = new GenericData<number>(123)
    expect(dataNumber.value).toBe(123)
 
  })

  // function generic , with default parameter type
  function create<T = string>(value:T): T {
    return value
  } 

  it("should support function generic", () => {
    const result = create<string>("Hello")
    expect(result).toBe("Hello")

    const result2 = create<number>(123)
    expect(result2).toBe(123)
  })

  // multiple generic
  class Entry<K, V> {
    constructor(public key: K, public value: V) {

    }
  }

  class Triple<K, V, T> {
    constructor(public first: K, public second:V, public third: T){

    }
  }

  

  it("should support multiple generic", function(){
    const entry = new Entry<number, string>(1, "hello")
    expect(entry.key).toBe(1)
    expect(entry.value).toBe("hello")
    
    const triple = new Triple(1, "hello", "yusuf")
    expect(triple.first).toBe(1)
    expect(triple.second).toBe("hello")
    expect(triple.third).toBe("yusuf") 
    
    // tanpa menuliskan secara explisit juga bisa, jika ada di constructor
    const newTriple = new Triple(2, "hola", "yusuf")
    expect(newTriple.first).toBe(2) 
    expect(newTriple.second).toBe("hola") 
    expect(newTriple.third).toBe("yusuf") 

  })

  class SimpleGeneric<T> {
    private value?: T

    setValue(value: T){
      this.value = value
    }

    getValue() : T | undefined {
      return this.value
    }
  }

  it("simple generic", function(){
    const simple = new SimpleGeneric<string>()
    simple.setValue("yusuf")
    expect(simple.getValue()).toBe("yusuf")
  })


  interface Employee {
    id: string
    name: string
  }

  interface Manager extends Employee {
    totalEmployee: number
  }

  interface VP extends Manager {
    totalManager: number
  }

  class EmployeeData<T extends Employee> {
    constructor(public employee: T){
    }
  }

  // only interface Employee and inheritance Employee can support generic type
  it("should support constraint", async () => {
    const data1 = new EmployeeData<Manager>({
      id: "1",
      name: "sidik",
      totalEmployee: 12
    })
  })


  interface Murid {
    id: number
    nama: string
    kelas: string
  }
  
  it("should support array type", () => {
    const array = new Array<string>()
    array.push("sidik")
    array.push("amar")
    expect(array[0]).toBe("sidik")
    expect(array[1]).toBe("amar")
  
    const arrayOfObject = new Array<Murid>()
    arrayOfObject.push({
      id:1,
      nama: "ammar",
      kelas: "1A"
    })
    expect(arrayOfObject[0]).toStrictEqual({id:1, nama: "ammar", kelas: "1A"})
  })

})