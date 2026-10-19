# Pomodoro Tasker

Pomodoro Tasker is a mobile-first, installable task planner and focus timer. The first working version is a static Progressive Web App, with no account or server required.

## Included in this starter release

- Add, edit, complete, and delete tasks for today.
- Give tasks a start time, estimated focus duration, priority, and optional notes.
- Start a focus session directly from a task.
- Focus timer presets (25-minute focus, 5-minute short break, and 15-minute long break), pause/resume, and reset.
- Local task and timer persistence.
- Browser notification permission, scheduled-task prompts while the app is open, and a sound when the focus timer finishes.
- JSON export/import for backups.
- Installable PWA manifest, app icon, and service-worker app-shell caching for offline use.

## Run locally

Serve the repository using any static HTTP server. For example, with Python installed:

```bash
python -m http.server 8080
```

Open http://localhost:8080. Service workers and web notifications require localhost or HTTPS; opening the HTML directly as a file will not enable them.

## Offline use and reminders

After the first successful load and service-worker installation, the main app shell and saved tasks are available offline. Task data is stored in the browser's local storage for this browser profile.

Web notifications and exact-time reminders are limited by browser and operating-system behavior. Scheduled prompts in this version are checked while the app's JavaScript is running; they are not guaranteed when the app is closed, the device is asleep, or the operating system suspends the browser. Install the PWA and test on the target device before relying on reminders.

## Privacy and backup

There is no account, server database, or analytics in this version. Export a JSON backup before clearing browser data or changing devices. Importing a backup replaces the tasks currently stored in the browser.

## Planned next improvements

- Future-dated tasks and recurring schedules.
- Upcoming agenda, missed-task handling, and planned-vs-actual focus reporting.
- More complete focus-cycle settings and reminder controls.
- Expanded accessibility and cross-device testing.
