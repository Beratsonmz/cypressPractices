describe('JSON objects', () => {
  it('Json objects', () => {
    //cy.openHomePage()

    const simpleObject = {"key": "value", "key2": "value2"}

    const simpleArrayOfValue = ["one", "two", "three"]

    const arrayOfObjects = [{"key": "value"}, {"key2": "value2"}, {"key3": "value3"}]

    const typesOfData = {"string": "this is string", "number": 10}

    const mix = {
      "firstName": "Berat",
      "lastName": "Sönmez",
      "age": 25,
      "students": [
        {
          "firstName": "Steve",
          "lastName": "Jobs",
        },
        {
          "firstName": "Elon",
          "lastName": "Musk",
        }
      ]
    }
    console.log(simpleObject.key2)
    console.log(simpleObject["key2"])
    console.log(simpleArrayOfValue[1])
    console.log(arrayOfObjects[2].key3)
    console.log(mix.students[1].lastName)
  })
})
