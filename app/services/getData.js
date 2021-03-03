const getData = async (Api, api, setQuote) => {
  const data = await fetch(Api[api]);
  const response = await data.json();
  switch (api) {
    case "kanye":
      setQuote({
        quote: response.quote,
        author: "Kanye West",
      });
      break;
    case "swift":
      setQuote({
        quote: response.quote,
        author: "Taylor Swift",
      });
      break;
    case "ron":
      setQuote({
        quote: response[0],
        author: "Ron Swanson",
      });
      break;
    case "breakingBad":
      setQuote({
        quote: response[0].quote,
        author: response[0].author,
      });
      break;
    case "randomQuotes":
      setQuote({
        quote: response.content,
        author: response.author,
      });
      break;
    default:
      break;
  }
};

export default getData;
