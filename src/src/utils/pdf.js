export function generatePDF(data) {
  const content = `
PRESUPUESTO - GRANHOME

Cliente: ${data.name}
Teléfono: ${data.phone}
Dirección: ${data.address}

Trabajo: ${data.work}
Descripción:
${data.description}

Base: €${data.base}
IVA: ${data.iva}%
TOTAL: €${data.total}
  `
  const blob = new Blob([content], { type: "text/plain" })
  const link = document.createElement("a")
  link.href = URL.createObjectURL(blob)
  link.download = "presupuesto-granhome.txt"
  link.click()
}
