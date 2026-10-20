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

## Testing

See [TESTING.md](./TESTING.md) for the Phase 1 manual regression checklist. Browser/device testing is still required; the checklist is not evidence that every item has passed.

## Planned next improvements

- Future-dated tasks and recurring schedules.
- Upcoming agenda, missed-task handling, and planned-vs-actual focus reporting.
- More complete focus-cycle settings and reminder controls.
- Expanded accessibility and cross-device testing.


## Target Tally

The app now includes a separate **Target Tally** workspace at [tally.html](./tally.html), linked from the main Pomodoro Tasker screen.

- Use a simple Quick Counter with +/− controls, a reset confirmation, a custom label, and automatic local persistence.
- Create target countdown cards (for example, repeat a line 200 times) or open tallies.
- Count by tapping the card or its dedicated button; undo the last tap.
- Group counters into named routines and start fresh sessions.
- Review saved sessions, daily totals, completed targets, and recent activity.
- Switch between light and dark themes.
- Data is stored locally under a separate browser storage key from the Pomodoro timer/tasks.
- The tally page is included in the service-worker app shell for offline access after it has been cached.

The tally feature is an independent workspace and does not alter existing task or timer records.


## Unified app architecture and design system

Pomodoro Tasker and Target Tally are two workspaces within one app, not separate products. Both pages share the same global light/dark theme preference and the same design tokens.

- `theme.css` is the shared theme layer for palette, typography, surfaces, controls, and light-mode overrides.
- The theme toggle is available on both workspaces and saves to `pomodoro-tasker-theme-v1`.
- Theme changes synchronize between both pages when they are open in separate tabs.
- The existing task and timer storage keys remain unchanged. Target Tally retains its own `pomodoro-tasker-tally-v1` data key, so this visual integration does not overwrite task or timer data.
- Target card colours are still per-counter accents; the overall app palette remains consistent.
- The service-worker cache is versioned and uses navigation-only HTML fallbacks; failed asset requests no longer receive the app's HTML document as fake CSS/JavaScript.

The theme is applied globally. Responsive shared rules cover small phone, tablet, and desktop layouts, but real-browser visual QA and offline testing are still required. See TESTING.md.
