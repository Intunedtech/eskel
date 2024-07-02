import { useState, useEffect } from 'react';
import styles from './styles.module.css';

interface ExchangeRates {
    [key: string]: number;
}

export const calculateReceiveAmount = (SendAmount:number , ExchangeRate:number): number => {
    return +( (SendAmount * ExchangeRate).toFixed(2) );
}
export const calculateSendAmount = (ReceiveAmount:number , ExchangeRate:number): number => {
    return +( (ReceiveAmount / ExchangeRate).toFixed(2) );
}

const CurrencyConverter = () => {
    const [sendInputValue, setSendInputValue] = useState("");
    const [receiveInputValue, setReceiveInputValue] = useState("");
    const [exchangeRate, setExchangeRate] = useState<number>(0);
    const [sendCurrency, setSendCurrency] = useState("AUD");
    const [targetCurrency, setTargetCurrency] = useState("NPR");
    const [countryNames, setCountryNames] = useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        
        switch (name) {
            case 'send':
                console.log("handling send");
                var sendAmount = value;
                var receiveAmount = calculateReceiveAmount(+sendAmount, exchangeRate)  as unknown as string;
                setSendInputValue(sendAmount);
                setReceiveInputValue(receiveAmount)
                break;
            case 'recieve':
                console.log("handling recieve");
                var receiveAmount = value;
                var sendAmount = calculateSendAmount(+receiveAmount, exchangeRate)  as unknown as string;
                setReceiveInputValue(value);
                setSendInputValue((Number(value) / Number(exchangeRate)).toFixed(2))
                break;
            case 'targetCurrency':
                setTargetCurrency(value);
                fetch(`https://open.er-api.com/v6/latest/${sendCurrency}`)
                    .then((res) => res.json())
                    .then((data) => {
                        const rates: ExchangeRates = data.rates;
                        if (rates[value]) {
                            var sendAmount = sendInputValue;
                            var receiveAmount = calculateReceiveAmount(+sendAmount, rates[value])  as unknown as string;
                            setExchangeRate(rates[value]);
                            setReceiveInputValue(receiveAmount)
                        }
                    })
                    .catch((error) => console.error('Error fetching exchange rate:', error));
                break;
            case 'sendCurrency':
                setSendCurrency(value);
                fetch(`https://open.er-api.com/v6/latest/${value}`)
                    .then((res) => res.json())
                    .then((data) => {
                        const rates: ExchangeRates = data.rates;
                        if (rates[targetCurrency]) {
                            var sendAmount = sendInputValue;
                            var receiveAmount = calculateReceiveAmount(+sendAmount, rates[targetCurrency])  as unknown as string;
                            setExchangeRate(rates[targetCurrency]);
                            setReceiveInputValue(receiveAmount)
                        }
                    })
              break;
            default:
                // do nothing
                break;
        }

    }

    useEffect(() => {
        //Fetch a list of currency codes and set exchange rate
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