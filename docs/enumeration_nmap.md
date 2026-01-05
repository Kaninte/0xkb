# Nmap

## Commands

### Host Discovery
**Scan Ranges**
```bash
nmap 192.168.0.1-10 # range
nmap 192.168.0.1/24 # subnet
```
**Flags**
```bash
-sL # list scan targets (without scanning)
```

### Port Scan
**Flags**
```bash
-p[range] # Port number range. '-p-' scans all ports
-Pn # Scan hosts that appear down

-sT # TCP 3-way handshake
-sS # TCP SYN only (stealth)
-sU # UDP Scan

-sN #Null Scan (stealth/firewall)
```

### Further Enumeration
```bash
-O # OS detection
-sV # Service/Version detection
-A # OS/Service/Version detection

--traceroute # Perform traceroute to target
```

### Timing/Speed
**Timing Flags**
```bash
-T 0 # paranoid @9.8hours /100ports
-T 1 # sneaky @27.53mins /100ports
-T 2 # polite @40.56secs /100ports
-T 3 # normal @0.15secs /100ports
-T 4 # aggressive @0.13sec /100ports
```
**Rate Flags**
```bash
--min-parallelism <numprobes> # min number of parallel probes
--max-parallelism <numprobes> # max number of parallel probes
--min-rate <number> # min rate (packets/sec)
--max-rate <number> # max rate (packets/sec)
--host-timeout # Max time to wait for target
```

### Verbosity/Debug
**Flags**
```bash
-v # verbosity, increase level with more v's (-vvv) or define a level (-v3)
-d # debug, define a level up to 9 (-d9)
```
**Saving Scans**
```bash
-oN <filename> # Normal output
-oX <filename> # XML output
-oG <filename> # Grep-able output
-oA <filename> # Output all formats
```