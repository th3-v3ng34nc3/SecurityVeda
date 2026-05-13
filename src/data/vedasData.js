export const vedasData = {
  veda1: {
    id: "veda1",
    title: "Veda 01: Cloud Security",
    icon: "./logos/vedas/cloudsecVeda.png",
    sanskritName: "आकाश रक्षा",
    sanskritPronunciation: "Ākāśa Rakṣā",
    gradient: "linear-gradient(135deg, #22D3EE, #06B6D4)",
    description: "Comprehensive coverage of AWS, Azure, and GCP security with detailed service explanations. Guard the digital heavens.",
    sections: [
      {
        id: "cloud-fundamentals",
        title: "Cloud Fundamentals",
        icon: "./logos/cloudsecVeda/cloudFundamental.png",
        chapters: [
          { id: "v1c1", title: "Introduction to Cloud Computing", desc: "Fundamentals of cloud computing and security" },
          { id: "v1c2", title: "Cloud Service Models", desc: "IaaS, PaaS, and SaaS Explained" },
          { id: "v1c3", title: "Cloud Deployment Models", desc: "Public, Private, Hybrid, and Multi-cloud" },
          { id: "v1c4", title: "Shared Responsibility Model", desc: "Security shared between provider and customer" },
          { id: "v1c5", title: "Cloud Attack Surface", desc: "Understanding cloud-specific threats" },
          { id: "v1c6", title: "Cloud Security Architecture", desc: "Zero Trust and defense in depth" },
          { id: "v1c7", title: "Cloud Governance", desc: "Policies, controls, and governance" },
          { id: "v1c8", title: "Cloud Security Roles", desc: "Responsibilities in cloud security" }
        ]
      },
      {
        id: "aws-security",
        title: "AWS Security",
        icon: "./logos/cloudsecVeda/awscloud.png",
        chapters: [
          { id: "v1c9", title: "AWS IAM Deep Dive", desc: "Identity and Access Management" },
          { id: "v1c10", title: "IAM Policies and Permissions", desc: "JSON policies, roles, boundaries" },
          { id: "v1c11", title: "AWS Identity Center", desc: "SSO and centralized access" },
          { id: "v1c12", title: "AWS KMS and Encryption", desc: "Key management and encryption" },
          { id: "v1c13", title: "AWS VPC Security", desc: "Network isolation and security groups" },
          { id: "v1c14", title: "AWS S3 Security", desc: "Bucket policies and access controls" },
          { id: "v1c15", title: "AWS EC2 Security", desc: "Instance hardening" },
          { id: "v1c16", title: "AWS Lambda Security", desc: "Function security" },
          { id: "v1c17", title: "AWS CloudTrail", desc: "Audit logging" },
          { id: "v1c18", title: "AWS GuardDuty", desc: "Threat detection" },
          { id: "v1c19", title: "AWS Security Hub", desc: "Centralized security view" },
          { id: "v1c20", title: "AWS Config Rules", desc: "Resource compliance" },
          { id: "v1c21", title: "AWS WAF & Shield", desc: "Web app and DDoS protection" },
          { id: "v1c22", title: "AWS Artifact", desc: "Compliance reports" },
          { id: "v1c23", title: "AWS Security Best Practices", desc: "Comprehensive guidelines" }
        ]
      },
      {
        id: "azure-security",
        title: "Azure Security",
        icon: "./logos/cloudsecVeda/azurecloud.png",
        chapters: [
          { id: "v1c24", title: "Azure Active Directory", desc: "Identity and access in Azure" },
          { id: "v1c25", title: "Azure RBAC", desc: "Role-based access control" },
          { id: "v1c26", title: "Azure Key Vault", desc: "Secrets and keys management" },
          { id: "v1c27", title: "Azure Network Security", desc: "NSGs, Firewall, DDoS" },
          { id: "v1c28", title: "Azure Storage Security", desc: "Blob storage and SAS tokens" },
          { id: "v1c29", title: "Azure VM Security", desc: "VM hardening and monitoring" },
          { id: "v1c30", title: "Azure Functions Security", desc: "Serverless security" },
          { id: "v1c31", title: "Azure Monitor & Log Analytics", desc: "Monitoring and logging" },
          { id: "v1c32", title: "Azure Sentinel", desc: "SIEM and SOAR" },
          { id: "v1c33", title: "Azure Defender for Cloud", desc: "Cloud security posture" },
          { id: "v1c34", title: "Azure Policy", desc: "Policy as code" },
          { id: "v1c35", title: "Azure Blueprints", desc: "Governance blueprints" },
          { id: "v1c36", title: "Azure Security Center", desc: "Security center features" },
          { id: "v1c37", title: "Azure Compliance Manager", desc: "Compliance management" },
          { id: "v1c38", title: "Azure Security Best Practices", desc: "Azure security guidelines" }
        ]
      },
      {
        id: "gcp-security",
        title: "GCP Security",
        icon: "./logos/cloudsecVeda/gcpcloud.png",
        chapters: [
          { id: "v1c39", title: "GCP IAM Deep Dive", desc: "Identity and Access Management" },
          { id: "v1c40", title: "GCP Resource Hierarchy", desc: "Organization, folders, projects" },
          { id: "v1c41", title: "GCP VPC Security", desc: "VPC networks and firewall rules" },
          { id: "v1c42", title: "GCP Cloud Storage Security", desc: "Bucket security and ACLs" },
          { id: "v1c43", title: "GCP Compute Engine Security", desc: "Instance security" },
          { id: "v1c44", title: "GCP Cloud Functions Security", desc: "Serverless functions" },
          { id: "v1c45", title: "GCP Cloud Audit Logs", desc: "Audit logging" },
          { id: "v1c46", title: "GCP Security Command Center", desc: "Security headquarters" },
          { id: "v1c47", title: "GCP VPC Service Controls", desc: "Data exfiltration protection" },
          { id: "v1c48", title: "GCP Binary Authorization", desc: "Container trust" },
          { id: "v1c49", title: "GCP Cloud KMS", desc: "Key management" },
          { id: "v1c50", title: "GCP Secret Manager", desc: "Secrets management" },
          { id: "v1c51", title: "GCP Security Scanner", desc: "Web vulnerability scanning" },
          { id: "v1c52", title: "GCP Artifact Registry Security", desc: "Container registry" },
          { id: "v1c53", title: "GCP Security Best Practices", desc: "Comprehensive guidelines" }
        ]
      }
    ]
  },
  veda2: {
    id: "veda2",
    title: "Veda 02: Compliance",
    icon: "./logos/vedas/complianceVeda.webp",
    sanskritName: "धर्म नियम",
    sanskritPronunciation: "Dharma Niyama",
    gradient: "linear-gradient(135deg, #34D399, #10B981)",
    description: "Deep dive into major compliance frameworks: CIS, ISO 27001, SOC 2, GDPR, and more. Law of digital dharma.",
    sections: [
      {
        id: "compliance-fundamentals",
        title: "Compliance Fundamentals",
        icon: "./logos/complianceVeda/compliancefundamental.jpg",
        chapters: [
          { id: "v2c1", title: "Introduction to Security Compliance", desc: "Compliance basics and importance" },
          { id: "v2c2", title: "Compliance Frameworks Overview", desc: "Overview of major frameworks" },
          { id: "v2c3", title: "Compliance vs. Security", desc: "Understanding the difference" },
          { id: "v2c4", title: "Compliance Assessment Process", desc: "How assessments work" },
          { id: "v2c5", title: "Compliance Continuous Monitoring", desc: "Ongoing compliance" }
        ]
      },
      {
        id: "cis-controls",
        title: "CIS Controls",
        icon: "./logos/complianceVeda/cis.jpg",
        chapters: [
          { id: "v2c6", title: "CIS Controls Overview", desc: "CIS Critical Security Controls" },
          { id: "v2c7", title: "Inventory of Enterprise Assets", desc: "Asset management controls" },
          { id: "v2c8", title: "Inventory of Software", desc: "Software inventory" },
          { id: "v2c9", title: "Data Protection", desc: "Data at rest and in transit" },
          { id: "v2c10", title: "Secure Configuration Management", desc: "Secure settings" },
          { id: "v2c11", title: "Account Management", desc: "User account controls" },
          { id: "v2c12", title: "Access Control Management", desc: "Access management" },
          { id: "v2c13", title: "Audit Log Management", desc: "Logging and monitoring" }
        ]
      },
      {
        id: "iso-27001",
        title: "ISO 27001",
        icon: "./logos/complianceVeda/iso_27001.png",
        chapters: [
          { id: "v2c14", title: "ISO 27001 Overview", desc: "ISMS introduction" },
          { id: "v2c15", title: "ISMS Implementation", desc: "Building an ISMS" },
          { id: "v2c16", title: "Risk Assessment", desc: "Security risk analysis" },
          { id: "v2c17", title: "Statement of Applicability", desc: "Scope and controls" },
          { id: "v2c18", title: "Annex A Controls", desc: "Detailed controls" },
          { id: "v2c19", title: "Internal Audit", desc: "Audit processes" },
          { id: "v2c20", title: "Management Review", desc: "Leadership review" },
          { id: "v2c21", title: "Certification Process", desc: "Getting certified" }
        ]
      },
      {
        id: "soc-2",
        title: "SOC 2",
        icon: "./logos/complianceVeda/soc2.png",
        chapters: [
          { id: "v2c22", title: "SOC 2 Overview", desc: "SOC 2 introduction" },
          { id: "v2c23", title: "Trust Service Criteria", desc: "TSC explained" },
          { id: "v2c24", title: "Type I vs Type II", desc: "Audit types" },
          { id: "v2c25", title: "Audit Preparation", desc: "Getting ready for audit" },
          { id: "v2c26", title: "Continuous Monitoring", desc: "Ongoing compliance" },
          { id: "v2c27", title: "Reporting", desc: "Report types" }
        ]
      },
      {
        id: "gdpr",
        title: "GDPR",
        icon: "🇪🇺",
        chapters: [
          { id: "v2c28", title: "GDPR Overview", desc: "General Data Protection Regulation" },
          { id: "v2c29", title: "Data Subject Rights", desc: "Individual rights" },
          { id: "v2c30", title: "Lawful Basis for Processing", desc: "Legal grounds" },
          { id: "v2c31", title: "Data Protection Impact Assessment", desc: "DPIA process" },
          { id: "v2c32", title: "Data Breach Notification", desc: "Breach reporting" },
          { id: "v2c33", title: "Data Protection Officer", desc: "DPO role" },
          { id: "v2c34", title: "Cross-Border Transfers", desc: "International transfers" },
          { id: "v2c35", title: "Fines and Enforcement", desc: "Penalties" }
        ]
      },
      {
        id: "ccpa",
        title: "CCPA/CPRA",
        icon: "./logos/complianceVeda/ccpa.webp",
        chapters: [
          { id: "v2c36", title: "CCPA Overview", desc: "California Consumer Privacy Act" },
          { id: "v2c37", title: "Consumer Rights", desc: "CCPA rights" },
          { id: "v2c38", title: "Business Obligations", desc: "Requirements" },
          { id: "v2c39", title: "Enforcement", desc: "CCPA enforcement" },
          { id: "v2c40", title: "CPRA Updates", desc: "California Privacy Rights Act" }
        ]
      },
      {
        id: "hitrust",
        title: "HITRUST",
        icon: "./logos/complianceVeda/hitrust.webp",
        chapters: [
          { id: "v2c41", title: "HITRUST Overview", desc: "Healthcare security" },
          { id: "v2c42", title: "r2R Validated Assessment", desc: "Assessment process" },
          { id: "v2c43", title: "CSF Certification", desc: "Certification" },
          { id: "v2c44", title: "Third-Party Assurance", desc: "Vendor security" },
          { id: "v2c45", title: "Continuous Monitoring", desc: "Ongoing assurance" }
        ]
      },
      {
        id: "cmmc",
        title: "CMMC",
        icon: "./logos/complianceVeda/cmmc.jpg",
        chapters: [
          { id: "v2c46", title: "CMMC Overview", desc: "Cybersecurity Maturity Model" },
          { id: "v2c47", title: "Level 1-5 Requirements", desc: "Maturity levels" },
          { id: "v2c48", title: "C3PAO Assessment", desc: "Third-party assessment" },
          { id: "v2c49", title: "POA&M Process", desc: "Plan of action" },
          { id: "v2c50", title: "Certification Lifecycle", desc: "Certification" }
        ]
      },
      {
        id: "pci-dss",
        title: "PCI DSS",
        icon: "./logos/complianceVeda/PCI-DSS.png",
        chapters: [
          { id: "v2c51", title: "PCI DSS Overview", desc: "Payment card security" },
          { id: "v2c52", title: "12 Requirements", desc: "Detailed requirements" },
          { id: "v2c53", title: "SAQ Types", desc: "Self-assessment questionnaires" },
          { id: "v2c54", title: "PA-DSS", desc: "Payment application" },
          { id: "v2c55", title: "Tokenization", desc: "Tokenization" },
          { id: "v2c56", title: "Merchant Levels", desc: "Merchant levels" }
        ]
      },
      {
        id: "hipaa",
        title: "HIPAA",
        icon: "./logos/complianceVeda/HIPAA.png",
        chapters: [
          { id: "v2c57", title: "HIPAA Overview", desc: "Health insurance portability" },
          { id: "v2c58", title: "PHI Protection", desc: "Protected health information" },
          { id: "v2c59", title: "Security Rule", desc: "Security requirements" },
          { id: "v2c60", title: "Breach Notification", desc: "Breach rules" },
          { id: "v2c61", title: "Business Associates", desc: "Third-party requirements" }
        ]
      },
      {
        id: "nist",
        title: "NIST",
        icon: "./logos/complianceVeda/nist.png",
        chapters: [
          { id: "v2c62", title: "NIST CSF Overview", desc: "Cybersecurity Framework" },
          { id: "v2c63", title: "Framework Core", desc: "Core functions" },
          { id: "v2c64", title: "Implementation Tiers", desc: "Maturity tiers" },
          { id: "v2c65", title: "Profiles", desc: "Target profiles" },
          { id: "v2c66", title: "NIST 800-53", desc: "Security controls" }
        ]
      }
    ]
  },
  veda3: {
    id: "veda3",
    title: "Veda 03: AppSec",
    icon: "./logos/vedas/appsecVeda.webp",
    sanskritName: "आयुध रक्षा",
    sanskritPronunciation: "Āyudha Rakṣā",
    gradient: "linear-gradient(135deg, #FB7185, #F43F5E)",
    description: "OWASP Top 10, secure development lifecycle, penetration testing, and vulnerability assessment. Armored protection for applications.",
    sections: [
      {
        id: "secure-development",
        title: "Secure Development",
        icon: "./logos/appsec/secure_development.png",
        chapters: [
          { id: "v3c1", title: "SDLC Security", desc: "Security in development lifecycle" },
          { id: "v3c2", title: "Threat Modeling", desc: "STRIDE and attack trees" },
          { id: "v3c3", title: "Secure Coding Practices", desc: "Writing secure code" },
          { id: "v3c4", title: "Security Testing", desc: "Testing strategies" },
          { id: "v3c5", title: "Code Review", desc: "Security code review" },
          { id: "v3c6", title: "Security Champions", desc: "Building security culture" },
          { id: "v3c7", title: "DevSecOps Integration", desc: "Shifting security left" },
          { id: "v3c8", title: "Secure Design Patterns", desc: "Security patterns" }
        ]
      },
      {
        id: "owasp-top-10",
        title: "OWASP Top 10",
        icon: "./logos/appsec/owasp_logo.png",
        chapters: [
          { id: "v3c9", title: "A01:2021 Broken Access Control", desc: "Access control vulnerabilities" },
          { id: "v3c10", title: "A02:2021 Cryptographic Failures", desc: "Crypto and data exposure" },
          { id: "v3c11", title: "A03:2021 Injection", desc: "SQL, NoSQL, Command injection" },
          { id: "v3c12", title: "A04:2021 Insecure Design", desc: "Design flaws" },
          { id: "v3c13", title: "A05:2021 Security Misconfiguration", desc: "Misconfiguration issues" },
          { id: "v3c14", title: "A06:2021 Vulnerable Components", desc: "Component vulnerabilities" },
          { id: "v3c15", title: "A07:2021 Auth Failures", desc: "Authentication issues" },
          { id: "v3c16", title: "A08:2021 Data Integrity Failures", desc: "Software/data integrity" },
          { id: "v3c17", title: "A09:2021 Logging Failures", desc: "Logging and monitoring" },
          { id: "v3c18", title: "A10:2021 SSRF", desc: "Server-side request forgery" }
        ]
      },
      {
        id: "additional-vulnerabilities",
        title: "Additional Vulnerabilities",
        icon: "./logos/appsec/additional_vulnerabilities.jpg",
        chapters: [
          { id: "v3c19", title: "IDOR", desc: "Insecure Direct Object Reference" },
          { id: "v3c20", title: "XXE", desc: "XML External Entity" },
          { id: "v3c21", title: "Deserialization", desc: "Serialization attacks" },
          { id: "v3c22", title: "Race Conditions", desc: "TOCTOU vulnerabilities" },
          { id: "v3c23", title: "Business Logic Flaws", desc: "Logic vulnerabilities" },
          { id: "v3c24", title: "Information Disclosure", desc: "Data leakage" },
          { id: "v3c25", title: "JWT Attacks", desc: "JSON Web Token attacks" },
          { id: "v3c26", title: "OAuth Vulnerabilities", desc: "OAuth security" },
          { id: "v3c27", title: "GraphQL Security", desc: "GraphQL vulnerabilities" },
          { id: "v3c28", title: "WebSocket Security", desc: "WebSocket attacks" }
        ]
      },
      {
        id: "testing-tools",
        title: "Testing & Tools",
        icon: "./logos/appsec/Testing-Tools.jpg",
        chapters: [
          { id: "v3c29", title: "Burp Suite", desc: "Web security testing" },
          { id: "v3c30", title: "OWASP ZAP", desc: "OWASP scanning tool" },
          { id: "v3c31", title: "Static Analysis (SAST)", desc: "Source code analysis" },
          { id: "v3c32", title: "Dynamic Analysis (DAST)", desc: "Runtime testing" },
          { id: "v3c33", title: "Interactive Testing (IAST)", desc: "Hybrid testing" },
          { id: "v3c34", title: "Penetration Testing", desc: "Pen testing methodology" },
          { id: "v3c35", title: "Fuzzing", desc: "Fuzz testing" },
          { id: "v3c36", title: "Code Review Tools", desc: "Review automation" },
          { id: "v3c37", title: "Vulnerability Scanner", desc: "Automated scanning" },
          { id: "v3c38", title: "Security Regression Testing", desc: "Regression testing" },
          { id: "v3c39", title: "Bug Bounty", desc: "Bug bounty programs" },
          { id: "v3c40", title: "Responsible Disclosure", desc: "Disclosure programs" }
        ]
      }
    ]
  },
  veda4: {
    id: "veda4",
    title: "Veda 04: DevSecOps",
    icon: "./logos/vedas/devsecopsVeda.png",
    sanskritName: "यंत्र सुरक्षा",
    sanskritPronunciation: "Yantra Surakṣā",
    gradient: "linear-gradient(135deg, #FBBF24, #F59E0B)",
    description: "Integrating security into CI/CD pipelines, security automation, and cloud-native security. The sacred machinery of protection.",
    sections: [
      {
        id: "devsecops-fundamentals",
        title: "DevSecOps Fundamentals",
        icon: "./logos/devsecopsVeda/devsecops.png",
        chapters: [
          { id: "v4c1", title: "DevSecOps Introduction", desc: "DevSecOps overview" },
          { id: "v4c2", title: "Shift-Left Security", desc: "Moving security left" },
          { id: "v4c3", title: "Security as Code", desc: "Infrastructure as code" },
          { id: "v4c4", title: "Infrastructure as Code Security", desc: "IaC security" },
          { id: "v4c5", title: "Pipeline Security", desc: "CI/CD pipeline security" },
          { id: "v4c6", title: "Automated Security Testing", desc: "Automation in pipelines" },
          { id: "v4c7", title: "Secure CI/CD", desc: "Hardening pipelines" },
          { id: "v4c8", title: "DevSecOps Culture", desc: "Building security culture" }
        ]
      },
      {
        id: "tooling",
        title: "Tooling",
        icon: "./logos/devsecopsVeda/tooling.png",
        chapters: [
          { id: "v4c9", title: "SAST Tools", desc: "Static analysis tools" },
          { id: "v4c10", title: "DAST Tools", desc: "Dynamic analysis tools" },
          { id: "v4c11", title: "SCA Tools", desc: "Dependency scanning" },
          { id: "v4c12", title: "Container Scanning", desc: "Container security" },
          { id: "v4c13", title: "IaC Scanning", desc: "Infrastructure scanning" },
          { id: "v4c14", title: "Secrets Detection", desc: "Secret scanning" },
          { id: "v4c15", title: "Runtime Protection", desc: "Runtime security" },
          { id: "v4c16", title: "SIEM Integration", desc: "Log management" },
          { id: "v4c17", title: "SOAR Integration", desc: "Automation integration" },
          { id: "v4c18", title: "Monitoring & Alerting", desc: "Observability" }
        ]
      },
      {
        id: "implementation",
        title: "Implementation",
        icon: "./logos/devsecopsVeda/implementation.png",
        chapters: [
          { id: "v4c19", title: "Building Secure Pipelines", desc: "Pipeline architecture" },
          { id: "v4c20", title: "Integrating Security in GitOps", desc: "GitOps security" },
          { id: "v4c21", title: "Policy as Code", desc: "OPA and policies" },
          { id: "v4c22", title: "Cloud Native Security", desc: "Cloud-native approach" },
          { id: "v4c23", title: "Zero Trust Pipeline", desc: "Zero trust in CI/CD" },
          { id: "v4c24", title: "Supply Chain Security", desc: "SBOM and supply chain" },
          { id: "v4c25", title: "SBOM Management", desc: "Software bill of materials" },
          { id: "v4c26", title: "Vulnerability Management", desc: "Vuln management" },
          { id: "v4c27", title: "Incident Response", desc: "Response procedures" },
          { id: "v4c28", title: "Continuous Compliance", desc: "Always compliant" },
          { id: "v4c29", title: "Security Metrics", desc: "Measuring security" },
          { id: "v4c30", title: "Maturity Assessment", desc: "DevSecOps maturity" }
        ]
      }
    ]
  },
  veda5: {
    id: "veda5",
    title: "Veda 05: Kubernetes & Containers",
    icon: "./logos/vedas/KubernetessecVeda.jpg",
    sanskritName: "घट रक्षा",
    sanskritPronunciation: "Ghaṭa Rakṣā",
    gradient: "linear-gradient(135deg, #A78BFA, #8B5CF6)",
    description: "Container security fundamentals, Kubernetes hardening, and cloud-native security patterns. The eternal wheel of container protection.",
    sections: [
      {
        id: "container-fundamentals",
        title: "Container Fundamentals",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        chapters: [
          { id: "v5c1", title: "Container Security Overview", desc: "Container security basics" },
          { id: "v5c2", title: "Docker Security Best Practices", desc: "Docker hardening" },
          { id: "v5c3", title: "Container Runtime Security", desc: "Runtime protection" },
          { id: "v5c4", title: "Container Images", desc: "Image security" },
          { id: "v5c5", title: "Registry Security", desc: "Container registry" },
          { id: "v5c6", title: "Microsegmentation", desc: "Container segmentation" }
        ]
      },
      {
        id: "kubernetes-architecture",
        title: "Kubernetes Architecture",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
        chapters: [
          { id: "v5c7", title: "K8s Security Architecture", desc: "Kubernetes security design" },
          { id: "v5c8", title: "API Server Security", desc: "API server hardening" },
          { id: "v5c9", title: "Etcd Security", desc: "Etcd encryption" },
          { id: "v5c10", title: "Kubelet Security", desc: "Kubelet hardening" },
          { id: "v5c11", title: "Network Policies", desc: "K8s networking" },
          { id: "v5c12", title: "RBAC in K8s", desc: "Role-based access" }
        ]
      },
      {
        id: "kubernetes-security",
        title: "Kubernetes Security",
        icon: "🔐",
        chapters: [
          { id: "v5c13", title: "Pod Security Standards", desc: "PSS and PSA" },
          { id: "v5c14", title: "Network Policies Deep Dive", desc: "Advanced policies" },
          { id: "v5c15", title: "Secrets Management", desc: "K8s secrets" },
          { id: "v5c16", title: "ConfigMaps Security", desc: "ConfigMap handling" },
          { id: "v5c17", title: "Ingress Security", desc: "Ingress controller" },
          { id: "v5c18", title: "Service Mesh", desc: "Service mesh security" },
          { id: "v5c19", title: "Policy Enforcement (OPA)", desc: "Open Policy Agent" },
          { id: "v5c20", title: "Image Security Scanning", desc: "Trivy and scanning" },
          { id: "v5c21", title: "Runtime Security", desc: "Falco and detection" },
          { id: "v5c22", title: "Cluster Auditing", desc: "Audit logs" },
          { id: "v5c23", title: "Multi-Cluster Security", desc: "Multi-cluster" },
          { id: "v5c24", title: "Cloud Native Security Tools", desc: "CNSP tools" }
        ]
      },
      {
        id: "kubernetes-operations",
        title: "Kubernetes Operations",
        icon: "⚡",
        chapters: [
          { id: "v5c25", title: "Secure Cluster Setup", desc: "Hardened clusters" },
          { id: "v5c26", title: "Workload Security", desc: "Pod security" },
          { id: "v5c27", title: "Supply Chain Security", desc: "Sigstore and attestations" },
          { id: "v5c28", title: "Runtime Protection", desc: "Runtime defense" },
          { id: "v5c29", title: "Monitoring & Logging", desc: "Observability" },
          { id: "v5c30", title: "Incident Response", desc: "K8s IR" },
          { id: "v5c31", title: "Disaster Recovery", desc: "Backup and restore" },
          { id: "v5c32", title: "Compliance Mapping", desc: "K8s compliance" },
          { id: "v5c33", title: "Benchmark (CIS K8s)", desc: "CIS benchmarks" },
          { id: "v5c34", title: "Troubleshooting", desc: "Common issues" },
          { id: "v5c35", title: "Hardening Guide", desc: "Hardening checklist" }
        ]
      }
    ]
  },
  veda6: {
    id: "veda6",
    title: "Veda 06: Network Security",
    icon: "./logos/vedas/networksecVeda.jpg",
    gradient: "linear-gradient(135deg, #60A5FA, #3B82F6)",
    description: "Network fundamentals, perimeter security, monitoring, and advanced network protection strategies.",
    sections: [
      {
        id: "network-fundamentals",
        title: "Network Fundamentals",
        icon: "📡",
        chapters: [
          { id: "v6c1", title: "Network Security Overview", desc: "Network security basics" },
          { id: "v6c2", title: "OSI Model Security", desc: "Layer-by-layer security" },
          { id: "v6c3", title: "TCP/IP Security", desc: "Protocol security" },
          { id: "v6c4", title: "DNS Security", desc: "DNSSEC and DNS filtering" },
          { id: "v6c5", title: "ARP Security", desc: "ARP spoofing prevention" },
          { id: "v6c6", title: "DHCP Security", desc: "DHCP attacks" },
          { id: "v6c7", title: "VLAN Security", desc: "VLAN segmentation" },
          { id: "v6c8", title: "VPN Technologies", desc: "VPN security" }
        ]
      },
      {
        id: "perimeter-security",
        title: "Perimeter Security",
        icon: "./logos/networkSecVeda/perimeterSec.webp",
        chapters: [
          { id: "v6c9", title: "Firewall Architecture", desc: "Firewall design" },
          { id: "v6c10", title: "IDS/IPS", desc: "Intrusion detection" },
          { id: "v6c11", title: "DDoS Protection", desc: "DDoS mitigation" },
          { id: "v6c12", title: "WAF", desc: "Web application firewall" },
          { id: "v6c13", title: "Web Gateway", desc: "Secure web gateway" },
          { id: "v6c14", title: "Email Security", desc: "Email protection" },
          { id: "v6c15", title: "DNS Filtering", desc: "DNS-based filtering" },
          { id: "v6c16", title: "CDN Security", desc: "CDN security features" }
        ]
      },
      {
        id: "network-monitoring",
        title: "Network Monitoring",
        icon: "./logos/networkSecVeda/network-monitoring.png",
        chapters: [
          { id: "v6c17", title: "SIEM", desc: "Security information" },
          { id: "v6c18", title: "Network Segmentation", desc: "Segment design" },
          { id: "v6c19", title: "Zero Trust Network", desc: "Zero trust model" },
          { id: "v6c20", title: "Microsegmentation", desc: "Fine-grained segmentation" },
          { id: "v6c21", title: "Network Forensics", desc: "Forensic analysis" },
          { id: "v6c22", title: "Packet Analysis", desc: "Packet capture" },
          { id: "v6c23", title: "Flow Analysis", desc: "NetFlow analysis" },
          { id: "v6c24", title: "Threat Hunting", desc: "Proactive hunting" },
          { id: "v6c25", title: "Incident Detection", desc: "Detection methods" },
          { id: "v6c26", title: "SOC Operations", desc: "Security operations" }
        ]
      },
      {
        id: "advanced-topics",
        title: "Advanced Topics",
        icon: "./logos/networkSecVeda/networksecAdvanceTopic.jpg",
        chapters: [
          { id: "v6c27", title: "Cloud Network Security", desc: "VPC and cloud networking" },
          { id: "v6c28", title: "Hybrid Cloud Security", desc: "Hybrid connectivity" },
          { id: "v6c29", title: "5G Security", desc: "5G network security" },
          { id: "v6c30", title: "IoT Security", desc: "Internet of Things" },
          { id: "v6c31", title: "SD-WAN Security", desc: "SD-WAN protection" },
          { id: "v6c32", title: "SASE", desc: "Secure access service edge" },
          { id: "v6c33", title: "Threat Intelligence", desc: "CTI and feeds" },
          { id: "v6c34", title: "Red Team Operations", desc: "Red team testing" },
          { id: "v6c35", title: "Network Automation", desc: "Automation with Python" }
        ]
      }
    ]
  }
};

export const getAllChapters = () => {
  const chapters = [];
  Object.values(vedasData).forEach(veda => {
    veda.sections.forEach(section => {
      section.chapters.forEach(chapter => {
        chapters.push({
          ...chapter,
          vedaId: veda.id,
          vedaTitle: veda.title,
          sectionId: section.id,
          sectionTitle: section.title
        });
      });
    });
  });
  return chapters;
};
