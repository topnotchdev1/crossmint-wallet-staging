// Your public key generated in the previous step
const signerPublicKey = "0x...";

// Crossmint's API key  
const apiKey = "sk_staging_ABAxUH7V4sFwmTTAxsRtiGRVNVz5hmiBtLxMko7CpeQxNU2zpqELwTHdVhXvKEZrCbQC2wyWQLgeMqHSfk1hsSchXH5T5qUU6bohoMydcHzxSep5Y5BVL7kHMn3z5eXUxAcGEqT4C6bb4GXDzPjmzppjbm5epCUipaTot4PjZLG3gm9KNbx7PZywfYGpEJ4JaAKHi3mYWzAh6N21zhS2PAes";

async function createWallet(signerPublicKey, apiKey) {
    const response = await fetch("https://staging.crossmint.com/api/v1-alpha2/wallets", {
        method: "POST",
        headers: {
            "X-API-KEY": apiKey,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            type: "evm-smart-wallet",
            config: {
                adminSigner: {
                    type: "evm-keypair",
                    address: signerPublicKey
                }
            }
        })
    });
    
    return await response.json();
}
