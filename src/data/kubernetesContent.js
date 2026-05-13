export const kubernetesContent = {

  // ==========================================
  // SECTION 1: CONTAINER FUNDAMENTALS
  // ==========================================

  v5c1: `
    <h3>Container Security Overview</h3>
    <p>
      <strong>Container security</strong> encompasses the <strong>technologies, processes, and practices</strong> used to protect containerized applications throughout their entire lifecycle — from image creation through runtime execution. Containers share the host OS kernel, which creates unique security challenges different from traditional VM-based workloads.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Containers ≠ VMs</div>
      <p>Containers share the host kernel rather than running separate OS instances. This means a <strong>kernel vulnerability</strong> or <strong>container escape</strong> can compromise the host and all other containers. The shared kernel also means containers need <strong>strong isolation boundaries</strong> (cgroups, namespaces, seccomp) that VMs get for free.</p>
    </div>

    <h4>The Container Attack Surface</h4>
    <table>
      <thead>
        <tr><th>Attack Surface</th><th>Risk</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Container Image</strong></td><td>Vulnerable base images, embedded secrets, malware</td><td>Log4Shell in base image</td></tr>
        <tr><td><strong>Registry</strong></td><td>Unauthorized access, image tampering</td><td>Pushing malicious image to registry</td></tr>
        <tr><td><strong>Orchestrator</strong></td><td>API server compromise, RBAC misconfiguration</td><td>Exposed K8s API without auth</td></tr>
        <tr><td><strong>Network</strong></td><td>Lateral movement, data exfiltration</td><td>Pod-to-pod attacks without network policies</td></tr>
        <tr><td><strong>Runtime</strong></td><td>Process injection, privilege escalation</td><td>Container escape via kernel exploit</td></tr>
        <tr><td><strong>Host</strong></td><td>Host compromise affects all containers</td><td>Dirty Cow kernel exploit</td></tr>
      </tbody>
    </table>

    <h4>Container Security Principles</h4>
    <ol>
      <li><strong>Immutable containers:</strong> Never modify running containers; rebuild and redeploy</li>
      <li><strong>Least privilege:</strong> Run as non-root, minimal capabilities, read-only filesystems</li>
      <li><strong>Minimal images:</strong> Use distroless or Alpine to reduce attack surface</li>
      <li><strong>Supply chain security:</strong> Verify image provenance and integrity before deployment</li>
      <li><strong>Network segmentation:</strong> Isolate workloads using network policies</li>
      <li><strong>Continuous scanning:</strong> Scan images continuously for new vulnerabilities</li>
    </ol>

    <h4>The 4C's of Cloud Native Security</h4>
    <p>The CNCF recommends a layered approach:</p>
    <ul>
      <li><strong>Code:</strong> Secure your application code and dependencies</li>
      <li><strong>Container:</strong> Harden the container image and runtime configuration</li>
      <li><strong>Cluster:</strong> Secure the Kubernetes cluster infrastructure</li>
      <li><strong>Cloud:</strong> Harden the underlying cloud infrastructure</li>
    </ul>
    <p>Each layer builds upon the previous — you cannot secure code running in an insecure container on an insecure cluster in an insecure cloud.</p>
  `,

  v5c2: `
    <h3>Docker Security Best Practices</h3>
    <p>
      <strong>Docker security</strong> is the foundation of container security. Docker provides multiple <strong>built-in security features</strong> that must be properly configured to create a secure containerization platform. Misconfigured Docker daemons and images are among the most common sources of container breaches.
    </p>

    <h4>Docker Daemon Security</h4>
    <table>
      <thead>
        <tr><th>Setting</th><th>Secure Configuration</th><th>Why</th></tr>
      </thead>
      <tbody>
        <tr><td>Rootless mode</td><td>Enable rootless Docker</td><td>Container root ≠ host root</td></tr>
        <tr><td>TLS authentication</td><td>Enable TLS for Docker daemon</td><td>Prevents unauthorized API access</td></tr>
        <tr><td>User namespaces</td><td>Enable remapping</td><td>Container root maps to non-root host user</td></tr>
        <tr><td>Automatic updates</td><td>Enable auto-restart with policies</td><td>Keep daemon patched</td></tr>
        <tr><td>Log rotation</td><td>Configure json-file log-opts with max-size</td><td>Prevent disk exhaustion attacks</td></tr>
        <tr><td>Default cgroup limits</td><td>Set memory and CPU limits</td><td>Prevent resource exhaustion</td></tr>
      </tbody>
    </table>

    <h4>Dockerfile Security Best Practices</h4>
    <ol>
      <li><strong>Use minimal base images:</strong>
        <ul>
          <li><code>alpine</code> (5MB) or <code>distroless</code> (no shell!) instead of <code>ubuntu</code> (75MB+)</li>
          <li>Smaller image = smaller attack surface = fewer vulnerabilities</li>
        </ul>
      </li>
      <li><strong>Multi-stage builds:</strong>
        <ul>
          <li>Build in one stage, copy only artifacts to final stage</li>
          <li>Excludes build tools, source code, and intermediate files</li>
        </ul>
      </li>
      <li><strong>Never run as root:</strong>
        <ul>
          <li>Add <code>USER nonroot</code> directive</li>
          <li>Use USER directive after all operations requiring root</li>
        </ul>
      </li>
      <li><strong>Don't install unnecessary packages:</strong> Every package is a potential vulnerability vector</li>
      <li><strong>Pin versions:</strong> Use exact versions for all packages (not <code>latest</code>)</li>
      <li><strong>Sign images:</strong> Use Docker Content Trust (<code>DOCKER_CONTENT_TRUST=1</code>)</li>
    </ol>

    <h4>Secure Dockerfile Example</h4>
    <pre><code>
# Stage 1: Build
FROM golang:1.21-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 go build -ldflags="-s -w" -o /app/server

# Stage 2: Minimal runtime
FROM gcr.io/distroless/static-debian12:nonroot
COPY --from=builder /app/server /server
EXPOSE 8080
USER nonroot:nonroot
ENTRYPOINT ["/server"]
</code></pre>

    <div class="warning-box">
      <div class="warning-title">⚠️ The docker.sock Danger</div>
      <p>Mounting <code>/var/run/docker.sock</code> inside a container gives that container <strong>full control over the Docker daemon</strong> — effectively root on the host. Avoid it; use Docker-in-Docker (DinD) or buildah for building images inside containers.</p>
    </div>
  `,

  v5c3: `
    <h3>Container Runtime Security</h3>
    <p>
      <strong>Container runtime security</strong> focuses on protecting the <strong>runtime environment</strong> where containers execute. This includes the container runtime (runc, containerd, CRI-O), the Linux kernel features that provide isolation, and the monitoring tools that detect runtime anomalies.
    </p>

    <h4>Linux Kernel Security Features for Containers</h4>
    <table>
      <thead>
        <tr><th>Feature</th><th>Function</th><th>Protection</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Namespaces</strong></td><td>Isolate processes, network, filesystem, users</td><td>Container isolation</td></tr>
        <tr><td><strong>cgroups (v1/v2)</strong></td><td>Limit and measure resource usage</td><td>Resource exhaustion prevention</td></tr>
        <tr><td><strong>seccomp</strong></td><td>Restrict system calls available to containers</td><td>Limits kernel attack surface</td></tr>
        <tr><td><strong>AppArmor / SELinux</strong></td><td>Mandatory access control profiles</td><td>Confine container processes</li></tr>
        <tr><td><strong>Capabilities</strong></td><td>Fine-grained privilege control</td><td>Drop unnecessary privileges (e.g., CAP_SYS_ADMIN)</td></tr>
        <tr><td><strong>Read-only filesystem</strong></td><td>Mount container filesystem as read-only</td><td>Prevents persistence and modification</td></tr>
      </tbody>
    </table>

    <h4>Runtime Security Tools</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Approach</th><th>Key Features</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Falco</strong></td><td>System call monitoring</td><td>Rules-based behavioral detection, Kubernetes-aware</td></tr>
        <tr><td><strong>Sysdig</strong></td><td>System call analysis</td><td>Forensics, compliance, runtime security</td></tr>
        <tr><td><strong>Tracee</strong></td><td>eBPF-based runtime tracing</td><td>Advanced threat detection, zero overhead</td></tr>
        <tr><td><strong>Aqua Security</strong></td><td>Comprehensive runtime protection</td><td>Enforcement, forensics, drift prevention</td></tr>
      </tbody>
    </table>

    <h4>Falco Rule Example</h4>
    <pre><code>
# Detect privilege escalation via setuid
- rule: Setuid Binary Execution
  desc: "A setuid binary was executed"
  condition: evt.type = setuid and not proc.name in (sudo, su)
  output: "Setuid binary executed (proc=%proc.name user=%user.name)"
  priority: WARNING

# Detect filesystem write in read-only containers
- rule: Write to Read-Only Filesystem
  condition: >
    open_write and container and
    not proc.name in (touch, echo, cat)
  output: "Write to read-only filesystem detected"
  priority: CRITICAL
</code></pre>

    <h4>gVisor & Kata Containers</h4>
    <p>For <strong>stronger isolation</strong> than standard Linux containers:</p>
    <ul>
      <li><strong>gVisor:</strong> User-space kernel that intercepts syscalls — provides VM-like isolation without VM overhead</li>
      <li><strong>Kata Containers:</strong> Lightweight VMs that feel like containers — hardware-level isolation</li>
      <li>Both are useful for <strong>multi-tenant</strong> environments where strong isolation is required</li>
    </ul>
  `,

  v5c4: `
    <h3>Container Images</h3>
    <p>
      <strong>Container images</strong> are the <strong>building blocks</strong> of containerized applications. A compromised image compromises every container built from it. Image security involves ensuring images are <strong>free of vulnerabilities</strong>, <strong>built from trusted sources</strong>, and <strong>immutable after creation</strong>.
    </p>

    <h4>Image Threats</h4>
    <table>
      <thead>
        <tr><th>Threat</th><th>Description</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Known vulnerabilities</strong></td><td>CVEs in OS packages or application dependencies</td><td>OpenSSL Heartbleed in base image</td></tr>
        <tr><td><strong>Embedded secrets</strong></td><td>API keys, passwords baked into image layers</td><td>Docker history reveals hardcoded secrets</td></tr>
        <tr><td><strong>Malware injection</strong></td><td>Trojanized packages or backdoored binaries</li></tr>
        <tr><td><strong>Typosquatting</strong></td><td>Malicious image with similar name to popular image</td><td><code>nginxx</code> instead of <code>nginx</code></td></tr>
        <tr><td><strong>Outdated base images</strong></td><td>Images not rebuilt with latest security patches</td><td>Running Ubuntu 18.04 in 2024</td></tr>
      </tbody>
    </table>

    <h4>Image Security Best Practices</h4>
    <ol>
      <li><strong>Use trusted base images:</strong>
        <ul>
          <li>Official images from Docker Hub or verified publishers</li>
          <li>Distroless images (Google) or minimal Alpine images</li>
          <li>Consider Chainguard, Wolfi, or Red Hat Universal Base Images</li>
        </ul>
      </li>
      <li><strong>Scan every image:</strong>
        <ul>
          <li>During build (in CI pipeline)</li>
          <li>Before promotion to production registry</li>
          <li>Continuously (new CVEs discovered daily)</li>
        </ul>
      </li>
      <li><strong>Never embed secrets:</strong>
        <ul>
          <li>Use runtime secret injection (Kubernetes Secrets, Vault)</li>
          <li>Multi-stage builds to exclude secret files</li>
          <li>Run <code>docker history</code> to verify no secrets in layers</li>
        </ul>
      </li>
      <li><strong>Sign and verify images:</strong>
        <ul>
          <li>Docker Content Trust (DCT)</li>
          <li>Cosign (Sigstore) for keyless signing</li>
          <li>Verify signatures in admission controllers</li>
        </ul>
      </li>
      <li><strong>Immutable tags:</strong>
        <ul>
          <li>Never use <code>:latest</code> in production</li>
          <li>Use semantic versioning or Git SHA</li>
          <li>Prevent overwrites to production image tags</li>
        </ul>
      </li>
    </ol>

    <h4>Image Scanning Examples</h4>
    <pre><code>
# Trivy image scan
trivy image --severity HIGH,CRITICAL myapp:v1.2.3

# Docker Scout
docker scout cves myapp:v1.2.3

# Grype
grype myregistry.com/myapp:v1.2.3 --fail-on high

# Check for secrets in image layers
dive myapp:v1.2.3  # Interactive image explorer
docker scout cves --only-fixed myapp:v1.2.3
</code></pre>

    <div class="info-box">
      <div class="info-title">💡 Image Provenance</div>
      <p>Beyond vulnerability scanning, verify <strong>where</strong> an image came from using <strong>SBOM</strong> (Software Bill of Materials) and <strong>provenance attestations</strong> (SLSA). Cosign attestations and in-toto metadata provide cryptographic proof of the build process and source.</p>
    </div>
  `,

  v5c5: `
    <h3>Registry Security</h3>
    <p>
      <strong>Container registries</strong> store and distribute container images. A compromised registry can lead to <strong>widespread supply chain attacks</strong> — every system pulling images from a tampered registry will run malicious code.
    </p>

    <h4>Registry Security Concerns</h4>
    <ul>
      <li><strong>Unauthorized access:</strong> Unauthenticated push/pull of images</li>
      <li><strong>Image tampering:</strong> Overwriting trusted images with malicious versions</li>
      <li><strong>Data exfiltration:</strong> Sensitive data embedded in image layers</li>
      <li><strong>Denial of service:</strong> Registry unavailable when deployments need images</li>
    </ul>

    <h4>Registry Security Controls</h4>
    <table>
      <thead>
        <tr><th>Control</th><th>Implementation</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Authentication</strong></td><td>Require auth for all pull/push operations (OIDC, LDAP, service accounts)</td></tr>
        <tr><td><strong>Authorization</strong></td><td>Role-based access: who can push to which repositories</td></tr>
        <tr><td><strong>TLS encryption</strong></td><td>Encrypt all traffic (HTTPS for registry API)</td></tr>
        <tr><td><strong>Content trust</strong></td><td>Docker Content Trust or Cosign signatures</td></tr>
        <tr><td><strong>Image scanning</strong></td><td>Scan on push, quarantine images with critical CVEs</td></tr>
        <tr><td><strong>Audit logging</strong></td><td>Log all push/pull operations with user attribution</td></tr>
        <tr><td><strong>Geo-fencing</strong></td><td>Restrict registry access by network/IP</td></tr>
        <tr><td><strong>Retention policies</strong></td><td>Auto-delete old images to reduce stale image risk</td></tr>
      </tbody>
    </table>

    <h4>Popular Registry Solutions</h4>
    <table>
      <thead>
        <tr><th>Registry</th><th>Type</th><th>Security Features</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Harbor</strong></td><td>Open-source</td><td>RBAC, vulnerability scanning, content trust, replication, LDAP integration</td></tr>
        <tr><td><strong>ECR (AWS)</strong></td><td>Managed</td><td>IAM integration, image scanning, encryption, lifecycle policies</td></tr>
        <tr><td><strong>GCR (GCP)</strong></td><td>Managed</td><td>Vulnerability scanning, IAM, Binary Authorization</td></tr>
        <tr><td><strong>ACR (Azure)</strong></td><td>Managed</td><td>Azure AD integration, vulnerability scanning, content trust</td></tr>
        <tr><td><strong>Quay (Red Hat)</strong></td><td>Open-source / Managed</td><td>Robot accounts, vulnerability scanning, build triggers</td></tr>
      </tbody>
    </table>

    <h4>Harbor — Enterprise Registry Setup</h4>
    <pre><code>
# Harbor best practices
- Enable Content Trust: project settings → required
- Enable vulnerability scanning: auto-scan on push
- Configure retention: keep last 5 versions per artifact
- Use robot accounts with scoped permissions
- Set project-level member roles (guest, developer, maintainer, admin)
- Enable audit logging for compliance
- Replicate to geo-distributed registries for HA
</code></pre>
  `,

  v5c6: `
    <h3>Microsegmentation</h3>
    <p>
      <strong>Microsegmentation</strong> is the practice of dividing a network into <strong>fine-grained, isolated security zones</strong>, where each segment contains only the workloads that need to communicate with each other. In container environments, microsegmentation prevents <strong>lateral movement</strong> — if one container is compromised, the attacker cannot easily reach others.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Zero Trust Networking</div>
      <p>Microsegmentation implements <strong>Zero Trust at the network level</strong>: no traffic is allowed by default. Every communication must be explicitly permitted by policy. This is the "assume breach" approach — if one container is compromised, blast radius is limited to its microsegment.</p>
    </div>

    <h4>Traditional vs. Microsegmented Architecture</h4>
    <pre><code>
Traditional Flat Network:
┌──────────────────────────────────┐
│         Flat Network             │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌───┐ │
│  │ App │─│ App │─│DB  │─│App│ │  ← All can talk to all
│  └─────┘ └─────┘ └─────┘ └───┘ │
└──────────────────────────────────┘

Microsegmented Network:
┌──────────────────────────────────┐
│  Segment 1  │ Segment 2 │ Seg 3 │
│  ┌────┐┌───┐│ ┌─────┐  ││┌───┐│ │
│  │App1││DB1││ │ App2 │  │││DB2││ │
│  └──┬─┘└───┘│ └───┬───┘  ││└───┘│ │
│     │       │     │       ││     │ │
│   Allow    Deny   Allow   Deny  │
│   App1→DB1 App1→App2 App2→DB2  │
└──────────────────────────────────┘
</code></pre>

    <h4>Microsegmentation Approaches for Containers</h4>
    <table>
      <thead>
        <tr><th>Approach</th><th>Implementation</th><th>Granularity</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>K8s Network Policies</strong></td><td>Native K8s resource for pod-to-pod rules</td><td>Pod/namespace level</td></tr>
        <tr><td><strong>Service Mesh (Istio/Linkerd)</strong></td><td>mTLS + fine-grained L7 policies</td><td>Service/port level</td></tr>
        <tr><td><strong>Cilium eBPF</strong></td><td>eBPF-based networking with identity-aware policies</td><td>Workload identity level</td></tr>
        <tr><td><strong>Calico</strong></td><td>Network + application layer policies</td><td>Pod to global network</td></tr>
      </tbody>
    </table>

    <h4>Kubernetes Network Policy Example</h4>
    <pre><code>
# Only allow frontend to talk to backend on port 8080
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: frontend-to-backend
  namespace: production
spec:
  podSelector:
    matchLabels:
      app: backend
  ingress:
    - from:
        - podSelector:
            matchLabels:
              app: frontend
      ports:
        - protocol: TCP
          port: 8080

# Default deny all ingress in namespace
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-ingress
  namespace: production
spec:
  podSelector: {}
  policyTypes:
    - Ingress
</code></pre>

    <h4>Microsegmentation Best Practices</h4>
    <ol>
      <li><strong>Start with default-deny:</strong> Begin with a deny-all posture, then allow only required communications</li>
      <li><strong>Map dependencies first:</strong> Use tools like Cilium Service Map or Istio Kiali to visualize actual traffic flows before writing policies</li>
      <li><strong>Enforce at multiple layers:</strong> Combine L3/L4 network policies with L7 service mesh policies</li>
      <li><strong>Use workload identity:</strong> SPIFFE/SPIRE-based identity rather than IP-based rules (IPs change in dynamic environments)</li>
      <li><strong>Test in monitoring mode first:</strong> Log what would be denied before enforcing</li>
    </ol>
  `,

  // ==========================================
  // SECTION 2: KUBERNETES ARCHITECTURE
  // ==========================================

  v5c7: `
    <h3>K8s Security Architecture</h3>
    <p>
      <strong>Kubernetes security architecture</strong> is built on multiple <strong>layered defense mechanisms</strong> that work together to protect cluster resources. Understanding the security architecture is essential for identifying where controls should be applied and how attackers might exploit gaps between layers.
    </p>

    <h4>Kubernetes Security Layers</h4>
    <pre><code>
┌─────────────────────────────────────┐
│        Cluster Security             │
│  ┌─────────────────────────────┐    │
│  │  Network Policies & CNI     │    │
│  │  + Service Mesh (Istio)     │    │
│  ├─────────────────────────────┤    │
│  │  Workload Security          │    │
│  │  + Pod Security Standards   │    │
│  │  + OPA Gatekeeper / Kyverno │    │
│  ├─────────────────────────────┤    │
│  │  API Server Security        │    │
│  │  + Authentication           │    │
│  │  + Authorization            │    │
│  │  + Admission Controllers    │    │
│  ├─────────────────────────────┤    │
│  │  etcd Security              │    │
│  │  + Encryption at Rest       │    │
│  │  + Access Control           │    │
│  ├─────────────────────────────┤    │
│  │  Node/Host Security         │    │
│  │  + Container Runtime        │    │
│  │  + OS Hardening             │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘
</code></pre>

    <h4>Major Attack Surfaces in Kubernetes</h4>
    <table>
      <thead>
        <tr><th>Attack Surface</th><th>Description</th><th>Risk Level</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Kubernetes API Server</strong></td><td>Central management API — all operations flow through it</td><td>Critical</td></tr>
        <tr><td><strong>etcd</strong></td><td>Distributed key-value store holding all cluster state</td><td>Critical</td></tr>
        <tr><td><strong>Container Runtime</strong></td><td>runc/containerd executing pod containers</td><td>High</td></tr>
        <tr><td><strong>Network</strong></td><td>Pod-to-pod and external communication paths</td><td>High</td></tr>
        <tr><td><strong>Supply Chain</strong></td><td>Container images, Helm charts, manifests</td><td>High</td></tr>
        <tr><td><strong>Secrets</strong></td><td>etcd-backed Kubernetes Secrets (base64, not encrypted by default)</td><td>Medium-High</td></tr>
      </tbody>
    </table>

    <h4>Cloud Provider Shared Responsibility</h4>
    <p>When running managed Kubernetes (EKS, AKS, GKE), security is shared:</p>
    <ul>
      <li><strong>Provider manages:</strong> Control plane, API server availability, etcd backups, patching</li>
      <li><strong>You manage:</strong> Node security, pod security, network policies, RBAC, image security</li>
    </ul>
  `,

  v5c8: `
    <h3>API Server Security</h3>
    <p>
      The <strong>Kubernetes API server</strong> is the <strong>front door</strong> of every cluster. All administrative operations — creating pods, reading secrets, modifying configurations — go through the API. Compromising the API server effectively means <strong>owning the entire cluster</strong>.
    </p>

    <h4>API Server Attack Vectors</h4>
    <ul>
      <li><strong>Unauthorized access:</strong> Exposed API server without authentication</li>
      <li><strong>Overprivileged service accounts:</strong> Pods with excessive RBAC permissions</li>
      <li><strong>API server misconfiguration:</strong> Insecure admission controllers, anonymous auth enabled</li>
      <li><strong>etcd exposure:</strong> Direct etcd access bypasses all API server controls</li>
    </ul>

    <h4>Hardening the API Server</h4>
    <table>
      <thead>
        <tr><th>Setting</th><th>Secure Value</th><th>Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>--anonymous-auth=false</code></td><td>Disabled</td><td>Prevent anonymous API access</td></tr>
        <tr><td><code>--authorization-mode</code></td><td>RBAC (at minimum)</td><td>Enforce role-based access control</td></tr>
        <tr><td><code>--enable-admission-plugins</code></td><td>NodeRestriction, PodSecurity, ResourceQuota</td><td>Enforce security policies</td></tr>
        <tr><td><code>--audit-log-enabled</code></td><td>true</td><td>Track all API requests</td></tr>
        <tr><td><code>--profiling-enabled</code></td><td>false</td><td>Disable profiling endpoints</td></tr>
        <tr><td><code>--secure-port</code></td><td>6443 (default)</td><td>Use HTTPS only</td></tr>
        <tr><td><code>--tls-cert-file / --tls-private-key-file</code></td><td>Valid certs</td><td>Encrypt API traffic</td></tr>
      </tbody>
    </table>

    <h4>Limiting API Server Exposure</h4>
    <ol>
      <li><strong>Private endpoint:</strong> Use private API server endpoint (AWS EKS, AKS private cluster)</li>
      <li><strong>Network policies:</strong> Restrict which subnets can access the API server</li>
      <li><strong>Cloud firewall rules:</strong> Allow access only from bastion/VPN</li>
      <li><strong>Disable public endpoint:</strong> Remove public API server access when not needed</li>
    </ol>

    <h4>Auditing API Access</h4>
    <pre><code>
# Enable audit logging
apiVersion: audit.k8s.io/v1
kind: Policy
rules:
  - level: Metadata
    # Log all API access with metadata
  - level: RequestResponse
    resources:
      - group: ""
        resources: ["secrets", "configmaps"]
    # Full request/response logging for secrets
</code></pre>

    <div class="info-box">
      <div class="info-title">💡 Managed K8s Tip</div>
      <p>In <strong>EKS</strong>, use IAM authentication for the API server. In <strong>GKE</strong>, use Cloud IAM + RBAC. In <strong>AKS</strong>, use Azure AD integration. Always prefer cloud-native IAM over static kubeconfig files.</p>
    </div>
  `,

  v5c9: `
    <h3>etcd Security</h3>
    <p>
      <strong>etcd</strong> is the <strong>distributed key-value store</strong> that holds all Kubernetes cluster state — including secrets, configurations, and deployment manifests. Because etcd has direct access to <strong>all cluster data</strong>, including plain-text secrets (unless encrypted at rest), it is one of the highest-value targets in a Kubernetes environment.
    </p>

    <div class="warning-box">
      <div class="warning-title">⚠️ etcd is the Crown Jewel</div>
      <p>Direct access to etcd bypasses <strong>all</strong> Kubernetes RBAC and admission control. An attacker with etcd access effectively owns the cluster — they can read any secret, modify any resource, and create arbitrary workloads.</p>
    </div>

    <h4>etcd Security Controls</h4>
    <table>
      <thead>
        <tr><th>Control</th><th>Implementation</th><th>Why It Matters</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Encryption at Rest</strong></td>
          <td>Enable <code>--experimental-encryption-provider-config</code></td>
          <td>Protects secrets in etcd disk storage</td>
        </tr>
        <tr>
          <td><strong>Client Certificate Auth</strong></td>
          <td><code>--client-cert-auth=true</code></td>
          <td>Mutual TLS for all etcd connections</td>
        </tr>
        <tr>
          <td><strong>Peer TLS</strong></td>
          <td><code>--peer-client-cert-auth=true</code></td>
          <td>Encrypts etcd-to-etcd communication</td>
        </tr>
        <tr>
          <td><strong>Network Isolation</strong></td>
          <td>etcd on private subnet, firewall restricted</td>
          <td>Prevents network-level access</td>
        </tr>
        <tr>
          <td><strong>Backup Encryption</strong></td>
          <td>Encrypt etcd snapshots with KMS</td>
          <td>Protects backup data</td>
        </tr>
        <tr>
          <td><strong>Access Control</strong></td>
          <td>Limit etcd port (2379) to API server only</td>
          <td>Reduces attack surface</td>
        </tr>
      </tbody>
    </table>

    <h4>Enabling etcd Encryption at Rest</h4>
    <pre><code>
# Encryption provider configuration
apiVersion: apiserver.config.k8s.io/v1
kind: EncryptionConfiguration
resources:
  - resources:
      - secrets
    providers:
      - aescbc:
          keys:
            - name: key1
              secret: <BASE64_ENCRYPTED_KEY>
      - identity: {}  # Fallback (no encryption)
</code></pre>

    <h4>etcd Backup Best Practices</h4>
    <ol>
      <li><strong>Regular automated backups:</strong> Schedule etcd snapshots (minimum daily)</li>
      <li><strong>Encrypt backups:</strong> Use AWS KMS, GCP KMS, or Azure Key Vault</li>
      <li><strong>Store offsite:</strong> Backups to separate region/account</li>
      <li><strong>Test restores:</strong> Regularly verify backup integrity</li>
      <li><strong>Limit access:</strong> Only control plane components need etcd access</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 Managed K8s Note</div>
      <p>In <strong>managed Kubernetes</strong> (EKS, AKS, GKE), etcd is managed by the cloud provider. You typically cannot access etcd directly. Encryption at rest is often enabled by default or configurable through the cloud console. Verify your provider's etcd encryption documentation.</p>
    </div>
  `,

  v5c10: `
    <h3>Kubelet Security</h3>
    <p>
      <strong>Kubelet</strong> is the <strong>primary node agent</strong> in Kubernetes. It runs on every node and manages pod lifecycle, container runtime interactions, and API server communication. A compromised kubelet can lead to <strong>node takeover, container escape, and lateral movement</strong> across the cluster.
    </p>

    <h4>Kubelet Security Risks</h4>
    <ul>
      <li><strong>Anonymous access:</strong> Unauthenticated kubelet read-only port (10255) exposes node/pod info</li>
      <li><strong>TLS bootstrap abuse:</strong> Attacker could request certificates for unauthorized identities</li>
      <li><strong>Pod creation:</strong> Kubelet read access to API can be exploited for pod creation</li>
      <li><strong>Host filesystem access:</strong> Kubelet runs as root and mounts host directories</li>
      <li><strong>Container runtime socket:</strong> Mounted kubelet socket in containers grants container management capabilities</li>
    </ul>

    <h4>Kubelet Hardening Checklist</h4>
    <table>
      <thead>
        <tr><th>Setting</th><th>Secure Value</th><th>Impact</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><code>--anonymous-auth</code></td>
          <td><code>false</code></td>
          <td>Disable anonymous API server access</td>
        </tr>
        <tr>
          <td><code>--authorization-mode</code></td>
          <td><code>Webhook</code></td>
          <td>Requires API server auth check</td>
        </tr>
        <tr>
          <td><code>--read-only-port</code></td>
          <td><code>0</code></td>
          <td>Disable read-only port</td>
        </tr>
        <tr>
          <td><code>--protect-kernel-defaults</code></td>
          <td><code>true</code></td>
          <td>Prevent kernel parameter changes</td>
        </tr>
        <tr>
          <td><code>--make-iptables-util-chains</code></td>
          <td><code>true</code></td>
          <td>Kubelet manages its own iptables chains</td>
        </tr>
        <tr>
          <td><code>--rotate-certificates</code></td>
          <td><code>true</code></td>
          <td>Auto-rotate kubelet certificates</td>
        </tr>
      </tbody>
    </table>

    <h4>Critical: Restrict Kubelet API Access</h4>
    <pre><code>
# Never mount the kubelet socket into containers!
# ❌ UNSAFE pod spec:
volumes:
  - name: kubelet
    hostPath:
      path: /var/run/kubelet.sock

# ✅ Only mount read-only if absolutely necessary:
volumes:
  - name: kubelet-readonly
    hostPath:
      path: /var/run/kubernetes/
      type: DirectoryOrCreate
    readOnly: true
</code></pre>
  `,

  v5c11: `
    <h3>Network Policies</h3>
    <p>
      <strong>Kubernetes Network Policies</strong> define <strong>how groups of pods communicate</strong> with each other and with external network endpoints. Without network policies, all pods in a cluster can communicate with each other by default — creating a flat, insecure network topology.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Default Deny First</div>
      <p>Always start with <strong>default-deny ingress and egress</strong> policies at the namespace level. Then, selectively allow traffic based on actual application dependencies. This is the Zero Trust approach to Kubernetes networking.</p>
    </div>

    <h4>Network Policy Types</h4>
    <table>
      <thead>
        <tr><th>Policy Type</th><th>Controls</th><th>Use Case</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Ingress</strong></td><td>Incoming traffic to pods</td><td>Restrict who can reach a service</td></tr>
        <tr><td><strong>Egress</strong></td><td>Outgoing traffic from pods</td><td>Prevent data exfiltration, limit external access</td></tr>
        <tr><td><strong>Ingress + Egress</strong></td><td>Both directions</td><td>Full microsegmentation</td></tr>
      </tbody>
    </table>

    <h4>Common Network Policy Patterns</h4>
    <pre><code>
# 1. Default deny all ingress in namespace
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-ingress
spec:
  podSelector: {}
  policyTypes: ["Ingress"]

# 2. Allow frontend to backend on specific port
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-frontend
spec:
  podSelector:
    matchLabels:
      tier: backend
  ingress:
    - from:
        - podSelector:
            matchLabels:
              tier: frontend
      ports:
        - protocol: TCP
          port: 8080

# 3. Allow DNS resolution (kube-dns)
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-dns
spec:
  podSelector: {}
  policyTypes: ["Egress"]
  egress:
    - to:
        - namespaceSelector: {}
      ports:
        - protocol: UDP
          port: 53
        - protocol: TCP
          port: 53
</code></pre>

    <h4>CNI Plugins with Network Policy Support</h4>
    <table>
      <thead>
        <tr><th>CNI Plugin</th><th>Network Policy Support</th><th>Additional Features</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Calico</strong></td><td>Native K8s + extended policies</td><td>Application layer, global policies</td></tr>
        <tr><td><strong>Cilium</strong></td><td>Native + L7 policies</td><td>eBPF-based, service mesh</td></tr>
        <tr><td><strong>Weave Net</strong></td><td>Native K8s</td><td>Network encryption</td></tr>
      </tbody>
    </table>
  `,

  v5c12: `
    <h3>RBAC in K8s</h3>
    <p>
      <strong>Role-Based Access Control (RBAC)</strong> is the <strong>primary authorization mechanism</strong> in Kubernetes. It controls <strong>who can do what</strong> within the cluster by binding subjects (users, groups, service accounts) to roles that define permissions.
    </p>

    <div class="warning-box">
      <div class="warning-title">⚠️ Cluster-Admin is the Most Dangerous Role</div>
      <p>The <code>cluster-admin</code> ClusterRole grants <strong>unlimited access</strong> to every resource in every namespace. Any binding of a user or service account to this role effectively gives them <strong>complete control over the cluster</strong>. Audit all cluster-admin bindings regularly.</p>
    </div>

    <h4>Key RBAC Components</h4>
    <table>
      <thead>
        <tr><th>Resource</th><th>Purpose</th><th>Scope</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Role</strong></td><td>Set of permissions within a namespace</td><td>Namespace-scoped</td></tr>
        <tr><td><strong>ClusterRole</strong></td><td>Set of permissions cluster-wide or for specific resources</td><td>Cluster-wide</td></tr>
        <tr><td><strong>RoleBinding</strong></td><td>Binds a Role to subjects in a namespace</td><td>Namespace-scoped</td></tr>
        <tr><td><strong>ClusterRoleBinding</strong></td><td>Binds a ClusterRole to subjects cluster-wide</td><td>Cluster-wide</td></tr>
        <tr><td><strong>ServiceAccount</strong></td><td>Identity for pods to access the API</td><td>Namespace-scoped</td></tr>
      </tbody>
    </table>

    <h4>RBAC Best Practices</h4>
    <ol>
      <li><strong>Principle of Least Privilege:</strong> Grant minimum permissions needed — never default to admin</li>
      <li><strong>Avoid ClusterRoleBinding for users:</strong> Use namespaced RoleBindings where possible</li>
      <li><strong>Use dedicated ServiceAccounts:</strong> One SA per application, not shared across workloads</li>
      <li><strong>Audit existing bindings:</strong>
        <pre><code>
# Find all cluster-admin bindings
kubectl get clusterrolebindings -o json | \
  jq '.items[] | select(.subjects[] | .name | test("admin|root"))'</code></pre>
      </li>
      <li><strong>Enable RBAC in apiserver:</strong> <code>--authorization-mode=RBAC</code></li>
      <li><strong>Use groups, not individual users:</strong> Bind roles to groups for easier management</li>
    </ol>

    <h4>Example: Secure Namespace RBAC</h4>
    <pre><code>
# Developers can deploy but not delete production resources
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: production
  name: developer-role
rules:
  - apiGroups: ["", "apps", "networking.k8s.io"]
    resources: ["deployments", "services", "configmaps", "pods", "ingresses"]
    verbs: ["get", "list", "watch", "create", "update", "patch"]
    # Note: No "delete" permission

---
# Bind to a group
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  namespace: production
  name: developers-binding
subjects:
  - kind: Group
    name: dev-team
    apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: developer-role
  apiGroup: rbac.authorization.k8s.io
</code></pre>
  `,

  // ==========================================
  // SECTION 3: KUBERNETES SECURITY
  // ==========================================

  v5c13: `
    <h3>Pod Security Standards</h3>
    <p>
      <strong>Pod Security Standards</strong> (PSS) define a set of <strong>security-sensitive settings</strong> that control how pods can run. Kubernetes provides three policy levels — <strong>Privileged, Baseline, and Restricted</strong> — that progressively restrict what pods can do.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Pod Security Admission (PSA)</div>
      <p>Pod Security Admission is the <strong>built-in admission controller</strong> (GA since K8s 1.25+) that enforces Pod Security Standards at the namespace level. It replaced the deprecated PodSecurityPolicy API.</p>
    </div>

    <h4>PSS Levels Comparison</h4>
    <table>
      <thead>
        <tr><th>Control</th><th>Privileged</th><th>Baseline</th><th>Restricted</th></tr>
      </thead>
      <tbody>
        <tr><td>Privileged Mode</td><td>Allowed</td><td>Prohibited</td><td>Prohibited</td></tr>
        <tr><td>Host Namespaces</td><td>Shared</td><td>Some allowed</td><td>Must be isolated</td></tr>
        <tr><td>Host Network/Ports</td><td>Allowed</td><td>Allowed</td><td>Must use pod network</td></tr>
        <tr><td>HostPath Volumes</td><td>Any path</td><td>Allowed with restrictions</td><td>Prohibited</td></tr>
        <tr><td>Run as Non-Root</td><td>Not required</td><td>Not required</td><td>Required</td></tr>
        <tr><td>Capabilities</td><td>All allowed</td><td>Limited set</td><td>Must drop all</td></tr>
        <tr><td>SELinux</td><td>Unrestricted</td><td><code>RunAsAny</code></td><td><code>MustRunAs</code></td></tr>
        <tr><td>ReadOnlyRootFilesystem</td><td>Not set</td><td>Not set</td><td>Must be true</td></tr>
        <tr><td>Seccomp</td><td>Unrestricted</td><td><code>RuntimeDefault</code></td><td><code>RuntimeDefault</code></td></tr>
        <tr><td>AppArmor</td><td>Unrestricted</td><td><code>RuntimeDefault</code></td><td><code>RuntimeDefault</code></td></tr>
      </tbody>
    </table>

    <h4>Enforcing Pod Security</h4>
    <pre><code>
# Namespace with Baseline enforcement
apiVersion: v1
kind: Namespace
metadata:
  name: production
  labels:
    pod-security.kubernetes.io/enforce: baseline
    pod-security.kubernetes.io/enforce-version: v1.27

# Namespace with Restricted enforcement
apiVersion: v1
kind: Namespace
metadata:
  name: secured-apps
  labels:
    pod-security.kubernetes.io/enforce: restricted
    pod-security.kubernetes.io/enforce-version: v1.27
    pod-security.kubernetes.io/warn: restricted
    pod-security.kubernetes.io/audit: restricted
</code></pre>

    <h4>Choosing the Right Level</h4>
    <ul>
      <li><strong>Privileged:</strong> CI/build pipelines, system-level daemons (kube-proxy, CNI plugins). Use sparingly.</li>
      <li><strong>Baseline:</strong> Good default for most workloads. Prevents privilege escalation while allowing flexibility.</li>
      <li><strong>Restricted:</strong> Maximum security for production workloads. Requires running as non-root, read-only filesystem.</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Migration Path</div>
      <p>Start by applying <strong>Baseline</strong> with <code>audit</code> mode to discover violations without blocking. Then switch to <code>warn</code> mode to alert developers. Finally, enforce <code>Restricted</code> in production namespaces.</p>
    </div>
  `,

  v5c14: `
    <h3>Network Policies Deep Dive</h3>
    <p>
      <strong>Kubernetes Network Policies</strong> provide <strong>L3/L4 network segmentation</strong> for pod-to-pod communication. They are the primary mechanism for implementing <strong>microsegmentation</strong> in a Kubernetes cluster and are essential for limiting blast radius during a security incident.
    </p>

    <h4>Network Policy Ingress/Egress Rule Types</h4>
    <table>
      <thead>
        <tr><th>Rule Type</th><th>Selects By</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>podSelector</strong></td><td>Labels on pods in the same namespace</td><td>Allow from pods with <code>app: frontend</code></td></tr>
        <tr><td><strong>namespaceSelector</strong></td><td>Namespaces by labels</td><td>Allow from <code>monitoring</code> namespace</td></tr>
        <tr><td><strong>namespaceSelector + podSelector</strong></td><td>Combined namespace + pod matching</td><td>Allow <code>monitoring</code> namespace + <code>app: prometheus</code></td></tr>
        <tr><td><strong>ipBlock</strong></td><td>Specific CIDR ranges</td><td>Allow from <code>10.0.0.0/8</code> only</td></tr>
        <tr><td><strong>namespaceSelector with ipBlock</strong></td><td>Combined</td><td>Cross-namespace with IP restrictions</td></tr>
      </tbody>
    </table>

    <h4>Advanced Network Policy Patterns</h4>
    <pre><code>
# Multi-namespace monitoring policy
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-monitoring
  namespace: production
spec:
  podSelector:
    matchLabels:
      app: myapp
  ingress:
    - from:
        - namespaceSelector:
            matchLabels:
              purpose: monitoring
          podSelector:
            matchLabels:
              app: prometheus
      ports:
        - protocol: TCP
          port: 9090

# Allow external ingress only through specific ports
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-external-https
spec:
  podSelector:
    matchLabels:
      app: webapp
  policyTypes:
    - Ingress
  ingress:
    - from:
        - ipBlock:
            cidr: 0.0.0.0/0
            except:
              - 10.0.0.0/8
              - 172.16.0.0/12
              - 192.168.0.0/16
      ports:
        - protocol: TCP
          port: 443
</code></pre>

    <h4>Network Policy Gotchas</h4>
    <ul>
      <li>DNS resolution requires allowing egress to port 53 on kube-dns namespace</li>
      <li>Network policies are <strong>additive</strong> — all matching policies are combined (OR logic for ingress, AND for egress within a policy)</li>
      <li>A pod with <strong>no ingress policy</strong> accepts traffic from anywhere</li>
      <li><strong>Order doesn't matter</strong> — all matching rules are merged</li>
      <li>CNI plugin must support network policies (Calico, Cilium do; Flannel does not natively)</li>
    </ul>
  `,

  v5c15: `
    <h3>Secrets Management</h3>
    <p>
      <strong>Kubernetes Secrets</strong> store <strong>sensitive data</strong> such as passwords, tokens, and API keys. However, there are important security considerations: Kubernetes Secrets are <strong>base64-encoded, not encrypted</strong> by default. Anyone with API access (or direct etcd access) can read them.
    </p>

    <div class="warning-box">
      <div class="warning-title">⚠️ Kubernetes Secrets Are NOT Encrypted by Default</div>
      <p>Kubernetes Secrets are stored in etcd as <strong>base64-encoded plaintext</strong>. Anyone with <code>get secrets</code> permission can decode them instantly: <code>echo "cGFzc3dvcmQxMjM=" | base64 -d</code> → <code>password123</code>. Always enable etcd encryption at rest and consider external secret managers.</p>
    </div>

    <h4>Kubernetes Secret Types</h4>
    <table>
      <thead>
        <tr><th>Type</th><th>Use Case</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Opaque</strong></td><td>Generic key-value data</td><td>DB passwords, API keys</td></tr>
        <tr><td><strong>kubernetes.io/dockerconfigjson</strong></td><td>Container registry credentials</td><td>Image pull secrets</td></tr>
        <tr><td><strong>kubernetes.io/tls</strong></td><td>TLS certificates</td><td>Ingress TLS termination</td></tr>
        <tr><td><strong>kubernetes.io/basic-auth</strong></td><td>Basic auth credentials</td><td>Username + password</td></tr>
        <tr><td><strong>kubernetes.io/ssh-auth</strong></td><td>SSH keys</td><td>Git repository access</td></tr>
        <tr><td><strong>bootstrap.kubernetes.io/token</strong></td><td>Node bootstrap tokens</td><td>Node joining cluster</td></tr>
      </tbody>
    </table>

    <h4>External Secrets Management Solutions</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Approach</th><th>Key Features</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>HashiCorp Vault</strong></td><td>External secrets store with K8s auth</td><td>Dynamic secrets, encryption as a service, policies</td></tr>
        <tr><td><strong>AWS Secrets Manager</strong></td><td>Cloud-native secrets</td><td>Rotation, IAM integration</td></tr>
        <tr><td><strong>External Secrets Operator</strong></td><td>Syncs external secrets to K8s</td><td>Supports Vault, AWS, GCP, Azure</td></tr>
        <tr><td><strong>Sealed Secrets</strong></td><td>Encrypt secrets for Git storage</td><td>One-way encryption, safe in Git repos</td></tr>
      </tbody>
    </table>

    <h4>Best Practices</h4>
    <ol>
      <li><strong>Enable etcd encryption at rest</strong> for all clusters</li>
      <li><strong>Use external secret managers</strong> (Vault, AWS SM) for production secrets</li>
      <li><strong>Restrict secret access:</strong> Use RBAC — only pods that need a secret should have access</li>
      <li><strong>Avoid environment variable injection</strong> for secrets — use mounted volumes</li>
      <li><strong>Rotate secrets regularly</strong> using automated rotation with Vault or cloud providers</li>
      <li><strong>Never commit secrets to Git</strong> — use Sealed Secrets or External Secrets Operator</li>
      <li>
        <strong>Namespace isolation:</strong>
        <pre><code>
# Mount secrets as volumes, not env vars
volumes:
  - name: db-credentials
    secret:
      secretName: db-credentials
      items:
        - key: username
          path: username
        - key: password
          path: password
</code></pre>
      </li>
    </ol>
  `,

  v5c16: `
    <h3>ConfigMaps Security</h3>
    <p>
      <strong>ConfigMaps</strong> store <strong>non-sensitive configuration data</strong> in key-value pairs. While not secrets, mismanaged ConfigMaps can lead to <strong>information disclosure, configuration drift, and security bypasses</strong>.
    </p>

    <h4>ConfigMap Risks</h4>
    <ul>
      <li><strong>Sensitive data leakage:</strong> Developers storing passwords, tokens, or API keys in ConfigMaps</li>
      <li><strong>Configuration tampering:</strong> Users with edit access can modify application behavior</li>
      <li><strong>Information disclosure:</strong> ConfigMaps may reveal internal architecture, paths, or endpoints</li>
      <li><strong>Environmental drift:</strong> ConfigMaps differing between namespaces/environments</li>
    </ul>

    <h4>ConfigMap Best Practices</h4>
    <ol>
      <li><strong>Never store secrets in ConfigMaps:</strong> Use Kubernetes Secrets or external secret managers</li>
      <li><strong>Use immutable ConfigMaps:</strong>
        <pre><code>
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
  namespace: production
immutable: true  # Once set, cannot be modified
data:
  log_level: "info"
  max_connections: "100"
</code></pre>
      </li>
      <li><strong>Restrict access:</strong> Apply RBAC — only specific roles should create/edit ConfigMaps</li>
      <li><strong>Version control ConfigMaps:</strong> Store in Git with the rest of your manifests</li>
      <li><strong>Environment-specific ConfigMaps:</strong> Separate ConfigMaps per environment (dev, staging, prod)</li>
      <li><strong>Mount as read-only volumes:</strong> Prevent runtime modification</li>
    </ol>

    <h4>RBAC for ConfigMap Protection</h4>
    <pre><code>
# Prevent developers from modifying production ConfigMaps
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: production
  name: configmap-reader
rules:
  - apiGroups: [""]
    resources: ["configmaps"]
    verbs: ["get", "list", "watch"]
    # Note: No "create", "update", or "delete"

# Only platform team can modify
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: production
  name: configmap-manager
rules:
  - apiGroups: [""]
    resources: ["configmaps"]
    verbs: ["get", "list", "watch", "create", "update", "delete"]
</code></pre>

    <div class="info-box">
      <div class="info-title">💡 ConfigMap vs. Secret Decision</div>
      <p>Use this rule of thumb:<br>
      <strong>ConfigMap:</strong> Non-sensitive configuration (feature flags, URLs, log levels)<br>
      <strong>Secret:</strong> Any data that could cause harm if exposed (passwords, keys, tokens)<br>
      When in doubt, use a Secret — the overhead is minimal.</p>
    </div>
  `,

  v5c17: `
    <h3>Ingress Security</h3>
    <p>
      <strong>Ingress</strong> resources in Kubernetes manage <strong>external access to services</strong>, typically HTTP/HTTPS traffic. Misconfigured Ingress resources are a common attack vector that can expose internal services, bypass authentication, or enable TLS stripping attacks.
    </p>

    <h4>Ingress Security Concerns</h4>
    <table>
      <thead>
        <tr><th>Concern</th><th>Description</th><th>Mitigation</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Backend exposure</strong></td><td>Exposing internal-only services</td><td>Network policies, service type restrictions</td></tr>
        <tr><td><strong>Missing TLS</strong></td><td>HTTP traffic exposed to interception</td><td>Force HTTPS redirects, TLS termination</td></tr>
        <tr><td><strong>Host-based routing abuse</strong></td><td>Wildcard host rules exposing unintended services</td><td>Use specific hostnames, not wildcards</td></tr>
        <tr><td><strong>Path traversal</strong></td><td>URL manipulation to access other services</td><td>Path validation, WAF rules</td></tr>
        <tr><td><strong>Annotation misuse</strong></td><td>Security controls bypassed via annotations</td><td>Review all annotations, use admission controllers</td></tr>
      </tbody>
    </table>

    <h4>Secure Ingress Best Practices</h4>
    <pre><code>
# Secure Ingress example
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: secure-app-ingress
  annotations:
    # Force HTTPS
    nginx.ingress.kubernetes.io/ssl-redirect: "true"

    # Rate limiting
    nginx.ingress.kubernetes.io/limit-rps: "100"

    # Whitelist source IPs (if applicable)
    nginx.ingress.kubernetes.io/whitelist-source-range: "10.0.0.0/8,172.16.0.0/12"

    # WAF integration (ModSecurity)
    nginx.ingress.kubernetes.io/enable-modsecurity: "true"
    nginx.ingress.kubernetes.io/modsecurity-snippet: |
      SecRuleEngine On

    # Clickjacking protection
    nginx.ingress.kubernetes.io/configuration-snippet: |
      add_header X-Frame-Options "DENY" always;
      add_header X-Content-Type-Options "nosniff" always;
      add_header X-XSS-Protection "1; mode=block" always;

spec:
  # Use specific TLS secret, not auto-generated
  tls:
    - hosts:
        - app.example.com
      secretName: app-tls-secret
  rules:
    - host: app.example.com  # Specific host, not wildcard
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: webapp
                port:
                  number: 8080
</code></pre>

    <h4>Gateway API (Next Generation)</h4>
    <p>The <strong>Gateway API</strong> (GA since v1.0) provides more structured routing with better security boundaries:</p>
    <ul>
      <li><strong>GatewayClass:</strong> Defines which controller handles routing</li>
      <li><strong>Gateway:</strong> Defines where traffic enters the cluster</li>
      <li><strong>HTTPRoute:</strong> Defines routing rules with explicit parent references</li>
      <li><strong>ReferenceGrant:</strong> Controls cross-namespace object references</li>
    </ul>
  `,

  v5c18: `
    <h3>Service Mesh</h3>
    <p>
      <strong>Service meshes</strong> provide a <strong>dedicated infrastructure layer</strong> for service-to-service communication, handling <strong>mTLS, traffic management, observability, and access control</strong> without requiring application code changes.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Zero Trust at the Service Level</div>
      <p>A service mesh enables <strong>automatic mutual TLS (mTLS)</strong> between all services, meaning every service-to-service communication is encrypted and authenticated by default — even within the cluster. This eliminates the "trusted internal network" assumption.</p>
    </div>

    <h4>Popular Service Meshes</h4>
    <table>
      <thead>
        <tr><th>Mesh</th><th>mTLS</th><th>L7 Policies</th><th>Complexity</th><th>Best For</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Istio</strong></td><td>Auto</td><td>Rich (AuthorizationPolicy)</td><td>High</td><td>Complex microservices, multi-cluster</td></tr>
        <tr><td><strong>Linkerd</strong></td><td>Auto</td><td>Basic (ServerAuthorization)</td><td>Low</td><td>Simplicity-focused, lightweight</td></tr>
        <tr><td><strong>Consul Connect</strong></td><td>Auto</td><td>Intentions (L4/L7)</td><td>Medium</td><td>Multi-platform, hybrid cloud</td></tr>
        <tr><td><strong>AWS App Mesh</strong></td><td>Auto</td><td>Virtual routes/access policies</td><td>Medium</td><td>AWS-native workloads</td></tr>
        <tr><td><strong>Cilium Service Mesh</strong></td><td>Auto</td><td>L7 with Envoy</td><td>Medium</td><td>eBPF-native, high performance</td></tr>
      </tbody>
    </table>

    <h4>Istio AuthorizationPolicy Example</h4>
    <pre><code>
# Only allow frontend to call backend on /api
apiVersion: security.istio.io/v1
kind: AuthorizationPolicy
metadata:
  name: frontend-to-backend
  namespace: production
spec:
  selector:
    matchLabels:
      app: backend
  action: ALLOW
  rules:
    - from:
        - source:
            principals: ["cluster.local/ns/production/sa/frontend-sa"]
      to:
        - operation:
            methods: ["GET", "POST"]
            paths: ["/api/*"]
            ports: ["8080"]
  # All other access is DENIED by default
</code></pre>

    <h4>Service Mesh Security Benefits</h4>
    <ol>
      <li><strong>Automatic mTLS:</strong> All traffic encrypted and authenticated without app changes</li>
      <li><strong>Fine-grained authorization:</strong> Control which services can talk to which</li>
      <li><strong>Traffic encryption:</strong> Protects data in transit within the cluster</li>
      <li><strong>Observability:</strong> See all service-to-service communication with metrics and traces</li>
      <li><strong>Rate limiting:</strong> Protect services from overload at the mesh level</li>
      <li><strong>Fault injection:</strong> Test resilience without affecting real traffic</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 Service Mesh Adoption Guide</div>
      <p>Start with <strong>Linkerd</strong> for simplicity or <strong>Istio</strong> for advanced policy needs. Enable mTLS in <strong>permissive mode first</strong> (both plaintext and mTLS accepted), then switch to <strong>strict mode</strong> once all services are confirmed working with mTLS.</p>
    </div>
  `,

  v5c19: `
    <h3>Policy Enforcement (OPA)</h3>
    <p>
      <strong>Open Policy Agent (OPA)</strong> is a <strong>general-purpose policy engine</strong> that integrates with Kubernetes as an <strong>admission controller</strong> via the <strong>Gatekeeper</strong> project. OPA uses a declarative language called <strong>Rego</strong> to define fine-grained policies that can validate, mutate, or deny any Kubernetes resource.
    </p>

    <h4>How OPA Gatekeeper Works</h4>
    <pre><code>
┌──────────────────────────────┐
│      kubectl apply -f pod.yaml │
└──────────┬───────────────────┘
           │
           ▼
┌──────────────────────────────┐
│    Kubernetes API Server      │
│                              │
│  ┌────────────────────────┐  │
│  │  Validating Webhook    │  │
│  │  (OPA/Gatekeeper)      │  │
│  │                        │  │
│  │  ┌──────────────────┐  │  │
│  │  │ OPA Policy Engine │  │  │
│  │  │ (Rego evaluation) │  │  │
│  │  └──────────────────┘  │  │
│  │                        │  │
│  │  ✅ ALLOW or ❌ DENY    │  │
│  └────────────────────────┘  │
└──────────────────────────────┘
</code></pre>

    <h4>Common OPA/Gatekeeper Policies</h4>
    <table>
      <thead>
        <tr><th>Policy</th><th>Purpose</th><th>Rego Complexity</th></tr>
      </thead>
      <tbody>
        <tr><td>No privileged containers</td><td>Prevent securityContext.privileged</td><td>Simple</td></tr>
        <tr><td>Required labels</td><td>Enforce team, environment, cost-center labels</td><td>Simple</td></tr>
        <tr><td>Container resource limits</td><td>Must have CPU/memory limits set</td><td>Medium</td></tr>
        <tr><td>Allowed image registries</td><td>Only images from approved registries</td><td>Medium</td></tr>
        <tr><td>No latest tags</td><td>Prevent :latest image tags</td><td>Simple</td></tr>
        <tr><td>Namespace naming conventions</td><td>Namespaces must match a pattern</td><td>Simple</td></tr>
        <tr><td>Ingress restrictions</strong></td><td>Control Ingress resource creation</td><td>Medium</td></tr>
      </tbody>
    </table>

    <h4>Gatekeeper Policy Template Example</h4>
    <pre><code>
# Constraint Template: define reusable policy
apiVersion: templates.gatekeeper.sh/v1
kind: ConstraintTemplate
metadata:
  name: k8srequirelabels
spec:
  crd:
    spec:
      names:
        kind: K8sRequireLabels
  targets:
    - target: admission.k8s.gatekeeper.sh
      rego: |
        package k8srequiredlabels

        violation[{"msg": msg}] {
          required := {"team", "environment"}
          provided := {label | input.review.object.metadata.labels[label]}
          missing := required - provided
          count(missing) > 0
          msg := sprintf("Missing required labels: %v", [missing])
        }

# Constraint: apply the template with specific parameters
apiVersion: constraints.gatekeeper.sh/v1beta1
kind: K8sRequireLabels
metadata:
  name: must-have-labels
match:
  kinds:
    - apiGroups: [""]
      kinds: ["Pod", "Deployment", "Service"]
parameters:
  labels: ["team", "environment"]
</code></pre>

    <div class="info-box">
      <div class="info-title">💡 OPA Beyond Kubernetes</div>
      <p>OPA isn't just for Kubernetes. Use it for <strong>API authorization</strong>, <strong>Terraform policy checking</strong>, <strong>CI/CD pipeline decisions</strong>, and <strong>service mesh authorization</strong>. It's a universal policy engine that keeps policies consistent across your entire stack.</p>
    </div>
  `,

  v5c20: `
    <h3>Image Security Scanning</h3>
    <p>
      <strong>Image security scanning</strong> in Kubernetes ensures that <strong>only safe, patched container images</strong> are allowed to run in the cluster. This can be done at multiple stages: during CI/CD (shift-left), at the registry (quarantine), or at deployment time (admission).
    </p>

    <h4>Scanning Approaches</h4>
    <table>
      <thead>
        <tr><th>Stage</th><th>Approach</th><th>Tools</th><th>Pros</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>CI/CD (Shift-Left)</strong></td>
          <td>Scan during build, fail pipeline on critical CVEs</td>
          <td>Trivy, Grype, Snyk</td>
          <td>Fast feedback, prevents vulnerable images from being built</td>
        </tr>
        <tr>
          <td><strong>Registry Scanning</strong></td>
          <td>Scan on push to registry, quarantine failing images</td>
          <td>Harbor, ECR, GCR, Trivy Operator</td>
          <td>Centralized policy, covers all images</td>
        </tr>
        <tr>
          <td><strong>Admission Control</strong></td>
          <td>Scan at deploy time, block images with vulnerabilities</td>
          <td>Trivy Operator + Kyverno, Polaris</td>
          <td>Last line of defense, enforces policy</td>
        </tr>
        <tr>
          <td><strong>Runtime Scanning</strong></td>
          <td>Continuously scan running images for new CVEs</td>
          <td>Trivy Operator, Aqua, Sysdig</td>
          <td>Catches new CVEs in already-deployed images</td>
        </tr>
      </tbody>
    </table>

    <h4>Trivy Operator — Kubernetes-Native Scanning</h4>
    <pre><code>
# Install Trivy Operator via Helm
helm install trivy-operator \
  aquasecurity/trivy-operator \
  --namespace trivy-system \
  --create-namespace \
  --set scanners.falsoft.enabled=true

# Automatically scan all pods in namespace
# Generates R reports (vulnerability, configaudit, etc.)

# Block deployments with critical vulnerabilities via Kyverno
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: block-critical-vulns
spec:
  validationFailureAction: enforce
  rules:
    - name: check-image-vulnerabilities
      match:
        any:
          - resources:
              kinds:
                - Pod
      validate:
        message: "Image has critical vulnerabilities"
        deny:
          conditions:
            any:
              - key: "{{images.containers.*.registry}}/{{images.containers.*.repository}}@{{images.containers.*.tag}}"
                operator: AnyIn
                value: "{{ vul_report.images.*.critical_count }}"
</code></pre>

    <h4>Continuous Image Scanning Best Practices</h4>
    <ol>
      <li><strong>Re-scan existing images:</strong> New CVEs are published daily; yesterday's clean image may be today's liability</li>
      <li><strong>Define severity thresholds:</strong> Block Critical/High, warn on Medium</li>
      <li><strong>Maintain an image allowlist:</strong> Only pre-approved images can be deployed</li>
      <li><strong>Track image age:</strong> Alert on images older than 30 days without rebuild</li>
      <li><strong>Use live vulnerability scanning:</strong> Tools like <strong>Crisol</strong> scan running containers, not just static image layers</li>
    </ol>
  `,

  v5c21: `
    <h3>Runtime Security</h3>
    <p>
      <strong>Kubernetes runtime security</strong> involves <strong>monitoring and enforcing security policies</strong> for workloads while they are running. This includes detecting anomalous behavior, blocking unauthorized system calls, and preventing container escapes or lateral movement within the cluster.
    </p>

    <h4>Runtime Security Categories</h4>
    <table>
      <thead>
        <tr><th>Category</th><th>What It Monitors</th><th>Tools</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>System Call Monitoring</strong></td>
          <td>Syscall patterns, privilege escalation attempts</td>
          <td>Falco, Sysdig, Tracee</td>
        </tr>
        <tr>
          <td><strong>File System Integrity</strong></td>
          <td>Unexpected file modifications in containers</td>
          <td>Aqua, Falco file watch rules</td>
        </tr>
        <tr>
          <td><strong>Network Anomaly Detection</strong></td>
          <td>Unexpected outbound connections, DNS tunneling</td>
          <td>Cilium, Calico, Aqua</td>
        </tr>
        <tr>
          <td><strong>Process Execution</strong></td>
          <td>Unexpected processes (shells, miners, debuggers)</td>
          <td>Falco, Sysdig Trace</td>
        </tr>
        <tr>
          <td><strong>Container Escape Detection</strong></td>
          <td>Host namespace access, volume mounts</td>
          <td>Falco, Tracee</td>
        </tr>
      </tbody>
    </table>

    <h4>Falco Runtime Rules for Kubernetes</h4>
    <pre><code>
# Detect a shell running in a container
- rule: Shell in Container
  desc: "A shell has been spawned inside a running container"
  condition: >
    spawned_process and container
    and proc.name in (bash, sh, zsh, csh, tcsh, ksh, fish)
    and container.id != host
  output: "A shell was spawned in container %container.id (user=%user.name shell=%proc.name command=%proc.cmdline)"
  priority: WARNING

# Detect sensitive file access
- rule: Sensitive Files Mounted
  desc: "A sensitive host file was accessed"
  condition: >
    open and container
    and fd.name in (/etc/shadow, /etc/passwd, /proc/self/environ)
  output: "Sensitive file %fd.name accessed by %proc.name in container %container.id"
  priority: CRITICAL

# Detect crypto mining
- rule: Cryptocurrency Miner Detection
  desc: "Known crypto miner process detected"
  condition: >
    spawned_process
    and (proc.name in (xmrig, minerd, kthreaddi) or
         proc.cmdline contains "/stratum+tcp/" or
         proc.cmdline contains "stratum")
  output: "Possible crypto miner detected: %proc.cmdline"
  priority: CRITICAL
</code></pre>

    <h4>GVisor / Kata Containers for Extra Isolation</h4>
    <p>For workloads requiring <strong>stronger isolation</strong> than standard Linux containers:</p>
    <ul>
      <li><strong>gVisor:</strong> Intercepts syscalls in user-space, providing an additional security boundary without full VM overhead</li>
      <li><strong>Kata Containers:</strong> Runs workloads in lightweight VMs with hardware virtualization isolation</li>
      <li>Both are ideal for <strong>multi-tenant</strong> or <strong>untrusted workloads</strong></li>
    </ul>
  `,

  v5c22: `
    <h3>Cluster Auditing</h3>
    <p>
      <strong>Kubernetes auditing</strong> provides a <strong>chronological record</strong> of all actions taken within the cluster. Audit logs capture <strong>who did what, when, and from where</strong> — making them essential for security monitoring, forensic investigations, and compliance reporting.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Audit Trails Are Non-Negotiable</div>
      <p>Without audit logging, you have <strong>no forensic evidence</strong> after a breach and <strong>no way to prove compliance</strong> during audits. Audit logs should be considered as critical as the cluster itself — protect them with encryption, access controls, and off-site backups.</p>
    </div>

    <h4>Kubernetes Audit Policy</h4>
    <p>Audit policy is defined in a <strong>Policy configuration file</strong> loaded by the API server:</p>
    <pre><code>
# /etc/kubernetes/audit-policy.yaml
apiVersion: audit.k8s.io/v1
kind: Policy
# Don't generate events for all requests in RequestReceived stage.
omitStages:
  - "RequestReceived"
rules:
  # Log pod/secret changes at RequestResponse level
  - level: RequestResponse
    resources:
      - group: ""
        resources: ["secrets", "configmaps"]
      - group: ""
        resources: ["pods", "deployments", "statefulsets"]
    namespaces: ["production", "kube-system"]

  # Log all auth attempts at Metadata level
  - level: Metadata
    resources:
      - group: ""
        resources: ["pods/log"]
    omitStages:
      - "RequestReceived"

  # Log all other requests at Metadata
  - level: Metadata
</code></pre>

    <h4>Audit Levels</h4>
    <table>
      <thead>
        <tr><th>Level</th><th>Logged</th><th>Performance Impact</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>None</strong></td><td>No logging</td><td>None</td></tr>
        <tr><td><strong>Metadata</strong></td><td>Request method, URI, user, timestamp</td><td>Low</td></tr>
        <tr><td><strong>Request</strong></td><td>Metadata + request body (no response)</td><td>Medium</td></tr>
        <tr><td><strong>RequestResponse</strong></td><td>Full request + response bodies</td><td>High</td></tr>
      </tbody>
    </table>

    <h4>Audit Log Best Practices</h4>
    <ol>
      <li><strong>Log to a backend:</strong> Use a log aggregation platform (ELK, Splunk, Loki)</li>
      <li><strong>Protect log integrity:</strong> Ship to immutable/append-only storage</li>
      <li><strong>Set appropriate retention:</strong> Minimum 90 days, 1 year for compliance</li>
      <li><strong>Alert on suspicious patterns:</strong>
        <ul>
          <li>Multiple auth failures</li>
          <li>Creation of cluster-admin bindings</li>
          <li>Access to secrets by unusual users</li>
          <li>API calls from unexpected IP addresses</li>
        </ul>
      </li>
      <li><strong>Include in SIEM:</strong> Feed K8s audit logs into your central security monitoring</li>
    </ol>

    <h4>Tools for Audit Log Analysis</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>kube-audit</strong></td><td>Audit K8s configurations against security best practices</td></tr>
        <tr><td><strong>kubescape</strong></td><td>Comprehensive K8s security posture assessment</td></tr>
        <tr><td><strong>Aquaaudit</strong></td><td>Audit K8s cluster against CIS benchmarks</td></tr>
        <tr><td><strong>Elastic SIEM</strong></td><td>Correlate audit logs with other security events</td></tr>
      </tbody>
    </table>
  `,

  v5c23: `
    <h3>Multi-Cluster Security</h3>
    <p>
      <strong>Multi-cluster environments</strong> are increasingly common for <strong>high availability, disaster recovery, and regulatory compliance</strong>. However, managing security across multiple clusters introduces complexity: each cluster is an independent trust boundary that must be individually secured and collectively governed.
    </p>

    <h4>Multi-Cluster Security Challenges</h4>
    <table>
      <thead>
        <tr><th>Challenge</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Consistent policy enforcement</strong></td><td>Same policies must apply across all clusters</td></tr>
        <tr><td><strong>Federated identity</strong></td><td>Users need consistent access across clusters</td></tr>
        <tr><td><strong>Centralized visibility</strong></td><td>Security teams need a unified view of all clusters</td></tr>
        <tr><td><strong>Configuration drift</strong></td><td>Clusters diverge over time without governance</td></tr>
        <tr><td><strong>Cross-cluster lateral movement</strong></td><td>Compromise of one cluster could lead to others</td></tr>
      </tbody>
    </table>

    <h4>Multi-Cluster Security Solutions</h4>
    <table>
      <thead>
        <tr><th>Tool/Approach</th><th>Function</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Rancher</strong></td><td>Centralized multi-cluster management with security policies</td></tr>
        <tr><td><strong>OPA Gatekeeper</strong></td><td>Deploy consistent policies across all clusters</td></tr>
        <tr><td><strong>Fleets (Azure Arc / GKE Fleet)</strong></td><td>Manage policies across multiple clusters</td></tr>
        <tr><td><strong>Karmada</strong></td><td>Kubernetes-native multi-cluster orchestration</td></tr>
        <tr><td><strong>Clusternet</strong></td><td>Hub-spoke multi-cluster management</td></tr>
      </tbody>
    </table>

    <h4>Multi-Cluster Security Best Practices</h4>
    <ol>
      <li><strong>Standardize configurations:</strong> Use GitOps to ensure all clusters share the same hardened base</li>
      <li><strong>Centralize logging:</strong> Aggregate audit logs from all clusters into a single SIEM</li>
      <li><strong>Unified RBAC:</strong> Use external identity providers (OIDC) for consistent authentication</li>
      <li><strong>Cross-cluster network policies:</strong> Control inter-cluster communication</li>
      <li><strong>Federated secret management:</strong> Use Vault with multi-cluster unseal or cloud-native replication</li>
      <li><strong>Regular audits:</strong> Audit all clusters against the same security baseline</li>
    </ol>
  `,

  v5c24: `
    <h3>Cloud Native Security Tools (CNSP)</h3>
    <p>
      <strong>Cloud Native Security Platforms (CNSP)</strong> provide <strong>unified security visibility</strong> across the entire container lifecycle — from image scanning and CI/CD through runtime monitoring and compliance. They integrate multiple security functions into a single pane of glass.
    </p>

    <h4>CNSP Capabilities</h4>
    <table>
      <thead>
        <tr><th>Capability</th><th>What It Covers</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Image Scanning</strong></td><td>Vulnerability detection in container images</td></tr>
        <tr><td><strong>Policy Enforcement</strong></td><td>Admission control and runtime protection</td></tr>
        <tr><td><strong>Network Visibility</strong></td><td>Container-to-container traffic analysis</td></tr>
        <tr><td><strong>Runtime Protection</strong></td><td>Anomaly detection, system call monitoring</td></tr>
        <tr><td><strong>Compliance</strong></td><td>CIS benchmarks, regulatory framework mapping</td></tr>
        <tr><td><strong>Secret Detection</strong></td><td>Find secrets in images, repos, and runtime</td></tr>
        <tr><td><strong>SBOM Management</strong></td><td>Software bill of materials for all images</td></tr>
      </tbody>
    </table>

    <h4>Leading CNSP Solutions</h4>
    <table>
      <thead>
        <tr><th>Platform</th><th>Type</th><th>Key Differentiator</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Aqua Security</strong></td><td>Commercial</td><td>Full lifecycle, serverless scanning, microsegmentation</td></tr>
        <tr><td><strong>Palo Alto Prisma Cloud</strong></td><td>Commercial</td><td>Broadest cloud-native coverage, CNAPP</td></tr>
        <tr><td><strong>Sysdig Secure</strong></td><td>Commercial</td><td>Runtime security, forensics, Falco-based</td></tr>
        <tr><td><strong>Wiz</strong></td><td>Commercial</td><td>Agentless, risk prioritization, cloud-native</td></tr>
        <tr><td><strong>Lacework</strong></td><td>Commercial</td><td>Anomaly-based detection, polygraph technology</td></tr>
        <tr><td><strong>Trivy + Falco + OPA</strong></td><td>Open-source stack</td><td>Best free alternative, modular</td></tr>
      </tbody>
    </table>

    <h4>Open-Source Security Stack</h4>
    <p>For organizations that prefer open-source, a powerful stack can be assembled:</p>
    <pre><code>
┌─────────────────────────────────────────────┐
│           Open-Source K8s Security Stack     │
├─────────────────┬───────────────────────────┤
│ Image Scanning  │ Trivy                     │
│ Policy Engine   │ OPA / Gatekeeper          │
│ Admission       │ Kyverno                   │
│ Runtime Security│ Falco + Sysdig            │
│ Network Policy  │ Cilium / Calico           │
│ Secrets         │ External Secrets + Vault  │
│ Compliance      │ Kubescape + kube-bench    │
│ Observability   │ Prometheus + OpenTelemetry│
│ Log Analysis    │ Loki + Grafana            │
│ Vulnerability DB│ Grype + CVE DB            │
└─────────────────┴───────────────────────────┘
</code></pre>

    <div class="info-box">
      <div class="info-title">💡 CNAPP Convergence</div>
      <p>The industry is converging on <strong>CNAPP (Cloud-Native Application Protection Platform)</strong> — a unified approach combining CSPM, CWPP, CIEM, and container security into a single platform. This reduces tool sprawl and provides <strong>correlated risk visibility</strong> across cloud, containers, and Kubernetes.</p>
    </div>
  `,

  // ==========================================
  // SECTION 4: KUBERNETES OPERATIONS
  // ==========================================

  v5c25: `
    <h3>Secure Cluster Setup</h3>
    <p>
      <strong>Secure cluster setup</strong> is the <strong>foundation</strong> of everything that runs on Kubernetes. A cluster that is misconfigured from the start will be exponentially harder to secure later. The setup phase is where you establish trust boundaries, configure authentication, and define the security baseline.
    </p>

    <h4>Pre-Deployment Planning</h4>
    <ol>
      <li><strong>Choose the right deployment model:</strong>
        <ul>
          <li><strong>Managed (EKS, AKS, GKE):</strong> Provider handles control plane security</li>
          <li><strong>Self-managed (kubeadm, kOps, K3s):</strong> Full control, full responsibility</li>
          <li><strong>Hybrid:</strong> Control plane managed, worker nodes self-managed</li>
        </ul>
      </li>
      <li><strong>Define network topology:</strong> Private subnets for nodes, NAT for outbound, no public node IPs</li>
      <li><strong>Plan RBAC strategy:</strong> Map organizational roles to K8s RBAC before cluster creation</li>
      <li><strong>Select CNI plugin:</strong> Ensure it supports NetworkPolicy (Calico, Cilium)</li>
    </ol>

    <h4>Cluster Hardening Checklist</h4>
    <table>
      <thead>
        <tr><th>Check</th><th>Action</th><th>Priority</th></tr>
      </thead>
      <tbody>
        <tr><td>Enable RBAC</td><td><code>--authorization-mode=RBAC</code></td><td>Critical</td></tr>
        <tr><td>Disable anonymous auth</td><td><code>--anonymous-auth=false</code></td><td>Critical</td></tr>
        <tr><td>Enable audit logging</td><td><code>--audit-policy-file</code></td><td>Critical</td></tr>
        <tr><td>Disable auto-mounting service account tokens</td><td><code>automountServiceAccountToken: false</code></td><td>High</td></tr>
        <tr><td>Enable admission controllers</td><td>NodeRestriction, PodSecurity, ResourceQuota</td><td>High</td></tr>
        <tr><td>Set API server to private</td><td>Use private endpoint</td><td>High</td></tr>
        <tr><td>Enable etcd encryption at rest</td><td><code>--experimental-encryption-provider-config</code></td><td>High</td></tr>
        <tr><td>Restrict kubelet API</td><td><code>--anonymous-auth=false</code> on kubelet</td><td>High</td></tr>
        <tr><td>Network segmentation</td><td>Separate node pools by workload type</td><td>Medium</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">�k Managed vs. Self-Managed</div>
      <p>For most teams, <strong>managed Kubernetes</strong> (EKS, AKS, GKE) is the better security choice. The provider handles control plane patching, etcd backups, and availability. Self-managed clusters give more control but require deep operational expertise and constant maintenance. Choose based on your team's Kubernetes maturity.</p>
    </div>
  `,

  v5c26: `
    <h3>Workload Security</h3>
    <p>
      <strong>Workload security</strong> in Kubernetes involves hardening the <strong>individual pods and containers</strong> that run your applications. Even in a well-configured cluster, a single misconfigured pod can become the entry point for an attack.
    </p>

    <h4>Pod-Level Security</h4>
    <h5>Security Context (Pod Level)</h5>
    <pre><code>
apiVersion: v1
kind: Pod
metadata:
  name: secure-app
spec:
  securityContext:
    runAsNonRoot: true            # Never run as root
    runAsUser: 1000               # Specific non-root user
    runAsGroup: 3000              # Specific group
    fsGroup: 2000                 # Filesystem group for volumes
    seccompProfile:
      type: RuntimeDefault        # Restrict syscalls
  containers:
    - name: app
      securityContext:
        allowPrivilegeEscalation: false  # Prevent privilege escalation
        readOnlyRootFilesystem: true     # Immutable filesystem
        capabilities:
          drop: ["ALL"]                  # Drop all capabilities
</code></pre>

    <h5>Container-Level Security Context</h5>
    <table>
      <thead>
        <tr><th>Setting</th><th>Value</th><th>Why</th></tr>
      </thead>
      <tbody>
        <tr><td><code>allowPrivilegeEscalation</code></td><td><code>false</code></td><td>Prevents setuid/setgid privilege gains</td></tr>
        <tr><td><code>readOnlyRootFilesystem</code></td><td><code>true</code></td><td>Prevents file modification persistence</td></tr>
        <tr><td><code>capabilities.drop</code></td><td><code>["ALL"]</code></td><td>Removes all Linux capabilities</td></tr>
        <tr><td><code>runAsNonRoot</code></td><td><code>true</code></td><td>Enforces non-root execution</td></tr>
        <tr><td><code>runAsUser</code></td><td>Specific UID</td><td>Explicit user identity</td></tr>
        <tr><td><code>seccompProfile.type</code></td><td><code>RuntimeDefault</code></td><td>Restricts system calls</td></tr>
        <tr><td><code>privileged</code></td><td><code>false</code></td><td>Never run privileged containers</td></tr>
      </tbody>
    </table>

    <h4>Resource Limits for Security</h4>
    <pre><code>
# Prevent resource exhaustion attacks
resources:
  requests:
    cpu: "100m"
    memory: "128Mi"
  limits:
    cpu: "500m"
    memory: "512Mi"
  # Limits prevent a single pod from consuming
  # all node resources (DoS prevention)
</code></pre>

    <div class="warning-box">
      <div class="warning-title">⚠️ The Privileged Container Trap</div>
      <p>A <code>privileged: true</code> container has <strong>all Linux capabilities</strong> and access to <strong>all devices</strong> on the host — it's essentially root on the host. This should <strong>never</strong> be used in production. If you think you need it for a specific tool, there's almost always a safer alternative.</p>
    </div>
  `,

  v5c27: `
    <h3>Supply Chain Security</h3>
    <p>
      <strong>Kubernetes supply chain security</strong> protects the <strong>entire path</strong> from source code to running workloads. It ensures that only <strong>verified, untampered artifacts</strong> are deployed to your cluster, and that every step in the pipeline is trustworthy.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Verify Before You Deploy</div>
      <p>Every artifact that enters your cluster should be <strong>signed, verified, and reproducible</strong>. Supply chain attacks target the weakest link — whether that's a compromised dependency, a tampered image, or a modified Helm chart.</p>
    </div>

    <h4>Supply Chain Attack Prevention</h4>
    <table>
      <thead>
        <tr><th>Stage</th><th>Threat</th><th>Prevention</th></tr>
      </thead>
      <tbody>
        <tr><td>Source Code</td><td>Malicious commit</td><td>Signed commits, branch protection, code review</td></tr>
        <tr><td>Build</td><td>Build process compromise</td><td>Reproducible builds, SLSA provenance</td></tr>
        <tr><td>Image Registry</td><td>Image overwrite, typosquatting</td><td>Image signing (Cosign), immutable tags</td></tr>
        <tr><td>Helm Charts</td><td>Chart tampering</td><td>Chart signing, provenance verification</td></tr>
        <tr><td>Deployment</td><td>Manifests modified in transit</td><td>GitOps (source of truth), manifest signing</td></tr>
        <tr><td>Runtime</td><td>Runtime tampering</td><td>Runtime integrity monitoring, file checksums</td></tr>
      </tbody>
    </table>

    <h4>Sigstore — Keyless Container Signing</h4>
    <pre><code>
# Sign an image with Sigstore/Cosign (keyless)
cosign sign --yes myregistry.com/myapp:v1.2.3

# Verify the signature
cosign verify --yes myregistry.com/myapp:v1.2.3 \
  --certificate-identity-regexp ".*@mycompany.com"

# Attach SBOM
syft myregistry.com/myapp:v1.2.3 -o spdx-json > sbom.spdx
cosign attest --yes --predicate sbom.spdx --type spdx myregistry.com/myapp:v1.2.3
</code></pre>

    <h4>Kyverno — Image Verification Policy</h4>
    <pre><code>
# Verify image signatures before deployment
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: verify-image-signatures
spec:
  validationFailureAction: enforce
  rules:
    - name: verify-cosign-signature
      match:
        resources:
          kinds:
            - Pod
      verifyImages:
        - imageReferences:
            - "myregistry.com/*"
          attestors:
            - entries:
                - keys:
                    kms: "kms:aws:///my-key"
          attestations:
            - predicateType: "cosign.sigstore.dev/attestation/vuln/v1"
              conditions:
                - all:
                    - key: "{{ critical_count }}"
                      operator: Equals
                      value: "0"
</code></pre>

    <h4>Supply Chain Security Checklist</h4>
    <ol>
      <li>✅ Sign all container images (Cosign)</li>
      <li>✅ Generate and attach SBOMs (Syft, Trivy)</li>
      <li>✅ Pin all dependencies (exact versions, lock files)</li>
      <li>✅ Use private registries with access controls</li>
      <li>✅ Verify image signatures in admission controllers</li>
      <li>✅ Implement reproducible builds</li>
      <li>✅ Monitor for dependency vulnerabilities (SCA)</li>
      <li>✅ Use SLSA-compliant build platforms</li>
    </ol>
  `,

  v5c28: `
    <h3>Runtime Protection</h3>
    <p>
      <strong>Runtime protection</strong> in Kubernetes provides <strong>continuous security enforcement and monitoring</strong> after workloads are deployed. It's the last line of defense against <strong>zero-day exploits, container escapes, and behavioral anomalies</strong> that evade build-time and admission-time controls.
    </p>

    <h4>Runtime Protection Layers</h4>
    <table>
      <thead>
        <tr><th>Layer</th><th>Protection</th><th>Implementation</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Kernel-level</strong></td><td>System call filtering, namespace isolation</td><td>seccomp, AppArmor, SELinux</td></tr>
        <tr><td><strong>Container runtime</strong></td><td>Runtime enforcement policies</td><td>Falco, Sysdig, containerd-shim</td></tr>
        <tr><td><strong>Network layer</strong></td><td>Network traffic analysis and enforcement</td><td>Cilium, Calico, Istio</td></tr>
        <tr><td><strong>Application layer</strong></td><td>WAF, RASP, anomaly detection</td><td>ModSecurity, Contrast Security</td></tr>
        <tr><td><strong>Cluster-level</strong></td><td>Policy enforcement, admission control</td><td>OPA, Kyverno</td></tr>
      </tbody>
    </table>

    <h4>Falco Runtime Alerts</h4>
    <p>Key Falco rules for Kubernetes runtime protection:</p>
    <pre><code>
# Detect container writing to sensitive paths
- rule: Write to /proc or /sys
  condition: >
    open_write and container and
    (fd.name startswith "/proc" or fd.name startswith "/sys")
  output: "Container %container.id writing to sensitive path %fd.name"
  priority: CRITICAL

# Detect unexpected outbound connections
- rule: Unexpected Outbound Connection
  condition: >
    outbound and container and
    not fd.sip in (10.0.0.0/8, 172.16.0.0/12) and
    not container.image.repository in (allowed_images)
  output: "Unauthorized outbound connection from container %container.id"
  priority: WARNING

# Detect Kubernetes API access from pods
- rule: K8s API Access from Pod
  condition: >
    outbound and container and
    fd.sport = 443 and fd.dip = "10.0.0.1" and
    k8s.ns.name != "kube-system"
  output: "Pod accessing K8s API: %container.id"
  priority: NOTICE
</code></pre>

    <h4>gVisor — Application Container Sandbox</h4>
    <p><strong>gVisor</strong> is a user-space kernel that provides <strong>strong isolation</strong> without the overhead of a full VM:</p>
    <ul>
      <li>Intercepts and mediates all syscalls from the container</li>
      <li>Implements ~380 Linux syscalls in user-space Go code</li>
      <li>Provides defense against kernel exploits and container escapes</li>
      <li>Compatible with Docker and Kubernetes via <code>containerd-shim-runsc</code></li>
      <li>Ideal for untrusted or multi-tenant workloads</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Runtime Protection Strategy</div>
      <p>Think of runtime protection in <strong>three tiers</strong>:<br>
      1. <strong>Prevent</strong> — Admission controllers and policies block bad configs<br>
      2. <strong>Detect</strong> — Runtime monitoring (Falco, Sysdig) catches anomalous behavior<br>
      3. <strong>Respond</strong> — Automated containment (kill pod, isolate network, revoke credentials)</p>
    </div>
  `,

  v5c29: `
    <h3>Monitoring & Logging</h3>
    <p>
      <strong>Monitoring and logging</strong> in Kubernetes provide <strong>visibility into cluster health, application behavior, and security events</strong>. Without proper monitoring, you're operating blind — unable to detect attacks, diagnose issues, or verify security controls.
    </p>

    <h4>Kubernetes-Native Monitoring</h4>
    <table>
      <thead>
        <tr><th>Component</th><th>What It Collects</th><th>Retention</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Metrics Server</strong></td><td>Resource usage (CPU, memory) per pod/node</td><td>Short-term (in-memory)</td></tr>
        <tr><td><strong>kube-apiserver audit logs</strong></td><td>All API requests with user/action details</td><td>Configurable (external storage recommended)</td></tr>
        <tr><td><strong>kubelet</strong></td><td>Container status, events, resource stats</td><td>Short-term</td></tr>
        <tr><td><strong>Container runtime</strong></td><td>Container start/stop, OOM kills</td><td>Short-term</td></tr>
        <tr><td><strong>Events</strong></td><td>Cluster events (scheduling, image pulls, errors)</td><td>1 hour default</td></tr>
      </tbody>
    </table>

    <h4>Recommended Monitoring Stack</h4>
    <pre><code>
┌────────────────────────────────────────────┐
│          PROMETHEUS + GRAFANA STACK         │
│                                            │
│  ┌──────────┐   ┌────────────┐            │
│  │ Prometheus│──▶│ Grafana    │            │
│  │ (metrics) │   │ (dashboards│            │
│  └──────────┘   │  & alerts) │            │
│       ▲         └────────────┘            │
│       │                │                  │
│  ┌────┴────┐    ┌─────┴──────┐            │
│  │kube-state│    │ node-      │            │
│  │metrics   │    │ exporter   │            │
│  └─────────┘    └────────────┘            │
│                                            │
│  ┌──────────┐   ┌────────────┐            │
│  │ Loki     │◀──│ Fluentd /  │            │
│  │ (logs)   │   │ Fluent Bit │            │
│  └──────────┘   └────────────┘            │
│                                            │
│  ┌──────────┐   ┌────────────┐            │
│  │ Tempo    │   │ Open       │            │
│  │ (traces) │◀──│ Telemetry  │            │
│  └──────────┘   └────────────┘            │
└────────────────────────────────────────────┘
</code></pre>

    <h4>Key Kubernetes Metrics to Monitor</h4>
    <table>
      <thead>
        <tr><th>Category</th><th>Metric</th><th>Alert Threshold</th></tr>
      </thead>
      <tbody>
        <tr><td>Security</td><td>Failed auth attempts to API</td><td>> 10/min from single source</td></tr>
        <tr><td>Security</td><td>Privileged container launches</td><td>Any in production</td></tr>
        <tr><td>Security</td><td>Policies rejected (OPA/Kyverno)</td><td>Any unexpected</td></tr>
        <tr><td>Health</td><td>Pod restart count</td><td>> 3 in 10 min</td></tr>
        <tr><td>Health</td><td>Node NotReady status</td><td>Immediate alert</td></tr>
        <tr><td>Capacity</td><td>Node CPU/memory utilization</td><td>> 80% sustained 5 min</td></tr>
        <tr><td>Capacity</td><td>PersistentVolume usage</td><td>> 85%</td></tr>
      </tbody>
    </table>

    <h4>Log Collection Architecture</h4>
    <ol>
      <li><strong>Fluent Bit</strong> (lightweight) or <strong>Fluentd</strong> as DaemonSet on each node</li>
      <li>Collects container stdout/stderr, kubelet logs, and audit logs</li>
      <li>Ships to <strong>Loki</strong> (Grafana), <strong>Elasticsearch</strong>, or <strong>S3/Splunk</strong></li>
      <li>Use <strong>structured logging</strong> (JSON) from applications for better searchability</li>
      <li>Add <strong>trace correlation IDs</strong> across microservices</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 Cost-Effective Logging</div>
      <p>For cost-effective logging, use a <strong>tiered approach</strong>: recent logs (7 days) in hot storage (Elasticsearch/Loki), older logs in cold storage (S3 + Athena or S3 + Loki microservices). Use <strong>log sampling</strong> for high-volume debug logs while keeping all error/warning logs.</p>
    </div>
  `,

  v5c30: `
    <h3>Incident Response</h3>
    <p>
      <strong>Kubernetes incident response</strong> requires specialized procedures because of the <strong>dynamic, distributed nature</strong> of containerized environments. Traditional IR techniques must be adapted for ephemeral pods, overlay networks, and declarative infrastructure.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Immutable Infrastructure Changes IR</div>
      <p>In Kubernetes, <strong>evidence can disappear</strong> when pods restart or are evicted. IR must capture volatile data <strong>immediately</strong> — container logs, running processes, network connections, and pod specs — before they're lost.</p>
    </div>

    <h4>K8s-Specific IR Phases</h4>
    <table>
      <thead>
        <tr><th>Phase</th><th>Actions</th><th>Tools</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>1. Detection</strong></td>
          <td>Falco alerts, audit log anomalies, SIEM alerts, unusual resource usage</td>
          <td>Falco, SIEM, Prometheus alerts</td>
        </tr>
        <tr>
          <td><strong>2. Triage</strong></td>
          <td>Identify affected pods, namespaces, nodes; assess scope</td>
          <td>kubectl, Kiali, Grafana dashboards</td>
        </tr>
        <tr>
          <td><strong>3. Containment</strong></td>
          <td>Cordon nodes, delete compromised pods, isolate namespaces, revoke secrets</td>
          <td>kubectl cordon, network policies, secret rotation</td>
        </tr>
        <tr>
          <td><strong>4. Evidence Collection</strong></td>
          <td>Capture logs, exec into containers, snapshot volumes, collect artifacts</td>
          <td>kubectl logs/exec/describe, forensic tools</td>
        </tr>
        <tr>
          <td><strong>5. Eradication</strong></td>
          <td>Remove malicious images, rotate all secrets, patch vulnerabilities</td>
          <td>Registry cleanup, Vault rotation, image scanning</td>
        </tr>
        <tr>
          <td><strong>6. Recovery</strong></td>
          <td>Deploy clean images, restore from known-good manifests, monitor</td>
          <td>GitOps rollback, kubectl rollout restart</td>
        </tr>
      </tbody>
    </table>

    <h4>Emergency Containment Commands</h4>
    <pre><code>
# 1. Cordon a compromised node (prevent new pods)
kubectl cordon &lt;node-name&gt;

# 2. Kill all pods on the compromised node
kubectl drain &lt;node-name&gt; --ignore-daemonsets --delete-emptydir-data

# 3. Delete compromised deployment immediately
kubectl delete deployment &lt;compromised-app&gt; -n &lt;namespace&gt; --cascade=orphan

# 4. Isolate namespace (deny all ingress/egress)
kubectl apply -f - &lt;&lt;EOF
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: isolate-namespace
  namespace: &lt;namespace&gt;
spec:
  podSelector: {}
  policyTypes: ["Ingress", "Egress"]
EOF

# 5. Capture forensic evidence
kubectl logs &lt;pod-name&gt; -n &lt;namespace&gt; --previous &gt; logs.txt
kubectl exec -it &lt;pod-name&gt; -n &lt;namespace&gt; -- ps aux &gt; processes.txt
kubectl exec -it &lt;pod-name&gt; -n &lt;namespace&gt; -- netstat -tlnp &gt; connections.txt
kubectl get pod &lt;pod-name&gt; -n &lt;namespace&gt; -o yaml &gt; pod-spec.yaml

# 6. Revoke all secrets in affected namespace
# (rotate credentials in external secrets manager)
</code></pre>

    <h4>Evidence Preservation</h4>
    <ol>
      <li><strong>Freeze the scene:</strong> Don't restart or delete pods before capturing evidence</li>
      <li><strong>Capture volatile data first:</strong> Process lists, network connections, in-memory data</li>
      <li><strong>Create forensic copies:</strong> Snapshots of volumes, container filesystem overlays</li>
      <li><strong>Chain of custody:</strong> Document all actions taken with timestamps</li>
      <li><strong>Audit log preservation:</strong> Export API server audit logs immediately</li>
    </ol>
  `,

  v5c31: `
    <h3>Disaster Recovery</h3>
    <p>
      <strong>Disaster recovery (DR)</strong> for Kubernetes ensures that your applications can <strong>survive and recover</strong> from catastrophic failures — whether from infrastructure outages, human errors, security breaches, or regional disasters. A DR strategy defines <strong>Recovery Time Objectives (RTO)</strong> and <strong>Recovery Point Objectives (RPO)</strong> for your workloads.
    </p>

    <h4>DR Strategies for Kubernetes</h4>
    <table>
      <thead>
        <tr><th>Strategy</th><th>RTO</th><th>RPO</th><th>Cost</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Backup & Restore</strong></td><td>Hours</td><td>Hours (snapshot frequency)</td><td>Low</td></tr>
        <tr><td><strong>Multi-Cluster Active/Passive</strong></td><td>Minutes to hours</td><td>Seconds to minutes</td><td>Medium</td></tr>
        <tr><td><strong>Multi-Cluster Active/Active</strong></td><td>Seconds to minutes</td><td>Near-zero</td><td>High</td></tr>
        <tr><td><strong>Cluster-as-Code</strong></td><td>Minutes to hours</td><td>Git repo (minutes)</td><td>Low-Medium</td></tr>
      </tbody>
    </table>

    <h4>etcd Backup & Restore</h4>
    <p>etcd contains all cluster state — backing it up is <strong>critical</strong>:</p>
    <pre><code>
# Backup etcd
ETCDCTL_API=3 etcdctl snapshot save snapshot.db \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/ca.crt \
  --cert=/etc/kubernetes/pki/server.crt \
  --key=/etc/kubernetes/pki/server.key

# Upload to secure storage
aws s3 cp snapshot.db s3://my-backups/k8s/etcd-$(date +%Y%m%d).db

# Restore from backup
ETCDCTL_API=3 etcdctl snapshot restore snapshot.db \
  --data-dir=/var/lib/etcd-from-backup
</code></pre>

    <h4>Namespace-Level Backup with Velero</h4>
    <pre><code>
# Install Velero
velero install \
  --provider aws \
  --bucket my-k8s-backups \
  --backup-location-config region=us-east-1 \
  --use-volume-snapshots=true \
  --plugins velero/velero-plugin-for-aws:v1

# Backup a namespace
velero backup create prod-backup --include-namespaces production

# Schedule regular backups
velero schedule create daily-prod \
  --schedule="0 2 * * *" \
  --include-namespaces production \
  --ttl 720h  # 30 days retention

# Restore from backup
velero restore create --from-backup prod-backup
</code></pre>

    <h4>DR Runbook Checklist</h4>
    <ol>
      <li>✅ Verify backup integrity (test restores monthly)</li>
      <li>✅ Document cluster setup (IaC, Helm values, config)</li>
      <li>✅ Maintain runbooks for common failure scenarios</li>
      <li>✅ Test failover to DR region quarterly</li>
      <li>✅ Keep backup credentials separate and secured</li>
      <li>✅ Monitor backup job status and alert on failures</li>
      <li>✅ Define and test RTO/RPO targets</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 GitOps is DR</div>
      <p>If you use <strong>GitOps</strong>, your cluster state lives in Git. A new cluster + <code>git clone</code> + GitOps sync can restore your entire deployment stack. Combine with etcd and PVC backups for complete coverage. This makes <strong>Git history your DR plan</strong>.</p>
    </div>
  `,

  v5c32: `
    <h3>Compliance Mapping</h3>
    <p>
      <strong>Kubernetes compliance mapping</strong> translates regulatory and framework requirements into <strong>specific Kubernetes configurations and controls</strong>. This ensures that your cluster configurations satisfy standards like <strong>CIS Benchmarks, PCI DSS, HIPAA, SOC 2, and HITRUST</strong>.
    </p>

    <h4>Common Compliance Frameworks for K8s</h4>
    <table>
      <thead>
        <tr><th>Framework</th><th>Key K8s Requirements</th><th>Priority</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>CIS Kubernetes Benchmark</strong></td><td>API server hardening, RBAC, network policies, pod security</td><td>Foundation</td></tr>
        <tr><td><strong>PCI DSS</strong></td><td>Encryption at rest/in transit, access controls, logging, segmentation</td><td>Payment workloads</td></tr>
        <tr><td><strong>HIPAA</strong></td><td>Encryption, audit logging, access controls, BAAs</td><td>Healthcare workloads</td></tr>
        <tr><td><strong>SOC 2</strong></td><td>Change management, monitoring, incident response</td><td>SaaS vendors</td></tr>
        <tr><td><strong>FedRAMP</strong></td><td>FISMA controls, continuous monitoring, ATO process</td><td>Government workloads</td></tr>
        <tr><td><strong>ITAR</strong></td><td>Data residency, access controls, export controls</td><td>Defense/government</td></tr>
      </tbody>
    </table>

    <h4>CIS Benchmark Key Controls</h4>
    <p>The <strong>CIS Kubernetes Benchmark</strong> provides a comprehensive set of controls. Key categories include:</p>
    <table>
      <thead>
        <tr><th>Control Area</th><th>Example Controls</th><th>Automatable?</th></tr>
      </thead>
      <tbody>
        <tr><td>API Server</td><td>Anonymous auth disabled, RBAC enabled, audit logging</td><td>✅ Yes</td></tr>
        <tr><td>etcd</td><td>Encryption at rest, peer/client TLS</td><td>✅ Yes</td></tr>
        <tr><td>Control Plane</td><td>Scheduler/controller-manager profiling disabled</td><td>✅ Yes</td></tr>
        <tr><td>Worker Nodes</td><td>Kubelet config, rotate certificates, protect kubelet API</td><td>✅ Yes</td></tr>
        <tr><td>Pod Security</td><td>Enforce baseline/restricted PSS</td><td>✅ Yes</td></tr>
        <tr><td>Network Policies</td><td>Default deny ingress/egress</td><td>✅ Yes</td></tr>
        <tr><td>Image Management</td><td>Use trusted registries, scan images</td><td>✅ Partially</td></tr>
      </tbody>
    </table>

    <h4>Tools for Compliance Mapping</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Function</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>kube-bench</strong></td><td>CIS benchmark checks (CNCF project)</td></tr>
        <tr><td><strong>kubescape</strong></td><td>Multi-framework compliance scanning</td></tr>
        <tr><td><strong>Polaris</strong></td><td>Configuration validation against best practices</td></tr>
        <tr><td><strong>Prowler (EKS)</strong></td><td>AWS security best practices and compliance</td></tr>
        <tr><td><strong>ScoutSuite</strong></td><td>Multi-cloud compliance auditing</td></tr>
        <tr><td><strong>Vanta / Drata</strong></td><td>Continuous compliance monitoring</td></tr>
      </tbody>
    </table>

    <h4>Compliance Evidence Automation</h4>
    <pre><code>
# kube-bench CIS scan
kube-bench --benchmark cis-1.8 --json | jq .

# kubescape multi-framework scan
kubescape scan framework all --format json --output results.json

# Polaris admission controller (blocks non-compliant resources)
helm install polaris polaris/polaris \
  --set webhook.enable=true \
  --set auditAction=block

# Continuous compliance mapping with Vanta
# Automatically maps K8s controls to frameworks:
# - CIS → Control mappings
# - SOC 2 → Evidence collection
# - PCI DSS → Network segmentation proof
</code></pre>
  `,

  v5c33: `
    <h3>Benchmark (CIS K8s)</h3>
    <p>
      <strong>CIS Kubernetes Benchmark</strong> is a comprehensive set of <strong>best-practice security guidelines</strong> for deploying and operating Kubernetes clusters. Developed by the Center for Internet Security, it provides <strong>Level 1</strong> (practical, low-overhead) and <strong>Level 2</strong> (defense-in-depth) recommendations with automated scoring.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Scoring Your Cluster</div>
      <p>CIS Benchmark scoring rates each control as <strong>PASS</strong>, <strong>FAIL</strong>, or <strong>WARN</strong>. A cluster that passes all Level 1 controls provides a solid security baseline. Level 2 adds controls that may require more operational overhead.</p>
    </div>

    <h4>Running CIS Benchmark</h4>
    <pre><code>
# Using kube-bench (official CIS scanner)

# Run all checks
kube-bench run

# Run specific benchmark version
kube-bench run --benchmark cis-1.8

# Run only master/node checks
kube-bench run --targets master
kube-bench run --targets node

# JSON output for automation
kube-bench run --json | jq '.[] | select(.status == "FAIL")'

# Run on managed K8s (EKS, GKE, AKS)
kube-bench run --cloud aks  # Azure-specific checks

# In-cluster DaemonSet
kubectl apply -f https://raw.githubusercontent.com/aquasecurity/kube-bench/main/job.yaml
</code></pre>

    <h4>Key CIS Controls Summary</h4>
    <table>
      <thead>
        <tr><th>ID</th><th>Control</th><th>Level</th><th>Automated</th></tr>
      </thead>
      <tbody>
        <tr><td>1.1.1</td><td>Ensure API server pod spec is validated</td><td>1</td><td>✅</td></tr>
        <tr><td>1.1.6</td><td>Ensure anonymous auth is disabled</td><td>1</td><td>✅</td></tr>
        <tr><td>1.2.6</td><td>Ensure RBAC is enabled</td><td>1</td><td>✅</td></tr>
        <tr><td>1.2.21</td><td>Ensure default ServiceAccount not used</td><td>1</td><td>✅</td></tr>
        <tr><td>1.3.2</td><td>Ensure secrets are encrypted at rest</td><td>1</td><td>✅</td></tr>
        <tr><td>1.4.1</td><td>Ensure kubelet cert rotation is enabled</td><td>1</td><td>✅</td></tr>
        <tr><td>2.1.1</td><td>Ensure minimum CPU/Memory limits set</td><td>1</td><td>✅</td></tr>
        <tr><td>4.2.10</td><td>Ensure restrictions on Linux capabilities</td><td>1</td><td>✅</td></tr>
        <tr><td>5.1.1</td><td>Ensure CronJob deadline is set</td><td>1</td><td>✅</td></tr>
        <tr><td>5.4.1</td><td>Ensure default deny ingress policy</td><td>1</td><td>✅</td></tr>
        <tr><td>5.5.1</td><td>Ensure default deny egress policy</td><td>2</td><td>✅</td></tr>
        <tr><td>5.7.4</td><td>Ensure PodSecurityPolicy with Restricted profile</td><td>2</td><td>✅</td></tr>
      </tbody>
    </table>

    <h4>Common Failures and Fixes</h4>
    <table>
      <thead>
        <tr><th>Failure</th><th>Fix</th></tr>
      </thead>
      <tbody>
        <tr><td>Anonymous auth enabled</td><td><code>--anonymous-auth=false</code> on API server</td></tr>
        <tr><td>Secrets not encrypted at rest</td><td>Enable EncryptionConfiguration</td></tr>
        <tr><td>PodSecurityPolicy missing</td><td>Migrate to Pod Security Standards (PSA)</td></tr>
        <tr><td>No network policies</td><td>Apply default-deny policies per namespace</td></tr>
        <tr><td>ServiceAccount auto-mount</td><td>Set <code>automountServiceAccountToken: false</code></td></tr>
        <tr><td>Insecure addon configurations</td><td>Review and harden dashboard, heapster</td></tr>
      </tbody>
    </table>

    <div class="info-box">
      <div class="info-title">💡 CIS + Automation = Continuous Compliance</div>
      <p>Run <strong>kube-bench as a CronJob</strong> in your cluster for continuous compliance monitoring. Send results to your SIEM and alert on failures. Integrate with <strong>kubescape</strong> for multi-framework scanning beyond CIS.</p>
    </div>
  `,

  v5c34: `
    <h3>Troubleshooting</h3>
    <p>
      <strong>Kubernetes troubleshooting</strong> for security involves diagnosing <strong>why security controls aren't working as expected</strong> — why pods can't communicate, why policies are being denied, or why vulnerabilities are still present. Understanding the K8s troubleshooting workflow is essential for security engineers.
    </p>

    <h4>Systematic Troubleshooting Approach</h4>
    <ol>
      <li><strong>Reproduce:</strong> Can you consistently reproduce the issue?</li>
      <li><strong>Scope:</strong> Is it one pod, one namespace, or cluster-wide?</li>
      <li><strong>Recent changes:</strong> What changed recently (deployments, policy updates)?</li>
      <li><strong>Logs:</strong> Check relevant component logs</li>
      <li><strong>Events:</strong> <code>kubectl get events --sort-by=.lastTimestamp</code></li>
      <li><strong>Describe:</strong> <code>kubectl describe &lt;resource&gt;</code> for conditions and events</li>
    </ol>

    <h4>Common Security Issues & Fixes</h4>
    <table>
      <thead>
        <tr><th>Issue</th><th>Diagnosis</th><th>Fix</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>Pod can't reach another pod</td>
          <td><code>kubectl exec -it pod -- curl target:port</code>; check <code>kubectl get networkpolicy</code></td>
          <td>Add or fix NetworkPolicy; check CNI plugin</td>
        </tr>
        <tr>
          <td>ImagePullBackOff</td>
          <td><code>kubectl describe pod</code>; check imagePullSecrets</td>
          <td>Create imagePullSecret; check registry credentials</td>
        </tr>
        <tr>
          <td>Pod stuck in Pending</td>
          <td><code>kubectl describe pod</code>; check events for scheduling issues</td>
          <td>Resource limits, node selectors, taints/tolerations</td>
        </tr>
        <tr>
          <td>RBAC permission denied</td>
          <td><code>kubectl auth can-i &lt;verb&gt; &lt;resource&gt; --as=system:serviceaccount:&lt;ns&gt;:&lt;sa&gt;</code></td>
          <td>Update Role/ClusterRole binding</td>
        </tr>
        <tr>
          <td>Policy rejected by OPA/Kyverno</td>
          <td>Check admission webhook logs; <code>kubectl get events</code></td>
          <td>Review and update constraint template or policy</td>
        </tr>
        <tr>
          <td>Certificate expiry</td>
          <td><code>kubectl get csr</code>; check cert expiry dates</td>
          <td>Rotate certificates; enable auto-rotation</td>
        </tr>
      </tbody>
    </table>

    <h4>Essential Debug Commands</h4>
    <pre><code>
# Pod connectivity test
kubectl exec -it &lt;pod&gt; -- curl -v http://&lt;service&gt;:&lt;port&gt;

# DNS resolution test
kubectl exec -it &lt;pod&gt; -- nslookup &lt;service-name&gt;

# Check which policies affect a pod
kubectl get networkpolicy -n &lt;namespace&gt; -o yaml
kubectl get clusterpolicy/pod-security -o yaml

# RBAC troubleshooting
kubectl auth can-i create deployments --as=system:serviceaccount:default:my-sa
kubectl auth reconcile -f rbac-config.yaml

# Node-level debugging
kubectl get nodes -o wide
kubectl describe node &lt;node&gt;
ssh &lt;node-ip&gt;  # Check kubelet, container runtime logs

# API server health
kubectl cluster-info
kubectl get componentstatuses
</code></pre>

    <div class="info-box">
      <div class="info-title">💡 Security-Specific Debugging</div>
      <p>For security issues, always check:<br>
      1. <code>kubectl get events --field-selector reason=Failed</code> — failed operations<br>
      2. Falco logs for runtime alerts<br>
      3. Audit logs for unauthorized access attempts<br>
      4. OPA/Kyverno violation logs<br>
      5. Container runtime logs (<code>journalctl -u containerd</code>)</p>
    </div>
  `,

  v5c35: `
    <h3>Hardening Guide</h3>
    <p>
      <strong>Kubernetes hardening</strong> is the comprehensive process of <strong>reducing your cluster's attack surface</strong> by applying best practices across every component. This guide serves as a <strong>master checklist</strong> for securing production Kubernetes clusters.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Defense in Depth for Kubernetes</div>
      <p>No single control is sufficient. Layer your defenses: <strong>API server hardening + RBAC + Network policies + Pod security + Image scanning + Runtime monitoring + Audit logging</strong>. If one layer fails, the next catches the attack.</p>
    </div>

    <h4>Master Hardening Checklist</h4>

    <h5>Control Plane</h5>
    <pre><code>
☐ Use managed Kubernetes (EKS/AKS/GKE) when possible
☐ Restrict API server endpoint to private network
☐ Enable RBAC (always)
☐ Disable anonymous authentication
☐ Enable audit logging (Metadata level minimum, RequestResponse for secrets)
☐ Rotate certificates automatically
☐ Use TLS for all API communications
☐ Enable admission controllers (PodSecurity, NodeRestriction, ResourceQuota)
☐ Restrict etcd access to API server only
☐ Enable etcd encryption at rest
☐ Regular etcd backups with encryption
</code></pre>

    <h5>Node Security</h5>
    <pre><code>
☐ Use minimal OS (Bottlerocket, Flatcar Container Linux, Ubuntu minimal)
☐ Harden OS (CIS Benchmark for OS)
☐ Enable SELinux/AppArmor
☐ Use separate node pools per workload tier
☐ Restrict SSH access (bastion-only or SSM Session Manager)
☐ Enable kernel module loading restrictions
☐ Disable swap
☐ Use container-optimized OS images
☐ Automatic security patching enabled
</code></pre>

    <h5>Workload Security</h5>
    <pre><code>
☐ Enforce Pod Security Standards (Baseline minimum, Restricted preferred)
☐ All containers run as non-root
☐ Drop ALL capabilities, add back only what's needed
☐ Set resource requests and limits on all pods
☐ Use read-only root filesystem
☐ Disallow privilege escalation
☐ Use pod security admission (not deprecated PSP)
☐ Scan all images before deployment
☐ Sign and verify images (Cosign/Sigstore)
☐ Use namespaces to separate workloads
☐ AutomountServiceAccountToken: false where not needed
☐ Network policies applied to every namespace (default-deny)
</code></pre>

    <h5>Network Security</h5>
    <pre><code>
☐ CNI plugin supports NetworkPolicy (Calico, Cilium)
☐ Default deny all ingress and egress per namespace
☐ Explicit allow rules for required communication only
☐ Use service mesh (Istio/Linkerd) for mTLS east-west traffic
☐ Restrict external access through Ingress/Gateway only
☐ Enable DNS policy restrictions
</code></pre>

    <h5>Supply Chain Security</h5>
    <pre><code>
☐ All images scanned in CI/CD (Trivy, Grype)
☐ Registry scanning on push (Harbor, ECR scanning)
☐ Runtime image re-scanning (Trivy Operator)
☐ Image signatures verified at deploy (Cosign/Kyverno)
☐ SBOM generated and stored for every build
☐ Dependencies pinned with lock files
☐ No :latest tags in production
☐ Secrets injected at runtime, not baked into images
</code></pre>

    <h5>Monitoring, Logging & Response</h5>
    <pre><code>
☐ Centralized logging (ELK/Loki/Splunk)
☐ API server audit logs shipped to SIEM
☐ Runtime monitoring (Falco, Sysdig)
☐ Prometheus metrics with Grafana dashboards
☐ Alerting on security events (brute force, privilege escalation)
☐ Incident response runbook documented and tested
☐ Regular tabletop exercises
☐ Backup and disaster recovery plan tested quarterly
</code></pre>

    <h4>Priority Implementation Order</h4>
    <p>If you can't implement everything at once, prioritize in this order:</p>
    <ol>
      <li><strong>RBAC + Authentication:</strong> Prevent unauthorized access (biggest impact)</li>
      <li><strong>Pod Security Standards:</strong> Prevent privileged containers</li>
      <li><strong>Network Policies:</strong> Limit lateral movement</li>
      <li><strong>Image Scanning:</strong> Prevent known vulnerabilities from running</li>
      <li><strong>Audit Logging:</strong> Ensure forensics capability</li>
      <li><strong>Runtime Monitoring:</strong> Detect anomalies</li>
      <li><strong>etcd Encryption:</strong> Protect secrets at rest</li>
      <li><strong>Supply Chain:</strong> Sign everything, generate SBOMs</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 Continuous Hardening</div>
      <p>Hardening is not a one-time event. Run <strong>kube-bench</strong> weekly, <strong>kubescape</strong> monthly, and address findings before they accumulate. Use <strong>policy-as-code</strong> (OPA, Kyverno) to prevent configuration drift. Track your hardening score over time and set targets for improvement.</p>
    </div>
  `
};