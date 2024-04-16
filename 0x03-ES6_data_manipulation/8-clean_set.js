export default function cleanSet(set, prefix) {
  if (!set || !prefix || typeof set !== 'object' || typeof prefix !== 'string') return '';
  return [...set]
    .filter((item) => item.startsWith(prefix))
    .map((item) => item.slice(prefix.length))
    .join('-');
}
