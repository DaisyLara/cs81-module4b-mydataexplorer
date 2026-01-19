//URL: https://github.com/DaisyLara/cs81-module4b-mydataexplorer

const myDataJournal = [ 
  { day: "Monday", sleepHours: 7, screenTime: 8, mood: "productive", caffeineIntake: 0, focusLevel: 8 },
  { day: "Tuesday", sleepHours: 5, screenTime: 14, mood: "distracted", caffeineIntake: 1, focusLevel: 2 },
  { day: "Wednesday", sleepHours: 6, screenTime: 14, mood: "distracted", caffeineIntake: 2, focusLevel: 4 },
  { day: "Thursday", sleepHours: 8, screenTime: 17, mood: "productive", caffeineIntake: 0, focusLevel: 7 },
  { day: "Friday", sleepHours: 6, screenTime: 12, mood: "productive", caffeineIntake: 1, focusLevel: 7 },
  { day: "Saturday", sleepHours: 9, screenTime: 10, mood: "productive", caffeineIntake: 2, focusLevel: 6 },
  { day: "Sunday", sleepHours: 8, screenTime: 10, mood: "productive", caffeineIntake: 2, focusLevel: 5 }
];

/* Predictions: 
Which day had the most screen time? --Thursday had the most screentime.
Best focus day? Monday was the best focus day.
Is more caffeine helping? No, it only gives energy but not focus. I can't take adderall and caffeine on the same day. */

function averageSleep(log) {
    let totalSleep = 0
    for (let amount of log) { 
        totalSleep += amount.sleepHours //confusion here, sleepHours required to link back to constant
    }
    return totalSleep / log.length
}
console.log(averageSleep(myDataJournal))

function mostFrequentMood(log) { //took this one almost 1:1 from readingTracker assignment. Had a hard time with referencing and understanding the connections
    const moodCount = {};
    for (let count of log) {
        if (!moodCount[count.mood]) {
            moodCount [count.mood] = 1;
        } else {
            moodCount[count.mood]++;
        }
    }

    let maxMood = null
    let maxFreq = 0
    for (let mood in moodCount) {
        if (moodCount[mood] > maxFreq) {
            maxMood = mood;
            maxFreq = moodCount[mood];
        }
    }
    return maxMood
}
console.log(mostFrequentMood(myDataJournal))

function highestScreenTime(log) {
    let numList = [];
    for (let st of log) {
        numList.push(st.screenTime)
    }
    return Math.max(...numList) //I didn't want to do the same thing as mostFrequentMood again, so I wanted to try Math.max, and learned that Math.max doesn't play nice with array properties and had to extract the array. All in all I would not do it again. I required a lot of help from Gemini for this one in the reasoning and extracting of the array
}
console.log(highestScreenTime(myDataJournal)) 

function leastSleep(log) {
    let fewestHours = 20;
    for (let entry of log) {
        if (entry.sleepHours < fewestHours) {
            fewestHours = entry.sleepHours;
        }
    }
    return fewestHours
}
console.log(leastSleep(myDataJournal))



/*    experiment area, don't want to get rid of it in case I come back to use it
maxScreenTime = 0
    for (let st of log) {
        let st1 - 
    }
    return Math.max (screenTime)
}
console.log (Math.max(myDataJournal.screenTime))
*/


//{ day: Monday, sleepHours: 7, screenTime: 10, mood: "distracted", caffeineIntake:  }{ day: Monday, sleepHours: 7, screenTime: 10, mood: "distracted", caffeineIntake:  }

