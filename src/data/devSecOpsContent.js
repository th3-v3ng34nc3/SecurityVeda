export const devSecOpsContent = {

  // ==========================================
  // SECTION 1: DEVSECOPS FUNDAMENTALS
  // ==========================================

  v4c1: `
    <h3>DevSecOps Introduction</h3>
    <p>
      <strong>DevSecOps</strong> is the practice of integrating <strong>security into every phase of the DevOps lifecycle</strong> — from planning and coding through testing, deployment, and operations. It represents a cultural shift where <strong>security is everyone's responsibility</strong>, not just a separate team's burden.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Security as a Shared Responsibility</div>
      <p>DevSecOps breaks down the traditional silos between <strong>Development</strong>, <strong>Security</strong>, and <strong>Operations</strong>. Instead of security being a gate at the end, it becomes a <strong>continuous, automated process</strong> woven into every stage of delivery.</p>
    </div>

    <h4>The Evolution: DevOps to DevSecOps</h4>
    <table>
      <thead>
        <tr><th>Era</th><th>Approach</th><th>Security Timing</th><th>Outcome</th></tr>
      </thead>
      <tbody>
        <tr><td>Traditional</td><td>Waterfall, separate security team</td><td>After development</td><td>Slow, costly late fixes</td></tr>
        <tr><td>DevOps</td><td>Dev + Ops collaboration</td><td>Often after CI/CD</td><td>Faster but security gaps</td></tr>
        <tr><td>DevSecOps</td><td>Dev + Ops + Security integrated</td><td>Throughout the pipeline</td><td>Fast AND secure</td></tr>
      </tbody>
    </table>

    <h4>Core Principles of DevSecOps</h4>
    <ul>
      <li><strong>Shift Left:</strong> Move security testing earlier in the development process</li>
      <li><strong>Automate Everything:</strong> Security checks should be automated and integrated into CI/CD</li>
      <li><strong>Continuous Security:</strong> Security is not a one-time check but an ongoing process</li>
      <li><strong>Collaboration:</strong> Security teams, developers, and operators work together daily</li>
      <li><strong>Measurable:</strong> Track security metrics alongside other DevOps KPIs</li>
      <li><strong>Threat-Driven:</strong> Understand and prioritize based on real threat intelligence</li>
    </ul>

    <h4>The DevSecOps Lifecycle</h4>
    <ol>
      <li><strong>Plan:</strong> Identify security requirements, threat model, define security policies</li>
      <li><strong>Code:</strong> Write secure code using linting, SAST, and secure coding standards</li>
      <li><strong>Build:</strong> Scan dependencies, sign artifacts, verify integrity</li>
      <li><strong>Test:</strong> Run DAST, IAST, SCA, and security regression tests</li>
      <li><strong>Release:</strong> Validate configurations, enforce policies, manage secrets</li>
      <li><strong>Deploy:</strong> Harden infrastructure, monitor for drift</li>
      <li><strong>Operate:</strong> Continuous monitoring, incident response, vulnerability management</li>
      <li><strong>Monitor:</strong> Runtime protection, anomaly detection, threat hunting</li>
    </ol>

    <h4>Benefits of DevSecOps</h4>
    <ul>
      <li><strong>Faster time-to-market:</strong> Security no longer blocks releases</li>
      <li><strong>Reduced vulnerabilities:</strong> Issues caught earlier are cheaper to fix</li>
      <li><strong>Improved compliance:</strong> Continuous evidence collection for audits</li>
      <li><strong>Better collaboration:</strong> Shared responsibility reduces friction</li>
      <li><strong>Lower risk:</strong> Continuous security posture management</li>
    </ul>
  `,

  v4c2: `
    <h3>Shift-Left Security</h3>
    <p>
      <strong>Shift-Left Security</strong> is the practice of performing <strong>security testing and analysis as early as possible</strong> in the software development lifecycle. The core idea: finding and fixing a vulnerability during development is <strong>orders of magnitude cheaper</strong> than finding it in production.
    </p>

    <div class="warning-box">
      <div class="warning-title">⚠️ The Cost Curve of Late Security</div>
      <p>According to IBM's Cost of a Data Breach report and NIST research:<br>
      Fixing a bug in <strong>design phase</strong>: 1x cost<br>
      Fixing a bug in <strong>development</strong>: 6x cost<br>
      Fixing a bug in <strong>testing</strong>: 15x cost<br>
      Fixing a bug in <strong>production</strong>: 100x cost</p>
    </div>

    <h4>The Shift-Left Spectrum</h4>
    <pre><code>
←—————————————————————————————————————————————→
Planning    Design    Development    Testing    Deployment    Production
   │           │            │             │              │
   ▼           ▼            ▼             ▼              ▼
Threat      Architecture  SAST/Secure   DAST/IAST/     Runtime
Modeling    Review        Coding        Pen Testing    Protection
            SCA                      SCA/DAST
</code></pre>

    <h4>How to Shift Left</h4>
    <ol>
      <li><strong>Threat Modeling at Design:</strong> Identify threats before writing code</li>
      <li><strong>IDE Security Plugins:</strong> Real-time vulnerability detection during coding (Semgrep, SonarLint, Snyk IDE)</li>
      <li><strong>Pre-commit Hooks:</strong> Run security checks before code enters the repository</li>
      <li><strong>SAST in CI Pipeline:</strong> Block builds with critical vulnerabilities</li>
      <li><strong>SCA on Every Build:</strong> Check dependencies continuously</li>
      <li><strong>Security in Code Reviews:</strong> Include security as part of PR review criteria</li>
      <li><strong>Developer Training:</strong> Teach secure coding proactively, not reactively</li>
    </ol>

    <h4>Shift-Left Toolchain Integration</h4>
    <table>
      <thead>
        <tr><th>Stage</th><th>Tool Examples</th><th>What It Catches</th></tr>
      </thead>
      <tbody>
        <tr><td>IDE</td><td>SonarLint, Snyk Code, Semgrep</td><td>Vulnerabilities while coding</td></tr>
        <tr><td>Pre-commit</td><td>Husky, GitLeaks, lint-staged</td><td>Secrets, formatting, basic security</td></tr>
        <tr><td>CI Build</td><td>Semgrep, CodeQL, Checkmarx</td><td>Deep code analysis</td></tr>
        <tr><td>Dependency Check</td><td>Snyk, Dependabot, OWASP DC</td><td>Known CVEs in libraries</td></tr>
        <tr><td>Container Build</td><td>Trivy, Grype, Docker Scout</td><td>Image vulnerabilities</td></tr>
        <tr><td>Infrastructure</td><td>Checkov, tfsec, KICS</td><td>IaC misconfigurations</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 Developer Experience Matters</div>
      <p>The most effective shift-left programs prioritize <strong>developer experience</strong>. If security tooling is too slow, produces too many false positives, or requires complex configuration, developers will bypass it. Aim for: <strong>fast feedback</strong> (&lt; 5 min), <strong>clear remediation guidance</strong>, and <strong>minimal noise</strong>.</p>
    </div>
  `,

  v4c3: `
    <h3>Security as Code</h3>
    <p>
      <strong>Security as Code (SaC)</strong> is the practice of defining, implementing, and managing <strong>security policies and controls through code</strong> rather than manual processes. Just as Infrastructure as Code (IaC) manages infrastructure through version-controlled files, Security as Code makes security configurations <strong>versionable, testable, reviewable, and repeatable</strong>.
    </p>

    <h4>What Can Be Codified?</h4>
    <table>
      <thead>
        <tr><th>Security Domain</th><th>As Code Example</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Network Policies</strong></td><td>Firewall rules, security groups defined in YAML/Terraform</td></tr>
        <tr><td><strong>Access Control</strong></td><td>RBAC policies in OPA/Gatekeeper or IAM in Terraform</td></tr>
        <tr><td><strong>Compliance Policies</strong></td><td>Rego rules in OPA, Chef InSpec profiles</td></tr>
        <tr><td><strong>Secrets Management</strong></td><td>Sealed Secrets, External Secrets Operator definitions</td></tr>
        <tr><td><strong>Encryption Configuration</strong></td><td>Vault policies, KMS key rotation rules</td></tr>
        <tr><td><strong>Security Scanning</strong></td><td>Tool configurations, severity thresholds in YAML</td></tr>
        <tr><td><strong>Incident Response</strong></td><td>Automation rules, runbooks in code</td></tr>
      </tbody>
    </table>

    <h4>Benefits of Security as Code</h4>
    <ul>
      <li><strong>Version control:</strong> Track changes, roll back, audit who changed what and when</li>
      <li><strong>Peer review:</strong> Security policy changes go through the same PR review process</li>
      <li><strong>Consistency:</strong> Apply the same policies across all environments automatically</li>
      <li><strong>Testing:</strong> Test security policies before deployment (unit tests for policies)</li>
      <li><strong>Reusability:</strong> Share security modules across teams and projects</li>
      <li><strong>Documentation:</strong> Code serves as living, always-updated documentation</li>
    </ul>

    <h4>Implementing Security as Code</h4>
    <pre><code>
# Example: OPA Policy as Code (Rego)
# Deny containers running as root
package kubernetes.admission

deny[msg] {
  input.request.kind.kind == "Pod"
  container := input.request.object.spec.containers[_]
  not container.securityContext.runAsNonRoot
  msg := sprintf("Container %v must run as non-root", [container.name])
}

# Example: Terraform Security Group
resource "aws_security_group" "web" {
  name_prefix = "web-sg"

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
    description = "HTTPS from anywhere"
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Environment = "production"
    ManagedBy   = "terraform"
  }
}
</code></pre>

    <h4>Tools for Security as Code</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Open Policy Agent (OPA)</strong></td><td>General-purpose policy engine</td></tr>
        <tr><td><strong>HashiCorp Sentinel</strong></td><td>Policy as code for Terraform/cloud</td></tr>
        <tr><td><strong>Chef InSpec</strong></td><td>Compliance-as-code testing</td></tr>
        <tr><td><strong>Kyverno</strong></td><td>Kubernetes-native policy engine</td></tr>
        <tr><td><strong>Sealed Secrets</strong></td><td>Encrypted secrets in Git</td></tr>
        <tr><td><strong>Pulumi</strong></td><td>Infrastructure as code with real programming languages</td></tr>
      </tbody>
    </table>
  `,

  v4c4: `
    <h3>Infrastructure as Code Security</h3>
    <p>
      <strong>Infrastructure as Code (IaC) Security</strong> focuses on identifying and remediating <strong>misconfigurations and security risks</strong> in infrastructure defined through code (Terraform, CloudFormation, ARM templates, Kubernetes manifests, etc.) <strong>before deployment</strong>.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Prevent Misconfigurations Before They Deploy</div>
      <p>A single misconfigured security group, overly permissive IAM role, or unencrypted database can expose an entire production environment. IaC security scanning catches these issues <strong>at the developer's desk</strong>, not after deployment.</p>
    </div>

    <h4>Common IaC Security Issues</h4>
    <table>
      <thead>
        <tr><th>Issue</th><th>Example</th><th>Impact</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Open security groups</strong></td><td><code>cidr_blocks = ["0.0.0.0/0"]</code> on port 22</td><td>SSH open to the internet</td></tr>
        <tr><td><strong>Unencrypted storage</strong></td><td>S3 bucket without encryption, RDS without encryption at rest</td><td>Data exposure at rest</td></tr>
        <tr><td><strong>Overprivileged IAM</strong></td><td><code>Action: "*"</code> with <code>Resource: "*"</code></td><td>Full account compromise</td></tr>
        <tr><td><strong>No logging enabled</strong></td><td>CloudTrail disabled, S3 access logging off</td><td>Blind to attacks</td></tr>
        <tr><td><strong>Hardcoded secrets</strong></td><td>Passwords or API keys in plaintext in .tf files</td><td>Credential exposure</td></tr>
        <tr><td><strong>Missing versioning</strong></td><td>S3 bucket versioning disabled</td><td>No recovery from accidental/malicious deletion</td></tr>
        <tr><td><strong>Public resources</strong></td><td>AMI, S3 bucket, or RDS snapshot set to public</td><td>Unauthorized access</td></tr>
      </tbody>
    </table>

    <h4>IaC Security Scanning Tools</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>IaC Support</th><th>Approach</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Checkov</strong></td><td>Terraform, CloudFormation, K8s, ARM</td><td>Policy-as-code, 1500+ checks</td></tr>
        <tr><td><strong>tfsec</strong></td><td>Terraform</td><td>Static analysis, no config needed</td></tr>
        <tr><td><strong>KICS</strong></td><td>Terraform, K8s, CloudFormation, Docker</td><td>Query-based (Rego)</td></tr>
        <tr><td><strong>Terrascan</strong></td><td>Terraform, K8s</td><td>OPA-based policies</td></tr>
        <tr><td><strong>Prowler</strong></td><td>AWS (live resources)</td><td>Post-deployment compliance checks</td></tr>
      </tbody>
    </table>

    <h4>Integration into CI/CD</h4>
    <pre><code>
# Example: Checkov in CI pipeline
- name: IaC Security Scan
  run: |
    pip install checkov
    checkov -d ./terraform/ \
      --framework terraform \
      --soft-fail-on LOW \
      --hard-fail-on HIGH,CRITICAL \
      --output cli
  continue-on-error: false
</code></pre>

    <h4>Best Practices</h4>
    <ol>
      <li><strong>Scan before apply:</strong> Block <code>terraform apply</code> if security checks fail</li>
      <li><strong>Use remote state securely:</strong> Encrypt state files, use state locking</li>
      <li><strong>Module scanning:</strong> Scan both your modules and third-party modules</li>
      <li><strong>Policy drift detection:</strong> Continuously compare deployed infrastructure to IaC definitions</li>
      <li><strong>Least privilege in code:</strong> Start with minimal permissions and expand as needed</li>
    </ol>
  `,

  v4c5: `
    <h3>Pipeline Security</h3>
    <p>
      <strong>Pipeline security</strong> ensures that the <strong>CI/CD pipeline itself</strong> — not just the code it processes — is <strong>secure and trustworthy</strong>. A compromised pipeline can lead to supply chain attacks where malicious code is injected into production artifacts.
    </p>

    <div class="warning-box">
      <div class="warning-title">⚠️ Pipeline Attacks Are Real</div>
      <p>Major pipeline attacks include: <strong>SolarWinds</strong> (compromised build process), <strong>Codecov</strong> (modified CI script), <strong>Codecov Bash Uploader</strong> (exfiltrated CI env vars), <strong>GitHub Actions typosquatting</strong> (malicious action names). These attack the pipeline itself, not the application code.</p>
    </div>

    <h4>Pipeline Threat Model</h4>
    <table>
      <thead>
        <tr><th>Threat</th><th>Vector</th><th>Mitigation</th></tr>
      </thead>
      <tbody>
        <tr><td>Credential theft</td><td>Secrets exposed in logs, env vars in fork PRs</td><td>Mask secrets, limit env var exposure</td></tr>
        <tr><td>Malicious dependencies</td><td>Typosquatting, dependency confusion</td><td>Pin versions, use private registries, scope packages</td></tr>
        <tr><td>Injection via PRs</td><td>Malicious code in pull request triggers pipeline</td><td>Don't run secrets on fork PRs, require approval</td></tr>
        <tr><td>Pipeline config tampering</td><td>Attacker modifies .github/workflows or Jenkinsfile</td><td>Branch protection, require review for pipeline changes</td></tr>
        <tr><td>Runner compromise</td><td>Shared runners executing untrusted code</td><td>Use ephemeral runners, container isolation</td></tr>
        <tr><td>Artifact tampering</td><td>Manipulating build outputs</td><td>Sign artifacts, verify checksums</td></tr>
      </tbody>
    </table>

    <h4>Pipeline Security Controls</h4>
    <ol>
      <li><strong>Environment protection:</strong> Require approvals for production deployments</li>
      <li><strong>Branch protection:</strong> Require reviews, status checks before merging</li>
      <li><strong>Secrets management:</strong>
        <ul>
          <li>Use platform secrets (GitHub Secrets, GitLab CI Variables)</li>
          <li>Never log secrets (mask them in output)</li>
          <li>Rotate secrets regularly</li>
          <li>Use short-lived credentials/OIDC tokens where possible</li>
        </ul>
      </li>
      <li><strong>Runner security:</strong>
        <ul>
          <li>Use ephemeral runners (auto-delete after job)</li>
          <li>Don't use self-hosted runners for untrusted code</li>
          <li>Enable container isolation</li>
        </ul>
      </li>
      <li><strong>Artifact integrity:</strong>
        <ul>
          <li>Sign builds with Sigstore/Cosign</li>
          <li>Generate and verify SBOMs</li>
          <li>Verify checksums on download</li>
        </ul>
      </li>
      <li><strong>External contribution protection:</strong>
        <ul>
          <li>Don't expose secrets to fork PRs</li>
          <li>Use <code>pull_request_target</code> cautiously</li>
          <li>Pin actions to SHA hashes, not tags</li>
        </ul>
      </li>
    </ol>

    <h4>GitHub Actions Security Best Practices</h4>
    <pre><code>
# GOOD: Pin action to commit SHA
- uses: actions/checkout@a81bbbf8298c0fa03b29bbe3258bd8f38b0ede38

# BAD: Pin to tag (could be modified)
- uses: actions/checkout@v4

# GOOD: Use OIDC for cloud auth
permissions:
  id-token: write
  contents: read

# GOOD: Restrict environment secrets
environment:
  name: production
  url: https://app.example.com
</code></pre>
  `,

  v4c6: `
    <h3>Automated Security Testing</h3>
    <p>
      <strong>Automated security testing</strong> in DevSecOps means integrating <strong>multiple security scanning tools</strong> directly into the CI/CD pipeline, providing <strong>fast, consistent, and repeatable</strong> security feedback on every code change.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: The Golden Pipeline</div>
      <p>The ideal DevSecOps pipeline runs security checks automatically at every stage: <strong>commit → build → test → stage → deploy → monitor</strong>. Each stage has appropriate security gates that provide fast feedback without blocking developer productivity.</p>
    </div>

    <h4>Layers of Automated Security Testing</h4>
    <table>
      <thead>
        <tr><th>Layer</th><th>Tools</th><th>When</th><th>Speed</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>SAST</strong></td><td>Semgrep, CodeQL, SonarQube</td><td>On every PR</td><td>1-5 min</td></tr>
        <tr><td><strong>SCA</strong></td><td>Snyk, Dependabot, Grype</td><td>On every build</td><td>30s-2 min</td></tr>
        <tr><td><strong>Secrets Detection</strong></td><td>GitLeaks, TruffleHog</td><td>Pre-commit/PR</td><td>Seconds</td></tr>
        <tr><td><strong>IaC Scanning</strong></td><td>Checkov, tfsec, KICS</td><td>On IaC changes</td><td>1-3 min</td></tr>
        <tr><td><strong>Container Scanning</strong></td><td>Trivy, Grype, Docker Scout</td><td>On image build</td><td>1-3 min</td></tr>
        <tr><td><strong>DAST</strong></td><td>ZAP, Nuclei, Burp</td><td>Post-deploy to staging</td><td>10-30 min</td></tr>
      </tbody>
    </table>

    <h4>Building an Effective Pipeline</h4>
    <pre><code>
┌─────────┐    ┌────────────┐    ┌───────────┐    ┌─────────────┐
│  COMMIT  │───▶│   BUILD    │───▶│   TEST    │───▶│  DEPLOY TO  │
│          │    │            │    │           │    │  STAGING    │
│ • Secret │    │ • SAST     │    │ • Unit    │    │ • DAST      │
│   detect │    │ • SCA      │    │ • SAST    │    │ • IAST      │
│ • Lint   │    │ • IaC scan │    │ • SCA     │    │ • Vuln scan │
│ • IaC    │    │ • Image    │    │ • Sec     │    │ • Perf test │
│   check  │    │   build    │    │   config  │    │ • Approval  │
└─────────┘    └────────────┘    └───────────┘    └─────────────┘
     FAIL ────────────────────────────▶  Block deployment
</code></pre>

    <h4>Managing Findings</h4>
    <ul>
      <li><strong>Critical/High:</strong> Block pipeline — fix before merge</li>
      <li><strong>Medium:</strong> Warn, track in backlog, fix in next sprint</li>
      <li><strong>Low/Info:</strong> Log for trend analysis, don't block</li>
      <li><strong>False positives:</strong> Suppress with annotations, review regularly</li>
    </ul>

    <h4>Policy Enforcement</h4>
    <p>Use <strong>OPA/Gatekeeper</strong> or <strong>Kyverno</strong> to enforce security policies:</p>
    <ul>
      <li>No containers running as root</li>
      <li>All images must be from approved registry</li>
      <li>Resource limits must be set</li>
      <li>Network policies must be applied</li>
      <li>No latest image tags</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Gradual Rollout</div>
      <p>Start with <strong>non-blocking scans</strong> (report-only mode) to establish a baseline. Fix existing issues before enabling blocking enforcement. Track your <strong>security debt</strong> and reduce it each sprint.</p>
    </div>
  `,

  v4c7: `
    <h3>Secure CI/CD</h3>
    <p>
      <strong>Secure CI/CD</strong> goes beyond adding security scans to pipelines — it ensures the <strong>entire continuous integration and delivery process</strong> is hardened against attacks. CI/CD systems are high-value targets because compromising them allows attackers to <strong>modify code, inject malware, or steal secrets</strong> at scale.
    </p>

    <h4>CI/CD Attack Surface</h4>
    <table>
      <thead>
        <tr><th>Component</th><th>Risks</th><th>Protections</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Source Code</strong></td>
          <td>Malicious commits, backdoors, branch protection bypass</td>
          <td>Branch protection, code review, signed commits</td>
        </tr>
        <tr>
          <td><strong>Build System</strong></td>
          <td>Poisoned builds, dependency confusion, build cache poisoning</td>
          <td>Reproducible builds, pinned dependencies, isolated runners</td>
        </tr>
        <tr>
          <td><strong>Registry/Artifacts</strong></td>
          <td>Tampered images, unsigned artifacts, overwritten versions</td>
          <td>Image signing, immutable tags, content trust</td>
        </tr>
        <tr>
          <td><strong>Deployment</strong></td>
          <td>Unauthorized deployments, config injection, rollback attacks</td>
          <td>Approval gates, deployment strategies, audit logging</td>
        </tr>
        <tr>
          <td><strong>Secrets</strong></td>
          <td>Exposure in logs, over-permissioned service accounts</td>
          <td>Secret rotation, least privilege, masked variables</td>
        </tr>
      </tbody>
    </table>

    <h4>Hardening CI/CD Systems</h4>
    <ol>
      <li><strong>Restrict pipeline permissions:</strong> Use the principle of least privilege for CI service accounts</li>
      <li><strong>Isolate environments:</strong> Separate build, test, staging, and production environments</li>
      <li><strong>Sign everything:</strong> Sign commits, tags, containers, and artifacts</li>
      <li><strong>Use ephemeral infrastructure:</strong> Spin up fresh build environments for each run (no persistent state)</li>
      <li><strong>Audit trail:</strong> Log all pipeline executions, approvals, and deployments</li>
      <li><strong>Network segmentation:</strong> Restrict CI/CD network access to only what's required</li>
      <li><strong>Pull-based deployments:</strong> ArgoCD/Flux pull from Git rather than CI pushing to clusters</li>
    </ol>

    <h4>Deployment Strategies for Security</h4>
    <table>
      <thead>
        <tr><th>Strategy</th><th>Security Benefit</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Blue-Green</strong></td><td>Instant rollback, zero downtime, easy to test new version</td></tr>
        <tr><td><strong>Canary</strong></td><td>Gradual rollout limits blast radius of compromised deployments</td></tr>
        <tr><td><strong>Rolling Update</strong></td><td>Incremental replacement with health checks</td></tr>
        <tr><td><strong>Immutable Deployments</strong></td><td>Replace rather than update — no configuration drift</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 GitOps = More Secure Deployments</div>
      <p><strong>GitOps</strong> (ArgoCD, Flux) uses Git as the single source of truth for desired state. Deployments are triggered by <strong>git merges/pulls</strong>, not CI pushes. This provides a complete audit trail, easy rollback (git revert), and separation of concerns (devs push code, GitOps operator handles deployment).</p>
    </div>
  `,

  v4c8: `
    <h3>DevSecOps Culture</h3>
    <p>
      <strong>Culture</strong> is the <strong>most critical yet most overlooked</strong> aspect of DevSecOps. Tools and processes are important, but without the right culture, security remains siloed and resented. A strong DevSecOps culture makes security a <strong>natural part of everyone's workflow</strong>.
    </p>

    <h4>Pillars of DevSecOps Culture</h4>
    <table>
      <thead>
        <tr><th>Pillar</th><th>What It Looks Like</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Shared Ownership</strong></td><td>Development teams own their security; security team enables, not gates</td></tr>
        <tr><td><strong>Psychological Safety</strong></td><td>People report vulnerabilities and mistakes without fear of punishment</td></tr>
        <tr><td><strong>Continuous Learning</strong></td><td>Regular training, CTF events, security book clubs, conference attendance</td></tr>
        <tr><td><strong>Blameless Postmortems</strong></td><td>Focus on systemic improvements, not individual blame for incidents</td></tr>
        <tr><td><strong>Collaboration over Control</strong></td><td>Security embeds in teams rather than acting as police</td></tr>
      </tbody>
    </table>

    <h4>Building a DevSecOps Culture: Practical Steps</h4>
    <ol>
      <li>
        <strong>Embed security engineers in development teams:</strong>
        <ul>
          <li>1 security engineer per 3-4 development teams</li>
          <li>Attend team standups and sprint planning</li>
          <li>Help with threat models and security design reviews</li>
        </ul>
      </li>
      <li>
        <strong>Make security easy:</strong>
        <ul>
          <li>Pre-configured security templates and boilerplates</li>
          <li>One-click security scanning in CI</li>
          <li>Clear, actionable security guidelines (not 200-page PDFs)</li>
        </ul>
      </li>
      <li>
        <strong>Gamify security:</strong>
        <ul>
          <li>Capture-the-flag (CTF) events</li>
          <li>Bug bounty programs (internal)</li>
          <li>Security champions recognition</li>
          <li>Leaderboards for secure coding metrics</li>
        </ul>
      </li>
      <li>
        <strong>Celebrate security wins:</strong>
        <ul>
          <li>Highlight vulnerabilities found and fixed in team meetings</li>
          <li>Reward developers who find and report security issues</li>
          <li>Share security metrics improvements organization-wide</li>
        </ul>
      </li>
      <li>
        <strong>Leadership buy-in:</strong>
        <ul>
          <li>Executives should visibly support security initiatives</li>
          <li>Allocate dedicated time for security activities</li>
          <li>Include security in sprint velocity and OKRs</li>
        </ul>
      </li>
    </ol>

    <h4>Overcoming Cultural Resistance</h4>
    <table>
      <thead>
        <tr><th>Resistance</th><th>Solution</th></tr>
      </thead>
      <tbody>
        <tr><td>"Security slows us down"</td><td>Show metrics: fast scans, automated gates, fewer emergency fixes</td></tr>
        <tr><td>"That's the security team's job"</td><td>Embed security in team workflows; make it part of definition of done</td></tr>
        <tr><td>"We've always done it this way"</td><td>Demonstrate real incidents; start with a pilot project</td></tr>
        <tr><td>Alert fatigue from security tools</td><td>Tune rules, reduce noise, only surface actionable findings</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 Google's Security Culture</div>
      <p>Google embeds security in its engineering culture through <strong>bureaucratic-style security reviews</strong> for high-risk changes, <strong>Secure Development Framework (SDF)</strong> training, and <strong>security-focused code review</strong> norms. The result: security is seen as an enabler, not a blocker. The key is <strong>top-down commitment</strong> combined with <strong>bottom-up empowerment</strong>.</p>
    </div>
  `,

  // ==========================================
  // SECTION 2: DEVSECOPS TOOLING
  // ==========================================

  v4c9: `
    <h3>SAST Tools</h3>
    <p>
      <strong>Static Application Security Testing (SAST)</strong> tools analyze <strong>source code, bytecode, or binaries</strong> without executing the program. In a DevSecOps pipeline, SAST tools catch vulnerabilities at the earliest possible stage — while the developer is still writing code or during the build process.
    </p>

    <h4>Leading SAST Tools</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Best For</th><th>Languages</th><th>Integration</th><th>Cost</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Semgrep</strong></td>
          <td>Custom rules, multi-language, fast</td>
          <td>30+ languages</td>
          <td>CLI, CI, IDE, pre-commit</td>
          <td>Free OSS / Paid Team</td>
        </tr>
        <tr>
          <td><strong>CodeQL (GitHub)</strong></td>
          <td>Deep semantic analysis, query-based</td>
          <td>Multi-language</td>
          <td>GitHub Actions, VS Code</td>
          <td>Free for public repos</td>
        </tr>
        <tr>
          <td><strong>SonarQube</strong></td>
          <td>Continuous inspection, quality gates</td>
          <td>30+ languages</td>
          <td>CI/CD, IDE plugins</td>
          <td>Community (free) / Developer+ (paid)</td>
        </tr>
        <tr>
          <td><strong>Checkmarx</strong></td>
          <td>Enterprise, comprehensive coverage</td>
          <td>30+ languages</td>
          <td>CI/CD, IDE, ticketing</td>
          <td>Enterprise pricing</td>
        </tr>
        <tr>
          <td><strong>SpotBugs (Java)</strong></td>
          <td>Java bytecode analysis</td>
          <td>Java</td>
          <td>Maven, Gradle, IDE</td>
          <td>Free / Open Source</td>
        </tr>
        <tr>
          <td><strong>Bandit (Python)</strong></td>
          <td>Python security linting</td>
          <td>Python</td>
          <td>CLI, pre-commit hooks</td>
          <td>Free / Open Source</td>
        </tr>
        <tr>
          <td><strong>ESLint Security</strong></td>
          <td>JS/TS inline security rules</td>
          <td>JavaScript, TypeScript</td>
          <td>IDE, pre-commit, CI</td>
          <td>Free / Open Source</td>
        </tr>
      </tbody>
    </table>

    <h4>Choosing the Right SAST Tool</h4>
    <ul>
      <li><strong>Language coverage:</strong> Does it support your stack?</li>
      <li><strong>Rule customization:</strong> Can you write custom rules for your codebase?</li>
      <li><strong>Speed:</strong> Can it run in under 5 minutes in CI?</li>
      <li><strong>Accuracy:</strong> What's the false positive rate?</li>
      <li><strong>CI/CD integration:</strong> Does it support your pipeline platform?</li>
      <li><strong>Developer experience:</strong> Can developers run it locally in their IDE?</li>
    </ul>

    <h4>SAST Pipeline Integration</h4>
    <pre><code>
# Semgrep in GitHub Actions
- name: Semgrep
  uses: returntocorp/semgrep-action@v1
  with:
    config: >-
      p/owasp-top-ten
      p/security-audit
  env:
    SEMGREP_APP_TOKEN: "\${{ secrets.SEMGREP_TOKEN }}"

# CodeQL in GitHub Actions
- name: CodeQL
  uses: github/codeql-action/init
  with:
    languages: javascript, python, java
- name: Auto Build
  uses: github/codeql-action/autobuild@v2
- name: CodeQL Scan
  uses: github/codeql-action/analyze@v2
</code></pre>

    <div class="info-box">
      <div class="info-title">💡 Custom Rules</div>
      <p>Write custom SAST rules for <strong>framework-specific vulnerabilities</strong> and <strong>organization-specific patterns</strong>. For example, detect unsafe deserialization patterns in your proprietary API framework, or flag deprecated crypto usage specific to your codebase. Semgrep and CodeQL excel at custom rule creation.</p>
    </div>
  `,

  v4c10: `
    <h3>DAST Tools</h3>
    <p>
      <strong>Dynamic Application Security Testing (DAST)</strong> tools test <strong>running applications</strong> by sending malicious inputs and analyzing responses. Unlike SAST, DAST doesn't require source code — it tests the application from the <strong>outside in</strong>, simulating real attacker behavior.
    </p>

    <h4>Leading DAST Tools</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Type</th><th>Strengths</th><th>Cost</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>OWASP ZAP</strong></td>
          <td>Open-source</td>
          <td>Active/passive scanning, API testing, WebSocket support</td>
          <td>Free</td>
        </tr>
        <tr>
          <td><strong>Burp Suite Professional</strong></td>
          <td>Commercial</td>
          <td>Most comprehensive active scanner, superior crawling</td>
          <td>Paid (~$400/yr)</td>
        </tr>
        <tr>
          <td><strong>Nuclei</strong></td>
          <td>Open-source</td>
          <td>Template-based, extremely fast, community templates</td>
          <td>Free</td>
        </tr>
        <tr>
          <td><strong>Acunetix</strong></td>
          <td>Commercial</td>
          <td>Deep crawling, JavaScript analysis, network scanning</td>
          <td>Paid</td>
        </tr>
        <tr>
          <td><strong>Invicti (Netsparker)</strong></td>
          <td>Commercial</td>
          <td>Proof-based scanning (confirmed vulnerabilities)</td>
          <td>Paid</td>
        </tr>
      </tbody>
    </table>

    <h4>DAST Pipeline Strategy</h4>
    <ol>
      <li><strong>Baseline scan:</strong> Quick passive scan on every deploy</li>
      <li><strong>Weekly full scan:</strong> Comprehensive active scan against staging</li>
      <li><strong>Pre-release scan:</strong> Full scan before major releases</li>
      <li><strong>Targeted scans:</strong> Focused scans on new features/changes</li>
    </ol>

    <h4>ZAP Baseline Scan in CI/CD</h4>
    <pre><code>
# Docker-based ZAP baseline scan
docker run -t owasp/zap2docker-stable \
  zap-baseline.py \
  -t https://staging.example.com \
  -r security-report.html \
  -x security-report.xml \
  -c zap-rules.conf \
  -I  # Ignore warnings for non-zero exit

# ZAP API scan with authentication
python zap_scan.py \
  --target https://staging.example.com \
  --auth-bearer "TOKEN" \
  --context "Authenticated" \
  --output report.html
</code></pre>

    <h4>Nuclei in CI/CD</h4>
    <pre><code>
# Nuclei scan with templates
nuclei -target https://staging.example.com \
  -t cves/ \
  -t vulnerabilities/ \
  -t misconfigurations/ \
  -t network/ \
  -severity medium,high,critical \
  -o nuclei-results.txt \
  -json-export nuclei-results.json
</code></pre>

    <div class="info-box">
      <div class="info-title">💡 DAST + Auth</div>
      <p>Most vulnerabilities exist behind authentication. Always configure DAST tools with <strong>valid credentials</strong> and test authenticated workflows. ZAP's <strong>context-based authentication</strong> and Nuclei's <strong>http/workflows</strong> support complex login sequences including MFA bypass via API tokens.</p>
    </div>
  `,

  v4c11: `
    <h3>SCA Tools</h3>
    <p>
      <strong>Software Composition Analysis (SCA)</strong> tools identify <strong>known vulnerabilities in open-source dependencies</strong>. With modern applications using hundreds or thousands of third-party packages, SCA has become one of the most critical security tools in the DevSecOps toolkit.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Your Code is Only as Secure as Your Dependencies</div>
      <p>The average modern application pulls in <strong>hundreds of transitive dependencies</strong>. A single compromised or vulnerable package — like <strong>log4j</strong> or <strong>event-stream</strong> — can compromise your entire application. SCA tools maintain databases of known vulnerabilities and cross-reference them with your dependency tree.</p>
    </div>

    <h4>SCA Tool Comparison</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Ecosystem</th><th>Key Features</th><th>Integration</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Snyk</strong></td>
          <td>Multi-language</td>
          <td>Vulnerability DB, fix PRs, container scanning, IaC scanning</td>
          <td>CLI, CI/CD, IDE, GitHub, GitLab, Bitbucket</td>
        </tr>
        <tr>
          <td><strong>Dependabot</strong></td>
          <td>Multi-language</td>
          <td>GitHub-native, auto-PRs for updates, vulnerability alerts</td>
          <td>GitHub (built-in)</td>
        </tr>
        <tr>
          <td><strong>OWASP Dependency-Check</strong></td>
          <td>Multi-language</td>
          <td>Free, offline mode, NVD database</td>
          <td>CLI, Maven, Gradle, Ant</td>
        </tr>
        <tr>
          <td><strong>Socket.dev</strong></td>
          <td>JavaScript/TypeScript</td>
          <td>Supply chain risk scoring, malware detection</td>
          <td>CLI, GitHub App, CI</td>
        </tr>
        <tr>
          <td><strong>Socket</strong></td>
          <td>Multi-language</td>
          <td>Supply chain attack detection (typosquatting, malware)</td>
          <td>CLI, CI/CD</td>
        </tr>
        <tr>
          <td><strong>Trivy</strong></td>
          <td>Multi-language</td>
          <td>SCA + container scanning + IaC</td>
          <td>CLI, CI/CD, IDE</td>
        </tr>
        <tr>
          <td><strong>Grype</strong></td>
          <td>Multi-language</td>
          <td>Fast SBOM-based vulnerability scanning</td>
          <td>CLI, CI/CD</td>
        </tr>
      </tbody>
    </table>

    <h4>SCA Pipeline Integration</h4>
    <pre><code>
# npm audit in CI
- run: npm audit --audit-level=high

# Snyk CLI
- run: npx snyk test --severity-threshold=high

# Trivy filesystem scan
- run: |
    trivy fs --severity HIGH,CRITICAL \
      --exit-code 1 \
      --ignore-unfixed \
      .

# Grype scan
- run: |
    grype dir:. \
      --only-fixed \
      --fail-on high
</code></pre>

    <h4>Managing Dependency Risk</h4>
    <ol>
      <li><strong>Lock files everywhere:</strong> Use <code>package-lock.json</code>, <code>yarn.lock</code>, <code>poetry.lock</code>, <code>go.sum</code></li>
      <li><strong>Pin versions:</strong> Use exact versions, not ranges (<code>^</code>, <code>~</code>) for production</li>
      <li><strong>Regular updates:</strong> Schedule dependency updates (Dependabot, Renovate)</li>
      <li><strong>Audit transitive dependencies:</strong> Most vulnerabilities come from indirect deps</li>
      <li><strong>SBOM generation:</strong> Generate and store SBOMs for every build</li>
    </ol>
  `,

  v4c12: `
    <h3>Container Scanning</h3>
    <p>
      <strong>Container scanning</strong> identifies <strong>vulnerabilities in container images</strong> — including outdated packages, known CVEs, misconfigurations, and embedded secrets — <strong>before images are deployed</strong> to production clusters.
    </p>

    <div class="warning-box">
      <div class="warning-title">⚠️ Container Image Risks</div>
      <p>The <strong>2024 Palo Alto Unit 42 Cloud Threat Report</strong> found that <strong>62% of container images</strong> contain high or critical vulnerabilities. Many base images contain hundreds of unnecessary packages with known CVEs. Without container scanning, these vulnerabilities ship directly to production.</p>
    </div>

    <h4>Container Scanning Tools</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Type</th><th>Features</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Trivy (Aqua Security)</strong></td>
          <td>Open-source</td>
          <td>OS + language packages, IaC, secrets, SBOM</td>
        </tr>
        <tr>
          <td><strong>Grype</strong></td>
          <td>Open-source</td>
          <td>Fast SBOM-based vulnerability scanner</td>
        </tr>
        <tr>
          <td><strong>Docker Scout</strong></td>
          <td>Integrated</td>
          <td>Built into Docker Desktop and Docker Hub</td>
        </tr>
        <tr>
          <td><strong>Clair</strong></td>
          <td>Open-source</td>
          <td>API-driven, integrates with registries</td>
        </tr>
        <tr>
          <td><strong>Aqua Triv scanner</strong></td>
          <td>Commercial</td>
          <td>Full lifecycle container security</td>
        </tr>
        <tr>
          <td><strong>Anchore</strong></td>
          <td>Open-source / Commercial</td>
          <td>Policy-based image analysis and enforcement</td>
        </tr>
      </tbody>
    </table>

    <h4>Trivy — Comprehensive Example</h4>
    <pre><code>
# Scan a Docker image
trivy image myapp:latest

# Scan with severity filter
trivy image --severity HIGH,CRITICAL nginx:latest

# Scan filesystem (unpacked image)
trivy fs --severity HIGH,CRITICAL /path/to/rootfs

# Generate SBOM
trivy image --format spdx --output sbom.spdx myapp:latest

# Scan Kubernetes cluster
trivy k8s --report summary cluster

# Scan IaC files
trivy config /path/to/terraform/
</code></pre>

    <h4>Best Practices</h4>
    <ol>
      <li><strong>Use minimal base images:</strong> Alpine, distroless, or scratch images reduce attack surface</li>
      <li><strong>Scan in CI:</strong> Block images with critical/high vulnerabilities from being pushed to registries</li>
      <li><strong>Re-scan regularly:</strong> New CVEs are discovered daily; re-scan existing images</li>
      <li><strong>Sign images:</strong> Use Docker Content Trust or Cosign</li>
      <li><strong>Maintain an allowlist:</strong> Approved base images only</li>
    </ol>
  `,

  v4c13: `
    <h3>IaC Scanning</h3>
    <p>
      <strong>Infrastructure as Code (IaC) scanning</strong> detects <strong>misconfigurations and security risks</strong> in infrastructure definitions — Terraform, CloudFormation, Kubernetes manifests, Helm charts, and ARM templates — <strong>before they are provisioned</strong>.
    </p>

    <h4>Why IaC Scanning Matters</h4>
    <p>Infrastructure misconfigurations are one of the <strong>leading causes of data breaches</strong>:</p>
    <ul>
      <li>Publicly exposed S3 buckets containing sensitive data</li>
      <li>Security groups allowing unrestricted inbound traffic</li>
      <li>Overprivileged IAM roles and service accounts</li>
      <li>Unencrypted databases and storage volumes</li>
      <li>Missing logging and monitoring on critical resources</li>
    </ul>

    <h4>IaC Scanning Tools</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>IaC Types</th><th>Approach</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Checkov</strong></td><td>Terraform, K8s, CF, ARM, Dockerfile</td><td>Policy library (1500+ checks)</td></tr>
        <tr><td><strong>tfsec</strong></td><td>Terraform</td><td>Static analysis, zero config</td></tr>
        <tr><td><strong>KICS</strong></td><td>Terraform, K8s, CF, Docker, Ansible</td><td>Query-based (OPA/Rego)</td></tr>
        <tr><td><strong>Terrascan</strong></td><td>Terraform, K8s</td><td>OPA-based</td></tr>
        <tr><td><strong>Prowler</strong></td><td>AWS (live resources)</td><td>Compliance checks</td></tr>
        <tr><td><strong>Bridgecrew (Palo Alto)</strong></td><td>Terraform, CF, K8s</td><td>Policy-as-code platform</td></tr>
      </tbody>
    </table>

    <h4>Checkov Quick Start</h4>
    <pre><code>
# Install
pip install checkov

# Scan Terraform directory
checkov -d ./terraform/

# Scan Kubernetes manifests
checkov -d ./k8s/ --framework kubernetes

# Scan CloudFormation
checkov -d ./cloudformation/ --framework cloudFormation

# Output to SARIF (for GitHub code scanning)
checkov -d . --output sarif --output-file results.sarif
</code></pre>

    <h4>Pipeline Integration</h4>
    <pre><code>
# GitHub Actions - IaC Scan
- name: Checkov IaC Scan
  run: |
    pip install checkov
    checkov -d ./infra/ \
      --soft-fail-on LOW \
      --hard-fail-on HIGH,CRITICAL \
      --output cli
</code></pre>

    <div class="info-box">
      <div class="info-title">💡 Shift-Left Infrastructure</div>
      <p>Run IaC scans in your <strong>pre-commit hooks</strong> for instant developer feedback. A <code>terraform plan</code> security check takes seconds and prevents misconfigurations from ever reaching a pull request.</p>
    </div>
  `,

  v4c14: `
    <h3>Secrets Detection</h3>
    <p>
      <strong>Secrets detection</strong> is the practice of scanning code repositories, build logs, and infrastructure configurations to find <strong>leaked credentials, API keys, tokens, and other sensitive information</strong> before attackers can exploit them.
    </p>

    <div class="warning-box">
      <div class="warning-title">⚠️ The Scale of the Problem</div>
      <p>Over <strong>6 million secrets</strong> were detected in public GitHub repos in 2023 alone. GitLeaks found that secrets are typically exposed for <strong>17 days</strong> before removal — attackers automate scanning of new commits within <strong>5 minutes</strong> of push.</p>
    </div>

    <h4>Types of Secrets to Detect</h4>
    <table>
      <thead>
        <tr><th>Secret Type</th><th>Examples</th><th>Risk Level</th></tr>
      </thead>
      <tbody>
        <tr><td>API Keys</td><td><code>AKIAIOSFODNN7EXAMPLE</code> (AWS), Twilio keys</td><td>Critical</td></tr>
        <tr><td>Database Credentials</td><td>Connection strings, passwords</td><td>Critical</td></tr>
        <tr><td>Private Keys</td><td>RSA/EC keys, .pem files</td><td>Critical</td></tr>
        <tr><td>Tokens</td><td>GitHub tokens, JWT secrets, Slack tokens</td><td>High</td></tr>
        <tr><td>Cloud Credentials</td><td>Service account keys, role ARNs</td><td>Critical</td></tr>
        <tr><td>Webhook URLs</td><td>Slack, Teams webhook endpoints</td><td>Medium</td></tr>
      </tbody>
    </table>

    <h4>Secrets Detection Tools</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Approach</th><th>Integration</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>GitLeaks</strong></td><td>Regex + entropy analysis</td><td>CLI, pre-commit, CI</td></tr>
        <tr><td><strong>TruffleHog</strong></td><td>Entropy + pattern matching</td><td>CLI, GitHub App</td></tr>
        <tr><td><strong>Gitleaks</strong></td><td>600+ built-in rules</td><td>CLI, CI, pre-commit</td></tr>
        <tr><td><strong>GitHub Secret Scanning</strong></td><td>Push-time scanning (built-in)</td><td>Automatic for public repos</td></tr>
        <tr><td><strong>Detect Secrets (Yelp)</strong></td><td>Baseline scanning, plugin system</td><td>CLI, pre-commit</td></tr>
      </tbody>
    </table>

    <h4>Pre-commit Hook Example</h4>
    <pre><code>
# Install trufflehog pre-commit hook
trufflehog git file://. --only-verified --fail

# GitLeaks pre-commit hook
gitleaks detect --source=. --verbose

# Add to .pre-commit-config.yaml
repos:
  - repo: https://github.com/gitleaks/gitleaks
    rev: v8.16.0
    hooks:
      - id: gitleaks
</code></pre>

    <h4>If a Secret is Leaked</h4>
    <ol>
      <li><strong>Rotate immediately:</strong> Revoke the exposed credential</li>
      <li><strong>Remove from history:</strong> Use <code>git filter-branch</code> or BFG Repo-Cleaner</li>
      <li><strong>Audit access:</strong> Check logs for any unauthorized usage</li>
      <li><strong>Notify:</strong> If customer data is affected, initiate breach notification</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 Prevention Strategy</div>
      <p>Use <strong>short-lived credentials</strong> (OAuth tokens, AWS STS), <strong>secretless architectures</strong> (workload identity, IRSA), and <strong>automated rotation</strong>. Even if a secret is leaked, it should expire before attackers can use it.</p>
    </div>
  `,

  v4c15: `
    <h3>Runtime Protection</h3>
    <p>
      <strong>Runtime protection</strong> monitors and secures applications <strong>while they are running</strong> in production. Unlike pre-deployment security tools, runtime protection detects threats that only manifest during execution — including zero-day exploits, memory corruption, and behavioral anomalies.
    </p>

    <h4>Runtime Protection Categories</h4>
    <table>
      <thead>
        <tr><th>Category</th><th>What It Does</th><th>Examples</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>RASP</strong></td>
          <td>Runtime Application Self-Protection — embedded in the app runtime</td>
          <td>Contrast Security, Sqreen (now Datadog)</td>
        </tr>
        <tr>
          <td><strong>WAF</strong></td>
          <td>Web Application Firewall — filters HTTP traffic</td>
          <td>AWS WAF, Cloudflare, Imperva</td>
        </tr>
        <tr>
          <td><strong>Container Runtime Security</strong></td>
          <td>Monitors container behavior, detects anomalies</td>
          <td>Falco, Sysdig, Aqua</td>
        </tr>
        <tr>
          <td><strong>EDR</strong></td>
          <td>Endpoint Detection and Response on hosts</td>
          <td>CrowdStrike, SentinelOne, Microsoft Defender</td>
        </tr>
        <tr>
          <td><strong>Network Monitoring</strong></td>
          <td>Detect anomalous network traffic</td>
          <td>Zeek, Suricata, Darktrace</td>
        </tr>
      </tbody>
    </table>

    <h4>RASP Deep Dive</h4>
    <p>RASP embeds security <strong>inside the application runtime</strong>, monitoring behavior and blocking attacks in real time:</p>
    <ul>
      <li><strong>In-process monitoring:</strong> Hooks into application code to detect SQL injection, XSS, path traversal</li>
      <li><strong>Context-aware:</strong> Understands application logic — reduces false positives</li>
      <li><strong>Virtual patching:</strong> Blocks known vulnerabilities without code changes</li>
      <li><strong>Zero-day protection:</strong> Behavioral analysis catches unknown attack patterns</li>
    </ul>

    <h4>Falco — Container Runtime Rules Example</h4>
    <pre><code>
# Detect shell in a container
- rule: Shell in Container
  desc: "Shell spawned inside a container"
  condition: spawned_process and container
  output: "Shell spawned in container (user=%user.name command=%proc.cmdline)"
  priority: WARNING

# Detect outbound network from database container
- rule: Unexpected Database Network Activity
  condition: container and container.image.repository contains "postgres" and outbound
  output: "Unexpected outbound from PostgreSQL container"
  priority: CRITICAL
</code></pre>

    <h4>Runtime Security Best Practices</h4>
    <ol>
      <li><strong>Layer defenses:</strong> WAF + RASP + container security + network monitoring</li>
      <li><strong>Behavioral baselines:</strong> Learn normal behavior to detect anomalies</li>
      <li><strong>Automated response:</strong> Auto-block or isolate compromised containers/instances</li>
      <li><strong>Centralized logging:</strong> Ship runtime alerts to SIEM for correlation</li>
      <li><strong>Regularly update rules:</strong> Keep detection signatures current</li>
      <li><strong>Test in staging:</strong> Validate rules don't block legitimate traffic</li>
    </ol>
  `,

  v4c16: `
    <h3>SIEM Integration</h3>
    <p>
      <strong>Security Information and Event Management (SIEM)</strong> is the <strong>central nervous system</strong> of security operations. It collects, correlates, and analyzes log data from <strong>every source</strong> across your infrastructure to provide a unified view of your security posture.
    </p>

    <h4>What a SIEM Does</h4>
    <table>
      <thead>
        <tr><th>Function</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Log Collection</strong></td><td>Aggregates logs from servers, applications, network devices, cloud services</td></tr>
        <tr><td><strong>Normalization</strong></td><td>Parses diverse log formats into a consistent schema</td></tr>
        <tr><td><strong>Correlation</strong></td><td>Links related events across sources to detect complex attacks</td></tr>
        <tr><td><strong>Alerting</strong></td><td>Triggers notifications when rules/thresholds are violated</td></tr>
        <tr><td><strong>Dashboards</strong></td><td>Visualizes security metrics and trends</td></tr>
        <tr><td><strong>Forensics</strong></td><td>Investigates incidents by searching historical data</td></tr>
        <tr><td><strong>Compliance Reporting</strong></td><td>Generates audit-ready reports for regulators</td></tr>
      </tbody>
    </table>

    <h4>Integrating SIEM in DevSecOps</h4>
    <ol>
      <li><strong>Log all the things:</strong>
        <ul>
          <li>Application logs (structured JSON)</li>
          <li>Infrastructure logs (cloud trail, VPC flow)</li>
          <li>Security tool outputs (SAST, DAST, SCA findings)</li>
          <li>Authentication/authorization events</li>
          <li>Configuration changes</li>
        </ul>
      </li>
      <li><strong>Pipeline integration:</strong>
        <ul>
          <li>Send SAST/SCA findings to SIEM as events</li>
          <li>Correlate build failures with security alerts</li>
          <li>Track vulnerability remediation over time</li>
        </ul>
      </li>
      <li><strong>Alert on security events:</strong>
        <ul>
          <li>Brute-force authentication attempts</li>
          <li>Privilege escalation</li>
          <li>Suspicious API calls</li>
          <li>Known CVE exploitation attempts</li>
        </ul>
      </li>
    </ol>

    <h4>Popular SIEM Platforms</h4>
    <table>
      <thead>
        <tr><th>Platform</th><th>Type</th><th>Strengths</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Splunk</strong></td><td>Commercial</td><td>Most powerful SPL, extensive ecosystem</td></tr>
        <tr><td><strong>Microsoft Sentinel</strong></td><td>Cloud-native</td><td>Azure-native, serverless, cost-effective</td></tr>
        <tr><td><strong>Elastic SIEM</strong></td><td>Open-source/Commercial</td><td>Full ELK stack, flexible, self-hosted</td></tr>
        <tr><td><strong>IBM QRadar</strong></td><td>Commercial</td><td>Enterprise-grade, strong correlation</td></tr>
        <tr><td><strong>LogRhythm</strong></td><td>Commercial</td><td>Integrated SOAR, advanced analytics</td></tr>
        <tr><td><strong>Wazuh</strong></td><td>Open-source</td><td>Free SIEM + XDR, great for smaller teams</td></tr>
        <tr><td><strong>Graylog</strong></td><td>Open-source</td><td>Fast, easy to set up, good for log management</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 Structured Logging is Key</div>
      <p>SIEM is only as good as the data it receives. Always log in <strong>structured JSON format</strong> with consistent fields: <code>timestamp</code>, <code>level</code>, <code>service</code>, <code>user_id</code>, <code>action</code>, <code>source_ip</code>, <code>outcome</code>. This makes correlation rules far more effective.</p>
    </div>
  `,

  v4c17: `
    <h3>SOAR Integration</h3>
    <p>
      <strong>Security Orchestration, Automation, and Response (SOAR)</strong> platforms enable security teams to <strong>automate incident response workflows</strong>, orchestrate complex multi-step processes, and respond to threats at machine speed. In a DevSecOps pipeline, SOAR connects security alerts to automated actions.
    </p>

    <h4>What SOAR Does</h4>
    <table>
      <thead>
        <tr><th>Capability</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Orchestration</strong></td><td>Connects disparate security tools into unified workflows</td></tr>
        <tr><td><strong>Automation</strong></td><td>Executes repetitive tasks without human intervention</td></tr>
        <tr><td><strong>Incident Response</strong></td><td>Standardized playbooks for common threat scenarios</td></tr>
        <tr><td><strong>Case Management</strong></td><td>Tracks incidents from detection to resolution</td></tr>
        <tr><td><strong>Threat Intelligence</strong></td><td>Enriches alerts with contextual threat data</td></tr>
      </tbody>
    </table>

    <h4>Common SOAR Playbooks for DevSecOps</h4>
    <table>
      <thead>
        <tr><th>Playbook</th><th>Trigger</th><th>Automated Actions</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Critical CVE Detected</strong></td>
          <td>SCA scan finds critical CVE in production dependency</td>
          <td>Create ticket, notify team, check exploitability, auto-patch if available</td>
        </tr>
        <tr>
          <td><strong>Credential Leak</strong></td>
          <td>TruffleHog/DevSecOps finds exposed secret in commit</td>
          <td>Revoke secret, rotate credentials, create PR to remove secret, notify developer</td>
        </tr>
        <tr>
          <td><strong>Malware Detected in Container</strong></td>
          <td>Container runtime alert (Falco, Aqua)</td>
          <td>Isolate container, capture forensic snapshot, escalate to IR team</td>
        </tr>
        <tr>
          <td><strong>Brute Force Attack</strong></td>
          <td>SIEM detects repeated auth failures from single IP</td>
          <td>Block IP at WAF, enable CAPTCHA, notify SOC</td>
        </tr>
        <tr>
          <td><strong>Compliance Violation</strong></td>
          <td>IaC scan finds policy violation in Terraform plan</td>
          <td>Post comment on PR with details, fail pipeline, create remediation ticket</td>
        </tr>
      </tbody>
    </table>

    <h4>SOAR Integration Architecture</h4>
    <pre><code>
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   SIEM /     │───▶│              │───▶│  Ticketing   │
│   Alerts     │    │    SOAR      │    │  (Jira/      │
│              │    │  Platform    │    │   ServiceNow) │
└──────────────┘    │              │    └──────────────┘
                    │  ┌─────────┐ │
                    │  │Tickets  │ │
                    │  │Remediate│ │
                    │  └─────────┘ │
┌──────────────┐    │              │    ┌──────────────┐
│   Threat     │◀───│              │───▶│  Notification│
│   Intel      │    │              │    │  (Slack/Email)│
│   Feeds      │    └──────────────┘    └──────────────┘
└──────────────┘
</code></pre>

    <h4>Popular SOAR Platforms</h4>
    <ul>
      <li><strong>Splunk SOAR (Phantom):</strong> Leading platform, deep integration with Splunk SIEM</li>
      <li><strong>Microsoft Sentinel + Logic Apps:</strong> Cloud-native SOAR for Azure environments</li>
      <li><strong>TheHive + Cortex:</strong> Open-source SOAR with strong community</li>
      <li><strong>Siemplify (Google Chronicle):</strong> Google's SOAR integrated with Chronicle SIEM</li>
      <li><strong>Tines:</strong> Lightweight, code-first SOAR automation</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Start Simple with Automation</div>
      <p>You don't need a full SOAR platform to automate incident response. Start with <strong>simple scripts triggered by SIEM webhooks</strong> — auto-block IPs, auto-rotate credentials, auto-notify teams. Evolve to full playbooks as your team matures. Even <strong>GitHub Actions or Lambda functions</strong> can handle basic automation.</p>
    </div>
  `,

  v4c18: `
    <h3>Monitoring & Alerting</h3>
    <p>
      <strong>Monitoring and alerting</strong> provide <strong>continuous visibility</strong> into application health, performance, and security. In DevSecOps, monitoring bridges the gap between deployment and incident detection — the <strong>faster you detect, the faster you respond</strong>.
    </p>

    <h4>The Three Pillars of Observability</h4>
    <table>
      <thead>
        <tr><th>Pillar</th><th>Data Type</th><th>Tools</th><th>Security Relevance</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Metrics</strong></td>
          <td>Numeric measurements over time</td>
          <td>Prometheus, Datadog, Grafana</td>
          <td>Anomaly detection, baseline deviation</td>
        </tr>
        <tr>
          <td><strong>Logs</strong></td>
          <td>Discrete event records</td>
          <td>ELK Stack, Splunk, Loki</td>
          <td>Forensics, alert triggers, audit trail</td>
        </tr>
        <tr>
          <td><strong>Traces</strong></td>
          <td>Request flow through distributed systems</td>
          <td>Jaeger, Zipkin, OpenTelemetry</td>
          <td>Lateral movement detection, latency analysis</td>
        </tr>
      </tbody>
    </table>

    <h4>Key Security Metrics to Monitor</h4>
    <table>
      <thead>
        <tr><th>Metric</th><th>Description</th><th>Alert Threshold</th></tr>
      </thead>
      <tbody>
        <tr><td>Authentication Failure Rate</td><td>Failed login attempts per minute</td><td>> 10/min from single source</td></tr>
        <tr><td>Error Rate</td><td>5xx errors as % of total requests</td><td>> 5% sustained for 5 min</td></tr>
        <tr><td>Unusual Outbound Traffic</td><td>Data egress to unknown destinations</td><td>Any traffic to known-bad IPs</td></tr>
        <tr><td>Privileged Action Frequency</td><td>Admin/root actions per hour</td><td>> 2x baseline</td></tr>
        <tr><td>Certificate Expiry</td><td>Days until TLS cert expires</td><td>< 30 days</td></tr>
        <tr><td>Container Restarts</td><td>Unexpected container restart count</td><td>> 3 in 10 minutes</td></tr>
        <tr><td>New Admin Users</td><td>Unexpected user creation events</td><td>Any outside business hours</td></tr>
      </tbody>
    </table>

    <h4>Alerting Best Practices</h4>
    <ul>
      <li><strong>Tiered severity:</strong> Critical → page on-call; High → Slack alert; Low → email digest</li>
      <li><strong>Avoid alert fatigue:</strong> Tune thresholds, deduplicate, group related alerts</li>
      <li><strong>Use runbooks:</strong> Every alert should link to a remediation runbook</li>
      <li><strong>Test alerts regularly:</strong> Fire drills ensure alerts actually reach the right people</li>
      <li><strong>Correlate events:</strong> Link related alerts into incidents automatically</li>
    </ul>

    <h4>The "Observability Maturity Model"</h4>
    <ol>
      <li><strong>Logs:</strong> Basic logging in place — you can investigate after the fact</li>
      <li><strong>Metrics:</strong> Dashboards showing system health — you see problems in real-time</li>
      <li><strong>Traces:</strong> Distributed tracing — you understand how requests flow through your system</li>
      <li><strong>AI/ML Augmented:</strong> Anomaly detection — you predict problems before they happen</li>
    </ol>
  `,

  // ==========================================
  // SECTION 3: IMPLEMENTATION
  // ==========================================

  v4c19: `
    <h3>Building Secure Pipelines</h3>
    <p>
      <strong>Building secure CI/CD pipelines</strong> requires designing the entire delivery process with security as a <strong>first-class concern</strong>. Every stage — from source to deployment — should include appropriate security gates while maintaining <strong>developer velocity</strong>.
    </p>

    <h4>Secure Pipeline Architecture</h4>
    <pre><code>
Developer ──▶ PR Created ──▶ CI Triggers
                              │
                    ┌─────────┼──────────┐
                    ▼         ▼          ▼
              Secret     Static      Unit/
              Scan       Analysis    Security
                          (SAST)      Tests
                    │         │          │
                    ▼         ▼          ▼
              Dependency   Quality    Coverage
              Check        Gate       Gate
                    │         │          │
                    ▼         ▼          ▼
              ┌─────────────────────────────┐
              │    MERGE TO MAIN BRANCH     │
              └──────────┬──────────────────┘
                         ▼
              Build → Image Scan → SBOM Gen
                         │
                         ▼
              Deploy to Staging → DAST Scan
                         │
                         ▼
              Approval Gate → Deploy to Prod
                         │
                         ▼
              Runtime Monitor → Alert
</code></pre>

    <h4>Pipeline Security Checklist</h4>
    <table>
      <thead>
        <tr><th>Stage</th><th>Security Check</th><th>Tool Example</th></tr>
      </thead>
      <tbody>
        <tr><td>Code Commit</td><td>Secret scanning, linting</td><td>GitLeaks, ESLint</td></tr>
        <tr><td>Pull Request</td><td>SAST, SCA, unit tests</td><td>Semgrep, Snyk</td></tr>
        <tr><td>Build</td><td>Dependency audit, image hardening</td><td>Trivy, Docker Bench</td></tr>
        <tr><td>Artifact</td><td>Image signing, SBOM generation</td><td>Cosign, Syft</td></tr>
        <tr><td>Deploy (Staging)</td><td>IaC validation, DAST</td><td>Checkov, ZAP</td></tr>
        <tr><td>Deploy (Production)</td><td>Approval gate, canary deploy</td><td>ArgoCD, Spinnaker</td></tr>
        <tr><td>Post-Deploy</td><td>Runtime monitoring, anomaly detection</td><td>Falco, Datadog</td></tr>
      </tbody>
    </table>

    <h4>Branch Protection Rules</h4>
    <ul>
      <li><strong>Require pull request reviews:</strong> Minimum 1-2 approving reviews</li>
      <li><strong>Require status checks:</strong> All CI checks must pass before merge</li>
      <li><strong>Require branches to be up to date:</strong> Force merge latest main</li>
      <li><strong>Restrict who can push:</strong> Only admins can push directly to main</li>
      <li><strong>Require signed commits:</strong> GPG or SSH commit signing</li>
      <li><strong>Include administrators:</strong> Rules apply to everyone</li>
    </ul>
  `,

  v4c20: `
    <h3>Integrating Security in GitOps</h3>
    <p>
      <strong>GitOps</strong> is an operational framework that uses <strong>Git as the single source of truth</strong> for declarative infrastructure and applications. By integrating security into GitOps, organizations get a complete <strong>audit trail</strong>, <strong>peer review for infrastructure changes</strong>, and <strong>automated policy enforcement</strong>.
    </p>

    <h4>How GitOps Enhances Security</h4>
    <ul>
      <li><strong>Git history = audit trail:</strong> Every infrastructure change is tracked, reviewed, and auditable</li>
      <li><strong>Peer review for infrastructure:</strong> PRs for K8s manifests, Terraform changes require approval</li>
      <li><strong>Drift detection:</strong> GitOps controllers reconcile actual state with desired state — detecting unauthorized changes</li>
      <li><strong>Easy rollback:</strong> <code>git revert</code> rolls back any deployment</li>
      <li><strong>Separation of duties:</strong> Developers merge code; GitOps operator handles deployment</li>
    </ul>

    <h4>GitOps Security Architecture</h4>
    <pre><code>
Developer ──git push──▶ Git Repository
                            │
                            ▼
                    ┌───────────────┐
                    │  CI Pipeline  │ (SAST, SCA, image build)
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │ GitOps Operator│ (ArgoCD / Flux)
                    │ - Validates   │
                    │ - Diffs       │
                    │ - Applies     │
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │ K8s Cluster   │
                    │ - OPA/Gatekeeper│
                    │ - Falco        │
                    └───────────────┘
</code></pre>

    <h4>Security Integration Points</h4>
    <table>
      <thead>
        <tr><th>Point</th><th>Security Check</th><th>Tool</th></tr>
      </thead>
      <tbody>
        <tr><td>Git Push</td><td>Branch protection, signed commits</td><td>GitHub/GitLab</td></tr>
        <tr><td>CI Pipeline</td><td>SAST, SCA, container scanning</td><td>Semgrep, Trivy</td></tr>
        <tr><td>Image Registry</td><td>Image signing, vulnerability scan</td><td>Cosign, Trivy</td></tr>
        <tr><td>GitOps Sync</td><td>Policy validation, drift detection</td><td>OPA/Gatekeeper, ArgoCD</td></tr>
        <tr><td>Cluster Admission</td><td>Pod security, network policy</td><td>Kyverno, Pod Security Standards</td></tr>
        <tr><td>Runtime</td><td>Behavior monitoring, anomaly detection</td><td>Falco, Datadog</td></tr>
      </tbody>
    </table>

    <h4>ArgoCD with Security</h4>
    <pre><code>
# ApplicationSet with security policy
apiVersion: argoproj.io/v1alpha1
kind: ApplicationSet
metadata:
  name: secure-apps
spec:
  generators:
    - list:
        elements:
          - cluster: production
            namespace: secure-app
  template:
    metadata:
      name: "{{cluster}}-{{namespace}}"
    spec:
      project: default
      source:
        repoURL: https://github.com/org/infra
        targetRevision: main
        path: clusters/{{cluster}}
      destination:
        server: https://kubernetes.default.svc
        namespace: "{{namespace}}"
      syncPolicy:
        automated:
          prune: true
          selfHeal: true  # Auto-remediate drift
</code></pre>

    <div class="info-box">
      <div class="info-title">💡 Progressive Delivery + Security</div>
      <p>Combine GitOps with <strong>progressive delivery</strong> (Argo Rollouts, Flagger) for secure deployments. Canary analysis runs security checks alongside performance metrics before promoting to full production traffic.</p>
    </div>
  `,

  v4c21: `
    <h3>Policy as Code</h3>
    <p>
      <strong>Policy as Code</strong> is the practice of defining, managing, and enforcing <strong>organizational policies through machine-readable code</strong> rather than manual processes. Policies become <strong>version-controlled, testable, and automatically enforced</strong> across your entire infrastructure.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Automated Governance</div>
      <p>Without Policy as Code, governance relies on <strong>manual reviews and checklists</strong> — slow, inconsistent, and error-prone. With Policy as Code, policies are <strong>automatically enforced</strong> at every stage of the pipeline, from development to production.</p>
    </div>

    <h4>Key Policy Engines</h4>
    <table>
      <thead>
        <tr><th>Engine</th><th>Language</th><th>Best For</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>OPA (Open Policy Agent)</strong></td><td>Rego</td><td>General-purpose — K8s, Terraform, APIs</td></tr>
        <tr><td><strong>Kyverno</strong></td><td>YAML/JSON</td><td>Kubernetes-native policies</td></tr>
        <tr><td><strong>Sentinel (HashiCorp)</strong></td><td>Sentinel HCL</td><td>Terraform, Vault, Consul</td></tr>
        <tr><td><strong>AWS Config Rules</strong></td><td>Rego/Custom Lambda</td><td>AWS resource compliance</td></tr>
        <tr><td><strong>Azure Policy</strong></td><td>JSON</td><td>Azure resource governance</td></tr>
      </tbody>
    </table>

    <h4>OPA Example: Kubernetes Network Policy</h4>
    <pre><code>
# Rego policy: Enforce that all pods have resource limits
package kubernetes.admission

deny[msg] {
  container := input.request.object.spec.containers[_]
  not container.resources.limits.memory
  msg := sprintf("Container %v must have memory limits", [container.name])
}

deny[msg] {
  container := input.request.object.spec.containers[_]
  not container.resources.limits.cpu
  msg := sprintf("Container %v must have CPU limits", [container.name])
}
</code></pre>

    <h4>OPA Example: Terraform Policy</h4>
    <pre><code>
# Rego policy: All S3 buckets must be encrypted
package terraform.aws

deny[msg] {
  resource_type == "aws_s3_bucket"
  not resource.values.server_side_encryption_configuration
  msg := sprintf("S3 bucket %v must have encryption enabled", [resource.address])
}

# All security groups must restrict SSH
deny[msg] {
  resource_type == "aws_security_group"
  ingress := resource.values.ingress[_]
  contains(ingress.from_port, 22)
  contains(ingress.cidr_blocks, "0.0.0.0/0")
  msg := sprintf("Security group %v must not allow SSH from anywhere", [resource.address])
}
</code></pre>

    <h4>Policy Lifecycle</h4>
    <ol>
      <li><strong>Author:</strong> Write policies in code (Rego, YAML, HCL)</li>
      <li><strong>Test:</strong> Unit test policies against known-good and known-bad inputs</li>
      <li><strong>Deploy:</strong> Push policies to your policy engine via CI/CD</li>
      <li><strong>Enforce:</strong> Apply policies as admission controllers or CI gates</li>
      <li><strong>Monitor:</strong> Track policy violations and exceptions</li>
      <li><strong>Iterate:</strong> Refine policies based on violations and business needs</li>
    </ol>
  `,

  v4c22: `
    <h3>Cloud Native Security</h3>
    <p>
      <strong>Cloud Native Security</strong> encompasses the <strong>principles, practices, and tools</strong> for securing applications built on <strong>cloud-native architectures</strong> — microservices, containers, Kubernetes, serverless, and service meshes. It shifts security from perimeter-based defense to <strong>identity-based, zero-trust models</strong>.
    </p>

    <h4>Cloud Native Security Pillars</h4>
    <table>
      <thead>
        <tr><th>Pillar</th><th>Focus</th><th>Key Controls</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Identity & Access</strong></td>
          <td>Workload identity, least privilege, service-to-service auth</td>
          <td>IRSA, Workload Identity, Service Accounts, mTLS</td>
        </tr>
        <tr>
          <td><strong>Supply Chain</strong></td>
          <td>Code dependencies, CI/CD pipeline, container images</td>
          <td>SBOM, image signing, SCA, SLSA</td>
        </tr>
        <tr>
          <td><strong>Network</strong></td>
          <td>Microsegmentation, service mesh, east-west traffic</td>
          <td>Cilium, Istio, Calico, Network Policies</td>
        </tr>
        <tr>
          <td><strong>Data</strong></td>
          <td>Encryption, access control, data lifecycle</td>
          <td>KMS, encryption at rest/in transit, DLP</td>
        </tr>
        <tr>
          <td><strong>Runtime</strong></td>
          <td>Container behavior, system call monitoring</td>
          <td>Falco, gVisor, Kata Containers</td>
        </tr>
        <tr>
          <td><strong>Observability</strong></td>
          <td>Logging, monitoring, tracing, alerting</td>
          <td>Prometheus, Grafana, OpenTelemetry</td>
        </tr>
      </tbody>
    </table>

    <h4>The Cloud Native Computing Foundation (CNCF) Security Audit</h4>
    <p>The CNCF publishes a <strong>security audit</strong> of critical projects like Kubernetes, containerd, and Envoy. These audits identify vulnerabilities and provide hardening guidance. Always review relevant audits for components in your stack.</p>

    <h4>12-Factor App Security</h4>
    <p>Cloud-native apps should follow the <strong>12-Factor App</strong> methodology with security additions:</p>
    <ol>
      <li>Codebase — one repo tracked in revision control</li>
      <li>Dependencies — explicitly declared and isolated</li>
      <li>Config — stored in environment variables (never in code)</li>
      <li>Backing services — treated as attached resources</li>
      <li>Build, release, run — strictly separated stages</li>
      <li>Processes — stateless, disposable</li>
      <li>Port binding — self-contained services</li>
      <li>Concurrency — horizontal scaling</li>
      <li>Disposability — fast startup and graceful shutdown</li>
      <li>Dev/prod parity — keep environments as similar as possible</li>
      <li>Logs — treated as event streams</li>
      <li>Admin processes — run as one-off processes</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 Zero Trust in Cloud Native</div>
      <p><strong>Zero Trust</strong> in cloud-native means: <strong>never trust, always verify</strong> — even within your cluster. Every service-to-service call should be authenticated (service mesh mTLS), authorized (policy engines), and encrypted (TLS). Network policies restrict pod-to-pod communication to only what's necessary.</p>
    </div>
  `,

  v4c23: `
    <h3>Zero Trust Pipeline</h3>
    <p>
      <strong>Zero Trust Pipeline</strong> applies <strong>Zero Trust principles</strong> — <em>"never trust, always verify"</em> — to the entire <strong>software delivery pipeline</strong>. Every component, user, and process must be authenticated, authorized, and continuously validated.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Trust Nothing in the Pipeline</div>
      <p>In a Zero Trust Pipeline, you don't trust: <strong>code commits</strong> (without review), <strong>dependencies</strong> (without scanning), <strong>builds</strong> (without signing), <strong>deployments</strong> (without approval), or <strong>runners</strong> (without isolation). Every step requires verification.</p>
    </div>

    <h4>Zero Trust Pipeline Components</h4>
    <table>
      <thead>
        <tr><th>Component</th><th>Principle</th><th>Implementation</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Identity Verification</strong></td>
          <td>Every actor is authenticated</td>
          <td>OIDC, SSO, MFA for pipeline access; workload identity for services</td>
        </tr>
        <tr>
          <td><strong>Least Privilege Access</strong></td>
          <td>Minimum necessary permissions</td>
          <td>Scoped tokens, short-lived credentials, role-based pipeline access</td>
        </tr>
        <tr>
          <td><strong>Microsegmentation</strong></td>
          <td>Isolate pipeline stages</td>
          <td>Separate build/deploy/staging networks; ephemeral runners</li>
        </tr>
        <tr>
          <td><strong>Continuous Verification</strong></td>
          <td>Re-validate at every stage</td>
          <td>Policy checks at each gate; don't propagate artifacts without verification</li>
        </tr>
        <tr>
          <td><strong>Assume Breach</strong></td>
          <td>Design for compromised components</td>
          <td>Immutable artifacts, rollback capability, blast radius limitation</li>
        </tr>
      </tbody>
    </table>

    <h4>Implementing Zero Trust in CI/CD</h4>
    <ol>
      <li><strong>Verify every commit:</strong> GPG-signed commits, branch protection, mandatory reviews</li>
      <li><strong>Verify every dependency:</strong> SCA on every build, block known vulnerabilities</li>
      <li><strong>Verify every build:</strong> Reproducible builds, build attestations (SLSA)</li>
      <li><strong>Verify every artifact:</strong> Container image signing (Sigstore/Cosign), SBOM attachment</li>
      <li><strong>Verify every deployment:</strong> Approval gates, canary analysis, automated rollback</li>
      <li><strong>Verify every access:</strong> Audit log access, just-in-time access to production</li>
    </ol>

    <h4>Supply Chain Security (SLSA Framework)</h4>
    <p><strong>SLSA (Supply-chain Levels for Software Artifacts)</strong> provides progressive levels of assurance:</p>
    <table>
      <thead>
        <tr><th>Level</th><th>Requirements</th><th>Protection Against</th></tr>
      </thead>
      <tbody>
        <tr><td>Level 1</td><td>Documented build process; provenance exists</td><td>Confusion about what was built</td></tr>
        <tr><td>Level 2</td><td>Hosted build platform; signed provenance</td><td>Tampering by build platform</td></tr>
        <tr><td>Level 3</td><td>Hardened build platform; non-falsifiable provenance</td><td>Compromised build platform</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 Start with SLSA Level 2</div>
      <p>For most organizations, <strong>SLSA Level 2</strong> is achievable and provides strong protection. Use <strong>GitHub Actions with OIDC</strong> or <strong>Tekton Chains</strong> for automatic provenance generation. Level 3 requires significant investment in build infrastructure hardening.</p>
    </div>
  `,

  v4c24: `
    <h3>Supply Chain Security</h3>
    <p>
      <strong>Supply chain security</strong> protects against attacks that compromise your software through <strong>third-party components, services, and processes</strong>. Modern applications depend on massive dependency trees — a single compromised package can affect <strong>millions of downstream users</strong>.
    </p>

    <div class="warning-box">
      <div class="warning-title">⚠️ Supply Chain Attack Examples</div>
      <ul>
        <li><strong>SolarWinds (2020):</strong> Attacker inserted backdoor into build process, affecting 18,000 organizations</li>
        <li><strong>Codecov (2021):</strong> Modified CI script exfiltrated environment variables from customers</li>
        <li><strong>Log4Shell (2021):</strong> Critical vulnerability in ubiquitous logging library affected millions of systems</li>
        <li><strong>ua-parser-js (2021):</strong> NPM package compromised with crypto miner and credential stealer</li>
        <li><strong>3CX (2023):</strong> Signed application distributed with trojanized dependency</li>
      </ul>
    </div>

    <h4>Supply Chain Attack Vectors</h4>
    <table>
      <thead>
        <tr><th>Vector</th><th>Description</th><th>Prevention</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Dependency Confusion</strong></td>
          <td>Attacker publishes malicious package with higher version to public registry</td>
          <td>Scoped packages, private registry precedence, lock files</td>
        </tr>
        <tr>
          <td><strong>Typosquatting</strong></td>
          <td>Package name similar to popular dependency</td>
          <td>Verify package names, use SCA tools, lock dependencies</td>
        </tr>
        <tr>
          <td><strong>Compromised Maintainer Account</strong></td>
          <td>Attacker gains access to popular package repository</td>
          <td>2FA on package registries, maintain key rotation</td>
        </tr>
        <tr>
          <td><strong>Build Process Compromise</strong></td>
          <td>Malicious code injected during compilation/packaging</td>
          <td>Reproducible builds, SLSA compliance, build attestation</td>
        </tr>
        <tr>
          <td><strong>Man-in-the-Middle</strong></td>
          <td>Intercepting package downloads to inject malware</td>
          <td>Pin checksums, use HTTPS, verify signatures</td>
        </tr>
      </tbody>
    </table>

    <h4>Supply Chain Security Controls</h4>
    <ol>
      <li>
        <strong>Dependency Management:</strong>
        <ul>
          <li>Use lock files and verify checksums</li>
          <li>Run SCA on every build</li>
          <li>Monitor for new vulnerabilities in existing dependencies</li>
          <li>Remove unused dependencies</li>
        </ul>
      </li>
      <li>
        <strong>Build Integrity:</strong>
        <ul>
          <li>Use hermetic, reproducible builds</li>
          <li>Generate build provenance (SLSA)</li>
          <li>Sign artifacts (Sigstore, Cosign)</li>
          <li>Verify signatures before deployment</li>
        </ul>
      </li>
      <li>
        <strong>Registry Security:</strong>
        <ul>
          <li>Use private registries with curated packages</li>
          <li>Enable 2FA on all package registry accounts</li>
          <li>Monitor for typosquatting</li>
        </ul>
      </li>
      <li>
        <strong>SBOM Management:</strong>
        <ul>
          <li>Generate SBOM for every build (SPDX, CycloneDX)</li>
          <li>Store SBOMs alongside artifacts</li>
          <li>Query SBOMs when new CVEs are disclosed</li>
        </ul>
      </li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 Executive Order 14028</div>
      <p>US Executive Order 14028 (<strong>Improving the Nation's Cybersecurity</strong>) mandates SBOM generation for federal software suppliers and promotes adoption of SLSA, Software Bill of Materials, and secure development practices across the technology supply chain.</p>
    </div>
  `,

  v4c25: `
    <h3>SBOM Management</h3>
    <p>
      <strong>SBOM (Software Bill of Materials)</strong> is a <strong>formal, machine-readable inventory</strong> of all components, libraries, and dependencies in a software product. It enables organizations to <strong>track, analyze, and secure</strong> their software supply chain.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: SBOM as a Security Foundation</div>
      <p>An SBOM answers the critical question: <strong>"What's in my software?"</strong> When a new vulnerability is disclosed (like Log4Shell), organizations with SBOMs can <strong>immediately determine exposure</strong> — those without must scramble to inventory manually.</p>
    </div>

    <h4>SBOM Standards</h4>
    <table>
      <thead>
        <tr><th>Standard</th><th>Format</th><th>Backed By</th><th>Features</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>SPDX</strong></td>
          <td>JSON, XML, YAML, RDF</td>
          <td>Linux Foundation</td>
          <td>ISO/IEC 5962:2021, most mature, license focus</td>
        </tr>
        <tr>
          <td><strong>CycloneDX</strong></td>
          <td>JSON, XML</td>
          <td>OWASP</td>
          <td>Security-focused, vulnerability references, VEX support</td>
        </tr>
        <tr>
          <td><strong>SWID Tags</strong></td>
          <td>XML</td>
          <td>ISO/IEC 19770-2</td>
          <td>Installed software identification, enterprise use</td>
        </tr>
      </tbody>
    </table>

    <h4>What SBOMs Contain</h4>
    <ul>
      <li><strong>Component inventory:</strong> Name, version, publisher, license</li>
      <li><strong>Dependencies:</strong> Direct and transitive dependencies with relationships</li>
      <li><strong>Vulnerability references:</strong> CVE mappings for known issues</li>
      <li><strong>Hashes:</strong> Cryptographic hashes for integrity verification</li>
      <li><strong>Suppliers:</strong> Origin and maintainer information</li>
      <li><strong>SBOM metadata:</strong> Creation timestamp, tools used, SPDX namespace</li>
    </ul>

    <h4>SBOM Generation Tools</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Ecosystem</th><th>Output Formats</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Syft</strong></td><td>Multi-language</td><td>SPDX, CycloneDX</td></tr>
        <tr><td><strong>Trivy</strong></td><td>Multi-language</td><td>SPDX, CycloneDX</td></tr>
        <tr><td><strong>cdxgen</strong></td><td>Multi-language</td><td>CycloneDX</td></tr>
        <tr><td><strong>CycloneDX CLI</strong></td><td>Multi-language</td><td>CycloneDX</td></tr>
        <tr><td><strong>go-sbom</strong></td><td>Go</td><td>SPDX, CycloneDX</td></tr>
      </tbody>
    </table>

    <h4>SBOM in CI/CD</h4>
    <pre><code>
# Generate SBOM with Syft
syft dir:. --output spdx-json --sbom-name myapp --output-file sbom.spdx

# Generate SBOM from container image
syft registry:myapp:latest --output cyclonedx-json --output-file sbom.cdx.json

# Generate SBOM with Trivy
trivy image --format spdx --output sbom.spdx myapp:latest

# Upload to Dependency Track (vulnerability analysis)
curl -X POST "https://dt.example.com/api/v1/bom" \
  -H "X-Api-Key: API_KEY" \
  -F "bom=@sbom.cdx.json"
</code></pre>

    <h4>SBOM Management Best Practices</h4>
    <ol>
      <li><strong>Generate for every build:</strong> Attach SBOM to every release artifact</li>
      <li><strong>Store centrally:</strong> Use SBOM repositories (Dependency Track, GUAC, purl.dev)</li>
      <li><strong>Monitor continuously:</strong> Re-scan SBOMs when new CVEs are disclosed</li>
      <li><strong>Enrich with vulnerability data:</strong> Cross-reference SBOMs with CVE databases</li>
      <li><strong>Share with customers:</strong> Provide SBOMs to downstream consumers</li>
    </ol>
  `,

  v4c26: `
    <h3>Vulnerability Management</h3>
    <p>
      <strong>Vulnerability Management</strong> is the continuous process of <strong>identifying, evaluating, treating, and reporting</strong> on security vulnerabilities in systems and software. In a DevSecOps context, it's not a quarterly scan — it's a <strong>continuous, automated workflow</strong> integrated into every stage of the pipeline.
    </p>

    <h4>Vulnerability Management Lifecycle</h4>
    <ol>
      <li><strong>Discover:</strong> Identify all assets, software, and dependencies across environments</li>
      <li><strong>Assess:</strong> Scan for vulnerabilities and correlate with asset criticality</li>
      <li><strong>Prioritize:</strong> Rank by risk — considering CVSS score, exploitability, asset value, and exposure</li>
      <li><strong>Remediate:</strong> Fix vulnerabilities through patches, configuration changes, or compensating controls</li>
      <li><strong>Verify:</strong> Confirm the fix was effective through re-scanning</li>
      <li><strong>Report:</strong> Track metrics for continuous improvement and compliance</li>
    </ol>

    <h4>Risk-Based Prioritization</h4>
    <p>Not all vulnerabilities are created equal. Prioritize using multiple factors:</p>
    <table>
      <thead>
        <tr><th>Factor</th><th>Consideration</th><th>Weight</th></tr>
      </thead>
      <tbody>
        <tr><td>CVSS Score</td><td>Base severity (0-10)</td><td>Starting point</td></tr>
        <tr><td>Exploitability</td><td>Is there a public exploit? Is it being exploited in the wild?</td><td>High impact</td></tr>
        <tr><td>Asset Criticality</td><td>Is the asset internet-facing? Does it hold sensitive data?</td><td>Very high</td></tr>
        <tr><td>Exposure</td><td>Network exposure, authentication requirements</td><td>Contextual</td></tr>
        <tr><td>EPSS Score</td><td>Exploit Prediction Scoring System probability</td><td>Data-driven</td></tr>
        <tr><td>SSVC Decision</td><td>Exploitation status, Technical Impact, Mission Prevalence</td><td>CISA recommended</td></tr>
      </tbody>
    </table>

    <h4>Vulnerability Management in CI/CD</h4>
    <pre><code>
# Tiered remediation approach in pipeline
# Critical/High: Block deployment
# Medium: Warn, track in backlog
# Low: Log for trend analysis

- name: Vulnerability Gate
  run: |
    CRITICAL=$(trivy image --severity CRITICAL --quiet myapp:latest | wc -l)
    HIGH=$(trivy image --severity HIGH --quiet myapp:latest | wc -l)

    if [ "$CRITICAL" -gt 0 ]; then
      echo "❌ Blocking: $CRITICAL critical vulnerabilities found"
      exit 1
    fi

    if [ "$HIGH" -gt 5 ]; then
      echo "⚠️ Warning: $HIGH high vulnerabilities found"
      # Don't block, but notify
    fi
</code></pre>

    <h4>Key Metrics</h4>
    <table>
      <thead>
        <tr><th>Metric</th><th>Target</th><th>Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td>Mean Time to Remediate (MTTR)</td><td>Critical: &lt; 7 days, High: &lt; 30 days</td><td>Measures response speed</td></tr>
        <tr><td>Open Vulnerability Backlog</td><td>Critical: 0, High: &lt; 5</td><td>Measures remediation capacity</td></tr>
        <tr><td>Vulnerability Re-open Rate</td><td>&lt; 5%</td><td>Measures fix quality</td></tr>
        <tr><td>Scan Coverage</td><td>&gt; 95% of assets</td><td>Measures visibility</td></tr>
        <tr><td>Escape Rate</td><td>&lt; 10%</td><td>Measures pipeline effectiveness</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 EPSS + CVSS = Better Prioritization</div>
      <p>Using CVSS alone leads to <strong>alert fatigue</strong> — many high-CVSS vulnerabilities are never exploited. Combine with <strong>EPSS (Exploit Prediction Scoring System)</strong> from FIRST.org, which predicts the probability of exploitation in the next 30 days. A CVSS 9.8 with 0.01% EPSS is less urgent than a CVSS 7.5 with 85% EPSS.</p>
    </div>
  `,

  v4c27: `
    <h3>Incident Response</h3>
    <p>
      <strong>Incident Response (IR)</strong> in DevSecOps is a <strong>structured approach</strong> to detecting, containing, eradicating, and recovering from security incidents. Unlike traditional IR, DevSecOps IR integrates security tooling and automation directly into the pipeline and runtime environment for <strong>faster detection and response</strong>.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Prepare Before You React</div>
      <p>The most effective incident response happens <strong>before an incident</strong>. Having playbooks, automated containment, and clear roles means the difference between a 5-minute response and a 5-day investigation.</p>
    </div>

    <h4>IR Framework: NIST SP 800-61</h4>
    <table>
      <thead>
        <tr><th>Phase</th><th>Activities</th><th>DevSecOps Integration</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>1. Preparation</strong></td>
          <td>IR plan, tooling, training, communication channels</td>
          <td>Automated playbooks, runbooks in Git, alerting integration</td>
        </tr>
        <tr>
          <td><strong>2. Detection & Analysis</strong></td>
          <td>Identify indicators of compromise (IoCs), triage alerts</td>
          <td>SIEM correlation, threat intel feeds, ML anomaly detection</td>
        </tr>
        <tr>
          <td><strong>3. Containment</strong></td>
          <td>Isolate affected systems, prevent lateral movement</td>
          <td>Auto-isolate containers, revoke credentials, kill workloads</td>
        </tr>
        <tr>
          <td><strong>4. Eradication</strong></td>
          <td>Remove root cause, patch vulnerabilities</td>
          <td>CI/CD hotfix pipeline, rollback to known-good state</td>
        </tr>
        <tr>
          <td><strong>5. Recovery</strong></td>
          <td>Restore systems, verify integrity, monitor for recurrence</td>
          <td>GitOps rollback, canary deployment, enhanced monitoring</td>
        </tr>
        <tr>
          <td><strong>6. Lessons Learned</strong></td>
          <td>Post-incident review, update procedures</td>
          <td>Update detection rules, add regression tests</td>
        </tr>
      </tbody>
    </table>

    <h4>Automated IR Actions</h4>
    <pre><code>
# Example: Automated container incident response
Trigger: Falco detects suspicious process in container

1. Falco sends alert to webhook
2. Lambda/SOAR receives alert
3. Automated actions:
   a. Pause the compromised container
   b. Kill associated pods
   c. Revoke service account tokens
   d. Block source IP at network level
   e. Create incident ticket (PagerDuty/Jira)
   f. Capture forensic data (memory dump, logs)
   g. Notify security team via Slack

# Example: Pipeline response to compromised dependency
Trigger: SCA discovers critical zero-day in production dependency

1. Automated PR created to update dependency
2. Pipeline prioritizes this PR
3. If fix available: fast-track through CI/CD
4. If no fix: WAF rule deployed to block exploit vector
5. SBOM updated and shared with affected customers
</code></pre>

    <h4>IR Readiness Checklist</h4>
    <ul>
      <li><strong>IR Plan documented and reviewed quarterly</strong></li>
      <li><strong>Roles and responsibilities defined</strong> (IR lead, comms, technical lead)</li>
      <li><strong>Communication channels established</strong> (dedicated Slack channel, bridge line)</li>
      <li><strong>Forensic tools available</strong> (disk imaging, memory capture, log preservation)</li>
      <li><strong>External contacts maintained</strong> (legal, PR, law enforcement, forensics firm)</li>
      <li><strong>Tabletop exercises conducted semi-annually</strong></li>
      <li><strong>Automated containment procedures tested</strong></li>
    </ul>
  `,

  v4c28: `
    <h3>Continuous Compliance</h3>
    <p>
      <strong>Continuous Compliance</strong> replaces the traditional <strong>"audit once a year"</strong> model with <strong>real-time, automated compliance monitoring</strong>. In DevSecOps, compliance is not a separate activity — it's <strong>built into the pipeline itself</strong>, providing constant evidence of security posture.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Compliance as a Pipeline Stage</div>
      <p>Every build, deployment, and infrastructure change generates compliance evidence automatically. Auditors no longer need to "come find" evidence — it's <strong>already collected, organized, and searchable</strong>.</p>
    </div>

    <h4>Continuous Compliance vs. Periodic Audit</h4>
    <table>
      <thead>
        <tr><th>Aspect</th><th>Periodic Audit</th><th>Continuous Compliance</th></tr>
      </thead>
      <tbody>
        <tr><td>Frequency</td><td>Annually / Quarterly</td><td>Real-time / Every deployment</td></tr>
        <tr><td>Evidence Collection</td><td>Manual, time-consuming</td><td>Automated, always available</td></tr>
        <tr><td>Gap Detection</td><td>Between audits</td><td>Immediately on drift</td></tr>
        <tr><td>Cost</td><td>High (consultant + disruption)</td><td>Lower (automated tooling)</td></tr>
        <tr><td>Risk Window</td><td>Months of unknown compliance</td><td>Minutes of drift detection</td></tr>
        <tr><td>Stakeholder Confidence</td><td>Annual snapshot</td><td>Live compliance dashboard</td></tr>
      </tbody>
    </table>

    <h4>Implementing Continuous Compliance</h4>
    <ol>
      <li><strong>Define compliance requirements as code:</strong>
        <ul>
          <li>Map frameworks (HIPAA, PCI DSS, SOC 2, HITRUST) to technical controls</li>
          <li>Implement controls as automated policies (OPA, Kyverno)</li>
        </ul>
      </li>
      <li><strong>Integrate compliance checks into CI/CD:</strong>
        <ul>
          <li>IaC scanning validates infrastructure compliance</li>
          <li>Container scanning validates image compliance</li>
          <li>SAST/SCA validates code compliance</li>
        </ul>
      </li>
      <li><strong>Continuous monitoring:</strong>
        <ul>
          <li>Runtime compliance monitoring (config drift, access policy violations)</li>
          <li>Integration with compliance management platforms</li>
        </ul>
      </li>
      <li><strong>Automated evidence collection:</strong>
        <ul>
          <li>Scan results, access logs, configuration snapshots</li>
          <li>Stored in searchable, immutable storage</li>
        </ul>
      </li>
      <li><strong>Dashboards and reporting:</strong>
        <ul>
          <li>Real-time compliance posture dashboards</li>
          <li>Automated report generation for auditors</li>
        </ul>
      </li>
    </ol>

    <h4>Tools for Continuous Compliance</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Function</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Vanta</strong></td><td>Automated compliance monitoring, evidence collection</td></tr>
        <tr><td><strong>Drata</strong></td><td>Continuous compliance automation</td></tr>
        <tr><td><strong>Secureframe</strong></td><td>Compliance workflow automation</td></tr>
        <tr><td><strong>Laika</strong></td><td>Open-source compliance management</td></tr>
        <tr><td><strong>Prowler</strong></td><td>AWS compliance scanning</td></tr>
        <tr><td><strong>ScoutSuite</strong></td><td>Multi-cloud compliance auditing</td></tr>
      </tbody>
    </table>
  `,

  v4c29: `
    <h3>Security Metrics</h3>
    <p>
      <strong>Security metrics</strong> provide <strong>quantifiable measurements</strong> of an organization's security posture. In DevSecOps, metrics drive decisions — they tell you where to invest effort, whether controls are working, and how security is improving (or degrading) over time.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: What Gets Measured Gets Improved</div>
      <p>Without metrics, security is an opinion. With metrics, you can demonstrate <strong>progress to leadership</strong>, <strong>justify investments</strong>, and <strong>identify weak spots</strong> in your security program.</p>
    </div>

    <h4>The DREAD Model for Vulnerability Scoring</h4>
    <table>
      <thead>
        <tr><th>Factor</th><th>Question</th><th>Score</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Damage Potential:</strong></td><td>How bad would an exploit be?</td><td>0-10</td></tr>
        <tr><td><strong>Reproducibility:</strong></td><td>How easy is it to reproduce the attack?</td><td>0-10</td></tr>
        <tr><td><strong>Exploitability:</strong></td><td>How easy is it to launch the attack?</td><td>0-10</td></tr>
        <tr><td><strong>Affected Users:</strong></td><td>How many users would be impacted?</td><td>0-10</td></tr>
        <tr><td><strong>Discoverability:</strong></td><td>How easy is it to discover the vulnerability?</td><td>0-10</td></tr>
      </tbody>
    </table>

    <h4>Essential Security Metrics</h4>
    <table>
      <thead>
        <tr><th>Metric</th><th>Formula / Method</th><th>Why It Matters</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Mean Time to Detect (MTTD)</strong></td>
          <td>Avg time from incident start to detection</td>
          <td>Measures monitoring effectiveness</td>
        </tr>
        <tr>
          <td><strong>Mean Time to Remediate (MTTR)</strong></td>
          <td>Avg time from detection to remediation</td>
          <td>Measures response capability</td>
        </tr>
        <tr>
          <td><strong>Vulnerability Escape Rate</strong></td>
          <td>(Vulns found in prod / Total vulns) × 100</td>
          <td>Measures pipeline effectiveness</td>
        </tr>
        <tr>
          <td><strong>Scan Coverage</strong></td>
          <td>(Scanned assets / Total assets) × 100</td>
          <td>Measures visibility</td>
        </tr>
        <tr>
          <td><strong>First-Time Fix Rate</strong></td>
          <td>(Fixed on first attempt / Total findings) × 100</td>
          <td>Measures remediation quality</td>
        </tr>
        <tr>
          <td><strong>Compliance Score</strong></td>
          <td>(Passing controls / Total controls) × 100</td>
          <td>Overall compliance posture</td>
        </tr>
        <tr>
          <td><strong>Open Vulnerability Backlog</strong></td>
          <td>Count of unfixed vulnerabilities by severity</td>
          <td>Risk exposure indicator</td>
        </tr>
      </tbody>
    </table>

    <h4>Building a Security Dashboard</h4>
    <p>Effective security dashboards should track:</p>
    <ul>
      <li><strong>Vulnerability trends:</strong> New findings per week, remediation velocity</li>
      <li><strong>Pipeline health:</strong> Scan pass/fail rates, blocked deployments</li>
      <li><strong>Compliance status:</strong> Control pass rates by framework</li>
      <li><strong>Risk posture:</strong> Weighted risk score by asset criticality</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 CISO-Level Metrics</div>
      <p>For executive reporting, focus on <strong>business-impact metrics</strong>, not technical details: reduction in risk exposure, cost avoided through early detection, compliance audit pass rates, and time-to-remediate trends. Translate technical findings into <strong>dollars and risk</strong>.</p>
    </div>
  `,

  v4c30: `
    <h3>Maturity Assessment</h3>
    <p>
      <strong>DevSecOps Maturity Assessment</strong> evaluates how well an organization integrates security into its DevOps practices. It identifies gaps, prioritizes improvements, and provides a <strong>roadmap for advancing security maturity</strong> over time.
    </p>

    <h4>DevSecOps Maturity Levels</h4>
    <table>
      <thead>
        <tr><th>Level</th><th>Name</th><th>Characteristics</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><strong>Initial</strong></td>
          <td>Security is reactive; no automated security testing; ad-hoc practices</td>
        </tr>
        <tr>
          <td>2</td>
          <td><strong>Managed</strong></td>
          <td>Basic SAST/DAST in pipeline; security reviews at major releases; some automation</td>
        </tr>
        <tr>
          <td>3</td>
          <td><strong>Defined</strong></td>
          <td>Security gates at every pipeline stage; SCA, IaC scanning, container scanning; metrics tracked</td>
        </tr>
        <tr>
          <td>4</td>
          <td><strong>Quantitatively Managed</strong></td>
          <td>All stages automated; continuous compliance; risk-based prioritization; SLAs for remediation</td>
        </tr>
        <tr>
          <td>5</td>
          <td><strong>Optimizing</strong></td>
          <td>AI-assisted detection; predictive risk management; continuous improvement; security as enabler</td>
        </tr>
      </tbody>
    </table>

    <h4>Assessment Categories</h4>
    <ol>
      <li>
        <strong>Culture & Awareness:</strong>
        <ul>
          <li>Security training frequency and coverage</li>
          <li>Security champion program</li>
          <li>Executive sponsorship</li>
        </ul>
      </li>
      <li>
        <strong>Process & Governance:</strong>
        <ul>
          <li>Secure SDLC adoption</li>
          <li>Threat modeling practice</li>
          <li>Security requirements in user stories</li>
        </ul>
      </li>
      <li>
        <strong>Automation & Tooling:</strong>
        <ul>
          <li>SAST coverage and pipeline integration</li>
          <li>SCA coverage and fix automation</li>
          <li>IaC scanning and policy enforcement</li>
          <li>Container and runtime security</li>
        </ul>
      </li>
      <li>
        <strong>Measurement & Feedback:</strong>
        <ul>
          <li>Security metrics tracking</li>
          <li>Dashboard visibility</li>
          <li>Feedback loop effectiveness</li>
        </ul>
      </li>
      <li>
        <strong>Incident Readiness:</strong>
        <ul>
          <li>IR plan completeness</li>
          <li>Automation of containment</li>
          <li>Post-incident review practice</li>
        </ul>
      </li>
    </ol>

    <h4>Assessment Frameworks</h4>
    <table>
      <thead>
        <tr><th>Framework</th><th>Focus</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>OWASP SAMM</strong></td><td>Software Assurance Maturity Model — practices-based assessment</td></tr>
        <tr><td><strong>BSIMM</strong></td><td>Building Security In Maturity Model — observation-based</td></tr>
        <tr><td><strong>NIST SSDF</strong></td><td>Secure Software Development Framework — SP 800-218</td></tr>
        <tr><td><strong>SLSA</strong></td><td>Supply-chain Levels for Software Artifacts</td></tr>
        <tr><td><strong>DevSecOps Maturity Model (DSMM)</strong></td><td>Comprehensive across people, process, technology</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 Continuous Improvement</div>
      <p>Maturity assessment is not a one-time event. Conduct assessments <strong>semi-annually</strong>, track progress against previous scores, and set improvement targets. The goal is <strong>continuous improvement</strong>, not perfection on day one.</p>
    </div>
  `
};