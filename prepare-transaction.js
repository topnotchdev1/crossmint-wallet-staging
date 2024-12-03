// Your wallet address generated in the previous step
const walletAddress = "0x...";

// Enter desired destination address
const toAddress = "0x...";

async function createTransaction(walletAddress, toAddress, apiKey) {
    const response = await fetch(
        `https://staging.crossmint.com/api/v1-alpha2/wallets/${walletAddress}/transactions`,
        {
            method: "POST",
            headers: {
                "X-API-KEY": apiKey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                params: {
                    calls: [{
                        to: toAddress,
                        value: "1000000000000000000", // 1 ETH in wei
                        data: "0x"
                    }],
                    chain: "base-sepolia",
                    signer: "evm-keypair:YOUR_SIGNER_ADDRESS"
                }
            })
        }
    );
    
    return await response.json();
}
