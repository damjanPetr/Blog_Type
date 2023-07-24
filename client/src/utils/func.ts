export function getFlag(flagCode: string) {
  flagCode.toLowerCase();
  const flagstr = `https://flagcdn.com/24x18/${flagCode.toLowerCase()}.png`;
  return flagstr;
}

export function toHoursAndMinutes(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return { hours, minutes };
}

export function getFullCountryName(arg: string) {
  // const countryTitle = new Intl.Locale(arg);
  // console.log(
  // "🚀 ~ file: func.ts:16 ~ getFullCountryName ~ countryTitle:",
  // countryTitle
  // );

  return new Intl.DisplayNames(arg, { type: "region" }).of(arg);
}

export function getCountryLanguage(arg: string) {
  // const countryTitle = new Intl.Locale(arg);
  // console.log(
  // "🚀 ~ file: func.ts:16 ~ getFullCountryName ~ countryTitle:",
  // countryTitle
  // );

  return new Intl.DisplayNames(arg, { type: "language" }).of(arg);
}
