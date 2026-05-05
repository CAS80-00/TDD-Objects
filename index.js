/**
 * @typedef {{cohort: number, name: string}} Student
 * @param {Student} student
 * @returns {number} the cohort of the student
 *
 * @example
 * getCohort({cohort: 2012, name: "Alice"}); // 2012
 * @example
 * getCohort({cohort: 1937, name: "Bob"}); // 1937
 * @example
 * getCohort({cohort: 3476, name: "Charlie"}); // 3476
 */
export function getCohort(student) {
  // TODO
}

/**
 * @typedef {{cohort: number, name: string}} Student
 * Hint: comparison operators (e.g. <, <=, >, >=) work on strings!
 * @param {Student} studentA
 * @param {Student} studentB
 * @returns {Student} the student whose name comes first alphabetically
 * @returns {Student} studentA if both students have the same name
 *
 * @example
 * sortStudents({cohort: 1, name: "Alice"}, {cohort: 1, name: "Bob"}); // {cohort: 1, name: "Alice"}
 * @example
 * sortStudents({cohort: 1, name: "Bob"}, {cohort: 1, name: "Alice"}); // {cohort: 1, name: "Alice"}
 * @example
 * sortStudents({cohort: 1, name: "Alice"}, {cohort: 2, name: "Alice"}); // {cohort: 1, name: "Alice"}
 */
export function sortStudents(studentA, studentB) {
  // TODO
}

/**
 * @typedef {{color: string, icon: string}} Flag
 * @param {string} color
 * @param {string} icon
 * @returns {Flag} an object with the given color and icon
 *
 * @example
 * makeFlag("red", "circle"); // { color: "red", icon: "circle" }
 * @example
 * makeFlag("blue", "square"); // { color: "blue", icon: "square" }
 * @example
 * makeFlag("yellow", "triangle"); // { color: "yellow", icon: "triangle" }
 */
export function makeFlag(color, icon) {
  // TODO
}

/**
 * @typedef {{value: number}} Count
 * @param {Count} count
 * @returns {Count} a count whose value is 1 more than the given count
 *
 * @example
 * increment({value: 1}); // {value: 2}
 * @example
 * increment({value: 0}); // {value: 1}
 * @example
 * increment({value: -5}); // {value: -4}
 */
export function increment(count) {
  // TODO
}

/**
 * @typedef {{x: number, y: number}} Location
 *
 * In a city with a rectangular grid of streets, a taxicab can only
 * travel along the grid lines. The taxicab distance between two locations
 * is the sum of the absolute differences of their x and y coordinates.
 *
 * You may assume that the coordinates will be integers.
 *
 * See: https://en.wikipedia.org/wiki/Taxicab_geometry
 *
 * @param {Location} from
 * @param {Location} to
 * @returns {number} the taxicab distance between the two locations
 *
 * @example
 * getTaxicabDistance({x: 0, y: 0}, {x: 3, y: 4}); // 7
 * @example
 * getTaxicabDistance({x: -1, y: -2}, {x: 1, y: 2}); // 6
 * @example
 * getTaxicabDistance({x: 5, y: 5}, {x: 5, y: 5}); // 0
 *
 */
export function getTaxicabDistance(from, to) {
  // TODO
}

/**
 * @typedef {{name: string, isHerbivore: boolean}} Animal
 * @param {Animal[]} animals
 * @returns {Animal[]} an array of only the herbivorous animals
 *
 * @example
 * getHerbivores([{name: "Cow", isHerbivore: true}, {name: "Lion", isHerbivore: false}]); // [{name: "Cow", isHerbivore: true}]
 * @example
 * getHerbivores([]); // []
 * @example
 * getHerbivores([{name: "Rabbit", isHerbivore: true}]); // [{name: "Rabbit", isHerbivore: true}]
 */
export function getHerbivores(animals) {
  // TODO
}

/**
 * @typedef {{name: string, isCarnivore: boolean}} Animal
 * @param {Animal[]} animals
 * @returns {string[]} an array of the names of the carnivorous animals
 *
 * @example
 * getCarnivoreNames([{name: "Lion", isCarnivore: true}, {name: "Cow", isCarnivore: false}]); // ["Lion"]
 * @example
 * getCarnivoreNames([]); // []
 * @example
 * getCarnivoreNames([{name: "Wolf", isCarnivore: true}]); // ["Wolf"]
 */
export function getCarnivoreNames(animals) {
  // TODO
}

/**
 * @typedef {{name: string, quantity: number, price: number}} Item
 *
 * You may assume that:
 *  - quantities will be non-negative integers
 *  - prices will be non-negative numbers
 *
 * @param {Item[]} cart
 * @returns {number} the total cost of all items in the given cart
 *
 * @example
 * getTotalCost([{name: "Hourglass", quantity: 2, price: 3.12}, {name: "Comb", quantity: 1, price: 2.50}]); // 8.74
 * @example
 * getTotalCost([]); // 0
 * @example
 * getTotalCost([{name: "Notebook", quantity: 0, price: 5}]); // 0
 */
export function getTotalCost(cart) {
  // TODO
}

/**
 * Zip is an operation that merges two arrays into a single object.
 * You can assume that the two input arrays have the same length.
 *
 * @param {string[]} keys
 * @param {T[]} values
 * @returns {{[key: string]: T}} an object where each key is associated with the
 * corresponding value at the same index
 *
 * @example
 * zip(["a", "b"], [1, 2]); // {a: 1, b: 2}
 * @example
 * zip([], []); // {}
 * @example
 * zip(["x"], ["x"]); // {x: "x"}
 */
export function zip(keys, values) {
  // TODO
}

/**
 * @param {string} word
 * @returns {{[character: string]: number}} an object where each key is a character
 * and its value is the number of times that character appears in the given word
 *
 * @example
 * countCharacters("hello"); // {h: 1, e: 1, l: 2, o: 1}
 * @example
 * countCharacters(""); // {}
 * @example
 * countCharacters("aAa"); // {a: 2, A: 1}
 */
export function countCharacters(word) {
  // TODO
}
