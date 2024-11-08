export const getRandomQuote = (quotes) => {
  return quotes.length > 0 && quotes[Math.floor(Math.random() * quotes.length)]
}
