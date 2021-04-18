export function date(time: number): string {
  const formatter = new Intl.DateTimeFormat(navigator.language)

  return formatter.format(new Date(time))
}

export function number(n: number): string {
  const formatter = new Intl.NumberFormat(navigator.language)

  return formatter.format(n)
}
