export function getNameShortForm(name: string) {
  if (!name) return '';
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toLocaleUpperCase();
}
