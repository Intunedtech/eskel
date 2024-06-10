import { useState, useEffect } from 'react';

const CurrencyConverter = () => {
    const [inputValue, setInputValue] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [exchangeRate, setExchangeRate] = useState<Number>(1);

    useEffect(() => {
        fetch('https://open.er-api.com/v6/latest/USD')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            
            setExchangeRate(data.rates.NPR);
            console.log("Currency data: ",data.rates.NPR);
          });
      }, []);

    useEffect(() => {
        const calculation = Number(inputValue) * Number(exchangeRate)
        setInputValue2(String(calculation))
    }, [inputValue]);

    useEffect(() => {
        const calculation2 = Number(inputValue2) / Number(exchangeRate)
        setInputValue(String(calculation2))
    }, [inputValue2]);

  return (
    <>
        <form>
            <div>
                <label>
                    Send:
                    <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Receive:
                    <input
                    type="number"
                    value={inputValue2}
                    onChange={(e) => setInputValue2(e.target.value)}
                    />
                </label>
            </div>
            
        </form>
        
    </>
  )
}

export default CurrencyConverter