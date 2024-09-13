const options = {
    method: "POST",
    headers: {
        "X-API-KEY": "sk_production_5NzSc85eDo6Xg8m7qogGC4gNmQn6sQKCKpJ8DYY81GGTTRTYhB2DUPGgsfBmiK7qgpwFc9zL3eGojzEENKWkdmTQ8ynkoDjkEziTGuzazhN3cwFrwLUstQXxhcVTLSbLgp89M3d2Rm4hPbVZSr62vQFPxL6hRRRDKAzUsg9YM46BB2SYrVTJ6JqBA9VZKoovnXmxidXed119WHFU8EaPNVLH",
    },
    body: '{"email": "testy@crossmint.com", "chain": "polygon-amoy"}',
};

fetch("https://staging.crossmint.com/api/v1-alpha1/wallets", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
