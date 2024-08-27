const options = {
    method: "POST",
    headers: {
        "X-API-KEY": "<sk_staging_35NkUxH5mFcr5JGTQtSCjmMbkjbNd7RDwoG65ejJ1WHpnc2cXvAvQtk8Gg9rgYuvW991TB1ZExfwiXLUFUwBQHMDtdtTUU4TMu76vrkjhobFSsAMYAhmTJjLMPS7xxyaYb8XVFxjsqR2fHQVLYJv1geikB1VzqZF88Eim6G3mSYgwmBUgWMLNb3UYBVoHPA1JvnXh28dxBeVhm92TMfR5AZ>",
        "Content-Type": "application/json",
    },
    body: '{"email": "testy@crossmint.com", "chain": "polygon-amoy"}',
};

fetch("https://staging.crossmint.com/api/v1-alpha1/wallets", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
