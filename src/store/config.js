const config = {
  PPM: {
    minimum: 20,
    maximum: 90,
  },
  pumpStatus: true,
  pumpActiveRangeHour: {
    startTime: { hour: 8, minute: 0 },
    endTime: { hour: 18, minute: 30 },
  },
  fertilizationSchedule: {
    numberOfDays: 2,
    startDate: { date: 16, month: 12, year: 2023 },
    timeOfFertilization: { hour: 8, minute: 0 },
  }
};

export default config;
