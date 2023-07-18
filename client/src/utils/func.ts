async function getFlag(flagCode: string) {
  const response = await fetch(`https://flagcdn.com/16x12/${flagCode}.png`);
  const data = await response.json();
  console.log(data);
}

export function toHoursAndMinutes(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return { hours, minutes };
}
