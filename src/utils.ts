export interface Streak {
  currentCount: number;
  startDate: string;
  lastLoginDate: string;
}

export const KEY = "streak";

export function buildStreak(
  date: Date,
  overrideDefaults?: Partial<Streak>
): Streak {
  const defaultStreak = {
    currentCount: 1,
    startDate: formattedDate(date),
    lastLoginDate: formattedDate(date),
  };
  return {
    ...defaultStreak,
    ...overrideDefaults,
  };
}

export function shouldIncrementOrResetStreakCount(
  currentDate: Date,
  lastLoginDate: string
): "increment" | "reset" | "none" {
  const difference =
    currentDate.getDate() - parseInt(lastLoginDate.split("/")[1]);
  if (difference === 0) {
    return "none";
  }
  if (difference === 1) {
    return "increment";
  }
  return "reset";
}

export function updateStreak(storage: Storage, streak: Streak): void {
  storage.setItem(KEY, JSON.stringify(streak));
}

export function formattedDate(date: Date) {
  return date.toLocaleDateString("en-US");
}

export function differenceInDays(dateLeft: Date, dateRight: Date): number {
  const diffTime = Math.abs(dateLeft.getTime() - dateRight.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
