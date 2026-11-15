# Rivena Fleet: changelog

From the git history of `Traking-fleet` (branch `claude/new-session-2ibknw`). Newest first; client names left out.

## 2026-11-15
- *(on branch `claude/fleet-fixes`, not live yet)* Live alerts reach the alert centre and the bell again.
- *(same branch)* Notification settings: e-mail and push boxes that were never saved now show OFF, as the server treats them.
- *(same branch)* Arabic interface: reports and the trip PDF export are produced in French instead of failing.
- *(same branch)* "Send a test" for push sends a real push to your own phones and says why when it cannot.
- *(on branch `claude/fleet-retention`, not live yet)* Trips, stops, driving events and hourly/daily summaries older than one year are deleted automatically, for every client (CNDP Délibération 17-2014). Date pickers and history reports stop at the first day still kept and say why. Backups taken before each deploy are kept 30 days.

  FAQ entry to add once it is live (draft, needs OK):
  > **Q. Combien de temps RIVENA conserve-t-il l'historique de mes véhicules ?** Les positions GPS, les trajets, les arrêts, les événements de conduite et les synthèses par heure et par jour de plus d'un an sont supprimés automatiquement, pour tous les clients, conformément à la délibération CNDP n° 17-2014 sur la géolocalisation des véhicules utilisés par les salariés. Les dates de plus d'un an ne peuvent donc plus être choisies dans l'historique, les rapports kilométriques, carburant et de conduite. Les sessions de travail et le relevé horamètre des engins sont conservés.

## 2026-10-31
- Edge: other platforms on the same server can add their own Caddy sites.

## 2026-10-24
- Map: truck/van/car/machine markers, red when stopped, road shown while driving; "Y aller" opens Google Maps or Waze.
- Fuel: vehicle filter; new "km and diesel per day" report sheet; no more false siphon alerts from a sleeping CAN bus.

## 2026-10-21
- Super administrator can open any client organisation with its administrator's rights.

## 2026-10-18
- Platform view of every vehicle of every organisation.
- Fuel alerts: over-consumption and tank drops on OBD cars.
- Working hours, with an alert when an engine starts outside them.
- Papers and oil change: last km, next km and alert threshold.

## 2026-10-17
- Fleet report dashboard (filters, KPIs, charts, per-vehicle table, CSV) and its API.
- Eco-driving: factors from the accelerator pedal, per-driver summary and advice in French.
- Arabic as a third language (right-to-left); change password from the account menu.
- Mobile: store-ready Android and iPhone builds.
- Trip fuel from tank level or average consumption; engine overheating and low-battery alerts.
- Fixes: vehicle page crash, fuel shown as 0 when the vehicle sends only litres or only %.

## 2026-10-10
- Map: real street address in the vehicle card, list by zone, current-trip line, street names on aerial view.

## 2026-10-05 to 2026-10-07
- Papers, oil changes and driving licences on one screen; RPM, speed and fuel through the OBD socket.
- Mobile: map, trips and reports tabs; push notifications fixed on real phones.

## 2026-10-03
- Notification bell, engine start/stop rules, history per car; trip replay and PDF trip log.
- Production map matching (OSRM) and address lookup switched on.

## 2026-08-09 to 2026-08-22: phases 0–10
- Ingestion, live map, trips, CAN, fuel, drivers and immobilizer, alerts and geofences, routes,
  maintenance, worksites and reports, integrations and admin; then tyres, stock, inspections (DVIR),
  cold chain, panic button, trailers, transport orders with proof of delivery, phone app.
