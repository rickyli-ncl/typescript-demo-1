// Basic Types
let id: number = 5
let company: string = 'Sky'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true]

// Tuple Array
let employee: [number, string][]
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill']
]

// Union
let pid: string | number
pid = '22'

// Enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction1.Up) // output 0

// Can also set your own values
enum Direction2 {
    Up = 1,
    Down,
    Left,
    Right
}

// Can also assign strings
enum Direction3 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

// Objects
type User = {
    id: number
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

//Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
    return x + y
}

console.log(addNum(1, 2))

// Void
function log(message: string | number): void {
    console.log(message)
}

