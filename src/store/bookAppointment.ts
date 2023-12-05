import create from 'zustand';

interface BookingState {
  isBooked: boolean;
  selectedDate: Date | null;
  selectedTime: string | null;
  bookAppointment: () => void;
  setBookingDetails: (date: Date | null, time: string | null) => void;
}

const useBookingStore = create<BookingState>((set) => ({
  isBooked: false,
  selectedDate: null,
  selectedTime: null,
  bookAppointment: () => set((state) => ({ isBooked: !state.isBooked })),
  setBookingDetails: (date, time) => set(() => ({ selectedDate: date, selectedTime: time })),
}));

export default useBookingStore;
