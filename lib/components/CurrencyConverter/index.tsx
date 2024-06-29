import { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';

interface ExchangeRates {
    [key: string]: number;
}

const CurrencyConverter = () => {
    const [sendInputValue, setSendInputValue] = useState("");
    const [receiveInputValue, setReceiveInputValue] = useState("");
    const [exchangeRate, setExchangeRate] = useState<Number>(1);
    const [countrySelectVal, setCountrySelectVal] = useState("");
    const [countryNames, setCountryNames] = useState<string[]>([]);
    const prevExchangeRateRef = useRef<number>(1);
    const [isUpdating,setIsUpdating] = useState<boolean>(false);
    // Fetch the list of available currencies
    useEffect(() => {
        
        fetch('https://open.er-api.com/v6/latest/USD')
            .then((res) => res.json())
            .then((data) => {
                const currencyCodes = Object.keys(data.rates);
                setCountryNames(currencyCodes);
                
                if (currencyCodes.length > 0) {
                    setCountrySelectVal(currencyCodes[0]);
                }
            })
            .catch((error) => console.error('Error fetching currency codes:', error));
    }, []);

    // Fetch the exchange rate whenever the selected country changes
    useEffect(() => {
        if (countrySelectVal) {
            fetch(`https://open.er-api.com/v6/latest/USD`)
                .then((res) => res.json())
                .then((data) => {
                    const rates: ExchangeRates = data.rates;
                    console.log("Rates: ", rates);
                    if (rates[countrySelectVal]) {
                        setExchangeRate(rates[countrySelectVal]);
                        console.log(`Currency data for ${countrySelectVal}: `, rates[countrySelectVal]);
                    }
                })
                .catch((error) => console.error('Error fetching exchange rate:', error));
        }
    }, [countrySelectVal]);

    // Update receiveInputValue when sendInputValue or exchangeRate changes
    useEffect(() => {
        
            if(!isUpdating){
                setIsUpdating(true);
                const receiveCalculation = (Number(sendInputValue) * Number(exchangeRate)).toFixed(2);
                setReceiveInputValue(receiveCalculation.toString());
            }
            
            return () => {
                setIsUpdating(false);
            }
       
    }, [receiveInputValue, sendInputValue, exchangeRate]);

  return (
    <>
        <form className={styles.form}>
            <div className={styles.form_input}>
                <label>
                    Send:
                    <input
                    type="number"
                    value={sendInputValue}
                    onChange={(e) => setSendInputValue(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Receive:
                    <input
                    type="number"
                    value={receiveInputValue}
                    onChange={(e) => setReceiveInputValue(e.target.value)}
                    />
                </label>
                <select name="country" value={countrySelectVal} onChange={(e) => setCountrySelectVal(e.target.value)}>
                    {
                        countryNames.map(countryName => <option key={countryName}>{countryName}</option>)
                    }
                </select>
            </div>
            
        </form>
        
    </>
  )
}

export default CurrencyConverter