interface Options {
  size: string
  selector: string
}

function setElementSizeFromString(
  html: string,
  { selector = 'iframe', size = '100%' }: Partial<Options> = {}
): string | undefined {
  const parser = new DOMParser()
  const el = parser.parseFromString(html, 'text/html').querySelector(selector)

  el?.setAttribute('width', size)
  el?.setAttribute('height', size)

  return el?.outerHTML
}

export default setElementSizeFromString
