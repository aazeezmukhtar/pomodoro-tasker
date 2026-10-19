# Phase 1 — Manual Smoke Test Checklist

Use this checklist on the deployed HTTPS site or on `http://localhost` after serving the repository with a static server. Browser storage, notifications, and service workers behave differently when opening `index.html` directly as a file.

## Task management
- [ ] Add a task with a title only; it appears in Today's plan.
- [ ] Add a task with a start time, duration, priority, and notes; each value is displayed correctly.
- [ ] Edit a task title and details; verify the updated values and the “Task updated” confirmation.
- [ ] Complete a task, switch between All tasks / To do / Completed, and verify the counts and filters.
- [ ] Delete a task and confirm it disappears.
- [ ] Reload the page; saved tasks and completion state remain.
- [ ] Enter HTML-like text in the title and notes; it displays as text rather than markup.

## Timer
- [ ] Start, pause, resume, and reset the timer.
- [ ] Switch between the 25-, 5-, and 15-minute presets.
- [ ] Start a timer from a task and verify the task title appears in the timer area.
- [ ] For a short test, temporarily set a preset or task duration to a small value and let the timer finish; verify completion feedback and focus time accounting.
- [ ] Let a running timer expire while the tab is backgrounded, then return; verify it completes once and records focus time once.
- [ ] Reload after a task-linked timer expires; verify the expired session is completed and accounted for once.

## Reminders and offline behavior
- [ ] Grant notification permission and verify the UI reports that notifications are enabled.
- [ ] Schedule a task a minute or two ahead and keep the app open; verify a prompt appears around the scheduled minute.
- [ ] Test Start now, Remind in 5m, and Skip in the prompt.
- [ ] Reload after the service worker has installed, then use the app offline; verify the app shell and saved local tasks still load.
- [ ] Confirm expectations: scheduled task prompts are only checked while app JavaScript is running and are not guaranteed while the app is closed or the device is asleep.

## Backup and restore
- [ ] Export a JSON backup and confirm the downloaded file contains the expected tasks.
- [ ] Import that backup and verify the task list is restored.
- [ ] Cancel the import confirmation and verify existing tasks remain unchanged.
- [ ] Try an invalid JSON file and verify a readable error message appears.

## Test record
Record browser/device, date, pass/fail, and any console errors before considering Phase 1 fully validated. This checklist is a manual test plan; checked items should only be marked after testing on the target browser/device.
