import React, { useEffect, useState } from 'react'

export default function useCurrencyInfo(currency = 'inr') {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://currency-rate-exchange-api.onrender.com/${currency}`)
            .then((response) => response.json()) //convert row data to json format
            .then((response) => setData(response));
    }, [currency]);
    console.log(data);
    return data;
}
