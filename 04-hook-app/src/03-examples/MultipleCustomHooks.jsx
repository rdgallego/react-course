import { useFetch, useCounter } from "../hooks"
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const BreakingBadQuotes = () => {
    const {counter, increment} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
    const {author, quote} = !!data && data[0];

  return (
    <>
        {
            isLoading
                ? <LoadingQuote/>
                : <Quote author={author} quote={quote}/>
        }

        <button className="btn btn-primary" onClick={() => increment(1)} disabled={isLoading}>
            Next Quote
        </button>
    </>

  )
}
