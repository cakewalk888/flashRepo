from web3 import Web3
import os
import json

# Fetch private key from environment variable
private_key = os.getenv("MMASK_PK")

if private_key:
    print("Private key loaded successfully!")
else:
    print("Failed to load private key. Ensure it's set in the environment variables.")

# Fetch wallet adress from environment variable
my_address = os.getenv("SEPOLIA_ADDY")

if my_address:
    print("Wallet Adress successfully loaded!")
else:
    print("Failed to load wallet address. Ensure its in the env variable.")

# Replace with your RPC URL
RPC_URL = "https://sepolia.infura.io/v3/08169f90a2d94267b38bbf38e07cfd8e"
web3 = Web3(Web3.HTTPProvider(RPC_URL))

# Check connection
if web3.isConnected():
    print(f"Connected to Sepolia! Current Block: {web3.eth.block_number}")
else:
    print("Failed to connect to Sepolia.")

# Check your SepoliaETH balance
balance = web3.eth.get_balance(my_address)
print(f"Wallet Balance: {web3.fromWei(balance, 'ether')} SepoliaETH")



