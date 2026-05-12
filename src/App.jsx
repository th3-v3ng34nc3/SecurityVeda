import { useState, useEffect, useMemo } from 'react'
import { vedasData, getAllChapters } from './data/vedasData'
import { cloudSecurityContent } from './data/cloudSecurityContent'
import { azureContent } from './data/azureContent'
import { gcpContent } from './data/gcpContent'
import { complianceContent } from './data/complianceContent'
import { appSecContent } from './data/appSecContent'
import { devSecOpsContent } from './data/devSecOpsContent'
import { kubernetesContent } from './data/kubernetesContent'
import { networkSecurityContent } from './data/networkSecurityContent'

const allContent = {
  ...cloudSecurityContent,
  ...azureContent,
  ...gcpContent,
  ...complianceContent,
  ...appSecContent,
  ...devSecOpsContent,
  ...kubernetesContent,
  ...networkSecurityContent
}

// Icons as SVG components - Shield with Aura
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="url(#shieldGrad)">
    <defs>
      <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="50%" stopColor="#FF6B35" />
        <stop offset="100%" stopColor="#E11D48" />
      </linearGradient>
    </defs>
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
  </svg>
)

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
  </svg>
)

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
  </svg>
)

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
)

const BackIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
  </svg>
)

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
  </svg>
)

// Sanskrit slogans for each Veda
const vedaSlogans = {
  veda1: {
    sanskrit: "नभः स्पृशं दीप्तामृतस्य पूर्णः",
    transliteration: "Nah: Spṛśaṃ Dīptāmṛtasya Pūrṇaḥ",
    meaning: "Touching the sky, full of radiant nectar"
  },
  veda2: {
    sanskrit: "धर्मो रक्षति रक्षितः",
    transliteration: "Dharmaḥ Rakṣati Rakṣitaḥ",
    meaning: "Dharma protects those who protect it"
  },
  veda3: {
    sanskrit: "विद्यादामृतमश्नुते",
    transliteration: "Vidyād Āmṛtam Aśnute",
    meaning: "Through knowledge, one attains immortality"
  },
  veda4: {
    sanskrit: "एकं सत् विप्रा बहुधा वदन्ति",
    transliteration: "Ekam Sat Viprā Bahudhā Vadanti",
    meaning: "The reality is one, the wise call it by many names"
  },
  veda5: {
    sanskrit: "समुद्राय वरुणाय स्वाहा",
    transliteration: "Samudrāya Varuṇāya Svāhā",
    meaning: "Salutations to the Lord of oceans and waters"
  },
  veda6: {
    sanskrit: "अग्निर्मूर्धा जातवेदा अहं ब्राह्मणामृतं क्षरामि",
    transliteration: "Agnir mūrdhā jātavedā ahaṃ brāhmaṇāmṛtaṃ kṣarāmi",
    meaning: "I am the fire in the head, the source of immortal knowledge"
  }
}

// Home Page Component
function HomePage({ onNavigate }) {
  const vedasList = Object.values(vedasData)
  const totalChapters = vedasList.reduce((sum, v) => {
    return sum + v.sections.reduce((s, sec) => s + sec.chapters.length, 0)
  }, 0)

  return (
    <div className="home-page">
      <div className="welcome-header">
        <h1>The Security Vedas</h1>
        <p className="subtitle">परमं धाम सुरक्षायः</p>
        <p>Your celestial guide to cybersecurity wisdom - {totalChapters} sacred chapters across 6 domains</p>

        <div className="sanskrit-verse">
          <div className="verse-text">यथा जलं शीतलं चैव गुह्यं च परमं पदम्।</div>
          <div className="verse-text">तथा सूचना-सुरक्षा प्रोक्ता ज्ञातव्या विवेकिभिः।।</div>
          <div className="verse-meaning">"As water is cool and leads to the highest secret place, so is information security - to be understood by the wise."</div>
        </div>
      </div>

      <div className="veda-grid">
        {vedasList.map((item, idx) => {
          const cCount = item.sections.reduce((a, s) => a + s.chapters.length, 0)
          const vNum = idx + 1
          const slogan = vedaSlogans[item.id] || { sanskrit: '', transliteration: '', meaning: '' }

          return (
            <div
              key={item.id}
              className="glass-card"
              onClick={() => onNavigate(item.id)}
            >
              <div className={`card-icon veda-${vNum}`}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p className="card-desc">{item.description}</p>
              <div className="card-meta">
                <span className="chapter-count">
                  <span>{cCount}</span> chapters
                </span>
                <span className="chapter-count">
                  <span>{item.sections.length}</span> sections
                </span>
              </div>
              {slogan.sanskrit && (
                <div className="sanskrit-footer">
                  {slogan.sanskrit}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Veda Detail Page Component
function VedaPage({ vedaId, onNavigate, onSelectChapter, completedChapters, onToggleComplete }) {
  const veda = vedasData[vedaId]
  const slogan = vedaSlogans[vedaId] || { sanskrit: '', transliteration: '', meaning: '' }

  if (!veda) return null

  return (
    <div className="veda-page">
      <div className="veda-page-header">
        <button className="back-btn" onClick={() => onNavigate('home')}>
          <BackIcon /> Return to Sanctuary
        </button>
        <h1>{veda.icon} {veda.title}</h1>
        {slogan.sanskrit && (
          <div className="veda-mantra">
            {slogan.sanskrit}
            <br />
            <span style={{ fontSize: '1rem', fontStyle: 'italic' }}>{slogan.transliteration}</span>
          </div>
        )}
        <p>{veda.description}</p>
      </div>

      <div className="sections-grid">
        {veda.sections.map((section, sectionIndex) => (
          <SectionCard
            key={section.id}
            section={section}
            sectionIndex={sectionIndex}
            vedaId={vedaId}
            onSelectChapter={onSelectChapter}
            completedChapters={completedChapters}
            onToggleComplete={onToggleComplete}
          />
        ))}
      </div>
    </div>
  )
}

// Certification Modal Component
function CertificationModal({ progressPercent, completedCount, totalChapters, completedChapters, vedasData, onClose }) {
  const vedasList = Object.values(vedasData)

  const getVedaProgress = (vedaId) => {
    const veda = vedasData[vedaId]
    if (!veda) return { completed: 0, total: 0 }
    const vedaChapters = veda.sections.flatMap(s => s.chapters.map(c => c.id))
    const completed = vedaChapters.filter(id => completedChapters.includes(id)).length
    return { completed, total: vedaChapters.length }
  }

  const vedaCertificates = vedasList.map(veda => {
    const { completed, total } = getVedaProgress(veda.id)
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0
    return { ...veda, completed, total, percent, isComplete: completed === total && total > 0 }
  })

  const completedVedaCount = vedaCertificates.filter(v => v.isComplete).length

  return (
    <div className="certification-overlay" onClick={onClose}>
      <div className="certification-modal" onClick={(e) => e.stopPropagation()}>
        <button className="cert-close-btn" onClick={onClose}>×</button>

        <div className="cert-header">
          <div className="cert-om">🕉</div>
          <h2>The Security Vedas</h2>
          <p className="cert-subtitle">परमं धाम सुरक्षायः</p>
        </div>

        <div className="cert-overall-progress">
          <div className="cert-progress-bar">
            <div className="cert-progress-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
          <p className="cert-progress-text">{completedCount} of {totalChapters} Chapters Completed ({progressPercent}%)</p>
        </div>

        <div className="cert-vedas-section">
          <h3>🎓 Veda Certifications</h3>
          <p className="cert-vedas-subtitle">Complete all chapters in a Veda to unlock its certificate</p>
          <div className="cert-vedas-grid">
            {vedaCertificates.map(v => (
              <div key={v.id} className={`cert-veda-card ${v.isComplete ? 'eligible' : ''}`}>
                <div className="cert-veda-icon">{v.icon}</div>
                <div className="cert-veda-info">
                  <h4>{v.title}</h4>
                  <div className="cert-veda-progress">
                    <div className="cert-veda-progress-bar">
                      <div className="cert-veda-progress-fill" style={{ width: `${v.percent}%` }}></div>
                    </div>
                    <span>{v.completed}/{v.total} chapters</span>
                  </div>
                </div>
                {v.isComplete ? (
                  <button className="cert-veda-btn" onClick={() => alert(`Downloading ${v.title} Certificate!`)}>
                    📜 Get Certificate
                  </button>
                ) : (
                  <div className="cert-pending">In Progress</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="cert-overall">
          {completedVedaCount === vedasList.length ? (
            <div className="cert-grand-eligible">
              <span className="cert-grand-icon">🏆</span>
              <h3>Grand Master of Security Vedas</h3>
              <p>You have completed all 6 Vedas! Your cybersecurity knowledge is supreme.</p>
              <button className="cert-download-btn" onClick={() => alert('Downloading Grand Master Certificate!')}>
                🎖️ Download Grand Certificate
              </button>
            </div>
          ) : (
            <p className="cert-more">Complete {vedasList.length - completedVedaCount} more Veda{vedasList.length - completedVedaCount > 1 ? 's' : ''} for the Grand Master Certificate!</p>
          )}
        </div>
      </div>
    </div>
  )
}

// Chapter Detail Page Component
function ChapterPage({ chapter, vedaId, onNavigate, onSelectChapter }) {
  const veda = vedasData[vedaId]

  if (!chapter || !veda) {
    return (
      <div className="chapter-page">
        <button className="back-btn" onClick={() => onNavigate('home')}>
          <BackIcon /> Return to Sanctuary
        </button>
        <p>Chapter not found</p>
      </div>
    )
  }

  // Find section that contains this chapter
  let sectionTitle = ''
  for (const section of veda.sections) {
    if (section.chapters.find(c => c.id === chapter.id)) {
      sectionTitle = section.title
      break
    }
  }

  // Flatten all chapters for navigation
  const allChapters = veda.sections.flatMap(s => s.chapters)
  const currentIndex = allChapters.findIndex(c => c.id === chapter.id)
  const prevChapter = currentIndex > 0 ? allChapters[currentIndex - 1] : null
  const nextChapter = currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : null

  return (
    <div className="chapter-page">
      <button className="back-btn" onClick={() => onNavigate(vedaId)}>
        <BackIcon /> Back to {veda.title}
      </button>

      <div className="chapter-header">
        <span className="chapter-veda-badge">{veda.icon} {veda.title}</span>
        <span className="chapter-section-badge">{sectionTitle}</span>
      </div>

      <h1 className="chapter-title">{chapter.title}</h1>

      <div className="chapter-content">
        {allContent[chapter.id] ? (
          <div dangerouslySetInnerHTML={{ __html: allContent[chapter.id] }} />
        ) : (
          <div className="chapter-placeholder">
            <h3>📜 Content Coming Soon</h3>
            <p>This sacred knowledge is being written. Check back soon for comprehensive coverage of:</p>
            <ul>
              <li>Key concepts and fundamentals</li>
              <li>Best practices and implementation</li>
              <li>Real-world examples and scenarios</li>
              <li>Tools and techniques</li>
            </ul>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="chapter-nav">
        {prevChapter ? (
          <button
            className="nav-btn nav-prev"
            onClick={() => onSelectChapter(prevChapter, vedaId)}
          >
            <span className="nav-arrow">←</span>
            <div className="nav-label">Previous</div>
            <div className="nav-title">{prevChapter.title}</div>
          </button>
        ) : <span />}
        {nextChapter ? (
          <button
            className="nav-btn nav-next"
            onClick={() => onSelectChapter(nextChapter, vedaId)}
          >
            <div className="nav-label">Next</div>
            <div className="nav-title">{nextChapter.title}</div>
            <span className="nav-arrow">→</span>
          </button>
        ) : <span />}
      </div>

      <div className="chapter-meta">
        <span className="meta-item">🆔 {chapter.id}</span>
        <span className="meta-item">📚 {veda.title}</span>
        <span className="meta-item">📖 {currentIndex + 1} / {allChapters.length}</span>
      </div>
    </div>
  )
}

// Section Card Component
function SectionCard({ section, sectionIndex, vedaId, onSelectChapter, completedChapters, onToggleComplete }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`section-card ${expanded ? 'expanded' : ''}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="section-header">
        <h3>
          <span className="section-icon">{section.icon}</span>
          {section.title}
        </h3>
        <span className="chevron">{expanded ? '✦' : '+'}</span>
      </div>
      <div className="chapter-list">
        <div className="chapter-scroll-container">
          <div className="chapter-items">
            {section.chapters.map((chapter, chapterIndex) => (
              <div
                key={chapter.id}
                className={`chapter-item ${completedChapters.includes(chapter.id) ? 'completed' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  onSelectChapter(chapter, vedaId)
                }}
              >
                <span className="chapter-num">{String(chapterIndex + 1).padStart(2, '0')}</span>
                <span className="chapter-title-text">{chapter.title}</span>
                <span
                  className="chapter-check"
                  onClick={(e) => {
                    e.stopPropagation()
                    onToggleComplete(chapter.id)
                  }}
                  title={completedChapters.includes(chapter.id) ? "Mark as incomplete" : "Mark as complete"}
                >
                  ✓
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Search Modal Component
function SearchModal({ onClose, onSearch, chapters }) {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return chapters.filter(ch =>
      ch.title.toLowerCase().includes(q) ||
      ch.desc.toLowerCase().includes(q)
    ).slice(0, 10)
  }, [query, chapters])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-input-wrapper">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search the sacred texts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <span className="search-shortcut">ESC</span>
        </div>
        <div className="search-results">
          {query && results.length === 0 && (
            <div className="search-no-results">No wisdom found in the archives</div>
          )}
          {results.map((result) => (
            <div
              key={result.id}
              className="search-result-item"
              onClick={() => {
                onSearch(result.title)
                onClose()
              }}
            >
              <h4>{result.title}</h4>
              <p>{result.vedaTitle} - {result.sectionTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Sidebar Component
function Sidebar({ currentPage, onNavigate, isOpen, onClose }) {
  const navItems = [
    { id: 'home', label: 'Sanctuary', icon: '🕉' },
    ...Object.values(vedasData).map(veda => ({
      id: veda.id,
      label: veda.title,
      icon: veda.icon,
      vedaNum: parseInt(veda.id.replace('veda', ''))
    }))
  ]

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="logo">
        <div className="logo-icon">
          <ShieldIcon />
        </div>
        <h1>The Security Vedas</h1>
        <div className="tagline">Security Knowledge Base</div>
        <div className="author">by Aditya [ th3-v3ng34nc3 ]</div>

        <div className="sanskrit-motto">
          सत्यं वद। धर्मं चर।
          <div className="transliteration">"Speak truth. Follow dharma."</div>
        </div>
      </div>

      <nav className="nav-section">
        <div className="nav-section-title">Navigate</div>
        {navItems.map((item) => (
          <div
            key={item.id}
            className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => {
              onNavigate(item.id)
              onClose()
            }}
          >
            <span className={`nav-icon ${item.vedaNum ? `veda-${item.vedaNum}` : ''}`}>
              {item.icon}
            </span>
            {item.label}
          </div>
        ))}
      </nav>
    </aside>
  )
}

// Main App Component
function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedChapter, setSelectedChapter] = useState(null)
  const [selectedVedaId, setSelectedVedaId] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [showCertification, setShowCertification] = useState(false)

  const [completedChapters, setCompletedChapters] = useState(() => {
    const saved = localStorage.getItem('completedChapters')
    return saved ? JSON.parse(saved) : []
  })

  const chapters = useMemo(() => getAllChapters(), [])

  const totalChapters = chapters.length
  const completedCount = completedChapters.length
  const progressPercent = Math.round((completedCount / totalChapters) * 100)

  const toggleChapterComplete = (chapterId) => {
    setCompletedChapters(prev => {
      const newCompleted = prev.includes(chapterId)
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
      localStorage.setItem('completedChapters', JSON.stringify(newCompleted))
      return newCompleted
    })

    if (progressPercent === 99 || progressPercent === 100) {
      setTimeout(() => setShowCertification(true), 500)
    }
  }

  const isChapterCompleted = (chapterId) => completedChapters.includes(chapterId)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const handleSelectChapter = (chapter, vedaId) => {
    setSelectedChapter(chapter)
    setSelectedVedaId(vedaId)
  }

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId)
    setSelectedChapter(null)
    setSelectedVedaId(null)
  }

  return (
    <>
      <div className="bg-mesh">
        {/* Floating Orbs */}
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="floating-orb orb-4"></div>
        <div className="floating-orb orb-5"></div>
        <div className="floating-orb orb-6"></div>
        {/* Aurora Effect */}
        <div className="aurora"></div>
        {/* Twinkling Stars */}
        <div className="stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
        {/* Shooting Stars */}
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>

      {/* Header */}
      <header className="app-header">
        <div className="header-brand" onClick={() => handleNavigate('home')}>
          <span className="header-om">🕉</span>
          <span className="header-title">The Security Vedas</span>
        </div>
        <div className="header-actions">
          {/* Progress Indicator */}
          <div className="progress-indicator" onClick={() => setShowCertification(true)} title="View Progress">
            <div className="progress-ring">
              <svg viewBox="0 0 36 36">
                <path
                  className="progress-bg"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="progress-fill"
                  strokeDasharray={`${progressPercent}, 100`}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="progress-text">{progressPercent}%</span>
            </div>
            <span className="progress-label">Progress</span>
          </div>
          <button className="header-btn search-btn" onClick={() => setSearchOpen(true)} title="Search">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </button>
          <button className="header-btn theme-btn" onClick={toggleTheme} title="Toggle theme">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </header>

      <main className="main-content full-width">
        {selectedChapter ? (
          <ChapterPage
            chapter={selectedChapter}
            vedaId={selectedVedaId}
            onNavigate={handleNavigate}
            onSelectChapter={handleSelectChapter}
          />
        ) : currentPage === 'home' ? (
          <HomePage onNavigate={handleNavigate} />
        ) : (
          <VedaPage
            vedaId={currentPage}
            onNavigate={handleNavigate}
            onSelectChapter={handleSelectChapter}
            completedChapters={completedChapters}
            onToggleComplete={toggleChapterComplete}
          />
        )}

        {/* Footer */}
        <footer className="app-footer">
          <div className="footer-content">
            <div className="footer-om">🕉</div>
            <div className="footer-text">
              <p className="footer-title">The Security Vedas</p>
              <p className="footer-subtitle">परमं धाम सुरक्षायः</p>
            </div>
            <div className="footer-line"></div>
            <div className="footercredits">
              <p>Crafted with 🙏 by <strong>Aditya [ th3-v3ng34nc3 ]</strong></p>
              <p className="footer-motto">सत्यं वद। धर्मं चर। | Speak truth. Follow dharma.</p>
            </div>
            <div className="footer-year">© 2026</div>
          </div>
        </footer>
      </main>

      {showCertification && (
        <CertificationModal
          progressPercent={progressPercent}
          completedCount={completedCount}
          totalChapters={totalChapters}
          completedChapters={completedChapters}
          vedasData={vedasData}
          onClose={() => setShowCertification(false)}
        />
      )}

      {searchOpen && (
        <SearchModal
          onClose={() => setSearchOpen(false)}
          onSearch={(title) => {
            const ch = chapters.find(c => c.title === title)
            if (ch) {
              const vedaId = `veda${ch.vedaTitle.match(/(\d+)/)?.[1] || 1}`
              setSelectedChapter(ch)
              setSelectedVedaId(vedaId)
            }
            setSearchOpen(false)
          }}
          chapters={chapters}
        />
      )}
    </>
  )
}

export default App
