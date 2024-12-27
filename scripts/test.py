from web3 import Web3
from dotenv import load_dotenv
import os
import json



# Fetch  environment variables
load_dotenv()

private_key = os.getenv("MMASK_PK")
my_address = os.getenv("SEPOLIA_ADDY")
RPC_URL = os.getenv("SEPOLIA_URL")

if private_key:
    print("Private Key loaded successfully!")
else:
    print("Failed to load private key. Ensure it's set in the environment variables.")

if my_address:
    print("Wallet Address successfully loaded!")
else:
    print("Failed to load wallet address. Ensure it's set in the environment variables.")

if RPC_URL:
    print("RPC URL successfully loaded!")
else:
    print("Failed to load RPC URL. Ensure it's set in the environment variables.")

# Connect  your RPC URL
web3 = Web3(Web3.HTTPProvider(RPC_URL))

# Check connection
if web3.isConnected():
    print(f"Connected to Sepolia! Current Block: {web3.eth.block_number}")
else:
    print("Failed to connect to Sepolia.")

# Check your SepoliaETH balance
balance = web3.eth.get_balance(my_address)
print(f"Wallet Balance: {web3.fromWei(balance, 'ether')} SepoliaETH")



