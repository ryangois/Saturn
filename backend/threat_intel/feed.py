import requests

from dotenv import load_dotenv
import os

load_dotenv()
api_key = os.getenv("VIRUSTOTAL_API_KEY")

def fetch_threat_intel(ip):
    api_key = os.getenv("VIRUSTOTAL_API_KEY")  # Use environment variable for API key
    url = f"https://www.virustotal.com/api/v3/ip_addresses/{ip}"
    headers = {"x-apikey": api_key}

    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        data = response.json()
        if data["data"]["attributes"]["last_analysis_stats"]["malicious"] > 0:
            print(f"[ALERT] IP {ip} is flagged as malicious by VirusTotal!")
        else:
            print(f"IP {ip} is clean.")
    else:
        print("Failed to fetch threat intelligence data.")

if __name__ == "__main__":
    ip = input("Enter IP address to check: ")
    fetch_threat_intel(ip)