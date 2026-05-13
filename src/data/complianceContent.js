export const complianceContent = {

  // ==========================================
  // SECTION 1: COMPLIANCE FUNDAMENTALS
  // ==========================================

  v2c1: `
    <h3>Introduction to Security Compliance</h3>
    <p>
      Security compliance is the practice of ensuring that an organization meets <strong>regulatory, legal, and contractual requirements</strong> related to information security. It goes beyond just implementing security controls — it requires <strong>documented evidence</strong> that those controls are in place and effective.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Compliance vs. Security</div>
      <p><strong>Security</strong> is the practice of protecting information assets from threats. <strong>Compliance</strong> is the process of demonstrating that you meet specific security standards and regulations. You can be <em>secure but not compliant</em> (you protect data but don't follow required frameworks) or <em>compliant but not secure</em> (you check boxes but still have vulnerabilities).</p>
    </div>

    <h4>Why Compliance Matters</h4>
    <ul>
      <li><strong>Legal Requirement:</strong> Non-compliance can result in fines, lawsuits, and criminal charges</li>
      <li><strong>Customer Trust:</strong> Compliance certifications demonstrate commitment to data protection</li>
      <li><strong>Risk Reduction:</strong> Compliance frameworks identify and mitigate security risks systematically</li>
      <li><strong>Competitive Advantage:</strong> Many enterprise contracts require specific compliance certifications</li>
      <li><strong>Operational Improvement:</strong> Frameworks provide structured approaches to security</li>
    </ul>

    <h4>The Compliance Lifecycle</h4>
    <ol>
      <li><strong>Identify:</strong> Determine which regulations and standards apply to your organization</li>
      <li><strong>Assess:</strong> Evaluate current security posture against requirements</li>
      <li><strong>Implement:</strong> Deploy controls, policies, and procedures</li>
      <li><strong>Monitor:</strong> Continuously track compliance status and security posture</li>
      <li><strong>Report:</strong> Document evidence and generate compliance reports</li>
      <li><strong>Remediate:</strong> Address gaps and violations</li>
      <li><strong>Audit:</strong> Undergo formal review by internal or external auditors</li>
    </ol>

    <h4>Key Compliance Terms</h4>
    <table>
      <thead>
        <tr><th>Term</th><th>Definition</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Control</strong></td><td>A safeguard or countermeasure designed to reduce risk</td></tr>
        <tr><td><strong>Policy</strong></td><td>A high-level statement of security intent and direction</td></tr>
        <tr><td><strong>Procedure</strong></td><td>A detailed, step-by-step implementation of a control</td></tr>
        <tr><td><strong>Standard</strong></td><td>A specific, measurable requirement or specification</td></tr>
        <tr><td><strong>Guideline</strong></td><td>A recommended practice that allows flexibility in implementation</td></tr>
        <tr><td><strong>Audit</strong></td><td>A systematic examination of compliance evidence</td></tr>
        <tr><td><strong>Finding</strong></td><td>A gap or deficiency identified during an audit</td></tr>
        <tr><td><strong>Remediation</strong></td><td>The process of correcting identified deficiencies</td></tr>
      </tbody>
    </table>
  `,

  v2c2: `
    <h3>Compliance Frameworks Overview</h3>
    <p>
      A compliance framework is a <strong>structured set of guidelines, standards, and best practices</strong> that organizations follow to ensure they meet regulatory and security requirements. Different frameworks serve different purposes and industries.
    </p>

    <h4>Major Compliance Frameworks</h4>
    <table>
      <thead>
        <tr><th>Framework</th><th>Focus Area</th><th>Industry</th><th>Geography</th><th>Mandatory?</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>ISO 27001</strong></td><td>Information Security Management</td><td>All industries</td><td>International</td><td>Voluntary (but widely expected)</td></tr>
        <tr><td><strong>SOC 2</strong></td><td>Service Organization Controls</td><td>SaaS / Technology</td><td>North America</td><td>Often required by customers</td></tr>
        <tr><td><strong>GDPR</strong></td><td>Data Privacy</td><td>All (with EU data subjects)</td><td>European Union</td><td>Mandatory</td></tr>
        <tr><td><strong>HIPAA</strong></td><td>Health Information Protection</td><td>Healthcare</td><td>United States</td><td>Mandatory</td></tr>
        <tr><td><strong>PCI DSS</strong></td><td>Payment Card Security</td><td>Financial / Retail</td><td>Global</td><td>Mandatory for card processors</td></tr>
        <tr><td><strong>CIS Controls</strong></td><td>Cybersecurity Best Practices</td><td>All industries</td><td>Global</td><td>Voluntary</td></tr>
        <tr><td><strong>NIST CSF</strong></td><td>Cybersecurity Risk Management</td><td>Critical infrastructure</td><td>United States</td><td>Voluntary (mandatory for federal)</td></tr>
        <tr><td><strong>CMMC</strong></td><td>Defense Industrial Base Security</td><td>Defense contractors</td><td>United States</td><td>Mandatory for DoD contractors</td></tr>
        <tr><td><strong>CCPA/CPRA</strong></td><td>Consumer Privacy</td><td>All businesses with CA consumers</td><td>California</td><td>Mandatory</td></tr>
        <tr><td><strong>HITRUST</strong></td><td>Healthcare Risk Management</td><td>Healthcare</td><td>United States</td><td>Often required</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 Choosing the Right Framework</div>
      <p>Organizations often need to comply with <strong>multiple frameworks simultaneously</strong>. A well-designed compliance program maps controls across frameworks to avoid duplication. For example, ISO 27001 Annex A controls can satisfy many GDPR and PCI DSS requirements.</p>
    </div>

    <h4>Compliance Overlap Matrix</h4>
    <table>
      <thead>
        <tr><th>Control Domain</th><th>ISO 27001</th><th>SOC 2</th><th>GDPR</th><th>PCI DSS</th><th>HIPAA</th></tr>
      </thead>
      <tbody>
        <tr><td>Access Control</td><td>✅ A.9</td><td>✅ CC6.1</td><td>✅ Art. 32</td><td>✅ Req 7</td><td>✅ 164.312(a)</td></tr>
        <tr><td>Encryption</td><td>✅ A.10</td><td>✅ CC6.7</td><td>✅ Art. 32</td><td>✅ Req 4</td><td>✅ 164.312(a)(2)(iv)</td></tr>
        <tr><td>Logging & Monitoring</td><td>✅ A.12</td><td>✅ CC7.2</td><td>✅ Art. 30</td><td>✅ Req 10</td><td>✅ 164.312(b)</td></tr>
        <tr><td>Incident Response</td><td>✅ A.16</td><td>✅ CC7.4</td><td>✅ Art. 33-34</td><td>✅ Req 12</td><td>✅ 164.308(a)(6)</td></tr>
        <tr><td>Risk Assessment</td><td>✅ 6.1</td><td>✅ CC3.2</td><td>✅ Art. 35</td><td>✅ Req 12</td><td>✅ 164.308(a)(1)</td></tr>
        <tr><td>Vendor Management</td><td>✅ A.15</td><td>✅ CC9.2</td><td>✅ Art. 28</td><td>✅ Req 12</td><td>✅ 164.308(b)(1)</td></tr>
      </tbody>
    </table>
  `,

  v2c3: `
    <h3>Compliance vs. Security</h3>
    <p>
      One of the most <strong>misunderstood concepts</strong> in cybersecurity is the relationship between compliance and security. They are related but <strong>not the same thing</strong>. Understanding this distinction is critical for building an effective security program.
    </p>

    <h4>The Fundamental Difference</h4>
    <table>
      <thead>
        <tr><th>Aspect</th><th>Security</th><th>Compliance</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Goal</strong></td><td>Protect assets from threats</td><td>Meet regulatory/contractual requirements</td></tr>
        <tr><td><strong>Driven By</strong></td><td>Risk management</td><td>Legal/regulatory obligations</td></tr>
        <tr><td><strong>Scope</strong></td><td>All potential threats</td><td>Specific mandated controls</td></tr>
        <tr><td><strong>Measurement</strong></td><td>Reduced incidents and vulnerabilities</td><td>Audit pass/fail rates</td></tr>
        <tr><td><strong>Timeline</strong></td><td>Continuous (always evolving)</td><td>Periodic (audits, reviews)</td></tr>
        <tr><td><strong>Flexibility</strong></td><td>Choose best-fit controls</td><td>Must follow prescribed requirements</td></tr>
      </tbody>
    </table>

    <div class="warning-box">
      <div class="warning-title">⚠️ The Compliance Trap</div>
      <p>Many organizations make the mistake of treating compliance as the <strong>end goal</strong> rather than a <strong>byproduct</strong> of good security. Being PCI DSS compliant does not mean you are secure — it means you meet the <em>minimum</em> PCI DSS requirements. The <strong>2013 Target breach</strong> occurred while Target was PCI DSS compliant. Attackers exploited vulnerabilities that compliance checklists didn't cover.</p>
    </div>

    <h4>The Venn Diagram of Compliance and Security</h4>
    <ul>
      <li><strong>Compliance-only zone:</strong> Controls that satisfy auditors but don't meaningfully reduce risk (e.g., password rotation policies that lead to weaker passwords)</li>
      <li><strong>Security-only zone:</strong> Controls that reduce risk but aren't mandated (e.g., threat hunting, deception technology)</li>
      <li><strong>Overlap zone:</strong> Controls that both protect the organization AND satisfy compliance requirements (e.g., encryption, access controls, logging)</li>
    </ul>

    <h4>How to Build a Program That Does Both</h4>
    <ol>
      <li><strong>Start with risk:</strong> Identify your most critical assets and threats, then implement controls</li>
      <li><strong>Map to frameworks:</strong> Align your security controls with compliance requirements to maximize overlap</li>
      <li><strong>Go beyond compliance:</strong> Implement security controls for risks that frameworks don't address</li>
      <li><strong>Automate evidence collection:</strong> Use compliance automation tools to reduce audit burden</li>
      <li><strong>Continuous improvement:</strong> Treat compliance as a continuous process, not an annual event</li>
    </ol>
  `,

  v2c4: `
    <h3>Compliance Assessment Process</h3>
    <p>
      A compliance assessment is a <strong>systematic evaluation</strong> of an organization's adherence to regulatory requirements, industry standards, and internal policies. It identifies gaps, weaknesses, and areas for improvement.
    </p>

    <h4>Types of Compliance Assessments</h4>
    <table>
      <thead>
        <tr><th>Type</th><th>Description</th><th>Performed By</th><th>Frequency</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Self-Assessment</strong></td><td>Internal evaluation using checklists</td><td>Internal teams</td><td>Quarterly/Annually</td></tr>
        <tr><td><strong>Internal Audit</strong></td><td>Formal review by internal audit team</td><td>Internal audit department</td><td>Annually</td></tr>
        <tr><td><strong>External Audit</strong></td><td>Independent third-party evaluation</td><td>Certified auditors</td><td>Annually</td></tr>
        <tr><td><strong>Penetration Test</strong></td><td>Technical security testing</td><td>Red team / external testers</td><td>Annually / After changes</td></tr>
        <tr><td><strong>Continuous Monitoring</strong></td><td>Automated compliance tracking</td><td>Compliance tools</td><td>Real-time</td></tr>
      </tbody>
    </table>

    <h4>Step-by-Step Assessment Process</h4>
    <ol>
      <li>
        <strong>Define Scope</strong>
        <ul>
          <li>Identify which frameworks, systems, and processes are in scope</li>
          <li>Define organizational boundaries (which locations, departments, cloud environments)</li>
          <li>Determine the assessment period</li>
        </ul>
      </li>
      <li>
        <strong>Gather Documentation</strong>
        <ul>
          <li>Security policies and procedures</li>
          <li>Architecture diagrams and network maps</li>
          <li>Previous audit reports and findings</li>
          <li>Risk assessments and treatment plans</li>
        </ul>
      </li>
      <li>
        <strong>Control Mapping</strong>
        <p>Map existing controls to framework requirements. Use a control matrix:</p>
        <pre><code>
| Framework Requirement | Existing Control | Gap? | Owner | Status |
|-----------------------|------------------|------|-------|--------|
| Access Management     | IAM Policies     | No   | IT    | Pass  |
| Encryption at Rest    | KMS/TDE          | No   | Sec   | Pass  |
| Incident Response     | IR Plan v2.1     | Yes  | CISO  | Fail  |
        </code></pre>
      </li>
      <li>
        <strong>Evidence Collection</strong>
        <ul>
          <li>Screenshots of configurations</li>
          <li>System logs and audit trails</li>
          <li>Policy documents</li>
          <li>Interview notes with stakeholders</li>
          <li>Automated scan results</li>
        </ul>
      </li>
      <li>
        <strong>Gap Analysis</strong>
        <p>Document all identified gaps with severity ratings:</p>
        <table>
          <thead>
            <tr><th>Severity</th><th>Criteria</th><th>Remediation Timeline</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Critical</strong></td><td>Direct regulatory violation / data exposure risk</td><td>30 days</td></tr>
            <tr><td><strong>High</strong></td><td>Missing major control / audit finding likely</td><td>60 days</td></tr>
            <tr><td><strong>Medium</strong></td><td>Control exists but needs improvement</td><td>90 days</td></tr>
            <tr><td><strong>Low</strong></td><td>Best practice recommendation</td><td>Next cycle</td></tr>
          </tbody>
        </table>
      </li>
      <li>
        <strong>Remediation Planning</strong>
        <p>For each gap, create a remediation plan with:</p>
        <ul>
          <li>Specific action items</li>
          <li>Responsible parties</li>
          <li>Deadlines</li>
          <li>Resource requirements</li>
          <li>Success criteria</li>
        </ul>
      </li>
      <li>
        <strong>Report Generation</strong>
        <p>Compile findings into a formal compliance report including executive summary, methodology, findings, and recommendations.</p>
      </li>
    </ol>
  `,

  v2c5: `
    <h3>Compliance Continuous Monitoring</h3>
    <p>
      Continuous compliance monitoring (CCM) replaces the traditional <strong>"point-in-time" audit</strong> model with <strong>real-time, automated compliance tracking</strong>. Instead of discovering compliance gaps during annual audits, organizations detect drift as it happens.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Continuous Compliance</div>
      <p>Continuous compliance means that compliance status is monitored <strong>24/7/365</strong>, not just during audit season. This enables organizations to maintain a <strong>constant compliance posture</strong> rather than scrambling before audits.</p>
    </div>

    <h4>Benefits of Continuous Monitoring</h4>
    <ul>
      <li><strong>Real-time visibility:</strong> Know your compliance status at any moment</li>
      <li><strong>Reduced audit burden:</strong> Auditors can rely on continuous evidence</li>
      <li><strong>Faster remediation:</strong> Drift detected in hours, not months</li>
      <li><strong>Cost reduction:</strong> Less manual effort preparing for audits</li>
      <li><strong>Risk reduction:</strong> Vulnerabilities addressed before exploitation</li>
    </ul>

    <h4>Continuous Monitoring Architecture</h4>
    <pre><code>
┌─────────────────────────────────────────────┐
│              CLOUD ENVIRONMENT              │
│  ┌─────────┐ ┌──────────┐ ┌──────────────┐  │
│  │Servers  │ │Databases │ │Network Devices│  │
│  └────┬────┘ └────┬─────┘ └──────┬───────┘  │
└───────┼──────────┼──────────────┼───────────┘
        │          │              │
        ▼          ▼              ▼
┌─────────────────────────────────────────────┐
│          DATA COLLECTION LAYER              │
│  ┌────────┐ ┌─────────┐ ┌──────────────┐   │
│  │Agents  │ │APIs     │ │Log Collectors│   │
│  └────┬───┘ └────┬────┘ └──────┬───────┘   │
└───────┼──────────┼──────────────┼───────────┘
        │          │              │
        ▼          ▼              ▼
┌─────────────────────────────────────────────┐
│          ANALYSIS & CORRELATION             │
│  ┌────────────────────────────────────┐     │
│  │  Configuration Management Database  │     │
│  │  + Policy Engine + Risk Scoring     │     │
│  └────────────────────────────────────┘     │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────┐
│        REPORTING & ALERTING                  │
│  ┌─────────┐ ┌──────────┐ ┌──────────────┐  │
│  │Dashboards│ │Alerts    │ │Audit Reports │  │
│  └─────────┘ └──────────┘ └──────────────┘  │
└─────────────────────────────────────────────┘
</code></pre>

    <h4>Key Metrics to Monitor</h4>
    <table>
      <thead>
        <tr><th>Metric</th><th>Description</th><th>Target</th></tr>
      </thead>
      <tbody>
        <tr><td>Compliance Score</td><td>Percentage of controls passing</td><td>≥ 95%</td></tr>
        <tr><td>Mean Time to Remediate (MTTR)</td><td>Average time to fix compliance gaps</td><td>< 7 days for critical</td></tr>
        <tr><td>Control Coverage</td><td>Percentage of controls with automated monitoring</td><td>≥ 80%</td></tr>
        <tr><td>Alert Response Time</td><td>Time from alert to triage</td><td>< 4 hours</td></tr>
        <tr><td>Configuration Drift</td><td>Number of configurations deviating from baseline</td><td>0</td></tr>
      </tbody>
    </table>

    <h4>Popular Compliance Monitoring Tools</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Type</th><th>Best For</th></tr>
      </thead>
      <tbody>
        <tr><td>AWS Config</td><td>Cloud-native</td><td>AWS compliance rules</td></tr>
        <tr><td>Azure Policy</td><td>Cloud-native</td><td>Azure governance</td></tr>
        <tr><td>Chef InSpec</td><td>Infrastructure as Code</td><td>Multi-cloud compliance</td></tr>
        <tr><td>OpenSCAP</td><td>Open source</td><td>SCAP-based compliance</td></tr>
        <tr><td>Prisma Cloud</td><td>CSPM</td><td>Multi-cloud security posture</td></tr>
        <tr><td>Drata / Vanta</td><td>GRC platform</td><td>SOC 2 / ISO automation</td></tr>
        <tr><td>Splunk</td><td>SIEM</td><td>Log-based compliance monitoring</td></tr>
      </tbody>
    </table>
  `,

  // ==========================================
  // SECTION 2: CIS CONTROLS
  // ==========================================

  v2c6: `
    <h3>CIS Controls Overview</h3>
    <p>
      The <strong>Center for Internet Security (CIS) Critical Security Controls</strong> are a prioritized set of <strong>18 actionable security controls</strong> designed to defend against the most pervasive cyber attacks. Originally developed in response to real-world attacks against government and defense systems, they provide a <strong>battle-tested framework</strong> for organizations of all sizes.
    </p>

    <h4>The 18 CIS Controls (v8)</h4>
    <table>
      <thead>
        <tr><th>#</th><th>Control</th><th>Safeguard Count</th><th>Priority</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Inventory and Control of Enterprise Assets</td><td>9</td><td style="color:#E11D48;font-weight:700;">HIGH</td></tr>
        <tr><td>2</td><td>Inventory and Control of Software Assets</td><td>9</td><td style="color:#E11D48;font-weight:700;">HIGH</td></tr>
        <tr><td>3</td><td>Data Protection</td><td>13</td><td style="color:#E11D48;font-weight:700;">HIGH</td></tr>
        <tr><td>4</td><td>Secure Configuration of Enterprise Assets and Software</td><td>11</td><td style="color:#FF6B35;font-weight:700;">HIGH</td></tr>
        <tr><td>5</td><td>Account Management</td><td>9</td><td style="color:#FF6B35;font-weight:700;">HIGH</td></tr>
        <tr><td>6</td><td>Access Control Management</td><td>8</td><td style="color:#FF6B35;font-weight:700;">HIGH</td></tr>
        <tr><td>7</td><td>Continuous Vulnerability Management</td><td>9</td><td style="color:#FF6B35;font-weight:700;">HIGH</td></tr>
        <tr><td>8</td><td>Audit Log Management</td><td>9</td><td style="color:#F59E0B;font-weight:700;">MEDIUM</td></tr>
        <tr><td>9</td><td>Email and Web Browser Protections</td><td>15</td><td style="color:#F59E0B;font-weight:700;">MEDIUM</td></tr>
        <tr><td>10</td><td>Malware Defenses</td><td>8</td><td style="color:#F59E0B;font-weight:700;">MEDIUM</td></tr>
        <tr><td>11</td><td>Data Recovery</td><td>9</td><td style="color:#10B981;font-weight:700;">MEDIUM</td></tr>
        <tr><td>12</td><td>Network Infrastructure Management</td><td>10</td><td style="color:#10B981;font-weight:700;">MEDIUM</td></tr>
        <tr><td>13</td><td>Security Awareness and Skills Training</td><td>5</td><td style="color:#10B981;font-weight:700;">MEDIUM</td></tr>
        <tr><td>14</td><td>Service Provider Management</td><td>9</td><td style="color:#06B6D4;font-weight:700;">MEDIUM</td></tr>
        <tr><td>15</td><td>Application Software Security</td><td>9</td><td style="color:#06B6D4;font-weight:700;">MEDIUM</td></tr>
        <tr><td>16</td><td>Incident Response Management</td><td>10</td><td style="color:#06B6D4;font-weight:700;">MEDIUM</td></tr>
        <tr><td>17</td><td>Penetration Testing</td><td>6</td><td style="color:#8B5CF6;font-weight:700;">LOW</td></tr>
        <tr><td>18</td><td>Cardinality of Network Operations</td><td>6</td><td style="color:#8B5CF6;font-weight:700;">LOW</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 Implementation Groups (IG)</div>
      <p>CIS divides controls into three implementation groups based on organizational maturity and risk:</p>
      <ul>
        <li><strong>IG1 (Essential Cyber Hygiene):</strong> Controls 1, 2, 3, 4, 5, 6, 8, 11 — minimum security for all organizations</li>
        <li><strong>IG2 (Expanded):</strong> IG1 + Controls 7, 9, 10, 12, 14, 15, 16 — for organizations with moderate complexity</li>
        <li><strong>IG3 (Comprehensive):</strong> All 18 controls — for organizations with significant risk profiles</li>
      </ul>
    </div>
  `,

  v2c7: `
    <h3>Inventory of Enterprise Assets</h3>
    <p>
      You cannot secure what you do not know exists. <strong>Asset inventory</strong> is the foundational control upon which all other security measures depend. CIS Control #1 requires maintaining an accurate, complete inventory of all hardware, software, and data assets.
    </p>

    <h4>What to Inventory</h4>
    <table>
      <thead>
        <tr><th>Asset Type</th><th>Examples</th><th>Priority</th><th>Auto-Discoverable?</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Endpoints</strong></td><td>Laptops, desktops, mobile devices</td><td>Critical</td><td>✅ Yes (MDM agents)</td></tr>
        <tr><td><strong>Servers</strong></td><td>Physical servers, VMs, cloud instances</td><td>Critical</td><td>✅ Yes (SCM tools)</td></tr>
        <tr><td><strong>Network Devices</strong></td><td>Routers, switches, firewalls, APs</td><td>High</td><td>✅ Yes (NMS)</td></tr>
        <tr><td><strong>Cloud Resources</strong></td><td>VPCs, storage buckets, databases</td><td>Critical</td><td>✅ Yes (CSPM)</td></tr>
        <tr><td><strong>IoT Devices</strong></td><td>Sensors, cameras, smart devices</td><td>Medium</td><td>❌ Difficult</td></tr>
        <tr><td><strong>Software</strong></td><td>Installed applications, licenses</td><td>High</td><td>✅ Yes (SAM tools)</td></tr>
        <tr><td><strong>Data Stores</strong></td><td>Databases, file shares, data lakes</td><td>Critical</td><td>⚠️ Partial</td></tr>
        <tr><td><strong>DNS Records</strong></td><td>Domains, subdomains, certificates</td><td>High</td><td>✅ Yes (external scanning)</td></tr>
      </tbody>
    </table>

    <h4>Asset Inventory Best Practices</h4>
    <ol>
      <li><strong>Automated Discovery:</strong> Use network scanning (Nmap), agent-based tools (CrowdStrike, Tanium), and cloud APIs (AWS Config, Azure Resource Graph) to discover assets automatically</li>
      <li><strong>Asset Classification:</strong> Tag assets by criticality (Tier 1-4), owner, data classification, and environment</li>
      <li><strong>Dynamic Inventory:</strong> Asset inventory must be <em>living</em> — updated in real-time as resources are provisioned and decommissioned</li>
      <li><strong>Shadow IT Detection:</strong> Monitor network traffic for unknown devices and unsanctioned cloud services</li>
      <li><strong>Integration with CMDB:</strong> Feed inventory data into a Configuration Management Database for centralized management</li>
    </ol>

    <div class="warning-box">
      <div class="warning-title">⚠️ Shadow IT Risk</div>
      <p>Organizations typically have <strong>30-50% more assets</strong> than what appears in their official inventory. Shadow IT — unauthorized cloud services, personal devices, and undocumented systems — represents a massive attack surface. Tools like CASB (Cloud Access Security Brokers) and network traffic analysis can help discover shadow IT.</p>
    </div>

    <h4>Recommended Tools</h4>
    <ul>
      <li><strong>AWS:</strong> AWS Config, AWS Resource Groups Tagging API</li>
      <li><strong>Azure:</strong> Azure Resource Graph, Azure Policy</li>
      <li><strong>GCP:</strong> Cloud Asset Inventory</li>
      <li><strong>Multi-cloud:</strong> Prisma Cloud, Wiz, Orca Security</li>
      <li><strong>Endpoint:</strong> CrowdStrike Falcon, Tanium, Microsoft Defender for Endpoint</li>
    </ul>
  `,

  v2c8: `
    <h3>Inventory of Software</h3>
    <p>
      Every piece of software running in your environment is a <strong>potential attack vector</strong>. CIS Control #2 mandates maintaining a complete inventory of all software — operating systems, applications, libraries, and services — to ensure only <strong>authorized and managed software</strong> is running.
    </p>

    <h4>The Software Inventory Challenge</h4>
    <p>Modern environments face unique software inventory challenges:</p>
    <ul>
      <li><strong>Containers:</strong> Ephemeral images spinning up and down</li>
      <li><strong>SaaS Applications:</strong>Shadow IT tools employees sign up for without IT approval</li>
      <li><strong>Open Source Libraries:</strong> Transitive dependencies you didn't even know you installed</li>
      <li><strong>Serverless Functions:</strong> Code running without persistent infrastructure</li>
    </ul>

    <h4>Software Inventory Categories</h4>
    <table>
      <thead>
        <tr><th>Category</th><th>Examples</th><th>Management Approach</th></tr>
      </thead>
      <tbody>
        <tr><td>Operating Systems</td><td>Windows, Linux, macOS</td><td>Patch management, CIS benchmarks</td></tr>
        <tr><td>Enterprise Applications</td><td>Office 365, SAP, Salesforce</td><td>Vendor management, configuration hardening</td></tr>
        <tr><td>Custom Applications</td><td>Internal web apps, APIs</td><td>SDLC security, dependency scanning</td></tr>
        <tr><td>Open Source Components</td><td>npm, pip, NuGet packages</td><td>SCA tools, SBOMs</td></tr>
        <tr><td>Browser Extensions</td><td>Chrome/Firefox add-ons</td><td>Browser management policies</td></tr>
        <tr><td>Plugins & Add-ins</td><td>Office add-ins, WordPress plugins</td><td>Approval workflows, regular review</td></tr>
      </tbody>
    </table>

    <h4>Application Whitelisting vs. Blacklisting</h4>
    <div class="callout">
      <div class="callout-icon">🛡️</div>
      <div class="callout-content">
        <h4>Application Control Strategy</h4>
        <ul>
          <li><strong>Whitelisting (recommended):</strong> Only explicitly approved software can execute. Most secure but requires ongoing maintenance</li>
          <li><strong>Blacklisting:</strong> Only known-malicious software is blocked. Easier to implement but ineffective against new threats</li>
          <li><strong>Greylisting:</strong> Unknown applications are quarantined until reviewed. Good balance of security and usability</li>
        </ul>
        <p>Tools: Windows Defender Application Control (WDAC), AppLocker, Carbon Black, CrowdStrike Falcon Firewall</p>
      </div>
    </div>

    <h4>SBOM — Software Bill of Materials</h4>
    <div class="key-box">
      <div class="key-title">🔑 Key Concept: SBOM</div>
      <p>An <strong>SBOM</strong> is a formal, machine-readable inventory of all components, libraries, and dependencies in a software application. Analogous to a parts list for manufactured goods. SBOMs are now <strong>mandatory for US federal software</strong> (Executive Order 14028).</p>
    </div>
    <ul>
      <li><strong>SPDX</strong> and <strong>CycloneDX</strong> are the two leading SBOM formats</li>
      <li>Generate SBOMs during CI/CD using tools like <strong>Syft</strong>, <strong>Trivy</strong>, <strong>CycloneDX</strong></li>
      <li>Cross-reference SBOMs against vulnerability databases to identify affected components</li>
    </ul>
  `,

  v2c9: `
    <h3>Data Protection</h3>
    <p>
      <strong>Data protection</strong> encompasses the policies, procedures, and technical controls that ensure data is <strong>collected, stored, processed, and disposed of securely</strong>. CIS Control #3 focuses on protecting data both at rest and in transit.
    </p>

    <h4>Data Classification</h4>
    <p>Before protecting data, you must <strong>classify</strong> it. Different data requires different levels of protection:</p>
    <table>
      <thead>
        <tr><th>Classification</th><th>Description</th><th>Examples</th><th>Handling</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Public</strong></td><td>No impact if disclosed</td><td>Marketing materials, public docs</td><td>No special controls</td></tr>
        <tr><td><strong>Internal</strong></td><td>Limited impact if disclosed</td><td>Internal memos, org charts</td><td>Access controls, DLP</td></tr>
        <tr><td><strong>Confidential</strong></td><td>Significant impact if disclosed</td><td>Financial data, PII, trade secrets</td><td>Encryption, strict access controls, DLP</td></tr>
        <tr><td><strong>Restricted</strong></td><td>Severe impact if disclosed</td><td>Encryption keys, classified data</td><td>Highest encryption, need-to-know access, HSMs</td></tr>
      </tbody>
    </table>

    <h4>Data Protection Controls</h4>
    <table>
      <thead>
        <tr><th>Control</th><th>Purpose</th><th>Implementation</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Encryption at Rest</strong></td><td>Protects stored data</td><td>AES-256, cloud-native encryption (AWS KMS, Azure Key Vault, GCP KMS)</td></tr>
        <tr><td><strong>Encryption in Transit</strong></td><td>Protects data in motion</td><td>TLS 1.2/1.3, certificate pinning, VPN/IPsec</td></tr>
        <tr><td><strong>Data Loss Prevention (DLP)</strong></td><td>Prevents unauthorized data exfiltration</td><td>Microsoft Purview, Google DLP, Symantec DLP, AWS Macie</td></tr>
        <tr><td><strong>Data Masking</strong></td><td>Obfuscates sensitive data in non-production</td><td>Tokenization, format-preserving encryption, synthetic data</td></tr>
        <tr><td><strong>Data Retention Policies</strong></td><td>Defines how long data is kept</td><td>Automated lifecycle policies, legal hold capabilities</td></tr>
        <tr><td><strong>Secure Disposal</strong></td><td>Ensures data is unrecoverable when deleted</td><td>NIST 800-88 guidelines, crypto-shredding</td></tr>
      </tbody>
    </table>

    <h4>Encryption Standards</h4>
    <pre><code>
# Recommended minimum encryption standards
Symmetric:  AES-256-GCM (or ChaCha20-Poly1305)
Asymmetric: RSA-2048+ or ECDSA P-256/384
Hashing:    SHA-256 minimum (SHA-384/SHA-512 preferred for passwords)
TLS:        TLS 1.2 minimum (TLS 1.3 recommended)
Key Exchange: ECDHE with PFS (Perfect Forward Secrecy)
</code></pre>

    <div class="warning-box">
      <div class="warning-title">⚠️ Cryptographic Agility</div>
      <p>Design systems for <strong>cryptographic agility</strong> — the ability to swap algorithms without major rearchitecture. Quantum computing threats mean today's RSA and ECC may become obsolete. NIST is already standardizing <strong>post-quantum cryptography (PQC)</strong> algorithms (CRYSTALS-Kyber, CRYSTALS-Dilithium).</p>
    </div>
  `,

  v2c10: `
    <h3>Secure Configuration Management</h3>
    <p>
      <strong>Default configurations</strong> are almost never secure. CIS Control #4 requires establishing and maintaining a <strong>secure configuration baseline</strong> for all hardware and software, and continuously monitoring for configuration drift.
    </p>

    <h4>The Configuration Drift Problem</h4>
    <p>Configuration drift occurs when systems gradually deviate from their approved baseline due to:</p>
    <ul>
      <li>Manual changes by administrators (often undocumented)</li>
      <li>Software updates changing default settings</li>
      <li>Emergency patches applied without proper review</li>
      <li>Developer modifications in non-production environments</li>
    </ul>

    <h4>CIS Benchmarks</h4>
    <div class="info-box">
      <div class="info-title">💡 CIS Benchmarks</div>
      <p>The CIS publishes <strong>free, community-driven security configuration baselines</strong> for hundreds of products including:
        <ul>
          <li>Operating Systems (Windows, Ubuntu, RHEL, macOS)</li>
          <li>Databases (Oracle, SQL Server, MySQL, PostgreSQL)</li>
          <li>Cloud Platforms (AWS, Azure, GCP)</li>
          <li>Network Devices (Cisco, Juniper, Palo Alto)</li>
          <li>Containers (Docker, Kubernetes)</li>
          <li>Middleware (Apache, Nginx, Tomcat)</li>
        </ul>
      </p>
    </div>

    <h4>Secure Configuration Checklist</h4>
    <table>
      <thead>
        <tr><th>Category</th><th>Control Example</th><th>Risk if Misconfigured</th></tr>
      </thead>
      <tbody>
        <tr><td>Authentication</td><td>Enforce MFA, disable default accounts</td><td>Credential theft, unauthorized access</td></tr>
        <tr><td>Network</td><td>Disable unnecessary ports/services, configure firewalls</td><td>Lateral movement, data exfiltration</td></tr>
        <tr><td>Logging</td><td>Enable audit logging, send to SIEM</td><td>Blind spots during investigation</td></tr>
        <tr><td>Encryption</td><td>Enforce TLS, disable weak ciphers</td><td>Data interception</td></tr>
        <tr><td>File Permissions</td><td>Apply least privilege to files and directories</td><td>Unauthorized data access</td></tr>
        <tr><td>Updates</td><td>Enable automatic security updates</td><td>Known vulnerability exploitation</td></tr>
        <tr><td>Services</td><td>Disable unnecessary services and daemons</td><td>Expanded attack surface</td></tr>
      </tbody>
    </table>

    <h4>Configuration Management Tools</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Category</th><th>Key Features</th></tr>
      </thead>
      <tbody>
        <tr><td>Ansible</td><td>Configuration as Code</td><td>Agentless, idempotent playbooks</td></tr>
        <tr><td>Puppet</td><td>Configuration Management</td><td>Declarative manifests, large-scale management</td></tr>
        <tr><td>Chef</td><td>Configuration Management</td><td>Ruby DSL, cookbook ecosystem</td></tr>
        <tr><td>Chef InSpec</td><td>Compliance Scanning</td><td>Test compliance as code</td></tr>
        <tr><td>OpenSCAP</td><td>SCAP Compliance</td><td>SCAP-based scanning and remediation</td></tr>
        <tr><td>Tenable Nessus</td><td>Vulnerability Scanning</td><td>Configuration auditing + vuln scanning</td></tr>
      </tbody>
    </table>
  `,

  v2c11: `
    <h3>Account Management</h3>
    <p>
      <strong>Identity is the new perimeter</strong>. CIS Control #5 focuses on the complete lifecycle management of all accounts — from creation through retirement. Poor account management is one of the <strong>top causes of data breaches</strong>.
    </p>

    <h4>Account Lifecycle</h4>
    <pre><code>
1. REQUEST     →  Manager approval required
              →  Role-based access assignment
2. PROVISION   →  Create account with correct permissions
              →  Assign to appropriate security groups
              →  Configure MFA
3. ACCESS      →  Periodic access reviews (quarterly minimum)
              →  Monitor for anomalous activity
4. MODIFY      →  Update permissions for role changes
              →  Escalation/de-escalation procedures
5. DISABLE     →  Triggered by termination/transfer
              →  Automated via HR-IAM integration
6. DELETE      →  Remove all access and data
              →  Audit log retention
</code></pre>

    <h4>Account Types and Management</h4>
    <table>
      <thead>
        <tr><th>Account Type</th><th>Description</th><th>Management Priority</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Privileged Accounts</strong></td><td>Admin/root accounts with elevated access</td><td>Highest — PAM solutions, session recording</td></tr>
        <tr><td><strong>Service Accounts</strong></td><td>Machine-to-machine authentication</td><td>High — minimal permissions, no interactive login</td></tr>
        <tr><td><strong>User Accounts</strong></td><td>Standard employee/contractor accounts</td><td>Medium — regular review and lifecycle management</td></tr>
        <tr><td><strong>Shared Accounts</strong></td><td>Accounts used by multiple people</td><td>Eliminate if possible; highest risk if unavoidable</td></tr>
        <tr><td><strong>Vendor/Third-Party Accounts</strong></td><td>External access for vendors</td><td>High — time-limited, scoped access</td></tr>
        <tr><td><strong>Emergency/Break-Glass</strong></td><td>Accounts for emergency situations</td><td>Highest — tightly controlled, fully audited</td></tr>
      </tbody>
    </table>

    <h4>Best Practices</h4>
    <ol>
      <li><strong>Unique Accounts:</strong> Every user must have a unique, individual account — no shared logins</li>
      <li><strong>Automated Provisioning/Deprovisioning:</strong> Integrate IAM with HR systems so accounts are created on hire and disabled on termination</li>
      <li><strong>Privileged Access Management (PAM):</strong> Use tools like CyberArk, BeyondTrust, or HashiCorp Vault to manage privileged credentials</li>
      <li><strong>Regular Access Reviews:</strong> Conduct quarterly access reviews with manager attestation</li>
      <li><strong>Account Expiration:</strong> Set automatic expiration dates for all accounts, especially vendor/temporary accounts</li>
      <li><strong>Password Policy:</strong> Minimum 14 characters, no complexity requirements (per NIST 800-63B), use of password managers encouraged</li>
      <li><strong>Disable, Don't Delete:</strong> When employees leave, disable accounts first, then delete after a retention period</li>
    </ol>
  `,

  v2c12: `
    <h3>Access Control Management</h3>
    <p>
      CIS Control #6 addresses <strong>who can access what</strong> across your entire environment. Effective access control follows the principles of <strong>least privilege</strong> and <strong>separation of duties</strong>.
    </p>

    <h4>Access Control Models</h4>
    <table>
      <thead>
        <tr><th>Model</th><th>Description</th><th>Example</th><th>Best For</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Discretionary (DAC)</strong></td><td>Resource owner controls access</td><td>File permissions on Windows</td><td>Small environments</td></tr>
        <tr><td><strong>Mandatory (MAC)</strong></td><td>System enforces access based on security labels</td><td>Military classification systems</td><td>Government/Defense</td></tr>
        <tr><td><strong>Role-Based (RBAC)</strong></td><td>Access based on job roles</td><td>AWS IAM roles, Azure RBAC</td><td>Enterprise cloud environments</td></tr>
        <tr><td><strong>Attribute-Based (ABAC)</strong></td><td>Access based on attributes (user, resource, environment)</td><td>AWS IAM policies with conditions</td><td>Fine-grained, dynamic environments</td></tr>
        <tr><td><strong>Zero Trust</strong></td><td>Never trust, always verify; every request is authenticated and authorized</td><td>BeyondCorp, ZTNA</td><td>Modern distributed organizations</td></tr>
      </tbody>
    </table>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Principle of Least Privilege (PoLP)</div>
      <p>Users and systems should have <strong>only the minimum permissions necessary</strong> to perform their job functions. This limits the blast radius if an account is compromised. Implement PoLP through role-based access, just-in-time (JIT) access, and regular entitlement reviews.</p>
    </div>

    <h4>Multi-Factor Authentication (MFA)</h4>
    <p>MFA is the <strong>single most effective control</strong> against credential-based attacks. CIS requires MFA for all accounts, especially privileged accounts.</p>
    <table>
      <thead>
        <tr><th>MFA Type</th><th>Security Level</th><th>Examples</th><th>Phishing-Resistant?</th></tr>
      </thead>
      <tbody>
        <tr><td>SMS OTP</td><td>Low</td><td>Text message codes</td><td>❌ No (SIM swap attacks)</td></tr>
        <tr><td>TOTP Apps</td><td>Medium</td><td>Google Authenticator, Authy</td><td>❌ No</td></tr>
        <tr><td>Push Notifications</td><td>Medium-High</td><td>Microsoft Authenticator, Duo Push</td><td>❌ No (push fatigue attacks)</td></tr>
        <tr><td>Hardware Tokens (FIDO2/U2F)</td><td>High</td><td>YubiKey, Titan Security Key</td><td>✅ Yes</td></tr>
        <tr><td>Biometrics</td><td>High</td><td>Windows Hello, Touch ID</td><td>✅ Yes (when paired with FIDO2)</td></tr>
        <tr><td>Certificate-Based</td><td>Very High</td><td>Smart cards, PIV/CAC</td><td>✅ Yes</td></tr>
      </tbody>
    </table>

    <h4>Access Control Governance</h4>
    <ol>
      <li>Implement centralized identity management (Azure AD/Entra ID, Okta, Ping Identity)</li>
      <li>Enforce MFA on all accounts, with phishing-resistant MFA for administrators</li>
      <li>Use Role-Based Access Control (RBAC) to simplify permission management</li>
      <li>Implement Just-In-Time (JIT) access for privileged operations</li>
      <li>Conduct quarterly access reviews and certification campaigns</li>
      <li>Monitor and alert on access anomalies (impossible travel, unusual hours)</li>
      <li>Implement SSO for all applications to reduce credential sprawl</li>
    </ol>
  `,

  v2c13: `
    <h3>Audit Log Management</h3>
    <p>
      CIS Control #8 emphasizes the critical importance of <strong>collecting, managing, and analyzing audit logs</strong>. Without proper logging, organizations are blind to security events and cannot investigate incidents or demonstrate compliance.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: The Three Pillars of Logging</div>
      <ol>
        <li><strong>Collection:</strong> Capture logs from all relevant sources</li>
        <li><strong>Centralization:</strong> Aggregate logs to a single platform</li>
        <li><strong>Analysis:</strong> Search, correlate, and alert on log data</li>
      </ol>
    </div>

    <h4>What to Log</h4>
    <table>
      <thead>
        <tr><th>Category</th><th>Events to Log</th><th>Retention</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Authentication</strong></td><td>Login success/failure, MFA events, password changes, account lockouts</td><td>12 months minimum</td></tr>
        <tr><td><strong>Authorization</strong></td><td>Access granted/denied, privilege escalation, policy changes</td><td>12 months minimum</td></tr>
        <tr><td><strong>Data Access</strong></td><td>File reads/writes, database queries, API calls</td><td>6-12 months</td></tr>
        <tr><td><strong>System Changes</strong></td><td>Configuration changes, software installs, patch installations</td><td>12 months minimum</td></tr>
        <tr><td><strong>Administrative</strong></td><td>User account creation/modification/deletion, group membership changes</td><td>12 months minimum</td></tr>
        <tr><td><strong>Network</strong></td><td>Firewall events, VPN connections, DNS queries</td><td>6-12 months</td></tr>
        <tr><td><strong>Security Events</strong></td><td>Antivirus detections, IDS/IPS alerts, DLP triggers</td><td>12+ months</td></tr>
      </tbody>
    </table>

    <h4>Log Management Best Practices</h4>
    <ul>
      <li><strong>Standardize Formats:</strong> Use Common Event Format (CEF) or structured JSON for consistency</li>
      <li><strong>Timestamps:</strong> Ensure all logs use UTC timestamps with millisecond precision</li>
      <li><strong>Integrity:</strong> Use cryptographic hashing (e.g., HMAC) to prevent log tampering</li>
      <li><strong>Redundancy:</strong> Send logs to multiple destinations for resilience</li>
      <li><strong>Access Control:</strong> Restrict log access to authorized personnel only</li>
      <li><strong>Correlation:</strong> Use SIEM to correlate events across multiple sources</li>
    </ul>

    <h4>Log Retention Requirements</h4>
    <pre><code>
# Typical log retention by framework
SOC 2:          12 months (audit period)
PCI DSS:        12 months (with 3 months immediately accessible)
HIPAA:          6 years (varies by state)
GDPR:           Per purpose limitation principle
SOX:            7 years (financial records)
NIST 800-92:    As defined by organizational policy
</code></pre>

    <h4>SIEM Integration</h4>
    <p>Security Information and Event Management (SIEM) platforms collect, normalize, and analyze log data from across the environment. Modern SIEM solutions include:</p>
    <ul>
      <li><strong>Splunk:</strong> Industry-leading log management and analytics</li>
      <li><strong>Microsoft Sentinel:</strong> Cloud-native SIEM on Azure</li>
      <li><strong>Elastic Security (SIEM):</strong> Open-source log analytics</li>
      <li><strong>IBM QRadar:</strong> Enterprise SIEM with built-in compliance</li>
      <li><strong>Google Chronicle:</strong> Cloud-native security analytics</li>
    </ul>
  `,

  // ==========================================
  // SECTION 3: ISO 27001
  // ==========================================

  v2c14: `
    <h3>ISO 27001 Overview</h3>
    <p>
      <strong>ISO/IEC 27001</strong> is the international standard for <strong>Information Security Management Systems (ISMS)</strong>. It provides a systematic approach to managing sensitive company information so that it remains secure. Published by the International Organization for Standardization (ISO) and the International Electrotechnical Commission (IEC), it is the <strong>most widely adopted information security standard in the world</strong>.
    </p>

    <h4>What ISO 27001 Is (and Isn't)</h4>
    <table>
      <thead>
        <tr><th>ISO 27001 IS</th><th>ISO 27001 IS NOT</th></tr>
      </thead>
      <tbody>
        <tr><td>A framework for managing information security</td><td>A prescriptive checklist of technical controls</td></tr>
        <tr><td>A risk-based approach to security</td><td>A one-time certification event</td></tr>
        <tr><td>Applicable to all organizations, any size</td><td>Only for large enterprises</td></tr>
        <tr><td>A continuous improvement cycle</td><td>A product you can buy</td></tr>
        <tr><td>Voluntary (but increasingly expected)</td><td>Legally required (in most cases)</td></tr>
      </tbody>
    </table>

    <h4>ISO 27001:2022 Structure</h4>
    <p>The 2022 revision reorganized controls into four themes:</p>
    <table>
      <thead>
        <tr><th>Theme</th><th>Controls</th><th>Focus</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Organizational (37 controls)</strong></td><td>Policies, roles, asset management, access control, supplier relationships</td><td>People and processes</td></tr>
        <tr><td><strong>People (8 controls)</strong></td><td>Screening, awareness training, disciplinary process, post-employment</td><td>Human factors</td></tr>
        <tr><td><strong>Physical (14 controls)</strong></td><td>Security perimeters, entry controls, equipment protection, secure disposal</td><td>Physical security</td></tr>
        <tr><td><strong>Technological (34 controls)</strong></td><td>Endpoint devices, privileged access, authentication, cryptography, logging, DLP</td><td>Technical controls</td></tr>
      </tbody>
    </table>

    <h4>Certification Bodies</h4>
    <p>ISO 27001 certification must be performed by an <strong>accredited certification body</strong> (CB). Accreditation ensures the CB meets ISO/IEC 17021 requirements. Recognized accreditation bodies include:</p>
    <ul>
      <li><strong>UKAS</strong> (United Kingdom Accreditation Service)</li>
      <li><strong>ANAB</strong> (ANSI National Accreditation Board)</li>
      <li><strong>DAkkS</strong> (German Accreditation Body)</li>
      <li><strong>CNAS</strong> (China National Accreditation Service)</li>
      <li><strong>JAS-ANZ</strong> (Joint Accreditation System of Australia and New Zealand)</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 ISO 27001 vs. ISO 27002</div>
      <p><strong>ISO 27001</strong> defines the ISMS requirements — what you need to have (the management system). <strong>ISO 27002</strong> provides detailed guidance on implementing the Annex A controls — how to implement them. Think of 27001 as the "what" and 27002 as the "how."</p>
    </div>
  `,

  v2c15: `
    <h3>ISMS Implementation</h3>
    <p>
      An <strong>Information Security Management System (ISMS)</strong> is a systematic, risk-based approach to managing sensitive information. ISO 27001 defines a <strong>Plan-Do-Check-Act (PDCA)</strong> cycle for continuous improvement.
    </p>

    <h4>PDCA Cycle</h4>
    <pre><code>
┌──────────────────────────────────────────────────┐
│                                                    │
│    ┌─────────┐    ┌──────────┐    ┌─────────┐    │
│    │  PLAN   │───▶│   DO     │───▶│  CHECK  │    │
│    └─────────┘    └──────────┘    └─────────┘    │
│       ▲                                    │      │
│       │                                    ▼      │
│    ┌─────────┐    ┌──────────┐                     │
│    │  ACT    │◀───│  Improve │                     │
│    └─────────┘    └──────────┘                     │
│                                                    │
└──────────────────────────────────────────────────┘
</code></pre>

    <h4>Step-by-Step ISMS Implementation</h4>
    <ol>
      <li>
        <strong>Define the ISMS Scope</strong>
        <ul>
          <li>Identify organizational units, locations, assets, and technologies in scope</li>
          <li>Consider external parties and cloud services</li>
          <li>Document exclusions and justifications</li>
        </ul>
      </li>
      <li>
        <strong>Obtain Management Support</strong>
        <ul>
          <li>Present business case (risk-based, not just compliance)</li>
          <li>Secure budget and resource allocation</li>
          <li>Appoint management representative for ISMS</li>
        </ul>
      </li>
      <li>
        <strong>Define Information Security Policy</strong>
        <ul>
          <li>High-level policy aligned with business objectives</li>
          <li>Define security objectives and commitment to continual improvement</li>
          <li>Policy must be approved by top management</li>
        </ul>
      </li>
      <li>
        <strong>Conduct Risk Assessment</strong>
        <ul>
          <li>Identify assets, threats, vulnerabilities, and impacts</li>
          <li>Evaluate risk levels using a consistent methodology</li>
          <li>Produce a Statement of Applicability (SoA)</li>
        </ul>
      </li>
      <li>
        <strong>Select and Implement Controls</strong>
        <ul>
          <li>Choose appropriate Annex A controls based on risk assessment</li>
          <li>Implement policies, procedures, and technical controls</li>
          <li>Allocate responsibilities and resources</li>
        </ul>
      </li>
      <li>
        <strong>Train and Create Awareness</strong>
        <ul>
          <li>Role-specific training for developers, admins, users</li>
          <li>Security awareness programs for all employees</li>
          <li>Document training completion</li>
        </ul>
      </li>
      <li>
        <strong>Monitor, Measure, and Review</strong>
        <ul>
          <li>Monitor control effectiveness through metrics and audits</li>
          <li>Conduct internal audits</li>
          <li>Management review of ISMS performance</li>
        </ul>
      </li>
      <li>
        <strong>Continual Improvement</strong>
        <ul>
          <li>Address audit findings and nonconformities</li>
          <li>Update risk assessments as environment changes</li>
          <li>Feed lessons learned back into the ISMS</li>
        </ul>
      </li>
    </ol>
  `,

  v2c16: `
    <h3>Risk Assessment</h3>
    <p>
      <strong>Risk assessment</strong> is the cornerstone of ISO 27001 and virtually every compliance framework. It is the process of identifying, analyzing, and evaluating <strong>information security risks</strong> to determine which controls are needed.
    </p>

    <h4>Key Risk Assessment Terms</h4>
    <table>
      <thead>
        <tr><th>Term</th><th>Definition</th><th>Formula</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Asset</strong></td><td>Anything of value to the organization</td><td>Data, systems, people, processes, reputation</td></tr>
        <tr><td><strong>Threat</strong></td><td>Potential cause of an unwanted incident</td><td>Hackers, natural disasters, insider threats, vendor failure</td></tr>
        <tr><td><strong>Vulnerability</strong></td><td>Weakness that can be exploited</td><td>Unpatched software, misconfigurations, weak passwords</td></tr>
        <tr><td><strong>Risk</strong></td><td>The potential for loss or damage</td><td>Risk = Likelihood × Impact</td></tr>
        <tr><td><strong>Likelihood</strong></td><td>Probability of a threat exploiting a vulnerability</td><td>Qualitative or quantitative</td></tr>
        <tr><td><strong>Impact</strong></td><td>Consequences if the risk materializes</td><td>Financial, reputational, operational, legal</td></tr>
        <tr><td><strong>Risk Appetite</strong></td><td>Amount of risk the organization accepts</td><td>Defined by management / board</td></tr>
        <tr><td><strong>Residual Risk</strong></td><td>Risk remaining after controls are applied</td><td>Must be within risk appetite</td></tr>
      </tbody>
    </table>

    <h4>Risk Assessment Methodology</h4>
    <pre><code>
Step 1: IDENTIFY
  ├── Identify assets (data, systems, processes)
  ├── Identify threats (threat landscape analysis)
  └── Identify vulnerabilities (scanning, testing, review)

Step 2: ANALYZE
  ├── Assess likelihood (how probable is exploitation?)
  ├── Assess impact (what's the damage if exploited?)
  └── Calculate inherent risk (likelihood × impact)

Step 3: EVALUATE
  ├── Compare risk level against risk appetite
  ├── Prioritize risks (Critical → High → Medium → Low)
  └── Decide: Accept, Mitigate, Transfer, or Avoid

Step 4: TREAT
  ├── Implement controls to reduce risk
  ├── Accept residual risk with management sign-off
  ├── Transfer risk via insurance or outsourcing
  └── Avoid risk by eliminating the activity

Step 5: MONITOR
  ├── Continuously review risk landscape
  ├── Reassess when environment changes
  └── Update risk register regularly
</code></pre>

    <h4>Risk Matrix Example</h4>
    <table>
      <thead>
        <tr><th></th><th style="text-align:center">Insignificant</th><th style="text-align:center">Minor</th><th style="text-align:center">Moderate</th><th style="text-align:center">Major</th><th style="text-align:center">Catastrophic</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Almost Certain</strong></td><td style="background:#10B981;color:white">5</td><td style="background:#84CC16;color:white">10</td><td style="background:#F59E0B;color:white">15</td><td style="background:#F97316;color:white">20</td><td style="background:#E11D48;color:white">25</td></tr>
        <tr><td><strong>Likely</strong></td><td style="background:#84CC16;color:white">4</td><td style="background:#F59E0B;color:white">8</td><td style="background:#F97316;color:white">12</td><td style="background:#E11D48;color:white">16</td><td style="background:#7C2D12;color:white">20</td></tr>
        <tr><td><strong>Possible</strong></td><td style="background:#22C55E;color:white">3</td><td style="background:#F59E0B;color:white">6</td><td style="background:#F97316;color:white">9</td><td style="background:#E11D48;color:white">12</td><td style="background:#7C2D12;color:white">15</td></tr>
        <tr><td><strong>Unlikely</strong></td><td style="background:#10B981;color:white">2</td><td style="background:#84CC16;color:white">4</td><td style="background:#F59E0B;color:white">6</td><td style="background:#F97316;color:white">8</td><td style="background:#B91C1C;color:white">10</td></tr>
        <tr><td><strong>Rare</strong></td><td style="background:#22C55E;color:white">1</td><td style="background:#22C55E;color:white">2</td><td style="background:#84CC16;color:white">3</td><td style="background:#F59E0B;color:white">5</td><td style="background:#F97316;color:white">6</td></tr>
      </tbody>
    </table>
  `,

  v2c17: `
    <h3>Statement of Applicability</h3>
    <p>
      The <strong>Statement of Applicability (SoA)</strong> is a mandatory document required by ISO 27001 (Clause 6.1.3). It is one of the most critical artifacts in the certification process, providing a <strong>comprehensive justification</strong> for the inclusion or exclusion of each Annex A control.
    </p>

    <h4>What the SoA Must Contain</h4>
    <ul>
      <li><strong>List of all 93 Annex A controls</strong> (from ISO 27001:2022)</li>
      <li><strong>Applicability status:</strong> Justify why each control is included or excluded</li>
      <li><strong>Control implementation status:</strong> Implemented, Partially Implemented, Not Implemented, Planned</li>
      <li><strong>Justification for exclusions:</strong> Valid, documented reasons for any excluded controls</li>
      <li><strong>Responsible owner:</strong> Who implements and maintains each control</li>
    </ul>

    <div class="warning-box">
      <div class="warning-title">⚠️ Common SoA Mistakes</div>
      <ul>
        <li><strong>Excluding controls without justification:</strong> Auditors will challenge any exclusion without valid reasoning</li>
        <li><strong>Copy-paste from templates:</strong> SoA must be specific to YOUR organization</li>
        <li><strong>Vagueness:</strong> "Not applicable" is not a valid justification — explain WHY</li>
        <li><strong>Stale content:</strong> SoA must be reviewed and updated regularly (at least annually)</li>
      </ul>
    </div>

    <h4>Sample SoA Entry</h4>
    <pre><code>
Control ID: A.5.23  Information Security for Cloud Services
Status:       Implemented
Owner:        Cloud Security Team
Justification: Organization uses AWS, Azure, and GCP with shared
  responsibility model understood. Cloud security policies
  defined in v1c8 of Security Vedas. Provider security
  capabilities reviewed annually.
Excluded:      No
Notes:         References cloud security controls from v1c1-v1c53
</code></pre>

    <h4>SoA and Risk Assessment Link</h4>
    <p>The SoA must be directly linked to the <strong>risk assessment</strong>. Controls selected for implementation should correspond to risks identified. If a control is excluded, the associated residual risk must be within the organization's risk appetite and formally accepted by management.</p>
  `,

  v2c18: `
    <h3>Annex A Controls</h3>
    <p>
      <strong>ISO 27001:2022 Annex A</strong> contains <strong>93 controls</strong> organized into four themes. These controls represent the <strong>information security measures</strong> an organization can implement to address identified risks.
    </p>

    <h4>The 93 Controls by Theme</h4>
    <table>
      <thead>
        <tr><th>Theme</th><th># Controls</th><th>Key Areas</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Organizational (A.5)</strong></td><td>37</td><td>Policies, roles, threat intelligence, asset management, access control, supplier security, incident management, business continuity, compliance</td></tr>
        <tr><td><strong>People (A.6)</strong></td><td>8</td><td>Screening, terms of employment, awareness, disciplinary process, post-employment</td></tr>
        <tr><td><strong>Physical (A.7)</strong></td><td>14</td><td>Security perimeters, entry controls, office security, equipment protection, secure disposal</td></tr>
        <tr><td><strong>Technological (A.8)</strong></td><td>34</td><td>User devices, access rights, authentication, malware, backup, logging, monitoring, network security, secure development, data protection</td></tr>
      </tbody>
    </table>

    <h4>Key Controls by Category</h4>
    <h5>Organizational Controls (A.5)</h5>
    <table>
      <thead>
        <tr><th>Control</th><th>ID</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>Information Security Policies</td><td>A.5.1</td><td>Establish, implement, and maintain a set of policies</td></tr>
        <tr><td>Information Security Roles</td><td>A.5.2</td><td>Define and allocate security responsibilities</td></tr>
        <tr><td>Segregation of Duties</td><td>A.5.3</td><td>Separate conflicting duties and responsibilities</td></tr>
        <tr><td>Management Responsibilities</td><td>A.5.4</td><td>Management must direct and support ISMS</td></tr>
        <tr><td>Contact with Authorities</td><td>A.5.5</td><td>Maintain contact with relevant authorities</td></tr>
        <tr><td>Contact with Special Interest Groups</td><td>A.5.6</td><td>Maintain contact with relevant security groups</td></tr>
        <tr><td>Threat Intelligence</td><td>A.5.7</td><td>Collect and analyze threat information</td></tr>
        <tr><td>Information Security in Project Management</td><td>A.5.8</td><td>Integrate security into projects</td></tr>
        <tr><td>Inventory of Information Assets</td><td>A.5.9</td><td>Maintain accurate asset inventory</td></tr>
        <tr><td>Acceptable Use</td><td>A.5.10</td><td>Define acceptable use of information and assets</td></tr>
        <tr><td>Return of Assets</td><td>A.5.10</td><td>Ensure return of assets on termination</td></tr>
        <tr><td>Classification of Information</td><td>A.5.12</td><td>Classify information according to its sensitivity</td></tr>
        <tr><td>Information Labelling</td><td>A.5.13</td><td>Label information according to classification</td></tr>
        <tr><td>Information Transfer</td><td>A.5.14</td><td>Ensure secure information transfer agreements</td></tr>
      </tbody>
    </table>

    <h5>Technological Controls (A.8) — Selected Key Controls</h5>
    <table>
      <thead>
        <tr><th>Control</th><th>ID</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>User Endpoint Devices</td><td>A.8.1</td><td>Implement controls for user devices</td></tr>
        <tr><td>Privileged Access Rights</td><td>A.8.2</td><td>Restrict and control privileged access</td></tr>
        <tr><td>Information Access Restriction</td><td>A.8.3</td><td>Control access to information based on policy</td></tr>
        <tr><td>Access to Source Code</td><td>A.8.4</td><td>Control access to source code and development tools</td></tr>
        <tr><td>Secure Authentication</td><td>A.8.5</td><td>Implement secure authentication mechanisms</td></tr>
        <tr><td>Capacity Management</td><td>A.8.6</td><td>Monitor and adjust resource capacity</td></tr>
        <tr><td>Protection Against Malware</td><td>A.8.7</td><td>Implement malware prevention and detection</td></tr>
        <tr><td>Management of Technical Vulnerabilities</td><td>A.8.8</td><td>Patch management and vulnerability remediation</td></tr>
        <tr><td>Configuration Management</td><td>A.8.9</td><td>Implement security configuration settings</td></tr>
        <tr><td>Information Deletion</td><td>A.8.10</td><td>Securely delete information when no longer needed</td></tr>
        <tr><td>Data Masking</td><td>A.8.11</td><td>Mask data in non-production environments</td></tr>
        <tr><td>Data Leakage Prevention</td><td>A.8.12</td><td>Implement DLP controls</td></tr>
        <tr><td>Information Backup</td><td>A.8.13</td><td>Perform regular backups</td></tr>
        <tr><td>Redundancy of Information Processing</td><td>A.8.14</td><td>Ensure redundant systems and failover</td></tr>
        <tr><td>Logging</td><td>A.8.15</td><td>Record security events, retain logs</td></tr>
        <tr><td>Monitoring Activities</td><td>A.8.16</td><td>Monitor networks, systems, and applications</td></tr>
        <tr><td>Clock Synchronization</td><td>A.8.17</td><td>Synchronize all clocks to consistent time source</td></tr>
        <tr><td>Use of Privileged Utility Programs</td><td>A.8.18</td><td>Control system utilities</td></tr>
        <tr><td>Installation of Software</td><td>A.8.19</td><td>Control software installation</td></tr>
        <tr><td>Networks Security</td><td>A.8.20</td><td>Secure network infrastructure</td></tr>
        <tr><td>Security of Network Services</td><td>A.8.21</td><td>Manage network services security</td></tr>
        <tr><td>Segregation of Networks</td><td>A.8.22</td><td>Segment network infrastructure</td></tr>
        <tr><td>Web Filtering</td><td>A.8.23</td><td>Control access to external websites</td></tr>
        <tr><td>Use of Cryptography</td><td>A.8.24</td><td>Implement cryptographic controls</td></tr>
        <tr><td>Secure Development Life Cycle</td><td>A.8.25</td><td>Incorporate security into SDLC</td></tr>
        <tr><td>Application Security Requirements</td><td>A.8.26</td><td>Define security requirements for applications</td></tr>
        <tr><td>Secure System Architecture</td><td>A.8.27</td><td>Design secure system architectures</td></tr>
        <tr><td>Secure Coding</td><td>A.8.28</td><td>Follow secure coding practices</td></tr>
        <tr><td>Security Testing</td><td>A.8.29</td><td>Test systems for security vulnerabilities</td></tr>
        <tr><td>Outsourced Development</td><td>A.8.30</td><td>Control outsourced development</td></tr>
        <tr><td>Separation of Development, Test and Production</td><td>A.8.31</td><td>Separate environments</td></tr>
        <tr><td>Change Management</td><td>A.8.32</td><td>Control changes to systems and software</td></tr>
        <tr><td>Test Information</td><td>A.8.33</td><td>Properly protect test information</td></tr>
        <tr><td>Protection of IS During Audit</td><td>A.8.34</td><td>Minimize disruption during audits</td></tr>
      </tbody>
    </table>
  `,

  v2c19: `
    <h3>Internal Audit</h3>
    <p>
      <strong>Internal audits</strong> are a critical component of ISO 27001, providing <strong>independent verification</strong> that the ISMS is effectively implemented, maintained, and improving. Unlike external audits, internal audits are conducted by the organization itself or by a hired independent party.
    </p>

    <h4>Internal Audit vs. External Audit</h4>
    <table>
      <thead>
        <tr><th>Aspect</th><th>Internal Audit</th><th>External Audit (Certification)</th></tr>
      </thead>
      <tbody>
        <tr><td>Purpose</td><td>Check ISMS effectiveness, find improvements</td><td>Determine if ISMS meets ISO 27001 requirements</td></tr>
        <tr><td>Performed By</td><td>Internal team or hired consultant</td><td>Accredited certification body</td></tr>
        <tr><td>Frequency</td><td>At least annually (recommended quarterly)</td><td>Annual surveillance + 3-year recertification</td></tr>
        <tr><td>Outcome</td><td>Improvement actions</td><td>Certificate issuance or maintenance</td></tr>
        <tr><td>Scope</td><td>Can be partial or full</td><td>Full ISMS scope</td></tr>
        <tr><td>Formality</td><td>Flexible</td><td>Structured, follows strict procedures</td></tr>
      </tbody>
    </table>

    <h4>Planning and Conducting Internal Audits</h4>
    <ol>
      <li><strong>Audit Schedule:</strong> Create an annual audit plan covering all ISMS processes and departments</li>
      <li><strong>Audit Criteria:</strong> Define what will be audited — specific ISO 27001 clauses, Annex A controls, or processes</li>
      <li><strong>Auditor Selection:</strong> Choose auditors with appropriate competence and <strong>independence</strong> from the audited area</li>
      <li><strong>Audit Preparation:</strong> Review documentation, prepare checklists, schedule interviews</li>
      <li><strong>Conduct Audit:</strong> Gather evidence through document review, interviews, observation, and system testing</li>
      <li><strong>Report Findings:</strong> Document nonconformities (major and minor), observations, and opportunities for improvement</li>
      <li><strong>Management Review:</strong> Present findings to management for decision-making</li>
      <li><strong>Corrective Actions:</strong> Define and implement corrective actions with deadlines</li>
      <li><strong>Follow-up Audit:</strong> Verify corrective actions have been effectively implemented</li>
    </ol>

    <h4>Nonconformity Classification</h4>
    <table>
      <thead>
        <tr><th>Level</th><th>Definition</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Major</strong></td><td>A control is missing, broken, or not addressing the risk it was designed to mitigate</td><td>No risk assessment performed; critical security control entirely absent</td></tr>
        <tr><td><strong>Minor</strong></td><td>A control is partially implemented or has a minor deviation</td><td>Security policy exists but hasn't been reviewed in 18 months</td></tr>
        <tr><td><strong>Observation</strong></td><td>A potential area for improvement (not nonconformity)</td><td>Recommendation to enhance monitoring capabilities</td></tr>
      </tbody>
    </table>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Auditor Competence</div>
      <p>ISO 27001 auditors must demonstrate <strong>impartiality, due professional care, and appropriate knowledge</strong> of the standard. Lead auditors typically hold certifications such as <strong>CISA, CISSP, or IRCA-registered ISO 27001 Lead Auditor</strong>.</p>
    </div>
  `,

  v2c20: `
    <h3>Management Review</h3>
    <p>
      <strong>Management review</strong> is a mandatory requirement under ISO 27001 (Clause 9.3) where top management evaluates the <strong>continuing suitability, adequacy, and effectiveness</strong> of the ISMS. It is not a formality — it drives strategic security decisions.
    </p>

    <h4>What Management Must Review</h4>
    <table>
      <thead>
        <tr><th>Review Input</th><th>Purpose</th><th>Source</th></tr>
      </thead>
      <tbody>
        <tr><td>Status of information security objectives</td><td>Measure progress toward goals</td><td>Security metrics dashboard</td></tr>
        <tr><td>Information security performance and effectiveness</td><td>Evaluate control effectiveness</td><td>KPI reports, audit results</td></tr>
        <tr><td>Opportunities for improvement</td><td>Drive continual improvement</td><td>Audit findings, incident lessons</td></tr>
        <tr><td>Changes in internal/external issues</td><td>Assess impact of environmental changes</td><td>Risk register, threat intelligence</td></tr>
        <tr><td>Adequacy of resources</td><td>Ensure sufficient budget and staffing</td><td>Resource allocation review</td></tr>
        <tr><td>Nonconformities and corrective actions</td><td>Track remediation progress</td><td>Previous audit reports</td></tr>
        <tr><td>Results of risk assessment and risk treatment</td><td>Ensure risk alignment</td><td>Risk register</td></tr>
        <tr><td>Changes to the organization</td><td>Identify scope changes</td><td>Organizational changes, M&A activity</td></tr>
      </tbody>
    </table>

    <h4>Management Review Process</h4>
    <pre><code>
1. PREPARATION    → Collect review inputs from all ISMS process owners
2. REVIEW MEETING → Discuss inputs, decisions, and actions (minimum annually)
3. DECISIONS      → Approve changes, allocate resources, set new objectives
4. DOCUMENTATION  → Record decisions and management actions
5. FOLLOW-UP      → Track implementation of management decisions
</code></pre>

    <div class="callout">
      <div class="callout-icon">📋</div>
      <div class="callout-content">
        <h4>Best Practice: Quarterly Reviews</h4>
        <p>While ISO 27001 requires at least <strong>one management review per year</strong>, best practice is to conduct reviews <strong>quarterly</strong>. More frequent reviews enable faster response to emerging risks and ensure the ISMS stays aligned with business objectives.</p>
      </div>
    </div>
  `,

  v2c21: `
    <h3>Certification Process</h3>
    <p>
      ISO 27001 <strong>certification</strong> is the formal process by which an accredited <strong>certification body (CB)</strong> verifies that an organization's ISMS meets all requirements of the standard. Certification is typically valid for <strong>3 years</strong> with annual surveillance audits.
    </p>

    <h4>The Certification Journey</h4>
    <pre><code>
Phase 1: READINESS (Months 1-3)
├── Define ISMS scope
├── Conduct initial risk assessment
├── Define security policies
├── Select Annex A controls
├── Document the SoA
└── Gap analysis and remediation planning

Phase 2: IMPLEMENTATION (Months 3-9)
├── Implement selected controls
├── Deploy policies and procedures
├── Conduct staff awareness training
├── Perform internal audits
├── Hold management reviews
└── Remediate findings from internal audits

Phase 3: STAGE 1 AUDIT (Month 10-12)
├── Document review by CB auditor
├── Verify ISMS documentation is complete
├── Assess readiness for Stage 2
└── Identify any gaps before main audit

Phase 4: STAGE 2 AUDIT (Month 12-15)
├── On-site audit of ISMS implementation
├── Interview key personnel
├── Examine evidence of control operation
├── Test control effectiveness
└── Produce audit report with findings

Phase 5: CERTIFICATION (Month 15+)
├── CB issues certificate (if no major NCs)
├── Certificate valid for 3 years
└── Annual surveillance audits begin

Phase 6: SURVEILLANCE (Yearly)
├── Annual audit (typically 2-3 days)
├── Review changes since last audit
├── Sample controls for ongoing verification
└── Recertification at end of 3-year cycle
</code></pre>

    <h4>Certification Costs</h4>
    <table>
      <thead>
        <tr><th>Cost Component</th><th>Estimated Range</th><th>Notes</th></tr>
      </thead>
      <tbody>
        <tr><td>Consulting / Implementation Support</td><td>$20K – $100K+</td><td>Depends on scope and complexity</td></tr>
        <tr><td>Stage 1 Audit</td><td>$5K – $15K</td><td>Document review</td></tr>
        <tr><td>Stage 2 Audit</td><td>$10K – $30K</td><td>Full certification audit</td></tr>
        <tr><td>Annual Surveillance</td><td>$5K – $15K/year</td><td>Annual maintenance audit</td></tr>
        <tr><td>Recertification (Year 3)</td><td>$10K – $25K</td><td>Full re-audit</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 Tips for Successful Certification</div>
      <ul>
        <li>Start with a <strong>gap analysis</strong> to understand where you stand</li>
        <li>Get <strong>management commitment</strong> early — budget and resources must be allocated</li>
        <li>Don't over-document — focus on <strong>effective controls</strong>, not paperwork</li>
        <li>Use a <strong>compliance management platform</strong> (Drata, Vanta, Laika) to automate evidence collection</li>
        <li>Conduct <strong>at least 2 internal audits</strong> before the Stage 2 audit</li>
        <li>Prepare staff with <strong>awareness training</strong> — auditors will interview employees</li>
      </ul>
    </div>
  `,

  // ==========================================
  // SECTION 4: SOC 2
  // ==========================================

  v2c22: `
    <h3>SOC 2 Overview</h3>
    <p>
      <strong>SOC 2 (System and Organization Controls 2)</strong> is an audit framework developed by the <strong>American Institute of Certified Public Accountants (AICPA)</strong>. It evaluates an organization's <strong>information systems</strong> relevant to security, availability, processing integrity, confidentiality, and privacy. Unlike ISO 27001 (which is a standard you implement), SOC 2 is an <strong>audit report</strong> you produce.
    </p>

    <h4>The Trust Service Criteria (TSC)</h4>
    <p>SOC 2 audits are conducted against five Trust Service Criteria:</p>
    <table>
      <thead>
        <tr><th>Criteria</th><th>Symbol</th><th>Focus</th><th>Mandatory?</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Security</strong></td><td>🔒</td><td>Protection against unauthorized access (Common Criteria)</td><td style="color:#E11D48;">Always required</td></tr>
        <tr><td><strong>Availability</strong></td><td>⚡</td><td>System uptime and operational readiness</td><td>Optional</td></tr>
        <tr><td><strong>Processing Integrity</strong></td><td>⚙️</td><td>System processing is complete, valid, accurate, timely</td><td>Optional</td></tr>
        <tr><td><strong>Confidentiality</strong></td><td>🔐</td><td>Classification and protection of confidential information</td><td>Optional</td></tr>
        <tr><td><strong>Privacy</strong></td><td>👤</td><td>Personal information collection, use, retention, disclosure</td><td>Optional</td></tr>
      </tbody>
    </table>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Common Criteria vs. Criteria-Specific</div>
      <p>All SOC 2 audits include the <strong>Common Criteria (CC series)</strong> which map to security. If you also select Availability, Confidentiality, etc., additional criteria are added. The <strong>Security criterion is mandatory</strong> — you cannot have a SOC 2 without it. Many organizations select all five criteria for comprehensive coverage.</p>
    </div>

    <h4>SOC 2 Trust Principles in Detail</h4>
    <table>
      <thead>
        <tr><th>Principle</th><th>Key Focus Areas</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Security</strong></td><td>Firewalls, intrusion detection, encryption, access controls, MFA, security monitoring</td></tr>
        <tr><td><strong>Availability</strong></td><td>Performance monitoring, disaster recovery, business continuity, redundancy, SLA management</td></tr>
        <tr><td><strong>Processing Integrity</strong></td><td>Quality assurance, data validation, error handling, process monitoring</td></tr>
        <tr><td><strong>Confidentiality</strong></td><td>Data classification, encryption, access restrictions, confidentiality agreements, disposal</td></tr>
        <tr><td><strong>Privacy</strong></td><td>Notice and consent, collection limitation, use/retention/disposal, access and disclosure, quality</td></tr>
      </tbody>
    </table>
  `,

  v2c23: `
    <h3>Trust Service Criteria</h3>
    <p>
      The <strong>Trust Service Criteria (TSC)</strong> are the specific requirements that SOC 2 auditors evaluate. They are organized into <strong>Common Criteria (CC)</strong> applicable to all SOC 2 audits, and <strong>additional criteria</strong> for each supplementary principle.
    </p>

    <h4>Common Criteria (CC) — Security</h4>
    <p>The CC series forms the foundation of every SOC 2 engagement. Key control areas:</p>
    <table>
      <thead>
        <tr><th>CC Series</th><th>Description</th><th>Example Controls</th></tr>
      </thead>
      <tbody>
        <tr><td>CC1 - Control Environment</td><td>Management's commitment to integrity and ethical values</td><td>Code of conduct, organizational structure, performance reviews</td></tr>
        <tr><td>CC2 - Communication and Information</td><td>Internal and external communication of security policies</td><td>Acceptable use policies, incident reporting channels, customer notifications</td></tr>
        <tr><td>CC3 - Risk Assessment</td><td>Identification and assessment of risks to objectives</td><td>Risk assessments, fraud risk, change impact analysis</td></tr>
        <tr><td>CC4 - Monitoring</td><td>Ongoing and/or separate evaluations of controls</td><tr><td>Internal audits, management reviews, SOC reports</td></tr>
        <tr><td>CC5 - Control Activities</td><td>Policies and procedures to mitigate risks</td><td>Authorization processes, reconciliations, reviews</td></tr>
        <tr><td>CC6 - Logical and Physical Access</td><td>Restricting access to authorized personnel</td><td>MFA, role-based access, encryption, physical security</td></tr>
        <tr><td>CC7 - System Operations</td><td>Detecting and responding to security incidents</td><td>Monitoring, intrusion detection, incident response, backups</td></tr>
        <tr><td>CC8 - Change Management</td><td>Authorized, tested, and approved changes</td><td>Change control boards, testing environments, release management</td></tr>
        <tr><td>CC9 - Risk Mitigation</td><td>Identifying and managing risk from business disruptions</td><td>Vendor assessments, insurance, continuity planning</td></tr>
      </tbody>
    </table>

    <h4>Additional Criteria by Trust Principle</h4>
    <table>
      <thead>
        <tr><th>Principle</th><th>Additional Criteria</th><th>Key Focus</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Availability (A1)</strong></td><td>A1.1-A1.3</td><td>Performance, recovery, continuity</td></tr>
        <tr><td><strong>Processing Integrity (PI1)</strong></td><td>PI1.1-PI1.5</td><td>Processing accuracy, completeness, timeliness</td></tr>
        <tr><td><strong>Confidentiality (C1)</strong></td><td>C1.1-C1.3</td><td>Identification, disposal, protection of confidential data</td></tr>
        <tr><td><strong>Privacy (P1-P8)</strong></td><td>P1.1-P8.1</td><td>Notice, choice, collection, use, disclosure, quality, monitoring</td></tr>
      </tbody>
    </table>
  `,

  v2c24: `
    <h3>Type I vs Type II</h3>
    <p>
      SOC 2 reports come in two types, and understanding the difference is <strong>critical</strong> when customers or partners request your SOC report.
    </p>

    <table>
      <thead>
        <tr><th>Aspect</th><th>Type I</th><th>Type II</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>What It Examines</strong></td><td>Design of controls at a <strong>point in time</strong></td><td>Operating effectiveness of controls over a <strong>period of time</strong></td></tr>
        <tr><td><strong>Duration</strong></td><td>Snapshot (single date)</td><td>Typically 6-12 months of audit period</td></tr>
        <tr><td><strong>Focus</strong></td><td>"Are the right controls designed?"</td><td>"Do the controls actually work over time?"</td></tr>
        <tr><td><strong>Effort</strong></td><td>Lower (weeks)</td><td>Higher (months)</td></tr>
        <tr><td><strong>Cost</strong></td><td>Lower</td><td>Higher</td></tr>
        <tr><td><strong>Credibility</strong></td><td>Limited — only proves design</td><td>High — proves operational effectiveness</td></tr>
        <tr><td><strong>Customer Expectation</strong></td><td>Rarely sufficient</td><td>Industry standard for B2B SaaS</td></tr>
      </tbody>
    </table>

    <div class="callout">
      <div class="callout-icon">🚨</div>
      <div class="callout-content">
        <h4>Always Get Type II</h4>
        <p>Almost all enterprise customers now require <strong>SOC 2 Type II</strong>. Type I is typically only a stepping stone to Type II. If a customer asks for "SOC 2 compliance," they almost certainly mean Type II. Plan for Type II from the start to avoid wasted effort.</p>
      </div>
    </div>

    <h4>Achieving Type II</h4>
    <ol>
      <li><strong>First:</strong> Complete a Type I to identify control design gaps</li>
      <li><strong>Remediate:</strong> Fix any design issues found during Type I</li>
      <li><strong>Bridge period:</strong> Some auditors allow a bridge between Type I and Type II (typically 3-6 months of overlap)</li>
      <li><strong>Type II observation period:</strong> Auditor tests controls over 6-12 months</li>
      <li><strong>Report issuance:</strong> SOC 2 Type II report generated</li>
    </ol>

    <h4>Bridge Letter</h4>
    <div class="info-box">
      <div class="info-title">💡 Bridge Letters</div>
      <p>A <strong>Bridge Letter</strong> (or Bridge SOC) covers the gap between the end of one Type II report period and the start of the next. It provides interim assurance that controls remain effective while the full Type II observation period runs. Bridge letters are typically issued for 1-3 months.</p>
    </div>
  `,

  v2c25: `
    <h3>Audit Preparation</h3>
    <p>
      SOC 2 audits typically cost <strong>$20K-$100K+</strong> and take <strong>3-12 months</strong> of preparation. Proper preparation can dramatically reduce cost and timeline while improving outcomes.
    </p>

    <h4>Preparation Timeline</h4>
    <pre><code>
12+ Months Before Audit
├── Define trust service criteria (which principles?)
├── Select auditor (Big 4 vs. boutique firm)
├── Scope determination (which systems, orgs, locations)
└── Budget allocation

6-12 Months Before
├── Gap analysis against TSC
├── Remediate critical control gaps
├── Document policies and procedures
├── Implement technical controls
├── Begin evidence collection
└── Staff training and awareness

3-6 Months Before
├── Run a "pre-audit" (internal dry-run)
├── Test evidence collection automation
├── Prepare management for interviews
├── Review system documentation
└── Address any outstanding findings

0-3 Months Before
├── Final documentation review
├── Confirm auditor logistics
├── Brief key stakeholders
└── Ensure monitoring tools are operational
</code></pre>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Readiness Assessment</div>
      <p>A <strong>readiness assessment</strong> (sometimes called a "pre-audit") is an internal or consultant-led evaluation to identify gaps before the actual audit. Think of it as a practice test. Addressing findings from a readiness assessment is <strong>significantly cheaper</strong> than remediating formal audit findings.</p>
    </div>

    <h4>Common Audit Findings</h4>
    <table>
      <thead>
        <tr><th>Finding Type</th><th>Example</th><th>Prevalence</th></tr>
      </thead>
      <tbody>
        <tr><td>Missing documentation</td><td>No written incident response plan</td><td>Very Common</td></tr>
        <tr><td>Access review gaps</td><td>No quarterly access recertification</td><td>Very Common</td></tr>
        <tr><td>Incomplete change management</td><td>Emergency changes not retroactively documented</td><td>Common</td></tr>
        <tr><td>Insufficient monitoring</td><td>No alerting on failed login attempts</td><td>Common</td></tr>
        <tr><td>Vendor management gaps</td><td>No SOC reports reviewed from key vendors</td><td>Common</td></tr>
        <tr><td>Inconsistent configurations</td><td>Dev and prod environments differ significantly</td><td>Moderate</td></tr>
      </tbody>
    </table>
  `,

  v2c26: `
    <h3>Continuous Monitoring</h3>
    <p>
      For organizations undergoing SOC 2, <strong>continuous monitoring</strong> means maintaining <strong>real-time compliance posture awareness</strong> between audit periods. This reduces the "compliance scramble" before audits and provides ongoing assurance.
    </p>

    <h4>What to Monitor Continuously</h4>
    <table>
      <thead>
        <tr><th>Control Area</th><th>What to Monitor</th><th>Tool Example</th></tr>
      </thead>
      <tbody>
        <tr><td>Access Controls</td><td>User provisioning/deprovisioning, dormant accounts, privilege escalation</td><td>SailPoint, Okta, Azure AD</td></tr>
        <tr><td>Change Management</td><td>Unauthorized changes, change approval rates, emergency change frequency</td><td>ServiceNow, Jira, GitHub Actions</td></tr>
        <tr><td>Security Events</td><td>Failed logins, malware detections, blocked attacks</td><td>Splunk, Sentinel, Datadog</td></tr>
        <tr><td>System Availability</td><td>Uptime, error rates, latency, incident counts</td><td>PagerDuty, Datadog, New Relic</td></tr>
        <tr><td>Data Protection</td><td>Encryption status, data classification, DLP alerts</td><td>Cloud Custodian, AWS Macie, Microsoft Purview</td></tr>
        <tr><td>Vendor Risk</td><td>SOC report status, security questionnaire responses, incident notifications</td><td>Vanta, Drata, Whistic</td></tr>
        <tr><td>Configuration Compliance</td><td>Infrastructure drift from approved baselines</td><td>AWS Config, Azure Policy, Chef InSpec</td></tr>
      </tbody>
    </table>

    <h4>Automated Evidence Collection</h4>
    <div class="callout">
      <div class="callout-icon">⚡</div>
      <div class="callout-content">
        <h4>Automate Evidence, Automate Compliance</h4>
        <p>Manual evidence collection is the <strong>#1 time sink</strong> in SOC 2 preparation. Modern platforms automate >80% of evidence collection:</p>
        <ul>
          <li><strong>Drata / Vanta:</strong> Connect to 100+ cloud services, automatically collect evidence for 70+ SOC 2 controls</li>
          <li><strong>Laika:</strong> Combines evidence collection with policy templates and employee training</li>
          <li><strong>Secureframe:</strong> Compliance automation with built-in auditor workflow</li>
          <li><strong>Tugboat Logic (OneTrust):</strong> Policy generation and control mapping</li>
        </ul>
        <p>These platforms can reduce SOC 2 readiness time from <strong>12 months to 3-4 months</strong>.</p>
      </div>
    </div>

    <h4>Continuous Monitoring Metrics</h4>
    <ul>
      <li><strong>Control Pass Rate:</strong> Percentage of controls passing at any given time (target: >95%)</li>
      <li><strong>Mean Time to Remediate (MTTR):</strong> Average time to fix non-compliant controls (target: <7 days for critical)</li>
      <li><strong>Evidence Freshness:</strong>Age of most recent evidence for each control (target: <30 days)</li>
      <li><strong>Exception Rate:</strong> Number of approved exceptions vs. total controls</li>
    </ul>
  `,

  v2c27: `
    <h3>Reporting</h3>
    <p>
      SOC 2 <strong>reporting</strong> is the final deliverable that communicates your security posture to stakeholders. Understanding who receives reports, what they contain, and how to use them effectively is critical.
    </p>

    <h4>Report Types</h4>
    <table>
      <thead>
        <tr><th>Type</th><th>Audience</th><th>Content</th><th>Accessibility</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>SOC 2 Type II Report</strong></td><td>Current customers, prospects</td><td>Detailed audit findings, control descriptions, test results</td><td>Restricted under NDA</td></tr>
        <tr><td><strong>SOC 3 Report</strong></td><td>General public</td><td>Summary-level auditor opinion on controls</td><td>Public (can display seal)</td></tr>
        <tr><td><strong>Bridge Letter</strong></td><td>Current customers</td><td>Interim assurance between Type II periods</td><td>Restricted under NDA</td></tr>
        <tr><td><strong>Management's Assertion</strong></td><td>Auditor, board</td><td>Management's description of system and control assertions</td><td>Internal / auditor only</td></tr>
        <tr><td><strong>Executive Summary</strong></td><td>C-suite, board</td><td>High-level overview of findings and posture</td><td>Internal</td></tr>
      </tbody>
    </table>

    <h4>The SOC 2 Report Structure</h4>
    <pre><code>
Section 1: Opinion Letter
  └── Independent auditor's opinion on control effectiveness

Section 2: Management's Assertion
  ├── System Description
  ├── Control Objectives
  ├── Control Criteria (mapped to TSC)
  └── Written Assertions

Section 3: Control Descriptions & Tests of Operating Effectiveness
  ├── CC1 - Control Environment (tests and results)
  ├── CC2 - Communication and Information
  ├── CC3 - Risk Assessment
  ├── CC6 - Logical and Physical Access
  ├── CC7 - System Operations
  └── ... (all applicable criteria)

Section 4: Control Exceptions / User Exceptions
  └── Any identified control exceptions

Section 5: Additional Information
  └── Carve-outs, inclusive/exclusive criteria
</code></pre>

    <h4>Using SOC 2 Reports Effectively</h4>
    <ul>
      <li><strong>For customers:</strong> Provide under NDA as part of your security package. Include a cover letter summarizing key points.</li>
      <li><strong>For internal use:</strong> Use findings as a roadmap for security improvement, not just a compliance checkbox</li>
      <li><strong>For prospects:</strong> Offer SOC 3 (public) first; provide full SOC 2 under NDA during procurement</li>
      <li><strong>Continuous value:</strong> Extract metrics from SOC 2 (control pass rates, finding trends) to track security maturity over time</li>
    </ul>

    <div class="success-box">
      <div class="success-title">✓ SOC 2 Best Practices</div>
      <ol>
        <li>Publish a public <strong>SOC 3 report</strong> with your security seal on your website</li>
        <li>Maintain a <strong>SOC 2 "package"</strong> (report, bridge letter, executive summary, FAQ) ready for customer requests</li>
        <li>Use continuous monitoring tools to <strong>stay audit-ready year-round</strong></li>
        <li>Track <strong>finding trends</strong> — decreasing findings year-over-year demonstrates improvement</li>
        <li>Share your SOC 2 report with your <strong>own security team</strong> — it's a valuable improvement tool, not just a customer artifact</li>
      </ol>
    </div>
  `,

  // ==========================================
  // SECTION 5: GDPR
  // ==========================================

  v2c28: `
    <h3>GDPR Overview</h3>
    <p>
      The <strong>General Data Protection Regulation (GDPR)</strong> is the European Union's comprehensive data protection law that came into effect on <strong>May 25, 2018</strong>. It replaced the 1995 Data Protection Directive and represents the most significant shift in data privacy regulation in decades. GDPR applies to any organization that processes personal data of individuals in the EU, regardless of where the organization is located.
    </p>

    <h4>Core Principles of GDPR</h4>
    <ul>
      <li><strong>Lawfulness, Fairness, and Transparency:</strong> Data must be processed lawfully with clear notice to the individual</li>
      <li><strong>Purpose Limitation:</strong> Data collected for one purpose cannot be repurposed without additional consent</li>
      <li><strong>Data Minimization:</strong> Collect only the data that is strictly necessary</li>
      <li><strong>Accuracy:</strong> Keep personal data accurate and up to date</li>
      <li><strong>Storage Limitation:</strong> Retain data only as long as necessary</li>
      <li><strong>Integrity and Confidentiality:</strong> Protect data with appropriate security measures</li>
      <li><strong>Accountability:</strong> The data controller must demonstrate compliance with all principles</li>
    </ul>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Extraterritorial Reach</div>
      <p>GDPR applies to <strong>any organization worldwide</strong> that processes personal data of EU residents. This means a US-based SaaS company serving EU customers must comply with GDPR even without a physical presence in Europe. Article 3 establishes this extraterritorial jurisdiction.</p>
    </div>

    <h4>Key Terms</h4>
    <table>
      <thead>
        <tr><th>Term</th><th>Definition</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Data Controller</strong></td><td>Entity that determines the purposes and means of processing</td></tr>
        <tr><td><strong>Data Processor</strong></td><td>Entity that processes data on behalf of the controller</td></tr>
        <tr><td><strong>Data Subject</strong></td><td>The individual whose data is being processed</td></tr>
        <tr><td><strong>Personal Data</strong></td><td>Any information relating to an identified or identifiable person</td></tr>
        <tr><td><strong>Special Categories</strong></td><td>Racial/ethnic origin, political opinions, health, biometric data, etc.</td></tr>
        <tr><td><strong>DPO</strong></td><td>Data Protection Officer — required expert within the organization</td></tr>
        <tr><td><strong>Supervisory Authority</strong></td><td>National data protection authority in each EU member state</td></tr>
      </tbody>
    </table>
  `,

  v2c29: `
    <h3>Data Subject Rights</h3>
    <p>
      GDPR grants <strong>eight fundamental rights</strong> to data subjects. Understanding and implementing mechanisms to support these rights is essential for compliance. These rights empower individuals with control over their personal data.
    </p>

    <h4>The Eight Data Subject Rights</h4>
    <table>
      <thead>
        <tr><th>#</th><th>Right</th><th>GDPR Article</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td><strong>Right to Information</strong></td><td>Art. 13-14</td><td>Know what data is collected, why, how long it's kept, and who it's shared with</td></tr>
        <tr><td>2</td><td><strong>Right of Access</strong></td><td>Art. 15</td><td>Obtain a copy of all personal data held by an organization</td></tr>
        <tr><td>3</td><td><strong>Right to Rectification</strong></td><td>Art. 16</td><td>Correct inaccurate personal data</td></tr>
        <tr><td>4</td><td><strong>Right to Erasure ("Right to be Forgotten")</strong></td><td>Art. 17</td><td>Request deletion of personal data under specific conditions</td></tr>
        <tr><td>5</td><td><strong>Right to Restriction of Processing</strong></td><td>Art. 18</td><td>Limit how data is used while disputes are resolved</td></tr>
        <tr><td>6</td><td><strong>Right to Data Portability</strong></td><td>Art. 20</td><td>Receive data in a structured, machine-readable format</td></tr>
        <tr><td>7</td><td><strong>Right to Object</strong></td><td>Art. 21</td><td>Object to processing for direct marketing, research, or public interest</td></tr>
        <tr><td>8</td><td><strong>Rights Related to Automated Decisions</strong></td><td>Art. 22</td><td>Not be subject to solely automated decisions with legal effects</td></tr>
      </tbody>
    </table>

    <h4>Response Timeframes</h4>
    <ul>
      <li>Organizations must respond to data subject requests within <strong>30 days</strong></li>
      <li>This can be extended by <strong>two additional months</strong> for complex requests</li>
      <li>You must <strong>verify the identity</strong> of the requestor before fulfilling requests</li>
      <li>Requests can be made <strong>orally or in writing</strong> — including via automated means</li>
    </ul>

    <div class="warning-box">
      <div class="warning-title">⚠️ Right to Erasure Exceptions</div>
      <p>Right to erasure is <strong>not absolute</strong>. Organizations can retain data when necessary for: freedom of expression, legal obligations, public health, archiving/research, and legal claims. Understanding these exceptions is crucial for proper request handling.</p>
    </div>
  `,

  v2c30: `
    <h3>Lawful Basis for Processing</h3>
    <p>
      Under GDPR Article 6, processing personal data is only lawful when at least one of <strong>six legal bases</strong> applies. Choosing the correct legal basis is fundamental to compliance, as it affects data subject rights and organizational obligations.
    </p>

    <h4>The Six Legal Bases</h4>
    <table>
      <thead>
        <tr><th>Legal Basis</th><th>GDPR Reference</th><th>When to Use</th><th>Key Requirement</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Consent</strong></td><td>Art. 6(1)(a)</td><td>Marketing, cookies, non-essential processing</td><td>Must be freely given, specific, informed, unambiguous</td></tr>
        <tr><td><strong>Contractual Necessity</strong></td><td>Art. 6(1)(b)</td><td>Fulfilling a contract with the data subject</td><td>Processing must be necessary for the contract</td></tr>
        <tr><td><strong>Legal Obligation</strong></td><td>Art. 6(1)(c)</td><td>Tax reporting, employment law requirements</td><td>Must be a specific legal requirement</td></tr>
        <tr><td><strong>Vital Interests</strong></td><td>Art. 6(1)(d)</td><td>Life-or-death situations</td><td>Necessary to protect someone's life</td></tr>
        <tr><td><strong>Public Task</strong></td><td>Art. 6(1)(e)</td><td>Government agencies performing official functions</td><td>Based on law with clear basis</td></tr>
        <tr><td><strong>Legitimate Interests</strong></td><td>Art. 6(1)(f)</td><td>Fraud prevention, IT security, direct marketing</td><td>Must balance against data subject's rights</td></tr>
      </tbody>
    </table>

    <h4>Consent Requirements (Strictest Standard)</h4>
    <ul>
      <li><strong>Freely Given:</strong> No coercion — "take it or leave it" consent is invalid for non-essential processing</li>
      <li><strong>Specific:</strong> Separate consent for each purpose (no blanket consent)</li>
      <li><strong>Informed:</strong> Clear, plain-language explanation of what data is collected and how it's used</li>
      <li><strong>Unambiguous:</strong> Requires a clear affirmative action (opt-in boxes, not pre-ticked)</li>
      <li><strong>Withdrawable:</strong> As easy to withdraw consent as to give it</li>
      <li><strong>Documented:</strong> Keep records of when, how, and what the individual consented to</li>
    </ul>

    <h4>Legitimate Interest Assessment (LIA)</h4>
    <p>When relying on legitimate interests, organizations must conduct a three-part test:</p>
    <ol>
      <li><strong>Purpose Test:</strong> Is there a legitimate interest behind the processing?</li>
      <li><strong>Necessity Test:</strong> Is the processing necessary to achieve that purpose?</li>
      <li><strong>Balancing Test:</strong> Do the data subject's rights override the organization's interests?</li>
    </ol>
  `,

  v2c31: `
    <h3>Data Protection Impact Assessment (DPIA)</h3>
    <p>
      A <strong>Data Protection Impact Assessment</strong> is a process designed to identify and minimize data protection risks of a project or system. Under GDPR Article 35, DPIAs are <strong>mandatory</strong> for processing operations that are likely to result in high risk to individuals' rights and freedoms.
    </p>

    <h4>When a DPIA is Required</h4>
    <ul>
      <li><strong>Large-scale profiling:</strong> Systematic evaluation of personal aspects (credit scoring, employee monitoring)</li>
      <li><strong>Large-scale processing of special categories:</strong> Health data, biometrics, political opinions on a large scale</li>
      <li><strong>Systematic monitoring:</strong> Public areas using CCTV, online behavioral tracking</li>
      <li><strong>New technologies:</strong> AI/ML processing, IoT devices, novel data processing methods</li>
      <li><strong>Large-scale processing:</strong> Processing affecting a large number of data subjects or large volumes of data</li>
      <li><strong>Matching/combining datasets:</strong> Merging data from different sources for new purposes</li>
      <li><strong>Vulnerable data subjects:</strong> Children, employees, patients, or other vulnerable groups</li>
    </ul>

    <h4>DPIA Process (9 Steps)</h4>
    <ol>
      <li><strong>Identify the need for a DPIA:</strong> Determine if the processing is high-risk per GDPR guidelines</li>
      <li><strong>Describe the processing:</strong> Document the nature, scope, context, and purposes of the processing</li>
      <li><strong>Consult stakeholders:</strong> Involve DPO, data protection authorities, and business owners</li>
      <li><strong>Assess necessity and proportionality:</strong> Evaluate whether processing is necessary and balanced</li>
      <li><strong>Identify and assess risks:</strong> Determine the likelihood and severity of risks to individuals</li>
      <li><strong>Identify mitigation measures:</strong> Implement controls to reduce identified risks</li>
      <li><strong>Sign off and record outcomes:</strong> Document the DPIA results and decisions</li>
      <li><strong>Integrate outcomes into plan:</strong> Incorporate DPIA findings into the project plan</li>
      <li><strong>Keep under review:</strong> Reassess when there are changes to processing activities</li>
    </ol>

    <h4>DPIA Risk Matrix</h4>
    <table>
      <thead>
        <tr><th>Risk Level</th><th>Criteria</th><th>Action Required</th></tr>
      </thead>
      <tbody>
        <tr><td>🟢 Low</td><td>Minimal impact on individuals, standard processing</td><td>Document and proceed, no further action</td></tr>
        <tr><td>🟡 Medium</td><td>Some risk but mitigable with controls</td><td>Implement additional safeguards before proceeding</td></tr>
        <tr><td>🟠 High</td><td>Significant risk to rights and freedoms</td><td>Consult supervisory authority before processing</td></tr>
        <tr><td>🔴 Critical</td><td>Severe risk, potential for harm</td><td>Redesign processing or obtain explicit consent</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 DPIA Template Structure</div>
      <p>A comprehensive DPIA should include: project description, data flows diagram, consultation with stakeholders, necessity & proportionality assessment, risk assessment with likelihood and severity scores, mitigation measures with implementation timeline, and sign-off by the DPO.</p>
    </div>
  `,

  v2c32: `
    <h3>Data Breach Notification</h3>
    <p>
      GDPR Articles 33 and 34 establish strict timelines and procedures for reporting personal data breaches. <strong>Failing to report a breach within the required timeframe</strong> can result in significant penalties, separate from any fines for the breach itself.
    </p>

    <h4>Notification Timelines</h4>
    <table>
      <thead>
        <tr><th>Notification</th><th>Timeframe</th><th>Recipient</th><th>GDPR Article</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Supervisory Authority</strong></td><td><strong>72 hours</strong> from discovery</td><td>Lead supervisory authority</td><td>Art. 33</td></tr>
        <tr><td><strong>Data Subjects</strong></td><td>"<strong>Without undue delay</strong>" — typically within 72 hours</td><td>Affected individuals</td><td>Art. 34</td></tr>
      </tbody>
    </table>

    <h4>When Must Data Subjects Be Notified?</h4>
    <p>Notification to individuals is required when a breach is <strong>likely to result in a high risk</strong> to their rights and freedoms. Risk is assessed based on:</p>
    <ul>
      <li><strong>Number of individuals</strong> affected</li>
      <li><strong>Sensitivity</strong> of the compromised data (special categories are higher risk)</li>
      <li><strong>Nature of the breach</strong> (accidental vs. malicious, encrypted vs. unencrypted)</li>
      <li><strong>Potential consequences</strong> (identity theft, financial loss, discrimination)</li>
      <li><strong>Mitigation measures</strong> already in place</li>
    </ul>

    <h4>Breach Notification Content</h4>
    <p>When reporting to the supervisory authority, include:</p>
    <ul>
      <li>Description of the breach including categories and approximate number of individuals and records</li>
      <li>Name and contact details of the data protection officer or contact point</li>
      <li>Likely consequences of the breach</li>
      <li>Measures taken or proposed to address the breach and mitigate effects</li>
    </ul>

    <h4>Breach Response Checklist</h4>
    <ol>
      <li><strong>Contain:</strong> Immediately limit the breach scope (isolate systems, revoke access)</li>
      <li><strong>Assess:</strong> Determine what data was compromised and how many individuals are affected</li>
      <li><strong>Notify:</strong> Report to supervisory authority within 72 hours; notify affected individuals if high risk</li>
      <li><strong>Investigate:</strong> Conduct root cause analysis to determine how the breach occurred</li>
      <li><strong>Remediate:</strong> Fix vulnerabilities and implement stronger controls</li>
      <li><strong>Document:</strong> Maintain a breach register with all relevant details</li>
      <li><strong>Review:</strong> Update security measures and procedures to prevent recurrence</li>
    </ol>

    <div class="warning-box">
      <div class="warning-title">⚠️ 72 Hours Is Tight</div>
      <p>The 72-hour clock starts when the organization <strong>becomes aware</strong> of the breach, not when it occurred. Organizations that lack proper detection capabilities may already be in violation. Having<response-plans and automated detection is critical to meeting this timeline.</p>
    </div>
  `,

  v2c33: `
    <h3>Data Protection Officer (DPO)</h3>
    <p>
      The <strong>Data Protection Officer</strong> is a mandatory or recommended role under GDPR responsible for overseeing data protection strategy and ensuring compliance. The DPO serves as the point of contact between the organization and supervisory authorities.
    </p>

    <h4>When a DPO Is Mandatory</h4>
    <p>A DPO <strong>must be appointed</strong> when:</p>
    <ul>
      <li>The organization is a <strong>public authority or body</strong> (except courts acting in judicial capacity)</li>
      <li>Core activities involve <strong>large-scale, regular, systematic monitoring</strong> of data subjects (e.g., online tracking, behavioral advertising)</li>
      <li>Core activities involve <strong>large-scale processing of special categories</strong> of data (health, biometric, criminal records) or data relating to criminal convictions</li>
    </ul>

    <h4>DPO Responsibilities</h4>
    <table>
      <thead>
        <tr><th>Responsibility</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Inform & Advise</strong></td><td>Educate the organization and employees on compliance obligations</td></tr>
        <tr><strong>Monitor Compliance</strong></td></tr>
        <tr><td>Monitor GDPR compliance, data protection policies, and security measures</td></tr>
        <tr><td><strong>Advise on DPIAs</strong></td><td>Review and advise on Data Protection Impact Assessments</td></tr>
        <tr><td><strong>Cooperate with Authorities</strong></td><td>Act as the contact point for supervisory authorities</td></tr>
        <tr><td><strong>Handle Inquiries</strong></td><td>Respond to data subject rights requests and inquiries</td></tr>
        <tr><td><strong>Maintain Records</strong></td><td>Keep and update records of processing activities (ROPA)</td></tr>
      </tbody>
    </table>

    <h4>DPO Independence Requirements</h4>
    <ul>
      <li>DPO reports directly to the <strong>highest management level</strong></li>
      <li>Cannot be <strong>dismissed or penalized</strong> for performing duties</li>
      <li>Must not have <strong>conflicting responsibilities</strong> that could compromise independence</li>
      <li>Can be <strong>internal or external</strong> (outsourced DPO services are permitted)</li>
      <li>Contact details must be <strong>publicly published</strong> and provided to the supervisory authority</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Virtual DPO Options</div>
      <p>Smaller organizations that aren't required to appoint a full-time DPO can use <strong>virtual or outsourced DPO services</strong>. A virtual DPO provides expert compliance guidance part-time, making GDPR compliance accessible to organizations of all sizes.</p>
    </div>
  `,

  v2c34: `
    <h3>Cross-Border Data Transfers</h3>
    <p>
      GDPR <strong>strictly regulates</strong> the transfer of personal data outside the European Economic Area (EEA). Since the <strong>Schrems II</strong> ruling in 2020, organizations must carefully evaluate and implement appropriate safeguards for every international data transfer.
    </p>

    <h4>Adequacy Decisions</h4>
    <p>The European Commission can grant <strong>adequacy decisions</strong> to countries with sufficient data protection laws, allowing free data flow:</p>
    <ul>
      <li><strong>Current adequacy decisions:</strong> UK, Japan, South Korea, Canada (commercial), Israel, New Zealand, Argentina, Uruguay</li>
      <li><strong>US-EU Data Privacy Framework (DPF):</strong> Adopted July 2023, replacing the invalidated Privacy Shield. Companies must self-certify with the US Department of Commerce</li>
      <li>Adequacy decisions are <strong>reviewed periodically</strong> and can be revoked</li>
    </ul>

    <h4>Transfer Mechanisms</h4>
    <table>
      <thead>
        <tr><th>Mechanism</th><th>When to Use</th><th>Key Requirement</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Adequacy Decision</strong></td><td>Country has EU adequacy status</td><td>None additional required</td></tr>
        <tr><td><strong>Standard Contractual Clauses (SCCs)</strong></td><td>Most common mechanism for vendor transfers</td><td>2021 EU-approved SCCs must be used; Transfer Impact Assessment (TIA) required</td></tr>
        <tr><td><strong>Binding Corporate Rules (BCRs)</strong></td><td>Intra-group corporate transfers</td><td>Must be approved by supervisory authority</td></tr>
        <tr><td><strong>Certification/Codes of Conduct</strong></td><td>Industry-specific transfers</td><td>Must be approved by supervisory authority or board</td></tr>
        <tr><td><strong>Derogations</strong></td><td>No other mechanism available</td><td>Explicit consent, contract necessity, or vital interests only</td></tr>
      </tbody>
    </table>

    <h4>Transfer Impact Assessment (TIA)</h4>
    <p>Following Schrems II, organizations using SCCs must conduct a TIA to evaluate whether the legal framework of the destination country provides adequate protection:</p>
    <ol>
      <li>Map the data transfer (what data, to whom, where)</li>
      <li>Assess the legal framework of the third country (surveillance laws, rule of law)</li>
      <li>Evaluate if redress mechanisms are available to data subjects</li>
      <li>Implement supplementary measures if needed (encryption, pseudonymization, contractual protections)</li>
      <li>Document and regularly review the TIA</li>
    </ol>

    <div class="warning-box">
      <div class="warning-title">⚠️ Data Localization Considerations</div>
      <p>Some countries (e.g., China, Russia, India) have <strong>data localization requirements</strong> that conflict with GDPR transfer rules. Organizations operating in multiple jurisdictions must navigate competing legal frameworks carefully, often requiring separate data storage infrastructure per region.</p>
    </div>
  `,

  v2c35: `
    <h3>GDPR Fines and Enforcement</h3>
    <p>
      The GDPR introduced <strong>significantly higher penalties</strong> than its predecessor, the Data Protection Directive. Supervisory authorities now have the power to impose fines that can materially impact an organization's bottom line, making compliance a <strong>critical business priority</strong>.
    </p>

    <h4>Two-Tier Fine Structure</h4>
    <table>
      <thead>
        <tr><th>Tier</th><th>Maximum Fine</th><th>Applies To</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Lower Tier</strong></td><td><strong>€10 million</strong> or <strong>2%</strong> of global annual turnover (whichever is higher)</td><td>Record-keeping failures, notification failures, failure to appoint DPO</td></tr>
        <tr><td><strong>Higher Tier</strong></td><td><strong>€20 million</strong> or <strong>4%</strong> of global annual turnover (whichever is higher)</td><td>Core violations: unlawful processing, data subject rights violations, unauthorized transfers, failure to obtain valid consent</td></tr>
      </tbody>
    </table>

    <h4>Notable GDPR Enforcement Actions</h4>
    <table>
      <thead>
        <tr><th>Year</th><th>Organization</th><th>Fine</th><th>Violation</th></tr>
      </thead>
      <tbody>
        <tr><td>2023</td><td>Meta (Facebook)</td><td>€1.2 billion</td><td>Unlawful cross-border data transfers to US</td></tr>
        <tr><td>2022</td><td>Meta (Instagram)</td><td>€405 million</td><td>Children's data processing violations</td></tr>
        <tr><td>2021</td><td>Amazon Europe</td><td>€746 million</td><td>Inadequate consent mechanisms for advertising cookies</td></tr>
        <tr><td>2020</td><td>Google (Ireland)</td><td>€50 million</td><td>Lack of valid consent for ad personalization</td></tr>
        <tr><td>2019</td><td>British Airways</td><td>£20 million</td><td>Data breach affecting 400,000+ customers</td></tr>
      </tbody>
    </table>

    <h4>Other Enforcement Powers</h4>
    <p>Beyond fines, supervisory authorities can impose:</p>
    <ul>
      <li><strong>Processing bans:</strong> Order complete cessation of data processing</li>
      <li><strong>Data deletion orders:</strong> Mandate deletion of unlawfully processed data</li>
      <li><strong>Processing limitations:</strong> Restrict how data can be used</li>
      <li><strong>Suspension of data flows:</strong> Halt international data transfers</li>
      <li><strong>Compensation claims:</strong> Data subjects can seek compensation for material and non-material damages</li>
      <li><strong>Collective actions:</strong> Consumer groups can file complaints on behalf of individuals</li>
    </ul>

    <h4>Avoiding Fines: Best Practices</h4>
    <ol>
      <li><strong>Conduct regular DPIAs</strong> for high-risk processing activities</li>
      <li><strong>Implement Privacy by Design and Default</strong> in all systems and processes</li>
      <li><strong>Maintain comprehensive records</strong> of processing activities</li>
      <li><strong>Encrypt and pseudonymize</strong> personal data wherever possible</li>
      <li><strong>Train employees</strong> on data protection obligations</li>
      <li><strong>Establish breach response procedures</strong> and test them regularly</li>
      <li><strong>Appoint a qualified DPO</strong> with adequate resources and authority</li>
    </ol>
  `,

  // ==========================================
  // SECTION 6: CCPA / CPRA
  // ==========================================

  v2c36: `
    <h3>CCPA Overview</h3>
    <p>
      The <strong>California Consumer Privacy Act (CCPA)</strong>, effective January 1, 2020, was the first comprehensive state-level privacy law in the United States. It grants California residents significant rights over their personal information and imposes obligations on businesses that collect and process their data. The <strong>California Privacy Rights Act (CPRA)</strong>, effective January 1, 2023, amended and expanded CCPA significantly, creating the California Privacy Protection Agency (CPPA) as the enforcement body.
    </p>

    <h4>Who Does CCPA Apply To?</h4>
    <p>A for-profit entity doing business in California that meets <strong>any</strong> of the following thresholds:</p>
    <ul>
      <li>Annual gross revenue exceeding <strong>$25 million</strong></li>
      <li>Annually buys, sells, or shares personal information of <strong>100,000+ consumers or households</strong></li>
      <li>Derives <strong>50% or more</strong> of annual revenue from selling or sharing personal information</li>
    </ul>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: "Doing Business in California"</div>
      <p>CCPA has broad reach — a business qualifies if it operates in California, collects data of California residents, or meets revenue thresholds regardless of physical presence. This means many out-of-state and international companies fall within scope.</p>
    </div>

    <h4>Key Definitions</h4>
    <table>
      <thead>
        <tr><th>Term</th><th>Definition</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Consumer</strong></td><td>A natural person who is a California resident</td></tr>
        <tr><td><strong>Personal Information (PI)</strong></td><td>Information that identifies, relates to, describes, or can be linked to a consumer</td></tr>
        <tr><td><strong>Sensitive Personal Information (SPI)</strong></td><td>SSN, driver's license, financial account info, precise geolocation, racial/ethnic origin, religious beliefs, biometric data, health info, sexual orientation</td></tr>
        <tr><td><strong>Business</strong></td><td>For-profit entity meeting the thresholds above</td></tr>
        <tr><td><strong>Service Provider</strong></td><td>Entity processing PI on behalf of a business under contract</td></tr>
        <tr><td><strong>Third Party</strong></td><td>Entity receiving PI from a business for a business purpose</td></tr>
        <tr><td><strong>Sale</strong></td><td>Selling, renting, releasing, or disclosing PI for monetary or other valuable consideration</td></tr>
        <tr><td><strong>Sharing</strong></td><td>Making PI available for cross-context behavioral advertising (CPRA expansion)</td></tr>
      </tbody>
    </table>
  `,

  v2c37: `
    <h3>Consumer Rights</h3>
    <p>
      CCPA grants California residents a suite of rights regarding their personal information, many of which parallel GDPR rights but with California-specific nuances and enforcement mechanisms.
    </p>

    <h4>Core Consumer Rights</h4>
    <table>
      <thead>
        <tr><th>Right</th><th>Description</th><th>CPRA Enhancement?</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Right to Know</strong></td><td>Know what PI is collected, why, and with whom it's shared — including specific pieces of PI</td><td>✅ Expanded to categories and specific pieces</td></tr>
        <tr><td><strong>Right to Delete</strong></td><td>Request deletion of collected PI, with exceptions</td><td>✅ Expanded to include data collected through automated means</td></tr>
        <tr><td><strong>Right to Opt-Out of Sale</strong></td><td>Direct businesses not to sell PI</td><td>✅ Expanded to include "sharing" for cross-context advertising</td></tr>
        <tr><td><strong>Right to Non-Discrimination</strong></td><td>Not be discriminated against for exercising CCPA rights</td><td>✅ Clarified and strengthened</td></tr>
        <tr><td><strong>Right to Correct</strong></td><td>Request correction of inaccurate PI</td><td>✅ New under CPRA</td></tr>
        <tr><td><strong>Right to Limit Use of SPI</strong></td><td>Limit use of sensitive PI to necessary purposes only</td><td>✅ New under CPRA</td></tr>
        <tr><td><strong>Right to Opt-Out of Automated Decision-Making</strong></td><td>Opt out of automated decision-making technology including profiling</td><td>✅ New under CPRA (effective 2026)</td></tr>
      </tbody>
    </table>

    <h4>Right to Know — Details</h4>
    <ul>
      <li>Businesses must disclose: categories of PI collected, categories of sources, purposes for collecting/selling/sharing, specific pieces of PI collected</li>
      <li>Right to request PI collected in the <strong>last 12 months</strong></li>
      <li>Businesses must provide at least <strong>two designated methods</strong> for submitting requests (e.g., toll-free number, web form)</li>
      <li>Must respond within <strong>45 days</strong>; extendable by 45 days with notice</li>
    </ul>

    <h4>Right to Opt-Out — "Do Not Sell or Share My Personal Information"</h4>
    <ul>
      <li>Businesses must provide a clear <strong>"Do Not Sell or Share My Personal Information"</strong> link on their website</li>
      <li>Must wait at least <strong>12 months</strong> before requesting reauthorization</li>
      <li>Must respect opt-out signals (Global Privacy Control / GPC)</li>
    </ul>
  `,

  v2c38: `
    <h3>Business Obligations</h3>
    <p>
      Companies subject to CCPA/CPRA must implement specific processes, policies, and technical measures to comply with the law. These obligations extend across data collection, processing, sharing, and consumer interaction.
    </p>

    <h4>Data Collection Notice Requirements</h4>
    <p>At or before the point of collection, businesses must provide notice including:</p>
    <ul>
      <li>Categories of PI to be collected and purposes for which each will be used</li>
      <li>Whether PI will be sold or shared, and how to opt out</li>
      <li>Retention periods for each category</li>
      <li>A link to the full privacy policy</li>
    </ul>

    <h4>Privacy Policy Requirements</h4>
    <ul>
      <li>Description of consumer rights and how to exercise them</li>
      <li>List of categories of PI collected, sold, and shared in the last 12 months</li>
      <li>Disclosure of retention periods and criteria used</li>
      <li>Description of the process for handling consumer requests</li>
      <li>At least two methods for submitting requests</li>
      <li>Updated at least <strong>once every 12 months</strong></li>
    </ul>

    <h4>Service Provider & Third Party Contracts</h4>
    <p>Contracts with service providers must include:</p>
    <ul>
      <li>Prohibition on selling or sharing PI</li>
      <li>Requirement to only use PI for specified business purposes</li>
      <li>Requirement to notify the business of any breach</li>
      <li>Requirement to certify compliance upon request</li>
    </ul>

    <h4>Cybersecurity Requirements (CPRA)</h4>
    <ul>
      <li>Implement <strong>reasonable security procedures</strong> appropriate to the nature of PI</li>
      <li>Conduct <strong>annual cybersecurity audits</strong> (effective 2024 for high-risk processors)</li>
      <li>Perform <strong>risk assessments</strong> for processing that presents significant risk</li>
      <li>Submit results to the <strong>California Privacy Protection Agency (CPPA)</strong></li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Privacy by Design Under CCPA</div>
      <p>CPRA emphasizes <strong>data minimization</strong> and <strong>purpose limitation</strong>. Businesses should implement privacy-by-design principles: collect only what's needed, limit retention, and build privacy controls into systems from the start.</p>
    </div>
  `,

  v2c39: `
    <h3>CCPA Enforcement</h3>
    <p>
      CCPA/CPRA enforcement is shared between the <strong>California Attorney General (AG)</strong> and the newly established <strong>California Privacy Protection Agency (CPPA)</strong>. The law provides for both civil penalties and a limited private right of action.
    </p>

    <h4>Enforcement Bodies</h4>
    <table>
      <thead>
        <tr><th>Enforcer</th><th>Jurisdiction</th><th>Powers</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>California AG</strong></td><td>Broad — all CCPA violations</td><td>Investigate, prosecute, seek civil penalties and injunctive relief</td></tr>
        <tr><td><strong>CPPA</strong></td><td>Technical and administrative violations, rulemaking</td><td>Investigate, issue fines, develop regulations, conduct audits</td></tr>
      </tbody>
    </table>

    <h4>Penalties</h4>
    <ul>
      <li><strong>Civil Penalties (Administrative):</strong> Up to <strong>$2,500 per violation</strong> (unintentional); up to <strong>$7,500 per violation</strong> (intentional or involving minors)</li>
      <li>No cap on total penalties — penalties accumulate per violation, per consumer</li>
      <li>The AG and CPPA have discretion to pursue civil penalties or seek <strong>injunctive relief</strong> only</li>
    </ul>

    <h4>Private Right of Action (Data Breaches Only)</h4>
    <ul>
      <li>Consumers may sue for <strong>unauthorized access and exfiltration, theft, or disclosure</strong> due to a business's failure to implement reasonable security</li>
      <li>Damages: <strong>$100 to $750 per consumer per incident</strong>, or actual damages (whichever is greater)</li>
      <li>Or the AG may bring an action on behalf of affected consumers</li>
      <li>30-day <strong>cure period</strong>: businesses can cure after receiving notice (AG discretion on whether cure is possible for non-breach violations)</li>
    </ul>

    <h4>Notable CCPA Enforcement Actions</h4>
    <table>
      <thead>
        <tr><th>Year</th><th>Organization</th><th>Action</th><th>Details</th></tr>
      </thead>
      <tbody>
        <tr><td>2022</td><td>Sephora</td><td>Settlement</td><td>$1.2 million — failed to disclose sale of personal data and honor opt-out requests</td></tr>
        <tr><td>2022</td><td>Microsoft</td><td>Settlement</td><td>$350,000 — failed to comply with consumer request verification</td></tr>
        <tr><td>2023</td><td>Uber</td><td>Investigation</td><td>Data breach notification and driver data handling</td></tr>
        <tr><td>2023</td><td>Temu</td><td>Investigation</td><td>Data collection practices and privacy compliance</td></tr>
      </tbody>
    </table>

    <div class="warning-box">
      <div class="warning-title">⚠️ Per-Violation, Per-Consumer Model</div>
      <p>CCPA fines are calculated on a <strong>per-violation, per-consumer basis</strong>. For a database of 1 million consumers, even a $2,500/violation fine totals $2.5 billion. This makes large-scale non-compliance financially devastating.</p>
    </div>
  `,

  v2c40: `
    <h3>CPRA Updates and Future Developments</h3>
    <p>
      The <strong>California Privacy Rights Act (CPRA)</strong> significantly amended CCPA, effective January 1, 2023. Understanding the changes and upcoming requirements is essential for organizations subject to California's privacy law.
    </p>

    <h4>Key CPRA Amendments to CCPA</h4>
    <table>
      <thead>
        <tr><th>Area</th><th>CCPA Original</th><th>CPRA Update</th></tr>
      </thead>
      <tbody>
        <tr><td>Sensitive PI</td><td>No separate category</td><td>Added category with right to limit use</td></tr>
        <tr><td>Right to Correct</td><td>Not available</td><td>New consumer right</td></tr>
        <tr><td>Automated Decision-Making</td><td>Not addressed</td><td>Right to opt-out (effective 2026)</td></tr>
        <tr><td>Data Retention</td><td>Discourage retention</td><td>Must disclose retention periods; cannot retain longer than necessary</td></tr>
        <tr><td>Audit Rights</td><td>Not for AG</td><td>CPPA and AG have independent audit authority</td></tr>
        <tr><td>Cybersecurity</td><td>Not addressed</td><td>Annual cybersecurity audits for high-risk processors</td></tr>
        <tr><td>Enforcement</td><td>AG only</td><td>Shared between AG and CPPA</td></tr>
      </tbody>
    </table>

    <h4>CPPA Rulemaking</h4>
    <p>The CPPA is actively developing <strong>implementing regulations</strong> including:</p>
    <ul>
      <li>Automated decision-making technology rules and opt-out mechanisms</li>
      <li>Risk assessment requirements for processing that presents significant risk</li>
      <li>Data sharing agreements and contractual requirements</li>
      <li>Metrics and methodologies for cybersecurity audits</li>
      <li>Consent management and opt-out preference signal standards</li>
    </ul>

    <h4>Preparing for Future Requirements</h4>
    <ol>
      <li><strong>Monitor CPPA rulemaking:</strong> Regulations are evolving rapidly; subscribe to CPPA updates</li>
      <li><strong>Implement privacy engineering:</strong> Build configurable privacy controls that can adapt to new rules</li>
      <li><strong>Conduct data mapping:</strong> Understand what PI you collect, where it flows, and who receives it</li>
      <li><strong>Invest in automation:</strong> Consumer request volumes will increase — manual processes won't scale</li>
      <li><strong>Vendor management:</strong> Ensure service providers and third parties can comply with CPRA requirements</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 Beyond California</div>
      <p>CCPA/CPRA has inspired similar laws in <strong>Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Utah (UCPA), Texas (TDPSA)</strong>, and others. Building a robust privacy program for CCPA often achieves significant compliance with these other state laws as well. Track the <strong>IAPP State Privacy Law Tracker</strong> for current status.</p>
    </div>
  `,
  // HITRUST chapters
  v2c41: `
    <h3>HITRUST Overview</h3>
    <p>
      The <strong>Health Information Trust Alliance (HITRUST)</strong> Common Security Framework (CSF) is a certifiable framework that provides organizations with a comprehensive, flexible, and efficient approach to managing <strong>information risk, security, and compliance</strong> across healthcare and other industries handling sensitive data.
    </p>

    <h4>What is HITRUST?</h4>
    <p>HITRUST is both a framework and a certification body. It maintains the HITRUST CSF, a <strong>prescriptive and certifiable</strong> security framework that:</p>
    <ul>
      <li>Integrates, harmonizes, and cross-references multiple standards and regulations including <strong>HIPAA, NIST, ISO 27001, SOC 2, PCI DSS, HITECH,</strong> and <strong>FTC</strong></li>
      <li>Provides a <strong>single, actionable</strong> set of security controls organized by risk and maturity</li>
      <li>Delivers <strong>scalable certifications</strong> tailored to an organization's size, complexity, and risk profile</li>
      <li>Reduces assessment burden by serving as a <strong>"compliance harmonizer"</strong> that satisfies multiple regulatory requirements simultaneously</li>
    </ul>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Why HITRUST Matters</div>
      <p>HITRUST certification has become the <strong>de facto standard</strong> for demonstrating healthcare cybersecurity maturity. Unlike HIPAA which sets requirements without a specific assessment methodology, HITRUST provides a <strong>rigorous, scored, and independently validated</strong> assessment process that payers, providers, and business associates increasingly demand.</p>
    </div>

    <h4>Who Needs HITRUST?</h4>
    <table>
      <thead>
        <tr><th>Organization Type</th><th>Why HITRUST?</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Healthcare Providers</strong></td><td>Protect PHI, satisfy HIPAA requirements, qualify as business partners</td></tr>
        <tr><td><strong>Health Payers (Insurers)</strong></td><td>Demonstrate security posture to regulators and partners</td></tr>
        <tr><td><strong>Technology Vendors</strong></td><td>Meet partner/contract requirements for handling healthcare data</td></tr>
        <tr><td><strong>Health Tech Startups</strong></td><td>Accelerate sales cycles by proving security maturity</td></tr>
        <tr><td><strong>Business Associates</strong></td><td>Third-party assurance for covered entities</td></tr>
        <tr><td><strong>Financial Services</strong></td><td>Cross-industry risk management (CSF is sector-agnostic)</td></tr>
      </tbody>
    </table>

    <h4>HITRUST CSF Structure</h4>
    <p>The HITRUST CSF organizes 14 control categories containing <strong>135+ specific control objectives</strong> across multiple compliance domains:</p>
    <table>
      <thead>
        <tr><th>Control Category</th><th>Focus</th><th>Approx. Controls</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Information Protection Management</strong></td><td>Information lifecycle, classification, and management</td><td>20+</td></tr>
        <tr><td><strong>Endpoint Protection</strong></td><td>Device security, malware prevention, mobile device management</td><td>13+</td></tr>
        <tr><td><strong>Portable Media Security</strong></td><td>Removable media, encryption, data transport</td><td>5+</td></tr>
        <tr><td><strong>Mobile Device Security</strong></td><td>BYOD, MDM, containerization</td><td>7+</td></tr>
        <tr><td><strong>Wireless Security</strong></td><td>Wi-Fi, Bluetooth, NFC security</td><td>6+</td></tr>
        <tr><td><strong>Configuration Management</strong></td><td>Baseline configurations, change management</td><td>8+</td></tr>
        <tr><td><strong>Vulnerability Management</strong></td><td>Scanning, patching, remediation</td><td>10+</td></tr>
        <tr><td><strong>Network Protection</strong></td><td>Network architecture, segmentation, monitoring</td><td>18+</td></tr>
        <tr><td><strong>Transmission Protection</strong></td><td>Encryption in transit, secure protocols</td><td>10+</td></tr>
        <tr><td><strong>Password Management</strong></td><td>Authentication controls, credential policies</td><td>9+</td></tr>
        <tr><td><strong>Access Control</strong></td><td>Identity management, authorization, privileged access</td><td>12+</td></tr>
        <tr><td><strong>Audit Logging & Monitoring</strong></td><td>Log management, SIEM, anomaly detection</td><td>12+</td></tr>
        <tr><td><strong>Education, Training & Awareness</strong></td><td>Security training, phishing awareness</td><td>6+</td></tr>
        <tr><td><strong>Third-Party Assurance</strong></td><td>Vendor management, supply chain security</td><td>10+</td></tr>
        <tr><td><strong>Incident Management</strong></td><td>IR planning, response, forensics, notification</td><td>14+</td></tr>
        <tr><td><strong>Business Continuity & Disaster Recovery</strong></td><td>BCP, DRP, backup, RTO/RPO</td><td>10+</td></tr>
        <tr><td><strong>Risk Management</strong></td><td>Risk assessment, treatment, monitoring</td><td>8+</td></tr>
        <tr><td><strong>Physical & Environmental Security</strong></td><td>Facility access, environmental controls</td><td>13+</td></tr>
        <tr><td><strong>Data Protection & Privacy</strong></td><td>Encryption, DLP, privacy controls</td><td>15+</td></tr>
      </tbody>
    </table>

    <h4>HITRUST Assessment Tiers</h4>
    <p>HITRUST offers scalable assessment options based on organizational maturity and risk:</p>
    <ul>
      <li><strong>e1 (Essentials 1):</strong> Entry-level — 1-year certification using the HITRUST MyCSF tool for small to mid-size organizations</li>
      <li><strong>i1 (Implemented 1):</strong> Validated — 1-year certification confirming 75+ controls are implemented</li>
      <li><strong>r2 (Risk-based, Validated):</strong> The gold standard — 2-year certification with a comprehensive risk-based assessment covering all 14 categories, scored and validated by a HITRUST-approved assessor</li>
    </ul>
  `,
  v2c42: `
    <h3>r2R Validated Assessment</h3>
    <p>
      The <strong>HITRUST r2 Validated Assessment</strong> is the most comprehensive and widely recognized HITRUST certification. It involves a rigorous, risk-based evaluation performed by a <strong>HITRUST-approved external assessor</strong> that validates an organization's security controls against the full HITRUST CSF.
    </p>

    <div class="warning-box">
      <div class="warning-title">⚠️ "r2R" vs "r2"</div>
      <p>The designation <strong>"r2"</strong> refers to the HITRUST assessment methodology version. It is sometimes referenced as <strong>r2 Validated</strong> or <strong>HITRUST CSF Certified</strong>. The "R" in r2R also appears in documentation and denotes the <strong>risk-based</strong> approach. All refer to the same current assessment standard.</p>
    </div>

    <h4>Assessment Phases</h4>
    <ol>
      <li>
        <strong>Readiness Assessment (Self-Assessment)</strong>
        <ul>
          <li>Organization completes a <strong>self-assessment</strong> using the HITRUST MyCSF Connect platform</li>
          <li>Maps existing controls to HITRUST CSF requirements</li>
          <li>Identifies gaps and prioritizes remediation efforts</li>
          <li>Generates a <strong>Readiness Score</strong> indicating preparation level</li>
          <li>Typical duration: <strong>2-4 months</strong></li>
        </ul>
      </li>
      <li>
        <strong>Remediation & Evidence Preparation</strong>
        <ul>
          <li>Address identified gaps from the readiness assessment</li>
          <li>Collect and organize <strong>evidence artifacts</strong> for each control:</li>
          <ul>
            <li>Policy and procedure documents</li>
            <li>System configurations and screenshots</li>
            <li>Audit logs and monitoring reports</li>
            <li>Interview transcripts with key personnel</li>
            <li>Automated scan results and penetration test reports</li>
          </ul>
          <li>Prepare the <strong>Corrective Action Plan (CAP)</strong> for open findings</li>
          <li>Typical duration: <strong>3-6 months</strong></li>
        </ul>
      </li>
      <li>
        <strong>Validated Assessment (On-site / Remote)</strong>
        <ul>
          <li>Conducted by a <strong>HITRUST-Certified Assessor (HCA)</strong> from an approved assessor organization</li>
          <li>Three assessment methodologies combined:</li>
          <ul>
            <li><strong>Maturity Scoring:</strong> Evaluates policies, procedures, and management practices</li>
            <li><strong>Control Scoring:</strong> Tests the implementation and effectiveness of technical controls</li>
            <li><strong>Residual Risk Scoring:</strong> Assesses the organization's acceptable risk level</li>
          </ul>
          <li>Includes document review, interviews, technical testing, and observation</li>
          <li>Typical duration: <strong>4-8 weeks</strong></li>
        </ul>
      </li>
      <li>
        <strong>Quality Assurance & Certification</strong>
        <ul>
          <li>HITRUST performs <strong>QA review</strong> of assessment results</li>
          <li>Issues a <strong>HITRUST CSF Certified</strong> report with an overall score</li>
          <li>Certification valid for <strong>2 years</strong> with annual surveillance</li>
        </ul>
      </li>
    </ol>

    <h4>Scoring & Ratings</h4>
    <p>Each control is scored on multiple dimensions:</p>
    <table>
      <thead>
        <tr><th>Dimension</th><th>What It Measures</th><th>Scale</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Maturity</strong></td><td>Defined policies, formal procedures, management oversight (Inspired by CMMI)</td><td>0-10 (P0-P10)</td></tr>
        <tr><td><strong>Implementation</strong></td><td>Whether the control objective is actually implemented and effective</td><td>Fully / Partially / Not Implemented</td></tr>
        <tr><td><strong>Effectiveness</strong></td><td>Whether the implemented control achieves its intended outcome</td><td>Fully / Partially / Not Effective</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 Understanding HITRUST Scores</div>
      <p>The overall eMAP score (e1, i1, or r2) reflects your <strong>assessed compliance posture</strong>. Organizations aim for a <strong>Moderate Assurance</strong> rating as a baseline, with many enterprise healthcare contracts requiring it. Higher risk environments may demand <strong>High Assurance</strong>.</p>
    </div>

    <h4>Cost & Timeline Expectations</h4>
    <table>
      <thead>
        <tr><th>Factor</th><th>Details</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Timeline</strong></td><td>6-12 months from initiation to certification</td></tr>
        <tr><td><strong>Direct costs</strong></td><td>$50,000-$150,000+ depending on scope and assessor</td></tr>
        <tr><td><strong>Annual maintenance</strong></td><td>$20,000-$75,000 for surveillance and continuous monitoring</td></tr>
        <tr><td><strong>Internal resources</strong></td><td>1-3 FTEs dedicated for 6-12 months (DPO, CISO, Security Engineers)</td></tr>
      </tbody>
    </table>
  `,
  v2c43: `
    <h3>CSF Certification</h3>
    <p>
      HITRUST <strong>CSF Certification</strong> is the formal credential demonstrating that an organization has been <strong>independently assessed</strong> and found to meet the HITRUST Common Security Framework requirements. It is the most widely recognized healthcare security certification in the United States and increasingly required by insurance payers, healthcare partners, and regulatory bodies.
    </p>

    <h4>Certification Levels</h4>
    <p>HITRUST offers a progression of certifications that reflect increasing levels of rigor:</p>
    <table>
      <thead>
        <tr><th>Certification</th><th>Assurance Level</th><th>Validity</th><th>Scope</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>e1 (MyCSF Assessed)</strong></td><td>Foundational</td><td>1 year</td><td>Self-guided essentials assessment for SMBs</td></tr>
        <tr><td><strong>i1 (MyCSF Assured)</strong></td><td>Implemented</td><td>1 year</td><td>Validated implementation of 75+ essential controls</td></tr>
        <tr><td><strong>r2 (Risk-based, Validated)</strong></td><td>Moderate to High</td><td>2 years</td><td>Full CSF assessment with risk-based scoping</td></tr>
      </tbody>
    </table>

    <h4>The Certification Process</h4>
    <ol>
      <li>
        <strong>Scope Definition</strong>
        <p>Define the boundaries of the assessment — which systems, applications, locations, and business processes are in scope. HITRUST uses <strong>three scoping methodologies</strong>:</p>
        <ul>
          <li><strong>Organizational:</strong> Entire organization</li>
          <li><strong>Business Unit:</strong> Specific division or subsidiary</li>
          <li><strong>Application:</strong> Specific applications or product lines</li>
        </ul>
      </li>
      <li>
        <strong>Control Selection & Prioritization</strong>
        <p>Not all 135+ controls apply equally. HITRUST uses a <strong>risk-based approach</strong> where controls are weighted based on:</p>
        <ul>
          <li>Information sensitivity (PHI, PII, financial data)</li>
          <li>System exposure (internet-facing vs. internal)</li>
          <li>Threat environment and industry risk</li>
          <li>Regulatory requirements</li>
        </ul>
      </li>
      <li>
        <strong>Assessment Execution</strong>
        <p>As described in the r2R module, the assessor evaluates maturity, implementation, and effectiveness across all selected controls.</p>
      </li>
      <li>
        <strong>Remediation of Findings</strong>
        <p>Address all findings rated <strong>Critical or High</strong> before certification. Medium and Low findings may be accepted with a corrective action plan.</p>
      </li>
      <li>
        <strong>Report Issuance</strong>
        <p>Upon successful completion, HITRUST issues:</p>
        <ul>
          <li><strong>HITRUST CSF Quality Management Plan</strong> — Assessment methodology documentation</li>
          <li><strong>HITRUST CSF Report on Certification</strong> — Overall score and certification status</li>
          <li><strong>Corrective Action Plan (CAP)</strong> — For any open findings</li>
          <li><strong>HITRUST Assessment Letter</strong> — Summary of scope and results</li>
        </ul>
      </li>
    </ol>

    <h4>Maintaining Certification</h4>
    <ul>
      <li><strong>Annual Surveillance:</strong> Shorter re-assessment to verify ongoing compliance (typically 40% of original assessment scope)</li>
      <li><strong>Continuous Monitoring:</strong> HITRUST Connect platform for real-time compliance tracking</li>
      <li><strong>eMAPP (MyCSF Assurance, Privacy, and Protection):</strong> Ongoing monitoring and scoring tool</li>
      <li><strong>Re-certification:</strong> Full re-assessment every <strong>2 years</strong> for r2 certification</li>
    </ul>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: eMAPP Dashboard</div>
      <p>HITRUST eMAPP provides a <strong>visual compliance dashboard</strong> showing your organization's current posture across all CSF categories. It integrates with continuous monitoring tools to dynamically update scores as remediations are completed or new risks are identified. Organizations share eMAPP results with partners as <strong>evidence of compliance</strong> without requiring full re-assessments.</p>
    </div>

    <h4>Benefits of HITRUST Certification</h4>
    <ul>
      <li><strong>Industry Recognition:</strong> The most widely accepted healthcare security certification</li>
      <li><strong>Multi-Framework Compliance:</strong> Satisfies HIPAA, NIST, ISO 27001, SOC 2, PCI DSS, and others simultaneously</li>
      <li><strong>Reduced Assessment Fatigue:</strong> Partners accept your HITRUST cert instead of sending their own questionnaires</li>
      <li><strong>Competitive Advantage:</strong> Many health systems and payers require HITRUST certification for vendor onboarding</li>
      <li><strong>Risk-Based Focus:</strong> Concentrates resources on the highest-impact controls</li>
      <li><strong>Continuous Improvement:</strong> Built-in mechanisms for ongoing security enhancement</li>
    </ul>
  `,
  v2c44: `
    <h3>Third-Party Assurance</h3>
    <p>
      <strong>Third-Party Assurance (TPA)</strong> is a critical component of the HITRUST framework that extends security requirements beyond organizational boundaries to <strong>vendors, business associates, and supply chain partners</strong>. In healthcare, where PHI flows through complex ecosystems of providers, payers, technology vendors, and business associates, third-party risk management is essential.
    </p>

    <h4>Why Third-Party Assurance Matters</h4>
    <div class="warning-box">
      <div class="warning-title">⚠️ The Third-Party Risk Reality</div>
      <p>According to industry reports, <strong>60% of data breaches</strong> originate from third parties. In healthcare, business associates and vendors handling PHI represent one of the largest attack surfaces. The 2015 Anthem breach affected 78.8 million records and originated from a phishing attack on a subsidiary. HITRUST's TPA program provides a <strong>standardized framework</strong> to assess and monitor vendor security posture.</p>
    </div>

    <h4>HITRUST TPA Program</h4>
    <p>The HITRUST Third-Party Assurance program provides a structured approach to managing vendor security risk:</p>
    <table>
      <thead>
        <tr><th>Component</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>HITRUST Assessment Requirements</strong></td><td>Organizations can require vendors to maintain HITRUST certification (e1, i1, or r2) as a condition of doing business</td></tr>
        <tr><td><strong>Shared Responsibility Model</strong></td><td>Clearly defines which security obligations belong to the covered entity vs. the business associate</td></tr>
        <tr><td><strong>TPA Scoping Questionnaire</strong></td><td>A standardized questionnaire to gather vendor security information before full assessment</td></tr>
        <tr><td><strong>Assessment Validation</strong></td><td>Verify that vendor assessments were conducted by qualified HITRUST assessors</td></tr>
        <tr><td><strong>Continuous Monitoring</strong></td><td>Ongoing verification of vendor compliance through eMAPP and Connect platform</td></tr>
      </tbody>
    </table>

    <h4>Vendor Risk Assessment Process</h4>
    <ol>
      <li>
        <strong>Vendor Inventory & Classification</strong>
        <ul>
          <li>Identify all vendors that handle PHI, ePHI, or sensitive data</li>
          <li>Classify vendors by risk level based on data access scope, system connectivity, and criticality</li>
          <li>Maintain a <strong>Vendor Management System (VMS)</strong> with current risk ratings</li>
        </ul>
      </li>
      <li>
        <strong>Due Diligence</strong>
        <ul>
          <li>Review vendor's HITRUST certification status (check <strong>HITRUST Connect</strong> for validity)</li>
          <li>Evaluate vendor's SOC 2 Type II reports if available</li>
          <li>Assess vendor's incident history and breach notifications</li>
          <li>Review <strong>Business Associate Agreement (BAA)</strong> terms</li>
        </ul>
      </li>
      <li>
        <strong>Risk Assessment</strong>
        <ul>
          <li>Conduct risk scoring based on data sensitivity, access level, and vendor security posture</li>
          <li>Map vendor controls to HITRUST CSF requirements</li>
          <li>Identify gaps between vendor controls and organizational requirements</li>
        </ul>
      </li>
      <li>
        <strong>Ongoing Monitoring</strong>
        <ul>
          <li>Require vendors to share <strong>HITRUST eMAPP</strong> results periodically</li>
          <li>Monitor vendor security ratings through platforms like SecurityScorecard or BitSight</li>
          <li>Conduct <strong>annual vendor reviews</strong> and update risk scores</li>
          <li>Track vendor incident notifications and breach disclosures</li>
        </ul>
      </li>
      <li>
        <strong>Remediation & Offboarding</strong>
        <ul>
          <li>Establish <strong>SLAs for remediation</strong> of identified vendor vulnerabilities</li>
          <li>Escalation procedures for critical findings</li>
          <li>Termination procedures for non-compliant vendors</li>
        </ul>
      </li>
    </ol>

    <h4>Business Associate Agreement (BAA) Requirements</h4>
    <p>Under HIPAA and HITRUST requirements, BAAs must include:</p>
    <ul>
      <li>Permitted and required uses/disclosures of PHI</li>
      <li>Safeguards the associate must implement (including administrative, physical, and technical controls)</li>
      <li>Reporting obligations for breaches and security incidents</li>
      <li>Subcontractor requirements (<strong>downstream BAAs</strong>)</li>
      <li>Individual access rights and amendment provisions</li>
      <li>Accounting of disclosures</li>
      <li>Return or destruction of PHI upon termination</li>
      <li>Termination provisions for material breach</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Pro Tip: TPA Automation</div>
      <p>Leverage platforms like <strong>HITRUST Connect</strong>, <strong>Vanta</strong>, <strong>Drata</strong>, or <strong>Secureframe</strong> to automate third-party risk assessments. These platforms integrate with vendor security posture management to provide <strong>continuous, real-time visibility</strong> into vendor compliance — reducing the manual burden of annual questionnaires.</p>
    </div>
  `,
  v2c45: `
    <h3>Continuous Monitoring</h3>
    <p>
      <strong>HITRUST Continuous Monitoring</strong> ensures that security controls maintain their effectiveness <strong>between formal assessment cycles</strong>. Rather than treating compliance as an annual event, continuous monitoring provides <strong>real-time visibility</strong> into the organization's security posture and enables rapid response to emerging threats and control drift.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: The 365-Day Security Posture</div>
      <p>HITRUST emphasizes that <strong>certification is a point-in-time achievement</strong>, but security must be maintained every day. Continuous monitoring bridges the gap between assessments by tracking security controls, detecting drift, and providing early warning of compliance violations — ensuring your <strong>Day 366 posture is as strong as Day 1</strong>.</p>
    </div>

    <h4>HITRUST Continuous Monitoring Framework</h4>
    <p>The HITRUST approach to continuous monitoring involves three key components:</p>
    <table>
      <thead>
        <tr><th>Component</th><th>Function</th><th>Frequency</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Automated Control Monitoring</strong></td><td>Technical controls validation through automated tools and integrations</td><td>Real-time / Daily</td></tr>
        <tr><td><strong>Risk Intelligence</strong></td><td>Threat landscape analysis, vulnerability management, and environmental scanning</td><td>Weekly / Monthly</td></tr>
        <tr><td><strong>Management Review</strong></td><td>Leadership review of security posture, metrics, and strategic alignment</td><td>Quarterly</td></tr>
      </tbody>
    </table>

    <h4>Automated Monitoring Tools & Integrations</h4>
    <p>Effective continuous monitoring requires integration across your entire security stack:</p>
    <table>
      <thead>
        <tr><th>Category</th><th>Tools/Examples</th><th>HITRUST Controls Addressed</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Vulnerability Scanning</strong></td><td>Qualys, Nessus, Tenable.io, Qualys VMDR</td><td>09.fI — Vulnerability Management</td></tr>
        <tr><td><strong>SIEM & Log Management</strong></td><td>Splunk, Microsoft Sentinel, IBM QRadar, Elastic SIEM</td><td>06.d — Audit Logging & Monitoring</td></tr>
        <tr><td><strong>Endpoint Detection & Response</strong></td><td>CrowdStrike, SentinelOne, Microsoft Defender for Endpoint</td><td>09.d — Endpoint Protection</td></tr>
        <tr><td><strong>Identity & Access Monitoring</strong></td><td>Azure AD/Entra ID, Okta, CyberArk</td><td>09.a — Access Control</td></tr>
        <tr><td><strong>Cloud Security Posture</strong></td><td>Wiz, Prisma Cloud, AWS Security Hub, Azure Defender</td><td>01 — Information Protection</td></tr>
        <tr><td><strong>Data Loss Prevention</strong></td><td>Microsoft Purview, Symantec DLP, Digital Guardian</td><td>09.n — Data Protection</td></tr>
        <tr><td><strong>Configuration Management</strong></td><td>Chef InSpec, Puppet, Ansible, Microsoft Defender for Cloud</td><td>01.0 — Configuration Management</td></tr>
      </tbody>
    </table>

    <h4>HITRUST eMAPP (MyCSF Assurance, Privacy, and Protection)</h4>
    <p><strong>eMAPP</strong> is HITRUST's online platform for managing continuous compliance:</p>
    <ul>
      <li><strong>Real-time scoring:</strong> Dynamic compliance scores that update as remediations are completed</li>
      <li><strong>Progress tracking:</strong> Visual dashboards showing implementation progress across all CSF objectives</li>
      <li><strong>Evidence management:</strong> Centralized repository for compliance evidence and documentation</li>
      <li><strong>Shareable reports:</strong> Generate compliance packages for partners, regulators, and customers</li>
      <li><strong>Risk quantification:</strong> Maps controls to risk levels, enabling prioritization of remediation efforts</li>
      <li><strong>Integration APIs:</strong> Connect with SIEM, GRC, and ITSM platforms for automated data feeds</li>
    </ul>

    <h4>Key Metrics for Continuous Monitoring</h4>
    <table>
      <thead>
        <tr><th>Metric</th><th>Description</th><th>Target</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Mean Time to Remediate (MTTR)</strong></td><td>Average time to fix a security finding</td><td>&lt;30 days (Critical), &lt;90 days (High)</td></tr>
        <tr><td><strong>Control Effectiveness Rate</strong></td><td>Percentage of controls operating as intended</td><td>≥ 95%</td></tr>
        <tr><td><strong>Vulnerability Open Rate</strong></td><td>Percentage of known vulnerabilities still open</td><td>&lt; 5%</td></tr>
        <tr><td><strong>Compliance Score</strong></td><td>HITRUST eMAPP overall score</td><td>≥ Moderate Assurance</td></tr>
        <tr><td><strong>Incident Response Time</strong></td><td>Time from detection to containment</td><td>&lt;4 hours</td></tr>
        <tr><td><strong>Training Completion Rate</strong></td><td>Percentage of staff completing security awareness training</td><td>≥ 98%</td></tr>
      </tbody>
    </table>

    <h4>Alert Escalation Matrix</h4>
    <p>Define clear escalation procedures for monitoring alerts:</p>
    <table>
      <thead>
        <tr><th>Severity</th><th>Response Time</th><th>Responsible Team</th><th>Actions</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Critical</strong></td><td>Immediate (≤15 min)</td><td>SOC / Incident Response</td><td>Isolate affected systems, initiate IR plan, notify CISO</td></tr>
        <tr><td><strong>High</strong></td><td>Within 1 hour</td><td>Security Engineering</td><td>Investigate, apply mitigation, assess impact</td></tr>
        <tr><td><strong>Medium</strong></td><td>Within 4 hours</td><td>Security Operations</td><td>Analyze, schedule remediation, update risk register</td></tr>
        <tr><td><strong>Low</strong></td><td>Within 24 hours</td><td>Security Analysts</td><td>Log, review during next business cycle</td></tr>
        <tr><td><strong>Informational</strong></td><td>Next business day</td><td>Compliance Team</td><td>Document, review trends, update controls if needed</td></tr>
      </tbody>
    </table>

    <h4>Annual Surveillance Assessment</h4>
    <p>In addition to continuous monitoring, HITRUST requires an <strong>annual surveillance assessment</strong> to maintain r2 certification:</p>
    <ul>
      <li>Covers approximately <strong>40% of the original assessment scope</strong> (rotating focus areas)</li>
      <li>Reviews <strong>all critical and high-severity findings</strong> from the previous assessment</li>
      <li>Evaluates <strong>remediation progress</strong> on open corrective action items</li>
      <li>Assesses <strong>changes in threat landscape</strong> and regulatory environment</li>
      <li>Verifies <strong>ongoing management commitment</strong> to the security program</li>
    </ul>

    <div class="warning-box">
      <div class="warning-title">⚠️ Common Continuous Monitoring Pitfalls</div>
      <ul>
        <li><strong>Alert fatigue:</strong> Tuning out real threats due to excessive false positives — implement proper alert correlation and tuning</li>
        <li><strong>Tool sprawl:</strong> Deploying multiple tools without integration — prioritize <strong>tool consolidation</strong> and data correlation</li>
        <li><strong>Evidence gaps:</strong> Failing to maintain audit-ready evidence continuously — automate evidence collection where possible</li>
        <li><strong>Stale risk assessments:</strong> Not updating risk profiles as the threat landscape evolves — conduct <strong>quarterly risk reviews</strong></li>
      </ul>
    </div>
  `,
  // CMMC chapters
  v2c46: `
    <h3>CMMC Overview</h3>
    <p>
      The <strong>Cybersecurity Maturity Model Certification (CMMC)</strong> is a unified cybersecurity standard developed by the <strong>U.S. Department of Defense (DoD)</strong> for the Defense Industrial Base (DIB). It combines various cybersecurity standards (NIST SP 800-171, NIST CSF, FAR requirements) into a <strong>single, tiered certification framework</strong> to protect Controlled Unclassified Information (CUI) and Federal Contract Information (FCI) within the DoD supply chain.
    </p>

    <h4>Why CMMC Was Created</h4>
    <p>Before CMMC, DoD contractors self-attested compliance with NIST 800-171. An investigation found that many contractors claimed compliance without actually implementing required controls. CMMC was created to introduce <strong>third-party assessments</strong> and <strong>tiered maturity levels</strong> to ensure actual implementation.</p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: CMMC 2.0</div>
      <p>In 2023, DoD released <strong>CMMC 2.0</strong>, simplifying the model from 5 levels to 3 levels and leveraging existing certifications (ISO 27001, SOC 2) as pathways to compliance. Level 1 focuses on basic hygiene, Level 2 aligns with NIST SP 800-171, and Level 3 targets organizations subject to NIST SP 800-171 requirements plus additional controls.</p>
    </div>

    <h4>What Information CMMC Protects</h4>
    <table>
      <thead>
        <tr><th>Data Type</th><th>Description</th><th>Protection Level</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Federal Contract Information (FCI)</strong></td><td>Information not intended for public release, provided by/to government under contract</td><td>Level 1+</td></tr>
        <tr><td><strong>Controlled Unclassified Information (CUI)</strong></td><td>Government-created information requiring safeguarding per law/regulation</td><td>Level 2+</td></tr>
        <tr><td><strong>CUI Basic</strong></td><td>Standard CUI across all programs</td><td>Level 2</td></tr>
        <tr><td><strong>CUI Specified</strong></td><td>CUI with specific handling/spreading controls</td><td>Level 2+</td></tr>
      </tbody>
    </table>

    <h4>CMMC Ecosystem</h4>
    <ul>
      <li><strong>CMMC-AB:</strong> The CMMC Accreditation Body oversees the certification ecosystem</li>
      <li><strong>C3PAOs:</strong> Certified Third-Party Assessment Organizations conduct assessments</li>
      <li><strong>DIBCAC:</strong> Defense Industrial Base Cybersecurity Assessment Center (now managed by CMMC-AB)</li>
      <li><strong>SMCs:</strong> Scoping and Maturity Certifications for self-assessments under Level 2</li>
    </ul>
  `,

  v2c47: `
    <h3>CMMC Level 1 — Basic Cyber Hygiene</h3>
    <p>
      <strong>Level 1</strong> requires organizations to implement <strong>15 basic cybersecurity practices</strong> derived from <strong>FAR 52.204-21</strong> (Safeguarding Covered Defense Information and Cyber Incident Reporting). This is the <strong>minimum baseline</strong> for all DoD contractors handling FCI.
    </p>

    <h4>Level 1 Requirements (15 Practices)</h4>
    <table>
      <thead>
        <tr><th>#</th><th>Practice</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Access Control</td><td>Limit system access to authorized users and processes</td></tr>
        <tr><td>2</td><td>Media Protection</td><td>Protect and control media containing CUI</td></tr>
        <tr><td>3</td><td>Physical Security</td><td>Escort visitors and maintain audit logs of physical access</td></tr>
        <tr><td>4</td><td>Secure Configurations</td><td>Establish and maintain baseline configurations for IT systems</td></tr>
        <tr><td>5</td><td>Access Control for Mobile Devices</td><td>Limit or disable non-essential mobile device functions</td></tr>
        <tr><td>6</td><td>Personnel Security</td><td>Screen individuals prior to authorizing access to systems containing CUI</td></tr>
        <tr><td>7</td><td>Security Assessment</td><td>Periodically assess security controls to determine effectiveness</td></tr>
        <tr><td>8</td><td>Authentication</td><td>Identify and authenticate users before authorizing access</td></tr>
        <tr><td>9</td><td>System & Communications Protection</td><td>Monitor, detect, and protect against unauthorized access/use</td></tr>
        <tr><td>10</td><td>System & Information Integrity</td><td>Identify, report, and correct information system flaws timely</td></tr>
        <tr><td>11</td><td>Security Awareness Training</td><td>Ensure managers and employees are trained on security responsibilities</td></tr>
        <tr><td>12</td><td>Audit & Accountability</td><td>Create and retain system audit logs and records</td></tr>
        <tr><td>13</td><td>Configuration Management</td><td>Establish and maintain baseline configurations and security settings</td></tr>
        <tr><td>14</td><td>Incident Response</td><td>Identify, report, and respond to cybersecurity incidents</td></tr>
        <tr><td>15</td><td>Contingency Planning</td><td>Establish and maintain contingency plans for information systems</td></tr>
      </tbody>
    </table>

    <h4>Level 1 Assessment</h4>
    <ul>
      <li><strong>Self-assessment only</strong> — no third-party certification required</li>
      <li>Annual <strong>SMC (Self-Assessment and Maturity Certification)</strong> required</li>
      <li>Must submit score to the <strong>Cybersecurity Maturity Model</strong> portal</li>
      <li>Estimated cost: <strong>$1,000 – $5,000</strong> (internal labor)</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Level 1 Applicability</div>
      <p>Level 1 applies to companies that handle <strong>FCI only</strong> (not CUI) and contract for less than $50,000 in DOD work. Many small suppliers fall into this category. Level 1 is designed to be achievable for organizations with minimal cybersecurity infrastructure.</p>
    </div>
  `,

  v2c48: `
    <h3>CMMC Level 2 — Intermediate</h3>
    <p>
      <strong>Level 2</strong> requires organizations to implement and document <strong>110 security practices</strong> aligned with <strong>NIST SP 800-171 Rev. 2</strong>. This level protects <strong>Controlled Unclassified Information (CUI)</strong> and is the most common requirement for DoD contractors.
    </p>

    <h4>Alignment with NIST SP 800-171</h4>
    <p>CMMC Level 2 directly maps to the 110 security requirements in NIST SP 800-171, organized across 14 families:</p>
    <table>
      <thead>
        <tr><th>Family</th><th># Controls</th><th>Focus Area</th></tr>
      </thead>
      <tbody>
        <tr><td>Access Control (AC)</td><td>22</td><td>Limiting system access to authorized users</td></tr>
        <tr><td>Awareness and Training (AT)</td><td>3</td><td>Security awareness for all users</td></tr>
        <tr><td>Audit and Accountability (AU)</td><td>9</td><td>Logging and monitoring events</td></tr>
        <tr><td>Configuration Management (CM)</td><td>9</td><td>Baseline configurations and change control</td></tr>
        <tr><td>Identification and Authentication (IA)</td><td>11</td><td>Verifying user and device identity</td></tr>
        <tr><td>Incident Response (IR)</td><td>3</td><td>Detecting and responding to incidents</td></tr>
        <tr><td>Maintenance (MA)</td><td>6</td><td>System maintenance procedures</td></tr>
        <tr><td>Media Protection (MP)</td><td>9</td><td>Protecting media containing CUI</td></tr>
        <tr><td>Personnel Security (PS)</td><td>2</td><td>Screening and terminating personnel</td></tr>
        <tr><td>Physical Protection (PE)</td><td>6</td><td>Physical access to CUI</td></tr>
        <tr><td>Risk Assessment (RA)</td><td>3</td><td>Periodic risk assessments</td></tr>
        <tr><td>Security Assessment (CA)</td><td>4</td><td>Periodic security assessments</td></tr>
        <tr><td>System and Communications Protection (SC)</td><td>16</td><td>Network security and boundary protection</td></tr>
        <tr><td>System and Information Integrity (SI)</td><td>7</td><td>Flaw remediation and malware protection</td></tr>
      </tbody>
    </table>

    <h4>Level 2 Assessment Options</h4>
    <table>
      <thead>
        <tr><th>Assessment Type</th><th>Performed By</th><th>Validity</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Third-Party Assessment (C3PAO)</strong></td><td>Certified Third-Party Assessment Organization</td><td>3 years</td></tr>
        <tr><td><strong>SMC (Self-Assessment)</strong></td><td>Organization (with evidence review)</td><td>3 years</td></tr>
      </tbody>
    </table>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: NIST SP 800-171</div>
      <p>NIST SP 800-171 is the <strong>foundational standard</strong> for protecting CUI in non-federal systems. It was originally mandated through DFARS 252.204-7012. CMMC Level 2 codifies these requirements into a certifiable framework, adding process maturity requirements on top.</p>
    </div>
  `,

  v2c49: `
    <h3>CMMC Level 3 — Good Cyber Hygiene</h3>
    <p>
      <strong>Level 3</strong> is the highest level of CMMC certification, requiring organizations to implement <strong>all 110 NIST SP 800-171 practices plus additional controls</strong> from other frameworks. Level 3 aims to protect CUI with <strong>comprehensive, optimized security programs</strong> and requires government-led assessments (DIBCAC).
    </p>

    <h4>Additional Requirements Beyond Level 2</h4>
    <ul>
      <li>All 110 NIST SP 800-171 controls <strong>fully implemented and documented</strong></li>
      <li>Establish, maintain, and <strong>review a plan</strong> for implementing security controls</li>
      <li>Provide <strong>adequate resourcing</strong> and organizational support for security measures</li>
      <li>Designate a <strong>senior leader</strong> to oversee CUI protection</li>
      <li>Maintain a <strong>security unit</strong> or equivalent function</li>
      <li>Develop, document, and maintain <strong>security policies and procedures</strong></li>
      <li>Participate in <strong>DIBCAC-led government assessments</strong></li>
    </ul>

    <h4>Level 3 Assessment</h4>
    <ul>
      <li><strong>Government-led assessment</strong> (DIBCAC or authorized entity)</li>
      <li><strong>Not self-assessable</strong> — requires independent government review</li>
      <li>More rigorous evidence requirements than Level 2</li>
      <li>Estimated cost: significantly higher than Level 2 due to scope and assessment rigor</li>
    </ul>

    <h4>Scope and Applicability</h4>
    <table>
      <thead>
        <tr><th>Aspect</th><th>Details</th></tr>
      </thead>
      <tbody>
        <tr><td>Contracts</td><td>Contracts with specific national security program requirements</td></tr>
        <tr><td>Data</td><td>High-value CUI across the entire enterprise</td></tr>
        <tr><td>Assessments</td><td>Government-led, not self-assessed</td></tr>
        <tr><td>Maturity Expectation</td><td>Institutionalized processes with continuous improvement</td></tr>
      </tbody>
    </table>

    <div class="warning-box">
      <div class="warning-title">⚠️ Level 3 Complexity</div>
      <p>Level 3 requires a <strong>mature, well-resourced security program</strong>. Organizations should typically achieve Level 2 certification before pursuing Level 3. The government assessment process is significantly more demanding and requires extensive documentation and evidence.</p>
    </div>
  `,

  v2c50: `
    <h3>CMMC Certification Lifecycle</h3>
    <p>
      CMMC certification is <strong>valid for 3 years</strong> and requires ongoing maintenance, evidence retention, and renewal. Understanding the full lifecycle helps organizations plan resources and maintain continuous compliance.
    </p>

    <h4>Certification Timeline</h4>
    <pre><code>
Year 1: CERTIFICATION
  ├── Engage C3PAO (for Level 2) or DIBCAC (for Level 3)
  ├── Conduct Stage 1 assessment (document review)
  ├── Remediate findings
  ├── Conduct Stage 2 assessment (on-site)
  ├── Receive certification with score
  └── Submit score to CMMC portal

Years 2-3: MAINTENANCE
  ├── Continuous monitoring of security controls
  ├── Annual self-assessments (recommended)
  ├── Maintain evidence repository
  ├── Update SOPs and documentation
  └── Address any changes in scope or personnel

Year 3: RECERTIFICATION
  ├── Begin recertification preparation 6 months prior
  ├── Review and update all documentation
  ├── Conduct internal pre-assessment
  ├── Engage assessor for renewal
  └── Submit updated score to CMMC portal
</code></pre>

    <h4>POA&M (Plan of Action & Milestones)</h4>
    <div class="key-box">
      <div class="key-title">🔑 Key Concept: POA&M</div>
      <p>A <strong>POA&M</strong> is a document that records identified weaknesses along with planned corrective actions, milestones, and completion dates. Open POA&Ms are allowed at certification, but each must have a <strong>specific remediation plan</strong> with deadlines. POA&Ms must be closed within the certification period — critical items cannot remain open at renewal.</p>
    </div>

    <h4>Evidence Management</h4>
    <p>CMMC requires organizations to maintain evidence of control implementation:</p>
    <ul>
      <li>Evidence must be retained for the <strong>entire 3-year certification period</strong></li>
      <li>Digital evidence is preferred (scanned documents acceptable)</li>
      <li>Evidence must be <strong>organized by control family</strong> for efficient assessment</li>
      <li>Automated evidence collection tools (e.g., compliance platforms) are recommended</li>
    </ul>

    <h4>Cost Estimates by Level</h4>
    <table>
      <thead>
        <tr><th>Level</th><th>Estimated Certification Cost</th><th>Assessment Type</th></tr>
      </thead>
      <tbody>
        <tr><td>Level 1</td><td>$1K – $5K</td><td>Self-assessment (SMC)</td></tr>
        <tr><td>Level 2</td><td>$5K – $50K+</td><td>C3PAO or SMC</td></tr>
        <tr><td>Level 3</td><td>$50K – $150K+</td><td>DIBCAC government assessment</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 Certification Roadmap</div>
      <p>Organizations should start by identifying which CMMC level their contracts require, then build a <strong>gap analysis and remediation roadmap</strong>. Many organizations find that existing ISO 27001 or SOC 2 certifications significantly reduce the effort needed for CMMC Level 2 certification.</p>
    </div>
  `,

  // PCI DSS chapters
  v2c51: `
    <h3>PCI DSS Overview</h3>
    <p>
      The <strong>Payment Card Industry Data Security Standard (PCI DSS)</strong> is a set of security standards designed to ensure that <strong>all companies that accept, process, store, or transmit credit card information</strong> maintain a secure environment. PCI DSS is governed by the <strong>PCI Security Standards Council (PCI SSC)</strong>, founded by the major payment brands (Visa, Mastercard, American Express, Discover, JCB).
    </p>

    <h4>Key Concepts</h4>
    <ul>
      <li><strong>Not a law:</strong> PCI DSS is an industry standard, but it is enforced through contractual relationships with payment brands and acquiring banks</li>
      <li><strong>Applies to everyone in the payment chain:</strong> Merchants, processors, acquirers, service providers, and any entity storing, processing, or transmitting cardholder data</li>
      <li><strong>Validation frequency:</strong> Depends on merchant level (annual for most, quarterly for some)</li>
      <li><strong>Non-compliance consequences:</strong> Fines ($5,000–$100,000/month from payment brands), increased transaction fees, termination of merchant account, liability for fraud</li>
    </ul>

    <h4>The 6 Goals of PCI DSS</h4>
    <ol>
      <li>Build and maintain a secure network and systems</li>
      <li>Protect cardholder data</li>
      <li>Maintain a vulnerability management program</li>
      <li>Implement strong access control measures</li>
      <li>Regularly monitor and test networks</li>
      <li>Maintain an information security policy</li>
    </ol>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: PCI DSS v4.0</div>
      <p>PCI DSS version 4.0, released <strong>March 2022</strong>, replaced v3.2.1 (which was retired March 31, 2024). v4.0 emphasizes <strong>flexibility and customization</strong>, introduces <strong>300+ sub-requirements</strong>, and places greater emphasis on <strong>continuous security validation</strong>, <strong>authentication</strong>, and <strong>zero trust principles</strong>.</p>
    </div>
  `,

  v2c52: `
    <h3>PCI DSS Requirement 1 & 2: Secure Network</h3>
    <p>
      Requirements 1 and 2 of PCI DSS focus on building and maintaining a <strong>secure network infrastructure</strong> to protect cardholder data environments (CDE) from external threats.
    </p>

    <h4>Requirement 1: Install and Maintain Network Security Controls</h4>
    <p>Install and maintain a firewall and/or network security controls (NSCs) to prevent unauthorized access to system components and cardholder data.</p>
    <ul>
      <li><strong>1.1:</strong> Install and maintain firewall and/or NSCs at each network boundary</li>
      <li><strong>1.2:</strong> Establish and maintain a secure configuration — deny all traffic by default; allow only necessary protocols, ports, services</li>
      <li><strong>1.3:</strong> Establish and maintain rules that restrict connections between untrusted networks and any system components in the CDE</li>
      <li><strong>1.4:</strong> Restrict any direct public access between untrusted networks and system components</li>
      <li><strong>1.5:</strong> Implement network segmentation (PCI DSS v4.0) to isolate the CDE from other networks</li>
    </ul>

    <h4>Requirement 2: Apply Secure Configurations</h4>
    <p>Do not use vendor-supplied defaults for system passwords and other security parameters.</p>
    <ul>
      <li><strong>2.1:</strong> Change all default passwords before placing a system on the network</li>
      <li><strong>2.2:</strong> Perform and document risk ranking for all system components</li>
      <li><strong>2.3:</strong> Encrypt all non-console administrative access using strong cryptography</li>
    </ul>

    <h4>Network Segmentation Best Practices</h4>
    <table>
      <thead>
        <tr><th>Segment</th><th>Purpose</th><th>Best Practice</th></tr>
      </thead>
      <tbody>
        <tr><td>CDE (Cardholder Data Environment)</td><td>Systems processing/ storing/ transmitting cardholder data</td><td>Strictest access controls, full monitoring</td></tr>
        <tr><td>Connected-to/Impacted-by Systems</td><td>Systems that can affect CDE security</td><td>Controlled access, monitored connections</td></tr>
        <tr><td>Out-of-Scope Systems</td><td>Systems with no connection to CDE</td><td>Documented justification for exclusion</td></tr>
      </tbody>
    </table>
  `,

  v2c53: `
    <h3>PCI DSS Requirement 3 & 4: Protect Cardholder Data</h3>
    <p>
      Requirements 3 and 4 of PCI DSS mandate the <strong>protection of stored cardholder data</strong> and the <strong>encryption of data in transit</strong> across open, public networks.
    </p>

    <h4>Requirement 3: Protect Stored Account Data</h4>
    <ul>
      <li><strong>3.1:</strong> Keep stored account data to a <strong>minimum</strong> — implement data retention and disposal policies</li>
      <li><strong>3.2:</strong> Do not store <strong>sensitive authentication data</strong> after authorization (even if encrypted):
        <ul>
          <li>Full track data (magnetic stripe data)</li>
          <li>CVV2/CVC2/CAV2</li>
          <li>PIN/PIN block</li>
          <li>Values stored on the chip (CVM, PIN)</li>
        </ul>
      </li>
      <li><strong>3.3:</strong> Mask PAN when displayed (first six and last four digits only)</li>
      <li><strong>3.4:</strong> Render PAN <strong>unreadable</strong> anywhere it is stored — using one of:
        <ul>
          <li>One-way hash functions (with entire PAN)</li>
          <li>Truncation (hashing cannot be used)</li>
          <li>Index tokens and pads (pads must be securely stored)</li>
          <li>Strong cryptography with associated key management</li>
        </ul>
      </li>
      <li><strong>3.5:</strong> Protect encryption keys used for encryption of PAN</li>
    </ul>

    <h4>Requirement 4: Encrypt Transmission of Cardholder Data</h4>
    <ul>
      <li><strong>4.1:</strong> Use strong cryptography to safeguard PAN during transmission across open, public networks</li>
      <li><strong>4.2:</strong> Never send unprotected PANs by end-user messaging technologies (email, instant messaging, chat)</li>
    </ul>

    <div class="callout">
      <div class="callout-icon">🛡️</div>
      <div class="callout-content">
        <h4>Tokenization vs. Encryption</h4>
        <p><strong>Tokenization</strong> replaces the PAN with a non-reversible token, reducing PCI DSS scope. <strong>Encryption</strong> is reversible with the proper key. Both are acceptable methods for protecting stored data, but tokenization is often preferred because it eliminates the need to manage encryption keys and reduces the CDE scope.</p>
      </div>
    </div>
  `,

  v2c54: `
    <h3>PCI DSS Requirement 5 & 6: Vulnerability Management</h3>
    <p>
      Requirements 5 and 6 ensure organizations actively protect systems against <strong>malware</strong> and address <strong>known vulnerabilities</strong> through proper configuration management.
    </p>

    <h4>Requirement 5: Protect All Systems and Networks from Malicious Software</h4>
    <ul>
      <li><strong>5.1:</strong> Deploy and maintain anti-malware mechanisms (including anti-phishing) for all systems commonly affected by malicious software</li>
      <li><strong>5.2:</strong> Ensure anti-malware is active and current; enable periodic scans</li>
      <li><strong>5.3:</strong> Perform periodic evaluations to examine emerging threats; evaluate ability to detect or block exploits</li>
    </ul>

    <h4>Requirement 6: Develop and Maintain Secure Systems and Software</h4>
    <ul>
      <li><strong>6.1:</strong> Establish a process to identify security vulnerabilities, using reputable outside sources for security information</li>
      <li><strong>6.2:</strong> Establish a process to identify, assess, and manage common and critical internal and external software vulnerabilities:</li>
        <ul>
          <li>Run internal and external network vulnerability scans at least quarterly and after any significant change</li>
          <li>Perform annual penetration testing</li>
          <li>Address identified vulnerabilities and deploy patches as soon as possible</li>
        </ul>
      <li><strong>6.3:</strong> Keep all system components and software up to date with latest vendor security patches; install critical patches within one month</li>
      <li><strong>6.4:</strong> Protect all pages and services with public-facing web applications against known attacks by deploying manual or automated threat assessment tools</li>
      <li><strong>6.5:</strong> Establish and maintain documentation of all security and operational procedures</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Penetration Testing Requirements</div>
      <p>PCI DSS requires <strong>annual penetration testing</strong> (Requirement 11.4) and <strong>internal/external vulnerability scans</strong> (Requirement 11.3). Pen testing must be performed by qualified personnel and cover the CDE and any out-of-scope systems that could impact CDE security.</p>
    </div>
  `,

  v2c55: `
    <h3>PCI DSS Requirement 7 & 8: Access Control</h3>
    <p>
      Requirements 7 and 8 of PCI DSS enforce <strong>strict access control</strong> and <strong>strong authentication</strong>, ensuring only authorized personnel can access cardholder data and system components.
    </p>

    <h4>Requirement 7: Restrict Access to System Components and Cardholder Data</h4>
    <ul>
      <li><strong>7.1:</strong> Define access control needs for personnel based on job responsibilities and data access requirements</li>
      <li><strong>7.2:</strong> <strong>Limit access</strong> to system components and cardholder data to only individuals whose job requires access</li>
      <li><strong>7.3:</strong> Ensure access is <strong>granted only to the lowest level of system access</strong> and privileges necessary for job functions (least privilege)</li>
      <li><strong>7.4:</strong> Implement an <strong>access control system</strong> for system components (physical or logical):
        <ul>
          <li>Establish unique user accounts and a process for assigning them</li>
          <li>Implement role-based access controls</li>
          <li>Document access assignments and access control policies</li>
          <li>Periodically review and update access privileges</li>
        </ul>
      </li>
    </ul>

    <h4>Requirement 8: Identify Users and Authenticate Access</h4>
    <ul>
      <li><strong>8.1:</strong> Define and implement policies for the security of user accounts</li>
      <li><strong>8.2:</strong> <strong>Authenticate all users</strong> before access to system components and cardholder data:
        <ul>
          <li>MFA required for all access to the CDE (v4.0)</li>
          <li>Use phishing-resistant authentication for CDE access (v4.0)</li>
          <li>Password-based MFA must ensure passwords are protected during transmission and storage</li>
        </ul>
      </li>
      <li><strong>8.3:</strong> Implement MFA for all access to the CDE and other security-sensitive areas</li>
      <li><strong>8.4:</strong> Protect stored authentication data and account credentials</li>
      <li><strong>8.5:</strong> Implement controls to prevent brute-force attacks</li>
    </ul>

    <div class="warning-box">
      <div class="warning-title">⚠️ MFA in PCI DSS v4.0</div>
      <p>PCI DSS 4.0 significantly strengthened MFA requirements. MFA is now <strong>required for all access to the CDE</strong>, including access by employees, administrators, and third parties. The standard now also specifies that MFA solutions must be <strong>phishing-resistant</strong> for certain scenarios (effective from March 31, 2025).</p>
    </div>
  `,

  v2c56: `
    <h3>PCI DSS Requirement 10 & 11: Monitor & Test</h3>
    <p>
      Requirements 10 and 11 mandate <strong>comprehensive monitoring of all network resources and cardholder data access</strong>, along with regular <strong>security testing</strong> to validate the effectiveness of controls.
    </p>

    <h4>Requirement 10: Log and Monitor All Access to System Components and Cardholder Data</h4>
    <ul>
      <li><strong>10.1:</strong> Log all individual user access to system components and cardholder data</li>
      <li><strong>10.2:</strong> Audit all actions taken by any individual with administrative (root) or system-level access</li>
      <li><strong>10.3:</strong> Record audit trail entries for:
        <ul>
          <li>Individual user access to cardholder data</li>
          <li>All actions by users with administrative privileges</li>
          <li>Access to all audit logs</li>
          <li>Invalid logical access attempts</li>
          <li>Use of identification and authentication mechanisms</li>
          <li>Creation and deletion of system-level objects</li>
        </ul>
      </li>
      <li><strong>10.4:</strong> Synchronize all audit trail timestamps to a single time source</li>
      <li><strong>10.5:</strong> Protect audit trail data from unauthorized modification</li>
      <li><strong>10.6:</strong> Review all security event logs daily or upon transaction processing</li>
      <li><strong>10.7:</strong> Retain audit trail history for <strong>at least 12 months</strong> (3 months immediately accessible)</li>
      <li><strong>10.8:</strong> Implement processes to respond to failures in audit logging mechanisms</li>
    </ul>

    <h4>Requirement 11: Regularly Test Security of Systems and Networks</h4>
    <ul>
      <li><strong>11.1:</strong> Establish and implement a process for <strong>vulnerability identification</strong> (internal and external scans):
        <ul>
          <li>External scans at least quarterly and after significant changes</li>
          <li>Internal scans at least quarterly</li>
        </ul>
      </li>
      <li><strong>11.3:</strong> Conduct <strong>internal and external penetration testing</strong> at least annually and after significant changes</li>
      <li><strong>11.4:</strong> Test segmentation controls at least every 6 months (new in v4.0)</li>
    </ul>

    <h4>PCI DSS Merchant Levels</h4>
    <table>
      <thead>
        <tr><th>Level</th><th>Criteria</th><th>Validation Requirements</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Level 1</strong></td><td>> 6 million transactions/year OR prior breach/compromise</td><td>Annual ROC by QSA + quarterly ASV scans</td></tr>
        <tr><td><strong>Level 2</strong></td><td>1–6 million transactions/year</td><td>Annual SAQ (with ROC option) + quarterly ASV scans</td></tr>
        <tr><td><strong>Level 3</strong></td><td>20,000–1 million e-commerce transactions/year</td><td>Annual SAQ + quarterly ASV scans</td></tr>
        <tr><td><strong>Level 4</strong></td><td>< 20,000 e-commerce OR up to 1 million total transactions/year</td><td>Annual SAQ + quarterly ASV scans (recommended)</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 PCI Assessment Types</div>
      <p><strong>ROC (Report on Compliance):</strong> Detailed audit report by a QSA (Qualified Security Assessor) — required for Level 1 merchants. <strong>SAQ (Self-Assessment Questionnaire):</strong> Self-assessment form with multiple types based on payment processing method. <strong>ASV (Approved Scanning Vendor):</strong> External vulnerability scans conducted quarterly by a PCI SSC-approved vendor.</p>
    </div>
  `,

  // HIPAA chapters
  v2c57: `
    <h3>HIPAA Overview</h3>
    <p>
      The <strong>Health Insurance Portability and Accountability Act (HIPAA)</strong> of 1996 is US legislation that provides data privacy and security provisions for safeguarding <strong>protected health information (PHI)</strong>. The Act was modernized by the <strong>HITECH Act of 2009</strong>, which strengthened enforcement and introduced the <strong>Breach Notification Rule</strong>.
    </p>

    <h4>Who Must Comply</h4>
    <p>HIPAA applies to <strong>Covered Entities</strong> and their <strong>Business Associates</strong>:</p>
    <ul>
      <li><strong>Covered Entities:</strong>
        <ul>
          <li>Health Plans (health insurance companies, HMOs, government healthcare programs)</li>
          <li>Healthcare Clearinghouses (entities processing nonstandard health information)</li>
          <li>Healthcare Providers (doctors, clinics, hospitals, pharmacies — any who transmit health information electronically)</li>
        </ul>
      </li>
      <li><strong>Business Associates:</strong> Any person or entity that performs functions or activities on behalf of a covered entity involving the use or disclosure of PHI (e.g., billing companies, IT vendors, cloud hosting providers, attorneys)</li>
    </ul>

    <h4>The Three HIPAA Rules</h4>
    <div class="callout">
      <div class="callout-icon">📋</div>
      <div class="callout-content">
        <h4>HIPAA's Three Core Rules</h4>
        <ol>
          <li><strong>Privacy Rule:</strong> Governs the use and disclosure of PHI</li>
          <li><strong>Security Rule:</strong> Sets standards for safeguarding electronic PHI (ePHI)</li>
          <li><strong>Breach Notification Rule:</strong> Requirements for reporting breaches of unsecured PHI</li>
        </ol>
      </div>
    </div>

    <h4>Key Definitions</h4>
    <table>
      <thead>
        <tr><th>Term</th><th>Definition</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>PHI (Protected Health Information)</strong></td><td>Individually identifiable health information — any data relating to past, present, or future physical/mental health, provision of healthcare, or payment for healthcare that can identify an individual</td></tr>
        <tr><td><strong>ePHI</strong></td><td>PHI created, received, maintained, or transmitted electronically</td></tr>
        <tr><td><strong>Minimum Necessary Standard</strong></td><td>Use, disclosure, and requests for PHI must be limited to the minimum necessary to accomplish the intended purpose</td></tr>
        <tr><td><strong>BAA (Business Associate Agreement)</strong></td><td>Contract between a covered entity and business associate specifying responsibilities for protecting PHI</td></tr>
      </tbody>
    </table>
  `,

  v2c58: `
    <h3>HIPAA Privacy Rule</h3>
    <p>
      The <strong>Privacy Rule</strong> (45 CFR Part 160 and Part 164, Subparts A and E) establishes national standards for the protection of individually identifiable health information. It governs <strong>how PHI can be used and disclosed</strong> by covered entities and business associates.
    </p>

    <h4>Patient Rights Under the Privacy Rule</h4>
    <table>
      <thead>
        <tr><th>Right</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Right to Notice of Privacy Practices</strong></td><td>Patients must receive a clear notice explaining how their PHI may be used</td></tr>
        <tr><td><strong>Right to Access</strong></td><td>Right to inspect and obtain a copy of their PHI (within 30 days, extendable by 30)</td></tr>
        <tr><td><strong>Right to Amendment</strong></td><td>Request amendment of inaccurate PHI (within 60 days)</td></tr>
        <tr><td><strong>Right to Accounting of Disclosures</strong></td><td>Right to receive an accounting of disclosures (excluding treatment, payment, and operations)</td></tr>
        <tr><td><strong>Right to Request Restrictions</strong></td><td>Request restrictions on certain uses and disclosures (though the entity is not required to agree, except for self-pay)</td></tr>
        <tr><td><strong>Right to Confidential Communications</strong></td><td>Request alternative means or locations for communication</td></tr>
        <tr><td><strong>Right to a Paper Copy</strong></td><td>Receive a paper copy of the privacy notice on request</td></tr>
      </tbody>
    </table>

    <h4>Permitted Uses and Disclosures</h4>
    <p>PHI can be used or disclosed without patient <strong>authorization</strong> for:</p>
    <ul>
      <li><strong>Treatment:</strong> Coordination of care, referrals, consultations</li>
      <li><strong>Payment:</strong> Billing, claims management, collections</li>
      <li><strong>Healthcare Operations:</strong> Quality assessment, competency assurance, accreditation</li>
      <li><strong>Public Health:</strong> Reporting disease, injury, or death as required by law</li>
      <li><strong>Law Enforcement:</strong> Required by law, court orders, subpoenas, identifying suspects</li>
      <li><strong>Workers' Compensation:</strong> As authorized by law</li>
      <li><strong>Research:</strong> With IRB approval or waiver</li>
    </ul>

    <h4>Requires Patient Authorization</h4>
    <p>Any use or disclosure <strong>not covered</strong> by the permitted categories above requires written patient authorization, including:</p>
    <ul>
      <li>Psychotherapy notes</li>
      <li>Substance abuse treatment records</li>
      <li>Marketing purposes</li>
      <li>Sale of PHI</li>
      <li>Most research uses</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Minimum Necessary Standard</div>
      <p>The Minimum Necessary Standard requires that covered entities limit PHI use, disclosure, and requests to the <strong>minimum necessary</strong> to accomplish the intended purpose. Exceptions apply for treatment (providers can access what they need) and disclosures authorized by the patient.</p>
    </div>
  `,

  v2c59: `
    <h3>HIPAA Security Rule</h3>
    <p>
      The <strong>Security Rule</strong> (45 CFR Part 164, Subparts A and C) requires appropriate <strong>administrative, physical, and technical safeguards</strong> to ensure the <strong>confidentiality, integrity, and availability (CIA)</strong> of electronic protected health information (ePHI). Unlike the Privacy Rule, the Security Rule is limited to ePHI only.
    </p>

    <h4>Administrative Safeguards (§164.308)</h4>
    <table>
      <thead>
        <tr><th>Standard</th><th>Implementation Specification</th><th>Addressable?</th></tr>
      </thead>
      <tbody>
        <tr><td>Security Management Process</td><td>Risk analysis, risk management, sanction policy, IS activity review</td><td>Required</td></tr>
        <tr><td>Assigned Security Responsibility</td><td>Identify a security official</td><td>Required</td></tr>
        <tr><td>Workforce Security</td><td>Authorization/supervision, termination procedures, clearance procedures</td><td>Required (some addressable)</td></tr>
        <tr><td>Information Access Management</td><td>Isolation of healthcare clearinghouse functions, access authorization, access establishment/ modification</td><td>Required and Addressable</td></tr>
        <tr><td>Security Awareness & Training</td><td>Security reminders, malware protection, login monitoring, password management</td><td>Addressable</td></tr>
        <tr><td>Security Incident Procedures</td><td>Response and reporting of security incidents</td><td>Required</td></tr>
        <tr><td>Contingency Plan</td><td>Data backup, disaster recovery, emergency mode operations, testing, criticality analysis</td><td>Required and Addressable</td></tr>
        <tr><td>Evaluation</td><td>Technical and nontechnical evaluation of Security Rule compliance</td><td>Required</td></tr>
        <tr><td>Business Associate Contracts</td><td>Written contract requiring safeguards for PHI</td><td>Required</td></tr>
      </tbody>
    </table>

    <h4>Physical Safeguards (§164.310)</h4>
    <table>
      <thead>
        <tr><th>Standard</th><th>Implementation Specification</th><th>Addressable?</th></tr>
      </thead>
      <tbody>
        <tr><td>Facility Access Controls</td><td>Contingency operations, facility security plan, access control and validation, maintenance records</td><td>Required and Addressable</td></tr>
        <tr><td>Workstation Use</td><td>Policies governing workstation functions and physical attributes</td><td>Required</td></tr>
        <tr><td>Workstation Security</td><td>Physical safeguards for workstations accessing ePHI</td><td>Required</td></tr>
        <tr><td>Device and Media Controls</td><td>Disposal, media re-use, accountability, data backup/storage</td><td>Required and Addressable</td></tr>
      </tbody>
    </table>

    <h4>Technical Safeguards (§164.312)</h4>
    <table>
      <thead>
        <tr><th>Standard</th><th>Implementation Specification</th><th>Addressable?</th></tr>
      </thead>
      <tbody>
        <tr><td>Access Control</td><td>Unique user ID, emergency access procedure, automatic logoff, encryption and decryption</td><td>Required and Addressable</td></tr>
        <tr><td>Audit Controls</td><td>Hardware, software, and procedural mechanisms to record and examine access and activity</td><td>Required</td></tr>
        <tr><td>Integrity</td><td>Mechanisms to authenticate ePHI, protect from improper alteration or destruction</td><td>Required and Addressable</td></tr>
        <tr><td>Person or Entity Authentication</td><td>Procedures to verify that a person/entity seeking access is who they claim to be</td><td>Required</td></tr>
        <tr><td>Transmission Security</td><td>Integrity controls and encryption for ePHI in transit</td><td>Required and Addressable</td></tr>
      </tbody>
    </table>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Required vs. Addressable</div>
      <p>HIPAA standards are either <strong>Required (R)</strong> — must be implemented — or <strong>Addressable (A)</strong> — the organization must assess whether the specification is reasonable and appropriate. If not, the organization must document why and implement an equivalent alternative measure. "Not applicable" is <strong>not a valid response</strong> for addressable specifications.</p>
    </div>
  `,

  v2c60: `
    <h3>HIPAA Breach Notification Rule</h3>
    <p>
      The <strong>Breach Notification Rule</strong> (45 CFR §§ 164.400-414) requires covered entities and business associates to provide notification following a <strong>breach of unsecured PHI</strong>. The HITECH Act strengthened these requirements significantly.
    </p>

    <h4>What Constitutes a Breach?</h4>
    <p>A breach is the <strong>unauthorized acquisition, access, use, or disclosure</strong> of PHI that compromises its security or privacy. There are three exceptions:</p>
    <ol>
      <li><strong>Unintentional access:</strong> By an employee or person acting under authority, made in good faith, within scope of authority</li>
      <li><strong>Inadvertent disclosure:</strong> Between authorized persons at the covered entity (or BA) who would not reasonably retain the information</li>
      <li><strong>Unable to retain:</strong> The unauthorized person could not reasonably have retained the information</li>
    </ol>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Risk Assessment for Breaches</div>
      <p>A breach is assumed unless the covered entity demonstrates a <strong>low probability that PHI has been compromised</strong> based on a risk assessment considering: (1) nature and extent of PHI involved, (2) unauthorized person who used or to whom disclosure was made, (3) whether PHI was actually acquired or viewed, and (4) extent to which risk was mitigated.</p>
    </div>

    <h4>Notification Requirements</h4>
    <table>
      <thead>
        <tr><th>Notification Type</th><th>Timeframe</th><th>Threshold</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Individual Notification</strong></td><td><strong>60 days or less</strong> from discovery</td><td>Any breach affecting 500+ individuals; must also notify HHS</td></tr>
        <tr><td><strong>Media Notification</strong></td><td><strong>60 days or less</strong> from discovery</td><td>Breach affecting 500+ residents of a state/jurisdiction</td></tr>
        <tr><td><strong>HHS Secretary Notification</strong></td><td>Annual log for breaches <500 individuals; within 60 days for 500+</td><td>All breaches</td></tr>
      </tbody>
    </table>

    <h4>Notification Content</h4>
    <p>Individual notification must include:</p>
    <ul>
      <li>Description of the breach (what happened, when)</li>
      <li>Types of unsecured PHI involved</li>
      <li>Steps individuals should take to protect themselves</li>
      <li>Description of what the entity is doing to investigate, mitigate, and prevent future breaches</li>
      <li>Contact information for further questions</li>
    </ul>

    <h4>Penalties for Non-Compliance</h4>
    <table>
      <thead>
        <tr><th>Tier</th><th>Annual Maximum</th><th>Circumstances (per violation)</th></tr>
      </thead>
      <tbody>
        <tr><td>Tier 1</td><td>$25,000</td><td>Did not know (and by exercising reasonable diligence would not have known) of the violation</td></tr>
        <tr><td>Tier 2</td><td>$100,000</td><td>Reasonable cause (not willful neglect)</td></tr>
        <tr><td>Tier 3</td><td>$250,000</td><td>Corrected willful neglect within 30 days</td></tr>
        <tr><td>Tier 4</td><td>$1.5 million</td><td>Willful neglect, not corrected within 30 days</td></tr>
      </tbody>
    </table>

    <div class="warning-box">
      <div class="warning-title">⚠️ OCR Enforcement Trends</div>
      <p>The HHS Office for Civil Rights (OCR) has increased enforcement significantly, with penalties exceeding <strong>$100 million</strong> in some recent settlements. The <strong>cybersecurity checklist</strong> (announced 2023) adds security-specific requirements for breach investigations.</p>
    </div>
  `,

  v2c61: `
    <h3>HIPAA Business Associate Agreements</h3>
    <p>
      A <strong>Business Associate Agreement (BAA)</strong> is a <strong>written contract</strong> between a covered entity and a business associate (or between subcontractors) that specifies how the BA will safeguard PHI. Under the HITECH Act, BAs are now <strong>directly liable</strong> for compliance with certain HIPAA provisions.
    </p>

    <h4>Required BAA Provisions</h4>
    <p>Under 45 CFR §164.504(e), a BAA must include:</p>
    <ul>
      <li><strong>Permitted uses and disclosures:</strong> BA may only use/disclose PHI as permitted by the agreement or required by law</li>
      <li><strong>Safeguard requirements:</strong> BA must implement appropriate safeguards to prevent unauthorized use/disclosure</li>
      <li><strong>Reporting obligations:</strong> BA must report any use/disclosure not provided in the agreement, including breaches</li>
      <li><strong>PHI access:**</strong> Covered entity's right to access PHI from BA as needed</li>
      <li><strong>Amendments:</strong> BA must make internal practices consistent with the agreement</li>
      <li><strong>De-identification:</strong> BA must ensure PHI is de-identified per §164.514 before using for purposes outside the agreement</li>
      <li><strong>Subcontractor requirements:</strong> BA must ensure any subcontractors who access PHI agree to the same restrictions</li>
      <li><strong>Termination:</strong> BA must return or destroy PHI upon termination; if infeasible, extend agreement provisions</li>
    </ul>

    <h4>Business Associate Obligations Under HITECH</h4>
    <table>
      <thead>
        <tr><th>Obligation</th><th>Details</th></tr>
      </thead>
      <tbody>
        <tr><td>Breach Notification</td><td>BAs must notify covered entity of any breach without unreasonable delay (no later than 60 days)</td></tr>
        <tr><td>Security Rule Compliance</td><td>BAs must implement administrative, physical, and technical safeguards</td></tr>
        <tr><td>Privacy Rule Compliance</td><td>BAs have same obligations as covered entities for permitted uses/disclosures</td></tr>
        <tr><td>Enforcement</td><td>OCR can directly enforce against BAs — covered entities may also terminate BAs for violations</td></tr>
        <tr><td>State Law</td><td>BAs must further comply with state laws that are more protective of PHI</td></tr>
      </tbody>
    </table>

    <h4>Common Business Associates</h4>
    <table>
      <thead>
        <tr><th>BA Type</th><th>Examples</th><th>Key Considerations</th></tr>
      </thead>
      <tbody>
        <tr><td>Cloud Hosting</td><td>AWS, Azure, GCP (when hosting PHI)</td><td>Shared responsibility model; ensure BAA is signed</td></tr>
        <tr><td>EHR/EMR Vendors</td><td>Epic, Cerner, Athenahealth</td><td>Data portability, integration security</td></tr>
        <tr><td>Billing/Coding</td><td>Revenue cycle management companies</td><td>Access to full patient records and financial data</td></tr>
        <tr><td>IT Services</td><td>Managed service providers, help desk</td><td>System access, incident response obligations</td></tr>
        <tr><td>Analytics</td><td>Data analytics, population health platforms</td><td>De-identification requirements, data retention</td></tr>
        <tr><td>Legal/Accounting</td><td>Law firms, accounting firms</td><td>Confidentiality, secure document handling</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 Due Diligence for BA Selection</div>
      <p>Before signing a BAA, conduct thorough due diligence: review the BA's <strong>SOC 2 report</strong>, <strong>security certifications</strong>, <strong>incident history</strong>, and <strong>data handling practices</strong>. Include specific security requirements in the BAA, such as encryption standards, incident notification timelines, and right-to-audit clauses.</p>
    </div>
  `,

  // NIST CSF chapters
  v2c62: `
    <h3>NIST Cybersecurity Framework (CSF) Overview</h3>
    <p>
      The <strong>NIST Cybersecurity Framework (CSF)</strong> is a set of guidelines — developed by the <strong>National Institute of Standards and Technology (NIST)</strong> — to help organizations manage and reduce cybersecurity risk. Originally published in 2014 and updated to <strong>CSF 2.0 in February 2024</strong>, it provides a <strong>voluntary, risk-based approach</strong> to cybersecurity that is widely adopted across industries.
    </p>

    <h4>Key Features of CSF 2.0</h4>
    <ul>
      <li><strong>Broader applicability:</strong> Extended beyond critical infrastructure to <strong>all organizations</strong>, including small businesses</li>
      <li><strong>New Govern function:</strong> Added as a sixth core function to address governance, risk strategy, and supply chain risk management</li>
      <li><strong>Improved usability:</strong> Simplified structure with clearer guidance and implementation examples</li>
      <li><strong>Global alignment:</strong> Harmonized with international frameworks (ISO 27001, NIST 800-53, CIS Controls)</li>
    </ul>

    <h4>Framework Structure</h4>
    <p>The NIST CSF is organized into three main components:</p>
    <ol>
      <li><strong>Core Functions</strong> — High-level strategic categories (6 functions)</li>
      <li><strong>Categories</strong> — Division of each function into logical groups (22 categories)</li>
      <li><strong>Subcategories</strong> — Technical and operational outcomes (106 subcategories in CSF 1.1; expanded in 2.0)</li>
    </ol>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Profiles and Tiers</div>
      <p>Organizations use <strong>Current Profiles</strong> to document their existing cybersecurity posture and <strong>Target Profiles</strong> to define their desired state. <strong>Implementation Tiers</strong> (1-4) provide context on how organizations view cybersecurity risk and the processes in place to manage it.</p>
    </div>
  `,

  v2c63: `
    <h3>NIST CSF — GOVERN & IDENTIFY Functions</h3>
    <p>
      The <strong>Govern (GV)</strong> and <strong>Identify (ID)</strong> functions form the foundation of a cybersecurity program, establishing organizational context, priorities, and asset understanding.
    </p>

    <h4>Govern Function (New in CSF 2.0)</h4>
    <p>The Govern function establishes the organization's <strong>cybersecurity strategy, expectations, and policy</strong> — informing and supporting each of the other five functions.</p>
    <table>
      <thead>
        <tr><th>Category</th><th>Focus</th></tr>
      </thead>
      <tbody>
        <tr><td>GV.OC — Organizational Context</td><td>Mission priorities, stakeholder expectations, legal/regulatory requirements</td></tr>
        <tr><td>GV.RM — Risk Management Strategy</td><td>Risk appetite, tolerance statements, roles and responsibilities</td></tr>
        <tr><td>GV.RR — Roles, Responsibilities, and Authorities</td><td>Cybersecurity roles, board oversight, accountability</td></tr>
        <tr><td>GV.PO — Policy</td><td>Cybersecurity policy based on context, strategy, and risk</td></tr>
        <tr><td>GV.SC — Cybersecurity Supply Chain Risk Management</td><td>Supply chain risk management program, vendor assessments</td></tr>
      </tbody>
    </table>

    <h4>Identify Function</h4>
    <p>The Identify function helps organizations understand their <strong>business context, resources, and risk</strong> to inform cybersecurity strategy.</p>
    <table>
      <thead>
        <tr><th>Category</th><th>Focus</th></tr>
      </thead>
      <tbody>
        <tr><td>ID.AM — Asset Management</td><td>Inventory of hardware, software, data, systems; mapping data flows</td></tr>
        <tr><td>ID.RA — Risk Assessment</td><td>Identifying threats, vulnerabilities, likelihood, and impact</td></tr>
        <tr><td>ID.IM — Improvement</td><td>Lessons learned, continuous improvement processes</td></tr>
      </tbody>
    </table>

    <h4>Key Activities for ID.AM</h4>
    <ul>
      <li>Maintain inventories of hardware, software, and data assets</li>
      <li>Map and document network architecture and data flows</li>
      <li>Identify and prioritize assets based on criticality</li>
      <li>Establish baseline of expected network operations</li>
      <li>Maintain inventories of external information systems</li>
    </ul>
  `,

  v2c64: `
    <h3>NIST CSF — PROTECT Function</h3>
    <p>
      The <strong>Protect (PR)</strong> function supports the ability to <strong>ensure delivery of critical services</strong> by implementing appropriate safeguards. Once the organization understands its environment (Identify) and establishes governance, it can deploy protective measures.
    </p>

    <h4>Protect Function Categories</h4>
    <table>
      <thead>
        <tr><th>Category</th><th>Focus</th><th>Key Activities</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>PR.AA — Identity Management, Authentication, and Access Control</strong></td><td>Secure access to assets</td><td>
          <ul>
            <li>Manage identities and credentials</li>
            <li>Enforce least privilege and separation of duties</li>
            <li>Require MFA for privileged and remote access</li>
            <li>Manage physical access to assets</li>
          </ul>
        </td></tr>
        <tr><td><strong>PR.AT — Awareness and Training</strong></td><td>Educate users</td><td>
          <ul>
            <li>Security awareness training for all personnel</li>
            <li>Role-based training for privileged users</li>
            <li>Exercise and testing of awareness</li>
          </ul>
        </td></tr>
        <tr><td><strong>PR.DS — Data Security</strong></td><td>Protect data integrity and confidentiality</td><td>
          <ul>
            <li>Protect data at rest and in transit</li>
            <li>Implement data loss prevention</li>
            <li>Manage data classification and labeling</li>
            <li>Ensure integrity checking and validation</li>
          </ul>
        </td></tr>
        <tr><td><strong>PR.PS — Platform Security</strong></td><td>Manage and secure technology infrastructure</td><td>
          <ul>
            <li>Manage and maintain configurations</li>
            <li>Apply software updates and patches</li>
            <li>Implement logging and monitoring at infrastructure level</li>
          </ul>
        </td></tr>
        <tr><td><strong>PR.IR — Technology Infrastructure Resilience</strong></td><td>Ensure resilience and recovery capability</td><td>
          <ul>
            <li>Implement network protections and segmentation</li>
            <li>Manage technology assets' lifecycle</li>
            <li>Establish and maintain backup and restore processes</li>
          </ul>
        </td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 CSF 2.0 Changes to Protect</div>
      <p>CSF 2.0 expanded the Protect function significantly. The new <strong>Platform Security (PR.PS)</strong> category emphasizes managing the security of hardware, software, and services — reflecting modern cloud-native architectures. <strong>Technology Infrastructure Resilience (PR.IR)</strong> now explicitly addresses backup, continuity, and failover.</p>
    </div>
  `,

  v2c65: `
    <h3>NIST CSF — DETECT Function</h3>
    <p>
      The <strong>Detect (DE)</strong> function enables timely discovery of cybersecurity events and anomalies. Effective detection requires <strong>continuous monitoring</strong>, <strong>anomaly analysis</strong>, and <strong>well-defined detection processes</strong>.
    </p>

    <h4>Detect Function Categories</h4>
    <table>
      <thead>
        <tr><th>Category</th><th>Focus</th><th>Key Activities</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>DE.CM — Continuous Monitoring</strong></td><td>Monitor networks and assets for anomalies</td><td>
          <ul>
            <li>Monitor networks for potentially adverse events</li>
            <li>Monitor physical environment for anomalies</li>
            <li>Monitor personnel activity for insider threats</li>
            <li>Monitor external service provider activities</li>
            <li>Monitor computing hardware and software for anomalies</li>
            <li>Perform vulnerability scans regularly</li>
          </ul>
        </td></tr>
        <tr><td><strong>DE.AE — Adverse Event Analysis</strong></td><td>Analyze anomalies and indicators of compromise</td><td>
          <ul>
            <li>Establish baseline of expected operations</li>
            <li>Analyze detected anomalies for attack patterns</li>
            <li>Correlate information from multiple sources</li>
            <li>Estimate impact and scope of adverse events</li>
            <li>Establish incident alert thresholds</li>
          </ul>
        </td></tr>
      </tbody>
    </table>

    <h4>Detection Best Practices</h4>
    <ul>
      <li><strong>Deploy SIEM:</strong> Centralize log collection and correlation for real-time threat detection</li>
      <li><strong>Implement EDR:</strong> Endpoint detection and response tools provide visibility into endpoint behavior</li>
      <li><strong>Network monitoring:</strong> Deploy IDS/IPS and network traffic analysis tools</li>
      <li><strong>Threat intelligence:</strong> Integrate threat feeds to detect known indicators of compromise (IOCs)</li>
      <li><strong>User behavior analytics:</strong> Monitor for anomalous user actions and privilege escalation</li>
      <li><strong>24/7 monitoring:</strong> Consider SOC services or MDR for round-the-clock coverage</li>
    </ul>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Mean Time to Detect (MTTD)</div>
      <p><strong>MTTD</strong> measures how long it takes to detect a security incident. The industry average is <strong>194 days</strong> (IBM Cost of a Data Breach 2023). Reducing MTTD is critical — faster detection dramatically reduces the impact and cost of breaches. Aim for MTTD of <strong>days or hours</strong>, not months.</p>
    </div>
  `,

  v2c66: `
    <h3>NIST CSF — RESPOND & RECOVER Functions</h3>
    <p>
      The <strong>Respond (RS)</strong> and <strong>Recover (RC)</strong> functions address how organizations react to detected cybersecurity incidents and restore services. Together they ensure <strong>business continuity</strong> and <strong>resilience</strong>.
    </p>

    <h4>Respond Function (RS)</h4>
    <table>
      <thead>
        <tr><th>Category</th><th>Focus</th></tr>
      </thead>
      <tbody>
        <tr><td>RS.MA — Incident Management</td><td>Execute incident response plan when incident is detected</td></tr>
        <tr><td>RS.AN — Incident Analysis</td><td>Investigate incidents to determine scope, root cause, and appropriate response</td></tr>
        <tr><td>RS.CO — Incident Response Reporting & Communication</td><td>Share incident information with stakeholders, regulators, and affected parties</td></tr>
        <tr><td>RS.MI — Incident Mitigation</td><td>Contain and mitigate incidents; eliminate attacker presence</td></tr>
      </tbody>
    </table>

    <h4>Recover Function (RC)</h4>
    <table>
      <thead>
        <tr><th>Category</th><th>Focus</th></tr>
      </thead>
      <tbody>
        <tr><td>RC.RP — Incident Recovery Plan Execution</td><td>Execute recovery activities during or after an incident</td></tr>
        <tr><td>RC.CO — Incident Recovery Communication</td><td>Coordinate restoration activities with internal and external stakeholders</td></tr>
      </tbody>
    </table>

    <h4>Incident Response Plan Components</h4>
    <p>A comprehensive IR plan should include:</p>
    <ol>
      <li><strong>Preparation:</strong> IR team formation, tools, communication channels, escalation procedures</li>
      <li><strong>Identification:</strong> Determine if an event is an incident; classify severity</li>
      <li><strong>Containment:</strong> Short-term containment (isolate affected systems) and long-term containment (temporary fixes)</li>
      <li><strong>Eradication:</strong> Remove threat actor, malware, and persistence mechanisms</li>
      <li><strong>Recovery:</strong> Restore systems from backups, validate integrity, return to normal operations</li>
      <li><strong>Lessons Learned:</strong> Post-incident review; update procedures and controls</li>
    </ol>

    <h4>Recovery Planning Best Practices</h4>
    <table>
      <thead>
        <tr><th>Activity</th><th>Frequency</th></tr>
      </thead>
      <tbody>
        <tr><td>Backup testing and restoration drills</td><td>Quarterly</td></tr>
        <tr><td>Tabletop exercises and IR simulations</td><td>Bi-annually</td></tr>
        <tr><td>Full disaster recovery testing</td><td>Annually</td></tr>
        <tr><td>IR plan review and update</td><td>Annually or after significant changes</td></tr>
        <tr><td>Communication plan testing</td><td>Bi-annually</td></tr>
      </tbody>
    </table>

    <div class="warning-box">
      <div class="warning-title">⚠️ Ransomware Considerations</div>
      <p>Modern incident response must account for <strong>ransomware</strong>. Key considerations: maintain <strong>offline/immutable backups</strong>, test restoration regularly, develop specific ransomware response procedures, coordinate with law enforcement (FBI IC3, CISA), and consider legal implications before paying ransom (OFAC sanctions screening).</p>
    </div>

    <h4>CSF 2.0 Govern: Continuous Improvement (RC.IM)</h4>
    <ul>
      <li>Incorporate lessons learned from incidents and exercises</li>
      <li>Update recovery plans based on organizational changes</li>
      <li>Review and adjust risk management strategies</li>
      <li>Communicate improvement activities to relevant stakeholders</li>
    </ul>
  `,

};