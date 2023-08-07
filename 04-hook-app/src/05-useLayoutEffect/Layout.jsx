/* eslint-disable no-unused-vars */
import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";
import { useCounter, useFetch } from "../hooks";


export const Layout = () => {
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
