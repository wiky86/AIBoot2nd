/* ═══ UBION AI 디지털 교육센터 — common.js ═══ */

/** 탭 전환 (서브페이지 공통) */
function switchTab(idx) {
  document.querySelectorAll('.tab-btn').forEach((b, i) => b.classList.toggle('active', i === idx));
  document.querySelectorAll('.tab-panel').forEach((p, i) => p.classList.toggle('active', i === idx));
}
