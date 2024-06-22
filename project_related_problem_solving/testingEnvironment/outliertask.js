The provided code is used to find the next available valid slot for booking an interview session. The method 'findFirstAvailableSlot' takes the arguments 'currentTime' is always in the HH:MM format and minutes are either 30 or 00. Assume each session is always 1.5 hours which means it takes 3 half hour time slots. Suppose a user books a session at 1:00 their booked session array would be [1:00, 1:30, 2:00, 2:30]. The method 'findFirstAvailableSlot'  is supposed to find the next valid available session. I need to update the code so that when the 'currentTime' is for example 12:00 and the user has booked a session from 1:00 to 2:30 the code returns the next available slot at 12:00 instead of 02:30  which is an overlapping issue when each session is 1.5 hours
```
// time slots available for booking
const availableSlots = [
    "00:00", "00:30", "01:00", "01:30", "02:00", "02:30", "03:00", "03:30",
    "04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00", "07:30",
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
    "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"
];

function findFirstAvailableSlot(currentTime, availableSlots, bookedSessions) {

    // converts a time string in the format of "hours:minutes" into a decimal number.
    const timeToDecimal = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours + (minutes / 60);
    };

    // filter out booked sessions
    const filteredSlots = availableSlots.filter(slot => !bookedSessions.includes(slot));
    const currentTimeDecimal = timeToDecimal(currentTime);

    // find the first available slot after the current time
    for (const slot of filteredSlots) {
        if (timeToDecimal(slot) >= currentTimeDecimal) {
            return slot;
        }
    }
    return null; // No available slot found
}

const currentTime = "10:00";

const bookedSessions = ["10:00", "10:30", "11:00"];

console.log(findFirstAvailableSlot(currentTime, availableSlots, bookedSessions)); // 11:30
```