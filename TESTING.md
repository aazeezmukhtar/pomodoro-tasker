# Regression test plan — Pomodoro Tasker + Target Tally

Run checks on HTTPS or a local static server (python -m http.server 8080). Browser storage and service workers do not work as intended from a file URL.

## Automated/source checks
- [ ] Run node --check app.js and node --check tally.js (syntax only; does not execute browser APIs).
- [ ] Confirm both HTML pages load theme.css after their workspace stylesheet.
- [ ] Confirm storage keys pomodoro-tasker-data-v1, pomodoro-tasker-timer-v1, pomodoro-tasker-tally-v1, and pomodoro-tasker-theme-v1 remain unchanged.
- [ ] Confirm the service-worker cache version is incremented and all listed app-shell files exist.
- [ ] Confirm the service-worker page fallback is navigation-only, never a fake CSS/JS/image response.

## Tasks — CRUD
- [ ] Add a title-only task and a task with time, duration, priority, and notes.
- [ ] Edit a task, complete/reopen it, check filters/counts, then delete it.
- [ ] Reload and verify task data and completion state persist.
- [ ] Enter HTML-like text in title/notes and verify it renders as text.
- [ ] Export task backup; import it; cancel an import and test malformed JSON.

## Timer lifecycle
- [ ] Start, pause, resume, reset, and switch 25/5/15-minute presets.
- [ ] Start a timer from a task and confirm the task label and focus-time accounting.
- [ ] Test a short expiry and confirm completion feedback and accounting happen once.
- [ ] Reload during a running timer and verify remaining time is reconciled correctly.

## Quick counter
- [ ] Open Quick count from the tally navigation and verify the initial count and default label.
- [ ] Increment several times, decrement once, and verify the count never goes below zero.
- [ ] Rename the counter, reload, leave and return, and verify the name/count persist.
- [ ] Reset a non-zero count, confirm the prompt, and verify reset returns it to zero; cancel reset and verify the value stays unchanged.
- [ ] Export/import a tally backup and verify quick-counter label/count are included and restored; import an older backup without quickCounter and verify the feature safely defaults to zero.

## Target Tally — counters, undo, routines, history
- [ ] Create/edit/delete a target counter and an open tally.
- [ ] Count several times, undo one count, and verify count and daily totals decrease correctly.
- [ ] Complete a target, verify completion/history, then start a fresh session.
- [ ] Create/edit/delete a routine, assign counters, start a fresh routine, and verify links remain correct.
- [ ] Verify history and stats after counting, undoing, completing, and resetting.
- [ ] Export tally backup, cancel restore, restore a valid backup, and test invalid JSON.
- [ ] Verify Tally restore does not change task/timer data, and task restore does not overwrite Tally data.

## Themes, navigation, responsiveness
- [ ] Switch light/dark theme on each page; reload and verify persistence.
- [ ] Open both pages in separate tabs, switch theme in one, and verify the other tab synchronizes.
- [ ] Check consistent typography, surface colours, buttons, focus outlines, and feedback.
- [ ] Test 320px, 360px, 390px, 768px, and desktop widths; verify no page-level horizontal overflow.
- [ ] Verify touch targets, dialog scrolling, forms, tabs, and links between both workspaces.

## Offline and fresh install
- [ ] Clear site data, go online, open both pages once, and wait for service-worker installation.
- [ ] Reload, switch offline, open both pages via internal navigation and direct URL, and verify cached app shells render.
- [ ] While offline, verify uncached CSS/JS/image requests do not return HTML.
- [ ] Update the app and confirm the new cache version replaces older pomodoro-tasker-* caches without deleting unrelated caches.

## Test record
Record device/browser, viewport width, date, pass/fail, and console/network errors. This document is a test plan; mark items complete only after testing on the target browser/device. Source edits alone do not imply browser testing.
