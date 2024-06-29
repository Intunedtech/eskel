import { useState, useEffect, useRef, SyntheticEvent } from 'react';
import styles from './styles.module.css';

interface ExchangeRates {
    [key: string]: number;
}
 
const CurrencyConverter = () => {
    const [sendInputValue, setSendInputValue] = useState("");
    const [receiveInputValue, setReceiveInputValue] = useState("");
    const [exchangeRate, setExchangeRate] = useState<Number>(1);
    const [targetCurrency, setTargetCurrency] = useState("");
    const [countryNames, setCountryNames] = useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
        const { name, value } = event.target;
        switch (name){
            case 'send':
                console.log("handling send");
                setSendInputValue(value);
                setReceiveInputValue((Number(value) * Number(exchangeRate)).toFixed(2) )
                break;
            case 'recieve':
                console.log("handling recieve");
                setReceiveInputValue(value);
                setSendInputValue((Number(value) / Number(exchangeRate)).toFixed(2) )
                break;
            case 'targetCurrency':
                console.log("handling country");
                setTargetCurrency(value);

                fetch(`https://open.er-api.com/v6/latest/USD`)
                .then((res) => res.json())
                .then((data) => {
                    const rates: ExchangeRates = data.rates;
                    // console.log("Rates: ", rates);
                    if (rates[value]) {
                        console.log(`Currency data for ${value}: `, rates[value]);
                        setExchangeRate(rates[value]);
                        setReceiveInputValue((Number(sendInputValue) * rates[value]).toFixed(2) )
                    }
                })
                .catch((error) => console.error('Error fetching exchange rate:', error));
                
                
                break;
            default:
                // do nothing
                break;
        }
        console.log(name,value);
    }
    
    // Fetch the list of available currencies
    useEffect(() => {
        
        fetch('https://open.er-api.com/v6/latest/USD')
            .then((res) => res.json())
            .then((data) => {
                const currencyCodes = Object.keys(data.rates);
                setCountryNames(currencyCodes);
                
                if (currencyCodes.length > 0) {
                    setTargetCurrency(currencyCodes[0]);
                }
            })
            .catch((error) => console.error('Error fetching currency codes:', error));
    }, []);

  return (
    <>
        <form className={styles.form}>
            <div className={styles.form_input}>
                <label>
                    Send:
                    <input
                    name='send'
                    type="number"
                    value={sendInputValue}
                    onChange={(e) => handleChange(e)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Receive:
                    <input
                    name='recieve'
                    type="number"
                    value={receiveInputValue}
                    onChange={(e) => handleChange(e)}
                    />
                </label>
                <select name="targetCurrency" value={targetCurrency} onChange={(e) => handleChange(e)}>
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