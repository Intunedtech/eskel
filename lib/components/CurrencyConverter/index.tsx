import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { send } from 'process';

interface ExchangeRates {
    [key: string]: number;
}
 
const CurrencyConverter = () => {
    const [sendInputValue, setSendInputValue] = useState("");
    const [receiveInputValue, setReceiveInputValue] = useState("");
    const [exchangeRate, setExchangeRate] = useState<Number>();
    const [sendCurrency, setSendCurrency] = useState("AUD");
    const [targetCurrency, setTargetCurrency] = useState("NPR");
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
                setTargetCurrency(value);
                fetch(`https://open.er-api.com/v6/latest/${sendCurrency}`)
                .then((res) => res.json())
                .then((data) => {
                    const rates: ExchangeRates = data.rates;
                    if (rates[value]) {
                        setExchangeRate(rates[value]);
                        setReceiveInputValue((Number(sendInputValue) * rates[value]).toFixed(2) )
                    }
                })
                .catch((error) => console.error('Error fetching exchange rate:', error));
                
                
                break;
            case 'sendCurrency':
                console.log("Reached sendCurrency");

                // console log - send value
                console.log("Send value", sendInputValue);
                // console log - send currency? 3 char.
                console.log("send currency:",value)
                // console log - target currency? 3 char.
                console.log("Target currency:",targetCurrency)

                break;
            default:
                // do nothing
                break;
        }
        
    }
    
    useEffect(() => {
        
        fetch(`https://open.er-api.com/v6/latest/${sendCurrency}`)
        .then((res) => res.json())
        .then((data) => {
            const currencyCodes = Object.keys(data.rates);
            setCountryNames(currencyCodes);
            setExchangeRate(data.rates[targetCurrency])
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
                <select name="sendCurrency" value={sendCurrency} onChange={(e) => handleChange(e)}>
                    {
                        countryNames.map(countryName => <option key={countryName}>{countryName}</option>)
                    }
                </select>
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