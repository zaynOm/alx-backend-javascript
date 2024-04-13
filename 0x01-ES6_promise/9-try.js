export default function guardrail(mathFunction) {
  const res = [];
  try {
    res.push(mathFunction());
  } catch (error) {
    res.push(error.toString());
  }
  return [...res, 'Guardrail was processed'];
}
