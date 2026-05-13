export const appSecContent = {

  // ==========================================
  // SECTION 1: SECURE DEVELOPMENT
  // ==========================================

  v3c1: `
    <h3>SDLC Security</h3>
    <p>
      <strong>Security in the Software Development Life Cycle (SDLC)</strong> is the practice of integrating security considerations at every phase of software development — from planning and design through coding, testing, deployment, and maintenance. Rather than treating security as an afterthought, embedding it into the SDLC ensures that vulnerabilities are <strong>prevented rather than patched</strong>.
    </p>

    <h4>Why SDLC Security Matters</h4>
    <div class="warning-box">
      <div class="warning-title">⚠️ The Cost of Late Security</div>
      <p>According to NIST, fixing a vulnerability in the <strong>design phase</strong> costs <strong>6x less</strong> than fixing it during development, and <strong>30x less</strong> than fixing it after deployment. The longer a vulnerability exists in the software lifecycle, the more expensive and disruptive it becomes to remediate.</p>
    </div>
    <ul>
      <li><strong>Reduced vulnerabilities:</strong> Proactive security eliminates entire classes of bugs before they ship</li>
      <li><strong>Lower remediation costs:</strong> Early detection is exponentially cheaper than post-deployment fixes</li>
      <li><strong>Faster time-to-market:</strong> Security built-in avoids costly rework cycles</li>
      <li><strong>Regulatory compliance:</strong> Many frameworks (SOC 2, ISO 27001, HITRUST) require security in SDLC</li>
      <li><strong>Customer trust:</strong> Demonstrating secure development practices wins enterprise contracts</li>
    </ul>

    <h4>Secure SDLC Phases</h4>
    <table>
      <thead>
        <tr><th>Phase</th><th>Security Activities</th><th>Key Outputs</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Planning</strong></td>
          <td>Security requirements gathering, threat modeling, risk assessment</td>
          <td>Security requirements document, threat model</td>
        </tr>
        <tr>
          <td><strong>Design</strong></td>
          <td>Security architecture review, secure design patterns, authentication/authorization design</td>
          <td>Architecture diagrams, security design review notes</td>
        </tr>
        <tr>
          <td><strong>Development</strong></td>
          <td>Secure coding standards, SAST scanning, peer code review, dependency scanning</td>
          <td>Secure code, SAST findings, updated dependencies</td>
        </tr>
        <tr>
          <td><strong>Testing</strong></td>
          <td>DAST, penetration testing, SCA, security regression testing</td>
          <td>Test reports, vulnerability assessments</td>
        </tr>
        <tr>
          <td><strong>Deployment</strong></td>
          <td>Environment hardening, secrets management, configuration validation</td>
          <td>Hardened deployment, IaC templates</td>
        </tr>
        <tr>
          <td><strong>Maintenance</strong></td>
          <td>Patch management, monitoring, incident response, continuous security testing</td>
          <td>Patch schedule, monitoring dashboards, IR plans</td>
        </tr>
      </tbody>
    </table>

    <h4>Popular Secure SDLC Frameworks</h4>
    <ul>
      <li><strong>Microsoft SDL (Security Development Lifecycle):</strong> 7 phases with mandatory security activities</li>
      <li><strong>OWASP SAMM (Software Assurance Maturity Model):</strong> Maturity-based approach to software security</li>
      <li><strong>NIST SSDF (Secure Software Development Framework):</strong> SP 800-218 practices organized into four practice groups</li>
      <li><strong>BSIMM (Building Security In Maturity Model):</strong> Observation-based maturity model from real-world practices</li>
    </ul>

    <h4>Implementing Security in Your SDLC</h4>
    <ol>
      <li><strong>Define security requirements:</strong> Identify regulatory, contractual, and risk-based security needs upfront</li>
      <li><strong>Establish secure coding standards:</strong> Create language-specific guidelines (e.g., OWASP ASVS)</li>
      <li><strong>Integrate automated tools:</strong> SAST, DAST, SCA, and secrets detection into CI/CD pipelines</li>
      <li><strong>Train developers:</strong> Regular secure coding training with hands-on exercises</li>
      <li><strong>Conduct security reviews:</strong> Mandatory security gates at design and code review stages</li>
      <li><strong>Measure and improve:</strong> Track security metrics (vulnerability density, MTTR, escape rate)</li>
    </ol>
  `,

  v3c2: `
    <h3>Threat Modeling</h3>
    <p>
      <strong>Threat modeling</strong> is a structured approach to identifying, quantifying, and addressing the security risks associated with an application, system, or business process. It is a <strong>proactive security technique</strong> performed during the design phase to anticipate potential attacks before code is written.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Think Like an Attacker</div>
      <p>Threat modeling asks: <strong>"What can go wrong?"</strong> By systematically analyzing a system from an attacker's perspective, teams can identify and mitigate threats before they become vulnerabilities. The goal is not to predict every attack, but to build <strong>defense-in-depth</strong> that handles entire classes of threats.</p>
    </div>

    <h4>Common Threat Modeling Methodologies</h4>
    <table>
      <thead>
        <tr><th>Methodology</th><th>Approach</th><th>Best For</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>STRIDE</strong></td>
          <td>Categorizes threats into Spoofing, Tampering, Repudiation, Information Disclosure, DoS, Elevation of Privilege</td>
          <td>Application-level threat analysis</td>
        </tr>
        <tr>
          <td><strong>PASTA</strong></td>
          <td>7-stage risk-centric methodology: Process, Attack Trees, Strategy, Threat, Attack, Vulnerability, Impact</td>
          <td>Complex enterprise applications</td>
        </tr>
        <tr>
          <td><strong>VAST</strong></td>
          <td>Visual, Agile, and Simple Threat modeling using DFDs</td>
          <td>Agile/DevOps teams</td>
        </tr>
        <tr>
          <td><strong>Attack Trees</strong></td>
          <td>Hierarchical diagram of potential attack paths to a specific goal</td>
          <td>Specific attack scenarios</td>
        </tr>
        <tr>
          <td><strong>CVSS</strong></td>
          <td>Common Vulnerability Scoring System for quantifying severity</td>
          <td>Prioritizing found vulnerabilities</td>
        </tr>
      </tbody>
    </table>

    <h4>The STRIDE Threat Classification</h4>
    <p>STRIDE is the most widely used threat categorization framework:</p>
    <ul>
      <li><strong>Spoofing:</strong> Attacker impersonates a legitimate user or system (e.g., stolen credentials, IP spoofing)</li>
      <li><strong>Tampering:</strong> Unauthorized modification of data in transit or at rest (e.g., man-in-the-middle attacks)</li>
      <li><strong>Repudiation:</strong> Attacker denies performing an action; lack of audit trails enables this</li>
      <li><strong>Information Disclosure:</strong> Exposure of sensitive data to unauthorized parties (e.g., data leaks, insecure storage)</li>
      <li><strong>Denial of Service:</strong> Attacks that make a service unavailable (e.g., resource exhaustion, DDoS)</li>
      <li><strong>Elevation of Privilege:</strong> Attacker gains higher access rights than intended (e.g., privilege escalation bugs)</li>
    </ul>

    <h4>Data Flow Diagrams (DFDs)</h4>
    <p>DFDs are the primary visual tool for threat modeling:</p>
    <ul>
      <li><strong>Level 0 (Context Diagram):</strong> Shows the entire system as a single process with external entities</li>
      <li><strong>Level 1:</strong> Decomposes the system into major processes, data stores, and data flows</li>
      <li><strong>Level 2+:</strong> Further detail on specific processes</li>
    </ul>
    <p>Key DFD elements include <strong>trust boundaries</strong> (where security posture changes), <strong>data flows</strong> (how data moves), <strong>processes</strong> (where data is transformed), and <strong>data stores</strong> (where data rests).</p>

    <h4>Threat Modeling Process</h4>
    <ol>
      <li><strong>Assemble the team:</strong> Developers, architects, security engineers, product owners</li>
      <li><strong>Document the system:</strong> Create DFDs and architecture diagrams</li>
      <li><strong>Identify threats:</strong> Use STRIDE or another methodology to enumerate threats per component</li>
      <li><strong>Rate threats:</strong> Use DREAD (Damage, Reproducibility, Exploitability, Affected Users, Discoverability) or CVSS</li>
      <li><strong>Identify mitigations:</strong> Define countermeasures for each high-priority threat</li>
      <li><strong>Validate mitigations:</strong> Ensure controls are implemented in the final design</li>
      <li><strong>Document and track:</strong> Maintain living threat models that evolve with the system</li>
    </ol>

    <h4>Threat Modeling Tools</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Microsoft Threat Modeling Tool</strong></td><td>Free, generates DFDs and STRIDE threats automatically</td></tr>
        <tr><td><strong>OWASP Threat Dragon</strong></td><td>Open-source, web-based threat modeling</td></tr>
        <tr><td><strong>IriusRisk</strong></td><td>Commercial, automated threat modeling with CI/CD integration</td></tr>
        <tr><td><strong>SeaSponge</strong></td><td>Open-source, web-based security analysis tool</td></tr>
        <tr><td><strong>Pytm</strong></td><td>Python-based threat modeling framework</td></tr>
      </tbody>
    </table>
  `,

  v3c3: `
    <h3>Secure Coding Practices</h3>
    <p>
      <strong>Secure coding</strong> refers to the practice of writing software in a way that guards against the accidental introduction of <strong>security vulnerabilities</strong>. It forms the foundation of application security — even the best architectures and threat models can fail if the code itself is insecure.
    </p>

    <h4>Fundamental Secure Coding Principles</h4>
    <ol>
      <li><strong>Input Validation:</strong> Never trust user input. Validate all input on the server side for type, length, format, and range.</li>
      <li><strong>Output Encoding:</strong> Encode all output based on context (HTML, JavaScript, SQL, URL, LDAP) to prevent injection.</li>
      <li><strong>Authentication & Authorization:</strong> Implement strong authentication and verify authorization on every request.</li>
      <li><strong>Defense in Depth:</strong> Layer multiple security controls so that if one fails, others compensate.</li>
      <li><strong>Least Privilege:</strong> Run code with the minimum permissions necessary.</li>
      <li><strong>Fail Securely:</strong> Ensure that errors and exceptions leave the system in a secure state.</li>
      <li><strong>Separation of Concerns:</strong> Keep security-sensitive logic separate from business logic.</li>
      <li><strong>Secure Defaults:</strong> Ship with the most secure settings enabled by default.</li>
    </ol>

    <h4>Language-Specific Guidelines</h4>
    <table>
      <thead>
        <tr><th>Language/Platform</th><th>Key Risks</th><th>Best Practices</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>JavaScript/TypeScript</strong></td><td>XSS, prototype pollution, eval injection</td><td>Use CSP, avoid eval/new Function, sanitize DOM manipulation</td></tr>
        <tr><td><strong>Python</strong></td><td>SQL injection, code injection via pickle/exec</td><td>Use parameterized queries, never pickle untrusted data</td></tr>
        <tr><td><strong>Java</strong></td><td>Deserialization attacks, LDAP injection</td><td>Avoid native deserialization, use safe XML parsers</td></tr>
        <tr><td><strong>C/C++</strong></td><td>Buffer overflows, use-after-free, integer overflow</td><td>Use safe functions, enable ASLR/DEP, static analysis</td></tr>
        <tr><td><strong>PHP</strong></td><td>SQL injection, file inclusion, XSS</td><td>Prepared statements, disable allow_url_include, use htmlspecialchars</td></tr>
        <tr><td><strong>Go</strong></td><td>Path traversal, unsafe deserialization</td><td>Use filepath.Clean(), validate all external input</td></tr>
      </tbody>
    </table>

    <h4>Critical Secure Coding Rules</h4>
    <table>
      <thead>
        <tr><th>Rule</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>1. Never concatenate user input</td><td>Into SQL queries, shell commands, file paths, or URLs without sanitization</td></tr>
        <tr><td>2. Use parameterized/prepared statements</td><td>For all database queries regardless of ORM usage</td></tr>
        <tr><td>3. Hash passwords properly</td><td>Use bcrypt, Argon2, or scrypt — never MD5, SHA1, or unsalted hashes</td></tr>
        <tr><td>4. Validate and sanitize all input</td><td>Use allowlists over blocklists for validation</td></tr>
        <tr><td>5. Set secure HTTP headers</td><td>CSP, HSTS, X-Content-Type-Options, X-Frame-Options</td></tr>
        <tr><td>6. Use TLS everywhere</td><td>Enforce HTTPS, use HSTS, pin certificates where appropriate</td></tr>
        <tr><td>7. Store secrets securely</td><td>Use vaults, never hard-code credentials, rotate regularly</td></tr>
        <tr><td>8. Log securely</td><td>Never log sensitive data (PII, credentials, tokens)</td></tr>
      </tbody>
    </table>

    <h4>Secure Coding Checklists by OWASP</h4>
    <ul>
      <li><strong>OWASP Secure Coding Guidelines:</strong> Comprehensive platform and language-agnostic guidelines</li>
      <li><strong>OWASP ASVS (Application Security Verification Standard):</strong> 4-level verification standard for application security</li>
      <li><strong>OWASP Proactive Controls:</strong> Top 10 controls to implement proactively in every application</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Pro Tip: Linters and Formatters</div>
      <p>Integrate security-focused linters into your IDE and CI/CD pipeline:<br>
      <strong>ESLint</strong> (JavaScript) with security plugins, <strong>Bandit</strong> (Python), <strong>Semgrep</strong> (multi-language), <strong>SpotBugs</strong> (Java) — these catch insecure patterns before code is even committed.</p>
    </div>
  `,

  v3c4: `
    <h3>Security Testing</h3>
    <p>
      <strong>Security testing</strong> is the process of evaluating software to find vulnerabilities, weaknesses, and risks that could be exploited by attackers. Unlike functional testing that verifies features work correctly, security testing deliberately probes for <strong>what can go wrong</strong>.
    </p>

    <h4>Types of Security Testing</h4>
    <table>
      <thead>
        <tr><th>Type</th><th>What It Tests</th><th>When to Run</th><th>Automation</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Static Application Security Testing (SAST)</strong></td><td>Source code, bytecode, binaries for vulnerabilities</td><td>During development / CI</td><td>Highly automated</td></tr>
        <tr><td><strong>Dynamic Application Security Testing (DAST)</strong></td><td>Running application for runtime vulnerabilities</td><td>Staging/Pre-production</td><td>Automated</td></tr>
        <tr><td><strong>Interactive (IAST)</strong></td><td>Combines SAST and DAST via instrumentation</td><td>Testing environments</td><td>Semi-automated</td></tr>
        <tr><td><strong>Software Composition Analysis (SCA)</strong></td><td>Open-source dependencies for known vulnerabilities</td><td>Continuous / CI</td><td>Automated</td></tr>
        <tr><td><strong>Penetration Testing</strong></td><td>Simulated real-world attacks</td><td>Pre-release / Annual</td><td>Semi-manual</td></tr>
        <tr><td><strong>Fuzz Testing</strong></td><td>Invalid/random inputs to find crashes and bugs</td><td>Development / CI</td><td>Automated</td></tr>
      </tbody>
    </table>

    <h4>Building a Security Testing Strategy</h4>
    <p>A comprehensive security testing program covers multiple layers:</p>
    <ol>
      <li><strong>Code-Level Testing:</strong> SAST tools scan source code for patterns indicating vulnerabilities (SQL injection, XSS, insecure crypto)</li>
      <li><strong>Dependency Testing:</strong> SCA tools identify known CVEs in third-party libraries</li>
      <li><strong>Runtime Testing:</strong> DAST tools probe running applications through the attack surface exposed by the UI and APIs</li>
      <li><strong>Manual Testing:</strong> Penetration testers apply creativity and expertise that automated tools cannot replicate</li>
      <li><strong>Business Logic Testing:</strong> Test workflows for authorization flaws, race conditions, and logic errors</li>
    </ol>

    <h4>Shift-Left Security Testing</h4>
    <p>The <strong>"shift-left"</strong> movement advocates moving security testing earlier in the SDLC:</p>
    <ul>
      <li><strong>IDE Plugins:</strong> Real-time vulnerability detection as developers code</li>
      <li><strong>Pre-commit Hooks:</strong> Run SAST/SCA before code enters the repository</li>
      <li><strong>CI Pipeline Gates:</strong> Block builds that fail security thresholds</li>
      <li><strong>Developer-Facing Dashboards:</strong> Show security issues in context with remediation guidance</li>
    </ul>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Defense in Depth Testing</div>
      <p>No single testing method catches everything. <strong>SAST</strong> finds code-level issues but misses runtime vulnerabilities. <strong>DAST</strong> catches runtime issues but can't see source code problems. <strong>Penetration testing</strong> finds what scanners miss. Use multiple methods in combination for comprehensive coverage.</p>
    </div>

    <h4>Security Testing Metrics</h4>
    <table>
      <thead>
        <tr><th>Metric</th><th>Description</th><th>Target</th></tr>
      </thead>
      <tbody>
        <tr><td>Vulnerability Density</td><td>Vulnerabilities per thousand lines of code</td><td>&lt; 0.5 / KLOC</td></tr>
        <tr><td>Mean Time to Remediate (MTTR)</td><td>Average time to fix critical vulnerabilities</td><td>&lt; 7 days</td></tr>
        <tr><td>Escape Rate</td><td>Vulnerabilities found in production vs. total found</td><td>&lt; 10%</td></tr>
        <tr><td>Test Coverage</td><td>Percentage of code paths tested</td><td>≥ 80%</td></tr>
        <tr><td>Open Vulnerability Backlog</td><td>Number of unfixed vulnerabilities older than SLA</td><td>&lt; 5 Critical</td></tr>
      </tbody>
    </table>
  `,

  v3c5: `
    <h3>Code Review</h3>
    <p>
      <strong>Security code review</strong> is the systematic examination of source code to identify security vulnerabilities, weaknesses, and deviations from secure coding standards. While automated tools (SAST, linters) provide broad coverage, <strong>manual code review</strong> remains essential for finding complex logic flaws, business logic vulnerabilities, and subtle security issues that tools cannot detect.
    </p>

    <h4>Why Code Review Matters</h4>
    <ul>
      <li><strong>Catches tool blind spots:</strong> Automated scanners miss business logic and context-specific vulnerabilities</li>
      <li><strong>Knowledge transfer:</strong> Reviewers learn from each other's code and security patterns</li>
      <li><strong>Enforces standards:</strong> Ensures compliance with secure coding guidelines</li>
      <li><strong>Builds security culture:</strong> Developers learn to think like attackers</li>
      <li><strong>Reduces vulnerabilities in production:</strong> Studies show code review catches 60-90% of defects before release</li>
    </ul>

    <h4>Security Code Review vs. Code Review</h4>
    <table>
      <thead>
        <tr><th>Aspect</th><th>Regular Code Review</th><th>Security Code Review</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Focus</strong></td><td>Code quality, maintainability, functionality</td><td>Vulnerabilities, attack vectors, security controls</td></tr>
        <tr><td><strong>Skill Set</strong></td><td>Senior developer</td><td>Security-trained developer or AppSec specialist</td></tr>
        <tr><td><strong>Checklists</strong></td><td>Style guides, best practices</td><td>OWASP ASVS, CWE, secure coding standards</td></tr>
        <tr><td><strong>Pace</strong></td><td>Faster, broader scope</td><td>Slower, deeper analysis per critical area</td></tr>
        <tr><td><strong>Outcome</strong></td><td>Improved code quality</td><td>Reduced attack surface</td></tr>
      </tbody>
    </table>

    <h4>High-Priority Review Areas</h4>
    <p>During security code review, focus extra attention on these areas:</p>
    <ol>
      <li><strong>Authentication flows:</strong> Login, session management, token handling, MFA implementation</li>
      <li><strong>Authorization checks:</strong> Access control enforcement on every endpoint/resource</li>
      <li><strong>Input validation:</strong> User input handling, file uploads, API parameters</li>
      <li><strong>Database interactions:</strong> SQL queries, ORM usage, data access patterns</li>
      <li><strong>Cryptographic operations:</strong> Encryption, hashing, key management, random number generation</li>
      <li><strong>Error handling:</strong> Exception management, information leakage in error messages</li>
      <li><strong>Third-party integrations:</strong> API calls, library usage, external service interactions</li>
      <li><strong>Configuration:</strong> Hardcoded secrets, debug flags, security headers</li>
    </ol>

    <h4>Code Review Process</h4>
    <ol>
      <li><strong>Preparation:</strong> Reviewer reads the threat model and security requirements</li>
      <li><strong>Automated scan:</strong> Run SAST tools before manual review to eliminate known issues</li>
      <li><strong>Manual review:</strong> Systematically trace data flows through security-sensitive code paths</li>
      <li><strong>Document findings:</strong> Categorize by severity (Critical/High/Medium/Low) with specific remediation guidance</li>
      <li><strong>Discuss and fix:</strong> Developer addresses findings; reviewer validates fixes</li>
      <li><strong>Track metrics:</strong> Log findings for trend analysis and improvement</li>
    </ol>

    <h4>Review Checklist Template</h4>
    <pre><code>
□ Input validation on all user-supplied data
□ Parameterized queries for all database access
□ Output encoding for all user-controlled data in HTML/JS/URL contexts
□ Authentication enforced on all protected endpoints
□ Authorization checks include ownership validation
□ CSRF protection on state-changing operations
□ No sensitive data in logs or error messages
□ Secure session management (HttpOnly, Secure, SameSite cookies)
□ Proper error handling without information leakage
□ Cryptographic functions use current algorithms (no MD5, SHA1, DES)
□ No hardcoded secrets or credentials
□ Rate limiting on authentication endpoints
□ File upload restrictions (type, size, location)
□ Security headers present (CSP, HSTS, X-Frame-Options, etc.)
    </code></pre>

    <div class="info-box">
      <div class="info-title">💡 Pro Tip: Asymmetric Review</div>
      <p>Not all code changes need the same level of security review. Focus deep review on <strong>authentication, authorization, crypto, and data handling</strong> changes. Lower-risk changes (UI updates, documentation, config) can use lighter review with automated tool validation.</p>
    </div>
  `,

  v3c6: `
    <h3>Security Champions</h3>
    <p>
      The <strong>Security Champion</strong> program embeds security expertise within development teams. Security Champions are <strong>developers who volunteer (or are selected) to serve as the security liaison</strong> for their team, bridging the gap between the security team and development teams.
    </p>

    <h4>What is a Security Champion?</h4>
    <p>Security Champions are <strong>not security experts</strong> — they are <strong>developers with above-average security awareness</strong> who:</p>
    <ul>
      <li>Advocate for secure coding practices within their team</li>
      <li>Serve as the first point of contact for security questions</li>
      <li>Participate in security training and share knowledge with teammates</li>
      <li>Review security findings and help prioritize remediation</li>
      <li>Provide feedback to the security team on tooling and processes</li>
    </ul>

    <h4>Program Structure</h4>
    <table>
      <thead>
        <tr><th>Component</th><th>Details</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Selection</strong></td><td>1 champion per 5-8 developers, or 1 per team. Look for interested developers, not necessarily the most senior.</td></tr>
        <tr><td><strong>Training</strong></td><td>20-40 hours of initial security training (OWASP, secure coding, threat modeling). Ongoing quarterly training.</td></tr>
        <tr><td><strong>Time Allocation</strong></td><td>10-20% of their time dedicated to security activities (some organizations dedicate a sprint per quarter)</td></tr>
        <tr><td><strong>Support</strong></td><td>Access to security team for escalation, tooling, and guidance</td></tr>
        <tr><td><strong>Recognition</strong></td><td>Formal recognition, career development opportunities, security conference attendance</td></tr>
      </tbody>
    </table>

    <h4>Responsibilities</h4>
    <ul>
      <li>Conduct <strong>peer security reviews</strong> during code reviews</li>
      <li>Facilitate <strong>threat modeling sessions</strong> for their team's features</li>
      <li>Triage <strong>security findings</strong> from automated scans and escalate critical issues</li>
      <li>Promote <strong>security awareness</strong> through lunch-and-learns, demos, and documentation</li>
      <li>Participate in the <strong>security community of practice</strong> (monthly meetings, Slack channels)</li>
      <li>Help define <strong>team security standards</strong> and checklists</li>
      <li><strong>Champion secure-by-default</strong> configurations and libraries</li>
    </ul>

    <h4>Building a Successful Program</h4>
    <ol>
      <li><strong>Executive sponsorship:</strong> Secure leadership buy-in and budget for training</li>
      <li><strong>Start small:</strong> Pilot with 2-3 teams, expand based on results</li>
      <li><strong>Provide quality training:</strong> Hands-on labs, capture-the-flag challenges, real-world examples</li>
      <li><strong>Create community:</strong> Regular meetups, shared Slack channel, internal wiki</li>
      <li><strong>Measure impact:</strong> Track vulnerability reduction, time-to-fix, champion participation</li>
      <li><strong>Iterate:</strong> Gather feedback and continuously improve the program</li>
    </ol>

    <h4>Common Pitfalls</h4>
    <ul>
      <li>❌ Treating champions as <strong>part-time security engineers</strong> — they need boundaries on scope</li>
      <li>❌ Not providing <strong>adequate training and resources</strong></li>
      <li>❌ Failing to <strong>recognize and reward</strong> champion contributions</li>
      <li>❌ Appointing champions without <strong>their consent or interest</strong></li>
      <li>❌ Expecting champions to <strong>replace dedicated security reviewers</strong></li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Industry Benchmark</div>
      <p>Google, Microsoft, and Salesforce all run successful Security Champion programs. Google's approach assigns <strong>Security Engineers</strong> to work alongside product teams, while Salesforce's model rotates champions quarterly to prevent burnout and broaden expertise.</p>
    </div>
  `,

  v3c7: `
    <h3>DevSecOps Integration</h3>
    <p>
      <strong>DevSecOps Integration</strong> is the practice of <strong>embedding security into every stage of the DevOps pipeline</strong> — from code commit to production deployment. It represents the cultural and technical fusion of development, security, and operations teams working together to deliver secure software at speed.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Shifting Left AND Right</div>
      <p>Traditional "shift-left" places security early in development. Modern DevSecOps <strong>shifts left AND right</strong> — integrating security <strong>early</strong> (design/code) while maintaining continuous security <strong>in production</strong> (runtime protection, monitoring, incident response).</p>
    </div>

    <h4>The DevSecOps Pipeline</h4>
    <pre><code>
┌─────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐
│ COMMIT  │──▶│   BUILD  │──▶│   TEST   │──▶│ RELEASE  │──▶│ DEPLOY   │
│         │   │          │   │          │   │          │   │          │
│ • Pre-  │   │ • SAST   │   │ • DAST   │   │ • Appro- │   │ • IaC    │
│   commit│   │ • SCA    │   │ • IAST   │   │   vals   │   │   scan   │
│ • Secret│   │ • Secret │   │ • Vuln   │   │ • Policy │   │ • Con-   │
│   detect│   │   detect │   │   scan   │   │   check  │   │   fig    │
│ • Branch│   │ • Image  │   │ • Fuzz   │   │ • Changel│   │   valid  │
│   prot. │   │   scan   │   │   test   │   │   mgmt   │   │ • Secret │
└─────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘
     ◀─────── SHIFT LEFT ───────▶   ◀────── SHIFT RIGHT ───────▶
</code></pre>

    <h4>Key Integration Points</h4>
    <ol>
      <li><strong>Version Control (Pre-Commit):</strong> Secret detection (GitLeaks, TruffleHog), branch protection rules, commit signing</li>
      <li><strong>CI Pipeline:</strong> SAST (Checkmarx, SonarQube), SCA (Snyk, Dependabot), container scanning (Trivy)</li>
      <li><strong>Artifact Registry:</strong> Image signing (Cosign/Sigstore), vulnerability scanning (Grype, Trivy)</li>
      <li><strong>Deployment:</strong> IaC scanning (Checkov, tfsec), configuration validation, policy enforcement (OPA/Gatekeeper)</li>
      <li><strong>Runtime:</strong> WAF, RASP (Runtime Application Self-Protection), anomaly detection</li>
    </ol>

    <h4>Culture & Collaboration</h4>
    <ul>
      <li><strong>Shared responsibility:</strong> Security is everyone's job, not just the security team's</li>
      <li><strong>Blameless postmortems:</strong> Focus on systemic improvements, not individual blame</li>
      <li><strong>Developer experience:</strong> Security tooling must be <strong>fast, accurate, and actionable</strong> — noisy false positives erode trust</li>
      <li><strong>Metrics and feedback:</strong> Track and share security metrics (mean time to fix, vulnerability escape rate).</li>
    </ul>

    <h4>Overcoming Common Challenges</h4>
    <table>
      <thead>
        <tr><th>Challenge</th><th>Solution</th></tr>
      </thead>
      <tbody>
        <tr><td>Slow scans blocking pipelines</td><td>Run quick scans in pipeline, full scans asynchronously</td></tr>
        <tr><td>Too many false positives</td><td>Tune rules, establish baseline, allowlist known-acceptable patterns</td></tr>
        <tr><td>Developer resistance</td><td>Make tools easy, provide training, show real vulnerabilities from your code</td></tr>
        <tr><td>Tool sprawl</td><td>Consolidate into integrated platforms, minimize context-switching</td></tr>
      </tbody>
    </table>
  `,

  v3c8: `
    <h3>Secure Design Patterns</h3>
    <p>
      <strong>Secure design patterns</strong> are <strong>reusable architectural solutions</strong> that address common security requirements. They provide proven approaches to building secure software, enabling developers to solve recurring security problems without reinventing the wheel.
    </p>

    <h4>Core Secure Design Patterns</h4>
    <table>
      <thead>
        <tr><th>Pattern</th><th>Problem Solved</th><th>Implementation</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Defense in Depth</strong></td>
          <td>Single point of failure in security controls</td>
          <td>Layer multiple controls: WAF + authentication + authorization + encryption + logging</td>
        </tr>
        <tr>
          <td><strong>Secure Defaults</strong></td>
          <td>Misconfiguration from insecure out-of-box settings</td>
          <td>Ship with most restrictive settings; require explicit opt-in for relaxing controls</td>
        </tr>
        <tr>
          <td><strong>Input Validation (Zero Trust Input)</strong></td>
          <td>Injection attacks, malformed data</td>
          <td>Validate, sanitize, and encode all inputs — server-side, always</td>
        </tr>
        <tr>
          <td><strong>Principle of Least Privilege</strong></td>
          <td>Overprivileged accounts and processes</td>
          <td>Minimum permissions required; just-in-time (JIT) access; role-based access control</td>
        </tr>
        <tr>
          <td><strong>Secure Session Management</strong></td>
          <td>Session hijacking, fixation</td>
          <td>Long random session IDs, HttpOnly/Secure/SameSite cookies, session timeout, rotation on auth</td>
        </tr>
        <tr>
          <td><strong>Separation of Duties</strong></td>
          <td>Insider threats, fraud</td>
          <td>No single user can perform end-to-end sensitive operations</td>
        </tr>
        <tr>
          <td><strong>Secure Error Handling</strong></td>
          <td>Information disclosure via errors</td>
          <td>Generic error messages to users; detailed errors logged server-side only</td>
        </tr>
        <tr>
          <td><strong>Complete Mediation</strong></td>
          <td>Bypassed access checks</td>
          <td>Every request is authorized; no caching of auth decisions without TTL</td>
        </tr>
        <tr>
          <td><strong>Fail Securely</strong></td>
          <td>Security bypass during errors</td>
          <td>Deny access by default; catch exceptions; secure rollback on failure</td>
        </tr>
      </tbody>
    </table>

    <h4>Secure Authentication Patterns</h4>
    <ul>
      <li><strong>Multi-Factor Authentication (MFA):</strong> Require at least two factors (something you know, have, are)</li>
      <li><strong>OAuth 2.0 / OpenID Connect:</strong> Delegate authentication to trusted identity providers; use authorization code flow with PKCE</li>
      <li><strong>Passwordless Authentication:</strong> WebAuthn, magic links, or passkeys eliminate password-based attacks</li>
      <li><strong>Account Lockout & Rate Limiting:</strong> Prevent brute-force attacks with progressive delays and temporary lockouts</li>
      <li><strong>Secure Token Storage:</strong> Store tokens in HTTP-only, secure cookies — never in localStorage</li>
    </ul>

    <h4>Secure Data Handling Patterns</h4>
    <ul>
      <li><strong>Encryption at Rest:</strong> AES-256 for databases, file systems, backups</li>
      <li><strong>Encryption in Transit:</strong> TLS 1.2+ everywhere; certificate pinning for mobile apps</li>
      <li><strong>Data Masking:</strong> Show partial data (e.g., last 4 digits of SSN) in non-production environments</li>
      <li><strong>Tokenization:</strong> Replace sensitive data with non-reversible tokens (e.g., payment cards)</li>
      <li><strong>Data Minimization:</strong> Collect only what you need; retain only as long as necessary</li>
    </ul>

    <h4>Secure API Patterns</h4>
    <ul>
      <li><strong>API Gateway:</strong> Centralize authentication, rate limiting, input validation, and logging</li>
      <li><strong>Versioning:</strong> Version APIs to enable deprecation and rollback</li>
      <li><strong>Pagination:</strong> Prevent data scraping attacks via result limits</li>
      <li><strong>Response Filtering:</strong> Remove sensitive fields from API responses automatically</li>
      <li><strong>Idempotency:</strong> Support idempotent operations to safely handle retries</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Design by Contract</div>
      <p>Apply <strong>security contracts</strong> to every interface: define expected input formats, output formats, error behaviors, and security guarantees. Enforce contracts at runtime with assertions and validation middleware. This catches integration bugs and security violations at boundaries where components interact.</p>
    </div>
  `,

  // ==========================================
  // SECTION 2: OWASP TOP 10
  // ==========================================

  v3c9: `
    <h3>A01:2021 — Broken Access Control</h3>
    <p>
      <strong>Broken Access Control</strong> is the <strong>#1 web application security risk</strong> according to the OWASP Top 10 2021. It occurs when users can act <strong>outside of their intended permissions</strong> — accessing data or performing functions they shouldn't be able to.
    </p>

    <div class="warning-box">
      <div class="warning-title">⚠️ Real-World Impact</div>
      <p>Broken access control was a factor in the <strong>Facebook/Meta data breach</strong> (2021, 533 million users exposed), the <strong>United Health/Optus breaches</strong>, and countless other high-profile incidents. It remains the most commonly tested and exploited vulnerability category.</p>
    </div>

    <h4>Common Access Control Vulnerabilities</h4>
    <ul>
      <li><strong>Insecure Direct Object References (IDOR):</strong> Accessing /api/user/1234/profile by changing the ID to access another user's data</li>
      <li><strong>Missing Function-Level Access Control:</strong> Admin endpoints accessible by regular users because server-side checks are missing</li>
      <li><strong>Horizontal Privilege Escalation:</strong> User A can access User B's resources (same privilege level, different data)</li>
      <li><strong>Vertical Privilege Escalation:</strong> Regular user gains admin privileges</li>
      <li><strong>Path Traversal:</strong> Accessing files outside intended directories via <code>../../../etc/passwd</code></li>
      <li><strong>Missing Rate Limiting:</strong> Unlimited login attempts enable brute-force attacks</li>
    </ul>

    <h4>Prevention Strategies</h4>
    <ol>
      <li><strong>Deny by Default:</strong> All resources should be inaccessible unless explicitly allowed</li>
      <li><strong>Enforce Authorization Server-Side:</strong> Never rely on client-side checks alone</li>
      <li><strong>Use Indirect References:</strong> Use UUIDs or mappings instead of sequential IDs</li>
      <li><strong>Implement Centralized Access Control:</strong> Use a single, well-tested authorization library/service</li>
      <li><strong>Log Access Failures:</strong> Monitor for repeated access denial patterns</li>
      <li><strong>Regular Access Reviews:</strong> Periodically audit permissions and remove stale access</li>
    </ol>

    <h4>Code Example: Secure Access Control</h4>
    <pre><code>
// ❌ VULNERABLE — No authorization check
app.get('/api/documents/:id', async (req, res) => {
  const doc = await Document.findById(req.params.id);
  res.json(doc);  // Any user can access any document!
});

// ✅ SECURE — Server-side authorization
app.get('/api/documents/:id', authenticate, async (req, res) => {
  const doc = await Document.findById(req.params.id);
  if (!doc) return res.status(404).json({ error: 'Not found' });

  // Check ownership or permissions
  if (doc.ownerId !== req.user.id &&
      !req.user.roles.includes('admin')) {
    return res.status(403).json({ error: 'Access denied' });
  }
  res.json(doc);
});
</code></pre>
  `,

  v3c10: `
    <h3>A02:2021 — Cryptographic Failures</h3>
    <p>
      <strong>Cryptographic Failures</strong> (formerly Sensitive Data Exposure) occur when data is not properly <strong>protected in transit or at rest</strong>. This includes using weak algorithms, improper key management, or failing to encrypt sensitive data altogether.
    </p>

    <h4>Common Cryptographic Failures</h4>
    <ul>
      <li><strong>Data transmitted in cleartext:</strong> HTTP instead of HTTPS, unencrypted database connections</li>
      <li><strong>Weak hashing algorithms:</strong> Using MD5 or SHA1 for password hashing</li>
      <li><strong>Insufficient encryption:</strong> Using AES-128 when AES-256 is recommended; ECB mode instead of GCM</li>
      <li><strong>Hard-coded keys:</strong> Encryption keys embedded in source code</li>
      <li><strong>No key rotation:</strong> Using the same keys indefinitely</li>
      <li><strong>Padding oracle attacks:</strong> CBC mode without proper integrity checks</li>
    </ul>

    <h4>Current Recommended Standards</h4>
    <table>
      <thead>
        <tr><th>Purpose</th><th>Recommended</th><th>Avoid</th></tr>
      </thead>
      <tbody>
        <tr><td>Symmetric Encryption</td><td>AES-256-GCM</td><td>AES-ECB, DES, 3DES</td></tr>
        <tr><td>Asymmetric Encryption</td><td>RSA-4096, ECDSA (P-384)</td><td>RSA-1024, DSA</td></tr>
        <tr><td>Password Hashing</td><td>bcrypt, Argon2id, scrypt</td><td>MD5, SHA1, unsalted hashes</td></tr>
        <tr><td>Key Derivation</td><td>HKDF, PBKDF2 (≥100K iterations)</td><td>Simple concatenation</td></tr>
        <tr><td>Random Number Generation</td><td>/dev/urandom, crypto.randomBytes()</td><td>Math.random()</td></tr>
        <tr><td>TLS Version</td><td>TLS 1.3 (or 1.2 minimum)</td><td>SSLv3, TLS 1.0, TLS 1.1</td></tr>
      </tbody>
    </table>

    <h4>Key Management Best Practices</h4>
    <ol>
      <li><strong>Use a Key Management Service (KMS):</strong> AWS KMS, Azure Key Vault, Google Cloud KMS, HashiCorp Vault</li>
      <li><strong>Implement automatic key rotation:</strong> Rotate encryption keys on a defined schedule (e.g., 90 days)</li>
      <li><strong>Separate key management from data storage:</strong> Keys should never be stored alongside the data they protect</li>
      <li><strong>Use envelope encryption:</strong> Encrypt data with a data key, encrypt the data key with a master key</li>
      <li><strong>Audit key access:</strong> Log all key usage and alert on anomalies</li>
    </ol>

    <div class="warning-box">
      <div class="warning-title">⚠️ The Math.random() Problem</div>
      <p><code>Math.random()</code> in JavaScript is <strong>NOT cryptographically secure</strong>. It uses a predictable PRNG that attackers can exploit. Always use <code>crypto.randomBytes()</code> (Node.js) or <code>crypto.getRandomValues()</code> (browser) for security-sensitive operations.</p>
    </div>
  `,

  v3c11: `
    <h3>A03:2021 — Injection</h3>
    <p>
      <strong>Injection</strong> is one of the oldest and most dangerous web application vulnerabilities. It occurs when untrusted data is sent to an <strong>interpreter as part of a command or query</strong>. The attacker's hostile data can trick the interpreter into executing unintended commands or accessing unauthorized data.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Never Trust User Input</div>
      <p>All user-supplied data — form fields, URL parameters, HTTP headers, cookies, API payloads — must be treated as <strong>potentially malicious</strong> until validated, sanitized, and safely handled.</p>
    </div>

    <h4>Types of Injection</h4>
    <table>
      <thead>
        <tr><th>Type</th><th>Target</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>SQL Injection (SQLi)</strong></td><td>Databases</td><td><code>' OR '1'='1</code> in login form</td></tr>
        <tr><td><strong>NoSQL Injection</strong></td><td>NoSQL databases (MongoDB)</td><td><code>{"$gt": ""}</code> in query parameters</td></tr>
        <tr><td><strong>Command Injection</strong></td><td>OS commands</td><td><code>; rm -rf /</code> in input field</td></tr>
        <tr><td><strong>LDAP Injection</strong></td><td>Directory services</td><td><code>(uid=*)(|(uid=admin))</code></td></tr>
        <tr><td><strong>XPath Injection</strong></td><td>XML documents</td><td><code>' or '1'='1' or '</code></td></tr>
        <tr><td><strong>SSRF Injection</strong></td><td>Server-side requests</td><td><code>http://localhost:8080/admin</code></td></tr>
        <tr><td><strong>Template Injection</strong></td><td>Template engines</td><td><code>{{7*7}}</code> in user input</td></tr>
      </tbody>
    </table>

    <h4>SQL Injection Deep Dive</h4>
    <p>SQL Injection remains the <strong>most common injection type</strong> despite being well understood:</p>
    <pre><code>
-- VULNERABLE Code (Python/Flask)
@app.route('/user')
def get_user():
    user_id = request.args.get('id')
    query = f"SELECT * FROM users WHERE id = {user_id}"  # SQLi!
    result = db.execute(query)

-- FIXED Code
@app.route('/user')
def get_user():
    user_id = request.args.get('id')
    query = "SELECT * FROM users WHERE id = %s"  # Parameterized
    result = db.execute(query, (user_id,))
</code></pre>

    <h4>Prevention Strategies</h4>
    <ol>
      <li><strong>Use parameterized queries/prepared statements</strong> for all database operations</li>
      <li><strong>Use ORMs</strong> that escape queries (but understand their limitations)</li>
      <li><strong>Input validation:</strong> Whitelist acceptable input patterns</li>
      <li><strong>Output encoding:</strong> Encode data in the correct context (HTML, URL, JavaScript, CSS)</li>
      <li><strong>Least privilege:</strong> Database accounts should have only the permissions they need</li>
      <li><strong>Web Application Firewalls (WAF):</strong> Provide defense-in-depth against known attack patterns</li>
    </ol>
  `,

  v3c12: `
    <h3>A04:2021 — Insecure Design</h3>
    <p>
      <strong>Insecure Design</strong> is a new category introduced in OWASP Top 10 2021. It focuses on risks related to <strong>design flaws</strong> — vulnerabilities that exist because of missing or ineffective security controls in the application's architecture. Unlike implementation bugs, these are <strong>architectural-level weaknesses</strong> that require fundamental redesign to fix.
    </p>

    <h4>Insecure Design vs. Insecure Implementation</h4>
    <table>
      <thead>
        <tr><th>Aspect</th><th>Insecure Design</th><th>Insecure Implementation</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Root Cause</strong></td><td>Missing security controls in architecture</td><td>Bug in implementing a control</td></tr>
        <tr><td><strong>Example</strong></td><td>No authentication for API endpoints</td><td>Weak password hash algorithm used</td></tr>
        <tr><td><strong>Fix Complexity</strong></td><td>Requires redesign/architecture change</td><td>Code change</td></tr>
        <tr><td><strong>Detection</strong></td><td>Threat modeling, architecture review</td><td>SAST, code review</td></tr>
        <tr><td><strong>Prevention</strong></td><td>Secure design patterns, threat modeling</td><td>Secure coding, SAST</td></tr>
      </tbody>
    </table>

    <h4>Common Insecure Design Patterns</h4>
    <ul>
      <li><strong>"Missing Authentication for Critical Function":</strong> Assuming users won't access certain endpoints (e.g., admin without login)</li>
      <li><strong>"Flat Access Model":</strong> Only two roles (user/admin) when the business requires finer-grained permissions</li>
      <li><strong>"No Audit Logging":</strong> Business-critical operations have no audit trail — violations go undetected</li>
      <li><strong>"Security as an Afterthought":</strong> Core features built without considering security requirements until the end</li>
      <li><strong>"Trusting Client State":</strong> Business logic enforced only on the client (easily bypassed)</li>
    </ul>

    <h4>Preventing Insecure Design</h4>
    <ol>
      <li><strong>Establish a secure design review process:</strong> Every major feature should undergo security review before development begins</li>
      <li><strong>Use established secure design patterns:</strong> See the Secure Design Patterns chapter in this Veda</li>
      <li><strong>Develop a threat model early:</strong> Document threats and controls during requirements/design</li>
      <li><strong>Maintain a secure component catalog:</strong> Pre-approved libraries, frameworks, and patterns</li>
      <li><strong>Leverage security reference architectures:</strong> Build on proven secure foundations</li>
      <li><strong>Implement security user stories:</strong> Include security acceptance criteria in every user story</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 Design Review Heuristic</div>
      <p>For every feature, ask:<br>
      1. Who should access this? (Authentication)<br>
      2. What can they do? (Authorization)<br>
      3. What data do they see? (Data exposure)<br>
      4. What happens if it fails? (Error handling)<br>
      5. How do we know it's working? (Audit logging)<br>
      If any answer is unclear, the design needs more security work.</p>
    </div>
  `,

  v3c13: `
    <h3>A05:2021 — Security Misconfiguration</h3>
    <p>
      <strong>Security Misconfiguration</strong> is one of the most commonly exploited vulnerabilities. It occurs when <strong>security controls are not properly implemented, configured, or maintained</strong> — leaving the application or infrastructure exposed to attack.
    </p>

    <div class="warning-box">
      <div class="warning-title">⚠️ The Ubiquity of Misconfigurations</div>
      <p>Studies show that <strong>65% of data breaches</strong> involve some form of misconfiguration. Common examples include default credentials left active, open S3 buckets, verbose error messages, and unnecessary services running on production servers.</p>
    </div>

    <h4>Common Misconfigurations</h4>
    <table>
      <thead>
        <tr><th>Area</th><th>Misconfiguration</th><th>Risk</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Web Servers</strong></td><td>Default pages, directory listing enabled</td><td>Information disclosure</td></tr>
        <tr><td><strong>Databases</strong></td><td>Default passwords, open to network</td><td>Full database compromise</td></tr>
        <tr><td><strong>Cloud Storage</strong></td><td>S3/bucket publicly accessible</td><td>Mass data exposure</td></tr>
        <tr><td><strong>Application</strong></td><td>Verbose error messages, debug mode enabled</td><td>Information disclosure, code leakage</td></tr>
        <tr><td><strong>HTTP Headers</strong></td><td>Missing security headers</td><td>XSS, clickjacking, MIME sniffing</td></tr>
        <tr><td><strong>Authentication</strong></td><td>Default credentials, password reset flaws</td><td>Account takeover</li></tr>
        <tr><td><strong>Dependencies</strong></td><td>Unpatched libraries and frameworks</td><td>Known CVE exploitation</td></tr>
        <tr><td><strong>Firewall / Network</strong></td><td>Overly permissive rules</td><td>Unauthorized access</td></tr>
      </tbody>
    </table>

    <h4>Prevention Checklist</h4>
    <ol>
      <li><strong>Harden all environments:</strong> Use CIS Benchmarks for OS, databases, containers</li>
      <li><strong>Automate configuration management:</strong> Use IaC (Terraform, CloudFormation) with security scanning</li>
      <li><strong>Disable unnecessary features:</strong> Remove default accounts, disable directory listing, turn off debug mode</li>
      <li><strong>Set security headers:</strong> CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy</li>
      <li><strong>Implement consistent patching:</strong> Automated dependency updates via Dependabot/Renovate</li>
      <li><strong>Use segmented environments:</strong> Separate dev, staging, and production with firewall rules</li>
      <li><strong>Regular configuration audits:</strong> Scan with tools like ScoutSuite, Prowler, or CloudSploit</li>
    </ol>

    <h4>The "Security Headaches" Framework</h4>
    <p>A practical <strong>top-10 checklist</strong> for web application configuration:</p>
    <pre><code>
1. Custom error pages (no stack traces in production)
2. Security headers present (CSP, HSTS, etc.)
3. Default credentials removed/changed
4. Directory listing disabled
5. Debug mode OFF
6. No sensitive data in environment variables in logs
7. TLS enforced (HTTPS redirect, HSTS)
8. API rate limiting enabled
9. Unnecessary HTTP methods disabled (TRACE, OPTIONS)
10. Software versions don't leak in headers
</code></pre>
  `,

  v3c14: `
    <h3>A06:2021 — Vulnerable and Outdated Components</h3>
    <p>
      <strong>Vulnerable and Outdated Components</strong> (also known as <strong>Using Components with Known Vulnerabilities</strong>) occurs when applications use libraries, frameworks, or other software modules with <strong>known security vulnerabilities</strong>. This is the only category in OWASP Top 10 that is often not directly caused by the application developers.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: The Supply Chain Risk</div>
      <p>Modern applications are built on <strong>hundreds or thousands of open-source dependencies</strong>. A single compromised or vulnerable dependency can cascade into a critical vulnerability in your application — even if your own code is perfect.</p>
    </div>

    <h4>Why This Risk is Growing</h4>
    <p>According to recent studies:</p>
    <ul>
      <li>Over <strong>80% of codebases</strong> contain at least one known open-source vulnerability</li>
      <li>The average application has <strong>hundreds of transitive dependencies</strong></li>
      <li>Major incidents: <strong>Log4Shell (CVE-2021-44228)</strong> affected millions of systems; <strong>SolarWinds, Codecov, and 3CX</strong> supply chain attacks</li>
    </ul>

    <h4>Prevention Strategies</h4>
    <ol>
      <li>
        <strong>Software Composition Analysis (SCA):</strong>
        <ul>
          <li>Integrate tools like <strong>Snyk, Dependabot, OWASP Dependency-Check</strong></li>
          <li>Scan on every build and on a scheduled basis</li>
          <li>Generate Software Bill of Materials (SBOM)</li>
        </ul>
      </li>
      <li>
        <strong>Dependency Hygiene:</strong>
        <ul>
          <li>Regularly update dependencies (don't wait for vulnerabilities to force you)</li>
          <li>Remove unused dependencies</li>
          <li>Prefer dependencies with active maintenance and security-focused maintainers</li>
        </ul>
      </li>
      <li><strong>Continuous Monitoring:</strong> Subscribe to vulnerability feeds (NVD, GitHub Security Advisories, Snyk Vulnerability DB)</li>
      <li><strong>Policy Enforcement:</strong> Block builds with critical/high severity vulnerabilities</li>
      <li><strong>Vendor Risk Assessment:</strong> Evaluate the security practices of critical dependencies</li>
    </ol>

    <h4>Responding to Zero-Day in a Dependency</h4>
    <ol>
      <li><strong>Detect:</strong> Monitor advisories, configure alerts</li>
      <li><strong>Assess:</strong> Determine if and how your application is affected</li>
      <li><strong>Mitigate:</strong> WAF rules, disable affected features, virtual patching</li>
      <li><strong>Patch:</strong> Update the dependency; test and deploy</li>
      <li><strong>Review:</strong> Post-incident review and process improvements</li>
    </ol>
  `,

  v3c15: `
    <h3>A07:2021 — Identification and Authentication Failures</h3>
    <p>
      <strong>Identification and Authentication Failures</strong> (formerly Broken Authentication) occur when the application's <strong>authentication mechanisms are improperly implemented</strong>, allowing attackers to compromise passwords, keys, session tokens, or exploit implementation flaws to assume other users' identities.
    </p>

    <div class="warning-box">
      <div class="warning-title">⚠️ Credential Stuffing is Rampant</div>
      <p>Over <strong>65 billion credential stuffing attacks</strong> occur annually. Combined with common password reuse, this makes authentication one of the most targeted attack surfaces. In 2023, credential-related breaches accounted for <strong>over 50% of breaches</strong> investigated by Verizon DBIR.</p>
    </div>

    <h4>Common Authentication Vulnerabilities</h4>
    <ul>
      <li><strong>Weak password policies:</strong> Allowing short, common, or unchanged passwords</li>
      <li><strong>Missing MFA:</strong> Single-factor authentication enables credential theft</li>
      <li><strong>Credential stuffing:</strong> No protection against automated login attempts with known credentials</li>
      <li><strong>Brute force attacks:</strong> No rate limiting or account lockout</li>
      <li><strong>Insecure session management:</strong> Predictable session IDs, no timeout, improper session fixation handling</li>
      <li><strong>Broken password reset:</strong> Password reset tokens that are guessable, never expire, or are not invalidated after use</li>
      <li><strong>Insecure credential storage:</strong> Plain-text or weak hashing of passwords</li>
    </ul>

    <h4>Best Practices</h4>
    <ol>
      <li>
        <strong>Multi-Factor Authentication:</strong>
        <ul>
          <li>Require MFA for all users, especially admin and sensitive operations</li>
          <li>Prefer phishing-resistant MFA (WebAuthn, hardware keys) over SMS</li>
        </ul>
      </li>
      <li>
        <strong>Password Policies:</strong>
        <ul>
          <li>Minimum 12 characters; check against known breached passwords (HaveIBeenPwned API)</li>
          <li>Don't enforce arbitrary complexity rules (NIST 800-63B)</li>
          <li>Implement breached password detection</li>
        </ul>
      </li>
      <li>
        <strong>Credential Stuffing Protection:</strong>
        <ul>
          <li>Rate limiting (e.g., 5 attempts per minute per IP)</li>
          <li>CAPTCHA after failed attempts</li>
          <li>Credential monitoring services</li>
          <li>Device fingerprinting and anomaly detection</li>
        </ul>
      </li>
      <li>
        <strong>Session Management:</strong>
        <ul>
          <li>Use framework-provided session management (don't roll your own)</li>
          <li>Set session timeout (15 min inactive, absolute timeout)</li>
          <li>Rotate session ID on login</li>
          <li>Invalidate sessions on logout and password change</li>
        </ul>
      </li>
      <li>
        <strong>Secure Token Handling:</strong>
        <ul>
          <li>JWT: Use RS256 (asymmetric), validate audience/issuer/expiry</li>
          <li>Short-lived access tokens + refresh tokens</li>
          <li>Token revocation mechanism</li>
        </ul>
      </li>
    </ol>
  `,

  v3c16: `
    <h3>A08:2021 — Software and Data Integrity Failures</h3>
    <p>
      <strong>Software and Data Integrity Failures</strong> occur when code and infrastructure are <strong>not protected against integrity violations</strong>. This includes running untrusted code, relying on plugins from untrusted sources, or failing to verify the integrity of software updates.
    </p>

    <h4>Key Concern: CI/CD Pipeline Attacks</h4>
    <p>The rise of supply chain attacks (SolarWinds, Codecov, 3CX, Codecov) has made integrity failures one of the most critical concerns:</p>
    <ul>
      <li><strong>Dependency confusion:</strong> Attacker publishes malicious package with higher version number to public registry</li>
      <li><strong>Typosquatting:</strong> Malicious packages with names similar to popular libraries</li>
      <li><strong>Compromised build tools:</strong> Malware injected into build systems</li>
      <li><strong>Unauthorized code changes:</strong> Direct commits to protected branches without review</li>
    </ul>

    <h4>Prevention Strategies</h4>
    <ol>
      <li>
        <strong>Code Signing:</strong>
        <ul>
          <li>Sign all builds with GPG or Sigstore/Cosign</li>
          <li>Verify signatures before deployment</li>
          <li>Use in-toto or SLSA framework for build provenance</li>
        </ul>
      </li>
      <li>
        <strong>Dependency Verification:</strong>
        <ul>
          <li>Use lock files (package-lock.json, yarn.lock, go.sum)</li>
          <li>Verify checksums of all dependencies</li>
          <li>Use private registries with curated packages</li>
          <li>Prefer scoped packages (@org/package) in npm</li>
        </ul>
      </li>
      <li>
        <strong>CI/CD Security:</strong>
        <ul>
          <li>Protect branches and require pull request reviews</li>
          <li>Use short-lived credentials in pipelines</li>
          <li>Separate production deployment credentials</li>
          <li>Audit all pipeline changes</li>
        </ul>
      </li>
      <li>
        <strong>Plugin/Extension Security:</strong>
        <ul>
          <li>Only install plugins from trusted sources</li>
          <li>Pin plugin versions (don't use auto-update in production)</li>
          <li>Review plugin code or choose well-maintained options</li>
        </ul>
      </li>
      <li>
        <strong>Data Integrity:</strong>
        <ul>
          <li>Use checksums/hashes for data transfers</li>
          <li>Implement database migration testing</li>
          <li>Back up and verify data integrity regularly</li>
        </ul>
      </li>
    </ol>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: SLSA Framework</div>
      <p><strong>SLSA (Supply-chain Levels for Software Artifacts)</strong> is an end-to-end framework for ensuring the <strong>integrity of software artifacts</strong>. It defines levels of assurance from build provenance to hermetic, reproducible builds. Aiming for SLSA Level 3+ provides strong protection against supply chain attacks.</p>
    </div>
  `,

  v3c17: `
    <h3>A09:2021 — Security Logging and Monitoring Failures</h3>
    <p>
      <strong>Security Logging and Monitoring Failures</strong> occur when organizations lack the <strong>visibility</strong> to detect, understand, and respond to security incidents. Without comprehensive logging and monitoring, attackers can <strong>exploit vulnerabilities and remain undetected for months</strong> — the average dwell time before detection is still over 200 days.
    </p>

    <div class="warning-box">
      <div class="warning-title">⚠️ The Breach Detection Gap</div>
      <p>Studies show the average time to identify a breach is <strong>204 days</strong>, and the average lifecycle (identification + containment) is <strong>280 days</strong>. This gap exists largely because of insufficient logging, monitoring failures, and alert fatigue.</p>
    </div>

    <h4>What to Log</h4>
    <table>
      <thead>
        <tr><th>Event Type</th><th>What to Capture</th><th>Retention</th></tr>
      </thead>
      <tbody>
        <tr><td>Authentication</td><td>Login success/failure, MFA events, password changes, lockouts</td><td>≥ 1 year</td></tr>
        <tr><td>Authorization</td><td>Access denied events, privilege escalation, role changes</td><td>≥ 1 year</td></tr>
        <tr><td>Application</td><td>API calls, errors, exceptions, input validation failures</td><td>≥ 90 days</td></tr>
        <tr><td>Database</td><td>Queries, schema changes, bulk data access</td><td>≥ 1 year</td></tr>
        <tr><td>System</td><td>File changes, service starts/stops, configuration changes</td><td>≥ 1 year</td></tr>
        <tr><td>Network</td><td>Firewall events, DNS queries, unusual traffic</td><td>≥ 90 days</td></tr>
      </tbody>
    </table>

    <h4>Logging Best Practices</h4>
    <ul>
      <li><strong>Structured logging:</strong> Use JSON format with consistent fields (timestamp, level, service, user, action, outcome, IP)</li>
      <li><strong>Correlation IDs:</strong> Include request IDs to trace operations across microservices</li>
      <li><strong>Sensitive data scrubbing:</strong> Mask PII, tokens, passwords — use scrubbers/log sanitizers</li>
      <li><strong>Tamper protection:</strong> Ship logs to centralized storage with integrity controls</li>
      <li><strong>Timestamps in UTC:</strong> Use ISO 8601 format for consistency</li>
    </ul>

    <h4>Effective Monitoring & Alerting</h4>
    <ol>
      <li><strong>Define alertable events:</strong> Brute force, privilege escalation, data exfiltration, configuration changes</li>
      <li><strong>Set baselines:</strong> Understand normal behavior to detect anomalies</li>
      <li><strong>Reduce alert fatigue:</strong> Tune thresholds, aggregate related alerts, implement severity levels</li>
      <li><strong>24/7 coverage:</strong> Either in-house SOC or managed detection and response (MDR)</li>
      <li><strong>Incident response integration:</strong> Alerts should trigger runbooks and escalate to the right team</li>
    </ol>

    <h4>Essential Log Review Questions</h4>
    <p>Regularly review logs to answer these questions:</p>
    <ul>
      <li>Are there failed login attempts from unusual locations or IPs?</li>
      <li>Are there access patterns outside of normal business hours?</li>
      <li>Are there repeated errors or exceptions indicating probing?</li>
      <li>Are there bulk data access or export operations?</li>
      <li>Are there any privilege changes or new account creations?</li>
    </ul>
  `,

  v3c18: `
    <h3>A10:2021 — Server-Side Request Forgery (SSRF)</h3>
    <p>
      <strong>Server-Side Request Forgery (SSRF)</strong> is a vulnerability that allows an attacker to induce the server-side application to make <strong>HTTP requests to an arbitrary domain</strong> of the attacker's choosing. SSRF can be used to access internal services, cloud metadata endpoints, and other resources that should not be directly accessible.
    </p>

    <div class="warning-box">
      <div class="warning-title">⚠️ SSRF in the Cloud</div>
      <p>SSRF is particularly dangerous in cloud environments. The <strong>2019 Capital One breach</strong> (106 million records) was caused by an SSRF vulnerability that allowed access to the AWS EC2 metadata service (169.254.169.254), exposing temporary IAM credentials.</p>
    </div>

    <h4>How SSRF Works</h4>
    <pre><code>
Attacker ──▶ Vulnerable Server ──▶ Internal Service / Cloud Metadata
  │                                  │
  │  "Fetch this URL:"               │  Server makes request to
  │  http://169.254.169.254/         │  attacker-specified URL
  │          latest/meta-data/       │  on behalf of the server
  │          iam/security-credentials/...
  │
  │  ◀── Returns AWS credentials ───◀───
</code></pre>

    <h4>SSRF Attack Vectors</h4>
    <ul>
      <li><strong>Internal network scanning:</strong> Enumerate internal services, ports, and resources</li>
      <li><strong>Cloud metadata access:</strong> AWS (169.254.169.254), Azure (169.254.169.254), GCP (169.254.169.254)</li>
      <li><strong>Access to local services:</strong> Database admin interfaces (phpMyAdmin), Redis, Memcached</li>
      <li><strong>Bypassing allowlists:</strong> Using DNS rebinding, URL redirects, or alternate IP encodings</li>
      <li><strong>Port scanning:</strong> Discovering open services on internal network</li>
    </ul>

    <h4>SSRF Variants</h4>
    <table>
      <thead>
        <tr><th>Variant</th><th>Description</th><th>Difficulty to Block</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Basic SSRF</strong></td><td>Response returned directly to attacker</td><td>Easy</td></tr>
        <tr><td><strong>Blind SSRF</strong></td><td>No response returned; attacker uses out-of-band channels (DNS, HTTP callbacks)</td><td>Hard</td></tr>
        <tr><td><strong>DNS Rebinding</strong></td><td>DNS resolves to internal IP first, then external — bypasses IP allowlists</td><td>Hard</td></tr>
      </tbody>
    </table>

    <h4>Prevention Strategies</h4>
    <ol>
      <li><strong>Network segmentation:</strong> Isolate backend services; use separate VPCs/subnets</li>
      <li><strong>Block access to cloud metadata:</strong>
        <ul>
          <li>AWS: Use IMDSv2 (session tokens) which blocks SSRF by default</li>
          <li>Use a <strong>hop limit of 1–2</strong> on metadata service</li>
          <li>Use a <strong>proxy</strong> for all outbound requests and allowlist permitted domains</li>
        </ul>
      </li>
      <li><strong>URL validation:</strong>
        <ul>
          <li>Parse and validate URL schemes (allow only http/https)</li>
          <li>Block private/reserved IP ranges (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, 127.0.0.1, 169.254.0.0/16, ::1)</li>
          <li>Don't rely on DNS — resolve and check IPs</li>
          <li>Disable redirects</li>
        </ul>
      </li>
      <li><strong>Response filtering:</strong> Block responses containing sensitive data patterns</li>
      <li><strong>Use a URL allowlist:</strong> Only permit access to explicitly approved domains/IPs</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 SSRF Cheat Sheet</div>
      <p>Common SSRF test payloads to verify your application is protected:<br>
      <code>http://169.254.169.254/latest/meta-data/</code> (AWS metadata)<br>
      <code>http://localhost/</code> or <code>http://127.0.0.1:6379/</code> (local services)<br>
      <code>file:///etc/passwd</code> (file access, if protocol not restricted)</p>
    </div>
  `,

  // ==========================================
  // SECTION 3: ADDITIONAL VULNERABILITIES
  // ==========================================

  v3c19: `
    <h3>IDOR (Insecure Direct Object Reference)</h3>
    <p>
      <strong>Insecure Direct Object Reference (IDOR)</strong> is an <strong>access control vulnerability</strong> that occurs when an application exposes a reference to an internal object — such as a file, database key, or URL parameter — without verifying that the requesting user is authorized to access that object.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: The #1 API Vulnerability</div>
      <p>IDOR is consistently the <strong>most common finding</strong> in API penetration tests. Its simplicity makes it both easy to exploit and easy to prevent — yet it remains extremely prevalent across applications of all sizes.</p>
    </div>

    <h4>How IDOR Works</h4>
    <pre><code>
// Attacker is logged in as User A (ID: 100)
GET /api/user/100/profile  → ✅ Returns User A's profile (authorized)
GET /api/user/101/profile  → ❌ Should return 403, but often returns User B's profile
GET /api/user/102/profile  → ❌ Returns User C's profile — DATA BREACH
</code></pre>

    <h4>Types of IDOR</h4>
    <table>
      <thead>
        <tr><th>Type</th><th>Description</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Horizontal IDOR</strong></td><td>Accessing another user's resources at the same privilege level</td><td>Viewing another user's order history</td></tr>
        <tr><td><strong>Vertical IDOR</strong></td><td>Accessing resources requiring higher privileges</td><td>User accessing admin panel by changing role parameter</td></tr>
        <tr><td><strong>Stored IDOR</strong></td><td>Malicious reference stored and executed later</td><td>Hidden form field with another user's ID</td></tr>
        <tr><td><strong>Insecure UUIDs</strong></td><td>Sequential or guessable object identifiers</td><td>/api/documents/1001, /api/documents/1002</td></tr>
      </tbody>
    </table>

    <h4>Prevention</h4>
    <ol>
      <li><strong>Implement proper authorization checks:</strong> Every request must verify that the authenticated user owns or has permission to access the requested resource</li>
      <li><strong>Use indirect references:</strong> Map internal sequential IDs to unpredictable UUIDs</li>
      <li><strong>Centralize access control logic:</strong> Don't scatter authorization checks — use a single, reusable authorization middleware</li>
      <li><strong>Validate on the server:</strong> Never trust client-side access control</li>
      <li><strong>Log access attempts:</strong> Log all resource access attempts, especially denied ones</li>
    </ol>

    <h4>Code Example: Secure Object Access</h4>
    <pre><code>
// ❌ VULNERABLE — No ownership check
async function getDocument(req, res) {
  const doc = await Document.findById(req.params.id);
  res.json(doc);
}

// ✅ SECURE — Ownership verification
async function getDocument(req, res) {
  const doc = await Document.findById(req.params.id);
  if (!doc.owner.equals(req.user.id) && !req.user.isAdmin) {
    return res.status(403).json({ error: 'Access denied' });
  }
  res.json(doc);
}
</code></pre>
  `,

  v3c20: `
    <h3>XXE (XML External Entity)</h3>
    <p>
      <strong>XML External Entity (XXE)</strong> attacks exploit vulnerabilities in XML parsers that process <strong>external entity references</strong> within XML documents. Attackers can use XXE to read files on the server, perform server-side request forgery (SSRF), or cause denial of service.
    </p>

    <h4>How XXE Works</h4>
    <pre><code>
<!-- Malicious XML payload -->
<?xml version="1.0"?>
<!DOCTYPE foo [
  <!ENTITY xxe SYSTEM "file:///etc/passwd">
]>
<data>&xxe;</data>
</code></pre>
    <p>When the server parses this XML and includes the entity, it reads the contents of <code>/etc/passwd</code> and returns it in the response.</p>

    <h4>Types of XXE Attacks</h4>
    <table>
      <thead>
        <tr><th>Attack Type</th><th>Purpose</th><th>Severity</th></tr>
      </thead>
      <tbody>
        <tr><td>File Disclosure</td><td>Read local files on the server</td><td>High — can expose credentials, configs</td></tr>
        <tr><td>SSRF</td><td>Make the server request internal/external URLs</td><td>High — can pivot to internal services</td></tr>
        <tr><td>Denial of Service (DoS)</brr</td><td>Billion laughs attack, entity expansion</td><td>Medium — service disruption</td></tr>
        <tr><td>Server-Side Request Forgery</td><td>Scan internal network via server</td><td>High — internal enumeration</td></tr>
      </tbody>
    </table>

    <h4>Billion Laughs Attack (DoS Variant)</h4>
    <pre><code>
<?xml version="1.0"?>
<!DOCTYPE lolz [
  <!ENTITY lol "lol">
  <!ENTITY lol2 "&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;">
  <!ENTITY lol3 "&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;">
]>
<data>&lol3;</data>
</code></pre>
    <p>This expands to billions of "lol" strings, exhausting memory.</p>

    <h4>Prevention Strategies</h4>
    <ol>
      <li><strong>Disable external entity processing:</strong> The most effective mitigation
        <ul>
          <li>Java: Use <code>DocumentBuilderFactory</code> with safe features enabled (see OWASP XXE Cheat Sheet)</li>
          <li>PHP: Use <code>libxml_disable_entity_loader(true)</code></li>
          <li>Python: Use <code>defusedxml</code> instead of standard XML libraries</li>
          <li>.NET: Use <code>XmlReaderSettings</code> with <code>DtdProcessing.Prohibit</code></li>
        </ul>
      </li>
      <li><strong>Use less complex data formats:</strong> Prefer JSON over XML when possible</li>
      <li><strong>Input validation:</strong> Reject or sanitize XML input containing DOCTYPE declarations</li>
      <li><strong>Server-side validation:</strong> Use locally-compiled schemas or known-good schemas</li>
      <li><strong>Web Application Firewall:</strong> Configure WAF rules to detect XXE patterns</li>
    </ol>
  `,

  v3c21: `
    <h3>Deserialization Attacks</h3>
    <p>
      <strong>Insecure Deserialization</strong> occurs when untrusted data is used to <strong>reconstruct objects</strong> within an application. Attackers can craft malicious serialized objects that execute arbitrary code when deserialized, leading to <strong>remote code execution (RCE)</strong>.
    </p>

    <div class="warning-box">
      <div class="warning-title">⚠️ Remote Code Execution Risk</div>
      <p>Insecure deserialization was named one of the <strong>most dangerous web vulnerabilities</strong> by OWASP. It can lead to full system compromise even without any other vulnerability present. The Equifax breach (2017) was partly attributed to deserialization vulnerabilities.</p>
    </div>

    <h4>How It Works</h4>
    <pre><code>
// Vulnerable code (Java example)
ObjectInputStream ois = new ObjectInputStream(request.getInputStream());
Object obj = ois.readObject();  // Attacker controls this data!
// Malicious payload executes code during deserialization
</code></pre>

    <p>Many languages support serialization: Java, .NET, Python (pickle), PHP, Ruby. Attackers craft payloads that execute commands during the deserialization process.</p>

    <h4>Attack Scenarios</h4>
    <ul>
      <li><strong>Remote Code Execution:</strong> The most severe — attacker gains full control of the server</li>
      <li><strong>ReDoS (Regular Expression Denial of Service):</strong> Malicious payload causes excessive CPU usage</li>
      <li><strong>Privilege Escalation:</strong> Manipulate serialized session objects to gain elevated access</li>
      <li><strong>Data Tampering:</strong> Modify serialized objects to bypass business logic</li>
    </ul>

    <h4>Prevention Strategies</h4>
    <ol>
      <li><strong>Never deserialize untrusted data:</strong> The only guaranteed prevention</li>
      <li><strong>Use safe serialization formats:</strong>
        <ul>
          <li>Prefer <strong>JSON</strong> over native serialization (pickle, Java serialization)</li>
          <li>JSON doesn't support arbitrary object instantiation</li>
        </ul>
      </li>
      <li><strong>If native serialization is required:</strong>
        <ul>
          <li>Implement integrity checks (HMAC signatures on serialized data)</li>
          <li>Use allowlists for acceptable deserializable classes</li>
          <li>Run deserialization in a low-privilege sandbox</li>
        </ul>
      </li>
      <li><strong>For PHP:</strong> Avoid <code>unserialize()</code> with user data; use <code>json_decode()</code> instead</li>
      <li><strong>For Python:</strong> Never use <code>pickle.loads()</code> on untrusted data</li>
      <li><strong>Monitor for exploitation:</strong> Detect unusual class instantiation patterns</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 Notable Incident</div>
      <p>The <strong>Apache Commons Collections</strong> vulnerability (CVE-2015-4852) demonstrated how a library's deserialization could be weaponized for RCE. It was exploited globally and led to the creation of tools like <strong>ysoserial</strong> for demonstrating deserialization risks.</p>
    </div>
  `,

  v3c22: `
    <h3>Race Conditions</h3>
    <p>
      <strong>Race Conditions</strong> (also called <strong>Time-of-Check to Time-of-Use / TOCTOU</strong> vulnerabilities) occur when the behavior of a system depends on the <strong>timing or sequence of events</strong> in an unexpected way. Attackers exploit the gap between checking a condition and using a resource.
    </p>

    <h4>Common Race Condition Scenarios</h4>
    <table>
      <thead>
        <tr><th>Scenario</th><th>Vulnerability</th><th>Real-World Example</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Double Spending</strong></td>
          <td>Using the same funds/coupon twice before balance updates</td>
          <td>Transferring $100 while simultaneously transferring $100 (total: $200 from $100 balance)</td>
        </tr>
        <tr>
          <td><strong>TOCTOU File Access</strong></td>
          <td>Checking file permissions, then accessing the file after permissions change</td>
          <td>Symbolic link attack between check and use</td>
        </tr>
        <tr>
          <td><strong>Sign-up/Login Race</strong></td>
          <td>Creating duplicate accounts or gaining access during registration</td>
          <td>Registering with same email on two threads</td>
        </tr>
      </tbody>
    </table>

    <h4>Prevention Strategies</h4>
    <ol>
      <li><strong>Atomic operations:</strong> Use database transactions with proper isolation levels (serializable or repeatable read)</li>
      <li><strong>Database-level constraints:</strong> Use unique constraints, check constraints, and row-level locks</li>
      <li><strong>Optimistic locking:</strong> Use version columns (<code>updated_at</code>, <code>version</code>) to detect concurrent modifications</li>
      <li><strong>Advisory locks:</strong> Use database advisory locks (PostgreSQL) or distributed locks (Redis Redlock)</li>
      <li><strong>Idempotency:</strong> Design operations to be safely repeatable using idempotency keys</li>
      <li><strong>Avoid check-then-act:</strong> Combine check and action into a single atomic operation</li>
    </ol>

    <h4>Code Example: Secure Funds Transfer</h4>
    <pre><code>
// ❌ VULNERABLE — Non-atomic check-then-act
if (account.balance >= amount) {
  account.balance -= amount;  // Race condition here!
  save(account);
}

// ✅ SECURE — Atomic database operation
const result = await db.query(
  'UPDATE accounts SET balance = balance - $1 WHERE id = $2 AND balance >= $1',
  [amount, accountId]
);

if (result.rowCount === 0) {
  throw new Error('Insufficient funds or concurrent modification');
}
</code></pre>

    <div class="info-box">
      <div class="info-title">💡 Testing Race Conditions</div>
      <p>Race conditions are hard to find with traditional testing. Use tools like <strong>ThreadSanitizer</strong>, <strong>Burp Suite intruder with multiple threads</strong>, or custom scripts that fire simultaneous requests. Focus on high-value operations: payments, transfers, registrations, and inventory updates.</p>
    </div>
  `,

  v3c23: `
    <h3>Business Logic Flaws</h3>
    <p>
      <strong>Business Logic Flaws</strong> (also called <strong>Business Logic Vulnerabilities</strong>) are defects in an application's <strong>workflow or business rules</strong> that allow attackers to manipulate intended functionality for unintended outcomes. Unlike technical vulnerabilities (SQL injection, XSS), these exploit the <strong>logic of how the application should work</strong>.
    </p>

    <h4>Why They're Dangerous</h4>
    <ul>
      <li><strong>No signature:</strong> WAFs and scanners can't detect logic flaws — they look like normal traffic</li>
      <li><strong>High impact:</strong> Can result in financial loss, data breaches, or complete system compromise</li>
      <li><strong>Hard to find:</strong> Require deep understanding of business functionality to identify</li>
      <li><strong>No automated detection:</strong> Cannot be found by SAST/DAST tools alone</li>
    </ul>

    <h4>Common Business Logic Attack Patterns</h4>
    <table>
      <thead>
        <tr><th>Pattern</th><th>Description</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Workflow Bypass</strong></td><td>Skipping required steps in a process</td><td>Going directly to payment confirmation without adding items to cart</td></tr>
        <tr><td><strong>Negative Quantities</strong></td><td>Entering negative values to add funds or reverse charges</td><td>Transferring -$100 removes money from target account and adds to attacker's</td></tr>
        <tr><td><strong>Integer Overflow</strong></td><td>Exceeding max integer values</td><td>Ordering 2147483647 items at $0.01 causing negative total</td></tr>
        <tr><td><strong>Promo/Coupon Abuse</strong></td><td>Exploiting discount codes or loyalty points</td><td>Stacking multiple coupons, resetting referral bonuses</td></tr>
        <tr><td><strong>Authorization Bypass</strong></td><td>Changing parameters to access unauthorized functions</td><td>Changing ?action=view to ?action=delete in URL</td></tr>
        <tr><td><strong>Timing Exploitation</strong></td><td>Abusing time-based processes</td><td>Changing timezone to extend promo periods, speed-running auctions</td></tr>
      </tbody>
    </table>

    <h4>Famous Examples</h4>
    <ul>
      <li><strong>Air Canada (2018):</strong> Attackers exploited authentication logic to access 20,000 user accounts</li>
      <li><strong>Starbucks (2015):</strong> Race condition allowed balance manipulation through concurrent transfers</li>
      <li><strong>PayPal (Multiple):</strong> Repeated logic flaws allowing payment manipulation</li>
    </ul>

    <h4>Prevention</h4>
    <ol>
      <li><strong>Server-side validation:</strong> Never trust client-side logic; re-validate all business rules server-side</li>
      <li><strong>Threat modeling:</strong> Map out all business workflows and identify manipulation points</li>
      <li><strong>Input boundaries:</strong> Define and enforce minimum/maximum values for all numeric inputs</li>
      <li><strong>State management:</strong> Track workflow state server-side; don't allow skipping steps</li>
      <li><strong>Manual testing & pentesting:</strong> Logic flaws require human creativity to discover</li>
      <li><strong>Fuzzing:</strong> Test unexpected inputs (negative numbers, zero, extremely large values)</li>
    </ol>
  `,

  v3c24: `
    <h3>Information Disclosure</h3>
    <p>
      <strong>Information Disclosure</strong> (also called <strong>Information Leakage</strong>) occurs when an application <strong>reveals sensitive information</strong> to users who should not have access to it. This can include anything from detailed error messages and stack traces to API keys and internal IP addresses.
    </p>

    <h4>Common Information Disclosure Vectors</h4>
    <table>
      <thead>
        <tr><th>Vector</th><th>Example</th><th>Information Leaked</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Verbose Error Messages</strong></td><td>Stack traces, SQL errors shown to users</td><td>Database schema, file paths, library versions</td></tr>
        <tr><td><strong>HTTP Headers</strong></td><td><code>X-Powered-By: PHP/7.4</code>, <code>Server: Apache/2.4</code></td><td>Technology stack, versions</td></tr>
        <tr><td><strong>HTML Comments</strong></td><td><code>&lt;!-- TODO: fix auth bypass --&gt;</code></td><td>Developer notes, vulnerabilities</td></tr>
        <tr><td><strong>API Responses</strong></td><td>Excessive data in JSON responses</td><td>Internal IDs, database fields, relationships</td></tr>
        <tr><td><strong>Debug/Admin Pages</strong></td><td><code>/debug</code>, <code>/phpinfo.php</code>, <code>/actuator</code></td><td>Full system configuration, environment variables</td></tr>
        <tr><td><strong>Source Code Exposure</strong></td><td><code>.git/</code>, <code>.env</code>, <code>.DS_Store</code></td><td>Full source code, credentials, configuration</td></tr>
        <tr><td><strong>Auto-Complete</strong></td><td>Browser autocomplete on login forms</td><td>Usernames, email addresses</td></tr>
        <tr><td><strong>Timing Attacks</strong></td><td>Different response times for valid/invalid inputs</td><td>Valid usernames, password characters</td></tr>
      </tbody>
    </table>

    <h4>Prevention Checklist</h4>
    <ol>
      <li><strong>Use generic error messages:</strong> "An error occurred" — log details server-side for debugging</li>
      <li><strong>Strip HTTP headers:</strong> Remove <code>X-Powered-By</code>, <code>Server</code>, <code>X-AspNet-Version</code></li>
      <li><strong>Remove debug endpoints:</strong> Never deploy admin/debug pages in production</li>
      <li><strong>Block sensitive paths:</strong>
        <ul>
          <li><code>/.git/</code>, <code>/.env</code>, <code>/backup/</code>, <code>/node_modules/</code></li>
          <li>Add to web server deny rules</li>
        </ul>
      </li>
      <li><strong>Minimize API responses:</strong> Only return fields the client needs (field selection/serialization)</li>
      <li><strong>Disable autocomplete:</strong> Use <code>autocomplete="off"</code> on sensitive form fields</li>
      <li><strong>Implement rate limiting:</strong> Prevent username enumeration via timing differences</li>
      <li><strong>Regular audits:</strong> Periodically scan for information leakage using tools like <strong>OWASP Amass</strong>, <strong>Waybackurls</strong>, <strong>Gau</strong></li>
    </ol>

    <div class="warning-box">
      <div class="warning-title">⚠️ The .git Exposure Problem</div>
      <p>Exposed <code>.git</code> directories have caused major breaches. Tools like <strong>GitTools</strong> and <strong>dvcs-ripper</code> can reconstruct entire repositories from exposed .git folders. Ensure your web server blocks access to <code>/.git/*</code> and never commit sensitive files.</p>
    </div>
  `,

  v3c25: `
    <h3>JWT (JSON Web Token) Attacks</h3>
    <p>
      <strong>JSON Web Tokens (JWTs)</strong> are widely used for authentication and authorization. However, <strong>improperly implemented JWT handling</strong> can lead to critical vulnerabilities including authentication bypass and privilege escalation.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: JWT ≠ Session Token</div>
      <p>JWTs are <strong>self-contained tokens</strong> — all claims are encoded (not encrypted by default). Anyone can decode a JWT to read its contents. The signature only proves it was <strong>issued by the server</strong>, not that it's secret. Never store sensitive data in JWT payloads.</p>
    </div>

    <h4>JWT Attacks</h4>
    <table>
      <thead>
        <tr><th>Attack</th><th>Description</th><th>Impact</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Algorithm Confusion</strong></td>
          <td>Changing <code>alg</code> from RS256 to HS256, then signing with the public key as if it were an HMAC secret</td>
          <td>Authentication bypass</td>
        </tr>
        <tr>
          <td><strong>"None" Algorithm</strong></td>
          <td>Setting <code>alg: "none"</code> to bypass signature verification entirely</td>
          <td>Complete authentication bypass</td>
        </tr>
        <tr>
          <td><strong>Weak Secret Key</strong></td>
          <td>Brute-forcing the HMAC secret if it's too short</td>
          <td>Token forgery</td>
        </tr>
        <tr>
          <td><strong>Token Expiration Bypass</strong></td>
          <td>Manipulating <code>exp</code>, <code>nbf</code>, or <code>iat</code> claims</td>
          <td>Persistent access</td>
        </tr>
        <tr>
          <td><strong>Claim Injection</strong></td>
          <td>Adding <code>isAdmin: true</code> or modifying roles in the payload</td>
          <td>Privilege escalation</td>
        </tr>
        <tr>
          <td><strong>Key Injection</strong></td>
          <td>Providing attacker-controlled key via <code>jku</code> or <code>kid</code> headers</td>
          <td>Signature bypass</td>
        </tr>
      </tbody>
    </table>

    <h4>JWT Best Practices</h4>
    <ol>
      <li><strong>Always verify the algorithm:</strong> Explicitly specify expected algorithm(s); reject mismatches</li>
      <li><strong>Reject "none" algorithm:</strong> <code>if (token.alg === 'none') reject()</code></li>
      <li><strong>Use strong algorithms:</strong> Prefer <strong>RS256</strong> (asymmetric) over HS256 (symmetric) when possible</li>
      <li><strong>Use strong secret keys:</strong> Minimum 256-bit random key for HMAC; use a secrets manager</li>
      <li><strong>Validate all claims:</strong> Check <code>exp</code>, <code>nbf</code>, <code>iss</code>, <code>aud</code>, <code>iat</code></li>
      <li><strong>Use short expiration:</strong> 15-30 minutes for access tokens; use refresh tokens for longer sessions</li>
      <li><strong>Implement token revocation:</strong> Maintain a blocklist or use token versioning in the database</li>
      <li><strong>Don't store sensitive data:</strong> JWT payloads are encoded (base64), not encrypted</li>
    </ol>

    <h4>Secure JWT Validation Example</h4>
    <pre><code>
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

const client = jwksClient({
  jwksUri: 'https://auth.example.com/.well-known/jwks.json'
});

function getKey(header, callback) {
  client.getSigningKey(header.kid, (err, key) => {
    callback(null, key.publicKey);
  });
}

function verifyToken(token) {
  return jwt.verify(token, getKey, {
    algorithms: ['RS256'],       // Whitelist allowed algorithms
    audience: 'my-app',          // Validate audience
    issuer: 'https://auth.example.com',  // Validate issuer
    clockTolerance: 30           // 30 second tolerance
  });
}
</code></pre>
  `,

  v3c26: `
    <h3>OAuth Vulnerabilities</h3>
    <p>
      <strong>OAuth 2.0</strong> is the industry-standard protocol for authorization, but <strong>misimplementations</strong> are extremely common and can lead to <strong>account takeover, authorization bypass, and data theft</strong>.
    </p>

    <div class="warning-box">
      <div class="warning-title">⚠️ OAuth is Hard</div>
      <p>Even major platforms have had critical OAuth vulnerabilities. In 2020, a flaw in Facebook's OAuth implementation allowed account takeover. In 2022, a vulnerability in the OAuth implementation of several platforms (dubbed <strong>"Faster-than-the-speed-of-OAuth"</strong>) allowed token theft.</p>
    </div>

    <h4>Common OAuth Vulnerabilities</h4>
    <table>
      <thead>
        <tr><th>Vulnerability</th><th>Description</th><th>Impact</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Open Redirect</strong></td><td>Redirect_uri can be manipulated to attacker's domain</td><td>Authorization code interception</td></tr>
        <tr><td><strong>Missing PKCE</strong></td><td>No code verifier in public clients (SPAs, mobile apps)</td><td>Authorization code interception</td></tr>
        <tr><td><strong>CSRF in OAuth Flow</strong></td><td>No state parameter validation</td><td>Account linking attacks</td></tr>
        <tr><td><strong>Scope Escalation</strong></td><td>Client requests more permissions than needed</td><td>Excessive data access</td></tr>
        <tr><td><strong>Token Leakage in Logs/URLs</strong></td><td>Access tokens in browser history, server logs, or referrer headers</td><td>Token theft</td></tr>
        <tr><td><strong>Implicit Flow Usage</strong></td><td>Using deprecated implicit flow instead of auth code flow</td><td>Token exposure</td></tr>
        <tr><td><strong>Refresh Token Misuse</strong></td><td>No rotation, no binding to client, long lifetimes</td><td>Persistent unauthorized access</td></tr>
      </tbody>
    </table>

    <h4>OAuth Security Best Practices</h4>
    <ol>
      <li><strong>Always use Authorization Code Flow + PKCE:</strong>
        <ul>
          <li>Generate a <code>code_verifier</code> (cryptographically random, 43-128 chars)</li>
          <li>Create <code>code_challenge = SHA256(code_verifier)</code></li>
          <li>Send challenge in authorization request; send verifier in token request</li>
        </ul>
      </li>
      <li><strong>Validate redirect_uri strictly:</strong> Exact match against a pre-registered allowlist</li>
      <li><strong>Use the state parameter:</strong> Generate per-request, validate on callback to prevent CSRF</li>
      <li><strong>Use short-lived access tokens:</strong> 5-15 minutes; use refresh tokens for longer sessions</li>
      <li><strong>Implement refresh token rotation:</strong> Issue new refresh token with each use; invalidate old one</li>
      <li><strong>Bind tokens to client:</strong> Use <code>client_id</code> binding, DPoP (Demonstrating Proof of Possession)</li>
      <li><strong>Request minimal scopes:</strong> Follow the principle of least privilege</li>
    </ol>

    <h4>PKCE Flow</h4>
    <pre><code>
Client                          Authorization Server
  │                                    │
  │  Authorization Request             │
  │  + code_challenge                  │
  │  + code_challenge_method=S256      │
  │──────────────────────────────────▶│
  │                                    │
  │◀──────────────────────────────────│
  │  Authorization Code                │
  │                                    │
  │  Token Request                     │
  │  + code                            │
  │  + code_verifier (original)        │
  │──────────────────────────────────▶│
  │                                    │
  │◀──────────────────────────────────│
  │  Access Token                      │
</code></pre>
  `,

  v3c27: `
    <h3>GraphQL Security</h3>
    <p>
      <strong>GraphQL</strong> is a powerful query language for APIs, but its flexibility introduces unique security challenges. The ability for clients to <strong>define their own queries</strong> means attackers can craft requests that <strong>expose more data or consume more resources</strong> than intended.
    </p>

    <h4>Common GraphQL Vulnerabilities</h4>
    <table>
      <thead>
        <tr><th>Vulnerability</th><th>Description</th><th>Risk</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Introspection Leakage</strong></td><td>Full schema exposed, revealing all types, fields, mutations</td><td>Medium — Reconnaissance for further attacks</td></tr>
        <tr><td><strong>Nested Query Attacks (Batching)</strong></td><td>Deeply nested queries causing exponential database lookups (e.g., <code>author.posts.comments.author.posts...→</code>)</td><td>High — DoS</td></tr>
        <tr><td><strong>Field Suggestions Enabled</strong></td><td>Error messages reveal valid field names when invalid fields are queried</td><td>Medium — Information disclosure</td></tr>
        <tr><td><strong>Missing Authorization</strong></td><td>Authorization only at the resolver level, not on every field</td><td>High — Data exposure</td></tr>
        <tr><td><strong>Insecure Direct Object Reference</strong></td><td>GraphQL IDs are often predictable integers or base64-encoded IDs</td><td>High — Unauthorized data access</td></tr>
        <tr><td><strong>Mutation Abuse</strong></td><td>Creating/updating/deleting data without proper validation</td><td>High — Data manipulation</td></tr>
      </tbody>
    </table>

    <h4>GraphQL Security Best Practices</h4>
    <ol>
      <li><strong>Disable introspection in production:</strong> Or restrict it to authenticated developers</li>
      <li><strong>Set query depth limits:</strong> Limit nesting depth (e.g., max 5 levels)</li>
      <li><strong>Implement query complexity analysis:</strong> Assign cost to fields and reject queries exceeding a threshold</li>
      <li><strong>Add rate limiting:</strong> Per-user, per-IP, and per-query-type limits</li>
      <li><strong>Authorization on every resolver:</strong> Don't rely on query-level auth; check permissions for each field</li>
      <li><strong>Use persisted queries:</strong> Only allow pre-registered queries to prevent arbitrary query execution</li>
      <li><strong>Validate input:</strong> GraphQL's type system is not a substitute for input validation</li>
      <li><strong>Batch query limits:</strong> Restrict the number of queries allowed in a single request</li>
    </ol>

    <h4>Popular Security Tools</h4>
    <ul>
      <li><strong>GraphQL Armor:</strong> Middleware adding depth limiting, cost analysis, and rate limiting</li>
      <li><strong>InQL:</strong> Burp Suite extension for GraphQL security testing</li>
      <li><strong>graphql-copilot:</strong> Automated GraphQL security testing</li>
      <li><strong>Batch Query Limiter:</strong> Restrict batch query counts per request</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Persisted Queries as a Security Layer</div>
      <p><strong>Persisted queries</strong> are one of the most effective GraphQL security measures. The client sends a query hash instead of the full query text. The server only executes queries that are in its pre-approved registry. This prevents attackers from crafting arbitrary queries, including deep nesting attacks and field probing.</p>
    </div>
  `,

  v3c28: `
    <h3>WebSocket Security</h3>
    <p>
      <strong>WebSocket</strong> provides <strong>full-duplex communication</strong> over a single TCP connection, widely used for real-time applications (chat, gaming, live feeds, financial trading). However, WebSocket connections often bypass traditional HTTP security controls and introduce unique attack surfaces.
    </p>

    <h4>How WebSocket Differs from HTTP Security</h4>
    <ul>
      <li><strong>Long-lived connections:</strong> Unlike HTTP's request-response model, WebSockets maintain open connections — increasing the window for exploitation</li>
      <li><strong>No same-origin policy in the browser:</strong> The WebSocket API doesn't enforce SOP by default</li>
      <li><strong>No built-in authentication:</strong> WebSocket handshake uses HTTP headers, but many implementations skip authentication</li>
      <li><strong>Unrestricted message size:</strong> Messages can be arbitrarily large unless explicitly limited</li>
    </ul>

    <h4>Common WebSocket Vulnerabilities</h4>
    <table>
      <thead>
        <tr><th>Vulnerability</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Unauthenticated Connections</strong></td><td>WebSocket connections established without authentication</td></tr>
        <tr><td><strong>Cross-Site WebSocket Hijacking (CSWSH)</strong></td><td>Attacker's page opens WebSocket to internal app using victim's cookies</td></tr>
        <tr><td><strong>Denial of Service</strong></td><td>Flooding server with messages or opening many connections</td></tr>
        <tr><td><strong>Injection via Messages</strong></td><td>SQL/command injection through WebSocket messages</td></tr>
        <tr><td><strong>Sensitive Data in Messages</strong></td><td>PII, tokens, or secrets transmitted in plaintext WebSocket messages</td></tr>
        <tr><td><strong>Missing Input Validation</strong></td><td>Server trusts and processes malformed messages without validation</td></tr>
      </tbody>
    </table>

    <h4>Cross-Site WebSocket Hijacking (CSWSH)</h4>
    <p>This is a critical and often overlooked vulnerability:</p>
    <pre><code>
// Attacker's page
const ws = new WebSocket("wss://vulnerable-app.com/ws");
ws.onmessage = (event) =&gt; {
  // Steal sensitive data from WebSocket messages
  exfiltrate(event.data);
};
// Since the browser sends cookies with the WebSocket handshake,
// the server treats this as an authenticated connection
</code></pre>

    <h4>WebSocket Security Best Practices</h4>
    <ol>
      <li><strong>Authenticate during handshake:</strong> Validate tokens/sessions in the WebSocket upgrade request before accepting the connection</li>
      <li><strong>Validate origin header:</strong> Check the <code>Origin</code> header against an allowlist on the server</li>
      <li><strong>Use WSS (WebSocket Secure):</strong> Always use <code>wss://</code> (TLS), never <code>ws://</code></li>
      <li><strong>Validate all messages:</strong> Treat WebSocket messages like any other untrusted input — validate, sanitize, and enforce size limits</li>
      <li><strong>Implement rate limiting:</strong> Limit message frequency and connection count per client</li>
      <li><strong>Close idle connections:</strong> Implement heartbeat/ping-pong and close stale connections</li>
      <li><strong>Use message encryption:</strong> For sensitive data, add an additional encryption layer on top of TLS</li>
    </ol>

    <h4>Securing Socket.IO (Common WebSocket Library)</h4>
    <pre><code>
const io = require('socket.io')(server, {
  cors: {
    origin: ['https://trusted-domain.com'],  // Restrict origins
    credentials: false
  },
  maxHttpBufferSize: 1e6,                    // Limit message size
  pingTimeout: 60000,                        // Timeout idle connections
  transports: ['websocket']                  // Force WebSocket, no polling fallback
});

io.use((socket, next) =&gt; {
  const token = socket.handshake.auth.token;
  if (!verifyToken(token)) return next(new Error('Unauthorized'));
  next();
});
</code></pre>
  `,

  // ==========================================
  // SECTION 4: TESTING & TOOLS
  // ==========================================

  v3c29: `
    <h3>Burp Suite</h3>
    <p>
      <strong>Burp Suite</strong> is the industry-standard <strong>web application security testing platform</strong> developed by PortSwigger. It provides a comprehensive toolkit for finding and exploiting web application vulnerabilities through its integrated proxy, scanner, intruder, repeater, and other tools.
    </p>

    <h4>Burp Suite Components</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Function</th><th>Use Case</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Proxy</strong></td><td>Intercepts HTTP/S traffic between browser and server</td><td>Manual testing, traffic inspection, modifying requests</td></tr>
        <tr><td><strong>Repeater</strong></td><td>Repeats and modifies individual HTTP requests</td><td>Manual exploitation, parameter tampering</td></tr>
        <tr><td><strong>Intruder</strong></td><td>Automated customized attacks (fuzzing)</td><td>Brute force, parameter fuzzing, enumeration</td></tr>
        <tr><td><strong>Scanner</strong></td><td>Automated vulnerability scanning (Pro only)</td><td>Passive and active scanning for vulnerabilities</td></tr>
        <tr><td><strong>Sequencer</strong></td><td>Analyzes randomness of session tokens</td><td>Session prediction attacks</td></tr>
        <tr><td><strong>Decoder</strong></td><td>Encodes/decodes data in various formats</td><td>URL encoding, base64, hash analysis</td></tr>
        <tr><td><strong>Comparer</strong></td><td>Compares two HTTP requests/responses</td><td>Differential analysis of responses</td></tr>
        <tr><td><strong>Collaborator</strong></td><td>External network service for out-of-band testing</td><td>Blind SSRF, blind injection detection</td></tr>
      </tbody>
    </table>

    <h4>Getting Started</h4>
    <ol>
      <li><strong>Configure browser proxy:</strong> Set browser to use Burp proxy (127.0.0.1:8080)</li>
      <li><strong>Install Burp CA certificate:</strong> Required for intercepting HTTPS traffic</li>
      <li><strong>Spider the target:</strong> Use the spider to map out application endpoints</li>
      <li><strong>Active scan:</strong> Run automated vulnerability detection</li>
      <li><strong>Manual testing:</strong> Use Repeater and Intruder for targeted testing</li>
    </ol>

    <h4>Burp Suite Editions</h4>
    <ul>
      <li><strong>Community Edition:</strong> Free — includes Proxy, Repeater, Intruder (limited), Decoder, Comparer</li>
      <li><strong>Professional:</strong> Paid (~$400/year) — adds active Scanner, Collaborator, advanced Intruder</li>
      <li><strong>Enterprise:</strong> Paid — adds scan queue, multiple scan configurations, CI/CD integration</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Burp Bounty Extensions</div>
      <p>Enhance Burp with community extensions from BApp Store:<br>
      <strong>403 Blocker</strong> (auto-retry with different headers), <strong>Logger++</strong> (enhanced logging), <strong>Autorize</strong> (authorization testing), <strong>Turbo Intruder</strong> (high-speed fuzzing)</p>
    </div>
  `,

  v3c30: `
    <h3>OWASP ZAP</h3>
    <p>
      <strong>OWASP ZAP (Zed Attack Proxy)</strong> is a free, open-source web application security scanner. It is one of the <strong>most popular DAST tools</strong> in the world, maintained by a dedicated community of volunteers under the OWASP umbrella.
    </p>

    <h4>ZAP Features</h4>
    <ul>
      <li><strong>Automated Scanner:</strong> Automatically finds security vulnerabilities in web applications</li>
      <li><strong>Spider:</strong> Discovers URIs by crawling web applications</li>
      <li><strong>Proxy:</strong> Intercepts and modifies web traffic (similar to Burp)</li>
      <li><strong>Fuzzer:</strong> Tests application inputs for vulnerabilities</li>
      <li><strong>WebSocket Support:</strong> Intercept and test WebSocket connections</li>
      <li><strong>REST API:</strong> Full programmatic control via API</li>
      <li><strong>Scripting:</strong> Write custom scanners and rules in JavaScript, Groovy, or Zest</li>
    </ul>

    <h4>ZAP vs. Burp Suite</h4>
    <table>
      <thead>
        <tr><th>Feature</th><th>OWASP ZAP</th><th>Burp Suite Pro</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Cost</strong></td><td>Free / Open Source</td><td>Paid (~$400/year)</td></tr>
        <tr><td><strong>Active Scanning</strong></td><td>Good — extensible with add-ons</td><td>Excellent — comprehensive</td></tr>
        <tr><td><strong>Passive Scanning</strong></td><td>Excellent — runs by default</td><td>Excellent</td></tr>
        <tr><td><strong>CI/CD Integration</strong></td><td>Excellent — Docker, API-based</td><td>Good — Enterprise only</td></tr>
        <tr><td><strong>Ease of Use</strong></td><td>Good but more complex UI</td><td>More intuitive</td></tr>
        <tr><td><strong>Community</strong></td><td>Large open-source community</td><td>Commercial support</td></tr>
      </tbody>
    </table>

    <h4>Using ZAP in CI/CD</h4>
    <pre><code>
# Run ZAP baseline scan via Docker
docker run -t owasp/zap2docker-stable \
  zap-baseline.py \
  -t https://your-app.com \
  -r testreport.html \
  -I  # Ignore warnings, exit 0

# Full scan via API
zap-cli quick-scan --self-contained --start-options '-config api.disablekey=true' \
  https://your-app.com
</code></pre>

    <div class="info-box">
      <div class="info-title">💡 ZAP Baseline Scan</div>
      <p>The <strong>ZAP Baseline Scan</strong> is a quick, passive scan designed for CI/CD pipelines. It runs quickly with minimal false positives and is an excellent first step for integrating DAST into your build process. Run it on staging environments before every deployment.</p>
    </div>
  `,

  v3c31: `
    <h3>Static Analysis (SAST)</h3>
    <p>
      <strong>Static Application Security Testing (SAST)</strong> analyzes <strong>source code, bytecode, or binaries</strong> without executing the program. It identifies vulnerabilities by applying rules and patterns to the code, catching issues early in the development process — often in the developer's IDE or CI pipeline.
    </p>

    <h4>How SAST Works</h4>
    <ol>
      <li><strong>Parsing:</strong> The tool parses source code into an Abstract Syntax Tree (AST)</li>
      <li><strong>Analysis:</strong> Applies security rules, data flow analysis, and taint analysis</li>
      <li><strong>Reporting:</strong> Generates findings with severity ratings, locations, and remediation guidance</li>
    </ol>

    <h4>Popular SAST Tools</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Language Support</th><th>Type</th><th>Cost</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Semgrep</strong></td><td>30+ languages</td><td>Open-source + Enterprise</td><td>Free / Paid tiers</td></tr>
        <tr><td><strong>SonarQube / SonarCloud</strong></td><td>30+ languages</td><td>Commercial</td><td>Community (free) / Developer+ (paid)</td></tr>
        <tr><td><strong>Checkmarx</strong></td><td>30+ languages</td><td>Commercial</td><td>Enterprise pricing</td></tr>
        <tr><td><strong>CodeQL (GitHub)</strong></td><td>Multiple languages</td><td>Semantic analysis engine</td><td>Free for public repos / Copilot subscribers</td></tr>
        <tr><td><strong>SpotBugs (Java)</strong></td><td>Java</td><td>Open-source successor to FindBugs</td><td>Free</td></tr>
        <tr><td><strong>Bandit</strong></td><td>Python</td><td>Open-source</td><td>Free</td></tr>
        <tr><td><strong>ESLint Security</strong></td><td>JavaScript/TypeScript</td><td>Plugin</td><td>Free</td></tr>
      </tbody>
    </table>

    <h4>SAST in CI/CD Pipeline</h4>
    <pre><code>
# Example: Semgrep in CI (GitHub Actions)
- name: Semgrep Scan
  uses: returntocorp/semgrep-action@v1
  with:
    config: >-
      p/owasp-top-ten
      p/security-audit
  env:
    SEMGREP_APP_TOKEN: \${{ secrets.SEMGREP_TOKEN }}

# Example: SonarQube Scanner
- name: SonarQube Scan
  run: sonar-scanner \
    -Dsonar.projectKey=myproject \
    -Dsonar.sources=. \
    -Dsonar.host.url=\${{ secrets.SONAR_HOST }} \
    -Dsonar.login=\${{ secrets.SONAR_TOKEN }}
</code></pre>

    <h4>SAST Best Practices</h4>
    <ul>
      <li><strong>Run on every PR:</strong> Catch issues before they merge</li>
      <li><strong>Configure rules carefully:</strong> Start with OWASP Top 10 rules, expand gradually</li>
      <li><strong>Suppress false positives:</strong> Annotate code with suppression comments when safe</li>
      <li><strong>Track findings over time:</strong> Dashboard metrics for trend analysis</li>
      <li><strong>Fix SAST findings first:</strong> Before adding more rules, address existing findings</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 SAST vs. SCA</div>
      <p><strong>SAST</strong> analyzes YOUR code for vulnerabilities. <strong>SCA (Software Composition Analysis)</strong> analyzes YOUR DEPENDENCIES for known vulnerabilities. Both are essential — SAST finds flaws in your logic; SCA finds flaws in the code you didn't write. Use both together.</p>
    </div>
  `,

  v3c32: `
    <h3>Dynamic Analysis (DAST)</h3>
    <p>
      <strong>Dynamic Application Security Testing (DAST)</strong> tests applications <strong>from the outside in</strong> — by sending malicious inputs to a running application and analyzing the responses. DAST tools simulate attacker behavior without requiring access to source code.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Black-Box Security Testing</div>
      <p>DAST treats the application as a <strong>"black box"</strong> — it doesn't need source code or internal knowledge. This makes DAST ideal for testing applications in staging/production and for third-party application assessments.</p>
    </div>

    <h4>How DAST Works</h4>
    <ol>
      <li><strong>Crawl:</strong> Discover application pages, endpoints, and functionality</li>
      <li><strong>Audit:</strong> Send test inputs (fuzzing, injection payloads) to discovered inputs</li>
      <li><strong>Analyze:</strong> Examine responses for indicators of vulnerabilities</li>
      <li><strong>Report:</strong> Categorize findings by severity with reproduction steps</li>
    </ol>

    <h4>DAST Tools</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Description</th><th>Cost</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>OWASP ZAP</strong></td><td>Open-source, comprehensive DAST</td><td>Free</td></tr>
        <tr><td><strong>Burp Suite Pro</strong></td><td>Industry-leading active scanner</td><td>Paid</td></tr>
        <tr><td><strong>Acunetix</strong></td><td>Automated scanner with deep crawling</td><td>Paid</td></tr>
        <tr><td><strong>Nuclei</strong></td><td>Template-based scanner by ProjectDiscovery</td><td>Free (open-source)</td></tr>
        <tr><td><strong>Nikto</strong></td><td>Web server scanner</td><td>Free</td></tr>
        <tr><td><strong>Arachni</strong></td><td>Ruby-based web app scanner</td><td>Free</td></tr>
      </tbody>
    </table>

    <h4>DAST Best Practices</h4>
    <ul>
      <li><strong>Test in staging:</strong> Run DAST against staging environments first — not production</li>
      <li><strong>Authenticate:</strong> Most vulnerabilities require authenticated access; test as different user roles</li>
      <li><strong>Combine with crawling:</strong> Use both automated crawling and manual endpoint testing</li>
      <li><strong>Configure scope:</strong> Define what's in-scope to avoid scanning third-party domains</li>
      <li><strong>Manage false positives:</strong> Review and triage findings — DAST tools are notorious for false positives</li>
      <li><strong>Schedule regular scans:</strong> Run DAST at least monthly and after major releases</li>
    </ul>

    <h4>DAST Limitations</h4>
    <ul>
      <li>Cannot find vulnerabilities in code paths not exposed through the interface</li>
      <li>May miss business logic flaws that require domain knowledge</li>
      <li>Limited visibility into internal data flows and logic</li>
      <li>Can produce false negatives (miss real vulnerabilities)</li>
      <li>May be slow for large applications</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Nucli — Modern DAST</div>
      <p><strong>Nuclei</strong> uses a template-based approach where the community contributes thousands of vulnerability detection templates. It's extremely fast (uses concurrent requests), highly customizable, and free. The template library covers OWASP Top 10, CWEs, misconfigurations, and exposure detection.</p>
    </div>
  `,

  v3c33: `
    <h3>Interactive Testing (IAST)</h3>
    <p>
      <strong>Interactive Application Security Testing (IAST)</strong> combines elements of both <strong>SAST and DAST</strong> by instrumenting the application runtime. IAST agents are deployed within the application, allowing the tool to <strong>monitor code execution in real time</strong> as functional tests or DAST probes are run against the application.
    </p>

    <h4>How IAST Works</h4>
    <pre><code>
┌─────────────────────────────────────────┐
│           Application Runtime           │
│  ┌──────────────────────────────────┐   │
│  │  IAST Agent (Instrumented)       │   │
│  │  ├─ Monitors data flow           │   │
│  │  ├─ Tracks taint propagation     │   │
│  │  ├─ Hooks into function calls    │   │
│  │  └─ Reports vulnerabilities       │   │
│  └──────────────────────────────────┘   │
│         ▲                               │
│         │ Test traffic                   │
│  ┌──────┴──────────────────────┐        │
│  │  DAST Scanner / Test Runner │        │
│  └─────────────────────────────┘        │
└─────────────────────────────────────────┘
</code></pre>

    <h4>IAST Advantages</h4>
    <table>
      <thead>
        <tr><th>Advantage</th><th>Details</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>High accuracy</strong></td><td>Very low false positive rate (1-5%) because it sees runtime execution</td></tr>
        <tr><td><strong>Real-time detection</strong></td><td>Vulnerabilities detected as they're exercised during testing</td></tr>
        <tr><td><strong>Code-level detail</strong></td><td>Shows exact line numbers and data flow paths — like SAST</td></tr>
        <tr><td><strong>Continuous testing</strong></td><td>Can run in staging/production continuously</td></tr>
        <tr><td><strong>Coverage</strong></td><td>Tests all code paths reached during functional/DAST testing</td></tr>
      </tbody>
    </table>

    <h4>IAST Tools</h4>
    <ul>
      <li><strong>Contrast Security:</strong> Leading commercial IAST with runtime protection</li>
      <li><strong>Hdiv Detection:</strong> Java-focused IAST</li>
      <li><strong>Seeker (Synopsys):</strong> IAST integrated into Black Duck</li>
      <li><strong>HPE Security Fortify:</strong> Enterprise application security</li>
    </ul>

    <h4>Use Cases</h4>
    <ul>
      <li><strong>Pre-production testing:</strong> Deploy IAST in staging with automated test suites</li>
      <li><strong>QA integration:</strong> Security testing runs alongside functional QA</li>
      <li><strong>Microservices testing:</strong> IAST agents in sidecar containers</li>
      <li><strong>Continuous monitoring:</strong> Runtime vulnerability detection in production (with RASP)</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 IAST in DevSecOps Pipelines</div>
      <p>IAST is particularly valuable in <strong>DevSecOps pipelines</strong> because it can be triggered automatically during integration tests. As QA tests exercise the application, the IAST agent silently monitors and reports any security issues — no additional scanning step required. This provides <strong>high-accuracy security feedback</strong> with zero additional test infrastructure.</p>
    </div>
  `,

  v3c34: `
    <h3>Penetration Testing</h3>
    <p>
      <strong>Penetration Testing</strong> (also called <strong>pen testing</strong> or <strong>ethical hacking</strong>) is the practice of <strong>simulating real-world cyberattacks</strong> against an application, system, or network to identify exploitable vulnerabilities. Unlike automated scanning, pen testing leverages <strong>human creativity and expertise</strong> to find critical vulnerabilities that tools miss.
    </p>

    <h4>Types of Penetration Testing</h4>
    <table>
      <thead>
        <tr><th>Type</th><th>Description</th><th>Blindness Level</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Black Box</strong></td><td>Tester has no prior knowledge of the target</td><td>Zero knowledge</td></tr>
        <tr><td><strong>White Box</strong></td><td>Tester has full access to source code, architecture, and credentials</td><td>Full knowledge</td></tr>
        <tr><td><strong>Gray Box</strong></td><td>Tester has partial knowledge (e.g., user-level credentials, architecture overview)</td><td>Partial knowledge</td></tr>
        <tr><td><strong>External</strong></td><td>Testing from outside the organization's network</td><td>Internet-facing</td></tr>
        <tr><td><strong>Internal</strong></td><td>Testing from within the organization's network</td><td>Insider threat simulation</td></tr>
      </tbody>
    </table>

    <h4>Penetration Testing Methodology</h4>
    <ol>
      <li>
        <strong>Planning & Reconnaissance:</strong>
        <ul>
          <li>Define scope, rules of engagement, and objectives</li>
          <li>Passive reconnaissance: OSINT, WHOIS, DNS enumeration, Shodan, GitHub recon</li>
          <li>Active reconnaissance: Port scanning, service enumeration, technology fingerprinting</li>
        </ul>
      </li>
      <li>
        <strong>Vulnerability Analysis:</strong>
        <ul>
          <li>Automated scanning (Nessus, Nikto, Nmap)</li>
          <li>Manual verification of automated findings</li>
          <li>Prioritize vulnerabilities by exploitability and impact</li>
        </ul>
      </li>
      <li>
        <strong>Exploitation:</strong>
        <ul>
          <li>Exploit identified vulnerabilities using Metasploit, Burp Suite, custom scripts</li>
          <li>Escalate privileges where possible</li>
          <li>Document proof-of-concept for each finding</li>
        </ul>
      </li>
      <li>
        <strong>Post-Exploitation:</strong>
        <ul>
          <li>Assess the extent of compromise</li>
          <li>Demonstrate data exfiltration paths</li>
          <li>Identify lateral movement opportunities</li>
        </ul>
      </li>
      <li>
        <strong>Reporting:</strong>
        <ul>
          <li>Executive summary for leadership</li>
          <li>Detailed technical findings with reproduction steps</li>
          <li>Risk ratings and remediation recommendations</li>
          <li>Retest schedule</li>
        </ul>
      </li>
    </ol>

    <h4>When to Conduct Pen Tests</h4>
    <ul>
      <li>Before major product launches</li>
      <li>After significant code changes or architecture modifications</li>
      <li>Annually (minimum) or quarterly for high-risk applications</li>
      <li>After infrastructure changes (new firewall, cloud migration)</li>
      <li>To satisfy compliance requirements (PCI DSS, SOC 2, HIPAA, HITRUST)</li>
    </ul>

    <h4>Choosing a Pen Test Provider</h4>
    <p>Key criteria include:</p>
    <ul>
      <li><strong>Certifications:</strong> OSCP, OSCE, GPEN, GWAPT, CREST</li>
      <li><strong>Industry experience:</strong> Familiarity with your technology stack</li>
      <li><strong>Methodology:</strong> Structured approach with clear deliverables</li>
      <li><strong>Report quality:</strong> Actionable findings, not just vulnerability lists</li>
      <li><strong>Retesting:</strong> Willingness to verify fixes</li>
    </ul>
  `,

  v3c35: `
    <h3>Fuzzing</h3>
    <p>
      <strong>Fuzzing</strong> (or <strong>fuzz testing</strong>) is an <strong>automated software testing technique</strong> that involves providing <strong>invalid, unexpected, or random data</strong> as inputs to a program. The goal is to crash the application, trigger unexpected behavior, or reveal security vulnerabilities that might not be found through traditional testing.
    </p>

    <h4>How Fuzzing Works</h4>
    <ol>
      <li><strong>Identify inputs:</strong> Determine what the application accepts (files, network packets, API parameters, forms)</li>
      <li><strong>Generate test cases:</strong> Create malformed, oversized, or unexpected inputs using mutation or generation</li>
      <li><strong>Execute and monitor:</strong> Feed inputs to the target and monitor for crashes, hangs, or unexpected behavior</li>
      <li><strong>Triage:</strong> Analyze crashes to determine if they represent exploitable vulnerabilities</li>
      <li><strong>Develop PoC:</strong> Create a proof-of-concept exploit to demonstrate the vulnerability</li>
    </ol>

    <h4>Types of Fuzzing</h4>
    <table>
      <thead>
        <tr><th>Type</th><th>Approach</th><th>Strengths</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Mutation Fuzzing</strong></td>
          <td>Mutates valid inputs by flipping bits, inserting characters, truncating</td>
          <td>Quick to set up, effective for file parsers</td>
        </tr>
        <tr>
          <td><strong>Generation Fuzzing</strong></td>
          <td>Generates inputs from scratch based on grammar/model of expected input</td>
          <td>More thorough coverage, structured inputs</td>
        </tr>
        <tr>
          <td><strong>Coverage-Guided Fuzzing</strong></td>
          <td>Uses code coverage feedback to guide fuzzing toward unexplored paths</td>
          <td>Most effective — discovers deeper vulnerabilities (AFL, libFuzzer)</td>
        </tr>
        <tr>
          <td><strong>Protocol Fuzzing</strong></td>
          <td>Targets network protocols and file formats</td>
          <td>Finds vulnerabilities in parsers and protocol handlers</td>
        </tr>
      </tbody>
    </table>

    <h4>Popular Fuzzing Tools</h4>
    <table>
      <thead>
        <tr><th>Tool</th><th>Description</th><th>Language</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>AFL (American Fuzzy Lop)</strong></td><td>Coverage-guided fuzzer, highly effective</td><td>C/C++</td></tr>
        <tr><td><strong>libFuzzer</strong></td><td>In-process, coverage-guided fuzzer</td><td>C/C++ (Clang)</td></tr>
        <tr><td><strong>AFL++</strong></td><td>Community fork of AFL with improvements</td><td>C/C++</td></tr>
        <tr><td><strong>Go-Fuzz</strong></td><td>Native Go fuzzing</td><td>Go</td></tr>
        <tr><td><strong>Honggfuzz</strong></td><td>Security-oriented fuzzer</td><td>Multi-language</td></tr>
        <tr><td><strong>Peach Fuzzer</strong></td><td>Smart fuzzer with data models</td><td>Multi-language</td></tr>
        <tr><td><strong>wfuzz</strong></td><td>Web application fuzzer</td><td>Python (web)</td></tr>
      </tbody>
    </table>

    <h4>Notable Fuzzing Discoveries</h4>
    <ul>
      <li><strong>Heartbleed (CVE-2014-0160):</strong> Fuzzing OpenSSL revealed the catastrophic Heartbleed bug</li>
      <li><strong>Chrome Vulnerabilities:</strong> Google's OSS-Fuzz has found thousands of bugs in Chromium and OSS projects</li>
      <li><strong>Windows Kernel:</strong> Microsoft's SAGE fuzzer found critical Windows kernel vulnerabilities</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 Integrating Fuzzing into CI/CD</div>
      <p>Start with <strong>libFuzzer</strong> or <strong>AFL++</strong> for critical parsers and input handlers. Run fuzzing as a nightly or weekly CI job. Set <strong>crash thresholds</strong> that block merges if new crashes are found. Use <strong>cluster fuzzing</strong> (Google ClusterFuzz) for continuous large-scale fuzzing of open-source projects.</p>
    </div>
  `,

  v3c36: `
    <h3>Code Review Tools</h3>
    <p>
      <strong>Code review tools</strong> facilitate the collaborative inspection of source code to find bugs, enforce coding standards, and identify security vulnerabilities. They range from <strong>simple linter integrations</strong> to comprehensive platforms that combine automated analysis with manual review workflows.
    </p>

    <h4>Categories of Code Review Tools</h4>
    <table>
      <thead>
        <tr><th>Category</th><th>Purpose</th><th>Examples</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Linters</strong></td>
        <td>Catch syntax errors, style violations, and suspicious patterns</td>
        <td>ESLint, Pylint, RuboCop, Checkstyle, Go Vet</td>
      </tr>
      <tr><td><strong>SAST Tools</strong></td>
        <td>Deep static analysis for security vulnerabilities</td>
        <td>Semgrep, SonarQube, CodeQL, Checkmarx</td>
      </tr>
      <tr><td><strong>Code Review Platforms</strong></td>
        <td>Collaborative review workflows with commenting</td>
        <td>GitHub PRs, GitLab MRs, Gerrit, Phabricator</td>
      </tr>
      <tr><td><strong>Secret Scanners</strong></td>
        <td>Detect leaked credentials and API keys in code</td>
        <td>GitLeaks, TruffleHog, GitHub Secret Scanning</td>
      </tr>
      <tr><td><strong>SCA Tools</strong></td>
        <td>Analyze dependencies for known vulnerabilities</td>
        <td>Snyk, Dependabot, OWASP Dependency-Check</td>
      </tr>
      <tr><td><strong>Pre-commit Hooks</strong></td>
        <td>Run checks automatically before code is committed</td>
        <td>Husky, pre-commit, lint-staged</td>
      </tr>
    </tbody>
    </table>

    <h4>Recommended Code Review Workflow</h4>
    <pre><code>
Developer Makes Changes
        │
        ▼
  Pre-commit Hooks Run
  (Linting, Secret Scans, Formatting)
        │
        ▼
  Push to Branch → CI Pipeline Triggers
  (SAST, SCA, Unit Tests)
        │ ──── FAIL ──→ Block Merge Request
        │
        ▼
  Peer Review (Human)
  (Security focus, logic review, standards compliance)
        │
        ▼ ──── REJECTED ──→ Developer Addresses Comments
        │
        ▼
  Approved → Merge to Main
        │
        ▼
  Automated Security Scan in CI
  (DAST, IAST if available)
        │
        ▼
  Deploy to Production
</code></pre>

    <h4>Key Features to Look For</h4>
    <ul>
      <li><strong>Inline annotations:</strong> Reviewers comment directly on lines of code</li>
      <li><strong>Automated checks:</strong> CI runs SAST, SCA, and tests automatically on each PR</li>
      <li><strong>Template reviews:</strong> Pre-built security checklists for code reviewers</li>
      <li><strong>Integration with issue trackers:</strong> Findings automatically create Jira/GitHub issues</li>
      <li><strong>Metrics dashboard:</strong> Track review turnaround time, finding rates, coverage</li>
      <li><strong>Required approvals:</strong> Enforce minimum reviewers for sensitive changes</li>
    </ul>
  `,

  v3c37: `
    <h3>Vulnerability Scanner</h3>
    <p>
      <strong>Vulnerability scanners</strong> are automated tools that <strong>identify security weaknesses</strong> in applications, systems, networks, and infrastructure. They are a foundational component of any security testing program, providing <strong>broad, repeatable coverage</strong> against known vulnerability patterns.
    </p>

    <h4>Types of Vulnerability Scanners</h4>
    <table>
      <thead>
        <tr><th>Type</th><th>What It Scans</th><th>Examples</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Web Application Scanners</strong></td><td>Web apps, APIs, web services</td><td>Burp Suite, OWASP ZAP, Acunetix</td></tr>
        <tr><td><strong>Network Scanners</strong></td><td>Network infrastructure, open ports</td><td>Nmap, Nessus, OpenVAS</td></tr>
        <tr><td><strong>Infrastructure Scanners</strong></td><td>Servers, OS, configurations</td><td>Qualys, Rapid7, Tenable.io</td></tr>
        <tr><td><strong>Database Scanners</strong></td><td>Database configurations and vulnerabilities</td><td>SQLmap, IBM Guardium</td></tr>
        <tr><td><strong>Container/Image Scanners</strong></td><td>Docker images, Kubernetes</td><td>Trivy, Grype, Clair, Aqua</td></tr>
        <tr><td><strong>Cloud Security Scanners</strong></td><td>Cloud infrastructure and configurations</td><td>Prowler, ScoutSuite, Wiz</td></tr>
        <tr><td><strong>Dependency Scanners</strong></td><td>Third-party libraries</td><td>Snyk, Dependabot, OWASP DC</td></tr>
      </tbody>
    </table>

    <h4>Scanner Selection Criteria</h4>
    <ol>
      <li><strong>Accuracy:</strong> Low false positive rate — verify vendors' advertised accuracy</li>
      <li><strong>Coverage:</strong> Supports your technology stack and asset types</li>
      <li><strong>Automation:</strong> API support, CI/CD integration, scheduled scanning</li>
      <li><strong>Reporting:</strong> Clear, actionable reports with remediation guidance</li>
      <li><strong>Update frequency:</strong>Regular vulnerability signature/database updates</li>
      <li><strong>Compliance mapping:</strong> Maps findings to CIS, NIST, OWASP, etc.</li>
    </ol>

    <h4>Implementing a Scanning Program</h4>
    <pre><code>
Recommended Scanning Schedule:
 ┌─────────────────┬──────────────┬──────────────────┐
 │ Scan Type       │ Frequency    │ Scope            │
 ├─────────────────┼──────────────┼──────────────────┤
 │ DAST/DAST       │ Every deploy │ Staging env      │
 │ Dependency Scan │ Every commit │ PRs + main branch│
 │ Network Scan    │ Weekly       │ All subnets      │
 │ Full Vuln Scan  │ Monthly      │ Entire infra     │
 │ Pen Test        │ Quarterly    │ Critical apps    │
 └─────────────────┴──────────────┴──────────────────┘
</code></pre>

    <h4>Managing Scan Results</h4>
    <ol>
      <li><strong>Deduplicate:</strong> Correlate findings across multiple scanners to reduce noise</li>
      <li><strong>Prioritize:</strong> Use risk-based prioritization (CVSS + exploitability + asset value)</li>
      <li><strong>Track SLAs:</strong> Set remediation timelines by severity</li>
      <li><strong>False positive management:</strong> Document and suppress confirmed false positives</li>
      <li><strong>Trend analysis:</strong> Track vulnerability counts over time to measure improvement</li>
    </ol>

    <div class="info-box">
      <div class="info-title">💡 Scanner Limitations</div>
      <p>No scanner catches everything. Automated scanners excel at finding <strong>known vulnerability patterns</strong> but struggle with <strong>business logic flaws</strong>, <strong>authentication bypasses</strong>, and <strong>complex multi-step attacks</strong>. Always complement automated scanning with <strong>manual testing and penetration testing</strong>.</p>
    </div>
  `,

  v3c38: `
    <h3>Security Regression Testing</h3>
    <p>
      <strong>Security Regression Testing</strong> ensures that <strong>previously fixed vulnerabilities do not reappear</strong> after code changes, and that new code doesn't introduce new security issues. It is a critical component of maintaining a <strong>continuously secure application</strong>.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: The Regression Problem</div>
      <p>A security fix is only permanent if it's <strong>protected by tests</strong>. Studies show that <strong>15-25% of fixed vulnerabilities reappear</strong> within 6 months due to code changes, refactoring, or copy-paste. Automated security regression tests catch these regressions before they reach production.</p>
    </div>

    <h4>Types of Security Regression Tests</h4>
    <table>
      <thead>
        <tr><th>Type</th><th>What It Tests</th><th>Speed</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Unit Security Tests</strong></td><td>Individual functions for secure behavior (input validation, auth checks)</td><td>Very fast (ms)</td></tr>
        <tr><td><strong>Integration Security Tests</strong></td><td>Security controls between components (auth between services, API security)</td><td>Fast (seconds)</td></tr>
        <tr><td><strong>Regression DAST</strong></td><td>Automated scans against build artifacts to catch known vulnerability patterns</td><td>Moderate (minutes)</td></tr>
        <tr><td><strong>SAST in Pipeline</strong></td><td>Code scanning on every build</td><td>Moderate (minutes)</td></tr>
        <tr><td><strong>SCA in Pipeline</strong></td><td>Dependency vulnerability checks on every build</td><td>Fast (seconds to minutes)</td></tr>
      </tbody>
    </table>

    <h4>Implementing Security Regression Tests</h4>
    <h5>1. Known Vulnerability Regression Tests</h5>
    <pre><code>
// Test for previously fixed SQL injection
@Test
void shouldPreventSqlInjectionInUserSearch() {
  String maliciousInput = "' OR '1'='1";
  List<User> results = userService.search(maliciousInput);

  // Should not return all users, should return empty or match literal
  assertThat(results).isEmpty();

  // Should log the attempt
  assertThat(auditLog).containsEntry("SQL_INJECTION_ATTEMPT");
}

// Test for previously fixed IDOR
@Test
void shouldNotAllowAccessingOtherUsersData() {
  User userA = createUser("userA");
  User userB = createUser("userB");
  Document doc = createDocumentForUser(userB);

  // User A accessing User B's document should fail
  assertThrows(AccessDeniedException.class, () ->
    documentService.getDocument(userA, doc.getId())
  );
}
</code></pre>

    <h5>2. Security Configuration Tests</h5>
    <pre><code>
// Ensure security headers are present
@Test
void shouldHaveSecurityHeaders() {
  MockHttpServletResponse response = performGet("/api/users");

  assertThat(response.getHeader("X-Content-Type-Options"))
    .isEqualTo("nosniff");
  assertThat(response.getHeader("X-Frame-Options"))
    .isEqualTo("DENY");
  assertThat(response.getHeader("Strict-Transport-Security"))
    .contains("max-age=31536000");
}
// Ensure authentication is required
@Test
void shouldRequireAuthenticationOnProtectedEndpoints() {
  performGet("/api/admin/users")
    .andExpect(status().isUnauthorized());
}
</code></pre>

    <h4>CI/CD Integration</h4>
    <pre><code>
# GitHub Actions Example
name: Security Regression
on: [push, pull_request]
jobs:
  unit-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: ./gradlew test --tests "com.security.*"
  sast:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: returntocorp/semgrep-action@v1
  sca:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm audit --audit-level=high
  dast:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - run: |
          docker run --rm \
            -v $(pwd):/zap/wrk \
            owasp/zap2docker-stable \
            zap-baseline.py -t http://app:8080
</code></pre>

    <div class="info-box">
      <div class="info-title">💡 Shift-Left Security Testing</div>
      <p>Run security regression tests <strong>as part of the developer's local build</strong>, not just in CI. If tests take too long, start with the most critical tests locally and run the full suite in CI. Use <strong>test parallelization</strong> and <strong>incremental scanning</strong> to keep feedback loops short.</p>
    </div>
  `,

  v3c39: `
    <h3>Bug Bounty</h3>
    <p>
      <strong>Bug Bounty Programs</strong> are structured initiatives that invite <strong>external security researchers</strong> (ethical hackers) to discover and report vulnerabilities in your applications, infrastructure, or products in exchange for <strong>monetary rewards and recognition</strong>. They leverage the collective expertise of the global security community to find issues that internal teams may miss.
    </p>

    <div class="key-box">
      <div class="key-title">🔑 Key Concept: Crowdsourced Security</div>
      <p>A bug bounty program gives you access to <strong>thousands of skilled researchers</strong> testing your applications 24/7. The diversity of skills, perspectives, and attack techniques in the hacker community far exceeds what any single internal team can replicate.</p>
    </div>

    <h4>Bug Bounty Models</h4>
    <table>
      <thead>
        <tr><th>Model</th><th>Description</th><th>Best For</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Public Program</strong></td>
          <td>Open to all researchers; listed on platforms</td>
          <td>Mature organizations with mature security posture</td>
        </tr>
        <tr>
          <td><strong>Private/Invite-Only</strong></td>
          <td>Curated group of vetted researchers</td>
          <td>Organizations starting out or with sensitive systems</td>
        </tr>
        <tr>
          <td><strong>Time-Bound Challenge</strong></td>
          <td>Limited-duration focused testing event</td>
          <td>Product launches, compliance deadlines</td>
        </tr>
        <tr>
          <td><strong>Vulnerability Disclosure Program (VDP)</strong></td>
          <td>Safe harbor policy without monetary rewards</td>
          <td>Organizations not ready for paid bounties</td>
        </tr>
      </tbody>
    </table>

    <h4>Bug Bounty Platforms</h4>
    <ul>
      <li><strong>HackerOne:</strong> Largest platform; managed programs for 5,000+ organizations</li>
      <li><strong>Bugcrowd:</strong> Crowd-sourced security with managed triage</li>
      <li><strong>Intigriti:</strong> European-focused, strong GDPR compliance</li>
      <li><strong>Cobalt (formerly Synack):</strong> Curated researcher network</li>
      <li><strong>YesWeHack:</strong> Open platform with private options</li>
    </ul>

    <h4>Setting Up a Bug Bounty Program</h4>
    <ol>
      <li><strong>Define scope:</strong> Which assets are in-scope? Which are out-of-scope? What types of vulnerabilities qualify?</li>
      <li><strong>Set reward tiers:</strong> Based on severity (Critical: $500-$50K+, High: $200-$5K, Medium: $50-$500, Low: $25-$100)</li>
      <li><strong>Write clear policies:</strong> Safe harbor, disclosure timeline, rules of engagement</li>
      <li><strong>Establish triage process:</strong> Security team validates and prioritizes submissions</li>
      <li><strong>Communicate with researchers:</strong> Respond promptly, provide status updates, be respectful</li>
      <li><strong>Integrate with development:</strong> Findings should flow into your vulnerability management workflow</li>
    </ol>

    <h4>ROI of Bug Bounty Programs</h4>
    <p>According to industry data:</p>
    <ul>
      <li>Average cost per vulnerability found: <strong>$3,000-$5,000</strong> (vs. $15,000+ via traditional pen testing)</li>
      <li>Average time to find critical vulnerabilities: <strong>days</strong> (vs. months with internal teams)</li>
      <li>Researcher community: <strong>300,000+</strong> registered ethical hackers worldwide</li>
      <li>Average bounty paid: <strong>$3,500-$5,000</strong> per valid report</li>
    </ul>

    <div class="warning-box">
      <div class="warning-title">⚠️ Bug Bounty ≠ Silver Bullet</div>
      <p>Bug bounties complement but don't replace core security practices. Common pitfalls: treating bounties as penetration testing, poor scoping that frustrates researchers, slow triage that demoralizes the community, and not fixing reported issues before expanding the program.</p>
    </div>
  `,

  v3c40: `
    <h3>Responsible Disclosure</h3>
    <p>
      <strong>Responsible Disclosure</strong> (also called <strong>Coordinated Disclosure</strong>) is the <strong>ethical framework</strong> that governs how security researchers report vulnerabilities and how organizations respond. It establishes a structured process to fix vulnerabilities <strong>before they're publicly exploited</strong>.
    </p>

    <h4>The Responsible Disclosure Lifecycle</h4>
    <pre><code>
 Researcher                                           Organization
      │                                                    │
      │  1. Discovery                                      │
      │  2. Verify the vulnerability                       │
      │  3. Report via proper channel ────────────────────▶│
      │                                                    │
      │                                    4. Acknowledge receipt
      │                                    5. Assess & prioritize
      │                                    6. Develop fix
      │                                    7. Deploy fix
      │                                    8. Publish advisory
      │                                                    │
      │  9. Verify fix ──────────────────────────────────▶│
      │  10. Public disclosure (if applicable)             │
</code></pre>

    <h4>Key Principles</h4>
    <ul>
      <li><strong>Good Faith:</strong> Researcher reports in good faith, without exploitation or harm</li>
      <li><strong>No Disclosure Until Fix:</strong> Vulnerability details aren't shared publicly until a fix is available or a reasonable deadline has passed</li>
      <li><strong>Reasonable Timeline:</strong> Typically 90 days from report to disclosure (Google's standard); some allow 45-180 days</li>
      <li><strong>No Damage:</strong> Researcher doesn't access, modify, or exfiltrate data beyond proving the vulnerability</li>
      <li><strong>Proportionate Response:</strong> Organization responds proportionally — doesn't threaten researchers for good-faith reports</li>
    </ul>

    <h4>Establishing a Vulnerability Disclosure Policy (VDP)</h4>
    <p>Every organization should have a clear VDP. Key elements:</p>
    <ol>
      <li><strong>Scope:</strong> Which systems/assets are covered</li>
      <li><strong>Reporting channel:</strong> Dedicated email (e.g., security@company.com) or platform (HackerOne)</li>
      <li><strong>Safe harbor:</strong> Legal protection for good-faith reporters — no DMCA threats, no lawsuits</li>
      <li><strong>Expected response time:</strong> Acknowledge within 48-72 hours</li>
      <li><strong>Reward policy:</strong> Whether monetary rewards, swag, or recognition are offered</li>
      <li><strong>Disclosure timeline:</strong> How long before public disclosure if unfixed</li>
    </ol>

    <h4>Legal Considerations</h4>
    <ul>
      <li><strong>DMCA:</strong> Computer Fraud and Abuse Act (US) and similar laws can criminalize security research without clear safe harbor</li>
      <li><strong>Safe Harbor:</strong> Many organizations add explicit safe harbor clauses to their VDP</li>
      <li><strong>Bug Bounty Platforms:</strong> Provide additional legal protection for both parties</li>
      <li><strong>DOJ Guidance (2022):</strong> US DOJ clarified CFAA won't target good-faith security researchers</li>
    </ul>

    <div class="info-box">
      <div class="info-title">💡 ISO 29147 & ISO 30111</div>
      <p>These international standards provide formal frameworks for vulnerability disclosure:<br>
      <strong>ISO 29147:</strong> Technical vulnerability disclosure process for vendors<br>
      <strong>ISO 30111:</strong> Handling of vulnerability reports by suppliers<br>
      Adopting these standards demonstrates mature security governance.</p>
    </div>
  `
};