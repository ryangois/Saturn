from scapy.all import sniff, TCP

def analyze_packet(packet):
    if packet.haslayer(TCP):
        if packet[TCP].flags == "S":  # SYN flag
            print(f"[ALERT] Potential SYN scan detected from {packet[IP].src}")

print("Starting network analyzer...")
sniff(prn=analyze_packet, filter="tcp", store=0)