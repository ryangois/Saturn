import os
import subprocess

def show_menu():
    print("Unified Cybersecurity Toolkit")
    print("1. Network Analyzer")
    print("2. Password Vault")
    print("3. File Integrity Monitor")
    print("4. File Converter")
    print("5. Log Analyzer")
    print("6. Threat Intelligence Feed")
    print("7. Encrypted File Storage")
    choice = input("Choose an option: ")

    if choice == "1":
        subprocess.run(["python", "backend/network_analyzer/analyzer.py"])
    elif choice == "2":
        subprocess.run(["go", "run", "backend/password_vault/vault.go"])
    elif choice == "3":
        subprocess.run(["cargo", "run", "--manifest-path=backend/file_integrity/Cargo.toml"])
    elif choice == "4":
        subprocess.run(["python", "backend/file_converter/converter.py"])
    elif choice == "5":
        subprocess.run(["python", "backend/log_analyzer/analyzer.py"])
    elif choice == "6":
        subprocess.run(["python", "backend/threat_intel/feed.py"])
    elif choice == "7":
        subprocess.run(["go", "run", "backend/encrypted_storage/storage.go"])
    else:
        print("Invalid option")

if __name__ == "__main__":
    show_menu()