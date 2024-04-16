export default function cleanSet(set, prefix) {
  if (!set || !prefix) return '';
  return [...set]
    .filter((item) => item.startsWith(prefix))
    .map((item) => item.slice(prefix.length))
    .join('-');
}
