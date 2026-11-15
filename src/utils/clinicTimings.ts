export interface ClinicStatus {
  isOpen: boolean;
  statusText: string;
  badgeClass: string;
  nextChangeText: string;
  currentDayName: string;
  currentTimeString: string;
}

export const CLINIC_SCHEDULE = [
  { day: 'Sunday', short: 'Sun', hours: '10:00 AM – 2:00 PM', slots: [{ start: 10, end: 14 }] },
  { day: 'Monday', short: 'Mon', hours: '10:00 AM – 2:00 PM & 5:00 PM – 9:00 PM', slots: [{ start: 10, end: 14 }, { start: 17, end: 21 }] },
  { day: 'Tuesday', short: 'Tue', hours: '10:00 AM – 9:00 PM', slots: [{ start: 10, end: 21 }] },
  { day: 'Wednesday', short: 'Wed', hours: '10:00 AM – 9:00 PM', slots: [{ start: 10, end: 21 }] },
  { day: 'Thursday', short: 'Thu', hours: '10:00 AM – 9:00 PM', slots: [{ start: 10, end: 21 }] },
  { day: 'Friday', short: 'Fri', hours: '10:00 AM – 9:00 PM', slots: [{ start: 10, end: 21 }] },
  { day: 'Saturday', short: 'Sat', hours: '10:00 AM – 9:00 PM', slots: [{ start: 10, end: 21 }] },
];

export function getClinicLiveStatus(date: Date = new Date()): ClinicStatus {
  // Convert or use current date
  const dayIndex = date.getDay(); // 0 is Sunday, 1 is Monday ...
  const currentHour = date.getHours() + date.getMinutes() / 60;
  const dayConfig = CLINIC_SCHEDULE[dayIndex];

  let isOpen = false;
  let nextChangeText = '';

  for (const slot of dayConfig.slots) {
    if (currentHour >= slot.start && currentHour < slot.end) {
      isOpen = true;
      const closingHour = slot.end;
      const formattedClose = closingHour > 12 ? `${closingHour - 12}:00 PM` : `${closingHour}:00 AM`;
      nextChangeText = `Open now • Closes at ${formattedClose}`;
      break;
    }
  }

  if (!isOpen) {
    // Check if there is an upcoming slot today
    const upcomingSlot = dayConfig.slots.find(slot => currentHour < slot.start);
    if (upcomingSlot) {
      const openHour = upcomingSlot.start;
      const formattedOpen = openHour > 12 ? `${openHour - 12}:00 PM` : `${openHour}:00 AM`;
      nextChangeText = `Opens today at ${formattedOpen}`;
    } else {
      // Opens next morning at 10:00 AM
      nextChangeText = `Closed now • Opens next at 10:00 AM`;
    }
  }

  const timeString = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return {
    isOpen,
    statusText: isOpen ? 'Clinic Open Now in DLF Ankur Vihar' : 'Clinic Currently Closed',
    badgeClass: isOpen
      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
      : 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    nextChangeText,
    currentDayName: dayConfig.day,
    currentTimeString: timeString,
  };
}
