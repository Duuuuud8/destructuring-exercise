/* Task 1: Unveiling the Coordinates */
const coordinates = {x: 34, y: 42, z: 67};
const {x, y} = coordinates;
console.log(`Coordinates found: x=${x}, y=${y}`);

/* Task 2: The Map of Secrets */
const locations = {
	first: "Cave of Wonders",
	second: "Lake of Mystery",
	third: "Mount of Ages",
	fourth: "Desert of Shadows"
};
const {first, second, ...remaining} = locations;
console.log(`Key locations: ${first}, ${second}`);

/* Task 3: The Mysterious Door */
const doorCode = {
	upper: "Alpha",
	lower: "Omega"
};
const {upper,
	middle = remaining.third,
	lower} = doorCode;
console.log(`Door Code Sequence: ${upper}, ${middle}, ${lower}`);

/* Task 4: The Guardian's Riddle */
const riddle = {
	ancientWord: "Sphinx",
	modernWord: "Cat"
};
const {ancientWord: translation} = riddle;
console.log(`The guardian says: ${translation}`);

/* Task 5: The Array of Elements */
const elements = ["Fire", "Water", "Earth", "Air"];
const [firstElement, secondElement] =elements;
console.log(`Essential Elements: ${firstElement}, ${secondElement}`);

/* Task 6: Skipping Stones */
const stones = [1, 2, 3, 4, 5, 6];
const [firstStone,,,,, sixthStone] = stones
console.log(`Special Stones: ${firstStone}, ${sixthStone}`);

/* Task 7: The Array of Shadows */
const shadows = ["Darkness", "Silence", "Whisper", "Echo"];
const [visible, ...hiddenShadows] = shadows
console.log(`Visible Shadow: ${visible}, Hidden Shadows: ${hiddenShadows.join(", ")}`);

/* Task 8: The Wise Function */
function revealPath ({direction, distance})
{
	console.log(`Move ${distance} meters towards the ${direction}.`);
}
revealPath({direction: "North", distance: 100});

/* Task 9: The Scroll of Defaults */
function mixPotion ({ingredient1 = "Water", ingredient2 = "Fireflower"} = {})
{
	console.log(`Mix ${ingredient1} with ${ingredient2}`);
}
mixPotion({ingredient1: "Marshmallow Root"})
mixPotion({ingredient2: "Flux Weed"})

/* Task 10: The Array Spell */
function castSpell ([ingredient1, ingredient2])
{
	console.log(`Casting Spell with ${ingredient1} and ${ingredient2}`);
}
castSpell(["Elves Blood", "Dandelion Root", "Reindeer Hoof"])

/* Task 11: The Nested Secret */
const nestedSecret = {outer: {inner: "The Final Key"}};
const {outer: {inner: finalKey}} = nestedSecret;
console.log(`Unveiled Secret: ${finalKey}`);

/* Task 12: The Swap of Fate */
let stoneA = "Emerald";
let stoneB = "Ruby";
[stoneA, stoneB] = [stoneB, stoneA];
console.log(`Swapped Stones: A=${stoneA}, B=${stoneB}`);