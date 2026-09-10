// ═══════════════════════════════════════════════════════════════
// Java OOPs Learning Platform - App Logic
// ═══════════════════════════════════════════════════════════════

(function() {
  'use strict';

  // ── State ──────────────────────────────────────────────────
  let currentView = 'dashboard';
  let currentUnit = null;
  let currentFilter = 'all';
  let currentQuestionIndex = 0;
  let filteredQuestions = [];
  let learned = loadProgress();

  const UNIT_NAMES = {
    1: 'OOPs Concepts and Java Programming',
    2: 'Arrays and OOP Constructs',
    3: 'Interfaces, Packages & Exception Handling',
    4: 'Multithreading & Stream-based I/O',
    5: 'GUI Programming with Swing'
  };

  const UNIT_COLORS = {
    1: '#6366f1', 2: '#22c55e', 3: '#f97316', 4: '#ef4444', 5: '#eab308'
  };

  // ── LocalStorage ───────────────────────────────────────────
  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem('java-oops-progress') || '{}');
    } catch(e) { return {}; }
  }

  function saveProgress() {
    localStorage.setItem('java-oops-progress', JSON.stringify(learned));
  }

  function toggleLearned(id) {
    learned[id] = !learned[id];
    if (!learned[id]) delete learned[id];
    saveProgress();
  }

  function isLearned(id) {
    return !!learned[id];
  }

  function getLearnedCount() {
    return Object.keys(learned).length;
  }

  function getUnitLearnedCount(unit) {
    return QUESTIONS.filter(q => q.unit === unit && isLearned(q.id)).length;
  }

  // ── Rendering ───────────────────────────────────────────────
  function render() {
    const app = document.getElementById('app');
    app.innerHTML = '';

    if (currentView === 'dashboard') {
      renderDashboard(app);
    } else if (currentView === 'questionList') {
      renderQuestionList(app);
    } else if (currentView === 'study') {
      renderStudy(app);
    }

    renderTopbar();
    renderProgressBar();
  }

  function renderTopbar() {
    const navBtns = document.getElementById('navBtns');
    if (!navBtns) return;

    let buttons = '';
    if (currentView !== 'dashboard') {
      buttons += `<button class="nav-btn" onclick="app.goDashboard()">Dashboard</button>`;
    }

    if (currentUnit !== null && currentView === 'questionList') {
      buttons += `<button class="nav-btn active">Unit ${currentUnit} Questions</button>`;
    }

    if (currentView === 'study') {
      buttons += `<button class="nav-btn" onclick="app.goToQuestionList()">Back to List</button>`;
      buttons += `<button class="nav-btn active">Study Mode</button>`;
    }

    navBtns.innerHTML = buttons;
  }

  function renderProgressBar() {
    const fill = document.getElementById('progressFill');
    const info = document.getElementById('progressInfo');
    if (!fill || !info) return;

    const total = QUESTIONS.length;
    const learnedCount = getLearnedCount();
    const pct = total > 0 ? (learnedCount / total * 100) : 0;

    fill.style.width = pct + '%';
    info.innerHTML = `<span>${learnedCount} of ${total} questions learned</span><span>${Math.round(pct)}%</span>`;
  }

  // ── Dashboard ──────────────────────────────────────────────
  function renderDashboard(container) {
    const totalLearned = getLearnedCount();
    const totalQuestions = QUESTIONS.length;

    let html = `
      <div class="dashboard-header">
        <h1>Java & OOPs Exam Prep</h1>
        <p>Most probable questions - cross-referenced from 6 sources</p>
        <div class="dashboard-stats">
          <div class="dash-stat">
            <div class="num">${totalQuestions}</div>
            <div class="label">Questions</div>
          </div>
          <div class="dash-stat">
            <div class="num">${totalLearned}</div>
            <div class="label">Learned</div>
          </div>
          <div class="dash-stat">
            <div class="num">5</div>
            <div class="label">Units</div>
          </div>
        </div>
      </div>
      <div class="dashboard">
    `;

    for (let unit = 1; unit <= 5; unit++) {
      const unitQuestions = QUESTIONS.filter(q => q.unit === unit);
      const essayCount = unitQuestions.filter(q => q.type === 'essay').length;
      const shortCount = unitQuestions.filter(q => q.type === 'short').length;
      const learnedInUnit = getUnitLearnedCount(unit);
      const pct = unitQuestions.length > 0 ? (learnedInUnit / unitQuestions.length * 100) : 0;
      const color = UNIT_COLORS[unit];

      html += `
        <div class="unit-card" data-unit="${unit}" onclick="app.openUnit(${unit})">
          <div class="unit-number">Unit ${unit}</div>
          <div class="unit-title">${UNIT_NAMES[unit]}</div>
          <div class="unit-stats">
            <span class="stat">${essayCount} Essay</span>
            <span class="stat">${shortCount} Short</span>
            <span class="stat learned">${learnedInUnit}/${unitQuestions.length} done</span>
          </div>
          <div class="unit-progress">
            <div class="unit-progress-fill" style="width:${pct}%; background:${color};"></div>
          </div>
        </div>
      `;
    }

    html += '</div>';

    if (totalLearned > 0) {
      html += `<div style="text-align:center; margin-top:20px;">
        <button class="reset-btn" onclick="app.resetProgress()">Reset All Progress</button>
      </div>`;
    }

    container.innerHTML = html;
  }

  // ── Question List ──────────────────────────────────────────
  function renderQuestionList(container) {
    const unitQuestions = QUESTIONS.filter(q => q.unit === currentUnit);

    let questions = unitQuestions;
    if (currentFilter === 'essay') {
      questions = unitQuestions.filter(q => q.type === 'essay');
    } else if (currentFilter === 'short') {
      questions = unitQuestions.filter(q => q.type === 'short');
    } else if (currentFilter === 'unlearned') {
      questions = unitQuestions.filter(q => !isLearned(q.id));
    }

    let html = `
      <div class="question-list-header">
        <button class="back-btn" onclick="app.goDashboard()">&#8592; Dashboard</button>
        <div class="unit-header-title">Unit ${currentUnit}: ${UNIT_NAMES[currentUnit]}</div>
      </div>
      <div class="filter-btns">
        <button class="filter-btn ${currentFilter==='all'?'active':''}" onclick="app.setFilter('all')">All (${unitQuestions.length})</button>
        <button class="filter-btn ${currentFilter==='essay'?'active':''}" onclick="app.setFilter('essay')">Essay</button>
        <button class="filter-btn ${currentFilter==='short'?'active':''}" onclick="app.setFilter('short')">Short Answer</button>
        <button class="filter-btn ${currentFilter==='unlearned'?'active':''}" onclick="app.setFilter('unlearned')">Not Learned</button>
      </div>
      <div class="question-list">
    `;

    questions.forEach((q, idx) => {
      const globalIdx = QUESTIONS.indexOf(q);
      const learnedClass = isLearned(q.id) ? 'learned' : '';
      const typeClass = q.type === 'essay' ? 'type-essay' : 'type-short';
      const typeLabel = q.type === 'essay' ? 'Essay' : 'Short';
      const probClass = q.probability === 'VERY HIGH' ? 'prob-very-high' :
                        q.probability === 'HIGH' ? 'prob-high' : 'prob-medium-high';
      const checkIcon = isLearned(q.id) ? '<span class="question-learned-icon">&#10003;</span>' : '';

      html += `
        <div class="question-item ${learnedClass}" onclick="app.startStudy(${globalIdx})">
          <span class="question-num">Q${idx+1}</span>
          <span class="question-type-badge ${typeClass}">${typeLabel}</span>
          <span class="question-text">${q.question.substring(0, 100)}${q.question.length > 100 ? '...' : ''}</span>
          <span class="question-prob ${probClass}">${q.probability}</span>
          ${checkIcon}
        </div>
      `;
    });

    html += '</div>';
    container.innerHTML = html;
  }

  // ── Study Mode ─────────────────────────────────────────────
  function renderStudy(container) {
    const q = filteredQuestions[currentQuestionIndex];
    if (!q) return;

    const typeClass = q.type === 'essay' ? 'type-essay' : 'type-short';
    const typeLabel = q.type === 'essay' ? 'Essay' : 'Short Answer';
    const probClass = q.probability === 'VERY HIGH' ? 'prob-very-high' :
                      q.probability === 'HIGH' ? 'prob-high' : 'prob-medium-high';
    const learnedBtnClass = isLearned(q.id) ? 'success learned' : 'success';

    let keyPointsHtml = '';
    if (q.keyPoints && q.keyPoints.length > 0) {
      keyPointsHtml = '<div class="key-points"><h4>Key Points</h4><ul>';
      q.keyPoints.forEach(point => {
        keyPointsHtml += `<li>${point}</li>`;
      });
      keyPointsHtml += '</ul></div>';
    }

    container.innerHTML = `
      <div class="study-view active">
        <div class="flashcard-container">
          <div class="flashcard" id="flashcard" onclick="app.flipCard()">
            <div class="flashcard-front">
              <div class="flashcard-top">
                <div class="flashcard-meta">
                  <span class="question-type-badge ${typeClass}">${typeLabel}</span>
                  <span class="question-prob ${probClass}">${q.probability}</span>
                </div>
                <span class="question-num">Unit ${q.unit} &middot; Q${currentQuestionIndex + 1}</span>
              </div>
              <div class="flashcard-question">${q.question}</div>
              ${keyPointsHtml}
              <div class="flashcard-hint">&#128065; Click card to reveal answer</div>
            </div>
            <div class="flashcard-back">
              <div class="flashcard-top">
                <div class="flashcard-meta">
                  <span class="question-type-badge ${typeClass}">${typeLabel}</span>
                  <span class="question-prob ${probClass}">${q.probability}</span>
                </div>
                <span class="question-num">Answer</span>
              </div>
              <div class="flashcard-answer">${q.answer}</div>
              <div class="flashcard-sources"><b>Sources:</b> ${q.sources}</div>
            </div>
          </div>
        </div>
        <div class="study-controls">
          <button class="control-btn" onclick="app.prevQuestion()" ${currentQuestionIndex === 0 ? 'disabled' : ''}>
            &#8592; Previous
          </button>
          <span class="study-counter">${currentQuestionIndex + 1} / ${filteredQuestions.length}</span>
          <button class="control-btn ${learnedBtnClass}" onclick="app.toggleLearnedCurrent()">
            ${isLearned(q.id) ? '&#10003; Learned' : 'Mark Learned'}
          </button>
          <button class="control-btn primary" onclick="app.nextQuestion()" ${currentQuestionIndex === filteredQuestions.length - 1 ? 'disabled' : ''}>
            Next &#8594;
          </button>
        </div>
      </div>
    `;
  }

  // ── Actions ────────────────────────────────────────────────
  function goDashboard() {
    currentView = 'dashboard';
    currentUnit = null;
    render();
  }

  function openUnit(unit) {
    currentUnit = unit;
    currentView = 'questionList';
    currentFilter = 'all';
    render();
  }

  function goToQuestionList() {
    currentView = 'questionList';
    render();
  }

  function setFilter(filter) {
    currentFilter = filter;
    render();
  }

  function startStudy(questionIndex) {
    currentQuestionIndex = 0;
    filteredQuestions = QUESTIONS.filter(q => q.unit === currentUnit);
    currentView = 'study';

    // Find the index within the filtered list
    const targetQ = QUESTIONS[questionIndex];
    const idx = filteredQuestions.findIndex(q => q.id === targetQ.id);
    if (idx >= 0) currentQuestionIndex = idx;

    render();
  }

  function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
  }

  function nextQuestion() {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      currentQuestionIndex++;
      render();
    }
  }

  function prevQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      render();
    }
  }

  function toggleLearnedCurrent() {
    const q = filteredQuestions[currentQuestionIndex];
    if (q) {
      toggleLearned(q.id);
      render();
    }
  }

  function resetProgress() {
    if (confirm('Reset all learning progress? This cannot be undone.')) {
      learned = {};
      saveProgress();
      render();
    }
  }

  // ── Public API ─────────────────────────────────────────────
  window.app = {
    goDashboard,
    openUnit,
    goToQuestionList,
    setFilter,
    startStudy,
    flipCard,
    nextQuestion,
    prevQuestion,
    toggleLearnedCurrent,
    resetProgress
  };

  // ── Init ───────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', render);
})();
