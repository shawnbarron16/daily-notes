const searchTerm = ""

const notes = [
    {
        id: 1,
        subject: "git",
        date: ["April 8th", "April 9th"],
        feeling: "Lost and scared I might break my computer",
        timeSpent: 5,
    },
    {
        id: 2,
        subject: "Github HTML & CSS",
        date: ["April 13th", "April 14th"],
        feeling: "Excited and creative",
        timeSpent: 7,
    }
];

const noteAboutToday = {
    id: 4,
    subject: "Javascript",
    date: ["April 16th"],
    feeling: "Nervous",
    timeSpent: 2,
};

const createNote = (newNote) => {
    const lastIndex = notes.length - 1
    const currentLastNote = notes[lastIndex]
    const lastId = currentLastNote.id
    const idForNewNote = lastId + 1

    newNote.id = idForNewNote;
    notes.push(newNote);
};

createNote(noteAboutToday);

for (noteList of notes) {
    if (searchTerm === noteList.feeling) {
    console.log(`Note ${noteList.id}
    ${noteList.date}
    I learned ${noteList.subject}
    I spent ${noteList.timeSpent} working on it
    I felt ${noteList.feeling}
    `)
    } else 
    console.log(`Note ${noteList.id}
    ${noteList.date}
    I learned ${noteList.subject}
    I spent ${noteList.timeSpent} working on it
    I felt ${noteList.feeling}
    `);
};