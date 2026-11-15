export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  badge: string;
  features: string[];
  techHighlight: string;
  popular?: boolean;
}

export interface DaySchedule {
  day: string;
  hours: string;
  isSplit?: boolean;
  slots: { open: string; close: string }[];
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  treatment: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  avatarText: string;
  tag?: string;
  highlight?: string;
}

export interface AppointmentFormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  timeSlot: string;
  notes: string;
}
