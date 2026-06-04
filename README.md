# Patient Care Gap Dashboard — Practice Project

## Overview

Build a full-stack dashboard widget that displays patients with overdue preventive care actions. This project simulates a Byteboard-style technical assessment for a provider-facing healthcare platform.

---

## The Product

A dashboard widget used by healthcare providers and care coordinators to identify patients who are overdue for preventive care procedures (annual wellness visits, flu shots, A1C tests, etc.) and mark them as outreached.

---

## What You'll Build

### Backend (Node.js / TypeScript / Express)

**`GET /patient-care-gaps`**

Returns a paginated list of care gaps filtered by query params.

Query params (all optional):

- `careGapType` — filter by procedure type ID (default: all types)
- `overdueMin` — minimum days overdue (default: 0)
- `overdueMax` — maximum days overdue (default: 365)
- `page` — page number (default: 1)
- `pageSize` — results per page (default: 25)

Response:

```json
{
  "data": [
    {
      "careGap": { "id": "string", "type": "string" },
      "patient": { "id": "string", "name": "string" },
      "daysOverdue": 14
    }
  ],
  "total": 100,
  "page": 1,
  "pageSize": 25
}
```

---

**`GET /preventive-care/types`**

Returns a list of preventive care procedure types for populating the filter dropdown.

Response:

```json
{
  "data": [{ "id": "string", "name": "string" }]
}
```

---

**`POST /patients/:patientId/care-gaps/:careGapId/outreach`**

Marks a specific care gap as outreached for a patient. Timestamp recorded server-side.

Request body:

```json
{ "outreached": true }
```

Response: `200 OK` or error

---

### Frontend (React / TypeScript)

**Component Structure:**

```
<CareGapDashboard>         — outer container, context provider
  <CareGapFilters>         — filter UI container
    <CareGapTypeDropdown>  — dropdown populated from /preventive-care/types
    <DaysOverdueRange>     — min/max inputs with optional slider
  <CareGapList>            — list container with TanStack Query
    <CareGapTable>         — table with headers
      <CareGapRow>         — individual row
        <OutreachButton>   — POST /outreach on click, invalidates cache
```

**State Management:**

- Use React Context for shared filter state between `<CareGapFilters>` and `<CareGapList>`
- Use TanStack Query for data fetching, caching, and cache invalidation

**UI Requirements:**

- Loading state while fetching
- Error state with retry on failure
- Empty state when no results match filters
- "Mark as Outreached" button per row — pessimistic update (row stays until backend confirms)
- Error state with retry on failed outreach action

---

## Design Decisions & Tradeoffs

### Server-side filtering

Filtering is handled on the backend to support pagination and ensure data freshness. Accepts a brief loading state on each filter change as the tradeoff.

### Separate rows per care gap (not grouped by patient)

Each care gap gets its own row since this is an action-oriented widget. The procedure takes precedence over the overall patient picture. A patient filter could be added to address this.

### Pessimistic update on Mark as Outreached

In a healthcare context, data integrity matters more than perceived speed. The row stays in the list until the backend confirms the update. Clear error state shown if the request fails.

### TanStack Query for caching

Cache invalidated on outreach action to pull a fresh list. Auto-refresh every 5 minutes and on initial widget load.

---

## Scope & Prioritization

If time is limited, build in this order:

1. **Backend endpoint** — `GET /patient-care-gaps` with mock data (~15 min)
2. **List component** — fetch and display data with loading/error states (~25 min)
3. **Filters** — dropdown and days overdue range (~15 min)
4. **Outreach action** — POST + cache invalidation (~10 min)
5. **Comments** — describe what you'd build next with more time (~5 min)

---

## Mock Data

Use hardcoded mock data arrays in the backend for this exercise. No database required.

Example care gap types:

- `{ id: "1", name: "Annual Wellness Visit" }`
- `{ id: "2", name: "Flu Shot" }`
- `{ id: "3", name: "A1C Test" }`
- `{ id: "4", name: "Blood Pressure Check" }`

Example patients: generate 50-100 mock care gap records with random patients, care gap types, and days overdue values (1-365).

---

## Tech Stack

- **Backend:** Node.js, TypeScript, Express
- **Frontend:** React, TypeScript, TanStack Query
- **Styling:** Your choice — keep it simple
- **No database required** — mock data only

---

## Notes

- Comment your code throughout — especially assumptions and decisions
- If you run out of time on a section, add a comment describing what you would have built
- Edge cases to handle: empty results, invalid query params, failed outreach requests, network errors
- Accessibility: use semantic HTML, proper labels on form elements
