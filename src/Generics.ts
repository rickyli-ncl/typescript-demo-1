function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let stringArray = getArray<string>(['brad', 'John', 'Jill'])

numArray.push(5)
stringArray.push('Lily')
