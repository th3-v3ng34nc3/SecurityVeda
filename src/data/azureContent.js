export const azureContent = {
  v1c24: `
    <h3>Azure Active Directory (Entra ID)</h3>
    <p>
      Azure Active Directory, now rebranded as <strong>Microsoft Entra ID</strong>, is Microsoft's cloud-based identity and access management service. It is the <strong>foundation of security</strong> in the Azure ecosystem — every Azure resource, user login, and application access flows through Entra ID.
    </p>

    <h4>What is Entra ID?</h4>
    <p>Entra ID provides:</p>
    <ul>
      <li><strong>Authentication:</strong> Verifies who users are (Single Sign-On, MFA, passwordless)</li>
      <li><strong>Authorization:</strong> Controls what users can access (RBAC, Conditional Access)</li>
      <li><strong>Directory Services:</strong> Stores user, group, and application objects</li>
      <li><strong>Identity Governance:</strong> Manages access lifecycle (onboarding, transfers, offboarding)</li>
    </ul>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Entra ID vs. Traditional Active Directory</div>
      <p>Traditional Active Directory (on-premises) used protocols like LDAP and Kerberos. Entra ID is cloud-native and uses modern protocols:</p>
      <table>
        <thead>
          <tr><th>Feature</th><th>On-Prem AD</th><th>Entra ID</th></tr>
        </thead>
        <tbody>
          <tr><td>Protocols</td><td>LDAP, Kerberos, NTLM</td><td>SAML, OAuth 2.0, OpenID Connect</td></tr>
          <tr><td>Location</td><td>On-premises</td><td>Globally distributed cloud</td></tr>
          <tr><td>Management</td><td>GPOs, AD Sites</td><td>Conditional Access, Entra admin center</td></tr>
          <tr><td>Authentication</td><td>Passwords, smart cards</td><td>MFA, Passwordless, FIDO2 keys</li>
          <tr><td>Scalability</td><td>Limited by server capacity</td><td>Auto-scales to billions of identities</td></tr>
        </tbody>
      </table>
    </div>

    <h4>Entra ID Architecture</h4>
    <ol>
      <li><strong>Tenants:</strong> A tenant is a dedicated instance of Entra ID. Each organization gets its own tenant. Tenant = security boundary.</li>
      <li><strong>Users &amp; Groups:</strong> User accounts represent people or services. Groups simplify permission management.</li>
      <li><strong>Applications:</strong> Registered in Entra ID for authentication (Enterprise Apps, App Registrations)</li>
      <li><strong>Service Principals:</strong> The "machine identity" of an application — like a service account</li>
      <li><strong>Managed Identities:</strong> Automatically managed service principals for Azure resources</li>
    </ol>

    <h4>Hybrid Identity</h4>
    <p>Most enterprises have both on-premises AD and Entra ID. Two main integration patterns:</p>
    <table>
      <thead>
        <tr><th>Pattern</th><th>How It Works</th><th>Best For</th></tr>
      </thead>
      <tbody>
        <tr><td>Password Hash Sync (PHS)</td><td>Syncs password hashes from on-prem AD to Entra ID</td><td>Simple cloud-only auth with cloud MFA</td></tr>
        <tr><td>Pass-through Authentication (PTA)</td><td>On-prem agents validate passwords in real-time</td><td>Organizations that can't sync password hashes</td></tr>
        <tr><td>Federation (AD FS)</td><td>On-prem AD FS server handles authentication</td><td>Complex multi-forest or advanced SSO scenarios</td></tr>
      </tbody>
    </table>

    <h4>Entra ID Security Best Practices</h4>
    <div class="success-box">
      <div class="success-title">✓ Entra ID Security Checklist</div>
      <ol>
        <li>Enable <strong>MFA for all users</strong> — Conditional Access policies to enforce</li>
        <li>Deploy <strong>Passwordless Authentication</strong> — FIDO2 keys, Windows Hello, Microsoft Authenticator</li>
        <li>Use <strong>Conditional Access</strong> — enforce compliant devices, trusted locations, risk-based policies</li>
        <li>Enable <strong>Identity Protection</strong> — detect risky sign-ins, leaked credentials, impossible travel</li>
        <li>Implement <strong>Privileged Identity Management (PIM)</strong> — time-limited, approval-based role activation</li>
        <li><strong>Disable legacy protocols</strong> — IMAP, POP3, Basic Auth, legacy TLS</li>
        <li><strong>Monitor sign-in logs</strong> — use Workbooks and Alerts for anomalies</li>
        <li>Use <strong>External ID</strong> for secure collaboration with partners and customers</li>
        <li>Enable <strong>Continuous Access Evaluation (CAE)</strong> — real-time session revocation</li>
      </ol>
    </div>
  `,

  v1c25: `
    <h3>Azure Role-Based Access Control (RBAC)</h3>
    <p>
      Azure RBAC is the authorization system used to manage access to Azure resources. It follows the principle of <strong>least privilege</strong>, ensuring users and services get only the permissions they need — nothing more.
    </p>

    <h4>How Azure RBAC Works</h4>
    <p>Azure RBAC uses a three-element model:</p>
    <div class="info-box">
      <div class="info-title">ℹ️ Security Principal + Role Definition + Scope</div>
      <p>
        <strong>Security Principal:</strong> Who wants access? (User, Group, Service Principal, Managed Identity)<br>
        <strong>Role Definition:</strong> What can they do? (Collection of permissions like "Read virtual machines")<br>
        <strong>Scope:</strong> Where can they do it? (Management Group, Subscription, Resource Group, or individual resource)
      </p>
    </div>

    <h4>Azure Built-In Roles</h4>
    <table>
      <thead>
        <tr><th>Role</th><th>Permissions</th><th>Use Case</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Owner</strong></td><td>Full access, assign roles</td><td>Subscription administrators</td></tr>
        <tr><td><strong>Contributor</strong></td><td>Create/manage all resources (cannot assign roles)</td><td>Developers, engineers</td></tr>
        <tr><td><strong>Reader</strong></td><td>View existing resources</td><td>Auditors, read-only monitoring</td></tr>
        <tr><td><strong>User Access Administrator</strong></td><td>Manage user access to resources</td><td>Delegated access management</td></tr>
        <tr><td><strong>Virtual Machine Contributor</strong></td><td>Manage VMs but not access</td><td>VM operations team</td></tr>
        <tr><td><strong>Network Contributor</strong></td><td>Manage networking resources</td><td>Network team</td></tr>
        <tr><td><strong>Key Vault Secrets Officer</strong></td><td>Manage secrets and keys</td><td>Security team</td></tr>
        <tr><td><strong>Security Admin</strong></td><td>Manage security solutions</td><td>SOC team</td></tr>
        <tr><td><strong>Security Reader</strong></td><td>View security findings and policies</td><td>Compliance analysts</td></tr>
      </tbody>
    </table>

    <h4>Custom Roles</h4>
    <p>When built-in roles don't meet your needs, create custom roles:</p>
    <pre><code>
{
  "Name": "Custom VM Security Admin",
  "Description": "Can manage VM security settings but not create/delete VMs",
  "Actions": [
    "Microsoft.Compute/virtualMachines/read",
    "Microsoft.Compute/virtualMachines/extensions/write",
    "Microsoft.KeyVault/vaults/keys/*",
    "Microsoft.Network/networkSecurityGroups/write"
  ],
  "NotActions": [
    "Microsoft.Compute/virtualMachines/delete"
  ],
  "AssignableScopes": ["/subscriptions/xxx/resourceGroups/prod-rg"]
}
</code></pre>

    <h4>RBAC Best Practices</h4>
    <ol>
      <li><strong>Avoid Owner role:</strong> Use Contributor or custom roles instead</li>
      <li><strong>Assign at the narrowest scope:</strong> Resource group or individual resource, not subscription</li>
      <li><strong>Use PIM:</strong> Grant elevated roles just-in-time, not permanently</li>
      <li><strong>Review access quarterly:</strong> Use Access Reviews in Entra ID</li>
      <li><strong>Deny by default:</strong> Use Deny Assignments to block specific actions even if a role allows them</li>
      <li><strong>Separate management:</strong> Don't assign both Owner and Contributor — use the most specific role</li>
    </ol>

    <h5>Deny Assignments — Advanced Control</h5>
    <div class="info-box">
      <div class="info-title">💡 Deny Assignments</div>
      <p>Deny Assignments block specific actions regardless of what a role definition allows. They cannot be removed by the resource owner. Use cases:</p>
      <ul>
        <li>Prevent deletion of critical resources</li>
        <li>Block creation of resources in certain regions</li>
        <li>Enforce tagging requirements</li>
      </ul>
    </div>
  `,

  v1c26: `
    <h3>Azure Key Vault</h3>
    <p>
      Azure Key Vault is a <strong>centralized secrets management</strong> service that safeguards cryptographic keys, secrets, certificates, and other sensitive assets. It is a cornerstone of any Azure security architecture.
    </p>

    <h4>What Key Vault Protects</h4>
    <table>
      <thead>
        <tr><th>Asset Type</th><th>Description</th><th>Example Use Case</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Keys</strong></td><td>Cryptographic keys (RSA, EC, AES)</td><td>Data encryption, signing, key wrapping</td></tr>
        <tr><td><strong>Secrets</strong></td><td>Passwords, connection strings, API keys</td><td>Database passwords, service credentials</td></tr>
        <tr><td><strong>Certificates</strong></td><td>SSL/TLS certificates</td><td>HTTPS endpoints, code signing</td></tr>
        <tr><td><strong>Hardware Security Modules (HSM)</strong></td><td>FIPS 140-2 Level 2/3 validated modules</td><td>Regulatory compliance, high-value keys</td></tr>
      </tbody>
    </table>

    <h4>Key Vault Security Model</h4>
    <p>Key Vault uses a multi-layered security model:</p>
    <ol>
      <li><strong>Entra ID Authentication:</strong> All access is authenticated through Entra ID — no vault-specific credentials</li>
      <li><strong>Access Policies / RBAC:</strong> Fine-grained permissions at the vault, key, secret, or certificate level</li>
      <li><strong>Azure Managed HSM:</strong> Keys stored in FIPS 140-2 Level 3 validated HSMs (single-tenant)</li>
      <li><strong>Soft Delete &amp; Purge Protection:</strong> Deleted keys/secrets are recoverable for a configurable retention period (7-90 days)</li>
      <li><strong>Network Isolation:</strong> Private endpoints, firewall rules, and service endpoints</li>
      <li><strong>Logging:</strong> All operations logged to Azure Monitor and optionally to a storage account</li>
    </ol>

    <h5>Key Vault Access Policies vs. RBAC</h5>
    <table>
      <thead>
        <tr><th>Feature</th><th>Access Policies (Legacy)</th><th>Azure RBAC (Recommended)</th></tr>
      </thead>
      <tbody>
        <tr><td>Granularity</td><td>Per key/secret/certificate</td><td>Vault-level or resource-level</td></tr>
        <tr><td>Consistency</td><td>Different from Azure RBAC</td><td>Same model as other Azure resources</td></tr>
        <tr><td>Microsoft Recommendation</td><td>Legacy</td><td><strong>Use RBAC for new deployments</strong></td></tr>
      </tbody>
    </table>

    <h4>Key Rotation</h4>
    <p>Key Vault supports automatic key rotation:</p>
    <ul>
      <li>Configure rotation policies with specific lifetimes (e.g., 90 days, 1 year)</li>
      <li>Key Vault auto-generates a new key version at the configured interval</li>
      <li>Old versions remain available for decryption (backward compatible)</li>
      <li>Applications can use the <strong>latest</strong> version or a specific version</li>
    </ul>

    <div class="callout">
      <div class="callout-icon">🔄</div>
      <div class="callout-content">
        <h4>Key Rotation Best Practice</h4>
        <p>Always design applications to <strong>fetch keys at runtime</strong> rather than caching them. This way, when a key is rotated, the application automatically picks up the new version. Use Key Vault's <code>getLatestVersion</code> API in your code.</p>
      </div>
    </div>

    <h4>Private Endpoints for Key Vault</h4>
    <p>By default, Key Vault is accessible over the public internet. For maximum security:</p>
    <ol>
      <li>Create a <strong>Private Endpoint</strong> in your VNet</li>
      <li>Disable <strong>public network access</strong> on the vault</li>
      <li>Use <strong>Private DNS Zones</strong> to resolve vault endpoints privately</li>
      <li>Restrict access to specific subnet(s)</li>
    </ol>

    <h4>Key Vault and Managed Identity Integration</h4>
    <pre><code>
# Grant a VM's Managed Identity access to Key Vault secrets
# Using Azure CLI:
az keyvault set-policy \
  --name myKeyVault \
  --object-id $(az vm identity show -g MyRG -n MyVM --query principalId -o tsv) \
  --secret-permissions get list
</code></pre>

    <div class="warning-box">
      <div class="warning-title">⚠️ Common Key Vault Pitfalls</div>
      <ul>
        <li><strong>Purge Protection:</strong> Without it, deleted keys are permanently gone after the retention period</li>
        <li><strong>Soft Delete:</strong> Enabled by default in new vaults but verify on older ones</li>
        <li><strong>Network exposure:</strong> Public endpoint access without firewall rules = anyone with valid credentials can reach your vault</li>
        <li><strong>Logging:</strong> If you don't log Key Vault operations, you have no audit trail for key access</li>
      </ul>
    </div>
  `,

  v1c27: `
    <h3>Azure Network Security</h3>
    <p>
      Azure provides a comprehensive set of network security controls to protect your cloud resources. Understanding the <strong>layered network security model</strong> is essential for designing secure Azure architectures.
    </p>

    <h4>Network Security Layers</h4>
    <table>
      <thead>
        <tr><th>Layer</th><th>Service</th><th>Function</th></tr>
      </thead>
      <tbody>
        <tr><td>Network Perimeter</td><td>Azure Firewall, Front Door, DDoS Protection</td><td>Block/allow traffic at the edge</td></tr>
        <tr><td>Network Segmentation</td><td>VNet, Subnets, NSGs</td><td>Isolate workloads logically</td></tr>
        <tr><td>Application Security</td><td>Azure WAF, Application Gateway</td><td>Protect web applications</td></tr>
        <tr><td>Service Endpoints</td><td>Microsoft.Service endpoints</td><td>Keep traffic within Azure backbone</td></tr>
        <tr><td>Private Connectivity</td><td>Private Link, ExpressRoute</td><td>Private access to Azure services</td></tr>
      </tbody>
    </table>

    <h4>Network Security Groups (NSGs)</h4>
    <p>NSGs are Azure's equivalent of Security Groups in AWS. They contain <strong>security rules</strong> that allow or deny inbound/outbound network traffic.</p>

    <h5>NSG Rule Priority Logic</h5>
    <ol>
      <li>Rules are evaluated <strong>in priority order</strong> (lowest number = highest priority)</li>
      <li>First matching rule <strong>wins</strong> — no other rules are evaluated</li>
      <li>Built-in default rules: Allow VNet Inbound, Deny All Inbound, Allow VNet Outbound, Deny All Outbound</li>
      <li>You can create <strong>deny rules with lower priority</strong> to override allow rules</li>
    </ol>

    <h5>NSG Security Rules Anatomy</h5>
    <pre><code>
Name: Allow-HTTPS-From-ALB
Priority: 100
Direction: Inbound
Source: VirtualNetwork (or specific IP prefix)
Source Port: *
Destination: Any (or specific subnet)
Destination Port: 443
Protocol: Tcp
Action: Allow
</code></pre>

    <h4>Azure Firewall</h4>
    <p>Azure Firewall is a <strong>managed, cloud-native</strong> firewall service that provides centralized network security policy across multiple VNets and subscriptions.</p>
    <ul>
      <li><strong>Stateful inspection:</strong> Tracks connection state for intelligent filtering</li>
      <li><strong>Application rules:</strong> Filter by FQDN (e.g., allow access to *.microsoft.com)</li>
      <li><strong>Network rules:</strong> Filter by IP/port/protocol</li>
      <li><strong>NAT rules:</strong> Port forwarding and destination NAT</li>
      <li><strong>Threat Intelligence:</strong> Built-in alerting and deny logic based on Microsoft threat intelligence</li>
      <li><strong>DNS Proxy:</strong> Azure Firewall can act as a DNS proxy, enabling FQDN filtering</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Azure Firewall vs. NSG</div>
      <p><strong>NSGs</strong> are <em>micro-segmentation</em> tools — they apply at the VM/Subnet level with simple 5-tuple rules.<br>
      <strong>Azure Firewall</strong> is a <em>next-generation firewall</em> — it operates at the VNet/perimeter level with L3-L7 inspection, application rules, and threat intelligence.</p>
      <p>In a mature architecture, <strong>both are used together</strong>: Azure Firewall at the perimeter, NSGs at the workload level.</p>
    </div>

    <h4>DDoS Protection</h4>
    <p>Azure DDoS Protection provides automatic attack mitigation:</p>
    <table>
      <thead>
        <tr><th>Plan</th><th>Features</th><th>Cost</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Basic</strong></td><td>Always-on, automatic protection for public IPs</td><td>Free</td></tr>
        <tr><td><strong>Standard</strong></td><td>Enhanced mitigation policies, attack analytics, cost protection, auto-tuning</td><td>Per resource/month</td></tr>
        <tr><td><strong>Plan 1 + Adaptive</strong></td><td>+ Adaptive tuning based on traffic learning</td><td>Higher tier</td></tr>
      </tbody>
    </table>

    <h5>DDoS Mitigation Flow</h5>
    <ol>
      <li>Monitor traffic continuously using machine learning</li>
      <li>Detect anomalous traffic patterns</li>
      <li>Rate-limit or drop malicious traffic at the edge</li>
      <li>Notify via alerts and provide post-attack analytics</li>
    </ol>

    <h4>Bastion — Secure RDP/SSH</h4>
    <div class="info-box">
      <div class="info-title">💡 Azure Bastion — No Public IPs for VMs</div>
      <p>Azure Bastion provides secure, seamless RDP/SSH connectivity to VMs directly through the Azure portal <strong>over TLS</strong>. Benefits:</p>
      <ul>
        <li>No public IP addresses on VMs</li>
        <li>No need for jump boxes or bastion hosts</li>
        <li>Uses Entra ID authentication</li>
        <li>Traffic stays within Azure's network (not traversing the internet)</li>
        <li>Works with NSGs and JIT access</li>
      </ul>
    </div>
  `,

  v1c28: `
    <h3>Azure Storage Security</h3>
    <p>
      Azure Storage holds some of the most critical data in your Azure environment. Securing storage accounts requires understanding multiple layers: network access, authentication, encryption, and data protection.
    </p>

    <h4>Storage Account Access Tiers</h4>
    <p>Azure Storage supports multiple authentication methods (from most secure to least secure):</p>
    <ol>
      <li><strong>Azure AD (Entra ID):</strong> Recommended — uses role-based access with Conditional Access policies, MFA, and audit logging</li>
      <li><strong>Shared Key:</strong> Account-level keys (key1, key2) — rotate regularly</li>
      <li><strong>Shared Access Signatures (SAS):</strong> Time-limited, scoped tokens — use stored access policies for revocation</li>
      <li><strong>Public Access:</strong> Available at the container level — <strong>avoid in production</strong></li>
    </ol>

    <div class="warning-box">
      <div class="warning-title">⚠️ Public Access Risks</div>
      <p>In 2020, Microsoft disclosed that <strong>more than 10,000 Azure Storage accounts</strong> had their blob containers inadvertently exposed to the public internet. Always:</p>
      <ul>
        <li>Set default access level to <strong>Private</strong></li>
        <li>Enable <strong>Secure Transfer Required</strong> (HTTPS only)</li>
        <li>Use <strong>Private Endpoints</strong> to eliminate public exposure entirely</li>
      </ul>
    </div>

    <h4>Azure Blob Storage Security</h4>
    <table>
      <thead>
        <tr><th>Security Control</th><th>Description</th><th>Configuration</th></tr>
      </thead>
      <tbody>
        <tr><td>Encryption at Rest</td><td>AES-256 encryption (enabled by default, Microsoft-managed keys)</td><td>Optional: Customer-managed keys via Key Vault</td></tr>
        <tr><td>Secure Transfer</td><td>Requires HTTPS for all requests</td><td>Enabled at storage account level</td></tr>
        <tr><td>Network Isolation</td><td>Restrict access to specific VNets</td><td>Private Endpoints + firewall rules</td></tr>
        <tr><td>Immutability</td><td>Prevent deletion/modification for compliance</td><td>Legal hold, time-based retention</td></tr>
        <tr><td>Versioning</td><td>Auto-version blob modifications</td><td>Recommended for critical data</td></tr>
        <tr><td>Soft Delete</td><td>Deleted blobs recoverable for configurable period</td><td>Enable for all critical containers</td></tr>
        <tr><td>Change Feed</td><td>Track all blob modifications</td><td>Useful for audit and forensics</td></tr>
      </tbody>
    </table>

    <h4>Shared Access Signatures (SAS) Best Practices</h4>
    <div class="key-box">
      <div class="key-title">🔑 SAS Security Best Practices</div>
      <ul>
        <li><strong>Always set an expiration:</strong> Never create SAS tokens without an expiry time</li>
        <li><strong>Use Stored Access Policies:</strong> Allows server-side revocation of SAS permissions</li>
        <li><strong>Restrict to specific resources:</strong> Grant access to specific containers/blobs, not the entire account</li>
        <li><strong>Use HTTPS-only SAS:</strong> Set the <code>signedProtocol</code> to <code>https</code></li>
        <li><strong>Avoid Account SAS:</strong> Prefer Service SAS (scoped to a specific resource)</li>
        <li><strong>Monitor SAS usage:</strong> Enable storage analytics logging</li>
        <li><strong>Short durations:</strong> Use the shortest expiry time that meets the use case</li>
      </ul>
    </div>

    <h4>Azure Files and File Sync Security</h4>
    <ul>
      <li>Encrypt data in transit with SMB encryption (always)</li>
      <li>Use Private Endpoints for Azure Files</li>
      <li>Enable AD-based authentication (on-premises AD or Entra DS)</li>
      <li>Use Shared Key or Azure AD authentication (not anonymous)</li>
    </ul>
  `,

  v1c29: `
    <h3>Azure VM Security</h3>
    <p>
      Azure Virtual Machines are among the most commonly deployed resources. While they provide familiar compute models, the security responsibility is <strong>primarily yours</strong> (the customer) under the shared responsibility model.
    </p>

    <h4>Azure VM Security Architecture</h4>
    <div class="callout">
      <div class="callout-icon">🏗️</div>
      <div class="callout-content">
        <h4>Defense-in-Depth for Azure VMs</h4>
        <ol>
          <li><strong>Azure Security Center/Defender:</strong> Continuous assessment and recommendations</li>
          <li><strong>Network Security Groups:</strong> Control network traffic at the subnet/VM level</li>
          <li><strong>Azure Firewall:</strong> Centralized perimeter protection</li>
          <li><strong>Just-In-Time VM Access:</strong> Open management ports only when needed</li>
          <li><strong>Disk Encryption:</strong> Azure Disk Encryption (BitLocker for Windows, DM-Crypt for Linux)</li>
          <li><strong>Entra ID:</strong> Azure RBAC for access control + Conditional Access</li>
          <li><strong>Bastion:</strong> Secure RDP/SSH without public IPs</li>
          <li><strong>Guest Configuration:</strong> Enforce OS-level compliance</li>
        </ol>
      </div>
    </div>

    <h4>Just-In-Time (JIT) VM Access</h4>
    <p>JIT access is one of the most impactful security features for VMs:</p>
    <ol>
      <li>Management ports (RDP: 3389, SSH: 22, PowerShell: 5986) are <strong>locked by default</strong></li>
      <li>Users request access through the Azure Portal or API</li>
      <li>Access is granted for a <strong>limited time window</strong> (configurable, typically 3 hours max)</li>
      <li>Access is <strong>logged</strong> in Activity Logs and can trigger alerts</li>
      <li>After the window expires, ports are automatically re-locked</li>
    </ol>

    <div class="success-box">
      <div class="success-title">✓ JIT Impact</div>
      <p>Organizations using JIT VM access see a <strong>95%+ reduction in port scanning attacks</strong> on their management interfaces. Since ports are closed by default, attackers scanning the internet never see them open.</p>
    </div>

    <h4>Azure Disk Encryption</h4>
    <table>
      <thead>
        <tr><th>Feature</th><th>Windows VMs</th><th>Linux VMs</th></tr>
      </thead>
      <tbody>
        <tr><td>Encryption</td><td>BitLocker</td><td>DM-Crypt</td></tr>
        <tr><td>Key Management</td><td>Key Vault or Entra ID</td><td>Key Vault or Entra ID</td></tr>
        <tr><td>Temp Disk</td><td>Not encrypted by default</td><td>Not encrypted by default</td></tr>
        <tr><td>Encryption at Host</td><td>Available (encrypts at the host, not inside VM)</td><td>Available</td></tr>
      </tbody>
    </table>

    <div class="callout">
      <div class="callout-icon">⚡</div>
      <div class="callout-content">
        <h4>Encrypt at Host vs. Server-Side Encryption</h4>
        <p><strong>Server-side encryption (SSE):</strong> Azure encrypts data as it writes to storage and decrypts as it reads. Transparent to the VM but managed by Azure.<br>
        <strong>Encryption at Host:</strong> Data is encrypted in the VM's memory before being written to the disk. Even Azure operators cannot read the data. <strong>Use this for highly sensitive workloads.</strong></p>
      </div>
    </div>

    <h4>VM Hardening Checklist</h4>
    <ol>
      <li>Use <strong>Azure Marketplace</strong> images — they're patched and hardened</li>
      <li>Enable <strong>Azure Security Center</strong> agent on all VMs</li>
      <li>Configure <strong>NSGs</strong> with least-privilege rules</li>
      <li>Enable <strong>JIT access</strong> for all management ports</li>
      <li>Enable <strong>encryption at host</strong> or <strong>Azure Disk Encryption</strong></li>
      <li>Disable <strong>password authentication</strong>; use SSH keys (Linux) or Entra ID (Windows)</li>
      <li>Apply <strong>OS hardening</strong> (STIG/CIS benchmarks)</li>
      <li>Configure <strong>automatic OS patching</strong> (Azure provides automatic VM guest patching)</li>
      <li>Enable <strong>boot diagnostics</strong> for troubleshooting security events</li>
      <li>Use <strong>Availability Zones</strong> for resilience against localized attacks</li>
    </ol>
  `,

  v1c30: `
    <h3>Azure Functions Security</h3>
    <p>
      Azure Functions is the serverless compute offering from Microsoft. Its event-driven, pay-per-execution model provides unique security characteristics — the platform handles most infrastructure concerns, but developers must still secure their code and configuration.
    </p>

    <h4>Azure Functions Identity</h4>
    <p>Every Azure Function has a <strong>system-assigned managed identity</strong> (or can have a user-assigned one). This identity is used to authenticate to other Azure services — no secrets needed.</p>
    <ul>
      <li>Enabled by default on all function apps</li>
      <li>Assign RBAC roles to the identity for specific resources</li>
      <li>Identity is automatically rotated and managed by Azure</li>
    </ul>

    <h5>Function App Authentication/Authorization</h5>
    <p>Built-in authentication (Easy Auth) handles identity without code changes:</p>
    <table>
      <thead>
        <tr><th>Identity Provider</th><th>Use Case</th></tr>
      </thead>
      <tbody>
        <tr><td>Microsoft Entra ID</td><td>Enterprise SSO, corporate apps</td></tr>
        <tr><td>Microsoft Account</td><td>Consumer apps</td></tr>
        <tr><td>Google, Facebook, Twitter</td><td>Social login scenarios</td></tr>
        <tr><td>Custom OpenID Connect</td><td>Any OIDC-compliant IdP</td></tr>
        <tr><td>API Keys</td><td>Simple dev/test access (not recommended for production)</td></tr>
      </tbody>
    </table>

    <h4>Functions Security Best Practices</h4>
    <ol>
      <li><strong>Use Managed Identity</strong> instead of connection strings for all Azure service connections</li>
      <li><strong>Secure function keys:</strong> Don't expose keys in client-side code; use Entra ID authentication instead</li>
      <li><strong>Network restrictions:</strong> Use VNet integration and access restrictions to limit which IPs can call functions</li>
      <li><strong>Premium Plan for sensitive workloads:</strong> Provides VNet integration, premium compute, and no cold starts</li>
      <li><strong>Disable CORS</strong> or restrict to specific origins</li>
      <li><strong>Set function timeouts:</strong> Prevent runaway functions (default is 5 min; configurable to 10 min on Consumption plan)</li>
      <li><strong>Code signing:</strong> Deploy only from trusted sources</li>
      <li><strong>Application Insights:</strong> Enable for security monitoring and anomaly detection</li>
    </ol>

    <h4>Durable Functions Security</h4>
    <p>Durable Functions (stateful orchestrations) have specific security considerations:</p>
    <ul>
      <li>Orchestration history is stored in the configured storage backend — encrypt it</li>
      <li>Use <strong>external event</strong> APIs carefully — validate input</li>
      <li>Implement <strong>rate limiting</strong> on HTTP-triggered orchestration starters</li>
    </ul>

    <div class="warning-box">
      <div class="warning-title">⚠️ Functions Pitfall: Exposed Endpoints</div>
      <p>Functions on the Consumption plan are publicly accessible by default. Without proper authentication and network restrictions, anyone who discovers your function URL can invoke it. Always configure <strong>Authorization level</strong> and <strong>Access Restrictions</strong>.</p>
    </div>
  `,

  v1c31: `
    <h3>Azure Monitor & Log Analytics</h3>
    <p>
      Azure Monitor is the comprehensive monitoring platform that provides <strong>full-stack observability</strong> across Azure resources, on-premises infrastructure, and hybrid environments. For security, it's your primary tool for detecting and responding to threats.
    </p>

    <h4>Azure Monitor Components</h4>
    <table>
      <thead>
        <tr><th>Component</th><th>Function</th><th>Security Relevance</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Azure Monitor Logs</strong></td><td>Collects and analyzes log data</td><td>Security investigations, threat hunting</td></tr>
        <tr><td><strong>Log Analytics</strong></td><td>Query and analyze log data with KQL</td><td>Central security analytics platform</td></tr>
        <tr><td><strong>Azure Monitor Metrics</strong></td><td>Numerical performance data</td><td>Anomaly detection, capacity planning</td></tr>
        <tr><td><strong>Application Insights</strong></td><td>Application performance monitoring</td><td>Detect application-layer attacks</td></tr>
        <tr><td><strong>Azure Monitor Alerts</strong></td><td>Proactive notifications</td><td>Real-time security incident alerts</td></tr>
        <tr><td><strong>Azure Monitor Workbooks</strong></td><td>Interactive visual reports</td><td>Security dashboards</td></tr>
      </tbody>
    </table>

    <h4>Log Analytics Query Language (KQL)</h4>
    <p>KQL (Kusto Query Language) is a powerful query language for log analysis. Essential security queries:</p>
    <pre><code>
// Find all failed sign-ins in the last 24 hours
SigninLogs
| where TimeGenerated > ago(24h)
| where ResultType == "50074" // MFA challenge failed
| summarize FailedMFA = count() by UserPrincipalName
| order by FailedMFA desc

// Detect impossible travel
SigninLogs
| where TimeGenerated > ago(7d)
| summarize StartLocation = make_set(Location), EndLocation = make_set(Location) by UserPrincipalName
| where array_length(StartLocation) > 3

// Find suspicious Azure resource creation (potential crypto miner)
AzureActivity
| where TimeGenerated > ago(24h)
| where OperationNameValue contains "Microsoft.Compute/virtualMachines/write"
| where Caller contains "unknown"
| project TimeGenerated, Caller, ResourceGroup
</code></pre>

    <h5>Key Workspace Configuration</h5>
    <ul>
      <li>Use <strong>dedicated Log Analytics workspaces</strong> per environment (prod, staging, dev)</li>
      <li>Configure <strong>retention policies</strong> — at least 90 days for security logs (1 year preferred)</li>
      <li>Enable <strong>data export</strong> from Azure Monitor to long-term storage (ADLS Gen2, Event Hub)</li>
      <li>Set up <strong>data collection rules</strong> for Windows Event Logs, Syslog, custom logs</li>
      <li>Enable <strong>Azure Monitor agent</strong> (replaces legacy MMA agent) on all VMs</li>
    </ul>

    <div class="callout">
      <div class="callout-icon">📊</div>
      <div class="callout-content">
        <h4>KQL Cheat Sheet for Security</h4>
        <p><strong>Sign-in analysis:</strong> <code>SigninLogs</code> — track all Azure AD sign-ins<br>
        <strong>Audit trail:</strong> <code>AuditLogs</code> — who changed what in Entra ID<br>
        <strong>Resource changes:</strong> <code>AzureActivity</code> — all ARM operations<br>
        <strong>Network connections:</strong> <code>VMConnection</code> — track communication patterns<br>
        <strong>Windows events:</strong> <code>Event</code> — system, security, application logs<br>
        <strong>Threat detection:</strong> <code>SecurityAlert</code> — security findings aggregated</p>
      </div>
    </div>
  `,

  v1c32: `
    <h3>Azure Sentinel</h3>
    <p>
      Azure Sentinel is Microsoft's <strong>cloud-native SIEM (Security Information and Event Management)</strong> and SOAR (Security Orchestration, Automation, and Response) solution. It provides intelligent security analytics across your entire enterprise — spanning on-premises, cloud, and hybrid environments.
    </p>

    <h4>Why Sentinel?</h4>
    <p>Traditional SIEM tools require significant infrastructure, specialized staff, and expensive licensing. Sentinel is different:</p>
    <table>
      <thead>
        <tr><th>Traditional SIEM</th><th>Azure Sentinel</th></tr>
      </thead>
      <tbody>
        <tr><td>Expensive hardware/software</td><td>Cloud-native, pay-as-you-go</td></tr>
        <tr><td>Monolithic deployment</td><td>Serverless, scales automatically</td></tr>
        <tr><td>Months to deploy</td><td>Hours to get started</td></tr>
        <tr><td>Custom connectors require development</td><td>250+ built-in connectors + Common Event Format</td></tr>
        <tr><td>Requires on-premise infrastructure</td><td>Fully managed, zero infrastructure</td></tr>
      </tbody>
    </table>

    <h4>Sentinel Architecture</h4>
    <pre><code>
Data Sources → Connectors → Log Analytics Workspace → Sentinel
                                                          │
                                                   Analytics Rules
                                                          │
                                            ┌────────────┼────────────┐
                                            ▼            ▼            ▼
                                      Incidents    Hunting    Workbooks
                                            │
                                      Playbooks (SOAR)
                                            │
                                      Response Actions
</code></pre>

    <h4>Key Sentinel Features</h4>
    <ol>
      <li><strong>Analytics Rules:</strong> Correlate events across data sources to generate security incidents. Use built-in rules or create custom ones with KQL.</li>
      <li><strong>Fusion (ML):</strong> Automatically correlates multiple low-fidelity alerts into high-fidelity incidents using machine learning.</li>
      <li><strong>Incidents:</strong> Aggregated alerts with context, severity, and status tracking.</li>
      <li><strong>Hunting:</strong> Proactively search for threats using KQL queries and built-in hunting queries.</li>
      <li><strong>Playbooks:</strong> Automated response workflows using Azure Logic Apps. Respond to incidents in seconds.</li>
      <li><strong>Workbooks:</strong> Custom dashboards for security visualization and reporting.</li>
      <li><strong>Threat Intelligence:</strong> Integrate TI feeds to enrich alerts with known indicators of compromise.</li>
      <li><strong>UEBA (Entity Behavior Analytics):</strong> ML-powered anomaly detection for users and entities.</li>
      <li><strong>Notebooks:</strong> Jupyter notebooks for advanced analytics and investigation.</li>
      <li><strong>Automation Rules:</strong> Automatically triage, assign, and close incidents.</li>
    </ol>

    <h5>Essential Sentinel Analytics Rules to Enable</h5>
    <table>
      <thead>
        <tr><th>Rule Category</th><th>Example</th><th>Priority</th></tr>
      </thead>
      <tbody>
        <tr><td>Brute Force</td><td>Multiple failed logins from single source</td><td>High</td></tr>
        <tr><td>Impossible Travel</td><td>User logs in from two distant locations in minutes</td><td>High</td></tr>
        <tr><td>Mass Data Export</td><td>Unusual volume of data downloaded from SharePoint</td><td>High</td></tr>
        <tr><td>Privilege Escalation</td><td>User self-grants elevated roles</td><td>Critical</td></tr>
        <tr><td>Suspicious Process Execution</td><td>Known attack tools (Mimikatz, Cobalt Strike)</td><td>Critical</td></tr>
        <tr><td>Lateral Movement</td><td>Authentication to multiple machines in short timeframe</td><td>High</td></tr>
        <tr><td>New Country Login</td><td>Sign-in from country where organization has no presence</td><td>Medium</td></tr>
      </tbody>
    </table>
  `,

  v1c33: `
    <h3>Azure Defender for Cloud</h3>
    <p>
      Azure Defender for Cloud (formerly Azure Security Center) is Microsoft's <strong>unified cloud security management</strong> and <strong>threat protection</strong> platform. It provides continuous security assessment, threat detection, and remediation recommendations across hybrid cloud workloads.
    </p>

    <h4>Defender for Cloud Tiers</h4>
    <table>
      <thead>
        <tr><th>Tier</th><th>Features</th><th>Cost</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Free Tier</strong></td>
          <td>Security recommendations, secure score, continuous assessment</td>
          <td>Free</td>
        </tr>
        <tr>
          <td><strong>Defender for Servers (Plan 1)</strong></td>
          <td>+ Just-in-time VM access, adaptive application controls, vulnerability assessment</td>
          <td>Per machine/month</td>
        </tr>
        <tr>
          <td><strong>Defender for Servers (Plan 2)</strong></td>
          <td>+ EDR (Endpoint Detection and Response), threat detection, behavioral analysis</td>
          <td>Higher per machine/month</td>
        </tr>
        <tr>
          <td><strong>Defender for Containers</strong></td>
          <td>+ Container image scanning, runtime protection for Kubernetes</td>
          <td>Per node/month</td>
        </tr>
        <tr>
          <td><strong>Defender for Storage</strong></td>
          <td>+ Malware scanning, sensitive data discovery for blob storage</td>
          <td>Per storage account/month</td>
        </tr>
        <tr>
          <td><strong>Defender for SQL</strong></td>
          <td>+ SQL injection detection, vulnerability assessment for SQL databases</td>
          <td>Per server/month</td>
        </tr>
        <tr>
          <td><strong>Defender for Key Vault</strong></td>
          <td>+ Key vault access anomaly detection</td>
          <td>Per vault/month</td>
        </tr>
        <tr>
          <td><strong>Defender for DNS</strong></td>
          <td>+ DNS-layer protection against malicious domains</td>
          <td>Per resource/month</td>
        </tr>
        <tr>
          <td><strong>Defender for ARM</strong></td>
          <td>+ Anomaly detection on resource manager operations</td>
          <td>Per subscription/month</td>
        </tr>
      </tbody>
    </table>

    <h4>Secure Score</h4>
    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Secure Score</div>
      <p>Secure Score is a normalized score (0-100%) based on security recommendations. It helps you understand your current security posture and prioritize improvements.</p>
      <ul>
        <li>Every recommendation has a <strong>security impact</strong> rating (High, Medium, Low)</li>
        <li>Completing recommendations <strong>increases</strong> your score</li>
        <li>Your score is compared against Azure benchmarks</li>
        <li>Goal: Achieve 80%+ secure score</li>
      </ul>
    </div>

    <h4>Key Defender for Cloud Capabilities</h4>
    <table>
      <thead>
        <tr><th>Capability</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>Continuous Assessment</td><td>Scans resources continuously for misconfigurations and vulnerabilities</td></tr>
        <tr><td>Regulatory Compliance</td><td>Maps findings to compliance standards (ISO 27001, SOC 2, PCI DSS, etc.)</td></tr>
        <tr><td>Threat Protection</td><td>Alerts on detected threats (ransomware, cryptominers, brute force)</td></tr>
        <tr><td>Adaptive Application Control</td><td>Uses ML to learn which applications should run on VMs and blocks everything else</td></tr>
        <tr><td>Network Hardening</td><td>Recommends network security group rules based on traffic analysis</td></tr>
        <tr><td>File Integrity Monitoring</td><td>Detects changes to critical system files on Windows/Linux VMs</td></tr>
        <tr><td>Vulnerability Assessment</td><td>Built-in Qualys-powered scanner — no additional license required for MDC P2</td></tr>
      </tbody>
    </table>

    <h5>Enabling Defender for Cloud at Scale</h4>
    <pre><code>
# Enable enhanced security features across entire management group using Azure CLI
az security pricing create \
  --name VirtualMachines \
  --tier "Standard"

az security pricing create \
  --name SqlServers \
  --tier "Standard"

az security pricing create \
  --name StorageAccounts \
  --tier "Standard"

# Auto-provision Log Analytics agent
az security auto-provisioning-setting update \
  --name "default" \
  --auto-provision "On"
</code></pre>
  `,

  v1c34: `
    <h3>Azure Policy</h3>
    <p>
      Azure Policy is a governance service that enables you to <strong>create, assign, and manage policies</strong> that enforce different rules and effects over your Azure resources. It ensures resources stay compliant with your corporate standards and service-level agreements.
    </p>

    <h4>How Azure Policy Works</h4>
    <div class="info-box">
      <div class="info-title">💡 The Policy Engine</div>
      <p>Azure Policy evaluates resources in Azure by comparing <strong>properties</strong> of those resources against defined rules. Each policy has three components:</p>
      <ul>
        <li><strong>Policy Definition:</strong> The rule — "All storage accounts must use encryption"</li>
        <li><strong>Assignment:</strong> Where the policy applies — a specific subscription or resource group</li>
        <li><strong>Parameters:</strong> Optional customization per assignment</li>
      </ul>
      <p><strong>Policy Evaluation:</strong> Azure Policy runs evaluations on a regular cadence and can also trigger on resource changes (Azure Policy extension for ARM). Non-compliant resources are flagged but <strong>not automatically fixed</strong> unless remediation tasks are configured.</p>
    </div>

    <table>
      <thead>
        <tr><th>Policy Type</th><th>Description</th><th>Use Case</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Built-in Policies</strong></td><td>Pre-defined by Microsoft (>10,000)</td><td>Quick compliance setup, CIS benchmarks</td></tr>
        <tr><td><strong>Custom Policies</strong></td><td>Written in policy language (JSON with conditions)</td><td>Organization-specific requirements</td></tr>
        <tr><td><strong>Initiatives (Policy Sets)</strong></td><td>Groups of related policies</td><td>Apply a complete compliance standard (e.g., CIS, NIST)</td></tr>
      </tbody>
    </table>

    <h4>Policy Effects</h4>
    <table>
      <thead>
        <tr><th>Effect</th><th>Behavior</th></tr>
      </thead>
      <tbody>
        <tr><td>Audit</td><td>Creates a warning event for non-compliant resources (default)</td></tr>
        <tr><td>Deny</td><td>Blocks non-compliant resource creation/modification</td></tr>
        <tr><td>Append</td><td>Adds missing properties during creation (e.g., adding tags)</td></tr>
        <tr><td>DeployIfNotExists</td><td>Deploys a resource if it doesn't exist (e.g., deploy Log Analytics agent)</td></tr>
        <tr><td>Modify</td><td>Adds, updates, or removes properties on existing resources</td></tr>
        <tr><td>Disabled</td><td>Policy not evaluated</td></tr>
      </tbody>
    </table>

    <h5>Essential Security Policies</h5>
    <pre><code>
// Example: Deny creation of storage accounts without encryption
{
  "properties": {
    "displayName": "Storage accounts should encrypt data at rest",
    "policyType": "Custom",
    "mode": "All",
    "parameters": {},
    "policyRule": {
      "if": {
        "allOf": [
          {
            "field": "type",
            "equals": "Microsoft.Storage/storageAccounts"
          },
          {
            "field": "Microsoft.Storage/storageAccounts/encryption.keySource",
            "notEquals": "Microsoft.Storage"
          }
        ]
      },
      "then": {
        "effect": "Deny"
      }
    }
  }
}
</code></pre>

    <div class="info-box">
      <div class="info-title">💡 Azure Blueprints vs. Azure Policy</div>
      <p><strong>Azure Policy</strong> enforces <em>what</em> configurations must look like.<br>
      <strong>Azure Blueprints</strong> defines <em>what</em> resources should exist and their configurations (entire environment-as-code).<br>
      They complement each other: Blueprints deploy the environment, Policies enforce compliance.</p>
    </div>
  `,

  v1c35: `
    <h3>Azure Blueprints</h3>
    <p>
      Azure Blueprints enables you to define a <strong>repeatable set of Azure resources</strong> that implement and adhere to standards, patterns, and requirements. Think of Blueprints as "environment templates" that ensure consistency, governance, and compliance from day one.
    </p>

    <h4>What Are Blueprints?</h4>
    <p>Blueprints are <strong>immutable snapshots</strong> of a governed environment. Unlike ARM templates, Blueprints include:</p>
    <ul>
      <li><strong>Resource templates:</strong> ARM templates for deploying resources</li>
      <li><strong>Policy assignments:</strong> Azure Policy assignments baked into the blueprint</li>
      <li><strong>Role assignments:</strong> RBAC assignments for consistent access control</li>
      <li><strong>Resource groups:</strong> Blueprint can create and manage resource groups</li>
    </ul>

    <h4>Blueprint Lifecycle</h4>
    <ol>
      <li><strong>Create:</strong> Define the blueprint with artifacts</li>
      <li><strong>Publish:</strong> Create a versioned snapshot (v1, v2, etc.)</li>
      <li><strong>Assign:</strong> Deploy the blueprint to a subscription/resource group with parameters</li>
      <li><strong>Track:</strong> Monitor deployment progress and compliance</li>
      <li><strong>Update:</strong> Create a new version of the published blueprint</li>
    </ol>

    <h4>Built-in Blueprints</h4>
    <table>
      <thead>
        <tr><th>Blueprint</th><th>Focus</th></tr>
      </thead>
      <tbody>
        <tr><td>ISO 27001</td><td>Information security management</td></tr>
        <tr><td>NIST SP 800-53 Rev 5</td><td>US federal security controls</td></tr>
        <tr><td>NIST Cybersecurity Framework</td><td>Risk management framework</td></tr>
        <tr><td>CIS Microsoft Azure Foundations Benchmark</td><td>CIS security benchmarks</td></tr>
        <tr><td>UK OFFICIAL / NHS DSPT</td><td>UK government security standards</td></tr>
        <tr><td>HITRUST</td><td>Healthcare information security</td></tr>
        <tr><td>Payment Card Industry (PCI)</td><td>PCI DSS compliance</td></tr>
      </tbody>
    </table>

    <h4>Blueprint vs. ARM Templates vs. Terraform</h4>
    <table>
      <thead>
        <tr><th>Feature</th><th>Blueprints</th><th>ARM Templates</th><th>Terraform</th></tr>
      </thead>
      <tbody>
        <tr><td>Policy Integration</td><td><strong>Native</strong></td><td>Separate</td><td>Via provider</td></tr>
        <tr><td>RBAC Integration</td><td><strong>Native</strong></td><td>Separate</td><td>Via provider</td></tr>
        <tr><td>Immutability</td><td><strong>Published versions are immutable</strong></td><td>Overwrites</td><td>State file management</td></tr>
        <tr><td>Multi-subscription</td><td><strong>Single deployment across subscriptions</strong></td><td>One subscription per deployment</td><td>Multiple providers</td></tr>
        <tr><td>GitOps</td><td>Limited</td><td>Good</td><td><strong>Best in class</strong></td></tr>
        <tr><td>Ecosystem</td><td>Azure only</td><td>Azure only</td><td>Multi-cloud</td></tr>
      </tbody>
    </table>

    <div class="callout">
      <div class="callout-icon">🏗️</div>
      <div class="callout-content">
        <h4>Enterprise Deployment Pattern</h4>
        <p>A common enterprise pattern:</p>
        <ol>
          <li>Deploy <strong>Azure Blueprints</strong> to set up subscription structure, policies, and RBAC</li>
          <li>Use <strong>Azure Policy</strong> for ongoing compliance enforcement</li>
          <li>Use <strong>Terraform/Azure Bicep</strong> for individual resource deployments</li>
          <li>Use <strong>Azure DevOps/GitHub Actions</strong> for CI/CD pipelines</li>
        </ol>
        <p>This gives you <strong>governance at scale</strong> with <strong>flexibility at the resource level</strong>.</p>
      </div>
    </div>
  `,

  v1c36: `
    <h3>Azure Security Center</h3>
    <p>
      Azure Security Center has evolved into <strong>Azure Defender for Cloud</strong> and <strong>Microsoft Defender for Cloud Apps</strong>. While the original Security Center branding is being phased out, understanding its foundational concepts remains essential.
    </p>

    <h4>Evolution: Security Center → Defender for Cloud</h4>
    <table>
      <thead>
        <tr><th>Era</th><th>Service</th><th>Key Features</th></tr>
      </thead>
      <tbody>
        <tr><td>2015-2020</td><td>Azure Security Center (Free + Standard)</td><td>Security recommendations, Just-In-Time access, Adaptive Application Controls</td></tr>
        <tr><td>2020-2023</td><td>Azure Defender for Cloud</td><td>Unified security management, plan-based pricing, enhanced threat protection</td></tr>
        <tr><td>2023+</td><td>Microsoft Defender for Cloud + Defender for Cloud Apps</td><td>Full CASB, broader SaaS protection, enhanced CNAPP capabilities</td></tr>
      </tbody>
    </table>

    <h4>Legacy Security Center Features Now in Defender</h4>
    <div class="info-box">
      <div class="info-title">📋 Feature Migration Map</div>
      <ul>
        <li><strong>Security Recommendations →</strong> Defender for Cloud Secure Score &amp; Recommendations</li>
        <li><strong>Just-In-Time VM Access →</strong> JIT in Defender for Servers Plan 1</li>
        <li><strong>Adaptive Application Controls →</strong> Adaptive Controls in Defender for Servers Plan 2</li>
        <li><strong>Security Alerts →</strong> Enhanced alerts in Defender for Servers Plan 2</li>
        <li><strong>File Integrity Monitoring →</strong> FIM in Defender for Servers Plan 2</li>
        <li><strong>Regulatory Compliance Dashboard →</strong> Enhanced regulatory compliance in Defender</li>
      </ul>
    </div>

    <h4>Secure Score Deep Dive</h4>
    <p>Secure Score measures your security posture across key areas:</p>
    <table>
      <thead>
        <tr><th>Security Area</th><th>Weight</th><th>Improvement Strategies</th></tr>
      </thead>
      <tbody>
        <tr><td>Compute</td><td>20%</td><td>Enable JIT, update OS, enable encryption</td></tr>
        <tr><td>Networking</td><td>15%</td><td>NSG rules, NSGs on subnets, close management ports</td></tr>
        <tr><td>Data &amp; Storage</td><td>25%</td><td>Enable encryption, restrict access, use private endpoints</td></tr>
        <tr><td>Identity &amp; Access</td><td>30%</td><td>MFA, RBAC, least privilege, Conditional Access</td></tr>
        <tr><td>Inventory and Asset Management</td><td>10%</td><td>Tag resources, complete inventory</td></tr>
      </tbody>
    </table>

    <h4>Comparison: Defender for Cloud vs. Third-Party CSPM</h4>
    <table>
      <thead>
        <tr><th>Capability</th><th>Defender for Cloud</th><th>Third-Party (Wiz, Prisma, Orca)</th></tr>
      </thead>
      <tbody>
        <tr><td>Azure-Native Features</td><td><strong>Deep integration</strong> + first-party optimizations</td><td>May lag behind new Azure features</td></tr>
        <tr><td>Multi-Cloud</td><td>AWS + GCP support</td><td>Specialized multi-cloud coverage</td></tr>
        <tr><td>Agentless Scanning</td><td>Yes + agent-based for enhanced</td><td>All agentless</td></tr>
        <tr><td>Graph Database</td><td>Yes (resource graph)</td><td>More mature graph analysis (Wiz)</td>
        <tr><td>Kubernetes Scanning</td><td>Defender for Containers</td><td>Specialized CNAPP features</td></tr>
        <tr><td>Workload Protection (EDR)</td><td>Yes (MDC P2)</td><td>Limited to alerting</td></tr>
      </tbody>
    </table>
  `,

  v1c37: `
    <h3>Azure Compliance Manager</h3>
    <p>
      Azure Compliance Manager (now integrated into Microsoft Purview compliance portal) helps you <strong>assess, track, and improve</strong> your compliance posture. Unlike Defender for Cloud's Secure Score, it's specifically designed around <strong>regulatory compliance frameworks</strong>.
    </p>

    <h4>What Compliance Manager Does</h4>
    <ul>
      <li><strong>Assess:</strong> Evaluate your current compliance against industry standards</li>
      <li><strong>Improve:</strong> Get actionable improvement activities with step-by-step guidance</li>
      <li><strong>Document:</strong> Maintain evidence and documentation for audits</li>
      <li><strong>Report:</strong> Generate compliance reports for stakeholders and auditors</li>
    </ul>

    <h4>Available Compliance Assessments</h4>
    <table>
      <thead>
        <tr><th>Assessment</th><th>Framework</th><th>Focus</th></tr>
      </thead>
      <tbody>
        <tr><td>GDPR Assessment</td><td>EU GDPR</td><td>Data protection for EU citizens</td></tr>
        <tr><td>HIPAA Assessment</td><td>HIPAA</td><td>Healthcare data protection</td></tr>
        <tr><td>ISO 27001 Assessment</td><td>ISO 27001</td><td>Information security management</td></tr>
        <tr><td>SOC 2 Assessment</td><td>AICPA Trust Services</td><td>Service organization controls</td></tr>
        <tr><td>NIST 800-53 Assessment</td><td>NIST</td><td>US federal security controls</td></tr>
        <tr><td>CIS Benchmarks Assessment</td><td>CIS</td><td>Center for Internet Security best practices</td></tr>
        <tr><td>PCI DSS Assessment</td><td>PCI DSS</td><td>Payment card data security</td></tr>
        <tr><td>FedRAMP Assessment</td><td>FedRAMP</td><td>US government cloud authorization</td></tr>
      </tbody>
    </table>

    <h4>Compliance Score</h4>
    <p>Each assessment has a <strong>Compliance Score</strong> (percentage):</p>
    <div class="callout">
      <div class="callout-icon">📊</div>
      <div class="callout-content">
        <h4>How Compliance Score Works</h4>
        <ul>
          <li>Each assessment requirement is marked as <strong>Completed</strong>, <strong>In Progress</strong>, or <strong>Planned</strong></li>
          <li>Score = (Completed + In Progress × 0.5) / Total × 100</li>
          <li>Use it to show auditors your progress and commitment</li>
          <li>Click any requirement to see associated <strong>Improvement Steps</strong></li>
        </ul>
      </div>
    </div>

    <h4>Using Compliance Manager for Audits</h4>
    <ol>
      <li><strong>Initial Assessment:</strong> Run the built-in assessment to get your baseline score</li>
      <li><strong>Gap Analysis:</strong> Identify areas where you're non-compliant</li>
      <li><strong>Remediation:</strong> Follow improvement steps to close gaps</li>
      <li><strong>Evidence Collection:</strong> Upload compliance evidence (screenshots, configurations, policies)</li>
      <li><strong>Audit Support:</strong> Export reports and share with auditors directly from the portal</li>
      <li><strong>Continuous Monitoring:</strong> Track score changes over time</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 Pro Tip: Cross-Framework Mapping</div>
      <p>Compliance Manager maps requirements across <strong>multiple frameworks simultaneously</strong>. For example, implementing one Azure security control might improve your score in GDPR, ISO 27001, <em>and</em> SOC 2 at the same time. Always check the cross-framework insights when planning compliance improvements.</p>
    </div>
  `,

  v1c38: `
    <h3>Azure Security Best Practices</h3>
    <p>
      This chapter summarizes the comprehensive best practices for securing your Azure environment. It ties together everything covered in this Azure Security section into a <strong>master reference</strong>.
    </p>

    <h4>The 10 Pillars of Azure Security</h4>
    <table>
      <thead>
        <tr>
          <th>Pillar</th>
          <th>Practices</th>
          <th>Priority</th>
          <th>Azure Service</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>1. Identity &amp; Access</strong></td>
          <td>MFA, PIM, Conditional Access, disable legacy auth</td>
          <td style="color:#E11D48;font-weight:700;">CRITICAL</td>
          <td>Entra ID, PIM, Conditional Access</td>
        </tr>
        <tr>
          <td><strong>2. Network Security</strong></td>
          <td>NSGs, Azure Firewall, DDoS Protection, Bastion</td>
          <td style="color:#E11D48;font-weight:700;">CRITICAL</td>
          <td>Azure Firewall, NSG, DDoS, Bastion</td>
        </tr>
        <tr>
          <td><strong>3. Data Protection</strong></td>
          <td>Encryption at rest/in transit, Key Vault, immutability</td>
          <td style="color:#E11D48;font-weight:700;">CRITICAL</td>
          <td>Key Vault, Storage Encryption, Private Endpoints</td>
        </tr>
        <tr>
          <td><strong>4. Compute Security</strong></td>
          <td>JIT access, disk encryption, OS hardening, Defender</td>
          <td style="color:#FF6B35;font-weight:700;">HIGH</td>
          <td>Defender for Servers, VM Agent, JIT</td>
        </tr>
        <tr>
          <td><strong>5. Monitoring &amp; Logging</strong></td>
          <td>Log Analytics, Sentinel, Activity Logs, Alerts</td>
          <td style="color:#FF6B35;font-weight:700;">HIGH</td>
          <td>Azure Monitor, Sentinel, Activity Log</td>
        </tr>
        <tr>
          <td><strong>6. Governance &amp; Compliance</strong></td>
          <td>Blueprints, Policy, Secure Score, Compliance Manager</td>
          <td style="color:#FF6B35;font-weight:700;">HIGH</td>
          <td>Azure Policy, Blueprints, Defender</td>
        </tr>
        <tr>
          <td><strong>7. Application Security</strong></td>
          <td>Functions security, App Service TLS, managed identities</td>
          <td style="color:#FFD700;font-weight:700;">MEDIUM-HIGH</td>
          <td>App Service, Functions, App Gateway</td>
        </tr>
        <tr>
          <td><strong>8. Backup &amp; Recovery</strong></td>
          <td>Azure Backup, site recovery, soft delete, immutability</td>
          <td style="color:#FFD700;font-weight:700;">MEDIUM-HIGH</td>
          <td>Azure Backup, Site Recovery, Key Vault</td>
        </tr>
        <tr>
          <td><strong>9. CI/CD Security</strong></td>
          <td>Secure pipelines, code signing, artifact management</td>
          <td style="color:#FFD700;font-weight:700;">MEDIUM</td>
          <td>DevOps, Container Registry</td>
        </tr>
        <tr>
          <td><strong>10. Cost &amp; Resource Governance</strong></td>
          <td>Tagging, budgets, locks, resource policies</td>
          <td style="color:#22C55E;font-weight:700;">MEDIUM</td>
          <td>Cost Management, Policy, Azure Advisor</td>
        </tr>
      </tbody>
    </table>

    <h4>Quick Reference: Azure Security Checklist</h4>
    <div class="success-box">
      <div class="success-title">✓ Azure Security Checklist</div>
      <ol>
        <li>Enable <strong>MFA</strong> for all users via Conditional Access</li>
        <li>Deploy <strong>Azure Firewall</strong> or third-party NVA at hub VNet</li>
        <li>Enable <strong>DDoS Protection Standard</strong> on public IPs</li>
        <li>Use <strong>Bastion</strong> instead of public IP for VM access</li>
        <li>Enable <strong>JIT access</strong> for all management ports</li>
        <li>Use <strong>Managed Identities</strong> instead of secrets/credentials</li>
        <li>Store all secrets in <strong>Key Vault</strong> with soft delete + purge protection</li>
        <li>Enable <strong>Azure Defender</strong> for all resource types</li>
        <li>Deploy <strong>Sentinel</strong> for centralized SIEM</li>
        <li>Use <strong>Azure Policy</strong> with Deny effects for guardrails</li>
        <li>Deploy <strong>Azure Blueprints</strong> for environment governance</li>
        <li>Enable <strong>diagnostic logging</strong> on all resources</li>
        <li>Use <strong>Private Endpoints</strong> for all PaaS services</li>
        <li>Enable <strong>Secure Transfer Required</strong> on all storage accounts</li>
        <li>Enable <strong>encryption at host</strong> for sensitive VMs</li>
        <li>Use <strong>Azure Disk Encryption</strong> for all managed disks</li>
        <li>Tag all resources consistently per governance policy</li>
      </ol>
    </div>

    <div class="callout">
      <div class="callout-icon">🎓</div>
      <div class="callout-content">
        <h4>Azure Security Veda 1 Part Complete!</h4>
        <p>You've now covered comprehensive Azure security including:</p>
        <ul>
          <li>Entra ID identity management and Conditional Access</li>
          <li>RBAC and Deny Assignments</li>
          <li>Key Vault secrets and key management</li>
          <li>Network security (NSGs, Azure Firewall, DDoS, Bastion)</li>
          <li>Storage security (encryption, SAS, private endpoints)</li>
          <li>VM security (JIT, disk encryption, hardening)</li>
          <li>Functions serverless security</li>
          <li>Azure Monitor, Log Analytics, and Sentinel SIEM</li>
          <li>Defender for Cloud unified security management</li>
          <li>Azure Policy and Blueprints governance</li>
          <li>Compliance Manager for regulatory compliance</li>
          <li>The 10 pillars of Azure security</li>
        </ul>
        <p>Ready to continue your journey? Next: GCP Security.</p>
      </div>
    </div>
  `
};