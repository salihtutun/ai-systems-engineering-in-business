(function () {
  'use strict';

  // ── Theme System ────────────────────────
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  if (stored) {
    root.setAttribute('data-theme', stored);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.setAttribute('data-theme', 'dark');
  } else {
    root.setAttribute('data-theme', 'light');
  }

  function updateThemeIcon() {
    const icon = document.getElementById('themeIcon');
    if (!icon) return;
    icon.textContent = root.getAttribute('data-theme') === 'light' ? '☀️' : '🌙';
  }

  // ── Confetti System ─────────────────────
  const confettiCanvas = document.getElementById('confettiCanvas');
  let confettiCtx = null;
  let confettiParticles = [];
  let confettiAnim = null;

  function initConfetti() {
    if (!confettiCanvas) return;
    confettiCtx = confettiCanvas.getContext('2d');
    resizeConfetti();
    window.addEventListener('resize', resizeConfetti);
  }

  function resizeConfetti() {
    if (!confettiCanvas) return;
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }

  function launchConfetti() {
    if (!confettiCtx) return;
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe', '#2ecc71', '#f39c12'];
    for (let i = 0; i < 80; i++) {
      confettiParticles.push({
        x: Math.random() * confettiCanvas.width,
        y: -20,
        vx: (Math.random() - 0.5) * 8,
        vy: Math.random() * 5 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        opacity: 1
      });
    }
    if (!confettiAnim) animateConfetti();
  }

  function animateConfetti() {
    if (!confettiCtx || confettiParticles.length === 0) {
      confettiAnim = null;
      confettiCtx && confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
      return;
    }
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiParticles = confettiParticles.filter(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.15;
      p.rotation += p.rotationSpeed;
      p.opacity -= 0.008;
      if (p.opacity <= 0) return false;
      confettiCtx.save();
      confettiCtx.translate(p.x, p.y);
      confettiCtx.rotate((p.rotation * Math.PI) / 180);
      confettiCtx.globalAlpha = p.opacity;
      confettiCtx.fillStyle = p.color;
      confettiCtx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      confettiCtx.restore();
      return true;
    });
    confettiAnim = requestAnimationFrame(animateConfetti);
  }

  // ── Toast System ────────────────────────
  function showToast(message, icon = '✓', duration = 2500) {
    const toast = document.getElementById('toast');
    const toastIcon = document.getElementById('toastIcon');
    const toastMessage = document.getElementById('toastMessage');
    if (!toast) return;
    toastIcon.textContent = icon;
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
  }

  // ── Particle Background ─────────────────
  function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#2ecc71', '#f39c12'];
    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 6 + 2;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = (Math.random() * 20 + 15) + 's';
      p.style.animationDelay = (Math.random() * -20) + 's';
      container.appendChild(p);
    }
  }

  // ── Progress System ─────────────────────
  const Progress = {
    KEY: 'aib-progress',
    get() {
      try { return JSON.parse(localStorage.getItem(this.KEY)) || {}; } catch { return {}; }
    },
    set(data) {
      localStorage.setItem(this.KEY, JSON.stringify(data));
    },
    isLessonComplete(phaseId, lessonIdx) {
      const data = this.get();
      return !!(data[phaseId] && data[phaseId][lessonIdx]);
    },
    markLessonComplete(phaseId, lessonIdx) {
      const data = this.get();
      if (!data[phaseId]) data[phaseId] = {};
      data[phaseId][lessonIdx] = true;
      this.set(data);
      this._notify();
    },
    unmarkLessonComplete(phaseId, lessonIdx) {
      const data = this.get();
      if (data[phaseId]) { delete data[phaseId][lessonIdx]; }
      this.set(data);
      this._notify();
    },
    reset() {
      localStorage.removeItem(this.KEY);
      this._notify();
    },
    getStats() {
      const data = this.get();
      let lessons = 0, complete = 0, phasesComplete = 0, quizzes = 0;
      PHASES.forEach(phase => {
        let phaseDone = 0;
        phase.lessons.forEach((l, i) => {
          lessons++;
          if (l.status === 'complete' || this.isLessonComplete(phase.id, i)) {
            complete++;
            phaseDone++;
          }
        });
        if (phaseDone === phase.lessons.length) phasesComplete++;
      });
      return { lessons, complete, phasesComplete, totalPhases: PHASES.length };
    },
    listeners: [],
    onChange(fn) { this.listeners.push(fn); },
    _notify() { this.listeners.forEach(fn => fn()); }
  };

  // ── Count Up Animation ──────────────────
  function animateCounters() {
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = parseInt(el.getAttribute('data-count'), 10);
      const duration = 2000;
      const start = performance.now();
      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * ease);
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    });
  }

  // ── Progress Ring ───────────────────────
  function updateProgressRing() {
    const stats = Progress.getStats();
    const pct = stats.lessons > 0 ? Math.round((stats.complete / stats.lessons) * 100) : 0;
    const ring = document.getElementById('progressRingFill');
    const num = document.getElementById('progressPercent');
    if (ring) {
      const circumference = 2 * Math.PI * 52;
      ring.style.strokeDasharray = circumference;
      ring.style.strokeDashoffset = circumference * (1 - pct / 100);
    }
    if (num) num.textContent = pct + '%';

    const lc = document.getElementById('lessonsCompleted');
    const pc = document.getElementById('phasesCompleted');
    const qp = document.getElementById('quizzesPassed');
    const be = document.getElementById('badgesEarned');
    if (lc) lc.textContent = stats.complete + ' / ' + stats.lessons;
    if (pc) pc.textContent = stats.phasesComplete + ' / ' + stats.totalPhases;
    if (qp) qp.textContent = (Progress.get().quizScore || 0) + ' / ' + QUIZZES.length;
    if (be) {
      const badges = Math.floor(stats.complete / 5);
      be.textContent = badges;
    }
  }

  // ── Render Phases ───────────────────────
  function renderPhases() {
    const grid = document.getElementById('phaseGrid');
    if (!grid) return;
    let html = '';
    PHASES.forEach((phase, idx) => {
      const total = phase.lessons.length;
      let done = 0;
      phase.lessons.forEach((l, i) => {
        if (l.status === 'complete' || Progress.isLessonComplete(phase.id, i)) done++;
      });
      const pct = total > 0 ? Math.round((done / total) * 100) : 0;
      const statusClass = done === total ? 'complete' : done > 0 ? 'in-progress' : 'planned';
      const statusText = done === total ? 'Complete' : done > 0 ? 'In Progress' : 'Planned';
      html += `
        <div class="phase-card ${statusClass}" data-phase="${idx}" style="--card-color:${phase.color}">
          <div class="phase-card-header">
            <span class="phase-num">Phase ${String(phase.id).padStart(2,'0')}</span>
            <span class="phase-status ${statusClass}">${statusText}</span>
          </div>
          <h3>${phase.name}</h3>
          <p>${phase.desc}</p>
          <div class="phase-card-meta">
            <span class="phase-lesson-count">${done} / ${total} lessons</span>
            <div class="phase-progress-bar"><div class="phase-progress-fill" style="width:${pct}%"></div></div>
            <span class="phase-arrow">→</span>
          </div>
        </div>`;
    });
    grid.innerHTML = html;
  }

  // ── Modal ───────────────────────────────
  let currentPhaseIdx = -1;
  function initModal() {
    const overlay = document.getElementById('phaseModalOverlay');
    const closeBtn = document.getElementById('modalClose');
    if (!overlay) return;

    document.addEventListener('click', e => {
      const card = e.target.closest('.phase-card');
      if (card) {
        const idx = parseInt(card.getAttribute('data-phase'), 10);
        if (!isNaN(idx)) openModal(idx);
      }
    });
    closeBtn && closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  }

  function openModal(idx) {
    const p = PHASES[idx];
    if (!p) return;
    currentPhaseIdx = idx;
    document.getElementById('modalPhaseBadge').textContent = `Phase ${String(p.id).padStart(2,'0')}`;
    document.getElementById('modalTitle').textContent = p.name;
    document.getElementById('modalDesc').textContent = p.desc;

    const lessonsContainer = document.getElementById('modalLessons');
    let done = 0;
    let html = '';
    p.lessons.forEach((l, i) => {
      const userDone = Progress.isLessonComplete(p.id, i);
      if (userDone || l.status === 'complete') done++;
      const status = userDone || l.status === 'complete' ? 'complete' : l.status === 'in-progress' ? 'in-progress' : 'planned';
      html += `
        <div class="modal-lesson">
          <span class="modal-lesson-status ${status}"></span>
          <a href="#" onclick="return false">${l.name}</a>
          <span class="modal-lesson-type" data-type="${l.type}">${l.type}</span>
          <span class="modal-lesson-lang">${l.lang}</span>
          <button type="button" class="modal-lesson-toggle ${userDone ? 'done' : ''}" data-phase="${p.id}" data-lesson="${i}" title="${userDone ? 'Mark incomplete' : 'Mark complete'}">
            ${userDone ? '✓' : '+'}
          </button>
        </div>`;
    });
    lessonsContainer.innerHTML = html;

    // Progress bar in modal
    const bar = document.getElementById('modalProgressBar');
    const fill = document.getElementById('modalProgressFill');
    if (bar && fill) {
      bar.style.display = '';
      const pct = p.lessons.length > 0 ? (done / p.lessons.length) * 100 : 0;
      fill.style.width = pct + '%';
    }

    // Toggle buttons
    lessonsContainer.querySelectorAll('.modal-lesson-toggle').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const phaseId = parseInt(btn.getAttribute('data-phase'), 10);
        const lessonIdx = parseInt(btn.getAttribute('data-lesson'), 10);
        if (Progress.isLessonComplete(phaseId, lessonIdx)) {
          Progress.unmarkLessonComplete(phaseId, lessonIdx);
          btn.classList.remove('done');
          btn.innerHTML = '+';
          btn.title = 'Mark complete';
        } else {
          Progress.markLessonComplete(phaseId, lessonIdx);
          btn.classList.add('done');
          btn.innerHTML = '✓';
          btn.title = 'Mark incomplete';
          showToast('Lesson marked complete!', '🎉');
        }
        // Check if all lessons complete
        const allDone = PHASES[phaseId].lessons.every((_, i) => Progress.isLessonComplete(phaseId, i));
        if (allDone) {
          showToast('Phase complete! Great job!', '🏆');
          launchConfetti();
        }
        renderPhases();
        updateProgressRing();
      });
    });

    document.getElementById('phaseModalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    document.getElementById('phaseModalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }

  // ── Command Palette ─────────────────────
  function initCommandPalette() {
    const palette = document.getElementById('cmdPalette');
    const input = document.getElementById('cmdInput');
    const results = document.getElementById('cmdResults');
    if (!palette || !input) return;

    function openPalette() {
      palette.classList.add('open');
      input.value = '';
      input.focus();
      updateResults('');
    }

    function closePalette() {
      palette.classList.remove('open');
    }

    // Build searchable items
    const items = [];
    PHASES.forEach(phase => {
      items.push({ type: 'phase', name: phase.name, phase: phase.id, desc: phase.desc });
      phase.lessons.forEach(lesson => {
        items.push({ type: 'lesson', name: lesson.name, phase: phase.id, desc: lesson.summary || '', lang: lesson.lang, typeLabel: lesson.type });
      });
    });
    GLOSSARY.forEach(term => {
      items.push({ type: 'term', name: term.term, desc: term.definition });
    });

    function updateResults(query) {
      const q = query.toLowerCase().trim();
      if (!q) {
        results.innerHTML = `<li class="cmd-empty">Type to search phases, lessons, and glossary terms...</li>`;
        return;
      }
      const filtered = items.filter(item =>
        item.name.toLowerCase().includes(q) ||
        (item.desc && item.desc.toLowerCase().includes(q))
      ).slice(0, 10);

      if (filtered.length === 0) {
        results.innerHTML = `<li class="cmd-empty">No results for "${escapeHtml(q)}"</li>`;
        return;
      }

      let html = '';
      filtered.forEach((item, i) => {
        const iconMap = { phase: '📁', lesson: '📝', term: '📖' };
        const meta = item.type === 'phase' ? `Phase ${String(item.phase).padStart(2,'0')}` :
                     item.type === 'lesson' ? `${item.typeLabel} · ${item.lang}` : 'Glossary';
        html += `
          <li class="cmd-item ${i === 0 ? 'active' : ''}" data-index="${i}">
            <span class="cmd-item-icon">${iconMap[item.type]}</span>
            <div class="cmd-item-body">
              <div class="cmd-item-name">${highlightMatch(item.name, q)}</div>
              <div class="cmd-item-meta">${meta}</div>
            </div>
            <span class="cmd-item-arrow">→</span>
          </li>`;
      });
      results.innerHTML = html;
    }

    function highlightMatch(text, query) {
      const regex = new RegExp('(' + escapeRegExp(query) + ')', 'gi');
      return text.replace(regex, '<mark style="background:var(--blueprint-tint-strong);color:var(--accent-blue);padding:0 2px;border-radius:2px;">$1</mark>');
    }

    // Event listeners
    document.querySelectorAll('[data-cmd-palette]').forEach(btn => {
      btn.addEventListener('click', openPalette);
    });
    document.addEventListener('keydown', e => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        palette.classList.contains('open') ? closePalette() : openPalette();
      }
      if (e.key === 'Escape' && palette.classList.contains('open')) {
        closePalette();
      }
    });
    input.addEventListener('input', e => updateResults(e.target.value));
    input.addEventListener('keydown', e => {
      const items = results.querySelectorAll('.cmd-item');
      if (!items.length) return;
      let active = results.querySelector('.cmd-item.active');
      let idx = active ? parseInt(active.getAttribute('data-index')) : -1;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        idx = (idx + 1) % items.length;
        items.forEach(item => item.classList.remove('active'));
        items[idx].classList.add('active');
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        idx = idx <= 0 ? items.length - 1 : idx - 1;
        items.forEach(item => item.classList.remove('active'));
        items[idx].classList.add('active');
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (active) active.click();
      }
    });

    // Click on result
    results.addEventListener('click', e => {
      const item = e.target.closest('.cmd-item');
      if (!item) return;
      const idx = parseInt(item.getAttribute('data-index'), 10);
      // For now, scroll to curriculum section
      document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' });
      closePalette();
    });
  }

  // ── Quiz System ─────────────────────────
  let currentQuiz = 0;
  let quizScore = 0;
  let quizAnswered = false;

  function initQuiz() {
    const container = document.getElementById('quizContent');
    if (!container) return;
    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    const container = document.getElementById('quizContent');
    if (!container) return;
    if (currentQuiz >= QUIZZES.length) {
      renderQuizResults();
      return;
    }

    const q = QUIZZES[currentQuiz];
    const pct = ((currentQuiz + 1) / QUIZZES.length) * 100;
    document.getElementById('quizProgressFill').style.width = pct + '%';
    document.getElementById('quizProgressText').textContent = `Question ${currentQuiz + 1} of ${QUIZZES.length}`;

    let html = `
      <div class="quiz-question">${q.question}</div>
      <div class="quiz-feedback" id="quizFeedback"></div>
      <div class="quiz-options">`;
    q.options.forEach((opt, i) => {
      html += `
        <button class="quiz-option" data-index="${i}">
          <span class="quiz-option-letter">${String.fromCharCode(65 + i)}</span>
          <span>${opt}</span>
        </button>`;
    });
    html += `</div>
      <div class="quiz-nav">
        <button class="quiz-nav-btn" id="quizPrev" ${currentQuiz === 0 ? 'disabled' : ''}>Previous</button>
        <button class="quiz-nav-btn primary" id="quizNext" disabled>Next</button>
      </div>`;

    container.innerHTML = html;
    quizAnswered = false;

    // Option clicks
    container.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (quizAnswered) return;
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        const correct = idx === q.correct;
        quizAnswered = true;

        // Mark options
        container.querySelectorAll('.quiz-option').forEach((opt, i) => {
          if (i === q.correct) opt.classList.add('correct');
          else if (i === idx && !correct) opt.classList.add('wrong');
          opt.disabled = true;
        });

        // Show feedback
        const feedback = document.getElementById('quizFeedback');
        feedback.className = 'quiz-feedback show ' + (correct ? 'correct' : 'wrong');
        feedback.textContent = (correct ? '✅ Correct! ' : '❌ Not quite. ') + q.explanation;

        if (correct) quizScore++;

        // Enable next
        document.getElementById('quizNext').disabled = false;
        document.getElementById('quizNext').textContent = currentQuiz === QUIZZES.length - 1 ? 'See Results' : 'Next';
      });
    });

    // Navigation
    document.getElementById('quizPrev').addEventListener('click', () => {
      if (currentQuiz > 0) { currentQuiz--; renderQuizQuestion(); }
    });
    document.getElementById('quizNext').addEventListener('click', () => {
      if (currentQuiz < QUIZZES.length - 1) {
        currentQuiz++;
        renderQuizQuestion();
      } else {
        renderQuizResults();
      }
    });
  }

  function renderQuizResults() {
    const container = document.getElementById('quizContent');
    const pct = Math.round((quizScore / QUIZZES.length) * 100);
    const data = Progress.get();
    data.quizScore = quizScore;
    Progress.set(data);

    let html = `
      <div class="quiz-results" style="text-align:center;padding:40px 0;">
        <div style="font-size:4rem;margin-bottom:16px;">${pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '💪'}</div>
        <h3 style="font-family:var(--font-display);font-size:1.8rem;margin-bottom:8px;">Quiz Complete!</h3>
        <p style="color:var(--ink-soft);margin-bottom:24px;">You scored ${quizScore} out of ${QUIZZES.length} (${pct}%)</p>
        <div style="display:flex;gap:12px;justify-content:center;">
          <button class="btn btn-primary" id="restartQuiz">↻ Try Again</button>
        </div>
      </div>`;

    container.innerHTML = html;
    document.getElementById('quizProgressFill').style.width = '100%';
    document.getElementById('quizProgressText').textContent = 'Complete!';

    if (pct >= 80) {
      showToast('Amazing! You earned a quiz badge!', '🏆');
      launchConfetti();
    }

    document.getElementById('restartQuiz').addEventListener('click', () => {
      currentQuiz = 0;
      quizScore = 0;
      renderQuizQuestion();
    });

    updateProgressRing();
  }

  // ── Demo Run Buttons ────────────────────
  function initDemoButtons() {
    document.querySelectorAll('.demo-run-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const demo = btn.getAttribute('data-demo');
        const result = document.getElementById('demo-' + demo);
        if (!result) return;
        btn.disabled = true;
        btn.textContent = '⏳ Running...';
        result.classList.remove('show');

        setTimeout(() => {
          btn.disabled = false;
          btn.textContent = '▶ Run Example';
          result.classList.add('show');
          if (demo === 'linear-reg') {
            result.textContent = '✓ Model trained! MSE: 0.023 | R²: 0.94 | Training time: 0.3s';
          } else if (demo === 'sentiment') {
            result.textContent = '✓ Predictions: ["positive", "negative"] | Confidence: [0.94, 0.89]';
          }
        }, 1500);
      });
    });
  }

  // ── Copy Clone Command ──────────────────
  function initCopyButton() {
    const btn = document.getElementById('copyCloneBtn');
    const code = document.querySelector('.clone-box code');
    if (!btn || !code) return;
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(code.textContent).then(() => {
        showToast('Copied to clipboard!', '📋');
      });
    });
  }

  // ── Reset Progress ──────────────────────
  function initResetProgress() {
    const btn = document.getElementById('resetProgress');
    if (!btn) return;
    btn.addEventListener('click', () => {
      if (confirm('Reset all progress? This cannot be undone.')) {
        Progress.reset();
        currentQuiz = 0;
        quizScore = 0;
        renderPhases();
        updateProgressRing();
        showToast('Progress reset!', '🔄');
      }
    });
  }

  // ── Intersection Observer for Reveals ────
  function initRevealObserver() {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  // ── Mobile Menu ─────────────────────────
  function initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const nav = document.getElementById('headerNav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', () => {
      nav.classList.toggle('mobile-open');
      toggle.classList.toggle('open');
    });
  }

  // ── Smooth Scroll ───────────────────────
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // ── Header Scroll Effect ────────────────
  function initHeaderScroll() {
    const header = document.getElementById('siteHeader');
    if (!header) return;
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          header.classList.toggle('scrolled', window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ── Utilities ───────────────────────────
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str == null ? '' : str;
    return div.innerHTML;
  }
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // ── Initialize Everything ───────────────
  document.addEventListener('DOMContentLoaded', () => {
    updateThemeIcon();
    initParticles();
    initConfetti();
    renderPhases();
    updateProgressRing();
    animateCounters();
    initModal();
    initCommandPalette();
    initQuiz();
    initDemoButtons();
    initCopyButton();
    initResetProgress();
    initRevealObserver();
    initMobileMenu();
    initSmoothScroll();
    initHeaderScroll();

    // Theme toggle
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const current = root.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeIcon();
      });
    }

    // Progress change listener
    Progress.onChange(() => {
      updateProgressRing();
      renderPhases();
    });
  });

})();
