export const gcpContent = {
  v1c39: `
    <h3>GCP IAM Deep Dive</h3>
    <p>
      Google Cloud Identity and Access Management (IAM) is the <strong>foundational access control service</strong> in Google Cloud. Unlike AWS and Azure, GCP's IAM operates at three levels simultaneously — granting you fine-grained, hierarchical control over every resource.
    </p>

    <h4>GCP IAM Hierarchy</h4>
    <p>GCP resources are organized in a strict hierarchy, and IAM policies are inherited downward:</p>
    <pre><code>
Organization (root)
  └── Folder(s)
        └── Project(s)
              └── Resources (VMs, Buckets, DBs, etc.)

IAM Policy applied at Organization → inherited by ALL resources below
IAM Policy applied at Folder → inherited by sub-folders + projects
IAM Policy applied at Project → inherited by all resources in project
IAM Policy applied at Resource → applies only to that resource
</code></pre>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Policy Inheritance</div>
      <p>GCP IAM uses an <strong>additive model</strong> — policies are inherited from parent nodes and accumulate. If a user has <code>roles/editor</code> at the organization level, they have it on every resource in the organization, even if the project or resource has no explicit policy.</p>
      <p>To <strong>remove</strong> inherited permissions, you must grant a higher-level policy that <strong>explicitly denies</strong> via Organization Policy Constraints, or restructure your hierarchy.</p>
    </div>

    <h4>Types of Identities in GCP IAM</h4>
    <table>
      <thead>
        <tr><th>Identity Type</th><th>Description</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Google Accounts</strong></td><td>Individual Google/Gmail accounts</td><td>user@example.com</td></tr>
        <tr><td><strong>Google Groups</strong></td><td>Collections of Google accounts</td><td>security-team@googlegroups.com</td></tr>
        <tr><td><strong>Service Accounts</strong></td><td>Machine identities for applications</td><td>my-app@project.iam.gserviceaccount.com</td></tr>
        <tr><td><strong>Workload Identity Federation</strong></td><td>External identity federation (AWS, Azure, OIDC)</td><td>AWS role → GCP service account</td></tr>
        <tr><td><strong>Domain-Wide Delegation</strong></td><td>Service acting on behalf of users in a Google Workspace domain</td><td>Admin-delegated scopes</td></tr>
      </tbody>
    </table>

    <h4>GCP IAM Roles</h4>
    <table>
      <thead>
        <tr><th>Type</th><th>Description</th><th>Example Roles</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Primitive Roles</strong></td><td>Owner, Editor, Viewer (legacy, avoid in production)</td><td>roles/owner, roles/editor, roles/viewer</td></tr>
        <tr><td><strong>Predefined Roles</strong></td><td>Curated by Google for specific services</td><td>roles/storage.objectViewer, roles/compute.instanceAdmin</td></tr>
        <tr><td><strong>Custom Roles</strong></td><td>You define exact permissions needed</td><td>roles.custom.myReadOnlyRole</td></tr>
      </tbody>
    </table>

    <h5>Why Avoid Primitive Roles?</h5>
    <div class="warning-box">
      <div class="warning-title">⚠️ Primitive Roles Are Dangerous</div>
      <ul>
        <li><strong>Owner</strong> can IAM policy — grant permissions to anyone, even themselves as Owner on other projects</li>
        <li><strong>Editor</strong> can modify (delete, replace) most resources — too broad for most use cases</li>
        <li>Primitive roles <strong>apply to ALL services</strong> — there is no service scoping</li>
        <li><strong>Best practice:</strong> Always use Predefined or Custom roles with the minimum permissions required</li>
      </ul>
    </div>

    <h4>Service Accounts — Special Considerations</h4>
    <p>Service accounts are the #1 attack vector in GCP environments:</p>
    <ul>
      <li>GCE instances use <strong>service account scopes</strong> (legacy) or <strong>Workload Identity</strong> (recommended)</li>
      <li>Service accounts use <strong>JSON key files</strong> for authentication outside GCP — <strong>these keys are often leaked</strong></li>
      <li>Google recommends <strong>user-managed service accounts (User-Managed SA)</strong> with Workload Identity Federation instead of creating keys</li>
      <li>Service accounts should have <strong>minimal permissions</strong> and be audited regularly</li>
    </ul>

    <div class="callout">
      <div class="callout-icon">🛡️</div>
      <div class="callout-content">
        <h4>GCP IAM Best Practices</h4>
        <ul>
          <li>Never use Owner or Editor — use Predefined roles with specific scopes</li>
          <li>Enable <strong>Organization Policy Constraints</strong> to restrict IAM policy modifications</li>
          <li>Use <strong>Access Transparency</strong> to see when Google accesses your data</li>
          <li>Enable <strong>Audit Logging</strong> for all admin-read and data-read operations</li>
          <li>Review IAM policies quarterly using <strong>IAM Recommender</strong></li>
          <li>Delete unused service accounts and rotate keys regularly</li>
        </ul>
      </div>
    </div>
  `,

  v1c40: `
    <h3>GCP Resource Hierarchy</h3>
    <p>
      Understanding GCP's resource hierarchy is <strong>critical for security and billing</strong>. Unlike AWS (where accounts are flat) or Azure (which uses Management Groups), GCP uses a strict parent-child inheritance model.
    </p>

    <h4>The Four Levels</h4>
    <table>
      <thead>
        <tr><th>Level</th><th>GCP Concept</th><th>AWS Equivalent</th><th>Azure Equivalent</th><th>Can Hold IAM?</th></tr>
      </thead>
      <tbody>
        <tr><td>1 (Top)</td><td><strong>Organization</strong></td><td>AWS Organization</td><td>Entra ID Tenant</td><td>✅</td></tr>
        <tr><td>2</td><td><strong>Folder</strong></td><td>OU (Organizational Unit)</td><td>Management Group</td><td>✅</td></tr>
        <tr><td>3</td><td><strong>Project</strong></td><td>AWS Account</td><td>Subscription</td><td>✅</td></tr>
        <tr><td>4 (Bottom)</td><td><strong>Resource</strong></td><td>AWS Resource</td><td>Azure Resource</td><td>✅ (resource-level IAM)</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 The Organization Node</div>
      <p>The Organization node is the <strong>root of the hierarchy</strong> and represents your company. It's linked to your Google Workspace (formerly G Suite) domain. All projects and folders must belong to an Organization. If you haven't set one up, there's a placeholder organization that was auto-created.</p>
      <p>Key capabilities at the Organization level:</p>
      <ul>
        <li>Organization Policy Constraints (restrict regions, APIs, VM types, etc.)</li>
        <li>IAM policies that apply to <strong>everything</strong> below</li>
        <li>Shared VPC Host projects</li>
      </ul>
    </div>

    <h4>Folders: The Underused Superpower</h4>
    <p>Folders allow you to group projects and other folders into a hierarchy. They are <strong>massively underused</strong> but incredibly powerful for:</p>
    <ul>
      <li><strong>Organizational alignment:</strong> Mirror your company structure (Engineering → Backend, Frontend, Data)</li>
      <li><strong>Policy inheritance:</strong> Apply IAM and Organization Policies at the folder level</li>
      <li><strong>Access delegation:</strong> Give a team admin over their folder without giving them Organization-level access</li>
      <li><strong>Billing grouping:</strong> Group projects by cost center</li>
    </ul>

    <h5>Example Folder Hierarchy</h5>
    <pre><code>
Organization: example.com
├── Engineering
│   ├── Production (Project: prod-app)
│   ├── Staging (Project: staging-app)
│   └── Development (Project: dev-app)
├── Finance
│   ├── Production (Project: prod-billing)
│   └── Analytics (Project: analytics)
└── Shared-Services
    ├── Networking (VPC, DNS)
    └── Security (SIEM, Audit Logs)
</code></pre>

    <h4>Projects: The Fundamental Unit</h4>
    <p>A Google Cloud Project is the fundamental unit for organizing GCP resources:</p>
    <ul>
      <li>Every resource belongs to exactly <strong>one project</strong></li>
      <li>Projects provide <strong>isolation</strong> — IAM, billing, APIs are per-project</li>
      <li>Each project has a unique ID (permanent) and name (changeable)</li>
      <li>Projects are independent — enabling APIs, changing IAM on one project doesn't affect others</li>
    </ul>

    <div class="warning-box">
      <div class="warning-title">⚠️ Common Mistakes</div>
      <ul>
        <li><strong>Everything in the Default Project:</strong> Don't put production workloads in the auto-created "default" project</li>
        <li><strong>No Folders:</strong> Without folders, you can't delegate management or apply policies at scale</li>
        <li><strong>Too Many Projects:</strong> Uncontrolled project sprawl leads to orphaned resources, cost leaks, and unmanaged IAM policies</li>
        <li><strong>Not Using Org Policies:</strong> Failing to restrict allowed regions, APIs, or SKUs at the org level</li>
      </ul>
    </div>

    <h4>Organization Policy Constraints</h4>
    <p>Organization Policy Constraints are <strong>hard guardrails</strong> that restrict what can happen at the org, folder, or project level:</p>
    <table>
      <thead>
        <tr><th>Constraint</th><th>What It Restricts</th><th>Recommended Value</th></tr>
      </thead>
      <tbody>
        <tr><td>constraints/compute.vmExternalIpAccess</td><td>VMs with external IPs</td><td>Deny all, allow specific projects</td></tr>
        <tr><td>constraints/compute.skipDefaultNetworkCreation</td><td>Default VPC creation</td><td>Deny (force custom VPCs)</td></tr>
        <tr><td>constraints/iam.allowedPolicyMemberDomains</td><td>Who can be granted IAM roles</td><td>Only your domains</td></tr>
        <tr><td>constraints/storage.publicAccessPrevention</td><td>Public access to Cloud Storage</td><td>Enforced</td></tr>
        <tr><td>constraints/gcp.resourceLocations</td><td>Where resources can be deployed</td><td>Approved regions only</td></tr>
        <tr><td>constraints/compute.restrictProtocolForwardingCreationForNetworks</td><td>Protocol forwarding rules</td><td>Restrict to approved networks</td></tr>
      </tbody>
    </table>
  `,

  v1c41: `
    <h3>GCP VPC Security</h3>
    <p>
      Google Virtual Private Cloud (VPC) provides <strong>global, regional, and zonal</strong> networking for your cloud resources. GCP's VPC model differs significantly from AWS and Azure — it's a <strong>global VPC</strong> with subnets in regions, not region-bound VPCs.
    </p>

    <h4>GCP VPC Fundamentals</h4>
    <div class="callout">
      <div class="callout-icon">🌐</div>
      <div class="callout-content">
        <h4>Global vs. Regional VPC</h4>
        <p><strong>AWS/Azure:</strong> Each region has its own VPC. Peering connects them.<br>
        <strong>GCP:</strong> A single <strong>global VPC</strong> spans all regions. Subnets are regional but the VPC network itself is global. Communication between regions happens over Google's private backbone by default — <strong>no peering required</strong>.</p>
      </div>
    </div>

    <table>
      <thead>
        <tr><th>Concept</th><th>Description</th><th>Security Implication</th></tr>
      </thead>
      <tbody>
        <tr><td>VPC Network</td><td>A global network with subnets in multiple regions</td><td>Consistent security policies across regions</td></tr>
        <tr><td>Subnet</td><td>Regional IP range within a VPC</td><td>Firewall rules apply at subnet level</td></tr>
        <tr><td>Firewall Rules</td><td>Stateful, applied at the network or instance level</td><td>Allows or denies traffic based on criteria</td></tr>
        <tr><td>Routes</td><td>Define how traffic is directed</td><td>Custom routes can route traffic through appliances</td></tr>
        <tr><td>Cloud Router + BGP</td><td>Dynamic routing with on-premises</td><td>Hybrid connectivity, VPN, Interconnect</td></tr>
      </tbody>
    </table>

    <h4>Firewall Rules — Deep Dive</h4>
    <p>GCP firewall rules are <strong>stateful</strong> — if you allow inbound, the response is automatically allowed. Rules are evaluated at the VPC level (not the instance level like Security Groups in AWS).</p>

    <h5>Firewall Rule Priority</h5>
    <ol>
      <li>Rules are identified by <strong>name</strong>, not by priority number</li>
      <li>All matching rules are <strong>combined</strong> — if any rule allows, traffic is allowed (unless Hierarchical Firewall Policies override)</li>
      <li>Implicit <strong>deny all ingress</strong> and <strong>deny all egress</strong> at the bottom</li>
    </ol>

    <h5>Firewall Rule Targets</h5>
    <table>
      <thead>
        <tr><th>Target</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>All instances in network</td><td>Applies to all VMs in the VPC</td></tr>
        <tr><td>Specified target tags</td><td>Only VMs with matching network tags</td></tr>
        <tr><td>Specified service account</td><td>Only VMs running under a specific service account (recommended)</td></tr>
      </tbody>
    </table>

    <div class="warning-box">
      <div class="warning-title">⚠️ GCP Firewall Gotchas</div>
      <ul>
        <li>GCP firewall rules are <strong>not tied to a subnet</strong> — they apply to matching targets across the <strong>entire VPC</strong></li>
        <li>Using network tags? <strong>All VMs with that tag</strong> across all regions are affected</li>
        <li>Multiple matching allow rules are <strong>additive</strong> — any single allow rule permits traffic</li>
        <li>Service account targeting is <strong>strongly recommended</strong> over network tags for fine-grained control</li>
        <li>Default VPC comes with <strong>overly permissive</strong> firewall rules — review and restrict</li>
      </ul>
    </div>

    <h4>VPC Flow Logs</h4>
    <p>VPC Flow Logs record network traffic metadata for monitoring, forensics, and security analysis:</p>
    <ul>
      <li>Aggregated or sampled flow data</li>
      <li>Logging frequency: 5-second to 1-hour intervals</li>
      <li>Export to <strong>Cloud Logging</strong> or <strong>BigQuery</strong> for analysis</li>
      <li>Can be enabled at the VPC, subnet, or VM interface level</li>
      <li><strong>Enable on all production VPCs</strong> — essential for incident response</li>
    </ul>

    <h4>Cloud NAT &amp; Private Google Access</h4>
    <ul>
      <li><strong>Cloud NAT:</strong> Allows VMs with only private IPs to access the internet (for updates, API calls) without exposing them</li>
      <li><strong>Private Google Access:</strong> Allows VMs with private IPs to reach Google APIs and services without a public IP</li>
      <li>Both significantly <strong>reduce your attack surface</strong> by eliminating the need for external IPs</li>
    </ul>
  `,

  v1c42: `
    <h3>GCP Cloud Storage Security</h3>
    <p>
      Google Cloud Storage (GCS) is the object storage service for GCP. Properly configuring bucket security is <strong>essential</strong> — misconfigurations have led to major data breaches.
    </p>

    <h4>Cloud Storage Access Model</h4>
    <p>GCS uses a <strong>unified bucket-level IAM</strong> model (similar to AWS S3 but with key differences):</p>
    <ul>
      <li><strong>Uniform bucket-level access:</strong> IAM policies on the bucket control all access (recommended)</li>
      <li><strong>Fine-grained ACLs:</strong> Legacy object-level ACL lists (avoid in new deployments)</li>
      <li>Google recommends <strong>uniform bucket-level access</strong> for all new and existing buckets</li>
    </ul>

    <h4>Predefined Bucket Roles</h4>
    <table>
      <thead>
        <tr><th>Role</th><th>Permissions</th><th>Use Case</th></tr>
      </thead>
      <tbody>
        <tr><td>roles/storage.legacyBucketReader</td><td>Read bucket and ACLs</td><td>Read-only legacy access</td></tr>
        <tr><td>roles/storage.objectViewer</td><td>Read objects and metadata</td><td>Public content serving</td></tr>
        <tr><td>roles/storage.objectCreator</td><td>Create objects</td><td>Upload-only access</td></tr>
        <tr><td>roles/storage.objectAdmin</td><td>Full object management</td><td>Application access</td></tr>
        <tr><td>roles/storage.legacyBucketWriter</td><td>Write to bucket</td><td>Legacy write access</td></tr>
        <tr><td>roles/storage.admin</td><td>Full bucket management + IAM</td><td>Bucket administrators</td></tr>
      </tbody>
    </table>

    <h4>Encryption Options</h4>
    <p>All Cloud Storage data is <strong>encrypted at rest by default</strong> using Google-managed encryption keys:</p>
    <table>
      <thead>
        <tr><th>Type</th><th>Key Management</th><th>Control Level</th></tr>
      </thead>
      <tbody>
        <tr><td>Google-managed encryption</td><td>Google manages keys</td><td>Default, transparent</td></tr>
        <tr><td>Customer-managed encryption keys (CMEK)</td><td>Cloud KMS</td><td>You control key lifecycle and access</td></tr>
        <tr><td>Customer-supplied encryption keys (CSEK)</td><td>Your own key (provided per request)</td><td>Maximum control, most complex</td></tr>
      </tbody>
    </table>

    <h5>Enabling CMEK</h5>
    <pre><code>
# Set CMEK on a bucket
gsutil kms encryption -p projects/my-project \
  -k locations/global/keyRings/my-ring/cryptoKeys/my-key \
  gs://my-secure-bucket
</code></pre>

    <h4>Bucket Policy Only (Enforced Uniform Access)</h4>
    <div class="info-box">
      <div class="info-title">💡 Lock Down Your Buckets</div>
      <p><strong>Bucket Policy Only</strong> mode disables fine-grained ACLs, ensuring all access is controlled through IAM:</p>
      <pre><code>
# Enforce uniform bucket-level access
gsutil uniformbucketlevelaccess set on gs://my-bucket

# Verify setting
gsutil uniformbucketlevelaccess get gs://my-bucket
</code></pre>
      <p>Google recommends enabling <strong>Bucket Policy Only</strong> on all production buckets.</p>
    </div>

    <h4>Data Access Prevention</h4>
    <p>Google's <strong>Data Access</strong> logs capture all API calls to Cloud Storage:</p>
    <ul>
      <li>Enabled by default for audit-enabled buckets</li>
      <li>Records read and write operations</li>
      <li>Logs include: caller identity, bucket, object, operation type</li>
      <li>Exportable to BigQuery for long-term analysis</li>
    </ul>

    <h4>Public Access Prevention</h4>
    <div class="warning-box">
      <div class="warning-title">⚠️ Preventing Public Access</div>
      <p>To block all public access to your Cloud Storage buckets:</p>
      <pre><code>
# Organization Policy to prevent public access
# constraints/storage.publicAccessPrevention
# Set to "enforced" at the Organization level

gcloud organizations policy set-enforce \
  storage.publicAccessPrevention=true \
  --organization=ORGANIZATION_ID
</code></pre>
      <p>This is the GCP equivalent of S3 Block Public Access — should be enabled <strong>organization-wide</strong>.</p>
    </div>
  `,

  v1c43: `
    <h3>GCP Compute Engine Security</h3>
    <p>
      Google Compute Engine (GCE) provides virtual machines that you fully control. As with AWS EC2 and Azure VMs, the <strong>security responsibility is yours</strong> — you manage the guest OS, applications, and configurations.
    </p>

    <h4>Compute Engine Security Model</h4>
    <table>
      <thead>
        <tr><th>Layer</th><th>Security Controls</th></tr>
      </thead>
      <tbody>
        <tr><td>Network</td><td>VPC firewall rules, network tags, service accounts</td></tr>
        <tr><td>Instance</td><td>OS-level firewall, SSH key management, auto-updates</td></tr>
        <tr><td>Application</td><td>Application hardening, vulnerability scanning</td></tr>
        <tr><td>Data</td><td>Persistent disk encryption, customer-managed keys</td></tr>
        <tr><td>Identity</td><td>Service accounts with scoped permissions</td></tr>
      </tbody>
    </table>

    <h4>Instance Metadata Security</h4>
    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Protecting the Metadata Server</div>
      <p>Every GCE instance has access to the <strong>metadata server</strong> at <code>169.254.169.254</code>, which provides:</p>
      <ul>
        <li>Service account tokens (equivalent to AWS IMDS)</li>
        <li>Project and instance metadata</li>
        <li>Custom metadata (may contain secrets!)</li>
      </ul>
      <p><strong>Protection strategies:</strong></p>
      <ol>
        <li>Use <strong>VPC-SC (VPC Service Controls)</strong> to prevent data exfiltration</li>
        <li>Block metadata access at the <strong>OS firewall level</strong> for sensitive instances</li>
        <li>Use <strong>Workload Identity</strong> instead of service account keys</li>
        <li>Never store secrets in <strong>custom metadata</strong> — use Secret Manager instead</li>
        <li>Restrict service account scopes to <strong>read-only</strong> when possible</li>
      </ol>
    </div>

    <h5>Service Account Scopes vs. Service Account IAM</h5>
    <table>
      <thead>
        <tr><th>Approach</th><th>Old Model</th><th>New Model</th></tr>
      </thead>
      <tbody>
        <tr><td>Authorization</td><td>Instance metadata scopes</td><td>Service account IAM roles</td></tr>
        <tr><td>Granularity</td><td>Coarse (read-only, read-write, full)</td><td><strong>Fine-grained (per-service)</strong></td></tr>
        <tr><td>Default Setting</td><td>Allow full access to all Cloud APIs</td><td>Allow no access to Cloud APIs (recommended)</td></tr>
        <tr><td>Security</td><td>Less secure</td><td><strong>More secure</strong></td></tr>
      </tbody>
    </table>

    <h4>Shielded VM</h4>
    <div class="info-box">
      <div class="info-title">🛡️ Shielded VM — Hardware-Level Security</div>
      <p>Shielded VMs use hardware security features (TPM 2.0, Secure Boot) to ensure VM integrity:</p>
      <ul>
        <li><strong>Secure Boot:</strong> Verifies bootloader and kernel integrity at startup</li>
        <li><strong>vTPM (Virtual Trusted Platform Module):</strong> Enables measured boot and integrity monitoring</li>
        <tr><td>Integrity Monitoring:</td><td>Detects unauthorized changes to boot sequence</td></tr>
        <li><strong>UEFI-compatible:</strong> Modern firmware</li>
      </ul>
      <p><strong>Recommended:</strong> Enable Shielded VM on all production instances. The extra cost is minimal.</p>
    </div>

    <h4>Compute Engine Hardening</h4>
    <ol>
      <li>Use <strong>Shielded VMs</strong> for all production workloads</li>
      <li>Remove <strong>external IPs</strong> — use Cloud NAT for outbound and IAP for inbound</li>
      <li>Use <strong>Workload Identity Federation</strong> instead of service account keys</li>
      <li>Set service account scopes to <strong>only what's needed</strong> (or use the default "no scopes")</li>
      <li>Enable <strong>OS Login</strong> for SSH key management via IAM</li>
      <li>Configure <strong>automatic OS updates</strong> (enable automatic package updates)</li>
      <li>Use <strong>Custom Images</strong> pre-hardened with CIS benchmarks</li>
      <li>Enable <strong>serial port logging</strong> for post-mortem debugging</li>
      <li>Restrict <strong>guest attributes API access</strong></li>
      <li>Use <strong>Confidential VMs</strong> for highly sensitive workloads (encrypted memory)</li>
    </ol>

    <h5>Identity-Aware Proxy (IAP) for SSH</h5>
    <div class="info-box">
      <div class="info-title">💡 IAP for TCP Forwarding — Replace SSH Keys</div>
      <p><strong>Identity-Aware Proxy (IAP)</strong> provides secure SSH access without public IPs or SSH keys:</p>
      <ul>
        <li>All access goes through Google's infrastructure</li>
        <li>Authenticated via Entra ID/Google Accounts with MFA</li>
        <li>Audit-logged in Cloud Audit Logs</li>
        <li>Access can be granted per-instance via IAM</li>
      </ul>
      <pre><code>
# Connect via IAP
gcloud beta compute ssh instance-name \
  --zone=us-central1-a \
  --tunnel-through-iap
</code></pre>
    </div>
  `,

  v1c44: `
    <h3>GCP Cloud Functions Security</h3>
    <p>
      Google Cloud Functions is the serverless compute platform in GCP. Like AWS Lambda, it abstracts infrastructure management but introduces unique security patterns.
    </p>

    <h4>Cloud Functions Identity</h4>
    <p>Each Cloud Function runs with a <strong>service account</strong> identity:</p>
    <ul>
      <li>Default: the Compute Engine default service account</li>
      <li>Recommended: <strong>dedicated service account</strong> with minimum permissions</li>
      <li>Can also use <strong>Workload Identity</strong> to run as a Kubernetes service account</li>
    </ul>

    <h4>HTTP vs. Event-Driven Functions</h4>
    <p>Security considerations differ based on trigger type:</p>
    <table>
      <thead>
        <tr><th>Trigger</th><th>Security Model</th><th>Best For</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>HTTP Trigger</strong></td><td>Publicly accessible URL (unless restricted)</td><td>APIs, webhooks</td></tr>
        <tr><td><strong>Cloud Events (Pub/Sub, Storage, Firestore)</strong></td><td>Only triggered by the specified event source</td><td>Background processing, event-driven architecture</td></tr>
        <tr><td><strong>Cloud Scheduler / Workflows</strong></td><td>Internal trigger via service account</td><td>Cron jobs, scheduled tasks</td></tr>
      </tbody>
    </table>

    <h5>Securing HTTP Functions</h5>
    <ol>
      <li><strong>Authentication:</strong> Require authentication for all production functions</li>
      <li><strong>IAM invoker role:</strong> Grant <code>roles/cloudfunctions.invoker</code> only to specific service accounts</li>
      <li><strong>VPC Connector:</strong> Use for functions that need to access private resources</li>
      <li><strong>Ingress settings:</strong> Set to "Allow internal traffic only" or "Allow internal and Cloud Load Balancing"</li>
      <li><strong>CORS:</strong> Configure CORS headers to restrict browser-based access</li>
    </ol>

    <div class="warning-box">
      <div class="warning-title">⚠️ Secret Handling in Cloud Functions</div>
      <p>Never hardcode secrets in function code or environment variables visible in the console. Instead:</p>
      <ol>
        <li>Use <strong>Secret Manager</strong> to store secrets</li>
        <li>Grant the function's service account <code>roles/secretmanager.secretAccessor</code></li>
        <li>Fetch secrets at function initialization (cached for warm invocations)</li>
      </ol>
    </div>

    <h4>Cloud Functions Security Checklist</h4>
    <ul>
      <li>Enable <strong>VPC Service Controls</strong> for sensitive projects</li>
      <li>Set <strong>maximum instances</strong> to prevent runaway scaling and costs</li>
      <li>Enable <strong>Cloud Audit Logs</strong> for all function invocations</li>
      <li>Use <strong>.gcloudignore</strong> to prevent sensitive files from being deployed</li>
      <li>Implement <strong>input validation</strong> in function code</li>
      <li>Keep <strong>dependencies updated</strong> and scan for vulnerabilities</li>
    </ul>
  `,

  v1c45: `
    <h3>GCP Cloud Audit Logs</h3>
    <p>
      Cloud Audit Logs is GCP's audit trail service. It records <strong>who did what, where, and when</strong> across your Google Cloud resources. Understanding audit logs is essential for security monitoring, compliance, and incident response.
    </p>

    <h4>Types of Audit Logs</h4>
    <table>
      <thead>
        <tr><th>Type</th><th>Description</th><th>Enabled By Default?</th><th>Cost</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Admin Activity</strong></td><td>Modifications to resource configuration (create, update, delete)</td><td>✅ Yes</td><td>Free</td></tr>
        <tr><td><strong>System Event</strong></td><td>Automated Google system events (e.g., live migration)</td><td>✅ Yes</td><td>Free</td></tr>
        <tr><td><strong>Data Access</strong></td><td>Reading resource metadata or user-provided data</td><td>❌ No (BigQuery: enabled by default)</td><td>Charged</td></tr>
        <tr><td><strong>Policy Denied</strong></td><td>Requests denied by VPC-SC or IAM deny policies</td><td>❌ No</td><td>Charged</td></tr>
      </tbody>
    </table>

    <div class="key-box">
      <div class="key-title">🔑 Best Practice: Enable Data Access Audit Logs</div>
      <p>While Data Access audit logs incur additional costs, they are <strong>essential for security investigations</strong>. Without them, you can see <em>who changed a policy</em> but not <em>who accessed sensitive data</em>. Enable them for all production resources.</p>
    </div>

    <h4>Log Sinks for Retention</h4>
    <p>By default, audit logs are retained for 30 days. For compliance and forensic purposes, export to long-term storage:</p>
    <ul>
      <li><strong>Cloud Storage:</strong> Cheap, durable, unlimited retention (set lifecycle policies)</li>
      <li><strong>BigQuery:</strong> Analytics-ready, SQL queries on log data, cost-effective for large volumes</li>
      <li><strong>Pub/Sub:</strong>Real-time streaming to SIEM/SOAR tools</li>
      <li><strong>Splunk/Elastic:</strong>Via Pub/Sub subscription for external SIEM</li>
    </ul>

    <h5>Creating a Log Sink</h5>
    <pre><code>
# Export all Data Access logs to BigQuery
gcloud logging sinks create my-audit-sink \
  bigquery.googleapis.com/projects/my-project/datasets/audit_logs \
  --log-filter='protoPayload.serviceName="storage.googleapis.com" AND protoPayload.methodName="storage.objects.get"' \
  --use-partitioned-tables
</code></pre>

    <h4>Detecting Threats with Audit Logs</h4>
    <p>Key indicators to monitor in audit logs:</p>
    <table>
      <thead>
        <tr><th>Threat Indicator</th><th>Log Event</th><th>Response</th></tr>
      </thead>
      <tbody>
        <tr><td>Unusual API calls</td><td>New or rare methodName values</td><td>Investigate source IP and identity</td></tr>
        <tr><td>Privilege escalation</td><td>SetIamPolicy with added roles</td><td>Alert and revert immediately</td></tr>
        <tr><td>Exfiltration attempts</td><td>Bucket policy modifications + data downloads</td><td>Block service account, investigate</td></tr>
        <tr><td>Unauthorized access</td><td>403 errors with valid authentication</td><td>Check IAM policies for unauthorized attempts</td></tr>
        <tr><td>Resource deletion</td><td>delete operations outside change windows</td><td>Restore from backup, investigate</td></tr>
      </tbody>
    </table>

    <div class="callout">
      <div class="callout-icon">🔍</div>
      <div class="callout-content">
        <h4>Log Query Example: Detect External Access</h4>
        <pre><code>
# BigQuery SQL to find data access from unusual locations
SELECT
  timestamp,
  protoPayload.authenticationInfo.principalEmail,
  protoPayload.requestMetadata.callerIp,
  protoPayload.methodName,
  protoPayload.serviceName
FROM "project.audit_logs.cloudaudit_googleapis_com_data_access"
WHERE
  timestamp > TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 7 DAY)
  AND protoPayload.requestMetadata.callerIp NOT LIKE "35.%"  -- Filter out common GCP IPs
ORDER BY timestamp DESC
</code></pre>
      </div>
    </div>
  `,

  v1c46: `
    <h3>GCP Security Command Center</h3>
    <p>
      Security Command Center (SCC) is GCP's <strong>centralized security and risk management platform</strong>. It provides asset inventory, vulnerability scanning, threat detection, and security analytics in one place.
    </p>

    <h4>SCC Tiers</h4>
    <table>
      <thead>
        <tr><th>Tier</th><th>Features</th><th>Cost</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Standard Tier</strong></td>
          <td>Security health dashboard, asset inventory, basic security recommendations, findings from integrated services</td>
          <td>Free</td>
        </tr>
        <tr>
          <td><strong>Premium Tier</strong></td>
          <td>Event Threat Detection (ETD), Web Security Scanner, Container scanning, IDS for on-prem</td>
          <td>Per resource/month</td>
        </tr>
        <tr>
          <td><strong>MSSPs</strong></td>
          <td>Multi-tenant management for managed security service providers</td>
          <td>Custom pricing</td>
        </tr>
        <tbody>
      </tbody>
    </table>

    <h4>Key SCC Capabilities</h4>
    <ol>
      <li><strong>Asset Inventory:</strong> Complete inventory of all GCP resources — VMs, storage, databases, IAM policies. Searchable and filterable.</li>
      <li><strong>Security Health Dashboard:</strong> Aggregated view of security findings from all integrated services.</li>
      <li><strong>Findings Management:</strong> Track, triage, and remediate security findings with severity scoring.</li>
      <li><strong>Mute Rules:</strong> Suppress false positive findings automatically.</li>
      <li><strong>Notification Channels:</strong> Send findings to Pub/Sub, Slack, PagerDuty, etc.</li>
      <li><strong>Source Properties:</strong> Track which security scanners reported each finding.</li>
    </ol>

    <h4>Event Threat Detection (Premium)</h4>
    <p>ETD uses Google's threat intelligence to detect malicious activity in your environment:</p>
    <ul>
      <li>Malware detection in GCE and GKE workloads</li>
      <li>Cryptominer detection</li>
      <li>Outgoing DoS attack detection</li>
      <li>Reverse shell detection</li>
      <li>Suricata-based IDS for on-premise network traffic</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 SCC + Chronicle SIEM Integration</div>
      <p>For enterprise customers, SCC integrates with <strong>Google Chronicle SIEM</strong> (now part of Google SecOps) for:</p>
      <ul>
        <li>Long-term log retention and analysis</li>
        <li>Advanced threat hunting with YARA-L rules</li>
        <li>Cross-product correlation (Workspace + Cloud + endpoints)</li>
        <li>Automated investigation and response with SOAR</li>
      </ul>
    </div>

    <h4>SCC Best Practices</h4>
    <ol>
      <li>Enable SCC <strong>organization-wide</strong> for maximum visibility</li>
      <li>Enable <strong>Premium tier</strong> for Event Threat Detection</li>
      <li>Set up <strong>notification channels</strong> for real-time alerts</li>
      <li>Review <strong>findings weekly</strong> and assign remediation owners</li>
      <li>Use <strong>mute rules</strong> carefully — document why each rule exists</li>
      <li>Leverage the <strong>asset inventory</strong> for CMDB and shadow IT discovery</li>
    </ol>
  `,

  v1c47: `
    <h3>GCP VPC Service Controls</h3>
    <p>
      VPC Service Controls create <strong>security perimeters</strong> around GCP services to mitigate data exfiltration risks. They are a critical component of <strong>Zero Trust architecture</strong> in GCP.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Security Perimeters</div>
      <p>A security perimeter is a <strong>boundary</strong> around Google Cloud services. Resources and data within the perimeter cannot be accessed by <strong>unauthorized</strong> principals outside the perimeter, even if they have correct IAM permissions. This prevents data exfiltration even by compromised credentials.</p>
    </div>

    <h4>What VPC-SC Protects Against</h4>
    <ul>
      <li><strong>Data exfiltration via compromised credentials:</strong> Even with valid IAM, data cannot leave the perimeter</li>
      <li><strong>Code download attacks:</strong> Malicious actors trying to download sensitive data to external endpoints</li>
      <li><strong>Copy attacks:</strong> Copying data to projects outside the perimeter</li>
      <li><strong>Data sharing outside the organization:</strong> Enforces data residency and access policies</li>
    </ul>

    <h4>Supported Services</h4>
    <p>As of 2024, VPC-SC protects over 25 services including:</p>
    <table>
      <thead>
        <tr><th>Service Category</th><th>Services</th></tr>
      </thead>
      <tbody>
        <tr><td>Storage</td><td>Cloud Storage, BigQuery</td></tr>
        <tr><td>Compute</td><td>Compute Engine, GKE</td></tr>
        <tr><td>AI/ML</td><td>Vertex AI, AutoML</td></tr>
        <tr><td>Serverless</td><td>Cloud Functions, Cloud Run, App Engine</td></tr>
        <tr><td>Databases</td><td>Cloud SQL, Spanner, Firestore</td></tr>
        <tr><td>Analytics</td><td>Dataflow, Dataproc, BigQuery</td></tr>
        <tr><td>Networking</td><td>Cloud DNS, NAT</td></tr>
      </tbody>
    </table>

    <h4>VPC-SC Access Levels</h4>
    <p>Access levels define <strong>who</strong> can access resources inside the perimeter:</p>
    <table>
      <thead>
        <tr><th>Access Level Type</th><th>Description</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td>IP-based</td><td>Specify allowed IP ranges</td><td>Corporate VPN IP ranges</td></tr>
        <tr><td>Device-based</td><td>Require managed devices (via BeyondCorp)</td><td>Corporate laptops with MDM</td></tr>
        <tr><td>Identity-based</td><td>Require specific Google identities</td><td>Members of security group</td></tr>
      </tbody>
    </table>

    <h5>Access Level Example (YAML)</h5>
    <pre><code>
name: accessPolicies/123/accessLevels/corp_access
title: Corporate Access
basic:
  conditions:
    - ipSubnetworks:
        - "35.235.0.0/16"  # Corporate VPN
    - requiredAccessLevels:
        - accessPolicies/123/accessLevels/high_trust
    - members:
        - "group:security@example.com"
</code></pre>

    <div class="callout">
      <div class="callout-icon">🚨</div>
      <div class="callout-content">
        <h4>VPC-SC Incident Response</h4>
        <p>If VPC-SC blocks a legitimate request, the error is returned immediately:</p>
        <pre><code>
ERROR: PERMISSION_DENIED:
Request is prohibited by organization's policy.
The request was blocked by VPC Service Controls
</code></pre>
        <p><strong>Do NOT remove VPC-SC</strong> to resolve the error. Instead, investigate the blocked request, verify it's authorized, and adjust access levels if needed.</p>
      </div>
    </div>

    <h4>Bridging and Egress Controls</h4>
    <p><strong>Bridging</strong> allows authorized API calls to access resources across perimeters. <strong>Egress policies</strong> control data leaving the perimeter:</p>
    <ul>
      <li><strong>Restricted Services:</strong> Define which services can receive data from inside the perimeter</li>
      <li><strong>Access Levels:</strong> Combine with access levels for granular control</li>
      <li><strong>Audit logging:</strong> All perimeter violations are logged for investigation</li>
    </ul>
  `,

  v1c48: `
    <h3>GCP Binary Authorization</h3>
    <p>
      Binary Authorization (Binauthz) is a <strong>deploy-time security policy</strong> that ensures only <strong>signed and verified container images</strong> are deployed to GKE, Cloud Run, and other GCP services.
    </p>

    <h4>Why Binary Authorization?</h4>
    <p>Container supply chain attacks are increasing. Without image verification, attackers can:</p>
    <ul>
      <li>Push malicious images to your container registry</li>
      <li>Tamper with images in transit</li>
      <li>Deploy known-vulnerable images</li>
      <li>Use unauthorized base images</li>
    </ul>

    <h4>Binauthz Architecture</h4>
    <pre><code>
1. Developer builds container image
2. Image signed by Sigstore/Cosign or KMS
3. Image pushed to Artifact Registry
4. ATTESTOR verifies signature + policy
5. ✅ Image deployed (or ❌ denied)
</code></pre>

    <h4>Attestors</h4>
    <p>Attestors verify that images meet your security requirements:</p>
    <table>
      <thead>
        <tr><th>Attestor Type</th><th>Function</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>KMS Key Attestor</strong></td><td>Verifies images signed with a specific KMS key</td></tr>
        <tr><td><strong>P.Kix Attestor</strong></td><td>Verifies PGP-signature-based attestations</td></tr>
        <tr><td><strong>IAP Attestor</strong></td><td>Uses Google's Identity-Aware Proxy for verification</td></tr>
        <tr><td><strong>Continuous Validation</strong></td><td>Continuously checks deployed images against policy</td></tr>
      </tbody>
    </table>

    <h4>Binauthz Policy Example</h4>
    <pre><code>
# Require all GKE images to be signed by trusted key
gcloud container binauthz policy create \
  --project=my-project \
  --attestor-project=my-project \
  --attestor=kms_key \
  --keyversion-project=my-project \
  --keyversion-location=global \
  --keyversion-keyring=my-keyring \
  --keyversion=signing-key-v1
</code></pre>

    <h4>Continuous Validation Mode</h4>
    <div class="info-box">
      <div class="info-title">💡 Continuous Validation</div>
      <p>Beyond deploy-time checks, Binary Authorization can <strong>continuously validate</strong> running images:</p>
      <ul>
        <li>Detects if an image is later found to be vulnerable (CVE disclosed after deployment)</li>
        <li>Alerts if an image was rebuilt without going through the signing process</li>
        <li>Enforces freshness policies (e.g., images must be rebuilt within 30 days)</li>
      </ul>
    </div>

    <h4>Integration with Supply Chain Security</h4>
    <p>Binauthz works with other GCP security services:</p>
    <ul>
      <li><strong>Artifact Analysis:</strong> Automatically scan images on push</li>
      <li><strong>SLSA Framework:</strong> Provenance attestations for supply chain integrity</li>
      <li><strong>Artifact Registry:</strong> Central repository for container images</li>
      <li><strong>Cloud Build:</strong> Automated build pipelines with signing</li>
    </ul>
  `,

  v1c49: `
    <h3>GCP Cloud KMS</h3>
    <p>
      Google Cloud Key Management Service (Cloud KMS) lets you manage <strong>cryptographic keys</strong> for your cloud services. Like AWS KMS, it uses Hardware Security Modules (HSMs) to protect key material, but with GCP-specific integration patterns.
    </p>

    <h4>Key Ring and Key Hierarchy</h4>
    <p>GCP KMS organizes keys in a three-level hierarchy:</p>
    <pre><code>
Location (e.g., global, us-east1)
  └── Key Ring
        └── Crypto Key
              ├── Key Version 1 (primary)
              ├── Key Version 2 (active)
              └── Key Version N (destroyed/scheduled for deletion)
</code></pre>

    <table>
      <thead>
        <tr><th>Resource</th><th>Description</th><th>Cost</th></tr>
      </thead>
      <tbody>
        <tr><td>Key Ring</td><td>Organizational grouping for keys</td><td>Free</td></tr>
        <tr><td>Crypto Key</td><td>The key itself (contains versions)</td><td>$0.03/key/month</td></tr>
        <tr><td>Key Version</td><td>Specific cryptographic material</td><td>$0.03/version/month</td></tr>
        <tr><td>Asymmetric Keys</td><td>RSA, EC key pairs for signing/encryption</td><td>Higher cost</td></tr>
      </tbody>
    </table>

    <h4>Key Types</h4>
    <table>
      <thead>
        <tr><th>Key Purpose</th><th>Algorithm</th><th>Use Case</th></tr>
      </thead>
      <tbody>
        <tr><td>Symmetric Encryption</td><td>AES-256-GCM</td><td>Data encryption (Cloud Storage, BigQuery, GCE disks)</td></tr>
        <tr><td>Asymmetric Sign</td><td>RSA-2048/4096, ECDSA P-256/384</td><td>Digital signatures, JWT signing</td></tr>
        <tr><td>Asymmetric Decrypt</td><td>RSA-2048/4096</td><td>Envelope encryption with small public key</td></tr>
        <tr><td>MAC</td><td>HMAC (SHA-256/512)</td><td>Message authentication, integrity verification</td></tr>
      </tbody>
    </table>

    <h4>Key Rotation</h4>
    <p>Cloud KMS supports <strong>automatic key rotation</strong>:</p>
    <ul>
      <li>Configure rotation period (e.g., every 90 days, 1 year)</li>
      <li>New key version automatically created at rotation time</li>
      <li>Old versions retained for decryption</li>
      <li>Next rotation time automatically recalculated</li>
    </ul>

    <div class="warning-box">
      <div class="warning-title">⚠️ Key Deletion</div>
      <p>Scheduling a key for deletion starts a <strong>24-hour to 100-day waiting period</strong>. After deletion, all data encrypted with that key version becomes <strong>permanently unrecoverable</strong>. <strong>Always test decryption before deleting.</strong></p>
    </div>

    <h4>Cloud KMS IAM Roles</h4>
    <table>
      <thead>
        <tr><th>Role</th><th>Permissions</th><th>Use Case</th></tr>
      </thead>
      <tbody>
        <tr><td>roles/cloudkms.cryptoKeyEncrypterDecrypter</td><td>Encrypt/decrypt with specific keys</td><td>Application workloads</td></tr>
        <tr><td>roles/cloudkms.cryptoKeyEncrypter</td><td>Encrypt only</td><td>Write-only encryption services</td></tr>
        <tr><td>roles/cloudkms.cryptoKeyDecrypter</td><td>Decrypt only</td><td>Batch decryption jobs</td></tr>
        <tr><td>roles/cloudkms.keyRingEncrypterDecrypter</td><td>Encrypt/decrypt on any key in ring</td><td>Broad encryption access</td></tr>
        <tr><td>roles/cloudkms.admin</td><td>Full key management</td><td>Key administrators</td></tr>
      </tbody>
    </table>

    <h4>Envelope Encryption with Cloud KMS</h4>
    <div class="callout">
      <div class="callout-icon">🔄</div>
      <div class="callout-content">
        <h4>GCP Envelope Encryption Flow</h4>
        <ol>
          <li>Generate a Data Encryption Key (DEK) locally</li>
          <li>Encrypt your data with the DEK</li>
          <li>Call Cloud KMS to encrypt the DEK with your Key Encryption Key (KEK)</li>
          <li>Store the encrypted DEK alongside the encrypted data</li>
          <li>To decrypt: send encrypted DEK to KMS → get plaintext DEK → decrypt data</li>
        </ol>
        <p>This pattern is used by Cloud Storage, GCE persistent disks, and BigQuery transparently.</p>
      </div>
    </div>
  `,

  v1c50: `
    <h3>GCP Secret Manager</h3>
    <p>
      Secret Manager is GCP's <strong>centralized secrets management</strong> service. It provides secure storage, access control, and version management for API keys, passwords, certificates, and other sensitive data.
    </p>

    <h4>Why Not Environment Variables?</h4>
    <div class="warning-box">
      <div class="warning-title">⚠️ The Problem with Environment Variables</div>
      <ul>
        <li>Visible in process listings (<code>/proc/self/environ</code>)</li>
        <li>Logged in error messages and stack traces</li>
        <li>Hard to rotate — requires redeployment</li>
        <li>No access audit trail for who read the secret</li>
        <li>Often committed to source code (accidentally)</li>
      </ul>
      <p><strong>Secret Manager solves all of these</strong> by providing encrypted, versioned, access-controlled secret storage with full audit logging.</p>
    </div>

    <h4>Key Features</h4>
    <table>
      <thead>
        <tr><th>Feature</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>Versioning</td><td>All secret versions are stored and accessible. You can disable or destroy old versions.</td></tr>
        <tr><td>Replication</td><td>Automatic replication across GCP regions for availability. Customer-managed replication for compliance (e.g., single region).</td></tr>
        <tr><td>Access Control</td><td>Fine-grained IAM: secretAccessor, secretManager, admin roles</td></tr>
        <tr><td>Audit Logging</ttd>| All secret accesses logged in Cloud Audit Logs</td></tr>
        <tr><td>Rotation</td><td>Configure automatic rotation with Cloud Scheduler + Cloud Functions</td></tr>
        <tr><td>Integration</td><td>Native integration with GKE (Secrets Store CSI Driver), Cloud Run, Cloud Functions, App Engine</td></tr>
      </tbody>
    </table>

    <h4>Secret Manager IAM Roles</h4>
    <table>
      <thead>
        <tr><th>Role</th><th>Permissions</th><th>Use Case</th></tr>
      </thead>
      <tbody>
        <tr><td>roles/secretmanager.secretAccessor</td><td>Read secret versions</td><td>Applications that need to use secrets</td></tr>
        <tr><td>roles/secretmanager.secretVersionAdder</td><td>Add new versions</td><td>CI/CD pipelines</td></tr>
        <tr><td>roles/secretmanager.secretManager</td><td>Full management</td><td>Security administrators</td></tr>
      </tbody>
    </table>

    <h5>Application Integration Example (Python)</h5>
    <pre><code>
from google.cloud import secretmanager

client = secretmanager.SecretManagerServiceClient()
name = f"projects/my-project/secrets/db-password/versions/latest"
response = client.access_secret_version(request={"name": name})
db_password = response.payload.data.decode("UTF-8")
</code></pre>

    <h5>Rotation Automation</h5>
    <ol>
      <li>Create a Cloud Function that generates a new secret</li>
      <li>Schedule it with Cloud Scheduler (e.g., every 30 days)</li>
      <li>Function adds new version to Secret Manager</li>
      <li>Optionally, triggers dependent services to reload secrets</li>
      <li>Disable or destroy old versions after verification</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 Secret Manager vs. KMS vs. Environment Variables</div>
      <table>
        <thead>
          <tr><th>Criteria</th><th>Secret Manager</th><th>KMS</th><th>Env Variables</th></tr>
        </thead>
        <tbody>
          <tr><td>Encryption</td><td>✅ AES-256</td><td>✅ AES-256</td><td>❌ Plain text in process</td></tr>
          <tr><td>Versioning</td><td>✅ Built-in</td><td>✅ Key versions</td><td>❌ None</td></tr>
          <tr><td>Access Control</td><td>✅ IAM</td><td>✅ IAM + Key Policy</td><td>❌ OS-level only</td></tr>
          <tr><td>Audit Logging</td><td>✅ Cloud Audit Logs</td><td>✅ Cloud Audit Logs</td><td>❌ No</td></tr>
          <tr><td>Auto-Rotation</td><td>✅ Via scheduler</td><td>✅ Automatic</td><td>❌ Manual</td></tr>
          <tr><td>Cost</td><td>$0.40/secret/month</td><td>$0.03/key/month</td><td>Free</td></tr>
        </tbody>
      </table>
    </div>
  `,

  v1c51: `
    <h3>GCP Security Scanner</h3>
    <p>
      Web Security Scanner is a <strong>managed vulnerability scanning service</strong> that crawls your web applications running on GCP (App Engine, Compute Engine, GKE) to identify security vulnerabilities like XSS, SQL injection, and more.
    </p>

    <h4>How It Works</h4>
    <ol>
      <li>You provide a <strong>starting URL</strong> (e.g., your App Engine app's login page)</li>
      <li>The scanner <strong>crawls</strong> your application, discovering pages and forms</li>
      <li>It <strong>executes attacks</strong> (fuzzing, injection attempts, XSS payloads) against discovered endpoints</li>
      <li><strong>Findings</strong> are reported with severity levels and remediation guidance</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 Scanner Limitations</div>
      <p>While useful, Web Security Scanner is not a replacement for comprehensive penetration testing:</p>
      <ul>
        <li>Only scans GCP-hosted applications</li>
        <li>Crawl-based — cannot test authenticated pages deeply without configuration</li>
        <li>Does not test business logic vulnerabilities</li>
        <li>May produce false positives that need manual investigation</li>
        <li>Limited to common web vulnerabilities</li>
      </ul>
      <p>For comprehensive testing, combine with <strong>Burp Suite</strong>, <strong>OWASP ZAP</strong>, or professional pentests.</p>
    </div>

    <h4>Scanner Integration with SCC</h4>
    <p>Scanner findings are automatically integrated with <strong>Security Command Center</strong>:</p>
    <ul>
      <li>All findings appear in SCC dashboard</li>
      <li>Can be filtered by severity, resource, and scan configuration</li>
      <li>Integrates with Pub/Sub for real-time notifications</li>
    </ul>

    <h5>Recommended Scan Frequency</h5>
    <table>
      <thead>
        <tr><th>Application Type</th><th>Recommended Frequency</th></tr>
      </thead>
      <tbody>
        <tr><td>Public-facing production</td><td>Weekly or after each deployment</td></tr>
        <tr><td>Internal applications</td><td>Monthly</td></tr>
        <tr><td>Pre-production/staging</td><td>After major changes</td></tr>
      </tbody>
    </table>
  `,

  v1c52: `
    <h3>GCP Artifact Registry Security</h3>
    <p>
      Artifact Registry is GCP's <strong>container image and package management</strong> service. It stores Docker images, Helm charts, npm packages, Python packages, and more. Securing your artifact registry is critical for <strong>supply chain security</strong>.
    </p>

    <h4>Artifact Registry Security Controls</h4>
    <table>
      <thead>
        <tr><th>Control</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>VPC-SC Perimeter</td><td>Restrict registry access to authorized networks only</td></tr>
        <tr><td>IAM Permissions</td><td>Granular roles: roles/artifactregistry.reader, roles/artifactregistry.writer, roles/artifactregistry.admin</td></tr>
        <tr><td>Image Vulnerability Scanning</td><td>Automatic scanning on push (uses Container Analysis + On-Demand Scanning API)</td></tr>
        <tr><td>Image Signing</td><td>Verify image integrity and provenance using Binary Authorization attestations</td></tr>
        <tr><td>Retention Policies</td><td>Automatically delete old or untagged images to reduce attack surface</li>
        <tr><td>Encryption</td><td>Google-managed or customer-managed encryption keys (CMEK)</td></tr>
        <tr><td>Audit Logging</td><td>All push/pull operations logged in Cloud Audit Logs</td></tr>
      </tbody>
    </table>

    <h4>Container Image Vulnerability Scanning</h4>
    <p>GCP provides two scanning mechanisms:</p>
    <table>
      <thead>
        <tr><th>Type</th><th>Trigger</th><th>Coverage</th></tr>
      </thead>
      <tbody>
        <tr><td>Automatic On-Push</td><td>Triggered when image is pushed to Artifact Registry</td><td>CVE vulnerabilities in OS packages</td></tr>
        <tr><td>On-Demand Scanning API</strong></td><td>Programmatic or CI/CD integration</td><td>CVE + OS packages + language-specific packages</td></tr>
      </tbody>
    </table>

    <div class="warning-box">
      <div class="warning-title">⚠️ Container Supply Chain Risks</div>
      <p>According to the Sysdig 2024 Cloud Native Security Report: <strong>73% of images scanned had high or critical vulnerabilities</strong>. Common risks:</p>
      <ul>
        <li>Using <strong>latest</strong> tag (unpredictable builds)</li>
        <li>Images with <strong>embedded secrets</strong> or hardcoded credentials</li>
        <li><strong>Outdated base images</strong> running unsupported OS versions</li>
        <li>Images from <strong>unverified sources</strong> (not using Binary Authorization)</li>
      </ul>
    </div>

    <h5>Best Practices</h5>
    <ol>
      <li>Enable <strong>automatic vulnerability scanning</strong> on all repositories</li>
      <li>Use <strong>Binary Authorization</strong> to enforce only scanned, signed images deploy</li>
      <li>Configure <strong>retention policies</strong> to remove old and untagged images</li>
      <li>Use <strong>immutable tags</strong> — never overwrite :latest or :v1 tags</li>
      <li>Pin images to <strong>SHA256 digests</strong> instead of tags for maximum integrity</li>
      <li>Scan base images with tools like <strong>Trivy</strong>, <strong>Grype</strong>, or <strong>Snyk</strong></li>
      <li>Implement a <strong>Software Supply Chain Security</strong> policy (SLSA framework)</li>
    </ol>
  `,

  v1c53: `
    <h3>GCP Security Best Practices</h3>
    <p>
      This chapter summarizes the comprehensive best practices for securing your Google Cloud environment. It ties together everything covered in this Cloud Security Veda's GCP section into a <strong>master reference</strong>.
    </p>

    <h4>The 10 Pillars of GCP Security</h4>
    <table>
      <thead>
        <tr>
          <th>Pillar</th>
          <th>Practices</th>
          <th>Priority</th>
          <th>GCP Service</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>1. Identity &amp; Access</strong></td>
          <td>Least privilege, Org Policies, IAM Recommender, disable default SA</td>
          <td style="color:#E11D48;font-weight:700;">CRITICAL</td>
          <td>IAM, Org Policies</td>
        </tr>
        <tr>
          <td><strong>2. Network Security</strong></td>
          <td>VPC-SC, firewall rules, private connectivity, DNS security</td>
          <td style="color:#E11D48;font-weight:700;">CRITICAL</td>
          <td>VPC-SC, VPC Firewall, Cloud NAT</td>
        </tr>
        <tr>
          <td><strong>3. Data Protection</strong></td>
          <td>CMEK encryption, Secret Manager, bucket policies, DLP</td>
          <td style="color:#E11D48;font-weight:700;">CRITICAL</td>
          <td>KMS, Secret Manager, DLP API</td>
        </tr>
        <tr>
          <td><strong>4. Compute Security</strong></td>
          <td>Shielded VMs, Confidential VMs, IAP, no external IPs</td>
          <td style="color:#FF6B35;font-weight:700;">HIGH</td>
          <td>Compute Engine, IAP, Confidential Computing</td>
        </tr>
        <tr>
          <td><strong>5. Logging &amp; Monitoring</strong></td>
          <td>Audit Logs, SCC, Chronicle, alert policies</td>
          <td style="color:#FF6B35;font-weight:700;">HIGH</td>
          <td>Cloud Logging, SCC, Chronicle SIEM</td>
        </tr>
        <tr>
          <td><strong>6. Container &amp; Serverless Security</strong></td>
          <td>Binary Auth, vulnerability scanning, Workload Identity, Pod Security</td>
          <td style="color:#FF6B35;font-weight:700;">HIGH</td>
          <td>Binauthz, GKE, Artifact Registry</td>
        </tr>
        <tr>
          <td><strong>7. Threat Detection</strong></td>
          <td>Event Threat Detection, SCC findings, SIEM correlation</td>
          <td style="color:#FFD700;font-weight:700;">MEDIUM-HIGH</td>
          <td>SCC Premium, Chronicle SIEM</td>
        </tr>
        <tr>
          <td><strong>8. Governance &amp; Compliance</strong></td>
          <td>Org Policies, SCC compliance dashboards, Forseti</td>
          <td style="color:#FFD700;font-weight:700;">MEDIUM-HIGH</td>
          <td>Org Policies, SCC, Forseti</li></td>
        </tr>
        <tr>
          <td><strong>9. Backup &amp; Recovery</strong></td>
          <td>Cloud Storage versioning, snapshots, DR planning</td>
          <td style="color:#22C55E;font-weight:700;">MEDIUM</td>
          <td>Cloud Storage, BigQuery, Backup for GKE</td>
        </tr>
        <tr>
          <td><strong>10. Cost &amp; Resource Governance</strong></td>
          <td>Labels, budgets, recommender, resource deletion policies</td>
          <td style="color:#22C55E;font-weight:700;">MEDIUM</td>
          <td>Recommender, Billing, Org Policies</td>
        </tr>
      </tbody>
    </table>

    <h4>Quick Reference: GCP Security Checklist</h4>
    <div class="success-box">
      <div class="success-title">✓ GCP Security Checklist</div>
      <ol>
        <li>Enable <strong>Cloud Audit Logs</strong> (all types) organization-wide</li>
        <li>Use <strong>Workload Identity</strong> instead of service account keys</li>
        <li>If keys are necessary, use <strong>short-lived keys</strong> and rotate regularly</li>
        <li>Enable <strong>VPC-SC</strong> perimeters around sensitive projects</li>
        <li>Remove <strong>external IPs</strong> from VMs — use IAP and Cloud NAT</li>
        <li>Enable <strong>Shielded VMs</strong> on all production instances</li>
        <li>Use <strong>customer-managed encryption keys</strong> (CMEK) for sensitive data</li>
        <li>Store secrets in <strong>Secret Manager</strong>, not environment variables</li>
        <li>Enable <strong>Container Analysis vulnerability scanning</strong> on all repositories</li>
        <li>Use <strong>Binary Authorization</strong> for container deploy-time enforcement</li>
        <li>Set <strong>Organization Policy Constraints</strong> (allowed regions, VM types, public IP access)</li>
        <li>Enable <strong>Security Command Center Premium</strong> for Event Threat Detection</li>
        <li>Use <strong>OS Login</strong> for SSH key management</li>
        <li>Enable <strong>Confidential Computing</strong> for highly sensitive workloads</li>
        <li>Review <strong>IAM Recommender</strong> suggestions quarterly</li>
        <li>Tag all resources with <strong>Labels</strong> for cost tracking and policy enforcement</li>
      </ol>
    </div>

    <div class="callout">
      <div class="callout-icon">🎓</div>
      <div class="callout-content">
        <h4>Cloud Security Veda 1 Complete!</h4>
        <p>You've now covered comprehensive cloud security across all three major platforms:</p>
        <ul>
          <li>✅ Cloud computing fundamentals and service models</li>
          <li>✅ Shared responsibility model</li>
          <li>✅ Cloud attack surface analysis</li>
          <li>✅ Zero Trust architecture</li>
          <li>✅ AWS security (IAM, VPC, S3, EC2, Lambda, CloudTrail, GuardDuty, WAF, Security Hub, Config)</li>
          <li>✅ Azure security (Entra ID, RBAC, Key Vault, NSG, Defender, Sentinel, Policy, Blueprints)</li>
          <li>✅ GCP security (IAM hierarchy, Resource hierarchy, VPC-SC, Binary Auth, KMS, Secret Manager)</li>
          <li>✅ Governance, compliance, and best practices</li>
        </ul>
        <p>Ready to continue your journey? The next Vedas await:
        <strong>Compliance (Veda 2)</strong>, <strong>AppSec (Veda 3)</strong>, <strong>DevSecOps (Veda 4)</strong>,
        <strong>Kubernetes &amp; Containers (Veda 5)</strong>, and <strong>Network Security (Veda 6)</strong>.</p>
      </div>
    </div>
  `
};