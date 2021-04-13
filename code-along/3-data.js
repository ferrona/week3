// Goal: Store my social media profile in memory. Display it in the 
// JavaScript console in Chrome, in a human-readable format.

// A social media profile is a more complex thing – it's not simply
// a String or a Number. It's got many attributes, like a name, location,
// and a timeline.

// Write the recipe (algorithm) in the comments. Then, write the code.

// Store a simple social media profile in memory
let profile = {
    name: `Ferrona`, //don't forget to separate it with a coma .
    location: {
        city: `Chicago`,
        state: `IL`,
        zip: `60202`
    },
    timeline: [`Working at a biotech startup`, `Studying at Kellogg`, `Eating tacos`]
}
console.log(profile)

// Retrieve the name from the profile, store it in memory
let profileName = profile.name //the . essentially pull the name out of the profile

// Display the name in the console
console.log(`My name is ${profileName}`)

// Retrieve the location, store it in a memory
let profileLocation = profile.location

// Use the location to write the city and state, in a human-readable
console.log(`I live in ${profileLocation.city}, ${profileLocation.state}`)
// format, to the JavaScript console

// Write the 3 statuses from the "timeline" to the JavaScript console
console.log(`Timeline: `)
console.log(profile.timeline[0])
console.log(profile.timeline[1])
console.log(profile.timeline[2])