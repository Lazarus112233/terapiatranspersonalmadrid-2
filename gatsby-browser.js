export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Este sitio se ha actualizado. ` +
      `¿Refrescar para ver la última versión?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
