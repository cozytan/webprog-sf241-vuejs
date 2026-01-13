const { createApp } = Vue

createApp({
    data() {
        return {
            name: "Spongebob Squarepants",
            profileImage: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png",
            about: "A yellow sea sponge who lives in a pineapple under the sea in the city of Bikini Bottom.",
            hobbies: [
                "Eat, Sleep, Study, Pray", 
                "Workout, Basketball", 
                "Watch movie/Series"
            ],
            education: "Coputer Science with a Specialization of Cybersecurity and Forensics at Asia Pacific Collge"
        }
    }
}).mount('#app')