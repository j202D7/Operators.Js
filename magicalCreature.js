// 1. Declare a variable named 'creatureName' and assign it a magical creature's name as a string.
let creatureName = "Phoenix";

// 2. Declare a variable named 'creatureDescription' and describe its magical properties as a string.
let creatureDescription = "A magnificent bird of fire that can regenerate from its ashes.";

// 3. Do you believe that this creature is friendly to humans? 
let isFriendly = true;

// 4. The magical zoo has an age restriction! Declare a variable named 'visitorAge' and assign it a random age between 1 and 60.
let visitorAge = Math.floor(Math.random() * 60) + 1;

// 5. Determine if the visitor is allowed to see the creature.
let canVisit = visitorAge > 15;

// 6. Combine all the information into a summary.
let zooSummary = "Creature: " + creatureName + " | Description: " + creatureDescription + " | Friendly: " + isFriendly + " | Visitor Age: " + visitorAge + " | Can Visit: " + canVisit;

// 7. Print the summary using console.log()
console.log(zooSummary);


// Challenge:
// 8. Now, imagine there are three more creatures in the zoo. Repeat Tasks 1-6 for each creature.

let creatureName2 = "Dragon";
let creatureDescription2 = "A massive scaly beast that breathes fire and hoards gold.";
let isFriendly2 = false;
let visitorAge2 = Math.floor(Math.random() * 60) + 1;
let canVisit2 = visitorAge2 > 15;
let zooSummary2 = "Creature: " + creatureName2 + " | Description: " + creatureDescription2 + " | Friendly: " + isFriendly2 + " | Visitor Age: " + visitorAge2 + " | Can Visit: " + canVisit2;

let creatureName3 = "Griffin";
let creatureDescription3 = "A majestic hybrid with the body of a lion and the head and wings of an eagle.";
let isFriendly3 = true;
let visitorAge3 = Math.floor(Math.random() * 60) + 1;
let canVisit3 = visitorAge3 > 15;
let zooSummary3 = "Creature: " + creatureName3 + " | Description: " + creatureDescription3 + " | Friendly: " + isFriendly3 + " | Visitor Age: " + visitorAge3 + " | Can Visit: " + canVisit3;

let creatureName4 = "Unicorn";
let creatureDescription4 = "A graceful white horse with a single magical spiral horn on its forehead.";
let isFriendly4 = true;
let visitorAge4 = Math.floor(Math.random() * 60) + 1;
let canVisit4 = visitorAge4 > 15;
let zooSummary4 = "Creature: " + creatureName4 + " | Description: " + creatureDescription4 + " | Friendly: " + isFriendly4 + " | Visitor Age: " + visitorAge4 + " | Can Visit: " + canVisit4;

// Combine all summaries into a single variable 'allZooSummaries'
let allZooSummaries = zooSummary + "\n" + zooSummary2 + "\n" + zooSummary3 + "\n" + zooSummary4;

// 9. Print the 'allZooSummaries' to see the details of all the creatures in the magical zoo.
console.log(allZooSummaries);
