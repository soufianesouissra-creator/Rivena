# Rivena Fleet: roadmap (proposal)

Repo `Traking-fleet` (code name `fleetcore`) · NestJS API, React web, Expo mobile, PostgreSQL/TimescaleDB,
Redis · Teltonika FMC150 trackers · live at fleet.rivena.org (own Docker Compose stack on the VPS).
**Multi-tenant already**, with real client fleets in production.

Status: **proposal**. Soufiane decides what moves to "Now".

## Done (see `changelog.md`)
Live map, trips and replay, engine hours for construction machines, CAN data and fault codes, fuel
(refuel/siphon detection, fuel cards), drivers and eco-driving score, immobilizer, alerts and geofences,
route optimisation, maintenance, papers and oil changes, tyres, worksites, reports, API keys and
webhooks, Android/iPhone app, French/English/Arabic.

## Now: reliability for current clients
| # | Item | Source |
|---|---|---|
| 1 | Check the "fuel consumed" counter on one car model (reads ~1,392 L after a few hours: wrong scale or wrong field) before it goes into any report | Handoff 17 Oct, item 3 |
| 2 | Show more of the CAN data already stored: odometer, fuel used, engine temperature, battery voltage on the vehicle page | Handoff item 4 |
| 3 | Server housekeeping: delete the backup env file that holds secrets; plan the pending kernel reboot at night | Handoff item 6; needs Soufiane's OK |
| 4 | Run the load test (200 msg/s, < 3 s to map, API p95 < 300 ms) and publish the numbers | README gap 9; needed before selling to large fleets |
| 5 | Update the README "Known gaps" (admin screens and driver page are now routed) | README is out of date |

## Next: to sell more
| # | Item | Why |
|---|---|---|
| 6 | Client onboarding pack: price per vehicle, tracker + installation, SIM, contract template | Website pricing and quotes |
| 7 | Monthly client report e-mailed automatically (km, fuel, idle time, alerts, eco score) | Shows value each month; reduces churn |
| 8 | Webhook safety: block internal addresses, rate-limit per subscriber | README gaps 4–5; needed before opening the API to clients |
| 9 | Link with ERP: one client record; fleet subscriptions invoiced by ERP contracts | Billing without double entry |

## Later
- Google basemap (work in progress kept in `git stash` on the server).
- Per-tenant data retention (README: real limitation today).
