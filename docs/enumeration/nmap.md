# Nmap

## Quick Reference
```shell
# default port scans for lab environments
nmap -sS -T4 {target ip}
nmap -sV -T4 -p{ports} {target ip}
```

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
-p[range] # port number range. '-p-' scans all ports
-Pn # scan hosts that appear down

-sT # tcp 3-way handshake
-sS # tcp syn only (stealth)
-sU # udp Scan

-sN # null Scan (stealth/firewall)
```

### Further Enumeration
```bash
-O # os detection
-sV # service/version detection
-A # os/service/version detection

--traceroute # perform traceroute to target
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
--host-timeout # max time to wait for target
```

### Verbosity/Debug
**Flags**
```bash
-v # verbosity, increase level with more v's (-vvv) or define a level (-v3)
-d # debug, define a level up to 9 (-d9)
```
**Saving Scans**
```bash
-oN <filename> # normal output
-oX <filename> # xml output
-oG <filename> # grep-able output
-oA <filename> # output all formats
```
