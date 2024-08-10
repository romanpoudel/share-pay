export function getNameShortForm(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toLocaleUpperCase();
}
