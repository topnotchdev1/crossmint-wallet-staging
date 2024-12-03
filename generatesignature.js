
import { signMessage } from "viem/accounts";

// Private key to be used for signing. Replace with your actual private key
const privateKey = "0x...";

const account = privateKeyToAccount(key);
const userOpHash = response.approvals.pending[0].message;
const signature = await signMessage({
    message: { raw: userOpHash },
    privateKey: key,
});
