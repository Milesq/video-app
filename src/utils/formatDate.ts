export default (time: number): string => {
  const formatter = new Intl.DateTimeFormat(navigator.language)

  return formatter.format(new Date(time))
}
