import re
from collections import defaultdict

def analyze_logs(log_file):
    failed_attempts = defaultdict(int)
    suspicious_ips = set()

    with open(log_file, "r") as file:
        for line in file:
            # Example: Detect failed SSH login attempts
            if "Failed password" in line:
                ip_match = re.search(r"from (\d+\.\d+\.\d+\.\d+)", line)
                if ip_match:
                    ip = ip_match.group(1)
                    failed_attempts[ip] += 1
                    if failed_attempts[ip] > 5:  # Threshold for suspicious activity
                        suspicious_ips.add(ip)

    if suspicious_ips:
        print("[ALERT] Suspicious activity detected from the following IPs:")
        for ip in suspicious_ips:
            print(f"- {ip} (Failed attempts: {failed_attempts[ip]})")
    else:
        print("No suspicious activity detected.")

if __name__ == "__main__":
    analyze_logs("/var/log/auth.log")