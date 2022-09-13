function onHear(event) {
    // "hear" events set the event.speaker property.
    // Check if the pet has heard the hero:
    if (event.speaker == hero) {
        pet.say("WOOF");
    }
}

// Assign the event handler for "hear" event.
pet.on("hear", onHear);