export const cloudSecurityContent = {
  // ==========================================
  // SECTION 1: CLOUD FUNDAMENTALS
  // ==========================================

  v1c1: `
    <h3>What is Cloud Computing?</h3>
    <p>
      Cloud computing is the delivery of computing services — including servers, storage, databases, networking, software, analytics, and intelligence — over the Internet ("the cloud") to offer faster innovation, flexible resources, and economies of scale. Instead of owning and maintaining physical data centers and servers, you can access technology services on an as-needed basis from a cloud provider.
    </p>

    <div class="info-box">
      <div class="info-title">💡 Key Concept: On-Demand Computing</div>
      <p>Think of cloud computing like electricity. You don't build a power plant in your home — you plug into the grid and pay for what you use. Cloud computing works the same way for IT resources.</p>
    </div>

    <h4>Essential Characteristics of Cloud Computing (NIST Definition)</h4>
    <p>The National Institute of Standards and Technology (NIST) defines five essential characteristics:</p>
    <ol>
      <li><strong>On-Demand Self-Service:</strong> A consumer can unilaterally provision computing capabilities, such as server time and network storage, as needed automatically without requiring human interaction with each service provider.</li>
      <li><strong>Broad Network Access:</strong> Capabilities are available over the network and accessed through standard mechanisms (mobile phones, tablets, laptops, workstations).</li>
      <li><strong>Resource Pooling:</strong> The provider's computing resources are pooled to serve multiple consumers using a multi-tenant model. Resources are dynamically assigned and reassigned according to consumer demand.</li>
      <li><strong>Rapid Elasticity:</strong> Capabilities can be elastically provisioned and released, in some cases automatically, to scale rapidly outward and inward commensurate with demand.</li>
      <li><strong>Measured Service:</strong> Cloud systems automatically control and optimize resource use by leveraging a metering capability, providing transparency for both the provider and consumer.</li>
    </ol>

    <h4>Why Cloud Security Matters</h4>
    <p>Cloud security is critical because organizations are rapidly migrating their infrastructure, applications, and data to cloud environments. This shift introduces new security challenges:</p>
    <ul>
      <li><strong>Loss of Physical Control:</strong> Your data lives on someone else's hardware in a location you may not know.</li>
      <li><strong>Shared Responsibility Model:</strong> Security is split between you and the cloud provider — misunderstanding this boundary is the #1 cause of cloud breaches.</li>
      <li><strong>Expanded Attack Surface:</strong> Internet-facing cloud resources create more entry points for attackers.</li>
      <li><strong>Data Sovereignty:</strong> Your data may cross international borders, subjecting it to different laws and regulations.</li>
      <li><strong>Identity is the New Perimeter:</strong> Traditional network perimeters dissolve in the cloud; identity and access management becomes paramount.</li>
    </ul>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Shared Responsibility Model</div>
      <p>The shared responsibility model defines what the cloud provider is responsible for versus what the customer is responsible for. This varies by service model:</p>
      <ul>
        <li><strong>IaaS:</strong> Provider secures the physical infrastructure; you secure everything above the OS.</li>
        <li><strong>PaaS:</strong> Provider secures runtime, middleware, and OS; you secure your applications and data.</li>
        <li><strong>SaaS:</strong> Provider secures almost everything; you secure your data, identity, and access.</li>
      </ul>
    </div>

    <h4>Cloud Security Benefits</h4>
    <ul>
      <li><strong>Centralized Security:</strong> Security policies can be managed from a single pane of glass.</li>
      <li><strong>Automated Compliance:</strong> Cloud providers invest heavily in certifications (SOC 2, ISO 27001, FedRAMP).</li>
      <li><strong>Built-in Redundancy:</strong> Data replication across availability zones and regions.</li>
      <li><strong>Advanced Threat Detection:</strong> Providers offer AI/ML-powered security services.</li>
    </ul>

    <h4>Cloud Service Models Overview</h4>
    <table>
      <thead>
        <tr>
          <th>Service Model</th>
          <th>What You Manage</th>
          <th>What Provider Manages</th>
          <th>Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>IaaS</strong></td>
          <td>Apps, Data, Runtime, OS</td>
          <td>Virtualization, Servers, Storage, Networking</td>
          <td>EC2, VMs, GCE</td>
        </tr>
        <tr>
          <td><strong>PaaS</strong></td>
          <td>Apps, Data</td>
          <td>Runtime, Middleware, OS, Infrastructure</td>
          <td>Elastic Beanstalk, App Service</td>
        </tr>
        <tr>
          <td><strong>SaaS</strong></td>
          <td>Data, User Access</td>
          <td>Everything else</td>
          <td>Office 365, Salesforce, Dropbox</td>
        </tr>
      </tbody>
    </table>

    <div class="callout">
      <div class="callout-icon">📊</div>
      <div class="callout-content">
        <h4>Market Share Insight</h4>
        <p>As of 2024, AWS holds ~31% of the cloud market, Azure ~25%, and GCP ~12%. The remaining ~32% is spread across Alibaba Cloud, Oracle, IBM, and others. Understanding multi-cloud is increasingly important for security professionals.</p>
      </div>
    </div>
  `,

  v1c2: `
    <h3>Cloud Service Models: IaaS, PaaS, and SaaS Deep Dive</h3>
    <p>
      Cloud services are delivered in three primary models, each offering different levels of control, flexibility, and management responsibility. Understanding these models is fundamental to securing cloud environments.
    </p>

    <h4>1. Infrastructure as a Service (IaaS)</h4>
    <p>IaaS provides virtualized computing resources over the internet. You rent IT infrastructure — servers, virtual machines, storage, networks — on a pay-as-you-go basis.</p>
    <ul>
      <li><strong>You manage:</strong> Applications, data, runtime, middleware, operating system</li>
      <li><strong>Provider manages:</strong> Virtualization, servers, storage, networking</li>
      <li><strong>Examples:</strong> AWS EC2, Azure Virtual Machines, Google Compute Engine</li>
      <li><strong>Security responsibility:</strong> Heaviest on the customer</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Example: Running a Web Application on IaaS</div>
      <p>You launch a virtual machine (EC2 instance), install the web server (Nginx/Apache), deploy your application code, configure the database, manage the operating system patches, and configure the firewall rules. The cloud provider ensures the physical server and network hardware are secure.</p>
    </div>

    <h4>2. Platform as a Service (PaaS)</h4>
    <p>PaaS provides a platform allowing customers to develop, run, and manage applications without dealing with the underlying infrastructure complexity.</p>
    <ul>
      <li><strong>You manage:</strong> Applications and data</li>
      <li><strong>Provider manages:</strong> Runtime, middleware, operating system, virtualization, servers, storage, networking</li>
      <li><strong>Examples:</strong> AWS Elastic Beanstalk, Azure App Service, Google App Engine, Heroku</li>
      <li><strong>Security responsibility:</strong> Moderate — provider handles most infrastructure security</li>
    </ul>

    <h5>PaaS Security Considerations</h5>
    <ul>
      <li><strong>Runtime Security:</strong> While the provider patches the runtime, you control application-level security</li>
      <li><strong>Data Protection:</strong> Your data in the PaaS database must still be encrypted and access-controlled by you</li>
      <li><strong>Application Secrets:</strong> Use managed secret stores (AWS Secrets Manager, Azure Key Vault) rather than hardcoded credentials</li>
    </ul>

    <h4>3. Software as a Service (SaaS)</h4>
    <p>SaaS delivers fully functional software applications over the internet, typically via a web browser. The provider manages everything.</p>
    <ul>
      <li><strong>You manage:</strong> Data, user access, and configuration settings</li>
      <li><strong>Provider manages:</strong> Everything else — application, runtime, middleware, OS, virtualization, servers, storage, networking</li>
      <li><strong>Examples:</strong> Microsoft 365, Google Workspace, Salesforce, Dropbox</li>
      <li><strong>Security responsibility:</strong> Lightweight — focused on data classification and access control</li>
    </ul>

    <h5>SaaS Security Best Practices</h5>
    <ol>
      <li><strong>Data Classification:</strong> Know what data you're putting in SaaS applications</li>
      <li><strong>Access Control:</strong> Enforce MFA, use SSO with identity providers</li>
      <li><strong>CASB Deployment:</strong> Cloud Access Security Brokers monitor and control SaaS usage</li>
      <li><strong>Shadow IT Discovery:</strong> Monitor for unauthorized SaaS usage in your organization</li>
    </ol>

    <h4>Security Comparison Table</h4>
    <table>
      <thead>
        <tr>
          <th>Aspect</th>
          <th>IaaS</th>
          <th>PaaS</th>
          <th>SaaS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Customer Control Level</td>
          <td>High</td>
          <td>Medium</td>
          <td>Low</td>
        </tr>
        <tr>
          <td>Customer Security Responsibility</td>
          <td>OS, Apps, Data, Runtime</td>
          <td>Apps, Data</td>
          <td>Data, Access</td>
        </tr>
        <tr>
          <td>Flexibility</td>
          <td>Very High</td>
          <td>Moderate</td>
          <td>Limited</td>
        </tr>
        <tr>
          <td>Management Overhead</td>
          <td>High</td>
          <td>Low</td>
          <td>Minimal</td>
        </tr>
        <tr>
          <td>Security Risk Surface</td>
          <td>Largest (more you manage)</td>
          <td>Medium</td>
          <td>Smallest</td>
        </tr>
        <tr>
          <td>Use Case</td>
          <td>Full control needed</td>
          <td>Dev-focused teams</td>
          <td>End-user applications</td>
        </tr>
      </tbody>
    </table>

    <h4>The "as-a-Service" Expansion</h4>
    <p>Beyond the Big Three, modern cloud offerings include:</p>
    <ul>
      <li><strong>FaaS (Function as a Service):</strong> Serverless computing (AWS Lambda, Azure Functions) — you only code the function, provider manages everything else</li>
      <li><strong>DaaS (Desktop as a Service):</strong> Virtual desktops (Amazon WorkSpaces, Azure Virtual Desktop)</li>
      <li><strong>DBaaS (Database as a Service):</strong> Managed databases (Amazon RDS, Azure SQL Database)</li>
      <li><strong>STaaS (Storage as a Service):</strong> Cloud storage (Amazon S3, Azure Blob Storage)</li>
      <li><strong>SECaaS (Security as a Service):</strong> Cloud security tools (Cloudflare, Zscaler, CrowdStrike Falcon Go)</li>
      <li><strong>Kubernetes as a Service:</strong> Managed Kubernetes (EKS, AKS, GKE)</li>
    </ul>

    <div class="warning-box">
      <div class="warning-title">⚠️ Security Warning</div>
      <p>The more the provider manages, the less you control. In SaaS environments, you're trusting the provider's security entirely for the application layer. Always verify the provider's security certifications (SOC 2 Type II, ISO 27001) and understand the shared responsibility boundaries. Never assume security = convenience.</p>
    </div>
  `,

  v1c3: `
    <h3>Cloud Deployment Models</h3>
    <p>
      Cloud deployment models define where your infrastructure lives, who has access, and how resources are managed. Each model has distinct security implications that every security professional must understand.
    </p>

    <h4>1. Public Cloud</h4>
    <p>A public cloud is owned and operated by a third-party cloud service provider, which delivers computing resources over the internet.</p>
    <ul>
      <li><strong>Ownership:</strong> Cloud provider owns and manages all hardware and software</li>
      <li><strong>Access:</strong> Open to the general public or a large industry group</li>
      <li><strong>Examples:</strong> AWS, Azure, GCP, IBM Cloud, Oracle Cloud, Alibaba Cloud</li>
      <li><strong>Multi-tenancy:</strong> Resources are shared among multiple customers (tenants) with strong logical isolation</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 How Multi-Tenancy Works</div>
      <p>In a public cloud, thousands of customers share the same physical servers, storage arrays, and network equipment. Each tenant's data is logically isolated through:</p>
      <ul>
        <li>Hypervisor-level virtualization (each VM is isolated)</li>
        <li>Network segmentation (VPCs, security groups)</li>
        <li>Encryption (each tenant's data encrypted with unique keys)</li>
        <li>Identity and access controls</li>
      </ul>
      <p>This is similar to an apartment building — everyone shares the same structure, but each apartment has its own lock and walls.</p>
    </div>

    <h4>2. Private Cloud</h4>
    <p>A private cloud is dedicated to a single organization. It can be hosted on-premises, in a colocation facility, or by a third-party provider, but the infrastructure is exclusively used by one entity.</p>
    <ul>
      <li><strong>Ownership:</strong> Single organization or dedicated third-party</li>
      <li><strong>Access:</strong> Restricted to internal users or specific partners</li>
      <li><strong>Examples:</strong> VMware vSphere, OpenStack, Nutanix AHV, Red Hat OpenShift</li>
      <li><strong>Best for:</strong> Highly regulated industries (banking, healthcare, government)</li>
    </ul>

    <h4>3. Hybrid Cloud</h4>
    <p>A hybrid cloud combines public and private clouds, allowing data and applications to flow between them. This is the most common enterprise deployment today.</p>
    <div class="callout">
      <div class="callout-icon">🏗️</div>
      <div class="callout-content">
        <h4>Hybrid Cloud Architecture</h4>
        <p>Typical pattern: Keep sensitive databases and regulated workloads on-premises (private cloud), while running web applications and development environments in the public cloud. Connectivity is established through VPN tunnels or dedicated connections (AWS Direct Connect, Azure ExpressRoute).</p>
      </div>
    </div>
    <ul>
      <li><strong>Benefits:</strong> Flexibility, scalability, compliance</li>
      <li><strong>Challenge:</strong> Consistent security policies across both environments</li>
      <li><strong>Examples:</strong> Azure Arc, AWS Outposts, Google Distributed Cloud</li>
    </ul>

    <h4>4. Multi-Cloud</h4>
    <p>A multi-cloud strategy uses two or more cloud providers simultaneously.</p>
    <ul>
      <li><strong>Motivation:</strong> Avoid vendor lock-in, leverage best-of-breed services, geographic redundancy, regulatory compliance</li>
      <li><strong>Security Challenge:</strong> Each provider has different security tools, APIs, policies, and dashboards — creating a fragmented security posture</li>
      <li><strong>Solution:</strong> Cloud Security Posture Management (CSPM) tools like Prisma Cloud, Wiz, Orca, or Lacework</li>
    </ul>

    <h4>5. Community Cloud</h4>
    <p>A community cloud is shared by several organizations with common concerns (security requirements, compliance mandates, policy).</p>
    <ul>
      <li><strong>Examples:</strong> Government clouds (AWS GovCloud, Azure Government), healthcare consortium clouds</li>
      <li><strong>Benefit:</strong> Shared costs while meeting specific compliance requirements</li>
    </ul>

    <div class="callout">
      <div class="callout-icon">🎯</div>
      <div class="callout-content">
        <h4>Deployment Model Selection Guide</h4>
        <p><strong>Heavily regulated industries</strong> (healthcare, finance, government) → Hybrid or Private cloud for sensitive workloads.<br>
        <strong>Startups & digital natives</strong> → Public cloud for speed and cost efficiency.<br>
        <strong>Large enterprises</strong> → Multi-cloud or Hybrid for flexibility and risk distribution.<br>
        <strong>Data sovereignty requirements</strong> → Private cloud or specific public cloud regions.</p>
      </div>
    </div>
  `,

  v1c4: `
    <h3>The Shared Responsibility Model</h3>
    <p>
      The shared responsibility model is the <mark>single most important concept</mark> in cloud security. Misunderstanding who is responsible for what leads to security gaps that attackers exploit.
    </p>

    <h4>The Core Principle</h4>
    <p>Cloud security is a <strong>shared</strong> responsibility between the cloud provider and the customer. The provider secures <em>the cloud</em> (infrastructure), while the customer secures <em>in the cloud</em> (their data, applications, configurations).</p>

    <blockquote>
      "The cloud provider is responsible for security <em>of</em> the cloud. The customer is responsible for security <em>in</em> the cloud."
      <br>— AWS Shared Responsibility Model
    </blockquote>

    <h4>Responsibility Breakdown by Service Type</h4>

    <table>
      <thead>
        <tr>
          <th>Security Area</th>
          <th>IaaS</th>
          <th>PaaS</th>
          <th>SaaS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Physical Datacenter</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
        </tr>
        <tr>
          <td>Network Infrastructure</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
        </tr>
        <tr>
          <td>Hypervisor / Virtualization</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
        </tr>
        <tr>
          <td>Operating System</td>
          <td style="color:#FFD700;font-weight:600;">🔶 Customer</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
        </tr>
        <tr>
          <td>Middleware</td>
          <td style="color:#FFD700;font-weight:600;">🔶 Customer</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
        </tr>
        <tr>
          <td>Runtime</td>
          <td style="color:#FFD700;font-weight:600;">🔶 Customer</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
        </tr>
        <tr>
          <td>Applications</td>
          <td style="color:#FFD700;font-weight:600;">🔶 Customer</td>
          <td style="color:#FFD700;font-weight:600;">🔶 Customer</td>
          <td style="color:#22C55E;font-weight:600;">✅ Provider</td>
        </tr>
        <tr>
          <td>Data</td>
          <td style="color:#FFD700;font-weight:600;">🔶 Customer</td>
          <td style="color:#FFD700;font-weight:600;">🔶 Customer</td>
          <td style="color:#FFD700;font-weight:600;">🔶 Customer</td>
        </tr>
        <tr>
          <td>Identity &amp; Access</td>
          <td style="color:#FFD700;font-weight:600;">🔶 Customer</td>
          <td style="color:#FFD700;font-weight:600;">🔶 Customer</td>
          <td style="color:#FFD700;font-weight:600;">🔶 Customer</td>
        </tr>
        <tr>
          <td>Configuration</td>
          <td style="color:#E11D48;font-weight:600;">🔴 Customer</td>
          <td style="color:#E11D48;font-weight:600;">🔴 Customer</td>
          <td style="color:#E11D48;font-weight:600;">🔴 Customer</td>
        </tr>
      </tbody>
    </table>

    <h4>Provider-Specific Responsibility Models</h4>

    <h5>AWS Shared Responsibility Model</h5>
    <ul>
      <li><strong>AWS is responsible for:</strong> Security <em>of</em> the cloud — protecting the infrastructure (hardware, software, networking, facilities)</li>
      <li><strong>Customer is responsible for:</strong> Security <em>in</em> the cloud — customer data, platform, applications, identity and access management, data encryption</li>
      <li><strong>Key documents:</strong> AWS Well-Architected Framework, AWS Security Hub findings</li>
    </ul>

    <h5>Azure Shared Responsibility Model</h5>
    <ul>
      <li><strong>Microsoft is responsible for:</strong> Physical data center, network infrastructure, hypervisor, host OS</li>
      <li><strong>Customer is responsible for:</strong> Data, endpoints, accounts, access management, application security</li>
      <li><strong>Unique aspect:</strong> Azure takes more responsibility for OS management in PaaS (even for some IaaS scenarios with Azure Automanage)</li>
    </ul>

    <h5>Google Cloud Shared Responsibility Model</h5>
    <ul>
      <li><strong>Google is responsible for:</strong> Physical security, infrastructure, networking, data processing</li>
      <li><strong>Customer is responsible for:</strong> Data classification, IAM policies, application security, OS patching (on Compute Engine)</li>
      <li><strong>Unique aspect:</strong> Google emphasizes data encryption — data is encrypted by default at all layers</li>
    </ul>

    <h4>Real-World Breach: Capital One (2019)</h4>
    <div class="warning-box">
      <div class="warning-title">⚠️ Case Study: Capital One Data Breach</div>
      <p><strong>What happened:</strong> A former AWS employee exploited a misconfigured Web Application Firewall (WAF) that had excessive permissions to the EC2 Instance Metadata Service (IMDSv1). This allowed the attacker to obtain temporary AWS credentials and access 106 million customer records stored in AWS S3.</p>
      <p><strong>Root cause:</strong> The customer (Capital One) was responsible for configuring the WAF correctly and restricting IMDS access — AWS provided secure tools, but they were misconfigured.</p>
      <p><strong>Impact:</strong> 80,000 bank account numbers, 140,000 Social Security numbers exposed. $80 million fine from OCC.</p>
      <p><strong>Lesson:</strong> The provider gives you secure building blocks. It's YOUR job to assemble them correctly. <strong>Always restrict IMDS access</strong> (use IMDSv2, enforce via security groups).</p>
    </div>

    <h4>Real-World Breach: Microsoft Exchange (2021)</h4>
    <div class="warning-box">
      <div class="warning-title">⚠️ Case Study: Hafnium / Exchange Server</div>
      <p><strong>What happened:</strong> Chinese state-sponsored group "Hafnium" exploited four zero-day vulnerabilities in Microsoft Exchange Server (on-premises). This affected 250,000+ servers globally before Microsoft released patches.</p>
      <p><strong>Root cause:</strong> Customers hadn't patched their Exchange servers promptly. If these were on Exchange Online (SaaS), Microsoft would have patched them automatically.</p>
      <p><strong>Lesson:</strong> On-premises means <strong>you</strong> own the patching cycle. In PaaS/SaaS, the provider handles it. Choose the right service model for your security maturity.</p>
    </div>

    <h4>Common Responsibility Gaps</h4>
    <table>
      <thead>
        <tr>
          <th>Gap</th>
          <th>Why It Happens</th>
          <th>How to Close It</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>IAM Over-Permissions</td>
          <td>Default policies are broad, teams grant excessive access</td>
          <td>Implement least privilege, use Access Analyzer</td>
        </tr>
        <tr>
          <td>Unencrypted Data</td>
          <td>Encryption not enabled by default on some services</td>
          <td>Enable default encryption, use KMS with customer-managed keys</td>
        </tr>
        <tr>
          <td>Missing MFA</td>
          <td>Convenience over security</td>
          <td>Enforce MFA via SCPs/conditional access policies</td>
        </tr>
        <tr>
          <td>Public Storage Buckets</td>
          <td>Default is private, but teams change it for convenience</td>
          <td>Block public access at account level, use S3 Block Public Access</td>
        </tr>
        <tr>
          <td>Unpatched Systems</td>
          <td>No automated patching strategy</td>
          <td>Use managed patching (AWS Systems Manager, Azure Update Management)</td>
        </tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 Pro Tip: The "CSPM Gap"</div>
      <p>Cloud Security Posture Management (CSPM) tools exist specifically to help you manage your portion of shared responsibility. Tools like AWS Security Hub, Azure Defender, GCP Security Command Center, or third-party tools (Wiz, Prisma Cloud, Orca, Lacework) continuously scan for misconfigurations and compliance violations. <strong>The average organization has 3,500+ misconfigurations across their cloud accounts at any given time.</strong></p>
    </div>
  `,

  v1c5: `
    <h3>Understanding the Cloud Attack Surface</h3>
    <p>
      The cloud attack surface refers to all the points where an unauthorized user could potentially gain access to your cloud environment, extract data, or cause harm. In cloud computing, this surface is significantly more complex than traditional on-premises environments.
    </p>

    <h4>The Cloud Attack Surface Model</h4>
    <div class="info-box">
      <div class="info-title">🗺️ The Cloud Attack Surface Pyramid</div>
      <p>Think of your attack surface as a pyramid with four critical layers:</p>
      <ol>
        <li><strong>Identity Layer (Most Critical):</strong> IAM users, roles, service accounts, API keys, access tokens, federated credentials</li>
        <li><strong>Management Plane:</strong> Cloud console access, APIs, CLI tools, SDKs, Terraform state</li>
        <li><strong>Data Plane:</strong> The actual data stored in cloud services — databases, storage buckets, queues, caches</li>
        <li><strong>Network Plane:</strong> VPCs, subnets, security groups, load balancers, DNS, CDN</li>
      </ol>
      <p style="margin-top:10px"><strong>80% of cloud breaches involve the Identity Layer</strong>. Protecting identities is your highest-impact security investment.</p>
    </div>

    <h4>Top Cloud Attack Vectors</h4>

    <h5>1. Misconfiguration (Cause of ~70% of breaches)</h5>
    <p>Misconfiguration is the #1 cause of cloud breaches. Gartner predicts: "Through 2025, <strong>99% of cloud security failures</strong> will be the customer's fault."</p>
    <ul>
      <li>Storage buckets left publicly accessible (S3, GCS, Azure Blob)</li>
      <li>Database ports exposed to the internet (MongoDB, Redis, Elasticsearch)</li>
      <li>Overly permissive IAM policies with wildcards <code>"Action": "*"</code></li>
      <li>Default credentials not changed on admin consoles</li>
      <li>Unencrypted data at rest or in transit</li>
      <li>Logging and monitoring disabled</li>
      <li>SSH/RDP open to 0.0.0.0/0</li>
    </ul>

    <h5>2. Identity & Credential Abuse</h5>
    <p>Credentials are the #1 target for attackers because they're the easiest path to legitimate access.</p>
    <ul>
      <li><strong>GitHub leaks:</strong> Over 100,000 AWS access keys have been found in public GitHub repos</li>
      <li><strong>Phishing:</strong> Fake cloud login pages to steal credentials</li>
      <li><strong>Instance metadata exploitation:</strong> SSRF attacks accessing IMDS (Capital One breach pattern)</li>
      <li><strong>Service account abuse:</strong> Forgotten service accounts with admin-level permissions</li>
      <li><strong>Credential stuffing:</strong> Using leaked passwords from other breaches</li>
    </ul>

    <h5>3. Insecure APIs</h5>
    <p>Every cloud resource is accessible via API. Weak or improperly secured APIs become prime targets.</p>
    <ul>
      <li>API endpoints without authentication or with weak auth</li>
      <li>Lack of rate limiting on API calls</li>
      <li>Insecure direct object references (IDOR)</li>
      <li>Excessive API permissions (overprivileged service accounts)</li>
      <li>Unencrypted API endpoints (HTTP instead of HTTPS)</li>
    </ul>

    <h5>4. Account Hijacking</h5>
    <ul>
      <li>Phishing attacks targeting cloud console credentials</li>
      <li>Credential stuffing with passwords from data breaches</li>
      <li>Session hijacking through stolen or insecure tokens</li>
      <li>SIM-swapping to bypass SMS-based MFA</li>
    </ul>

    <h5>5. Insider Threats</h5>
    <p>Insiders with legitimate access can cause the most damage.</p>
    <ul>
      <li><strong>Malicious:</strong> Disgruntled employees exfiltrating data before departure</li>
      <li><strong>Accidental:</strong> Developers deploying insecure configurations</li>
      <li><strong>Negligent:</strong> Users sharing credentials, using weak passwords</li>
      <li><strong>Compromised:</strong> Insider accounts taken over by external attackers</li>
    </ul>

    <h5>6. Supply Chain Attacks</h5>
    <p>Attacks targeting the software supply chain and cloud tooling:</p>
    <ul>
      <li>Compromised container images in registries</li>
      <li>Malicious Terraform modules or CloudFormation templates</li>
      <li>Backdoored CI/CD tools and deployment scripts</li>
      <li>Dependency confusion attacks</li>
    </ul>

    <h5>7. Advanced Persistent Threats (APTs)</h5>
    <p>Sophisticated, long-term state-sponsored attacks:</p>
    <ul>
      <li>Supply chain compromise of cloud management tools</li>
      <li>Zero-day exploitation of cloud services</li>
      <li>Lateral movement across cloud resources (island hopping)</li>
      <li>Long-dwell-time persistence in cloud environments</li>
    </ul>

    <h4>Attack Surface Reduction Strategies</h4>
    <div class="success-box">
      <div class="success-title">✓ Attack Surface Reduction Checklist</div>
      <ol>
        <li><strong>Enable MFA</strong> on ALL accounts, especially privileged ones (use hardware keys or authenticator apps, not SMS)</li>
        <li><strong>Use temporary credentials</strong> (STS, Workload Identity Federation) instead of long-lived access keys</li>
        <li><strong>Practice least privilege</strong> — audit and minimize all IAM policies</li>
        <li><strong>Use VPC endpoints</strong> to keep traffic within the cloud network</li>
        <li><strong>Run automated security audits</strong> with CSPM tools weekly</li>
        <li><strong>Remove unused resources</strong> and orphaned accounts immediately</li>
        <li><strong>Encrypt all data</strong> at rest (AES-256) and in transit (TLS 1.2+)</li>
        <li><strong>Implement network segmentation</strong> with security groups and NACLs</li>
        <li><strong>Scan for secrets</strong> in code repositories (GitLeaks, TruffleHog)</li>
        <li><strong>Implement Cloud Security Posture Management</strong> for continuous monitoring</li>
      </ol>
    </div>

    <div class="warning-box">
      <div class="warning-title">⚠️ Industry Statistics</div>
      <ul>
        <li>Palo Alto Networks 2024: <strong>83% of organizations</strong> experienced at least one cloud security incident in the past 12 months</li>
        <li>Average time to discover a misconfigured cloud resource: <strong>108 days</strong></li>
        <li><strong>45% of breaches</strong> involve hacking, <strong>22%</strong> involve cloud misconfiguration (Verizon DBIR 2024)</li>
        <li>Average cost of a cloud data breach: <strong>$4.88 million</strong> (IBM Cost of a Data Breach 2024)</li>
      </ul>
    </div>
  `,

  v1c6: `
    <h3>Cloud Security Architecture</h3>
    <p>
      A robust cloud security architecture provides <strong>defense in depth</strong> — multiple layers of security controls so that if one layer fails, others still protect your assets. This chapter covers architectural principles and patterns for securing cloud environments.
    </p>

    <h4>Defense in Depth — The Cloud Security Layers</h4>
    <p>Think of cloud security as concentric circles around your data. An attacker must penetrate ALL layers to reach critical assets.</p>

    <table>
      <thead>
        <tr>
          <th>Layer</th>
          <th>Controls</th>
          <th>Example Services</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>1. Physical</strong></td>
          <td>Data center security, biometric access, 24/7 monitoring</td>
          <td>Provider Managed (AWS/Azure/GCP DCs)</td>
        </tr>
        <tr>
          <td><strong>2. Network</strong></td>
          <td>Firewalls, IDS/IPS, DDoS protection, VPN, DNS security</td>
          <td>AWS WAF, Azure Firewall, Cloud Armor</td>
        </tr>
        <tr>
          <td><strong>3. Host / Compute</strong></td>
          <td>OS hardening, patching, endpoint protection, container security</td>
          <td>AWS Inspector, Azure Defender for Servers</td>
        </tr>
        <tr>
          <td><strong>4. Application</strong></td>
          <td>WAF, input validation, authentication, authorization</td>
          <td>AWS Shield, Cloudflare, OAuth2/OIDC</td>
        </tr>
        <tr>
          <td><strong>5. Data</strong></td>
          <td>Encryption, classification, access control, DLP</td>
          <td>AWS KMS, Azure Key Vault, GCP KMS, Macie</td>
        </tr>
        <tr>
          <td><strong>6. Identity</strong></td>
          <td>MFA, SSO, least privilege, zero trust, PAM</td>
          <td>AWS IAM, Azure AD, GCP IAM</td>
        </tr>
        <tr>
          <td><strong>7. Governance</strong></td>
          <td>Policy enforcement, monitoring, audit, compliance</td>
          <td>AWS Config, Azure Policy, GCP Org Policies</td>
        </tr>
      </tbody>
    </table>

    <h4>Zero Trust Architecture (ZTA) in Cloud</h4>
    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Zero Trust</div>
      <p>Zero Trust is a security architecture based on one principle: <strong>"Never trust, always verify."</strong> It eliminates the concept of a trusted network perimeter and assumes threats can come from anywhere — inside or outside.</p>
    </div>
    <p>Zero Trust has three core pillars:</p>
    <ol>
      <li><strong>Verify Explicitly:</strong> Authenticate and authorize <em>every</em> request based on all available data points — user identity, device health, location, resource sensitivity, and data classification.</li>
      <li><strong>Least Privilege Access:</strong> Limit access with Just-In-Time (JIT) and Just-Enough-Access (JEA) policies. No standing privileges — access is granted on-demand and revoked immediately after use.</li>
      <li><strong>Assume Breach:</strong> Design as if attackers are already inside. Minimize blast radius through microsegmentation. Verify end-to-end encryption continuously. Use advanced analytics to detect and respond to threats.</li>
    </ol>

    <h5>Zero Trust Implementation in Cloud</h5>
    <table>
      <thead>
        <tr>
          <th>Zero Trust Principle</th>
          <th>AWS Implementation</th>
          <th>Azure Implementation</th>
          <th>GCP Implementation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Identity Verification</td>
          <td>IAM + Cognito + MFA</td>
          <td>Azure AD + Entra ID + MFA</td>
          <td>Cloud Identity + MFA</td>
        </tr>
        <tr>
          <td>Device Trust</td>
          <td colspan="3">MDM/UEM integration, device compliance policies</td>
        </tr>
        <tr>
          <td>Network Segmentation</td>
          <td>VPC + Security Groups + PrivateLink</td>
          <td>VNet + NSGs + Private Link</td>
          <td>VPC + Firewall Rules + Private Service Connect</td>
        </tr>
        <tr>
          <td>Workload Identity</td>
          <td>IAM Roles for Service Accounts (IRSA)</td>
          <td>Managed Identities</td>
          <td>Workload Identity</td>
        </tr>
        <tr>
          <td>Continuous Verification</td>
          <td>GuardDuty + Inspector + Security Hub</td>
          <td>Defender for Cloud + Sentinel</td>
          <td>Security Command Center + Chronicle</td>
        </tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 Real-World Example: Google BeyondCorp</div>
      <p>Google implemented BeyondCorp, a Zero Trust architecture that <strong>eliminated the traditional VPN</strong> for its entire 60,000+ employee workforce:</p>
      <ul>
        <li>No device is inherently trusted based on network location</li>
        <li>Every access request is authenticated, authorized, and encrypted</li>
        <li>Device health is verified before granting access to any application</li>
        <li>Access is granted to specific applications, not the entire network</li>
      </ul>
      <p><strong>Result:</strong> 100% of Google's workforce works without a VPN, with <strong>fewer</strong> security incidents and better user experience.</p>
    </div>

    <h4>Microsegmentation</h4>
    <p>Microsegmentation divides your cloud environment into granular, isolated security zones. Each zone has its own security policies, preventing lateral movement by attackers.</p>
    <ul>
      <li><strong>East-West Traffic:</strong> Controls communication between workloads (VM-to-VM, container-to-container, service-to-service)</li>
      <li><strong>North-South Traffic:</strong> Controls traffic entering/leaving your cloud environment</li>
      <li><strong>Tools:</strong> AWS Security Groups + NACLs, Azure NSGs, GCP Firewall Rules, Istio Service Mesh, Calico, Cilium</li>
    </ul>

    <div class="callout">
      <div class="callout-icon">🛡️</div>
      <div class="callout-content">
        <h4>Why Microsegmentation Matters</h4>
        <p>Without microsegmentation, an attacker who compromises one VM can freely communicate with every other VM in the same network segment. With proper microsegmentation, they're contained to just that one workload. This is how you <strong>minimize the blast radius</strong> of any breach.</p>
      </div>
    </div>

    <h4>Well-Architected Frameworks — Security Pillar</h4>
    <p>All three major cloud providers publish a Well-Architected Framework with a dedicated security pillar:</p>
    <table>
      <thead>
        <tr>
          <th>Framework</th>
          <th>Security Pillar Focus</th>
          <th>Best Practices</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>AWS WA Framework</strong></td>
          <td>Security Pillar</td>
          <td>6 best practices: IAM, detection, infrastructure protection, data protection, incident response</td>
        </tr>
        <tr>
          <td><strong>Azure WA Framework</strong></td>
          <td>Security Pillar</td>
          <td>5 recommendations: Identity, perimeter, network, compute, data</td>
        </tr>
        <tr>
          <td><strong>GCP Architecture Framework</strong></td>
          <td>Security Blueprint</td>
          <td>4 domains: Identity-centric access, data protection, network security, security operations</td>
        </tr>
      </tbody>
    </table>
    <p>Common themes across <strong>all</strong> frameworks:</p>
    <ol>
      <li>Implement strong identity and access management</li>
      <li>Protect data in transit and at rest</li>
      <li>Establish security monitoring and alerting</li>
      <li>Automate security best practices (Infrastructure as Code)</li>
      <li>Protect the network perimeter and internal boundaries</li>
      <li>Prepare for incident response before it happens</li>
    </ol>

    <h4>Cloud Security Architecture Patterns</h4>

    <h5>1. Hub-and-Spoke Network</h5>
    <p>A centralized VPC ("hub") connects to multiple workload VPCs ("spokes") through peering or transit gateways. The hub houses centralized security appliances (firewalls, inspection gateways, logging).</p>
    <ul>
      <li><strong>Hub:</strong> Centralized inspection, logging, firewall</li>
      <li><strong>Spokes:</strong> Individual application environments</li>
      <li><strong>Benefit:</strong> East-west traffic inspection, consistent policy, single management point</li>
    </ul>

    <h5>2. Security Landing Zone</h5>
    <p>A multi-account architecture that separates environments and enforces governance from the start.</p>
    <ul>
      <li><strong>Networking Account:</strong> Centralized VPC, Transit Gateway, DNS</li>
      <li><strong>Security Account:</strong> SIEM, logging, security tooling</li>
      <li><strong>Logging Account:</strong> Centralized log aggregation (immutable storage)</li>
      <li><strong>Workload Accounts:</strong> Application-specific environments</li>
      <li><strong>Break-Glass Account:</strong> Emergency access with heavy monitoring</li>
    </ul>

    <h5>3. Three-Tier Architecture Security</h5>
    <p>The classic web application architecture in the cloud with security controls at each tier:</p>
    <table>
      <thead>
        <tr>
          <th>Tier</th>
          <th>Components</th>
          <th>Security Controls</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Presentation</strong></td>
          <td>Web servers, load balancers</td>
          <td>WAF, DDoS protection, TLS termination</td>
        </tr>
        <tr>
          <td><strong>Application</strong></td>
          <td>Application servers, containers</td>
          <td>Runtime security, container scanning, code signing</td>
        </tr>
        <tr>
          <td><strong>Data</strong></td>
          <td>Databases, caches, storage</td>
          <td>Encryption, access control, backup, DLP</td>
        </tr>
      </tbody>
    </table>
  `,

  v1c7: `
    <h3>Cloud Governance: Policies, Controls, and Compliance</h3>
    <p>
      Cloud governance establishes the policies, roles, and controls that ensure your cloud infrastructure is secure, compliant, cost-effective, and efficiently managed. Without proper governance, cloud environments quickly become chaotic and insecure.
    </p>

    <h4>What is Cloud Governance?</h4>
    <div class="info-box">
      <div class="info-title">💡 Key Concept: Cloud Governance</div>
      <p>Cloud governance is the set of policies, procedures, and technical controls used to manage security, compliance, and operations in cloud environments. It answers three fundamental questions:</p>
      <ol>
        <li><strong>Who</strong> can access what resources?</li>
        <li><strong>What</strong> configurations are required and prohibited?</li>
        <li><strong>How</strong> do we detect and respond to violations?</li>
      </ol>
    </div>

    <h4>The Three Pillars of Cloud Governance</h4>
    <table>
      <thead>
        <tr>
          <th>Pillar</th>
          <th>Focus</th>
          <th>Key Questions</th>
          <th>Tools & Techniques</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Security Governance</strong></td>
          <td>Protecting assets and data</td>
          <td>"Are we secure?"</td>
          <td>IAM policies, encryption standards, vulnerability management</td>
        </tr>
        <tr>
          <td><strong>Compliance Governance</strong></td>
          <td>Meeting regulatory requirements</td>
          <td>"Are we compliant?"</td>
          <td>Audit trails, compliance frameworks, data residency controls</td>
        </tr>
        <tr>
          <td><strong>Operational Governance</strong></td>
          <td>Efficient resource management</td>
          <td>"Are we efficient?"</td>
          <td>Cost management, resource tagging, naming conventions</td>
        </tr>
      </tbody>
    </table>

    <h4>Policy as Code</h4>
    <p>Policy as Code defines governance rules in machine-readable formats, enabling <strong>automated enforcement</strong> and continuous compliance checking rather than periodic manual audits.</p>

    <div class="callout">
      <div class="callout-icon">🛠️</div>
      <div class="callout-content">
        <h4>Popular Policy-as-Code Tools</h4>
        <p><strong>Open Policy Agent (OPA):</strong> Cloud-neutral policy engine using Rego language — works with any cloud<br>
        <strong>AWS Config Rules:</strong> AWS-specific compliance checking with managed and custom rules<br>
        <strong>Azure Policy:</strong> Azure-native policy enforcement with built-in and custom initiatives<br>
        <strong>Google Organization Policy:</strong> GCP-specific policy constraints at org/folder/project level<br>
        <strong>Sentinel (HashiCorp):</strong> Policy as code for Terraform Enterprise<br>
        <strong>Cloud Custodian:</strong> Multi-cloud governance automation with policy definitions in YAML</p>
      </div>
    </div>

    <h5>Example: Preventing Public S3 Buckets with OPA</h5>
    <pre><code>
# Rego policy to deny public S3 bucket creation
package cloud.security

deny[msg] {
  input.resource_type == "aws_s3_bucket"
  input.config.public_access_block_configuration == null
  msg := "S3 bucket must have public access block configuration"
}

deny[msg] {
  input.resource_type == "aws_s3_bucket"
  input.config.acl == "public-read"
  msg := "S3 bucket ACL must not be public-read"
}
</code></pre>

    <h4>Infrastructure as Code (IaC) Governance</h4>
    <p>IaC governance ensures that all cloud resources are deployed through controlled, auditable, and repeatable processes.</p>
    <ul>
      <li><strong>Version Control:</strong> All infrastructure changes tracked in Git with branch protection</li>
      <li><strong>Code Review:</strong> Peer review for all infrastructure changes (pull request approvals)</li>
      <li><strong>Automated Testing:</strong> Validate configurations before deployment using Checkov, tfsec, Terrascan, or cfn-lint</li>
      <li><strong>Change Management:</strong> Approval workflows for production changes with audit trail</li>
      <li><strong>Secrets Management:</strong> Never commit secrets to Git — use Vault, AWS Secrets Manager, or SOPS</li>
    </ul>

    <h5>IaC Security Scanning Pipeline</h5>
    <pre><code>
# Example CI/CD pipeline for IaC security
stages:
  - validate
  - security-scan
  - plan
  - apply

security-scan:
  stage: security-scan
  script:
    - checkov -d . --framework terraform
    - tfsec .
    - terrascan scan -i terraform
  allow_failure: false
</code></pre>

    <h4>Resource Tagging Strategy</h4>
    <p>Tagging is critical for cost allocation, access control, compliance, and operational management. Untagged resources are <strong>ungoverned resources</strong>.</p>
    <table>
      <thead>
        <tr>
          <th>Tag Key</th>
          <th>Example Values</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Environment</td><td>prod, staging, dev, sandbox</td><td>Access control, cost tracking, lifecycle management</td></tr>
        <tr><td>Owner</td><td>team-backend, john.doe@example.com</td><td>Accountability, incident response contacts</td></tr>
        <tr><td>DataClassification</td><td>public, internal, confidential, restricted</td><td>Security policies, encryption requirements</td></tr>
        <tr><td>CostCenter</td><td>CC-1234, Engineering-456</td><td>Budget allocation, chargeback</td></tr>
        <tr><td>Application</td><td>payment-service, user-portal</td><td>Resource grouping, dependency mapping</td></tr>
        <tr><td>Compliance</td><td>hipaa, pci, soc2, gdpr</td><td>Audit readiness, scope determination</td></tr>
        <tr><td>BackupPolicy</td><td>critical, standard, none</td><td>Automated backup enforcement</td></tr>
        <tr><td>ShutdownSchedule</td><td>none, weekdays-18h, weekends</td><td>Cost optimization for non-prod</td></tr>
      </tbody>
    </table>

    <h4>Guardrails and Preventive Controls</h4>
    <div class="warning-box">
      <div class="warning-title">⚠️ Real-World Failure: Cost Governance</div>
      <p>In 2023, a major financial services company discovered <strong>$2.3 million</strong> in unexpected cloud costs in one month. Investigation revealed: 127 orphaned VMs running 24/7, 34 unattached storage volumes, and 8 load balancers with zero traffic. A proper tagging policy and automated resource lifecycle management would have caught this in <strong>week one</strong>.</p>
    </div>

    <h5>Governance Implementation Checklist</h5>
    <ol>
      <li>Define a cloud governance framework aligned with business objectives and risk appetite</li>
      <li>Implement mandatory tagging policies with automated enforcement (deny untagged resources)</li>
      <li>Set up cost anomaly detection, budget alerts, and automated shutdown policies</li>
      <li>Deploy policy-as-code rules in CI/CD pipelines (shift-left governance)</li>
      <li>Establish a Cloud Center of Excellence (CCoE) with representatives from each team</li>
      <li>Create runbooks for common security incidents and configuration changes</li>
      <li>Schedule quarterly architecture reviews and annual security assessments</li>
      <li>Implement automated remediation for common misconfigurations</li>
    </ol>
  `,

  v1c8: `
    <h3>Cloud Security Roles, Responsibilities, and IAM</h3>
    <p>
      Effective cloud security requires clear role definitions. In the cloud, "roles" has a double meaning: <strong>organizational roles</strong> (people and teams) and <strong>technical roles</strong> (IAM roles and service accounts). Both must be designed and managed correctly.
    </p>

    <h4>Organizational Security Roles</h4>
    <table>
      <thead>
        <tr>
          <th>Role</th>
          <th>Core Responsibilities</th>
          <th>Key Skills</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>CISO</strong></td>
          <td>Security strategy, risk management, board reporting, regulatory compliance</td>
          <td>Leadership, risk frameworks (NIST, ISO 27001), regulations</td>
        </tr>
        <tr>
          <td><strong>Cloud Security Architect</strong></td>
          <td>Design secure cloud architectures, conduct design reviews, threat modeling</td>
          <td>Multi-cloud platforms, networking, zero trust, TOGAF</td>
        </tr>
        <tr>
          <td><strong>Cloud Security Engineer</strong></td>
          <td>Implement security controls, automate security tooling, IaC security</td>
          <td>Terraform, Python, CI/CD, IaC, Kubernetes security</td>
        </tr>
        <tr>
          <td><strong>Security Operations (SecOps)</strong></td>
          <td>24/7 monitoring, threat detection, incident response, forensics</td>
          <td>SIEM, SOAR, DFIR, threat intelligence</td>
        </tr>
        <tr>
          <td><strong>DevSecOps Engineer</strong></td>
          <td>Embed security in CI/CD: SAST, DAST, SCA, container scanning</td>
          <td>Jenkins/GitHub Actions, container security, SAST/DAST tools</td>
        </tr>
        <tr>
          <td><strong>Compliance Analyst</strong></td>
          <td>Ensure regulatory compliance, prepare for audits, evidence collection</td>
          <td>SOC 2, ISO 27001, HIPAA, PCI DSS, GDPR</td>
        </tr>
        <tr>
          <td><strong>Identity & Access Manager</strong></td>
          <td>Manage IAM policies, access reviews, PAM, identity governance</td>
          <td>LDAP, SAML, OAuth, RBAC, ABAC, privileged access management</td>
        </tr>
      </tbody>
    </table>

    <h4>Technical IAM Roles in Cloud</h4>
    <p>IAM roles are the backbone of cloud authorization. Unlike traditional user accounts, roles can be attached to services, applications, and even individual API calls.</p>

    <h5>Three Types of Cloud Identities</h5>
    <table>
      <thead>
        <tr>
          <th>Identity Type</th>
          <th>Purpose</th>
          <th>Security Risk</th>
          <th>Best Practice</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Human Users</strong></td>
          <td>Developers, admins, operators interact with cloud console</td>
          <td>Credential theft, phishing, over-permissioning</td>
          <td>SSO + MFA, just-in-time access, regular reviews</td>
        </tr>
        <tr>
          <td><strong>Service Accounts</strong></td>
          <td>Applications and services authenticate programmatically</td>
          <td>Secret leakage, long-lived credentials, excessive permissions</td>
          <td>Workload identity federation, short-lived tokens, auto-rotation</td>
        </tr>
        <tr>
          <td><strong>Machine/Workload Identity</strong></td>
          <td>VMs, containers, serverless functions access cloud resources</td>
          <td>Lateral movement, privilege escalation via metadata APIs</li>
          <td>Instance profiles, managed identities, block IMDSv1</td>
        </tr>
      </tbody>
    </table>

    <div class="key-box">
      <div class="key-title">🔑 Key Insight: Service Accounts Are the Biggest Risk</div>
      <p>Service accounts are <strong>10x more likely to be exploited</strong> than human accounts because they typically have: excessive permissions that are never reviewed, long-lived credentials that are rarely rotated, and no MFA protection (MFA doesn't work for machines the same way). The SolarWinds attack and the Capital One breach both involved service account compromise.</p>
    </div>

    <h5>Role Mapping Across Cloud Providers</h5>
    <table>
      <thead>
        <tr>
          <th>Concept</th>
          <th>AWS</th>
          <th>Azure</th>
          <th>GCP</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Human User Identity</td>
          <td>IAM User (root + IAM)</td>
          <td>Microsoft Entra ID User</td>
          <td>Google Account</td>
        </tr>
        <tr>
          <td>Group/Collection</td>
          <td>IAM Group</td>
          <td>Entra ID Group</td>
          <td>Google Group</td>
        </tr>
        <tr>
          <td>Service Role</td>
          <td>IAM Role</td>
          <td>Managed Identity / Service Principal</td>
          <td>Service Account</td>
        </tr>
        <tr>
          <td>Temporary Credential</td>
          <td>STS / AssumeRole</td>
          <td>Managed Identity Token</td>
          <td>Workload Identity Federation Token</td>
        </tr>
        <tr>
          <td>External Federation</td>
          <td>SAML / OIDC Federation</td>
          <td>External ID / Workload ID</td>
          <td>Workforce Identity Federation</td>
        </tr>
        <tr>
          <td>Privileged Access</td>
          <td>IAM Roles Anywhere, SSO</td>
          <td>PIM (Privileged Identity Mgmt)</td>
          <td>Organization Policy Admin</td>
        </tr>
      </tbody>
    </table>

    <h4>Principle of Least Privilege (PoLP)</h4>
    <div class="warning-box">
      <div class="warning-title">⚠️ The Danger of Over-Permissioned Roles</div>
      <p>A study by Ermetic found that <strong>98% of organizations</strong> gave their cloud identities more permissions than they actually needed. The #1 attack pattern in cloud breaches is:</p>
      <p><code>Compromise weak identity → Escalate privileges → Lateral movement → Exfiltrate data</code></p>
      <p>Most organizations never audit IAM policies after initial creation.</p>
    </div>

    <h5>Implementing Least Privilege: Step by Step</h5>
    <ol>
      <li><strong>Inventory all identities:</strong> List all IAM users, roles, service accounts, and API keys across all cloud accounts</li>
      <li><strong>Analyze actual usage:</strong> Use AWS Access Analyzer / Azure Access Reviews / GCP IAM Recommender to find unused permissions</li>
      <li><strong>Use predefined roles:</strong> Prefer AWS managed policies, Azure built-in roles, or GCP predefined roles over custom ones</li>
      <li><strong>Avoid wildcards:</strong> <strong>Never</strong> use <code>"Action": "*"</code> or <code>"Resource": "*"</code> in production policies</li>
      <li><strong>Implement time-based access:</strong> Use just-in-time (JIT) access — grant elevated permissions only when needed, auto-revoke after a set time</li>
      <li><strong>Conduct quarterly access reviews:</strong> Business owners must certify access for their team members</li>
      <li><strong>Implement break-glass procedures:</strong> Emergency access accounts with heavy monitoring and mandatory post-use review</li>
    </ol>

    <h5>Example IAM Policy Analysis</h5>
    <pre><code>
# ❌ DANGEROUS: Over-permissioned policy
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": "*",
    "Resource": "*"
  }]
}
# This gives FULL access to EVERYTHING in the account!

# ✅ SECURE: Least privilege policy
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": [
      "s3:GetObject",
      "s3:ListBucket"
    ],
    "Resource": [
      "arn:aws:s3:::my-app-logs/*",
      "arn:aws:s3:::my-app-logs"
    ],
    "Condition": {
      "IpAddress": {"aws:SourceIp": "10.0.0.0/16"}
    }
  }]
}
# This allows ONLY reading specific S3 objects from a specific network
</code></pre>

    <h4>RACI Matrix for Cloud Security</h4>
    <p>A RACI (Responsible, Accountable, Consulted, Informed) matrix clarifies who does what in security operations:</p>
    <table>
      <thead>
        <tr>
          <th>Activity</th>
          <th>CISO</th>
          <th>Cloud Security Eng</th>
          <th>Dev Team</th>
          <th>Platform/DevOps Team</th>
          <th>Compliance</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>IAM Policy Review</td><td>A</td><td>R</td><td>C</td><td>I</td><td>C</td></tr>
        <tr><td>Network Security Design</td><td>A</td><td>R</td><td>I</td><td>C</td><td>I</td></tr>
        <tr><td>Encryption Configuration</td><td>A</td><td>R</td><td>C</td><td>C</td><td>A</td></tr>
        <tr><td>Incident Response</td><td>A</td><td>R</td><td>C</td><td>C</td><td>I</td></tr>
        <tr><td>Security Monitoring</td><td>A</td><td>R</td><td>I</td><td>R</td><td>I</td></tr>
        <tr><td>Compliance Audit Prep</td><td>A</td><td>C</td><td>I</td><td>I</td><td>R</td></tr>
        <tr><td>Change Management</td><td>A</td><td>C</td><td>C</td><td>R</td><td>I</td></tr>
      </tbody>
    </table>
    <p style="font-size:0.9rem; color:var(--text-muted); margin-top:8px;">
      <strong>R</strong> = Responsible (does the work) | <strong>A</strong> = Accountable (final decision-maker) | <strong>C</strong> = Consulted (provides input) | <strong>I</strong> = Informed (kept in the loop)
    </p>
  `,

  // ==========================================
  // SECTION 2: AWS SECURITY
  // ==========================================

  v1c9: `
    <h3>AWS IAM Deep Dive</h3>
    <p>
      AWS Identity and Access Management (IAM) is the foundational security service in AWS. It controls who can access your AWS resources, what actions they can perform, and under what conditions. <strong>Getting IAM right is the single most important security task in AWS.</strong>
    </p>

    <h4>What is IAM?</h4>
    <p>IAM is a web service that helps you securely control access to AWS resources. You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources.</p>

    <div class="info-box">
      <div class="info-title">💡 The IAM Hierarchy</div>
      <p>Think of IAM as concentric circles of access:</p>
      <ol>
        <li><strong>Root Account</strong> — The account owner with <em>god-mode</em> access. Should be protected with MFA and ideally locked away</li>
        <li><strong>IAM Users</strong> — Individual people with their own credentials</li>
        <li><strong>IAM Groups</strong> — Collections of users with shared permissions</li>
        <li><strong>IAM Roles</strong> — Temporary credentials for AWS services, cross-account access, or federation</li>
        <li><strong>Service Accounts</strong> — Roles assumed by AWS services on your behalf</li>
      </ol>
    </div>

    <h4>IAM Users vs. Roles</h4>
    <table>
      <thead>
        <tr>
          <th>Aspect</th>
          <th>IAM User</th>
          <th>IAM Role</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Identity</td>
          <td>Long-term credentials (password + access keys)</td>
          <td>Temporary credentials via STS</td>
        </tr>
        <tr>
          <td>Assigned to</td>
          <td>A person or application</td>
          <td>An AWS service, instance, or external entity</td>
        </tr>
        <tr>
          <td>Credentials Duration</td>
          <td>Permanent until rotated</td>
          <td>1-12 hours (typically 1 hour)</td>
        </tr>
        <tr>
          <td>MFA Support</td>
          <td>Yes (recommended)</td>
          <td>N/A (uses temporary tokens)</td>
        </tr>
        <tr>
          <td>Use Case</td>
          <td>Human access to AWS console/CLI</td>
          <td>Service-to-service, cross-account, EC2 instances</td>
        </tr>
      </tbody>
    </table>

    <h4>IAM Policy Anatomy</h4>
    <p>IAM policies are JSON documents that define permissions. Every policy has this structure:</p>
    <pre><code>
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "OptionalStatementId",
      "Effect": "Allow | Deny",
      "Action": "s3:GetObject | iam:* | ec2:RunInstances",
      "Resource": "arn:aws:s3:::my-bucket/* | *",
      "Condition": {
        "IpAddress": {"aws:SourceIp": "10.0.0.0/24"},
        "DateLessThan": {"aws:CurrentTime": "2025-12-31T23:59:59Z"}
      }
    }
  ]
}
</code></pre>

    <h5>Key Policy Elements Explained</h5>
    <ul>
      <li><strong>Effect:</strong> Whether the statement allows or denies access (Deny always wins over Allow)</li>
      <li><strong>Action:</strong> The specific API operations (e.g., <code>s3:GetObject</code>, <code>ec2:*</code>, <code>iam:CreateUser</code>)</li>
      <li><strong>Resource:</strong>The ARN identifying which resources the policy applies to</li>
      <li><strong>Condition:</strong> Optional constraints (source IP, time of day, encryption requirement, etc.)</li>
    </ul>

    <div class="warning-box">
      <div class="warning-title">⚠️ Critical IAM Mistakes to Avoid</div>
      <ul>
        <li>Never use the root account for daily operations</li>
        <li>Never attach AdministratorAccess policy to user accounts in production</li>
        <li>Never leave access keys in source code (use AWS Secrets Manager or SSO)</li>
        <li>Never create IAM users without MFA</li>
        <li>Avoid wildcard (*) in Resource unless absolutely necessary</li>
      </ul>
    </div>

    <h4>IAM Best Practices Checklist</h4>
    <ol>
      <li>Enable MFA for all users, especially the root account</li>
      <li>Use IAM roles instead of long-term access keys</li>
      <li>Apply the principle of least privilege — start with no permissions and add only what's needed</li>
      <li>Use IAM Access Analyzer to identify resources shared externally</li>
      <li>Rotate credentials regularly (access keys every 90 days)</li>
      <li>Use AWS Organizations SCPs (Service Control Policies) for account-level guardrails</li>
      <li>Enable CloudTrail for all IAM actions</li>
      <li>Use permission boundaries for delegated administration</li>
    </ol>

    <h4>AWS IAM Access Analyzer</h4>
    <p>A powerful tool that identifies resources shared with external entities and provides findings on unused permissions.</p>
    <ul>
      <li><strong>External Access:</strong> Finds S3 buckets, IAM roles, KMS keys shared outside your account</li>
      <li><strong>Unused Access:</strong> Identifies permissions not used in the last 90 days — prime candidates for removal</li>
      <li><strong>Policy Generation:</strong> Generates least-privilege policies based on CloudTrail access logs</li>
    </ul>
  `,

  v1c10: `
    <h3>IAM Policies and Permissions</h3>
    <p>
      AWS IAM policies are the primary mechanism for controlling access to AWS resources. A deep understanding of policy types, evaluation logic, and advanced features is essential for cloud security.
    </p>

    <h4>Types of IAM Policies</h4>
    <table>
      <thead>
        <tr>
          <th>Policy Type</th>
          <th>Attached To</th>
          <th>Use Case</th>
          <th>Limitations</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>AWS Managed</strong></td>
          <td>Any IAM entity</td>
          <td>Predefined policies like <code>ViewAuditLogs</code>, <code>SecurityAudit</code></td>
          <td>Cannot modify; may be overly broad</td>
        </tr>
        <tr>
          <td><strong>Customer Managed</strong></td>
          <td>Any IAM entity</td>
          <td>Reusable policies across your organization</td>
          <td>You manage versions and updates</td>
        </tr>
        <tr>
          <td><strong>Inline</strong></td>
          <td>Single user/role/group</td>
          <td>Highly specific one-off permissions</td>
          <td>Not reusable; harder to audit at scale</td>
        </tr>
        <tr>
          <td><strong>Permission Boundary</strong></td>
          <td>User or Role</td>
          <td>Set maximum permission ceiling for delegated admins</td>
          <td>Only limits; doesn't grant permissions</td>
        </tr>
        <tr>
          <td><strong>Service Control Policy (SCP)</strong></td>
          <td>AWS Organization OU/Account</td>
          <td>Organization-wide guardrails (e.g., deny region, deny service)</td>
          <td>Does not grant permissions; only restricts</td>
        </tr>
        <tr>
          <td><strong>Session Policy</strong></td>
          <td>Role assumption</td>
          <td>Further restrict permissions during assumed-role sessions</td>
          <td>Only applicable via AssumeRole API</td>
        </tr>
        <tr>
          <td><strong>Resource-Based</strong></td>
          <td>Resource (S3 bucket policy, SQS policy, etc.)</td>
          <td>Grant cross-account or external access to specific resources</td>
          <td>Complex to manage at scale</td>
        </tr>
      </tbody>
    </table>

    <h4>Policy Evaluation Logic</h4>
    <p>AWS evaluates multiple policies in a specific order. Understanding this is crucial for debugging permission issues:</p>

    <ol>
      <li><strong>Explicit Deny always wins</strong> — If any policy denies an action, access is denied regardless of any Allow statements</li>
      <li><strong>Allow is required</strong> — At least one policy must explicitly Allow the action</li>
      <li><strong>Resource match required</strong> — The action must be allowed on the specific resource</li>
      <li><strong>Condition keys evaluated</strong> — Additional context-based constraints (IP, time, MFA, encryption)</li>
    </ol>

    <div class="callout">
      <div class="callout-icon">🧠</div>
      <div class="callout-content">
        <h4>The Three Rules of IAM Evaluation</h4>
        <p><strong>1.</strong> By default, all requests are <strong>denied</strong><br>
        <strong>2.</strong> An explicit <code>Allow</code> overrides the default deny<br>
        <strong>3.</strong> An explicit <code>Deny</code> overrides any <code>Allow</code></p>
        <p><em>Remember: Deny always wins.</em></p>
      </div>
    </div>

    <h4>Action and Resource ARN Patterns</h4>
    <table>
      <thead>
        <tr>
          <th>Service</th>
          <th>Action Pattern</th>
          <th>Resource ARN Format</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>S3</td><td><code>s3:GetObject</code>, <code>s3:PutObject</code></td><td><code>arn:aws:s3:::bucket-name/*</code></td></tr>
        <tr><td>EC2</td><td><code>ec2:RunInstances</code>, <code>ec2:TerminateInstances</code></td><td><code>arn:aws:ec2:region:account:instance/*</code></td></tr>
        <tr><td>Lambda</td><td><code>lambda:InvokeFunction</code>, <code>lambda:CreateFunction</code></td><td><code>arn:aws:lambda:region:account:function:name</code></td></tr>
        <tr><td>SNS</td><td><code>sns:Publish</code>, <code>sns:Subscribe</code></td><td><code>arn:aws:sns:region:account:topic-name</code></td></tr>
        <tr><td>RDS</td><td><code>rds:DescribeDBInstances</code>, <code>rds:DeleteDBInstance</code></td><td><code>arn:aws:rds:region:account:db:instance-name</code></td></tr>
        <tr><td>IAM</td><td><code>iam:CreateUser</code>, <code>iam:PutUserPolicy</code></td><td><code>arn:aws:iam::account:role/role-name</code></td></tr>
      </tbody>
    </table>

    <h4>Condition Keys — Granular Control</h4>
    <p>Condition keys let you add context-based restrictions to policies:</p>
    <table>
      <thead>
        <tr>
          <th>Condition Key</th>
          <th>Values</th>
          <th>Use Case</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>aws:SourceIp</td><td>IP ranges</td><td>Restrict access to corporate network</td></tr>
        <tr><td>aws:MultiFactorAuthPresent</td><td>true/false</td><td>Require MFA for sensitive actions</td></tr>
        <tr><td>aws:RequestedRegion</td><td>us-east-1, eu-west-1</td><td>Restrict which regions can be used</td></tr>
        <tr><td>aws:SecureTransport</td><td>true/false</td><td>Enforce HTTPS only</td></tr>
        <tr><td>aws:PrincipalTag/&lt;key&gt;</td><td>Tag values</td><td>Control access based on user tags</td></tr>
        <tr><td>kms:EncryptionContext:&lt;key&gt;</td><td>String values</td><td>Require encryption context for KMS</td></tr>
        <tr><td>s3:x-amz-server-side-encryption</td><td>AES256, aws:kms</td><td>Require encryption on PUT</td></tr>
      </tbody>
    </table>

    <h5>Example: MFA-Required Policy for Sensitive Actions</h5>
    <pre><code>
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "DenyDeleteUnlessMFA",
      "Effect": "Deny",
      "Action": [
        "iam:Delete*",
        "ec2:Terminate*",
        "s3:DeleteBucket"
      ],
      "Resource": "*",
      "Condition": {
        "BoolIfExists": {
          "aws:MultiFactorAuthPresent": "false"
        }
      }
    }
  ]
}
</code></pre>

    <h4>Policy Testing with IAM Policy Simulator</h4>
    <p>AWS provides the <strong>IAM Policy Simulator</strong> in the console to test policies before deployment:</p>
    <ul>
      <li>Select a user, role, or group</li>
      <li>Choose an action and resource</li>
      <li>Simulator shows ALL matching policies and the final decision</li>
      <li>Essential for debugging complex permission setups</li>
    </ul>

    <div class="tip-box">
      <div class="tip-title">💡 Pro Tip: SCPs for Guardrails</div>
      <p>Use Service Control Policies at the <strong>Organization level</strong> to enforce account-wide restrictions such as:</p>
      <ul>
        <li>Deny creation of resources outside approved regions</li>
        <li>Block disabling CloudTrail</li>
        <li>Prevent root account usage</li>
        <li>Enforce encryption on specific services</li>
      </ul>
    </div>
  `,

  v1c11: `
    <h3>AWS Identity Center (SSO)</h3>
    <p>
      AWS Identity Center (formerly AWS SSO) is the centralized identity management service for AWS Organizations. It enables single sign-on access to AWS accounts, cloud applications, and custom applications.
    </p>

    <h4>What Problem Does Identity Center Solve?</h4>
    <p>Without Identity Center, each AWS account requires separate IAM users and credentials. In a multi-account environment (common in enterprises), this creates:</p>
    <ul>
      <li>Credentials sprawl — users have separate passwords for each account</li>
      <li>Inconsistent access management across accounts</li>
      <li>Difficult compliance tracking</li>
      <li>Increased attack surface from multiple credential sets</li>
    </ul>

    <h4>How Identity Center Works</h4>
    <ol>
      <li><strong>Central Directory:</strong> Uses AWS Managed Microsoft AD, AD Connector, or SAML 2.0 federation to connect to your identity source (on-prem AD or other IdP)</li>
      <li><strong>Permission Sets:</strong> Define IAM policies that determine what users/roles can do in target accounts (replaces the need for IAM users in each account)</li>
      <li><strong>Account Assignments:</strong> Map users/groups to specific AWS accounts with specific permission sets</li>
      <li><strong>SSO Portal:</strong> Users access all assigned accounts through a single web portal at <code>myapps.aws.amazon.com</code></li>
    </ol>

    <h4>Permission Sets</h4>
    <p>Permission sets are essentially IAM policies packaged for Identity Center:</p>
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Built-in</td><td>Pre-defined permission levels</td><td>AdministratorAccess, ReadOnlyAccess, PowerUserAccess</td></tr>
        <tr><td>Custom</td><td>Your own fine-grained policies</td><td>S3-Access-Only, Billing-Viewer</td></tr>
        <tr><td>Session Duration</td><td>Configurable session length</td><td>1 hour (default) up to 12 hours</td></tr>
      </tbody>
    </table>

    <h4>Identity Center Security Best Practices</h4>
    <ul>
      <li>Federation with corporate identity provider (Azure AD, Okta, etc.) — <strong>eliminate standalone passwords</strong></li>
      <li>Enable MFA at the identity provider level (not just at AWS level)</li>
      <li>Use permission set assignment through groups, not individual users</li>
      <li>Implement account-level session duration controls</li>
      <li>Monitor sign-in events with CloudTrail</li>
      <li>Use application assignments for non-AWS SaaS apps alongside AWS access</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Identity Center vs. Cross-Account Role</div>
      <p><strong>Both</strong> enable cross-account access, but with key differences:</p>
      <table>
        <thead>
          <tr><th>Feature</th><th>Identity Center</th><th>Cross-Account Role</th></tr>
        </thead>
        <tbody>
          <tr><td>Setup Complexity</td><td>Low (centralized)</td><td>Higher (per-account roles)</td></tr>
          <tr><td>User Experience</td><td>Single portal, SSO</td><td>Switch role in console or assume via CLI</td></tr>
          <tr><td>Scalability</td><td>Excellent (100s of accounts)</td><td>Complex at scale</td></tr>
          <tr><td>Fine-Grained Control</td><td>Permission sets + account assignments</td><td>Individual role trust policies</td></tr>
          <tr><td>Best For</td><td>Enterprises with AWS Organizations</td><td>Simple 2-3 account setups or automation</td></tr>
        </tbody>
      </table>
    </div>
  `,

  v1c12: `
    <h3>AWS KMS and Encryption</h3>
    <p>
      AWS Key Management Service (KMS) is the encryption engine at the heart of AWS security. Understanding KMS is essential because encryption protects data confidentiality, and KMS manages the keys that make it all work.
    </p>

    <h4>What is KMS?</h4>
    <p>AWS KMS is a managed service that makes it easy to create and control the cryptographic keys used to encrypt your data. KMS uses <strong>Hardware Security Modules (HSMs)</strong> — FIPS 140-2 validated hardware — to protect key material.</p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Envelope Encryption</div>
      <p>AWS uses <strong>envelope encryption</strong> to protect data efficiently:</p>
      <ol>
        <li>Generate a <strong>Data Encryption Key (DEK)</strong> to encrypt your data</li>
        <li>Encrypt the DEK itself with a <strong>Master Key (CMK)</strong> stored in KMS</li>
        <li>Store the encrypted DEK alongside your encrypted data</li>
        <li>When decrypting, send the encrypted DEK to KMS, which decrypts it using the CMK</li>
      </ol>
      <p><strong>Why?</strong> Encrypting each piece of data directly with a master key would exhaust the key's cryptographic limits. Instead, lightweight DEKs encrypt the data, and the master key only protects the DEK. This scales to billions of objects.</p>
    </div>

    <h4>Types of KMS Keys</h4>
    <table>
      <thead>
        <tr>
          <th>Key Type</th>
          <th>Managed By</th>
          <th>Use Case</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>AWS Managed Keys</strong></td>
          <td>AWS (automatic)</td>
          <td>Default encryption for services like S3, EBS, RDS</td>
          <td>Free</td>
        </tr>
        <tr>
          <td><strong>Customer Managed Keys (CMK)</strong></td>
          <td>You (with KMS)</td>
          <td>Granular control, custom key policies, cross-account</td>
          <td>$1/month per key + API calls</td>
        </tr>
        <tr>
          <td><strong>Customer Managed Keys (Custom Key Store)</strong></td>
          <td>You (in CloudHSM)</td>
          <td>Full FIPS 140-2 Level 3 compliance, single-tenant HSM</td>
          <td>CloudHSM monthly fee + KMS usage</td>
        </tr>
      </tbody>
    </table>

    <h4>Key Policy vs. IAM Policy</h4>
    <p>A common source of confusion: KMS keys have their <strong>own resource-based policy</strong> separate from IAM policies. Both must allow access:</p>
    <pre><code>
# KMS Key Policy (must be attached to the key)
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "Allow IAM Role to use key",
    "Effect": "Allow",
    "Principal": {
      "AWS": "arn:aws:iam::111122223333:role/my-app-role"
    },
    "Action": [
      "kms:Encrypt",
      "kms:Decrypt",
      "kms:GenerateDataKey"
    ],
    "Resource": "*"
  }]
}

// Even with this key policy, the IAM role must ALSO have
// a permission policy allowing KMS actions.
// BOTH must allow — KMS combines them with AND logic.
</code></pre>

    <h4>KMS Key Rotation</h4>
    <ul>
      <li><strong>Automatic Rotation:</strong> Available for CMKs, rotates key material every year. Old material retained for decryption of previously encrypted data</li>
      <li><strong>Manual Rotation:</strong> You create a new key and update applications. Provides full control</li>
      <li><strong>Best Practice:</strong> Enable automatic rotation for all CMKs. For compliance, enable annually</li>
    </ul>

    <h4>Encryption Across AWS Services</h4>
    <table>
      <thead>
        <tr>
          <th>Service</th>
          <th>At-Rest Encryption</th>
          <th>In-Transit Encryption</th>
          <th>KMS Integration</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>S3</td><td>AES-256 (SSE-S3) or KMS (SSE-KMS)</td><td>TLS 1.2+</td><td>SSE-KMS with customer CMK</td></tr>
        <tr><td>EBS</td><td>AES-256 via EBS encryption</td><td>N/A (server-side)</td><td>Encrypted volume with KMS key</td></tr>
        <tr><td>RDS</td><td>AES-256 via KMS</td><td>SSL/TLS</td><td>Encrypted DB instance with KMS</td></tr>
        <tr><td>Lambda</td><td>Environment variables encrypted</td><td>TLS</td><td>KMS key for env var encryption</td></tr>
        <tr><td>SQS/SNS</td><td>Server-side encryption with KMS</td><td>TLS</td><td>SSE-KMS supported</td></tr>
        <tr><td>EFS</td><td>AES-256</td><td>TLS 1.2</td><td>KMS-managed keys</td></tr>
      </tbody>
    </table>

    <div class="warning-box">
      <div class="warning-title">⚠️ Common KMS Pitfalls</div>
      <ul>
        <li><strong>Key deletion:</strong> Keys scheduled for deletion have a 7-30 day waiting period. Data encrypted with a deleted key is <strong>permanently unrecoverable</strong></li>
        <li><strong>Cross-account access:</strong> Key policy must explicitly grant access to external accounts</li>
        <li><strong>API rate limits:</strong> KMS has throttling — batch operations may hit <code>ThrottlingException</code>. Request a quota increase proactively</li>
        <li><strong>Import key material:</strong> You can import your own key material (Bring Your Own Key), but you cannot export AWS-managed key material</li>
      </ul>
    </div>
  `,

  v1c13: `
    <h3>AWS VPC Security</h3>
    <p>
      A Virtual Private Cloud (VPC) is your private, isolated section of the AWS Cloud. VPC security is foundational because <strong>every AWS resource lives in a VPC</strong>. A misconfigured VPC can expose your entire environment.
    </p>

    <h4>VPC Fundamentals</h4>
    <p>When you create a VPC, you define:</p>
    <ul>
      <li><strong>CIDR Block:</strong> IP address range (e.g., <code>10.0.0.0/16</code> = 65,536 addresses)</li>
      <li><strong>Subnets:</strong> Subdivisions within the VPC's CIDR range</li>
      <li><strong>Route Tables:</strong> Determine where network traffic is directed</li>
      <li><strong>Internet Gateway (IGW):</strong> Enables VPC to communicate with the internet</li>
      <li><strong>NAT Gateway:</strong> Allows private subnet resources to access the internet (outbound only)</li>
    </ul>

    <h4>Subnet Types and Security</h4>
    <table>
      <thead>
        <tr>
          <th>Subnet Type</th>
          <th>Internet Access</th>
          <th>Use Case</th>
          <th>Security Level</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Public Subnet</strong></td>
          <td>Direct (via Internet Gateway)</td>
          <td>Web servers, bastion hosts, load balancers</td>
          <td>Lower — resources have public IPs</td>
        </tr>
        <tr>
          <td><strong>Private Subnet</strong></td>
          <td>Outbound only (via NAT Gateway)</td>
          <td>Application servers, databases</td>
          <td>Higher — no direct internet access</td>
        </tr>
        <tr>
          <td><strong>Isolated Subnet</strong></td>
          <td>None</td>
          <td>Highly sensitive resources, data processing</td>
          <td>Highest — fully air-gapped</td>
        </tr>
      </tbody>
    </table>

    <h4>Security Groups (SGs) — Stateful Firewalls</h4>
    <p>Security Groups act as virtual firewalls for your EC2 instances and other ENI-attached resources.</p>
    <div class="key-box">
      <div class="key-title">🔑 Key Properties of Security Groups</div>
      <ul>
        <li><strong>Stateful:</strong> If you allow inbound traffic, the response is automatically allowed outbound</li>
        <li><strong>Default Deny:</strong> All inbound traffic is denied unless explicitly allowed by rules</li>
        <li><strong>Default Allow:</strong> All outbound traffic is allowed (can be restricted)</li>
        <li><strong>Attach to Multiple Resources:</strong> One SG can be attached to many instances</li>
        <li><strong>Reference Other SGs:</strong> Rules can reference other security groups (useful for microsegmentation)</li>
      </ul>
    </div>

    <h5>Security Group Best Practices</h5>
    <ol>
      <li><strong>Default SG:</strong> Replace it, don't use it for production resources</li>
      <li><strong>Principle of Least Privilege:</strong> Only allow specific IPs, ports, and protocols</li>
      <li><strong>Never use 0.0.0.0/0:</strong> Except for public-facing load balancers — and even then, restrict to specific ports</li>
      <li><strong>Use separate SGs per tier:</strong> Web tier SG, App tier SG, DB tier SG — allow only necessary cross-tier traffic</li>
      <li><strong>Audit SGs regularly:</strong> Use AWS Security Hub or tools like Prowler</li>
    </ol>

    <h4>Network ACLs (NACLs) — Stateless Firewalls</h4>
    <p>While Security Groups operate at the instance level, NACLs operate at the <strong>subnet level</strong> and provide an additional layer of defense.</p>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Security Group</th>
          <th>NACL</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Scope</td><td>Instance (ENI)</td><td>Subnet</td></tr>
        <tr><td>Statefulness</td><td>Stateful (auto-allow responses)</td><td>Stateless (must define both inbound and outbound rules)</td></tr>
        <tr><td>Default</td><td>Deny all inbound, allow all outbound</td><td>Allow all inbound and outbound</td></tr>
        <tr><td>Rule Evaluation</td><td>All rules evaluated, all allow</td><td>Evaluated by rule number, first match wins</td></tr>
        <tr><td>Explicit Deny</td><td>Not needed (implicit deny)</td><td>Can explicitly deny specific IPs/ports</td></tr>
      </tbody>
    </table>

    <div class="warning-box">
      <div class="warning-title">⚠️ Critical: NACL Rule Ordering</div>
      <p>NACL rules are evaluated in <strong>numerical order from lowest to highest</strong>. The first matching rule wins. If Rule 100 allows <code>0.0.0.0/0</code> on port 22, Rule 200 denying <code>0.0.0.0/0</code> on port 22 will <strong>never be reached</strong>. Always number deny rules with lower numbers than allow rules.</p>
    </div>

    <h4>VPC Security Patterns</h4>
    <h5>1. Three-Tier Architecture</h5>
    <pre><code>
Internet
   │
   ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Public      │────▶│  Private    │────▶│  Private     │
│  Subnet      │     │  Subnet     │     │  (Database)   │
│  (ALB, WAF)  │     │  (App)      │     │  Subnet       │
└─────────────┘     └─────────────┘     └─────────────┘
  SG: 80,443 in     SG: only ALB     SG: only App SG
  SG: SSH from      SG: DB port      SG: DB port only
    bastion only    out: none        out: none
</code></pre>

    <h5>2. VPC Flow Logs for Monitoring</h5>
    <p>VPC Flow Logs capture information about IP traffic going to and from network interfaces. Enable them on <strong>all</strong> production VPCs:</p>
    <ul>
      <li>Capture: Accept, Reject, or All traffic</li>
      <li>Destination: CloudWatch Logs or S3</li>
      <li>Retention: At least 90 days for incident investigation</li>
      <li>Use case: Detect lateral movement, data exfiltration, brute force</li>
    </ul>

    <h5>3. VPC Peering & Transit Gateway</h5>
    <ul>
      <li><strong>VPC Peering:</strong> Direct connection between two VPCs — no internet transit, no encryption by default</li>
      <li><strong>Transit Gateway:</strong> Hub-and-spoke model connecting many VPCs and on-prem networks</li>
      <li><strong>Security Consideration:</strong> Each side's security groups and NACLs still apply — peering doesn't bypass security controls</li>
    </ul>
  `,

  v1c14: `
    <h3>AWS S3 Security</h3>
    <p>
      Amazon S3 (Simple Storage Service) is one of the most widely used AWS services — and one of the most frequently <strong>misconfigured</strong>. S3 buckets have been responsible for some of the largest data breaches in history.
    </p>

    <h4>S3 Security Fundamentals</h4>
    <p>S3 has <strong>four layers of access control</strong>:</p>
    <ol>
      <li><strong>IAM Policies:</strong> Control which users/roles can call S3 APIs</li>
      <li><strong>Bucket Policies:</strong> Resource-based policies controlling access at the bucket level</li>
      <li><strong>Access Control Lists (ACLs):</strong> Legacy, object-level access grants — <strong>avoid</strong></li>
      <li><strong>S3 Block Public Access:</strong> Account-level and bucket-level settings to prevent public access</li>
    </ol>

    <div class="warning-box">
      <div class="warning-title">⚠️ The Four Public Access Settings</div>
      <p>S3 Block Public Access has four settings that should ALL be enabled at the account level unless explicitly overridden:</p>
      <ul>
        <li><strong>BlockPublicAcls:</strong> Ignores ACLs that grant public access</li>
        <li><strong>IgnorePublicAcls:</strong> Prevents PUT requests with public ACLs</li>
        <li><strong>BlockPublicPolicy:</strong> Blocks bucket policies that grant public access</li>
        <li><strong>RestrictPublicBuckets:</strong> Limits public access to buckets with public policies</li>
      </ul>
    </div>

    <h4>Encryption Options</h4>
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Server-Side?</th>
          <th>Key Management</th>
          <th>How to Enforce</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>SSE-S3</strong></td>
          <td>Yes</td>
          <td>AWS managed keys (S3 managed)</td>
          <td>Default encryption on bucket</td>
        </tr>
        <tr>
          <td><strong>SSE-KMS</strong></td>
          <td>Yes</td>
          <td>Customer managed KMS keys</td>
          <td>Bucket policy + KMS key policy</td>
        </tr>
        <tr>
          <td><strong>SSE-C</strong></td>
          <td>Yes</td>
          <td>Customer provided keys</td>
          <td>Pass key with each API call</td>
        </tr>
        <tr>
          <td><strong>Client-Side</strong></td>
          <td>No</td>
          <td>You encrypt before upload</td>
          <td>Application code/AWS Encryption SDK</td>
        </tr>
      </tbody>
    </table>

    <h4>Secure Bucket Configuration Checklist</h4>
    <ol>
      <li>Enable <strong>S3 Block Public Access</strong> at the account level</li>
      <li>Enable <strong>default encryption</strong> (SSE-S3 or SSE-KMS)</li>
      <li>Enable <strong>versioning</strong> — protects against accidental deletion and enables data recovery</li>
      <li>Enable <strong>MFA Delete</strong> — requires MFA to delete object versions (root account only)</li>
      <li>Enable <strong>access logging</strong> — logs all access requests to a separate bucket</li>
      <li>Remove <strong>ACLs</strong> — use bucket policies and IAM instead</li>
      <li>Use <strong>S3 Object Lock</strong> for compliance (WORM — Write Once, Read Many) requirements</li>
      <li>Configure <strong>lifecycle policies</strong> to auto-transition to cheaper tiers or expire</li>
      <li>Enable <strong>event notifications</strong> for monitoring access patterns</li>
    </ol>

    <h4>Common S3 Misconfigurations</h4>
    <table>
      <thead>
        <tr>
          <th>Misconfiguration</th>
          <th>Risk</th>
          <th>Fix</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bucket ACL allows "Everyone"</td>
          <td>Public data access</td>
          <td>Enable Block Public Access, use IAM/bucket policies</td>
        </tr>
        <tr>
          <td>No encryption enabled</td>
          <td>Data readable if storage compromised</td>
          <td>Enable default encryption (SSE-S3 or SSE-KMS)</td>
        </tr>
        <tr>
          <td>Cross-account access misconfigured</td>
          <td>Unintended cross-account data sharing</td>
          <td>Explicitly specify account ARNs in bucket policies</td>
        </tr>
        <tr>
          <td>Logging not enabled</td>
          <td>No audit trail for data access</td>
          <td>Enable server access logging</td>
        </tr>
        <tr>
          <td>Outdated bucket policy with wildcards</td>
          <td>Excessive permissions</td>
          <td>Review and scope bucket policies to specific principals</td>
        </tr>
      </tbody>
    </table>

    <h5>Example: Secure S3 Bucket Policy</h5>
    <pre><code>
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "DenyUnencryptedUploads",
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:PutObject",
      "Resource": "arn:aws:s3:::my-secure-bucket/*",
      "Condition": {
        "StringNotEquals": {
          "s3:x-amz-server-side-encryption": "aws:kms"
        }
      }
    },
    {
      "Sid": "DenyInsecureConnections",
      "Effect": "Deny",
      "Principal": "*",
      "Action": "s3:*",
      "Resource": [
        "arn:aws:s3:::my-secure-bucket",
        "arn:aws:s3:::my-secure-bucket/*"
      ],
      "Condition": {
        "Bool": {
          "aws:SecureTransport": "false"
        }
      }
    }
  ]
}
</code></pre>
    <p>This policy does two things: <strong>denies uploads without KMS encryption</strong> and <strong>denies any connection that's not HTTPS</strong>.</p>
  `,

  v1c15: `
    <h3>AWS EC2 Security</h3>
    <p>
      Amazon Elastic Compute Cloud (EC2) provides scalable computing capacity in the AWS cloud. EC2 instances are among the most commonly compromised cloud resources, making security hardening absolutely critical.
    </p>

    <h4>EC2 Security Layers</h4>
    <table>
      <thead>
        <tr>
          <th>Layer</th>
          <th>Security Mechanism</th>
          <th>Controls</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Instance Level</td>
          <td>Security Groups</td>
          <td>Inbound/outbound traffic rules</td>
        </tr>
        <tr>
          <td>Network Level</td>
          <td>VPC, Subnets, NACLs, VPC Flow Logs</td>
          <td>Network isolation, traffic monitoring</td>
        </tr>
        <tr>
          <td>Operating System</td>
          <td>AMI hardening, patching, SELinux/AppArmor</td>
          <td>Host firewall, minimal packages, CIS benchmarks</td>
        </tr>
        <tr>
          <td>Application</td>
          <td>Application-level controls</td>
          <td>Input validation, auth, WAF</td>
        </tr>
        <tr>
          <td>Data</td>
          <td>Encryption (EBS, SSM, KMS)</td>
          <td>Encrypted volumes, secrets management</td>
        </tr>
      </tbody>
    </table>

    <h4>EC2 Instance Metadata Service (IMDS)</h4>
    <div class="key-box">
      <div class="key-title">🔑 Key Concept: IMDS Security</div>
      <p>Every EC2 instance has access to the Instance Metadata Service at <code>169.254.169.254</code>. This service provides temporary AWS credentials (access key, secret key, session token) via IAM roles attached to the instance. This was the attack vector in the <strong>Capital One breach</strong>.</p>
      <ul>
        <li><strong>IMDSv1:</strong> Simple HTTP PUT — no authentication. Vulnerable to SSRF attacks.</li>
        <li><strong>IMDSv2:</strong> Requires session tokens via a PUT hop-first request. Much more secure.</li>
      </ul>
      <p><strong>Best Practice:</strong> Always enforce IMDSv2. You can configure this at the launch template or launch configuration level.</p>
    </div>

    <h5>Enforcing IMDSv2</h5>
    <pre><code>
# AWS CLI to create a launch template with IMDSv2 required
aws ec2 create-launch-template \
  --launch-template-name secure-template \
  --version-description "IMDSv2 required" \
  --launch-template-data '{
    "MetadataOptions": {
      "HttpTokens": "required",
      "HttpPutResponseHopLimit": 2,
      "HttpEndpoint": "enabled"
    }
  }'
</code></pre>

    <h4>EC2 Security Hardening Checklist</h4>
    <ol>
      <li>Use the <strong>latest generation</strong> instance types (better performance and security features)</li>
      <li>Use <strong>Amazon Linux 2023</strong>, Ubuntu 22.04 LTS, or similar well-maintained AMIs</li>
      <li>Disable password authentication; use <strong>SSH key pairs</strong> or <strong>SSM Session Manager</strong></li>
      <li>Configure security groups with <strong>least privilege</strong> — never open SSH/RDP to 0.0.0.0/0</li>
      <li>Enable <strong>detailed monitoring</strong> (1-minute granularity)</li>
      <li>Use <strong>encrypted EBS volumes</strong> with KMS customer-managed keys</li>
      <li>Apply <strong>OS-level hardening</strong> (CIS Benchmark): disable unnecessary services, configure firewall, enable audit logging</li>
      <li>Install <strong>AWS Systems Manager Agent</strong> for automated patching and management</li>
      <li>Enable <strong>VPC Flow Logs</strong> for network traffic monitoring</li>
      <li>Use <strong>GuardDuty</strong> for threat detection on EC2 workloads</li>
      <li>Implement <strong>auto-scaling with launch templates</strong> (not manual instances)</li>
      <li>Tag all instances consistently for cost tracking and access control</li>
    </ol>

    <h4>Bastion Hosts vs. AWS Systems Manager</h4>
    <p>Traditional approach:</p>
    <pre><code>
  Developer SSH → Bastion Host → EC2 Instance
  (Requires VPN, key management, bastion hardening)
</code></pre>
    <p>Modern approach (preferred):</p>
    <pre><code>
  Developer → AWS Console/CLI → SSM Session Manager → EC2 Instance
  (No SSH keys, no bastion, fully audited, uses IAM auth)
</code></pre>

    <div class="info-box">
      <div class="info-title">💡 Recommendation: Use SSM Session Manager</div>
      <p>SSH uses key pairs that must be managed, rotated, and protected. <strong>AWS Systems Manager Session Manager</strong> eliminates SSH entirely:</p>
      <ul>
        <li>Uses IAM authentication instead of SSH keys</li>
        <li>All sessions are logged automatically to CloudWatch Logs and/or S3</li>
        <li>No need for bastion hosts or VPN tunnels</li>
        <li>Works with IAM policies for granular access control</li>
      </ul>
    </div>
  `,

  v1c16: `
    <h3>AWS Lambda Security</h3>
    <p>
      AWS Lambda is a serverless compute service that runs your code in response to events. While Lambda reduces infrastructure management overhead, it introduces unique security considerations.
    </p>

    <h4>Lambda Security Model</h4>
    <p>Each Lambda function has its own security context:</p>
    <ul>
      <li><strong>Execution Role:</strong> IAM role that Lambda assumes when executing your function code</li>
      <li><strong>Resource Policy:</strong> Controls which services/accounts can invoke the function</li>
      <li><strong>Environment Variables:</strong> Stored encrypted with KMS; accessible by any code running in the function</li>
      <li><strong>VPC Configuration:</strong> Functions can run inside your VPC for private resource access</li>
      <li><strong>Layers:</strong> Reusable dependencies that run with your function</li>
    </ul>

    <h4>Common Lambda Security Pitfalls</h4>
    <div class="warning-box">
      <div class="warning-title">⚠️ Lambda Anti-Patterns</div>
      <ul>
        <li><strong>Overprivileged execution roles:</strong> Using <code>AdministratorAccess</code> instead of scoped permissions</li>
        <li><strong>Secrets in environment variables:</strong> Plain text secrets visible in console (use Lambda Extensions + Secrets Manager)</li>
        <li><strong>No timeout configured:</strong> Can lead to resource exhaustion and unexpected costs</li>
        <li><strong>Publicly accessible functions:</strong> Invoking Lambda from API Gateway without authentication</li>
        <li><strong>Insecure dependencies:</strong> Outdated or malicious packages in deployment packages/layers</li>
      </ul>
    </div>

    <h4>Lambda Security Best Practices</h4>
    <ol>
      <li><strong>Least privilege execution role:</strong> Only grant permissions for the specific services and actions your function needs</li>
      <li><strong>Use managed runtimes:</strong> AWS manages the runtime; bring-your-own runtimes require more security attention</li>
      <li><strong>Secure environment variables:</strong> Use AWS Lambda Extensions to fetch secrets from Secrets Manager at runtime</li>
      <li><strong>Enable code signing:</strong> Use AWS Signer to ensure only trusted, untampered code runs in production</li>
      <li><strong>Use VPC endpoints:</strong> Keep Lambda-to-AWS traffic within the AWS network</li>
      <li><strong>Enable X-Ray tracing:</strong> For security observability and debugging</li>
      <li><strong>Implement concurrency limits:</strong> Prevent resource exhaustion attacks</li>
      <li><strong>Use ARM64 architecture:</strong> 20% cheaper and has smaller attack surface than x86</li>
    </ol>

    <h5>Cold Start Security Considerations</h5>
    <p>Lambda's "cold start" initialization creates unique security implications:</p>
    <ul>
      <li>Environment variables are decrypted once at initialization — stored in memory</li>
      <li>Temporary files created during initialization persist across warm invocations</li>
      <li><strong>Best practice:</strong> Never write sensitive data to <code>/tmp</code>; clear it between invocations</li>
    </ul>

    <div class="callout">
      <div class="callout-icon">🏗️</div>
      <div class="callout-content">
        <h4>Code Signing Example</h4>
        <p>Lambda code signing uses a signing profile with a trusted publisher:</p>
        <pre><code>
# Create a code signing configuration
aws lambda create-code-signing-config \
  --allowed-publishers SigningProfileVersionArns=arn:aws:signer:us-east-1:123456789:signing-profile:my-profile:1 \
  --code-signing-policies '{"UntrustedArtifactOnDeployment":"Enforce"}'
</code></pre>
        <p>This ensures <strong>only signed, verified code</strong> can be deployed to your production Lambda functions.</p>
      </div>
    </div>
  `,

  v1c17: `
    <h3>AWS CloudTrail</h3>
    <p>
      AWS CloudTrail is the <strong>audit backbone</strong> of your AWS environment. It records API calls and account activity across your AWS infrastructure, providing a comprehensive history of who did what, when, and from where.
    </p>

    <h4>What CloudTrail Captures</h4>
    <ul>
      <li><strong>Management Events:</strong> Control plane operations (CreateBucket, DeleteInstance, AttachRolePolicy)</li>
      <li><strong>Data Events:</strong> Data plane operations (S3 GetObject, Lambda Invoke) — <em>must be explicitly enabled</em></li>
      <li><strong>CloudTrail Insights:</strong> Detects unusual patterns (e.g., spike in TerminateInstances)</li>
    </ul>

    <h4>CloudTrail Configuration Best Practices</h4>
    <ol>
      <li><strong>Multi-region trail:</strong> Always create a trail that applies to <strong>all regions</strong>, even if you only deploy in one. Attackers may use other regions.</li>
      <li><strong>S3 bucket with MFA delete:</strong> Store logs in S3 with versioning and MFA delete to prevent tampering</li>
      <li><strong>CloudWatch Logs integration:</strong> Send CloudTrail events to CloudWatch for real-time monitoring and alerting</li>
      <li><strong>Enable log file validation:</strong> Uses SHA-256 hashing to detect log tampering</li>
      <li><strong>Data events:</strong> Enable for sensitive resources (S3 buckets with PII, Lambda functions)</li>
    </ol>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Immutable Audit Trail</div>
      <p>Your CloudTrail logs are <strong>legal evidence</strong>. During a security incident, attackers may try to delete or modify logs. Protect them with:</p>
      <ul>
        <li>S3 Object Lock (WORM compliance mode)</li>
        <li>Multi-region trail (harder to destroy completely)</li>
        <li>Duplicate logs to a separate "security" account</li>
        <li>Enable log file validation (cryptographic proof of integrity)</li>
      </ul>
    </div>

    <h4>CloudTrail Event Structure</h4>
    <p>Each CloudTrail event is a JSON document:</p>
    <pre><code>
{
  "eventVersion": "1.08",
  "userIdentity": {
    "type": "AssumedRole",
    "arn": "arn:aws:iam::123456789:role/admin"
  },
  "eventTime": "2024-01-15T10:30:00Z",
  "eventSource": "s3.amazonaws.com",
  "eventName": "PutObject",
  "awsRegion": "us-east-1",
  "sourceIPAddress": "203.0.113.50",
  "requestParameters": {
    "bucketName": "sensitive-data-bucket"
  }
}
</code></pre>

    <h4>Detecting Suspicious Activity with CloudTrail</h4>
    <table>
      <thead>
        <tr>
          <th>Suspicious Activity</th>
          <th>CloudTrail Event to Monitor</th>
          <th>Response</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Root account usage</td>
          <td><code>ConsoleLogin</code> with <code>additionalEventData.RootUserUsage: "Yes"</code></td>
          <td>Immediate alert to security team</td>
        </tr>
        <tr><td>IAM policy changes</td><td><code>PutUserPolicy</code>, <code>AttachRolePolicy</code></td><td>High priority alert</td></tr>
        <tr><td>CloudTrail disabled</td><td><code>StopLogging</code></td><td>Critical alert — possible attacker covering tracks</td></tr>
        <tr><td>Console login from unusual location</td><td><code>ConsoleLogin</code> with new source IP</td><td>Verify with user, trigger MFA challenge</td></tr>
        <tr><td>Mass data download</td><td>Multiple <code>GetObject</code> from S3</td><td>Check if authorized; possible data exfiltration</td></tr>
        <tr><td>Security group modification</td><td><code>AuthorizeSecurityGroupIngress</code></td><td>Verify legitimacy</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 CloudTrail Lake</div>
      <p><strong>CloudTrail Lake</strong> allows you to run SQL queries directly on your CloudTrail events without setting up a data lake. Example use cases:</p>
      <ul>
        <li>Find all S3 buckets made public in the last 30 days</li>
        <li>Identify all users who logged in without MFA</li>
        <li>Detect API calls from IP addresses in threat intelligence feeds</li>
      </ul>
    </div>
  `,

  v1c18: `
    <h3>AWS GuardDuty</h3>
    <p>
      Amazon GuardDuty is AWS's <strong>intelligent threat detection</strong> service. It continuously monitors your AWS accounts and workloads for malicious activity and unauthorized behavior using machine learning, anomaly detection, and integrated threat intelligence.
    </p>

    <div class="info-box">
      <div class="info-title">💡 How GuardDuty Works</div>
      <p>GuardDuty analyzes data from multiple sources without deploying any agents or software:</p>
      <ul>
        <li><strong>CloudTrail Events:</strong> Detects unusual API calls, reconnaissance, and privilege escalation</li>
        <li><strong>VPC Flow Logs:</strong> Identifies anomalous network traffic patterns (e.g., communication with known C2 servers)</li>
        <li><strong>DNS Logs:</strong> Detects DNS query patterns associated with crypto miners, malware, and data exfiltration</li>
      </ul>
      <p>All analysis is performed by AWS in the background — there's no performance impact on your workloads.</p>
    </div>

    <h5>GuardDuty Finding Types</h5>
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>What It Detects</th>
          <th>Severity</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Reconnaissance</strong></td>
          <td>Unusual API activity, port scanning, vulnerability probing</td>
          <td>Low to Medium</td>
          <td><code>Recon:EC2/PortProbeUnprotectedPort</code></td>
        </tr>
        <tr>
          <td><strong>Instance Compromise</strong></td>
          <td>Cryptomining, malware communication, backdoor access</td>
          <td>Medium to High</td>
          <td><code>Trojan:EC2/BlackNixies</code> (cryptominer)</td>
        </tr>
        <tr>
          <td><strong>Account Compromise</strong></td>
          <td>Unusual API calls, API calls from Tor nodes, credential theft</td>
          <td>Medium to High</td>
          <td><code>UnauthorizedAccess:IAMUser</code></td>
        </tr>
        <tr>
          <td><strong>Bucket Compromise</strong></td>
          <td>Unusual S3 access patterns, data exfiltration</td>
          <td>High</td>
          <td><code>S3/PermissionsChange</code></td>
        </tr>
        <tr>
          <td><strong>Resource Consumption</strong></td>
          <td>Cryptomining, unusual compute usage</td>
          <td>Medium</td>
          <td><code>CryptoCurrency:EC2/BitcoinTool</code></td>
        </tr>
        <tr>
          <td><strong>Network Intrusion</strong></td>
          <td>Unusual VPC traffic, port scanning</td>
          <td>Medium</td>
          <td><code>Recon:EC2/Portscan</code></td>
        </tr>
        <tr>
          <td><strong>Penetration Testing</strong></td>
          <td>Pen testing tools detected (Kali Linux, Metasploit)</td>
          <td>High</td>
          <td><code>Recon:EC2/KaliLinux</code></td>
        </tr>
      </tbody>
    </table>

    <h4>GuardDuty Setup Best Practices</h4>
    <ol>
      <li>Enable GuardDuty in <strong>all regions</strong> (attackers may use non-production regions)</li>
      <li>Enable <strong>Auto-enable for new accounts</strong> in the organization settings</li>
      <li>Configure <strong>CloudWatch Events</strong> to trigger Lambda functions for automated remediation</li>
      <li>Set up <strong>SNS notifications</strong> for Medium and High severity findings</li>
      <li>Review findings weekly in the GuardDuty console</li>
      <li>Enable <strong>malware protection</strong> for EC2 workloads (scans EBS volumes and containers)</li>
    </ol>

    <h4>Automated Response to GuardDuty Findings</h4>
    <pre><code>
# Example AWS EventBridge rule for GuardDuty findings
{
  "source": ["aws.guardduty"],
  "detail-type": ["GuardDuty Finding"],
  "detail": {
    "severity": [{"numeric": [">=", 7]}]
  }
}
# Route to SNS → Lambda → Auto-isolate instance,
# notify Slack, create Jira ticket, etc.
</code></pre>

    <div class="success-box">
      <div class="success-title">✓ Real-World Detection</div>
      <p>GuardDuty detected a crypto-mining attack in a customer's environment by identifying:</p>
      <ul>
        <li>An EC2 instance making DNS queries to known crypto-mining pool domains</li>
        <li>Unusual outbound network traffic at 2 AM</li>
        <li>The finding <code>CryptoCurrency:EC2/BitcoinTool.B!DNS</code> was triggered automatically</li>
      </ul>
    </div>
  `,

  v1c19: `
    <h3>AWS Security Hub</h3>
    <p>
      AWS Security Hub is the <strong>centralized security dashboard</strong> for your AWS environment. It aggregates, organizes, and prioritizes security findings from multiple AWS services and integrated third-party tools.
    </p>

    <h4>What Security Hub Does</h4>
    <p>Without Security Hub, you'd need to check multiple consoles and dashboards for security issues:</p>
    <ul>
      <li>CloudTrail → API activity</li>
      <li>GuardDuty → Threat detection</li>
      <li>Inspector → Vulnerability scanning</li>
      <li>Macie → Sensitive data detection</li>
      <li>IAM Access Analyzer → External access</li>
    </ul>
    <p><strong>Security Hub unifies all of this</strong> into a single view with prioritization.</p>

    <h4>Security Standards</h4>
    <p>Security Hub continuously checks your environment against security best-practice standards:</p>
    <table>
      <thead>
        <tr>
          <th>Standard</th>
          <th>Focus</th>
          <th>Controls</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>AWS Foundational Security Best Practices</strong></td><td>Critical security checks</td><td>135+ controls</td></tr>
        <tr><td><strong>CIS AWS Foundations Benchmark</strong></td><td>CIS benchmarks</td><td>180+ controls</td></tr>
        <tr><td><strong>AWS Well-Architected Framework</strong></td><td>Architecture review</td><td>100+ controls</td></tr>
        <tr><td><strong>PCI DSS</strong></td><td>Payment card security</td><td>300+ controls</td></tr>
        <tr><td><strong>AWS Control Tower Guardrails</strong></td><td>Multi-account governance</td><td>Varies</td></tr>
      </tbody>
    </table>

    <h4>Finding Prioritization</h4>
    <p>Each finding has a severity score (0-100) based on three factors:</p>
    <table>
      <thead>
        <tr>
          <th>Factor</th>
          <th>Description</th>
          <th>Weight</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>Severity</strong></td><td>How bad is the issue?</td><td>30%</td></tr>
        <tr><td><strong>Compliance Status</strong></td><td>Does it violate a standard?</td><td>30%</td></tr>
        <tr><td><strong>Resource Exposure</strong></td><td>Is it internet-facing?</td><td>40%</td></tr>
      </tbody>
    </table>

    <h4>Insight Filters for Investigation</h4>
    <p>Security Hub Insights let you search and analyze findings:</p>
    <div class="info-box">
      <div class="info-title">💡 Example Security Hub Insights</div>
      <ul>
        <li><strong>Top 10 IAM users without MFA</strong> — prioritize remediation</li>
        <li><strong>All public S3 buckets</strong> — immediate data exposure check</li>
        <li><strong>Unpatched EC2 instances</strong> — prioritize by CVE severity</li>
        <li><strong>Cross-account API calls</strong> — detect privilege escalation</li>
      </ul>
    </div>

    <h4>Security Hub Best Practices</h4>
    <ol>
      <li>Enable <strong>all available standards</strong> in your account</li>
      <li>Set up <strong>automated suppression</strong> for known false positives</li>
      <li>Use <strong>Security Hub auto-import</strong> for third-party findings (from Wiz, Orca, Prisma Cloud, etc.)</li>
      <li>Configure <strong>EventBridge rules</strong> to trigger on High/Critical findings</li>
      <li>Track your <strong>Secure Score</strong> over time — aim for 80%+</li>
      <li>Review <strong>Insights</strong> weekly to identify trends</li>
    </ol>
  `,

  v1c20: `
    <h3>AWS Config Rules</h3>
    <p>
      AWS Config continuously monitors and records your AWS resource configurations. AWS Config Rules allow you to evaluate whether your resources comply with specific configurations and best practices.
    </p>

    <h4>How Config Rules Work</h4>
    <ol>
      <li><strong>Configuration Recorder</strong> tracks all supported resources in your account</li>
      <li>AWS Config evaluates each resource against your <strong>Config Rules</strong></li>
      <li>Resources are marked as <strong>COMPLIANT</strong> or <strong>NON_COMPLIANT</strong></li>
      <li>Non-compliant resources trigger <strong>remediation actions</strong> (via SSM Automation or Lambda)</li>
    </ol>

    <h4>Types of Config Rules</h4>
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>How It Works</th>
          <th>Example Rules</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>AWS Managed Rules</strong></td>
          <td>Pre-built by AWS; maintained and updated automatically</td>
          <td>s3-bucket-public-read-prohibited, ec2-instance-no-public-ip, mfa-enabled-for-iam-console-access</td>
        </tr>
        <tr>
          <td><strong>Custom Rules (Lambda)</strong></td>
          <td>You write Lambda functions with custom compliance logic</td>
          <td>Check that all RDS instances use a specific engine version</td>
        </tr>
        <tr>
          <td><strong>Custom Rules (Guard)</strong></td>
          <td>Define rules in Rego or use built-in Guard syntax</td>
          <td>Check tagging requirements, resource naming conventions</td>
        </tr>
      </tbody>
    </table>

    <h4>Example: Essential Config Rules for Security</h4>
    <table>
      <thead>
        <tr>
          <th>Rule</th>
          <th>What It Checks</th>
          <th>Risk Addressed</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>cloudtrail-enabled-all-regions</td><td>CloudTrail is enabled in all regions</td><td>Audit coverage gaps</td></tr>
        <tr><td>root-account-mfa-enabled</td><td>Root account has MFA</td><td>Root account compromise</td></tr>
        <tr><td>iam-password-policy</td><td>Strong password policy enforced</td><td>Brute force attacks</td></tr>
        <tr><td>s3-bucket-server-side-encryption-enabled</td><td>S3 buckets use encryption</td><td>Data at rest exposure</td></tr>
        <tr><td>restricted-ssh</td><td>SSH not open to 0.0.0.0/0</td><td>Unauthorized access</td></tr>
        <tr><td>vpc-sg-open-only-to-authorized-ports</td><td>Security groups only allow approved ports</td><td>Lateral movement</td></tr>
        <tr><td>alb-http-to-https-redirection-check</td><td>ALB redirects HTTP to HTTPS</td><td>Man-in-the-middle attacks</td></tr>
        <tr><td>encrypted-volumes</td><td>EBS volumes are encrypted</td><td>Data theft from EBS</td></tr>
      </tbody>
    </table>

    <h4>Config Rules with Auto-Remediation</h4>
    <p>One of the most powerful features: Config Rules can <strong>automatically fix</strong> non-compliant resources:</p>
    <pre><code>
# Example: Auto-remediate public S3 buckets
# Config Rule → SSM Automation Document → Lambda
# to remove the public access block

1. Config detects s3-bucket-public-read-prohibited violation
2. Event sent to EventBridge
3. EventBridge triggers SSM Automation
4. SSM runs Lambda to update bucket policy
5. Config re-evaluates — now COMPLIANT
</code></pre>

    <div class="info-box">
      <div class="info-title">💡 Config Aggregator</div>
      <p><strong>AWS Config Aggregator</strong> lets you aggregate configuration data from multiple AWS accounts and regions into a single view — essential for multi-account organizations using AWS Organizations.</p>
    </div>
  `,

  v1c21: `
    <h3>AWS WAF & Shield</h3>
    <p>
      AWS Web Application Firewall (WAF) and AWS Shield protect your web applications from common web exploits and distributed denial of service (DDoS) attacks.
    </p>

    <h4>AWS WAF (Web Application Firewall)</h4>
    <p>AWS WAF is a Layer 7 (application layer) firewall that inspects HTTP/HTTPS requests and allows you to create rules to block, allow, or count requests based on conditions.</p>

    <h5>How WAF Works</h5>
    <ol>
      <li>A client sends an HTTP request</li>
      <li>The request encounters the WAF (associated with an ALB, API Gateway, CloudFront, or AppSync)</li>
      <li>WAF evaluates the request against your <strong>Web ACL</strong> (Web Access Control List)</li>
      <li>Based on the action of the matching rule, the request is ALLOWED, BLOCKED, or COUNTED</li>
      <li>If no rules match, the default action is applied (typically ALLOW)</li>
    </ol>

    <h5>WAF Rule Types</h5>
    <table>
      <thead>
        <tr>
          <th>Rule Type</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>Regular Rules</strong></td><td>Match conditions on individual requests</td><td>Block requests with SQL injection patterns</td></tr>
        <tr><td><strong>Rule Groups</strong></td><td>Reusable collections of rules</td><td>AWS Managed Rules (AWSManagedRulesCommonRuleSet)</td></tr>
        <tr><td><strong>Rate-Based Rules</strong></td><td>Trigger when request count exceeds threshold</td><td>Block IPs with >1000 requests/5 min</td></tr>
        <tr><td><strong>Web ACL Association</strong></td><td>Associate WAF with a resource</td><td>WAF → CloudFront Distribution</td></tr>
      </tbody>
    </table>

    <h5>AWS Managed Rule Groups</h5>
    <p>AWS provides pre-built rule groups that protect against common threats:</p>
    <ul>
      <li><strong>Core Rule Set (CRS):</strong> Blocks common attack patterns (SQL injection, XSS, LFI/RFI)</li>
      <li><strong>Known Bad Inputs:</strong> Blocks known malicious patterns</li>
      <li><strong>Bot Control:</strong> Identifies and manages bot traffic</li>
      <li><strong>Account Takeover Prevention:</strong> Detects credential stuffing and brute force</li>
      <li><strong>Fraud Control:</strong> Detects fraud signals (volumetric spikes, anonymous proxies)</li>
    </ul>

    <h4>AWS Shield</h4>
    <p>AWS Shield protects against <strong>DDoS attacks</strong> at the network and transport layers (Layers 3 and 4).</p>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Shield Standard</th>
          <th>Shield Advanced</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Active DDoS Protection</td><td>✅ Always on (network/transport)</td><td>✅ + Application layer protection</td></tr>
        <tr><td>Cost Protection</td><td>Not included</td><td>✅ Credits for scaling due to DDoS</td></tr>
        <tr><td>24/7 DDoS Response Team (DRT)</td><td>No</td><td>✅ Direct access during attacks</td></tr>
        <tr><td>Advanced Threat Detection</td><td>Basic</td><td>✅ Near real-time visibility</td></tr>
        <tr><td>Custom Mitigations</td><td>No</td><td>✅ Tailored protections</td></tr>
        <tr><td>Cost</td><td>Free</td><td>$3,000/month + data transfer</td></tr>
      </tbody>
    </table>

    <div class="warning-box">
      <div class="warning-title">⚠️ Capital One Breach Connection</div>
      <p>The Capital One breach occurred because the WAF <strong>SSRF protection was not properly configured</strong>. The attacker used a Server-Side Request Forgery vulnerability to access the IMDS. This highlights that:</p>
      <ul>
        <li>WAF requires proper configuration, not just deployment</li>
        <li>SSRF protection must be explicitly enabled</li>
        <li>Defense in depth is essential — WAF alone is not sufficient</li>
      </ul>
    </div>

    <h4>WAF Best Practices</h4>
    <ol>
      <li>Deploy WAF in front of <strong>all</strong> internet-facing resources (CloudFront, ALB, API Gateway, AppSync)</li>
      <li>Start with <strong>Detection mode</strong> (COUNT action) — monitor for false positives before blocking</li>
      <li>Enable <strong>AWS Managed Rules</strong> — they're maintained by AWS security experts and updated as new threats emerge</li>
      <li>Create <strong>Rate-based rules</strong> to slow down brute force and scraping attacks</li>
      <li>Set up WAF <strong>logging to S3 or Kinesis</strong> for analysis</li>
      <li>Integrate with <strong>AWS Firewall Manager</strong> for organization-wide WAF management</li>
      <li>Review WAF metrics in CloudWatch regularly</li>
    </ol>
  `,

  v1c22: `
    <h3>AWS Artifact</h3>
    <p>
      AWS Artifact is your go-to service for <strong>on-demand access to AWS security and compliance reports</strong>. It's your central repository for demonstrating compliance to auditors and stakeholders.
    </p>

    <h4>What AWS Artifact Provides</h4>
    <table>
      <thead>
        <tr>
          <th>Report Type</th>
          <th>Description</th>
          <th>Frequency</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>SOC Reports</strong></td><td>SOC 1, SOC 2, SOC 3 reports showing AWS controls</td><td>Quarterly updates</td></tr>
        <tr><td><strong>PCI DSS Reports</strong></td><td>AWS PCI DSS Attestation of Compliance</td><td>Annual with quarterly updates</td></tr>
        <tr><td><strong>Certifications</strong></td><td>ISO 27001, ISO 27017, ISO 27018, ISO 27701</td><td>Annual certification</td></tr>
        <tr><td><strong>FedRAMP</strong></td><td>FedRAMP Authorization Package (ATO)</td><td>Continuous monitoring</td></tr>
        <tr><td><strong>HIPAA BAA</strong></td><td>Business Associate Agreement for HIPAA compliance</td><td>Always available</td></tr>
        <tr><td><strong>Network Architecture</strong></td><td>Logical data center diagrams and security controls</td><td>Updated periodically</td></tr>
        <tr><td><strong>GDPR DPA</strong></td><td>Data Processing Addendum</td><td>Always available</td></tr>
        <tr><td><strong>Customer Compliance Resources</strong></td><td>Best practice guides, security whitepapers</td><td>Continuously updated</td></tr>
      </tbody>
    </table>

    <h4>Why AWS Artifact Matters</h4>
    <div class="info-box">
      <div class="info-title">📋 Compliance Made Easy</div>
      <p>Without AWS Artifact, you'd need to:</p>
      <ul>
        <li>Request each report individually from AWS support</li>
        <li>Wait days or weeks for delivery</li>
        <li>Manage multiple document formats and storage</li>
      </ul>
      <p>With AWS Artifact, <strong>all compliance artifacts are available on-demand</strong> — just a few clicks. And as an AWS customer, you have <strong>automatic access</strong>.</p>
    </div>

    <h4>How to Use AWS Artifact for Compliance</h4>
    <ol>
      <li><strong>Access:</strong> AWS Console → Security, Identity & Compliance → AWS Artifact</li>
      <li><strong>Download:</strong> Download relevant reports for your audit (SOC 2 Type II is most common for B2B)</li>
      <li><strong>Share:</strong> Share reports with customers/partners via Artifact's built-in sharing</li>
      <li><strong>Audit Preparation:</strong> Use the reports as evidence of AWS's security controls during your own audit</li>
    </ol>

    <h4>AWS Artifact in Your Compliance Program</h4>
    <p>When preparing for your own SOC 2 or ISO 27001 audit:</p>
    <ul>
      <li>SOC 2 auditors will want to see AWS's SOC 2 report to understand <strong>which controls are inherited</strong> from AWS</li>
      <li>You only need to demonstrate controls for the areas <strong>not</strong> covered by AWS (i.e., your shared responsibility)</li>
      <li>This significantly reduces your audit scope and cost</li>
    </ul>

    <div class="callout">
      <div class="callout-icon">💰</div>
      <div class="callout-content">
        <h4>Cost Saving Tip</h4>
        <p>AWS Artifact is <strong>free</strong> for all AWS customers. There is no charge to access, download, or share reports. However, AWS Partner Network (APN) partners may need to pay AWS to reproduce reports for their own customers.</p>
      </div>
    </div>
  `,

  v1c23: `
    <h3>AWS Security Best Practices</h3>
    <p>
      This chapter summarizes the comprehensive best practices for securing your AWS environment. Think of this as the <strong>master reference checklist</strong> that ties together everything covered in this Veda.
    </p>

    <h4>The 10 Pillars of AWS Security</h4>

    <table>
      <thead>
        <tr>
          <th>Pillar</th>
          <th>Practices</th>
          <th>Priority</th>
          <th>AWS Service</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>1. Identity &amp; Access</strong></td>
          <td>MFA everywhere, least privilege, SSO federation, permission boundaries</td>
          <td style="color:#E11D48;font-weight:700;">CRITICAL</td>
          <td>IAM, SSO, Organizations</td>
        </tr>
        <tr>
          <td><strong>2. Data Protection</strong></td>
          <td>Encrypt at rest and in transit, classify data, protect keys</td>
          <td style="color:#E11D48;font-weight:700;">CRITICAL</td>
          <td>KMS, S3 Encryption, Macie</td>
        </tr>
        <tr>
          <td><strong>3. Network Security</strong></td>
          <td>VPC design, security groups, NACLs, WAF, Shield</td>
          <td style="color:#FF6B35;font-weight:700;">HIGH</td>
          <td>VPC, WAF, Shield, Network Firewall</td>
        </tr>
        <tr>
          <td><strong>4. Infrastructure Security</strong></td>
          <td>Harden AMIs, EC2, EBS, use Systems Manager</td>
          <td style="color:#FF6B35;font-weight:700;">HIGH</td>
          <td>Inspector, SSM, GuardDuty</td>
        </tr>
        <tr>
          <td><strong>5. Logging &amp; Monitoring</strong></td>
          <td>CloudTrail, CloudWatch, Security Hub, GuardDuty</td>
          <td style="color:#FF6B35;font-weight:700;">HIGH</td>
          <td>CloudTrail, CloudWatch, Security Hub</td>
        </tr>
        <tr>
          <td><strong>6. Incident Response</strong></td>
          <td>Playbooks, automated response, forensic readiness</td>
          <td style="color:#FFD700;font-weight:700;">MEDIUM-HIGH</td>
          <td>GuardDuty, EventBridge, Lambda</td>
        </tr>
        <tr>
          <td><strong>7. Compliance &amp; Audit</strong></td>
          <td>Continuous compliance, Config Rules, artifact management</td>
          <td style="color:#FFD700;font-weight:700;">MEDIUM-HIGH</td>
          <td>Config, Security Hub, Audit Manager</td>
        </tr>
        <tr>
          <td><strong>8. Application Security</strong></td>
          <td>WAF, input validation, secrets management, code signing</td>
          <td style="color:#FFD700;font-weight:700;">MEDIUM</td>
          <td>WAF, CodeGuru, Secrets Manager</td>
        </tr>
        <tr>
          <td><strong>9. Backup &amp; Recovery</strong></td>
          <td>Cross-region backups, RPO/RTO planning, DR testing</td>
          <td style="color:#22C55E;font-weight:700;">MEDIUM</td>
          <td>Backup, S3, RDS Snapshots</td>
        </tr>
        <tr>
          <td><strong>10. Cost &amp; Resource Governance</strong></td>
          <td>Tagging, budgets, anomaly detection, resource cleanup</td>
          <td style="color:#22C55E;font-weight:700;">MEDIUM</td>
          <td>Cost Explorer, Budgets, Organizations</td>
        </tr>
      </tbody>
    </table>

    <h4>Automated Security Baseline</h4>
    <p>Implement this security baseline in <strong>every</strong> AWS account automatically (using CloudFormation/Terraform):</p>
    <div class="callout">
      <div class="callout-icon">🚀</div>
      <div class="callout-content">
        <h4>Must-Have Security Baseline</h4>
        <pre><code>
1. Multi-region CloudTrail with log file validation ✅
2. S3 Block Public Access at account level ✅
3. Default encryption for all EBS volumes ✅
4. MFA Delete on root account ✅
5. GuardDuty enabled in all regions ✅
6. Security Hub with all standards enabled ✅
7. SCPs to deny non-approved regions ✅
8. AWS Config enabled with essential managed rules ✅
</code></pre>
      </div>
    </div>

    <h4>Quick Reference: AWS Security Checklist</h4>
    <div class="success-box">
      <div class="success-title">✓ Final Security Checklist</div>
      <ol>
        <li>Root account MFA enabled and root access key deleted</li>
        <li>IAM users use roles and temporary credentials only</li>
        <li>SSO or federation for all human access</li>
        <li>CloudTrail enabled in all regions with log file validation</li>
        <li>GuardDuty enabled for threat detection</li>
        <li>S3: Block Public Access enabled, default encryption on, versioning on</li>
        <li>EBS: Default encryption, regular snapshots with retention policies</li>
        <li>RDS: Encryption at rest, automated backups, no public access</li>
        <li>EC2: No public IPs, Security Group least privilege, SSM instead of SSH</li>
        <li>VPC: Flow logs on, NAT Gateway for private subnets, no 0.0.0.0/0 for SSH/RDP</li>
        <li>WAF: Enabled on all internet-facing endpoints</li>
        <li>Config: Enabled with managed rules for continuous compliance</li>
        <li>Secrets: Stored in Secrets Manager with rotation enabled</li>
        <li>KMS: CMK rotation enabled, key policies reviewed quarterly</li>
        <li>IAM: Access Analyzer run quarterly, unused permissions removed</li>
        <li>Cost Anomaly Detection configured with appropriate thresholds</li>
        <li>All resources tagged consistently per governance policy</li>
      </ol>
    </div>

    <div class="callout">
      <div class="callout-icon">🎓</div>
      <div class="callout-content">
        <h4>Cloud Security Veda 1 Complete!</h4>
        <p>You've now covered the fundamentals of cloud security including:</p>
        <ul>
          <li>Cloud computing models and service types</li>
          <li>Shared responsibility model</li>
          <li>Cloud attack surface analysis</li>
          <li>Zero Trust architecture</li>
          <li>Comprehensive AWS security (IAM, VPC, S3, EC2, Lambda, CloudTrail, GuardDuty, WAF, Security Hub, Config)</li>
          <li>Governance, compliance, and best practices</li>
        </ul>
        <p>Ready to continue your journey? The next Vedas await: Compliance, AppSec, DevSecOps, Kubernetes & Containers, and Network Security.</p>
      </div>
    </div>
  `
};