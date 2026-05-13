export const networkSecurityContent = {

  // ==========================================
  // SECTION 1: NETWORK FUNDAMENTALS
  // ==========================================

  v6c1: `
    <h3>Network Security Overview</h3>
    <p>
      <strong>Network security</strong> encompasses the <strong>policies, practices, and technologies</strong> designed to protect the <strong>integrity, confidentiality, and availability</strong> of computer networks and data. It covers everything from physical infrastructure to application-layer controls.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Defense in Depth</div>
      <p>No single security control can protect a network. <strong>Defense in depth</strong> layers multiple controls — physical, technical, and administrative — so that if one fails, others compensate. Think of it as concentric rings of security around your most valuable assets.</p>
    </div>

    <h4>The CIA Triad in Networking</h4>
    <table>
      <thead>
        <tr><th>Principle</th><th>Meaning in Networking</th><th>Controls</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Confidentiality</strong></td><td>Only authorized users access data</td><td>Encryption, access controls, VPNs</td></tr>
        <tr><td><strong>Integrity</strong></td><td>Data is not tampered with in transit</td><td>Hashing, digital signatures, TLS</td></tr>
        <tr><td><strong>Availability</strong></td><td>Network and services remain accessible</td><td>Redundancy, DDoS protection, failover</td></tr>
      </tbody>
    </table>

    <h4>Key Network Security Concepts</h4>
    <ul>
      <li><strong>Zero Trust:</strong> Never trust, always verify — every user, device, and connection</li>
      <li><strong>Least Privilege:</strong> Grant minimum access necessary for each role</li>
      <li><strong>Microsegmentation:</strong> Divide networks into small, isolated zones</li>
      <li><strong>Defense in Depth:</strong> Multiple overlapping security layers</li>
      <li><strong>Assume Breach:</strong> Design for the scenario where perimeter is already compromised</li>
      <li><strong>Secure by Default:</strong> Ship with most restrictive settings enabled</li>
    </ul>

    <h4>Network Security Threat Landscape</h4>
    <table>
      <thead>
        <tr><th>Threat Category</th><th>Examples</th><th>Impact</th></tr>
      </thead>
      <tbody>
        <tr><td>Unauthorized Access</td><td>Brute force, credential stuffing, stolen credentials</td><td>Data breach, lateral movement</td></tr>
        <tr><td>Malware</td><td>Ransomware, trojans, worms, spyware</td><td>Data destruction, exfiltration, extortion</td></tr>
        <tr><td>DDoS</td><td>Volumetric, protocol, application-layer floods</td><td>Service disruption, financial loss</td></tr>
        <tr><td>Man-in-the-Middle</td><td>ARP spoofing, DNS hijacking, SSL stripping</td><td>Data interception, credential theft</td></tr>
        <tr><td>Advanced Persistent Threats</td><td>State-sponsored, targeted, long-duration attacks</td><td>Espionage, intellectual property theft</td></tr>
        <tr><td>Insider Threats</td><td>Malicious or negligent employees</td><td>Data breach, sabotage</td></tr>
      </tbody>
    </table>
  `,

  v6c2: `
    <h3>OSI Model Security</h3>
    <p>
      <strong>The OSI (Open Systems Interconnection) model</strong> provides a <strong>7-layer framework</strong> for understanding how data flows through a network. Each layer has unique security concerns and corresponding controls. Understanding security at each layer is essential for building comprehensive network defenses.
    </p>

    <h4>Security at Each OSI Layer</h4>
    <table>
      <thead>
        <tr><th>Layer</th><th>Name</th><th>Security Concerns</th><th>Protections</th></tr>
      </thead>
      <tbody>
        <tr><td>7</td><td>Application</td><td>SQL injection, XSS, CSRF, session hijacking</td><td>Input validation, WAF, secure coding, HTTPS</td></tr>
        <tr><td>6</td><td>Presentation</td><td>Data format exploits, encryption weaknesses</td><td>TLS/SSL, proper encoding, certificate validation</td></tr>
        <tr><td>5</td><td>Session</td><td>Session hijacking, fixation, replay attacks</td><td>Secure session management, TLS, token binding</td></tr>
        <tr><td>4</td><td>Transport</td><td>TCP hijacking, SYN floods, port scanning</td><td>TLS, TCP wrappers, SYN cookies, rate limiting</td></tr>
        <tr><td>3</td><td>Network</td><td>IP spoofing, routing attacks, reconnaissance</td><td>IPsec, firewalls, ACLs, anti-spoofing</td></tr>
        <tr><td>2</td><td>Data Link</td><td>ARP spoofing, MAC flooding, VLAN hopping</td><td>Dynamic ARP Inspection, port security, 802.1X</td></tr>
        <tr><td>1</td><td>Physical</td><td>Hardware tampering, cable tapping, theft</td><td>Physical access controls, cable encryption, tamper detection</td></tr>
      </tbody>
    </table>

    <h4>Why Layer Awareness Matters</h4>
    <ul>
      <li><strong>Comprehensive defense:</strong> Controls at different layers catch different attack types</li>
      <li><strong>Troubleshooting:</strong> Isolating problems to a specific layer speeds diagnosis</li>
      <li><strong>Attack surface mapping:</strong> Identify which layers your application exposes</li>
      <li><strong>Protocol selection:</strong> Choose appropriate security protocols per layer</li>
    </ul>
  `,

  v6c3: `
    <h3>TCP/IP Security</h3>
    <p>
      <strong>TCP/IP</strong> is the foundational protocol suite of the internet. Understanding its security implications is critical because <strong>many attacks exploit weaknesses in TCP/IP protocols</strong> or their implementations.
    </p>

    <h4>TCP Protocol Security</h4>
    <table>
      <thead>
        <tr><th>Attack</th><th>Description</th><th>Mitigation</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>SYN Flood</strong></td><td>Flood with SYN packets, exhaust connection table</td><td>SYN cookies, rate limiting, firewalls</td></tr>
        <tr><td><strong>TCP Sequence Prediction</strong></td><td>Predict sequence numbers to hijack sessions</td><td>Randomize ISN, use TLS, VPN</td></tr>
        <tr><td><strong>TCP Reset Attack</strong></td><td>Send forged RST to tear down connections</td><td>TCP-AO, IPsec, network segmentation</td></tr>
        <tr><td><strong>TCP Connection Hijacking</strong></td><td>Inject packets into existing connection</td><td>Encryption (TLS/VPN), sequence randomization</td></tr>
        <tr><td><strong>Fragmentation Attacks</strong></td><td>Exploit IP/TCP fragmentation reassembly</td><td>Block fragments at firewall, update OS</td></tr>
      </tbody>
    </table>

    <h4>UDP Security Considerations</h4>
    <ul>
      <li><strong>No connection state:</strong> UDP has no handshake — easier to spoof and flood</li>
      <li><strong>Amplification attacks:</strong> Small request produces large response (DNS, NTP)</li>
      <li><strong>DNS over HTTPS/TLS:</strong> Encrypt DNS to prevent sniffing and manipulation</li>
      <li><strong>QUIC Protocol:</strong> Modern UDP-based transport with built-in encryption (HTTP/3)</li>
    </ul>

    <h4>Hardening TCP/IP Stack</h4>
    <pre><code>
# Linux TCP/IP hardening (sysctl)
net.ipv4.conf.all.rp_filter = 1
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.all.send_redirects = 0
net.ipv4.conf.all.accept_source_route = 0
net.ipv4.conf.all.log_martians = 1
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_max_syn_backlog = 2048
net.ipv4.conf.all.forwarding = 0
</code></pre>

    <div class="info-box">
      <div class="info-title">💡 VPN vs TLS</div>
      <p><strong>TLS</strong> encrypts application data end-to-end. <strong>VPN/IPsec</strong> encrypts all traffic between two endpoints at the network layer. Use TLS for application security and VPNs for <strong>site-to-site</strong> or <strong>remote access</strong> scenarios.</p>
    </div>
  `,

  v6c4: `
    <h3>DNS Security</h3>
    <p>
      <strong>The Domain Name System (DNS)</strong> is the <strong>"phone book of the internet"</strong> — translating human-readable domain names to IP addresses. DNS was designed with <strong>no security</strong> and is vulnerable to multiple attack types.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: DNS is a Trust Problem</div>
      <p>DNS queries travel in <strong>plaintext by default</strong>, can be <strong>spoofed</strong>, and are susceptible to <strong>cache poisoning</strong>. Every application depends on DNS — if compromised, everything fails.</p>
    </div>

    <h4>DNS Attack Types</h4>
    <table>
      <thead>
        <tr><th>Attack</th><th>How It Works</th><th>Impact</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>DNS Spoofing/Cache Poisoning</strong></td><td>Injecting false DNS records into resolver cache</td><td>Traffic redirected to malicious servers</td></tr>
        <tr><td><strong>DNS Hijacking</strong></td><td>Compromising DNS registrar or resolvers</td><td>Complete domain takeover</td></tr>
        <tr><td><strong>DNS Tunneling</strong></td><td>Encoding data in DNS queries/responses</td><td>Data exfiltration, C2 communication</td></tr>
        <tr><td><strong>DNS Amplification DDoS</strong></td><td>Small query triggers large response to victim</td><td>Bandwidth exhaustion</td></tr>
        <tr><td><strong>DNS Rebinding</strong></td><td>DNS resolves to internal IP then external</td><td>Bypassing same-origin policy</td></tr>
      </tbody>
    </table>

    <h4>DNS Security Solutions</h4>
    <table>
      <thead>
        <tr><th>Technology</th><th>What It Does</th><th>Status</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>DNSSEC</strong></td><td>Cryptographic signatures for DNS response authenticity</td><td>Deployed, adoption growing</td></tr>
        <tr><td><strong>DNS over TLS (DoT)</strong></td><td>Encrypts DNS queries over TLS (port 853)</td><td>RFC 7858</td></tr>
        <tr><td><strong>DNS over HTTPS (DoH)</strong></td><td>DNS queries via HTTPS (port 443)</td><td>RFC 8484</td></tr>
      </tbody>
    </table>

    <h4>DNS Security Best Practices</h4>
    <ol>
      <li><strong>Use secure DNS resolvers:</strong> Cloudflare (1.1.1.1), Google (8.8.8.8) with DoH/DoT</li>
      <li><strong>Implement DNSSEC:</strong> Sign zones and validate on resolvers</li>
      <li><strong>Monitor DNS traffic:</strong> Detect tunneling, unusual queries</li>
      <li><strong>Restrict zone transfers:</strong> Use TSIG keys, limit to authorized secondaries</li>
      <li><strong>Use DNS firewalls:</strong> Block known malicious domains</li>
    </ol>
  `,

  v6c5: `
    <h3>ARP Security</h3>
    <p>
      <strong>Address Resolution Protocol (ARP)</strong> maps <strong>IP addresses to MAC addresses</strong> on local networks. Because ARP is a <strong>trust-based protocol with no authentication</strong>, it is vulnerable to spoofing attacks.
    </p>

    <div class="warning-box">
      <div class="warning-title">⚠️ Why ARP is Inherently Insecure</div>
      <p>ARP was designed in an era of <strong>trusted local networks</strong>. Any device can send a fake ARP reply claiming any IP-MAC mapping — and other devices accept it without verification.</p>
    </div>

    <h4>ARP Attack Types</h4>
    <table>
      <thead>
        <tr><th>Attack</th><th>Description</th><th>Impact</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>ARP Spoofing (Poisoning)</strong></td><td>Fake ARP replies mapping attacker MAC to gateway IP</td><td>Full Man-in-the-Middle</td></tr>
        <tr><td><strong>ARP Flooding</strong></td><td>Flood with ARP packets to exhaust switch CAM table</td><td>Switch acts as hub — broadcast all traffic</td></tr>
        <tr><td><strong>Man-in-the-Middle</strong></td><td>Intercept and modify traffic between two parties</td><td>Data theft, credential capture</td></tr>
      </tbody>
    </table>

    <h4>ARP Security Defenses</h4>
    <table>
      <thead>
        <tr><th>Defense</th><th>How It Works</th><th>Implementation</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Dynamic ARP Inspection (DAI)</strong></td><td>Switches validate ARP against DHCP snooping table</td><td>Cisco: <code>ip arp inspection vlan X</code></td></tr>
        <tr><td><strong>Static ARP Entries</strong></td><td>Manually set IP-MAC for critical devices</td><td><code>arp -s gateway_ip gateway_mac</code></td></tr>
        <tr><td><strong>802.1X Authentication</strong></td><td>Authenticate devices before network access</td><td>RADIUS + 802.1X switches</td></tr>
        <tr><td><strong>Encryption (VPN/TLS)</strong></td><td>Traffic encrypted even if ARP is spoofed</td><td>IPsec, TLS</td></tr>
        <tr><td><strong>Network Segmentation</strong></td><td>Limit ARP scope to smaller domains</td><td>VLANs, subnetting</td></tr>
      </tbody>
    </table>
  `,

  v6c6: `
    <h3>DHCP Security</h3>
    <p>
      <strong>Dynamic Host Configuration Protocol (DHCP)</strong> automatically assigns <strong>IP addresses and network configuration</strong> to devices. DHCP's trust-based design creates security vulnerabilities that attackers can exploit.
    </p>

    <h4>DHCP Attack Types</h4>
    <table>
      <thead>
        <tr><th>Attack</th><th>How It Works</th><th>Impact</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>DHCP Starvation</strong></td><td>Request all available IPs using spoofed MACs</td><td>DoS — legitimate users can't connect</td></tr>
        <tr><td><strong>Rogue DHCP Server</strong></td><td>Attacker sets up fake DHCP offering malicious config</td><td>MITM — traffic redirected through attacker</td></tr>
        <tr><td><strong>DHCP Spoofing</strong></td><td>Forged DHCP responses redirect DNS/gateway</td><td>DNS hijacking, traffic interception</td></tr>
      </tbody>
    </table>

    <h4>DHCP Security Controls</h4>
    <pre><code>
# Cisco IOS DHCP Snooping configuration
ip dhcp snooping
ip dhcp snooping vlan 10,20,30

# Trust legitimate DHCP server ports
interface GigabitEthernet0/1
  ip dhcp snooping trust

# Rate limit on untrusted ports
interface range GigabitEthernet0/2-24
  ip dhcp snooping limit rate 15
</code></pre>

    <ol>
      <li><strong>DHCP Snooping:</strong> Builds a binding table of MAC-IP-lease; blocks rogue DHCP servers</li>
      <li><strong>Dynamic ARP Inspection (DAI):</strong> Validates ARP using DHCP snooping binding database</li>
      <li><strong>IP Source Guard:</strong> Filters based on DHCP snooping table to prevent IP spoofing</li>
      <li><strong>Static IP for critical devices:</strong> Servers, printers, network devices should use static IPs</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 Defense in Depth for DHCP</div>
      <p>Layer your defenses: <strong>DHCP Snooping</strong> + <strong>DAI</strong> + <strong>IP Source Guard</strong> + <strong>802.1X</strong> provides comprehensive protection against all DHCP-based attacks.</p>
    </div>
  `,

  v6c7: `
    <h3>VLAN Security</h3>
    <p>
      <strong>Virtual LANs (VLANs)</strong> are a fundamental <strong>network segmentation</strong> technology. While they improve network organization, they have well-known security limitations.
    </p>

    <h4>VLAN Security Risks</h4>
    <table>
      <thead>
        <tr><th>Risk</th><th>Attack Type</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>VLAN Hopping</td><td>Double tagging (802.1Q nested)</td><td>Switch strips outer tag, forwards to unintended VLAN</td></tr>
        <tr><td>VLAN Hopping</td><td>Switch spoofing (DTP)</td><td>Attacker tricks switch into trunk mode, accesses all VLANs</td></tr>
        <tr><td>Spanning Tree Attacks</td><td>STP manipulation</td><td>Attacker becomes root bridge, controls traffic flow</td></tr>
      </tbody>
    </table>

    <h4>VLAN Hardening</h4>
    <pre><code>
# Disable DTP on all access ports (THE #1 STEP)
interface range FastEthernet0/1-48
  switchport mode access
  switchport nonegotiate

# Explicit trunk configuration
interface GigabitEthernet0/1
  switchport mode trunk
  switchport trunk allowed vlan 10,20,30
  switchport trunk native vlan 99  # Unused VLAN

# Enable BPDU Guard
spanning-tree portfast bpduguard default

# Enable Root Guard
interface GigabitEthernet0/1
  spanning-tree guard root
</code></pre>

    <ol>
      <li><strong>Disable DTP on all ports:</strong> <code>switchport nonegotiate</code> prevents trunk negotiation attacks</li>
      <li><strong>Use dedicated management VLAN:</strong> Separate management from data</li>
      <li><strong>Implement 802.1X:</strong> Authenticate devices before VLAN assignment</li>
      <li><strong>Apply ACLs between VLANs:</strong> Explicit allow/deny rules</li>
      <li><strong>Private VLANs (PVLANs):</strong> For extra isolation in shared environments</li>
    </ol>
  `,

  v6c8: `
    <h3>VPN Technologies</h3>
    <p>
      <strong>Virtual Private Networks (VPNs)</strong> create <strong>encrypted tunnels</strong> over untrusted networks, enabling <strong>secure remote access</strong> and site-to-site connectivity.
    </p>

    <h4>VPN Types</h4>
    <table>
      <thead>
        <tr><th>Type</th><th>Use Case</th><th>Protocol</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Site-to-Site IPsec</strong></td><td>Connect branch offices, cloud VPCs</td><td>IKEv2/IPsec</td></tr>
        <tr><td><strong>Remote Access SSL VPN</strong></td><td>Individual user remote access</td><td>TLS (HTTPS-based)</td></tr>
        <tr><td><strong>WireGuard</strong></td><td>Modern, lightweight VPN</td><td>UDP, ChaCha20</td></tr>
        <tr><td><strong>OpenVPN</strong></td><td>Flexible open-source VPN</td><td>SSL/TLS</td></tr>
        <tr><td><strong>Cloud VPN</strong></td><td>AWS, Azure, GCP VPN gateways</td><td>IKEv2/IPsec</td></tr>
      </tbody>
    </table>

    <h4>IPsec VPN Best Practices</h4>
    <ul>
      <li>Use <strong>IKEv2</strong> over IKEv1 (more secure, supports roaming)</li>
      <li>Configure <strong>AES-256-GCM</strong> for encryption, <strong>SHA-384/512</strong> for integrity</li>
      <li>Prefer <strong>certificate-based auth</strong> over pre-shared keys</li>
      <li>Enable <strong>Perfect Forward Secrecy (PFS)</strong> for unique session keys</li>
    </ul>

    <h4>Zero Trust Network Access (ZTNA)</h4>
    <p><strong>ZTNA replaces traditional VPN</strong> with application-level access:</p>
    <ul>
      <li>Users connect to <strong>specific applications</strong>, not the entire network</li>
      <li>Access based on <strong>identity, device posture, and context</strong></li>
      <li>Applications are <strong>invisible until authenticated</strong></li>
      <li>Tools: Zscaler, Cloudflare Access, Tailscale</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 WireGuard — Modern VPN</div>
      <p><strong>WireGuard</strong>: ~4,000 lines of auditable code, state-of-the-art crypto (ChaCha20, Curve25519), built into Linux kernel since 5.6. Simpler, faster, and more secure than IPsec/OpenVPN.</p>
    </div>
  `,

  // ==========================================
  // SECTION 2: PERIMETER SECURITY
  // ==========================================

  v6c9: `
    <h3>Firewall Architecture</h3>
    <p>
      <strong>Firewalls</strong> are the <strong>first line of defense</strong>, controlling <strong>inbound and outbound traffic</strong> based on predefined rules. Modern firewalls have evolved from simple packet filters to <strong>next-generation firewalls (NGFW)</strong> that inspect traffic at multiple layers.
    </p>

    <h4>Types of Firewalls</h4>
    <table>
      <thead>
        <tr><th>Type</th><th>Layer</th><th>Capabilities</th></tr>
      </thead>
      <tbody>
        <tr><td>Packet Filtering</td><td>3-4</td><td>IP, port, protocol filtering</td></tr>
        <tr><td>Stateful Inspection</td><td>3-4</td><td>Tracks connection state</td></tr>
        <tr><td>Application Proxy</td><td>7</td><td>Full content inspection</td></tr>
        <tr><td>Next-Gen (NGFW)</td><td>2-7</td><td>IPS, DPI, app awareness, TLS inspection</td></tr>
        <tr><td>WAF</td><td>7</td><td>HTTP/HTTPS specific, OWASP Top 10</td></tr>
      </tbody>
    </table>

    <h4>Firewall Rule Design</h4>
    <ol>
      <li><strong>Default deny:</strong> Deny all, allow only explicitly permitted traffic</li>
      <li><strong>Least privilege:</strong> Specify source, destination, port, protocol</li>
      <li><strong>Explicit rules first:</strong> Specific rules above general ones</li>
      <li><strong>Log and alert:</strong> Log denied traffic; alert on patterns</li>
      <li><strong>Regular review:</strong> 60%+ of firewall rules are typically unused</li>
    </ol>

    <div class="key-box">
      <div class="key-title">🔑 Zero Trust & Firewalls</div>
      <p>Traditional firewalls enforce <strong>"trusted inside, untrusted outside."</strong> Zero Trust eliminates this: micro-perimeters around each workload, identity-aware access decisions, and east-west traffic inspection.</p>
    </div>
  `,

  v6c10: `
    <h3>IDS/IPS</h3>
    <p>
      <strong>Intrusion Detection Systems (IDS)</strong> and <strong>Intrusion Prevention Systems (IPS)</strong> monitor network traffic for <strong>suspicious activity and known attack patterns</strong>. IDS detects and alerts; IPS detects and <strong>actively blocks</strong> threats.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Signature vs. Anomaly</div>
      <p><strong>Signature-based:</strong> Matches known attack patterns (accurate, misses zero-days). <strong>Anomaly-based:</strong> Identifies deviations from baseline (catches novel attacks, higher false positive rate).</p>
    </div>

    <h4>IDS vs. IPS</h4>
    <table>
      <thead>
        <tr><th>Aspect</th><th>IDS</th><th>IPS</th></tr>
      </thead>
      <tbody>
        <tr><td>Placement</td><td>Out-of-band (monitors mirror)</td><td>Inline (traffic passes through)</td></tr>
        <tr><td>Action</td><td>Alerts and logs</td><td>Drops malicious packets</td></tr>
        <tr><td>Risk</td><td>No traffic impact</td><td>Can cause false positive outages</td></tr>
        <tr><td>Response</td><td>Depends on analyst</td><td>Immediate (milliseconds)</td></tr>
      </tbody>
    </table>

    <h4>Popular IDS/IPS Tools</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Type</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Suricata</strong></td><td>Open-source IDS/IPS</td><td>Multi-threaded, modern protocol support</td></tr>
        <tr><td><strong>Snort</strong></td><td>Open-source IDS</td><td>Industry standard, massive rule community</td></tr>
        <tr><td><strong>Zeek (Bro)</strong></td><td>Network analysis</td><td>Scriptable, excellent for forensics</td></tr>
      </tbody>
    </table>
  `,

  v6c11: `
    <h3>DDoS Protection</h3>
    <p>
      <strong>DDoS attacks</strong> attempt to <strong>overwhelm</strong> a system's resources. With attacks exceeding <strong>1 Tbps</strong>, DDoS remains one of the most common and disruptive attack types.
    </p>

    <div class="warning-box">
      <div class="warning-title">⚠️ DDoS Scale</div>
      <p>In 2023, the largest DDoS attack peaked at <strong>398 million requests per second</strong>. Average attack size exceeds <strong>10 Gbps</strong>.</p>
    </div>

    <h4>Attack Types</h4>
    <table>
      <thead>
        <tr><th>Category</th><th>Attack</th><th>Volume</th></tr>
      </thead>
      <tbody>
        <tr><td rowspan="2"><strong>Volumetric</strong></td><td>UDP Flood, DNS/NTP Amplification</td><td>Tbps</td></tr>
        <tr><td>ICMP Flood</td><td>Tbps</td></tr>
        <tr><td><strong>Protocol</strong></td><td>SYN Flood, Ping of Death</td><td>Gbps</td></tr>
        <tr><td><strong>Application Layer</strong></td><td>HTTP Flood, Slowloris</td><td>Low volume, hard to detect</td></tr>
      </tbody>
    </table>

    <h4>DDoS Protection Strategy</h4>
    <ol>
      <li><strong>Over-provision bandwidth:</strong> Baseline capacity to absorb spikes</li>
      <li><strong>Cloud mitigation provider:</strong> AWS Shield, Cloudflare, Akamai</li>
      <li><strong>Anycast distribution:</strong> Spread traffic across data centers</li>
      <li><strong>Rate limiting:</strong> Limit requests per client</li>
      <li><strong>Geographic filtering:</strong> Block unexpected regions</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 DDoS Response Playbook</div>
      <p>When under attack:<br>
      1. Identify attack type (volumetric, protocol, application)<br>
      2. Engage cloud mitigation / enable scrubbing<br>
      3. Apply aggressive rate limiting at edge<br>
      4. Notify ISP if upstream capacity is threatened<br>
      5. Capture traffic samples for forensic analysis</p>
    </div>
  `,

  v6c12: `
    <h3>WAF (Web Application Firewall)</h3>
    <p>
      <strong>Web Application Firewalls (WAFs)</strong> protect web applications by <strong>filtering HTTP/HTTPS traffic</strong> at the <strong>application layer (Layer 7)</strong>. They detect and block attacks like SQL injection, XSS, and other OWASP Top 10 threats.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: WAF ≠ Complete Security</div>
      <p>WAFs are <strong>one layer of defense</strong> — they cannot fix vulnerable code, prevent logic flaws, or replace secure coding practices. Use WAFs <strong>alongside</strong> other controls.</p>
    </div>

    <h4>What WAFs Protect Against</h4>
    <table>
      <thead>
        <tr><th>OWASP Category</th><th>WAF Detection</th></tr>
      </thead>
      <tbody>
        <tr><td>SQL Injection</td><td>Pattern matching on parameters</td></tr>
        <tr><td>XSS</td><td>Script tags, event handlers</td></tr>
        <tr><td>Path Traversal</td><td>Blocking ../ in URLs</td></tr>
        <tr><td>RCE</td><td>Command injection patterns</td></tr>
        <tr><td>Bot Traffic</td><td>Rate limiting, CAPTCHA</td></tr>
      </tbody>
    </table>

    <h4>WAF Deployment Modes</h4>
    <table>
      <thead>
        <tr><th>Mode</th><th>Pros</th><th>Cons</th></tr>
      </thead>
      <tbody>
        <tr><td>Block Mode</td><td>Active protection</td><td>False positive risk</td></tr>
        <tr><td>Monitor Mode</td><td>No user impact</td><td>No active blocking</td></tr>
        <tr><td>Reverse Proxy</td><td>SSL termination, caching</td><td>Latency</td></tr>
      </tbody>
    </table>

    <h4>WAF Providers</h4>
    <table>
      <thead>
        <tr><th>Provider</th><th>Key Features</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>AWS WAF</strong></td><td>AWS integration, managed rules, rate-based rules</td></tr>
        <tr><td><strong>Cloudflare WAF</strong></td><td>Global CDN, free tier, Managed Rulesets</td></tr>
        <tr><td><strong>Azure WAF</strong></td><td>Azure native, OWASP CRS</td></tr>
        <tr><td><strong>ModSecurity</strong></td><td>Open-source, highly customizable</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 WAF Tuning</div>
      <p>Deploy in <strong>monitor mode first</strong> (1-2 weeks), review false positives, create exclusions, then enable block mode for high-confidence rules. Continuously tune as the application evolves.</p>
    </div>
  `,

  v6c13: `
    <h3>Web Gateway</h3>
    <p>
      <strong>Secure Web Gateways (SWG)</strong> <strong>filter web traffic</strong> to enforce security policies and protect users from web-based threats. They sit between users and the internet, inspecting traffic in real-time.
    </p>

    <h4>SWG Capabilities</h4>
    <table>
      <thead>
        <tr><th>Function</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>URL Filtering</td><td>Block malicious/inappropriate websites</td></tr>
        <tr><td>Malware Scanning</td><td>Scan downloads in real-time</td></tr>
        <tr><td>Data Loss Prevention</td><td>Block sensitive data exfiltration via web</td></tr>
        <tr><td>SSL Inspection</td><td>Decrypt HTTPS traffic for inspection</td></tr>
        <tr><td>Application Control</td><td>Restrict which web apps can be used</td></tr>
        <tr><td>CASB Integration</td><td>Extend controls to SaaS applications</td></tr>
      </tbody>
    </table>

    <h4>Leading Solutions</h4>
    <table>
      <thead>
        <tr><th>Solution</th><th>Type</th><th>Standout Feature</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Zscaler</strong></td><td>Cloud</td><td>Zero Trust Exchange, inline CASB</td></tr>
        <tr><td><strong>Cisco Umbrella</strong></td><td>Cloud/DNS</td><td>DNS-layer security</td></tr>
        <tr><td><strong>Netskope</strong></td><td>Cloud</td><td>Granular CASB + DLP</td></tr>
        <tr><td><strong>Palo Alto Prisma SASE</strong></td><td>SASE</td><td>Converged SD-WAN + security</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 SWG vs WAF</div>
      <p><strong>WAFs</strong> protect <strong>your applications</strong> from attacks. <strong>SWGs</strong> protect <strong>your users</strong> from malicious websites and data exfiltration. Use both: WAF inbound, SWG outbound.</p>
    </div>
  `,

  v6c14: `
    <h3>Email Security</h3>
    <p>
      <strong>Email</strong> remains the <strong>#1 attack vector</strong> for cyber threats. Over <strong>90% of cyberattacks begin with a malicious email</strong>.
    </p>

    <h4>Email Threat Types</h4>
    <table>
      <thead>
        <tr><th>Threat</th><th>Description</th><th>Technique</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Phishing</strong></td><td>Deceptive emails impersonating trusted entities</td><td>Spoofed sender, malicious links</td></tr>
        <tr><td><strong>Spear Phishing</strong></td><td>Targeted phishing against specific individuals</td><td>Personalized content</td></tr>
        <tr><td><strong>BEC</strong></td><td>Impersonating executives for fraudulent transfers</td><td>Pure social engineering, no malware</td></tr>
        <tr><td><strong>Malware Attachments</strong></td><td>Emails with malicious files</td><td>Macro exploits, zero-days</td></tr>
        <tr><td><strong>Credential Harvesting</strong></td><td>Fake login pages</td><td>OAuth phishing, lookalike domains</td></tr>
      </tbody>
    </table>

    <h4>Email Authentication Protocols</h4>
    <table>
      <thead>
        <tr><th>Protocol</th><th>Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>SPF</strong></td><td>Verifies authorized sending servers via DNS</td></tr>
        <tr><td><strong>DKIM</strong></td><td>Cryptographic signature on messages</td></tr>
        <tr><td><strong>DMARC</strong></td><td>Policy for handling failed SPF/DKIM — aim for p=reject</td></tr>
        <tr><td><strong>BIMI</strong></td><td>Brand logo in email clients for trust</td></tr>
        <tr><td><strong>MTA-STS</strong></td><td>Enforces TLS for mail transport</td></tr>
      </tbody>
    </table>

    <h4>Email Security Controls</h4>
    <ol>
      <li><strong>Deploy SPF, DKIM, DMARC:</strong> Start with monitoring, then enforce</li>
      <li><strong>Advanced threat protection:</strong> Sandboxing, URL rewriting</li>
      <li><strong>Anti-spam filtering:</strong> Bayesian, reputation scoring</li>
      <li><strong>Encryption:</strong> S/MIME, PGP, TLS</li>
      <li><strong>DLP:</strong> Detect/block sensitive data in emails</li>
      <li><strong>User training:</strong> Simulated phishing campaigns</li>
    </ol>
  `,

  v6c15: `
    <h3>DNS Filtering</h3>
    <p>
      <strong>DNS filtering</strong> <strong>blocks or allows access to websites</strong> based on content category, reputation, or threat intelligence. By intercepting DNS queries — the very first step in any internet connection — it provides <strong>fast, proactive protection</strong>.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: DNS as Security Enforcer</div>
      <p>Every web request begins with a DNS query. By intercepting these queries, DNS filtering can <strong>block malicious destinations before any data is exchanged</strong>.</p>
    </div>

    <h4>What DNS Filtering Blocks</h4>
    <table>
      <thead>
        <tr><th>Category</th><th>Examples</th><th>Risk</th></tr>
      </thead>
      <tbody>
        <tr><td>Malware & C2</td><td>Known malicious domains, botnet C2</td><td>Infection, data theft</td></tr>
        <tr><td>Phishing</td><td>Credential harvesting sites</td><td>Credential theft</td></tr>
        <tr><td>Newly Registered Domains</td><td>Domains registered within 30 days</td><td>Often used for attacks</td></tr>
        <tr><td>DGA Domains</td><td>Algorithmically generated domains</td><td>Malware communication</td></tr>
      </tbody>
    </table>

    <h4>Solutions</h4>
    <table>
      <thead>
        <tr><th>Solution</th><th>Type</th><th>Key Features</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Cloudflare Gateway</strong></td><td>Cloud</td><td>DNS filtering + CASB + ZTNA</td></tr>
        <tr><td><strong>Cisco Umbrella</strong></td><td>Cloud</td><td>DNS-layer security</td></tr>
        <tr><td><strong>Pi-hole</strong></td><td>Self-hosted (free)</td><td>Ad/malware blocking</td></tr>
        <tr><td><strong>Quad9</strong></td><td>Free resolver</td><td>Blocks known malicious domains</td></tr>
      </tbody>
    </table>
  `,

  v6c16: `
    <h3>CDN Security</h3>
    <p>
      <strong>Content Delivery Networks (CDNs)</strong> improve performance by caching content at <strong>edge locations</strong> worldwide. Misconfigured CDNs can <strong>expose origin servers</strong> and enable cache poisoning, but properly configured CDNs are powerful security assets.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: CDN as Security Shield</div>
      <p>A properly configured CDN acts as a <strong>security shield</strong>: absorbs DDoS, hides origin IP, enforces TLS, provides WAF capabilities, and prevents data leakage through caching controls.</p>
    </div>

    <h4>CDN Security Risks</h4>
    <table>
      <thead>
        <tr><th>Risk</th><th>Description</th><th>Impact</th></tr>
      </thead>
      <tbody>
        <tr><td>Origin Exposure</td><td>Direct access bypasses CDN</td><td>Server IP leakage</td></tr>
        <tr><td>Cache Poisoning</td><td>Malicious content injected into cache</td><td>Malware distribution</td></tr>
        <tr><td>TLS Misconfiguration</td><td>Weak TLS at edge</td><td>Downgrade attacks</td></tr>
        <tr><td>Sensitive Data Caching</td><td>Personalized content cached at edge</td><td>Data leakage between users</td></tr>
        <tr><td>Hotlink Abuse</td><td>Others embed your CDN resources</td><td>Bandwidth theft</td></tr>
      </tbody>
    </table>

    <h4>CDN Security Best Practices</h4>
    <ol>
      <li><strong>Restrict origin access:</strong> Only allow CDN IP ranges to reach origin servers</li>
      <li><strong>Enable TLS everywhere:</strong> Client ↔ CDN ↔ origin, prefer TLS 1.3</li>
      <li><strong>Prevent cache poisoning:</strong> Validate Host header, use proper Cache-Control</li>
      <li><strong>Protect sensitive content:</strong> <code>Cache-Control: private, no-store</code> for user data</li>
      <li><strong>Enable WAF at CDN:</strong> Edge-level threat blocking</li>
      <li><strong>Use signed URLs/cookies:</strong> Ensure only authorized users access content</li>
    </ol>
  `,

  // ==========================================
  // SECTION 3: NETWORK MONITORING
  // ==========================================

  v6c17: `
    <h3>SIEM</h3>
    <p>
      <strong>Security Information and Event Management (SIEM)</strong> is the <strong>centralized platform</strong> for collecting, correlating, and analyzing <strong>security events</strong> from across your entire network. It provides <strong>real-time visibility</strong> into threats and is essential for detecting, investigating, and responding to incidents.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Correlation is King</div>
      <p>A single failed login is normal. <strong>Ten failed logins from one IP followed by a successful login and data download</strong> is an attack. SIEM's power is in <strong>correlating events across sources</strong> to reveal patterns individual logs can't show.</p>
    </div>

    <h4>Core SIEM Functions</h4>
    <table>
      <thead>
        <tr><th>Function</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>Log Collection</td><td>Aggregate logs from network devices, servers, applications</td></tr>
        <tr><td>Normalization</td><td>Parses diverse log formats into consistent schema</td></tr>
        <tr><td>Correlation</td><td>Links related events across sources to detect attacks</td></tr>
        <tr><td>Alerting</td><td>Triggers notifications when rules/thresholds are violated</td></tr>
        <tr><td>Dashboards</td><td>Visualizes security metrics and trends</td></tr>
        <tr><td>Forensics</td><td>Investigates incidents by searching historical data</td></tr>
        <tr><td>Compliance Reporting</td><td>Generates audit-ready reports for regulators</td></tr>
      </tbody>
    </table>

    <h4>Detection Use Cases</h4>
    <table>
      <thead>
        <tr><th>Attack Type</th><th>SIEM Detection Method</th></tr>
      </thead>
      <tbody>
        <tr><td>Brute Force Attack</td><td>Multiple failed logins from single source within time window</td></tr>
        <tr><td>Lateral Movement</td><td>Authentication from multiple hosts in short timeframe</td></tr>
        <tr><td>Data Exfiltration</td><td>Unusual outbound data volume or connections to known-bad IPs</td></tr>
        <tr><td>Privilege Escalation</td><td>New admin account creation or role change</td></tr>
        <tr><td>Insider Threat</td><td>Anomalous access patterns outside business hours</td></tr>
      </tbody>
    </table>

    <h4>Popular SIEM Platforms</h4>
    <table>
      <thead>
        <tr><th>Platform</th><th>Type</th><th>Key Strength</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Splunk</strong></td><td>Commercial</td><td>Most powerful SPL query language</td></tr>
        <tr><td><strong>Microsoft Sentinel</strong></td><td>Cloud-native</td><td>Azure-native, serverless, cost-effective</td></tr>
        <tr><td><strong>Elastic SIEM</strong></td><td>Open-source/Commercial</td><td>Full ELK stack, flexible</td></tr>
        <tr><td><strong>IBM QRadar</strong></td><td>Commercial</td><td>Enterprise-grade correlation</td></tr>
        <tr><td><strong>Wazuh</strong></td><td>Open-source</td><td>Free SIEM + XDR</td></tr>
      </tbody>
    </table>
  `,

  v6c18: `
    <h3>Network Segmentation</h3>
    <p>
      <strong>Network segmentation</strong> divides a network into <strong>smaller, isolated segments</strong> (subnetworks or zones) to <strong>limit lateral movement</strong> and contain breaches. It is one of the most effective strategies for reducing the impact of a security compromise.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Stop the Spread</div>
      <p>Flat networks allow attackers who compromise <strong>one device</strong> to reach <strong>every device</strong>. Segmented networks force attackers to <strong>breach each zone separately</strong>, dramatically increasing the difficulty and time required for lateral movement.</p>
    </div>

    <h4>Segmentation Approaches</h4>
    <table>
      <thead>
        <tr><th>Approach</th><th>Granularity</th><th>Implementation</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>VLAN Segmentation</strong></td><td>Per-department or per-function</td><td>802.1Q VLANs, inter-VLAN ACLs</td></tr>
        <tr><td><strong>Subnet Segmentation</strong></td><td>Per-zone IP subnets</td><td>Firewall rules between subnets</td></tr>
        <tr><td><strong>Microsegmentation</strong></td><td>Per-workload</td><td>Software-defined (VMware NSX, Illumio, Cilium)</td></tr>
        <tr><td><strong>Zero Trust Segmentation</strong></td><td>Per-identity/application</td><td>ZTNA platforms, service mesh</td></tr>
      </tbody>
    </table>

    <h4>Segmentation Architecture</h4>
    <pre><code>
┌──────────────────────────────────────────────────────────┐
│                    DMZ (Public)                           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ Web App  │  │ API GW   │  │ CDN/WAF  │              │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘              │
└───────┼──────────────┼─────────────┼────────────────────┘
        │              │             │ (Firewall)
┌───────┼──────────────┼─────────────┼────────────────────┐
│       ▼              ▼             ▼                    │
│  ┌─────────────────────────────────────────────┐        │
│  │         Application Network                  │        │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐   │        │
│  │  │ App Tier │  │ App Tier │  │ Database │   │        │
│  │  │   Web    │  │   API    │  │  Server  │   │        │
│  │  └──────────┘  └──────────┘  └──────────┘   │        │
│  └────────────────────┬────────────────────────┘        │
└───────────────────────┼─────────────────────────────────┘
                        │ (Firewall - strict rules)
┌───────────────────────┼─────────────────────────────────┐
│       ▼               ▼                                 │
│  ┌─────────────────────────────────────────────┐        │
│  │           Management Network                │        │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐   │        │
│  │  │  Admin   │  │ Monitoring│  │  Jump    │   │        │
│  │  │  Work    │  │  Systems  │  │  Host    │   │        │
│  │  └──────────┘  └──────────┘  └──────────┘   │        │
│  └─────────────────────────────────────────────┘        │
└──────────────────────────────────────────────────────────┘
</code></pre>

    <h4>Segmentation Best Practices</h4>
    <ol>
      <li><strong>Classify data and assets:</strong> Identify what needs the most protection (PCI, HIPAA data)</li>
      <li><strong>Start with macro-segmentation:</strong> Separate broad zones (DMZ, app, data, management)</li>
      <li><strong>Progress to microsegmentation:</strong> Restrict east-west traffic within zones</li>
      <li><strong>Default deny between segments:</strong> Only allow explicitly permitted traffic</li>
      <li><strong>Monitor inter-zone traffic:</strong> Log and alert on cross-segment communication</li>
    </ol>
  `,

  v6c19: `
    <h3>Zero Trust Network</h3>
    <p>
      <strong>Zero Trust Network</strong> is a security model based on the principle <strong>"never trust, always verify."</strong> Unlike traditional perimeter-based security that trusts everything inside the network, Zero Trust assumes that threats can come from <strong>anywhere — inside or outside</strong> — and requires continuous verification of every user, device, and connection.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Eliminate Implicit Trust</div>
      <p>Traditional networks have a <strong>"trusted internal zone"</strong> where anything inside is assumed safe. Zero Trust eliminates this assumption: even a device connected to your internal WiFi must <strong>authenticate, authorize, and be continuously validated</strong> before accessing any resource.</p>
    </div>

    <h4>Core Zero Trust Principles</h4>
    <table>
      <thead>
        <tr><th>Principle</th><th>Implementation</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Verify Explicitly:</strong></td><td>Authenticate and authorize every request based on all available data points (identity, location, device health, behavior)</td></tr>
        <tr><td><strong>Least Privilege Access:</strong></td><td>Limit access with JIT (Just-In-Time) and JEA (Just-Enough-Access)</td></tr>
        <tr><td><strong>Assume Breach:</strong></td><td>Minimize blast radius; verify end-to-end encryption; use analytics for threat detection</td></tr>
        <tr><td><strong>Microsegmentation:</strong></td><td>Isolate resources so a breach in one zone doesn't spread</td></tr>
        <tr><td><strong>Continuous Verification:</strong></td><td>Re-evaluate trust at regular intervals during a session, not just at login</td></tr>
      </tbody>
    </table>

    <h4>Zero Trust Architecture Components</h4>
    <pre><code>
┌──────────────────────────────────────────────────┐
│                Policy Engine (PE)                 │
│   ┌──────────────────────────────────────────┐   │
│   │  Policy Decision Point (PDP)             │   │
│   │  - Evaluates access requests             │   │
│   │  - Applies policies                      │   │
│   │  - Returns allow/deny/step-up decisions  │   │
│   └──────────────────┬───────────────────────┘   │
│                      │                           │
│   ┌──────────────────▼───────────────────────┐   │
│   │        Policy Administration Point (PAP) │   │
│   │  - Defines and manages policies          │   │
│   │  - Monitors and updates rules            │   │
│   └──────────────────────────────────────────┘   │
└──────────────────────────────────────────────────┘
        │                    │
        ▼                    ▼
┌──────────────┐    ┌─────────────────────┐
│  Policy      │    │  Policy Enforcement │
│  Information │    │  Points (PEPs)      │
│  (PIP)       │    │  - Network switches │
│  - Identity  │    │  - Firewalls       │
│  - Device    │    │  - Proxies         │
│  - Context   │    │  - API gateways    │
└──────────────┘    └─────────────────────┘
</code></pre>

    <h4>Implementing Zero Trust</h4>
    <ol>
      <li><strong>Identify protect surfaces:</strong> What data, applications, assets, and services (DAAS) need protection?</li>
      <li><strong>Map transaction flows:</strong> Understand how traffic moves to protect DAAS</li>
      <li><strong>Build Zero Trust architecture:</strong> Deploy identity-aware proxies, microsegmentation, MFA</li>
      <li><strong>Create Zero Trust policies:</strong> Define who, what, when, where, why, and how for each access</li>
      <li><strong>Monitor and maintain:</strong> Continuous monitoring, logging, and policy refinement</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 NIST SP 800-207</div>
      <p>The NIST <strong>Zero Trust Architecture (SP 800-207)</strong> is the authoritative reference for Zero Trust. It defines the conceptual architecture, components, and deployment models. Any organization implementing Zero Trust should align with this standard.</p>
    </div>
  `,

  v6c20: `
    <h3>Microsegmentation</h3>
    <p>
      <strong>Microsegmentation</strong> is a <strong>network security technique</strong> that creates <strong>granular security zones</strong> in data centers and cloud environments, enabling <strong>policy-based access control</strong> at the individual workload level.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Granular Isolation</div>
      <p>Unlike traditional segmentation (VLANs at the subnet level), microsegmentation creates security boundaries around <strong>individual workloads</strong> — even individual processes. If one workload is compromised, the attacker cannot move laterally to others.</p>
    </div>

    <h4>Traditional Segmentation vs. Microsegmentation</h4>
    <table>
      <thead>
        <tr><th>Aspect</th><th>Traditional</th><th>Microsegmentation</th></tr>
      </thead>
      <tbody>
        <tr><td>Granularity</td><td>Subnet/VLAN level</td><td>Individual workload/process</td></tr>
        <tr><td>Policy Control</td><td>IP/port based</td><td>Identity, application, context aware</td></tr>
        <tr><td>East-West Traffic</td><td>Often flat within VLAN</td><td>Every flow inspected and controlled</td></tr>
        <tr><td>Adaptability</td><td>Manual rule changes</td><td>Dynamic, auto-adapts to changes</td></tr>
        <tr><td>Visibility</td><td>Limited</td><td>Full application-level visibility</td></tr>
      </tbody>
    </table>

    <h4>Microsegmentation Approaches</h4>
    <table>
      <thead>
        <tr><th>Approach</th><th>How It Works</th><th>Best For</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Agent-based</strong></td><td>Lightweight agent on each workload</td><td>VMs, bare metal, cloud VMs</td></tr>
        <tr><td><strong>Network-based</strong></td><td>SDN controller enforces policies</td><td>Data centers, hybrid clouds</td></tr>
        <tr><td><strong>Identity-based</strong></td><td>Workload identity determines access</td><td>Cloud-native, K8s (SPIFFE/SPIRE)</td></tr>
      </tbody>
    </table>

    <h4>Popular Microsegmentation Tools</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Approach</th><th>Environment</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>VMware NSX</strong></td><td>Distributed firewalling</td><td>VMware vSphere</td></tr>
        <tr><td><strong>Illumio</strong></td><td>Agent-based, application-aware</td><td>Multi-cloud, hybrid</td></tr>
        <tr><td><strong>Cilium</strong></td><td>eBPF-based, identity-aware</td><td>Kubernetes, Linux</td></tr>
        <tr><td><strong>Guardicore (Akamai)</strong></td><td>Agent-based, asset-centric</td><td>Multi-platform</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 Start Small, Scale Up</div>
      <p>Begin microsegmentation with your <strong>most critical assets</strong> (databases, payment systems, PII stores). Define policies for these first, then expand. Trying to microsegment everything at once leads to complexity and policy conflicts.</p>
    </div>
  `,

  v6c21: `
    <h3>Network Forensics</h3>
    <p>
      <strong>Network forensics</strong> is the <strong>capture, recording, and analysis of network events</strong> to discover the source of security breaches, attacks, or other issues. It is a critical discipline in post-incident investigation and legal proceedings.
    </p>

    <h4>Network Forensics Process</h4>
    <ol>
      <li><strong>Identification:</strong> Recognize that an incident has occurred (alert, anomaly, report)</li>
      <li><strong>Preservation:</strong> Capture and preserve network evidence before it's overwritten or lost</li>
      <li><strong>Collection:</strong> Gather network traffic captures, logs, flow data</li>
      <li><strong>Analysis:</strong> Examine captured data to reconstruct events and identify attackers</li>
      <li><strong>Documentation:</strong> Record findings, maintain chain of custody</li>
      <li><strong>Reporting:</strong> Create findings report for stakeholders, legal, or law enforcement</li>
    </ol>

    <h4>Data Sources for Network Forensics</h4>
    <table>
      <thead>
        <tr><th>Source</th><th>Data Type</th><th>Retention</th></tr>
      </thead>
      <tbody>
        <tr><td>Full Packet Capture (PCAP)</td><td>Complete network traffic</td><td>Hours to days (large storage)</td></tr>
        <tr><td>NetFlow/IPFIX</td><td>Flow metadata (src, dst, bytes, protocol)</td><td>Weeks to months</td></tr>
        <tr><td>Firewall Logs</td><td>Allowed/denied connections</td><td>Months (SIEM)</td></tr>
        <tr><td>IDS/IPS Logs</td><td>Detected threats and alerts</td><td>Months (SIEM)</td></tr>
        <tr><td>DNS Logs</td><td>Queries, responses, anomalies</td><td>Months</td></tr>
        <tr><td>Proxy Logs</td><td>Web requests, URLs, users</td><td>Months</td></tr>
      </tbody>
    </table>

    <h4>Popular Forensics Tools</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Purpose</th><th>Strengths</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Wireshark</strong></td><td>Packet analysis</td><td>Industry standard, deep protocol analysis</td></tr>
        <tr><td><strong>Zeek (Bro)</strong></td><td>Network protocol analysis</td><td>Scriptable, generates structured logs</td></tr>
        <tr><td><strong>NetworkMiner</strong></td><td>Network forensic analysis</td><td>GUI-based, session reconstruction</td></tr>
        <tr><td><strong>Xplico</strong></td><td>Network forensic analysis</td><td>Open-source, extracts application data</td></tr>
        <tr><td><strong>tcpdump</strong></td><td>Command-line packet capture</td><td>Lightweight, scriptable</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 Evidence Preservation</div>
      <p>Always follow proper <strong>chain of custody</strong> procedures. Document every step, use write-blockers for disk evidence, hash all evidence files, and maintain detailed logs of who accessed what and when. Digital evidence must be <strong>authentic, complete, and unaltered</strong> to be admissible in court.</p>
    </div>
  `,

  v6c22: `
    <h3>Packet Analysis</h3>
    <p>
      <strong>Packet analysis</strong> (also called <strong>packet sniffing</strong> or <strong>protocol analysis</strong>) is the process of <strong>capturing and examining individual network packets</strong> to understand traffic patterns, diagnose issues, and detect security threats.
    </p>

    <h4>Packet Structure Analysis</h4>
    <p>Each layer of the network stack adds headers that can reveal valuable information:</p>
    <ul>
      <li><strong>Layer 2 (Ethernet):</strong> Source/destination MAC addresses, VLAN tags</li>
      <li><strong>Layer 3 (IP):</strong> Source/destination IP, TTL, DSCP, fragmentation flags</li>
      <li><strong>Layer 4 (TCP/UDP):</strong> Source/destination ports, sequence numbers, flags (SYN, ACK, RST, FIN)</li>
      <li><strong>Layer 7 (Application):</strong> HTTP headers, DNS queries, TLS handshake details</li>
    </ul>

    <h4>What to Look For (Indicators of Compromise)</h4>
    <table>
      <thead>
        <tr><th>Indicator</th><th>Potential Threat</th></tr>
      </thead>
      <tbody>
        <tr><td>TCP SYN without corresponding ACK</td><td>SYN flood or port scan</td></tr>
        <tr><td>DNS queries to rare/newly-registered domains</td><td>C2 communication, DGA malware</td></tr>
        <tr><td>Large outbound transfers to unfamiliar IPs</td><td>Data exfiltration</td></tr>
        <tr><td>ARP replies from unexpected MAC addresses</td><td>ARP spoofing</td></tr>
        <tr><td>TCP resets to disrupt connections</td><td>TCP reset attack</td></tr>
        <tr><td>ICMP traffic to/from unusual destinations</td><td>Tunneling, reconnaissance</td></tr>
        <tr><td>Beaconing (regular interval connections)</td><td>Malware C2 callback</td></tr>
      </tbody>
    </table>

    <h4>Packet Capture Best Practices</h4>
    <ol>
      <li><strong>Capture at the right point:</strong> Mirror/span the port where you need visibility</li>
      <li><strong>Use capture filters:</strong> <code>tcp port 443</code> — don't capture everything</li>
      <li><strong>Monitor storage:</strong> PCAP files grow quickly; use ring buffers</li>
      <li><strong>Capture during incidents:</strong> Start capturing as soon as an alert triggers</li>
      <li><strong>Protect captures:</strong> Encrypt and restrict access to PCAP files</li>
    </ol>

    <h4>Quick Capture Commands</h4>
    <pre><code>
# tcpdump — capture HTTP traffic
tcpdump -i eth0 -w capture.pcap 'tcp port 80'

# Capture DNS queries
tcpdump -i eth0 port 53

# Capture to rotating files (100MB each, keep 10)
tcpdump -i eth0 -C 100 -W 10 -w /tmp/capture_%H_%M_%S.pcap

# Read and filter existing capture
tcpdump -r capture.pcap 'host 10.0.0.5 and port 443'

# Wireshark tshark (command-line)
tshark -r capture.pcap -Y "http.request" -T fields -e http.host
</code></pre>
  `,

  v6c23: `
    <h3>Flow Analysis</h3>
    <p>
      <strong>Flow analysis</strong> examines <strong>network traffic summaries</strong> (NetFlow, sFlow, IPFIX) rather than individual packets. It provides <strong>high-level visibility</strong> into traffic patterns, bandwidth usage, and communication relationships without the storage overhead of full packet capture.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: NetFlow vs. Full PCAP</div>
      <p><strong>NetFlow/IPFIX</strong> gives you metadata about flows (who, when, how much, protocol) at <strong>1/100th the storage</strong> of full PCAP. <strong>PCAP</strong> gives you every packet but requires massive storage. Use NetFlow for <strong>continuous monitoring</strong> and PCAP for <strong>deep incident investigation</strong>.</p>
    </div>

    <h4>Flow Record Contents</h4>
    <table>
      <thead>
        <tr><th>Field</th><th>Description</th><th>Security Value</th></tr>
      </thead>
      <tbody>
        <tr><td>Source/Destination IP</td><td>Endpoints of the flow</td><td>Identify communication partners</td></tr>
        <tr><td>Source/Destination Port</td><td>Application/service identification</td><td>Detect unauthorized services</td></tr>
        <tr><td>Protocol</td><td>TCP, UDP, ICMP, etc.</td><td>Identify unexpected protocols</td></tr>
        <tr><td>Bytes/Packets</td><td>Volume of data transferred</td><td>Detect data exfiltration</td></tr>
        <tr><td>Timestamps</td><td>First and last packet times</td><td>Detect beaconing, timing attacks</td></tr>
        <tr><td>TCP Flags</td><td>SYN, ACK, RST, FIN, etc.</td><td>Detect scanning, resets, anomalies</td></tr>
        <tr><td>ToS/DSCP</td><td>Quality of service marking</td><td>Detect tunneling (covert channels)</td></tr>
      </tbody>
    </table>

    <h4>Flow Analysis Use Cases</h4>
    <table>
      <thead>
        <tr><th>Use Case</th><th>Detection Method</th></tr>
      </thead>
      <tbody>
        <tr><td>Data exfiltration</td><td>Unusual volume to external IPs</td></tr>
        <tr><td>Lateral movement</td><td>Internal-to-internal flows to unexpected hosts</td></tr>
        <tr><td>C2 communication</td><td>Regular interval connections to rare external IPs</td></tr>
        <tr><td>Port scanning</td><td>Single source to many destinations on multiple ports</td></tr>
        <tr><td>DDoS detection</td><td>Spike in flows from many sources to single target</td></tr>
        <tr><td>Shadow IT</td><td>Traffic to unapproved cloud services</td></tr>
      </tbody>
    </table>

    <h4>Flow Collection Tools</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Role</th><th>Notes</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>nProbe/nfdump</strong></td><td>Flow collector and analyzer</td><td>Open-source, NetFlow v5/v9/IPFIX</td></tr>
        <tr><td><strong>Elasticflow</strong></td><td>Flow analysis with Elasticsearch</td><td>Scalable, good for large networks</td></tr>
        <tr><td><strong>ntopng</strong></td><td>Real-time flow analysis and DPI</td><td>Rich UI, protocol detection</td></tr>
        <tr><td><strong>SolarWinds NTA</strong></td><td>Commercial flow analysis</td><td>Enterprise-grade, deep visibility</td></tr>
        <tr><td><strong>AWS VPC Flow Logs</strong></td><td>Native AWS flow capture</td><td>No additional cost beyond CloudWatch/Logs</td></tr>
        <tr><td><strong>GCP VPC Flow Logs</strong></td><td>Native GCP flow capture</td><td>Integrated with Cloud Logging</td></tr>
      </tbody>
    </table>
  `,

  v6c24: `
    <h3>Threat Hunting</h3>
    <p>
      <strong>Threat hunting</strong> is a <strong>proactive security practice</strong> where analysts use <strong>human creativity, expertise, and hypothesis-driven investigation</strong> to find threats that automated tools miss. Unlike traditional security that waits for alerts, threat hunters <strong>actively seek out adversaries</strong> hiding in the network.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Assume Breach, Hunt for Evidence</div>
      <p>Threat hunting starts from the assumption that <strong>attackers are already inside</strong>. The hunter's job is to find evidence of compromise — subtle indicators that automated tools overlook because they don't trigger known alert rules.</p>
    </div>

    <h4>Threat Hunting Methodologies</h4>
    <table>
      <thead>
        <tr><th>Method</th><th>Description</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Hypothesis-Driven</strong></td>
          <td>Start with a theory about how an attacker might operate</td>
          <td>"An attacker with stolen credentials would..."</td>
        </tr>
        <tr>
          <td><strong>Intel-Driven</strong></td>
          <td>Search for known IoCs from threat intelligence feeds</td>
          <td>Search logs for known C2 IPs, malware hashes</td>
        </tr>
        <tr>
          <td><strong>Anomaly-Driven</strong></td>
          <td>Look for deviations from normal baselines</td>
          <td>Unusual login times, unexpected data transfers</td>
        </tr>
        <tr>
          <td><strong>TTP-Driven</strong></td>
          <td>Search for adversary Tactics, Techniques & Procedures</td>
          <td>Look for specific MITRE ATT&CK techniques</td>
        </tr>
      </tbody>
    </table>

    <h4>Hunting Kill Chain</h4>
    <pre><code>
1. RECONNAISSANCE     → Look for scanning, enumeration artifacts
2. WEAPONIZATION      → Search for staging infrastructure, malware staging
3. DELIVERY           → Find phishing artifacts, dropper execution
4. EXPLOITATION       → Search for exploitation artifacts (memory corruption)
5. INSTALLATION       → Look for persistence mechanisms (scheduled tasks, services)
6. C2 COMMUNICATION   → Hunt for beaconing, C2 traffic patterns
7. ACTIONS ON OBJECTIVES → Data movement, lateral movement indicators
</code></pre>

    <h4>Essential Threat Hunting Queries</h4>
    <pre><code>
# Windows Event Logs — find credential dumping
EventID=4624 (logon) AND LogonType=3 from non-domain hosts

# DNS — find DNS tunneling
Long DNS queries with high entropy subdomain labels

# Network — find lateral movement
Successful authentication within 5 minutes of failed attempts
from same source IP to multiple hosts

# Endpoint — find persistence
New scheduled tasks or services created outside change windows

# Cloud — find credential abuse
API calls from unusual IP addresses or at unusual times
</code></pre>

    <h4>Threat Hunting Tools</h4>
    <ul>
      <li><strong>Splunk</strong> — Powerful query language for log analysis</li>
      <li><strong>YARA</strong> — Malware classification and identification</li>
      <li><strong>Sigma</strong> — Generic detection rules (convertible to SIEM queries)</li>
      <li><strong>MITRE ATT&CK Navigator</strong> — Map findings to adversary TTPs</li>
      <li><strong>Velociraptor</strong> — Endpoint monitoring and forensics</li>
      <li><strong>RITA</strong> — Real-time indicators of compromise (beaconing, DNS)</li>
    </ul>
  `,

  v6c25: `
    <h3>Incident Detection</h3>
    <p>
      <strong>Incident detection</strong> is the <strong>process of identifying security events</strong> that may indicate a breach, attack, or policy violation. Effective detection requires a combination of <strong>automated tools, human analysis, and well-tuned alerting</strong> to separate real threats from noise.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Detection is Not Prevention</div>
      <p>Detection identifies what <strong>has already happened or is happening</strong>. Prevention stops it from happening. A mature security program needs both — prevention reduces volume, detection catches what prevention misses. The goal is <strong>fast detection and rapid response</strong>.</p>
    </div>

    <h4>Detection Methods</h4>
    <table>
      <thead>
        <tr><th>Method</th><th>How It Works</th><th>Strengths</th><th>Weaknesses</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Signature-based</strong></td>
          <td>Matches known attack patterns</td>
          <td>Low false positives for known threats</td>
          <td>Misses zero-days and novel attacks</td>
        </tr>
        <tr>
          <td><strong>Anomaly-based</strong></td>
          <td>Deviation from established baselines</td>
          <td>Catches novel attacks</td>
          <td>Higher false positive rate</td>
        </tr>
        <tr>
          <td><strong>Behavioral Analysis</strong></td>
          <td>User/entity behavior analytics (UEBA)</td>
          <td>Detects insider threats, compromised accounts</td>
          <td>Requires significant data and tuning</td>
        </tr>
        <tr>
          <td><strong>Threat Intelligence</strong></td>
          <td>Matches against known IoCs</td>
          <td>Contextual, up-to-date threat data</td>
          <td>Dependent on feed quality</td>
        </tr>
        <tr>
          <td><strong>Deception</strong></td>
          <td>Honeypots, honey tokens, canary files</td>
          <td>Very low false positive rate</td>
          <td>Only detects active attackers</td>
        </tr>
      </tbody>
    </table>

    <h4>Building Effective Detection</h4>
    <ol>
      <li><strong>Define what to protect:</strong> Crown jewels, critical assets, high-value data</li>
      <li><strong>Establish baselines:</strong> Normal behavior for users, systems, and networks</li>
      <li><strong>Deploy layered detection:</strong> Network + endpoint + application + cloud</li>
      <li><strong>Tune aggressively:</strong> Reduce false positives to maintain analyst trust</li>
      <li><strong>Automate where possible:</strong> SOAR playbooks for common alert triage</li>
      <li><strong>Test regularly:</strong> Red team exercises, detection engineering drills</li>
    </ol>

    <h4>Detection Engineering</h4>
    <p>Detection engineering is the <strong>systematic process of writing, testing, and maintaining detection rules</strong>:</p>
    <ol>
      <li><strong>Identify adversary behaviors</strong> (MITRE ATT&CK techniques)</li>
      <li><strong>Write detection rules</strong> (Sigma, YARA, SIEM queries)</li>
      <li><strong>Test against known-bad and known-good data</strong></li>
      <li><strong>Deploy and monitor</strong> performance (false positive rate, detection coverage)</li>
      <li><strong>Iterate</strong> based on threat landscape changes</li>
    </ol>
  `,

  v6c26: `
    <h3>SOC Operations</h3>
    <p>
      <strong>Security Operations Centers (SOCs)</strong> are the <strong>centralized hubs</strong> for monitoring, detecting, analyzing, and responding to security incidents in real-time. A SOC combines <strong>people, processes, and technology</strong> to provide <strong>24/7 security monitoring and incident response</strong> capabilities.
    </p>

    <h4>SOC Functions</h4>
    <table>
      <thead>
        <tr><th>Function</th><th>Description</th><th>Maturity Level</th></tr>
      </thead>
      <tbody>
        <tr><td>Monitoring</td><td>Continuous observation of security alerts and events</td><td>Tier 1</td></tr>
        <tr><td>Triage</td><td>Initial assessment and classification of alerts</td><td>Tier 1</td></tr>
        <tr><td>Incident Response</td><td>Deep investigation and containment of confirmed incidents</td><td>Tier 2/3</td></tr>
        <tr><td>Threat Intelligence</td><td>Integration of external threat data into detection</td><td>Tier 2+</td></tr>
        <tr><td>Forensics</td><td>Deep-dive investigation, evidence preservation</td><td>Tier 3</td></tr>
        <tr><td>Proactive Hunting</td><td>Active search for undetected threats</td><td>Tier 3+</td></tr>
        <tr><td>Reporting & Compliance</td><td>Metrics, dashboards, audit evidence</td><td>All tiers</td></tr>
      </tbody>
    </table>

    <h4>SOC Tiers</h4>
    <ol>
      <li>
        <strong>Tier 1 — Monitoring & Triage:</strong>
        <ul>
          <li>First line of defense — monitors alerts 24/7</li>
          <li>Validates alerts, escalates genuine threats</li>
          <li>Executes standard playbooks for known scenarios</li>
        </ul>
      </li>
      <li>
        <strong>Tier 2 — Incident Analysis:</strong>
        <ul>
          <li>Deep investigation of escalated alerts</li>
          <li>Malware analysis, log correlation, threat research</li>
          <li>Implements containment measures</li>
        </ul>
      </li>
      <li>
        <strong>Tier 3 — Advanced Investigation & Response:</strong>
        <ul>
          <li>A complex incident response, forensics, threat hunting</li>
          <li>Works with external incident response teams</li>
          <li>Develops new detection rules from lessons learned</li>
        </ul>
      </li>
    </ol>

    <h4>Essential SOC Metrics</h4>
    <table>
      <thead>
        <tr><th>Metric</th><th>Description</th><th>Target</th></tr>
      </thead>
      <tbody>
        <tr><td>Mean Time to Detect (MTTD)</td><td>Time from incident start to detection</td><td>&lt; 1 hour</td></tr>
        <tr><td>Mean Time to Respond (MTTR)</td><td>Time from alert to initial response</td><td>&lt; 15 minutes (critical)</td></tr>
        <tr><td>False Positive Rate</td><td>Percentage of alerts that are benign</td><td>&lt; 20%</td></tr>
        <tr><td>Alert-to-Incident Ratio</td><td>Alerts that become confirmed incidents</td><td>Track trend over time</td></tr>
        <tr><td>SLA Compliance</td><td>Meeting response time targets</td><td>&gt; 95%</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 SOC Modernization</div>
      <p>Modern SOCs are moving toward <strong>XDR (Extended Detection and Response)</strong> platforms that integrate endpoint, network, cloud, and email telemetry into a <strong>single platform</strong> with AI-assisted triage. This dramatically reduces alert fatigue and improves detection accuracy compared to traditional SIEM-only SOCs.</p>
    </div>
  `,

  // ==========================================
  // SECTION 4: ADVANCED TOPICS
  // ==========================================

  v6c27: `
    <h3>Cloud Network Security</h3>
    <p>
      <strong>Cloud network security</strong> involves protecting <strong>virtual networks, subnets, and traffic</strong> in cloud environments (AWS, Azure, GCP). Unlike traditional on-premises networks, cloud networks are <strong>software-defined</strong>, offering both flexibility and new security challenges.
    </p>

    <h4>Cloud Network Security Models</h4>
    <table>
      <thead>
        <tr><th>Model</th><th>Description</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Cloud-Native</strong></td><td>Use cloud provider's native security features</td><td>AWS Security Groups, Azure NSGs</td></tr>
        <tr><td><strong>Virtual Appliance</strong></td><td>Deploy virtual firewalls/routers in cloud</td><td>Palo Alto VM-Series, FortiGate-VM</td></tr>
        <tr><td><strong>SaaS-based</strong></td><td>Cloud-delivered security services</td><td>Zscaler, Cloudflare</td></tr>
        <tr><td><strong>Hybrid</strong></td><td>Mix of native and third-party controls</td><td>AWS + FortiGate hybrid</td></tr>
      </tbody>
    </table>

    <h4>AWS Network Security</h4>
    <ul>
      <li><strong>Security Groups:</strong> Stateful virtual firewalls at instance level</li>
      <li><strong>Network ACLs:</strong> Stateless firewalls at subnet level</li>
      <li><strong>VPC Flow Logs:</strong> Capture network traffic metadata</li>
      <li><strong>AWS Network Firewall:</strong> Managed stateful firewall for VPCs</li>
      <li><strong>Transit Gateway:</strong> Centralized hub for VPC connectivity with inspection</li>
      <li><strong>VPC Endpoints:</strong> Private connectivity to AWS services (no internet)</li>
    </ul>

    <h4>Azure Network Security</h4>
    <ul>
      <li><strong>Network Security Groups (NSGs):</strong> Filter traffic at subnet and NIC level</li>
      <li><strong>Azure Firewall:</strong> Managed, cloud-native firewall service</li>
      <li><strong>Azure DDoS Protection:</strong> Built-in DDoS mitigation</li>
      <li><strong>Private Link/Endpoints:</strong> Private connectivity to Azure PaaS services</li>
      <li><strong>Virtual WAN:</strong> Branch-to-VPN-gateway connectivity with security</li>
    </ul>

    <h4>GCP Network Security</h4>
    <ul>
      <li><strong>VPC Firewall Rules:</strong> Stateful firewall rules at network/subnet level</li>
      <li><strong>Cloud Armor:</strong> DDoS and WAF protection for GCP services</li>
      <li><strong>Private Google Access:</strong> VMs access Google APIs without external IP</li>
      <li><strong>Shared VPC:</strong> Centralized network management for organizations</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Cloud Security Group Patterns</div>
      <p>Best practices for cloud security groups:<br>
      • Start with <strong>default-deny</strong> on all security groups<br>
      • Use <strong>specific CIDRs</strong>, not 0.0.0.0/0 where possible<br>
      • Implement <strong>layered security groups</strong> (app + OS + management)<br>
      • Enable <strong>VPC flow logs</strong> for visibility<br>
      • Regularly audit security group rules (unused = risky)</p>
    </div>
  `,

  v6c28: `
    <h3>Hybrid Cloud Security</h3>
    <p>
      <strong>Hybrid cloud security</strong> extends security controls across <strong>on-premises infrastructure, private clouds, and public clouds</strong> in a consistent manner. The challenge is maintaining uniform security policies, visibility, and compliance across disparate environments.
    </p>

    <h4>Hybrid Cloud Security Challenges</h4>
    <table>
      <thead>
        <tr><th>Challenge</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>Inconsistent security policies</td><td>Different tools and configurations per environment</td></tr>
        <tr><td>Visibility gaps</td><td>No single pane of glass across all environments</td></tr>
        <tr><td>Identity federation</td><td>Unified identity across on-prem and cloud</td></tr>
        <tr><td>Data flow security</td><td>Securing data in transit between environments</td></tr>
        <tr><td>Compliance complexity</td><td>Meeting regulatory requirements across jurisdictions</td></tr>
        <tr><td>Skill gaps</td><td>Teams may lack expertise across all platforms</td></tr>
      </tbody>
    </table>

    <h4>Hybrid Cloud Security Architecture</h4>
    <pre><code>
┌───────────────────────────────────────────────────┐
│              Centralized Security Layer            │
│  ┌────────────┐ ┌──────────┐ ┌────────────────┐   │
│  │  Central SIEM│ │ Policy   │ │  Identity      │   │
│  │  (Splunk/   │ │ Engine   │ │  Federation    │   │
│  │   Sentinel) │ │ (OPA)    │ │  (IdP/Azure AD)│   │
│  └──────┬─────┘ └────┬─────┘ └───────┬────────┘   │
│         │            │               │             │
├─────────┼────────────┼───────────────┼─────────────┤
│         │            │               │             │
▼         ▼            ▼               ▼             ▼
┌──────────┐  ┌──────────────┐  ┌──────────────┐ ┌────────┐
│ On-Prem  │  │ Private Cloud│  │ Public Cloud  │ │ Edge   │
│ Firewall │  │ (VMware/     │  │ (AWS/Azure/   │ │ (Branch│
│ + EDR    │  │  OpenStack)  │  │  GCP)         │ │  ROBO) │
└──────────┘  └──────────────┘  └──────────────┘ └────────┘
</code></pre>

    <h4>Key Integration Points</h4>
    <ol>
      <li><strong>Unified identity:</strong> Federate on-prem AD with cloud IdP (Azure AD, AWS IAM Identity Center)</li>
      <li><strong>Consistent network policies:</strong> Use tools like Aviatrix or AlgoSec for cross-environment firewall policy management</li>
      <li><strong>Centralized logging:</strong> Ship all logs to a single SIEM regardless of source environment</li>
      <li><strong>Hybrid connectivity:</strong> Use VPN or dedicated interconnects (AWS Direct Connect, Azure ExpressRoute) with encryption</li>
      <li><strong>Unified endpoint protection:</strong> Deploy consistent EDR across all endpoints (CrowdStrike, SentinelOne)</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 Zero Trust for Hybrid Cloud</div>
      <p><strong>Zero Trust</strong> is especially powerful in hybrid environments because it doesn't rely on <strong>network location</strong> for trust decisions. Whether a user is on-prem or in AWS, every access request is evaluated the same way: verify identity, device health, and context before granting access.</p>
    </div>
  `,

  v6c29: `
    <h3>5G Security</h3>
    <p>
      <strong>5G networks</strong> introduce significant architectural changes from previous generations — <strong>network slicing, edge computing, and software-defined networking</strong> — which bring both opportunities and <strong>new security attack surfaces</strong>.
    </p>

    <h4>5G Security Architecture</h4>
    <table>
      <thead>
        <tr><th>Component</th><th>5G Security Feature</th></tr>
      </thead>
      <tbody>
        <tr><td>5G Core Network</td><td>Service-Based Architecture (SBA) with mutual authentication between services</td></tr>
        <tr><td>Network Slicing</td><td>Isolated virtual networks with per-slice security policies</td></tr>
        <tr><td>Edge Computing (MEC)</td><td>Data processed closer to user — reduces exposure but requires local security</td></tr>
        <tr><td>Subscriber Permanent ID (SUPI)</td><td>Encrypted in transit using Subscription Concealed Identifier (SUCI)</td></tr>
        <tr><td>Authentication</td><td>5G-AKA (Authentication and Key Agreement) with stronger mutual auth than 4G</td></tr>
      </tbody>
    </table>

    <h4>5G Security Concerns</h4>
    <ol>
      <li><strong>Supply chain risks:</strong> Dependence on network equipment vendors (Huawei, Ericsson, Nokia)</li>
      <li><strong>Network slicing isolation:</strong> Ensuring slices are truly isolated from each other</li>
      <li><strong>Edge computing security:</strong> Protecting distributed MEC nodes is harder than centralized data centers</li>
      <li><strong>API security:</strong> SBA exposes more network functions via APIs — expanding attack surface</li>
      <li><strong>IoT scale:</strong> 5G enables massive IoT — billions of devices with limited security capabilities</li>
      <li><strong>Legacy handover:</strong> Fallback to 4G/3G may bypass 5G security controls</li>
    </ol>

    <h4>5G Security Best Practices</h4>
    <ul>
      <li>Implement <strong>zero trust architecture</strong> across 5G core and edge</li>
      <li>Use <strong>network slice isolation</strong> with strict inter-slice policies</li>
      <li>Deploy <strong>API gateways</strong> with rate limiting and authentication for SBA services</li>
      <li>Monitor <strong>east-west traffic</strong> between network functions</li>
      <li>Adopt <strong>post-quantum cryptography</strong> planning for future-proofing</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 5G and IoT Convergence</div>
      <p>5G's ability to support <strong>1 million devices per square kilometer</strong> creates massive IoT attack surfaces. Network slicing allows dedicated slices for IoT with customized security policies, but each slice must be independently secured. Consider <strong>device identity management</strong> and <strong>over-the-air (OTA) update security</strong> as critical controls.</p>
    </div>
  `,

  v6c30: `
    <h3>SD-WAN Security</h3>
    <p>
      <strong>Software-Defined Wide Area Networking (SD-WAN)</strong> transforms WAN connectivity by <strong>decoupling the control plane from the data plane</strong>. While SD-WAN offers significant benefits (cost reduction, agility, cloud connectivity), it also introduces <strong>new security considerations</strong> that must be addressed.
    </p>

    <h4>SD-WAN Security Risks</h4>
    <table>
      <thead>
        <tr><th>Risk Area</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>Controller Compromise</td><td>Central SD-WAN controller is a high-value target — compromise affects all branches</td></tr>
        <tr><td>Overlay Network Attacks</td><td>Attacks on the SD-WAN overlay protocol or encryption</td></tr>
        <tr><td>Direct Internet Breakout</td><td>Branch offices bypassing HQ security by going direct to cloud</td></tr>
        <tr><td>Zero-Touch Provisioning</td><td>Automated device setup can be exploited to deploy malicious configs</td></tr>
        <tr><td>Insecure Underlay</td><td>Relying on public internet (MPLS, broadband) without encryption</td></tr>
      </tbody>
    </table>

    <h4>SD-WAN Security Best Practices</h4>
    <ol>
      <li><strong>Encrypt all overlay traffic:</strong> Use IPsec or WireGuard for all SD-WAN tunnels</li>
      <li><strong>Harden the controller:</strong> Restrict controller access, enable MFA, patch regularly</li>
      <li><strong>Secure direct internet breakout:</strong> Deploy cloud security stack (Zscaler, Cloudflare) at branch</li>
      <li><strong>Zero-touch provisioning security:</strong>
        <ul>
          <li>Use signed configuration files</li>
          <li>Authenticate devices before provisioning</li>
          <li>Use secure bootstrap protocols</li>
        </ul>
      </li>
      <li><strong>Microsegmentation integration:</strong> Apply microsegmentation policies across SD-WAN</li>
      <li><strong>Continuous monitoring:</strong> Monitor for anomalous traffic patterns across tunnels</li>
    </ol>

    <h4>SD-WAN Security Integration</h4>
    <p>Modern SD-WAN solutions integrate security natively:</p>
    <ul>
      <li><strong>SASE (Secure Access Service Edge):</strong> Converged SD-WAN + cloud security (FWaaS, SWG, ZTNA, CASB)</li>
      <li><strong>Built-in firewall and IPS</strong> at branch level</li>
      <li><strong>Centralized policy management</strong> from a single pane of glass</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 SASE — The Convergence</div>
      <p><strong>SASE</strong> (Gartner 2019) converges <strong>SD-WAN</strong> with <strong>cloud-delivered security</strong> (FWaaS, SWG, ZTNA, CASB). It's the model for securing the distributed enterprise where users and applications are everywhere. Leading SASE providers: Palo Alto Prisma SASE, Zscaler ZPA, Cisco Umbrella, Cloudflare ONE.</p>
    </div>
  `,

  v6c31: `
    <h3>SASE</h3>
    <p>
      <strong>Secure Access Service Edge (SASE)</strong> is a <strong>cloud-delivered security and networking framework</strong> that converges multiple security functions — <strong>FWaaS, SWG, ZTNA, CASB, and SD-WAN</strong> — into a single cloud-native service.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Security Follows the User</div>
      <p>SASE shifts security from <strong>data center-centric</strong> to <strong>identity- and context-centric</strong>. Instead of backhauling traffic through a central firewall, security is delivered from <strong>globally distributed cloud points of presence (PoPs)</strong> closest to the user.</p>
    </div>

    <h4>SASE Core Components</h4>
    <table>
      <thead>
        <tr><th>Component</th><th>Function</th></tr>
      </thead>
      <tbody>
        <tr><td>SD-WAN</td><td>Intelligent WAN routing and optimization</td></tr>
        <tr><td>FWaaS (Firewall as a Service)</td><td>Next-gen firewall in the cloud</td></tr>
        <tr><td>SWG (Secure Web Gateway)</td><td>Web filtering, malware protection, DLP</td></tr>
        <tr><td>ZTNA (Zero Trust Network Access)</td><td>Application-level access control</td></tr>
        <tr><td>CASB (Cloud Access Security Broker)</td><td>SaaS application visibility and control</td></tr>
      </tbody>
    </table>

    <h4>SASE Benefits</h4>
    <ul>
      <li><strong>Reduced complexity:</strong> One platform replaces multiple point products</li>
      <li><strong>Better performance:</strong> PoPs near users reduce latency</li>
      <li><strong>Consistent security:</strong> Same policies for all users, everywhere</li>
      <li><strong>Scalability:</strong> Cloud-native scaling for growing organizations</li>
      <li><strong>Remote work support:</strong> Secure access from any location</li>
    </ul>

    <h4>SASE Adoption Considerations</h4>
    <table>
      <thead>
        <tr><th>Consideration</th><th>Details</th></tr>
      </thead>
      <tbody>
        <tr><td>Deployment model</td><td>Cloud-only, hybrid, or phased migration</td></tr>
        <tr><td>Integration</td><td>Existing identity providers, SIEM, endpoints</td></tr>
        <tr><td>Performance</td><td>PoP proximity, latency requirements</td></tr>
        <tr><td>Vendor lock-in</td><td>Evaluate multi-vendor or single-vendor strategies</td></tr>
        <tr><td>Cost model</td><td>Subscription vs. capex; per-user vs. per-location</td></tr>
      </tbody>
    </table>
  `,

  v6c32: `
    <h3>Threat Intelligence</h3>
    <p>
      <strong>Threat intelligence</strong> is <strong>evidence-based knowledge</strong> about existing or emerging threats — including context, mechanisms, indicators, and actionable advice — that helps organizations <strong>make informed security decisions</strong>.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Intelligence-Driven Security</div>
      <p>Threat intelligence transforms raw data (IPs, hashes, domains) into <strong>actionable insights</strong>. Without it, you're defending against threats you don't know about. With it, you can prioritize defenses based on <strong>real threats relevant to your organization</strong>.</p>
    </div>

    <h4>Types of Threat Intelligence</h4>
    <table>
      <thead>
        <tr><th>Type</th><th>Audience</th><th>Content</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Strategic</strong></td>
          <td>Executives, board</td>
          <td>Threat landscape trends, risk to organization, investment decisions</td>
        </tr>
        <tr>
          <td><strong>Tactical</strong></td>
          <td>Security teams</td>
          <td>TTPs of threat actors, MITRE ATT&CK mappings</td>
        </tr>
        <tr>
          <td><strong>Operational</strong></td>
          <td>SOC analysts</td>
          <td>IoCs (IPs, domains, hashes), specific campaigns</td>
        </tr>
        <tr>
          <td><strong>Technical</strong></td>
          <td>Engineers, incident responders</td>
          <td>Malware signatures, exploit details, YARA rules</td>
        </tr>
      </tbody>
    </table>

    <h4>Threat Intelligence Sources</h4>
    <table>
      <thead>
        <tr><th>Source Type</th><th>Examples</th><th>Quality</th></tr>
      </thead>
      <tbody>
        <tr><td>Commercial Feeds</td><td>Recorded Future, Mandiant, CrowdStrike Falcon</td><td>High — curated, enriched</td></tr>
        <tr><td>Open Source (OSINT)</td><td>OTX AlienVault, MISP, Feodo Tracker</td><td>Variable — requires vetting</td></tr>
        <tr><td>Government/ISACs</td><td>CISA, FS-ISAC, MS-ISAC</td><td>High — authoritative</td></tr>
        <tr><td>Vendor Intelligence</td><td>Microsoft Threat Intelligence, Google TAG</td><td>High — based on telemetry</td></tr>
        <tr><td>Community</td><td>Twitter/X, GitHub, forums</td><td>Variable — fast but unverified</td></tr>
      </tbody>
    </table>

    <h4>Integrating Threat Intelligence</h4>
    <ol>
      <li><strong>Feed IoCs to security tools:</strong> SIEM, firewall, EDR, email gateway</li>
      <li><strong>Automate enrichment:</strong> SOAR platforms auto-enrich alerts with threat intel</li>
      <li><strong>Map to MITRE ATT&CK:</strong> Understand adversary TTPs for better defense</li>
      <li><strong>Share intelligence:</strong> Participate in ISACs, sharing groups</li>
      <li><strong>Measure value:</strong> Track how many detections/incidents were informed by intel</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 STIX/TAXII Standards</div>
      <p><strong>STIX (Structured Threat Information Expression)</strong> is a language for describing cyber threat information. <strong>TAXII (Trusted Automated Exchange of Intelligence)</strong> is the transport protocol for sharing STIX data. These standards enable automated, machine-readable threat intelligence sharing between platforms.</p>
    </div>
  `,

  v6c33: `
    <h3>Red Team Operations</h3>
    <p>
      <strong>Red Team Operations</strong> are <strong>simulated adversarial attacks</strong> conducted by skilled security professionals to test an organization's <strong>detection capabilities, response procedures, and overall security posture</strong>. Unlike penetration testing, red teaming focuses on <strong>emulating real-world adversaries</strong> over extended periods.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Test What You Don't Know</div>
      <p>Penetration tests find <strong>known vulnerabilities</strong>. Red team operations test <strong>detection and response capabilities</strong> — they answer the question: "If a real attacker targeted us, how long would they go undetected?"</p>
    </div>

    <h4>Red Team vs. Penetration Test</h4>
    <table>
      <thead>
        <tr><th>Aspect</th><th>Pen Test</th><th>Red Team</th></tr>
      </thead>
      <tbody>
        <tr><td>Scope</td><td>Defined, narrow</td><td>Broad, adversarial</td></tr>
        <tr><td>Duration</td><td>Days to weeks</td><td>Weeks to months</td></tr>
        <tr><td>Objective</td><td>Find vulnerabilities</td><td>Test detection and response</td></tr>
        <tr><td>Stealth</td><td>Often noisy</td><td>Emulate real APTs</td></tr>
        <tr><td>Rules of Engagement</td><td>Strict scope</td><td>Broader, adversary-simulated</td></tr>
        <tr><td>Outcome</td><td>Vulnerability report</td><td>Detection gaps + improvement plan</td></tr>
      </tbody>
    </table>

    <h4>Red Team Kill Chain Simulation</h4>
    <pre><code>
Phase 1: RECONNAISSANCE
  └─ OSINT gathering, social media, employee info
  └─ Technology fingerprinting, DNS enumeration

Phase 2: INITIAL ACCESS
  └─ Spear phishing with weaponized documents
  └─ Watering hole attacks
  └─ Supply chain compromise
  └─ Password spraying with leaked credentials

Phase 3: ESTABLISH PERSISTENCE
  └─ Implant deployment (Cobalt Strike, custom malware)
  └─ Scheduled tasks, startup persistence
  └─ Web shell deployment

Phase 4: LATERAL MOVEMENT
  └─ Credential harvesting (Mimikatz, LaZagne)
  └─ Pass-the-Hash, Pass-the-Ticket
  └─ Privilege escalation exploits

Phase 5: OBJECTIVES
  └─ Data exfiltration (encrypted, staged, exfil)
  └─ Domain dominance (AD takeover)
  └─ Disruption or ransomware simulation
</code></pre>

    <h4>Measuring Red Team Success</h4>
    <ul>
      <li><strong>Time to Detection (TTD):</strong> How long before the blue team detects the intrusion?</li>
      <li><strong>Time to Response (TTR):</strong> How long to contain and eradicate?</li>
      <li><strong>Objectives Achieved:</strong> What percentage of goals were met?</li>
      <li><strong>Detection Coverage:</strong> Which techniques were detected vs. missed?</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Purple Teaming</div>
      <p><strong>Purple Teaming</strong> combines red and blue teams working together in real-time. The red team attacks while the blue team defends, with close collaboration to <strong>immediately improve detection</strong>. This is more effective than traditional red team exercises where findings are reported months later.</p>
    </div>
  `,

  v6c34: `
    <h3>Network Automation</h3>
    <p>
      <strong>Network Automation</strong> uses <strong>software, APIs, and orchestration tools</strong> to manage network infrastructure programmatically. It eliminates manual configuration, reduces human error, and enables <strong>consistent security enforcement</strong> across large-scale networks.
    </p>

    <h4>Why Automate Network Security?</h4>
    <ul>
      <li><strong>Speed:</strong> Deploy firewall rules, ACLs, and policies in seconds, not hours</li>
      <li><strong>Consistency:</strong> Eliminate configuration drift between devices</li>
      <li><strong>Scale:</strong> Manage thousands of devices with the same effort as one</li>
      <li><strong>Auditability:</strong> All changes tracked in version control</li>
      <li><strong>Compliance:</strong> Automated validation against security standards</li>
    </ul>

    <h4>Automation Tools & Frameworks</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Approach</th><th>Use Case</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Ansible</strong></td><td>Agentless, YAML playbooks</td><td>Bulk config deployment, compliance enforcement</td></tr>
        <tr><td><strong>Terraform</strong></td><td>IaC for network infrastructure</td><td>Cloud networking, firewall as code</td></tr>
        <tr><td><strong>Nornir</strong></td><td>Python automation framework</td><td>Complex multi-device workflows</td></tr>
        <tr><td><strong>NAPALM</strong></td><td>Multi-vendor API abstraction</td><td>Device config backup, compliance checks</td></tr>
        <tr><td><strong>Netmiko</strong></td><td>SSH-based device automation</td><td>Legacy device management</td></tr>
        <tr><td><strong>NX-API / eAPI</strong></td><td>Vendor-native REST APIs</td><td>Cisco, Arista programmability</td></tr>
      </tbody>
    </table>

    <h4>Example: Ansible Firewall Rule Deployment</h4>
    <pre><code>
# Ansible playbook to deploy firewall rules
- name: Deploy security rules to all firewalls
  hosts: firewalls
  gather_facts: false
  tasks:
    - name: Ensure SSH access only from management network
      cisco.ios.ios_acl:
        config:
          - afi: ipv4
            aces:
              - grant: permit
                protocol: tcp
                source: 10.0.100.0 0.0.0.255
                destination: any eq 22
                log: enabled
        state: merged

    - name: Block known malicious IPs
      cisco.ios.ios_acl:
        config:
          - afi: ipv4
            aces:
              - grant: deny
                protocol: ip
                source: "{{ item }}"
                destination: any
                log: enabled
      loop: "{{ malicious_ips }}"
</code></pre>

    <h4>Infrastructure as Code for Networks</h4>
    <ol>
      <li><strong>Define network topology in code</strong> (Terraform, Pulumi)</li>
      <li><strong>Store configurations in Git</strong> — version control every change</li>
      <li><strong>CI/CD for network changes</strong> — automated testing and rollback</li>
      <li><strong>Policy as Code</strong> — enforce security standards automatically</li>
      <li><strong>Continuous compliance scanning</strong> — detect drift from desired state</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 Network as Code Maturity Model</div>
      <p><strong>Level 1:</strong> Scripted device configs (Ansible playbooks)<br>
      <strong>Level 2:</strong> IaC with version control and automated testing<br>
      <strong>Level 3:</strong> GitOps for networks — declarative desired state with auto-reconciliation<br>
      <strong>Level 4:</strong> Self-healing networks with automated remediation</p>
    </div>
  `,

  v6c35: `
    <h3>Security Compliance & Auditing</h3>
    <p>
      <strong>Security compliance and auditing</strong> in network security ensures that <strong>network configurations, policies, and controls</strong> meet <strong>regulatory requirements and organizational standards</strong>. Regular auditing provides evidence for compliance certifications and identifies configuration drift.
    </p>

    <h4>Key Compliance Standards for Network Security</h4>
    <table>
      <thead>
        <tr><th>Standard</th><th>Network Security Requirements</th><th>Priority</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>CIS Benchmarks</strong></td><td>Firewall rules, logging, access controls, protocols</td><td>Foundation</td></tr>
        <tr><td><strong>PCI DSS</strong></td><td>Network segmentation, encryption, firewall config, monitoring</td><td>Payment systems</td></tr>
        <tr><td><strong>HIPAA</strong></td><td>Encryption, access controls, audit logs, segmentation</td><td>Healthcare</td></tr>
        <tr><td><strong>NIST 800-53</strong></td><td>SC-7 (Boundary Protection), SC-8 (Transmission Confidentiality)</td><td>Federal systems</td></tr>
        <tr><td><strong>ISO 27001</strong></td><td>A.13 (Communications Security), A.14 (Operations Security)</td><td>International</td></tr>
      </tbody>
    </table>

    <h4>Network Security Audit Checklist</h4>
    <pre><code>
□ Firewall rules reviewed and justified (no any-any rules)
□ Default deny policy enforced on all firewalls
□ Firewall rules match documented business requirements
□ Unused rules removed (reduce rule sprawl)
□ Access control lists reviewed for least privilege
□ VPN configurations use strong encryption (AES-256, IKEv2)
□ Wireless networks use WPA3-Enterprise with 802.1X
□ Network segmentation verified (VLANs, firewalls)
□ Intrusion detection/prevention systems active and tuned
□ Network monitoring and logging enabled on all devices
□ DNS security implemented (DNSSEC, DoH/DoT)
□ DDoS protection configured and tested
□ Change management process followed for all firewall changes
□ Backup of all network device configurations
□ Incident response procedures documented and tested
</code></pre>

    <h4>Automated Compliance Scanning</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Function</th><th>Framework Coverage</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Nipper (by Titania)</strong></td><td>Automated firewall audit</td><td>CIS, STIG, vendor best practices</td></tr>
        <tr><td><strong>FireMon</strong></td><td>Firewall policy analysis and risk scoring</td><td>PCI DSS, NIST, custom</td></tr>
        <tr><td><strong>Tufin</strong></td><td>Security policy orchestration</td><td>Multi-framework</td></tr>
        <tr><td><strong>AlgoSec</strong></td><td>Firewall change risk analysis</td><td>PCI DSS, NIST, HIPAA</td></tr>
        <tr><td><strong>kube-bench / kubescape</strong></td><td>Kubernetes network compliance</td><td>CIS K8s, NSA/CISA</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 Continuous Compliance Monitoring</div>
      <p>Don't wait for annual audits. Implement <strong>continuous compliance monitoring</strong> using tools that automatically compare running configurations against your security baseline and alert on drift. This reduces audit preparation time by up to <strong>80%</strong> and catches issues in real-time.</p>
    </div>
  `
};