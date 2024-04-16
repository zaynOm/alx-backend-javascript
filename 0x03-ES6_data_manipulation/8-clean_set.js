export default function cleanSet(set, prefix) {
  if (prefix === '') return '';
  return [...set]
    .filter((item) => item.startsWith(prefix))
    .map((item) => item.slice(prefix.length))
    .join('-');
}
