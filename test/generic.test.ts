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

  // function generic
  function create<T>(value:T): T {
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
    
    const triple = new Triple<number, string, string>(1, "hello", "yusuf")
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

})