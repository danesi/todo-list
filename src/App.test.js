const App = require("./App")

// @ponicode
describe("handleAdd", () => {
    let inst

    beforeEach(() => {
        inst = new App.default("George")
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleAdd()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleComplete", () => {
    let inst

    beforeEach(() => {
        inst = new App.default("Jean-Philippe")
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleComplete(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleComplete("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleComplete("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleComplete(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleComplete(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.handleComplete(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleChange", () => {
    let inst

    beforeEach(() => {
        inst = new App.default("Edmond")
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleChange({ target: { value: "elio@example.com" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleChange({ target: { value: "Elio" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleChange({ target: { value: "Dillenberg" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleChange(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
