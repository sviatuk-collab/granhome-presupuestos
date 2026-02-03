export function calculateTotal(base, iva) {
  const ivaValue = iva === 10 ? 0.10 : 0.21
  const total = base + base * ivaValue
  return total.toFixed(2)
}
