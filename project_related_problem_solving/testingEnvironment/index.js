



function findFirstAvailableSlot(currentTime, availableSlots, bookedSessions) {
    const timeToDecimal = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours + (minutes / 60);
    };

    const filteredSlots = filterUnbookableSessions(availableSlots, bookedSessions);
    const currentTimeDecimal = timeToDecimal(currentTime);

    for (const slot of filteredSlots) {
        if (timeToDecimal(slot) >= currentTimeDecimal) {
            return slot;
        }
    }
    return null; // No available slot found
}