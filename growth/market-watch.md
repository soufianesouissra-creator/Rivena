# Morocco market watch (as of 2026-11-14)

> Round 1, 2026-11-14. 158 claims were fact-checked; 6 were kept. The other 152 were not proven wrong: the fact-checkers could not open the sites (this cloud environment's network blocked them) and the search limit ran out. Round 2 needs those sites allowed. RIVENA's own price ideas are not in this file while the repo is public.

**Read this first:** only a few items passed fact-checking this round, and all of them are about ERP. Our research session could not open most vendor, news and government sites, and the search limit ran out. So the fleet, regulation, channel and cost items are **unchecked, not proven wrong**. They are listed in section 7.

## 1. Five things to know

- **Business Central list price:** Essentials $80, Premium $110 and Team Members $8 per user per month, paid yearly ([Microsoft US pricing](https://www.microsoft.com/en-us/dynamics-365/products/business-central/pricing)). In France the same tiers cost 69,30 / 95,30 / 6,90 EUR excl. VAT ([Microsoft France pricing](https://www.microsoft.com/fr-fr/dynamics-365/products/business-central/pricing)). For 5 users on Essentials, that is 5 x $80 = $400 a month for licences alone, before any partner work (our calculation from [Microsoft US pricing](https://www.microsoft.com/en-us/dynamics-365/products/business-central/pricing)).
- **Business Central has no Moroccan price:** Microsoft's Morocco pricing page returned HTTP 404 on 2026-11-14 ([fr-ma page](https://www.microsoft.com/fr-ma/dynamics-365/products/business-central/pricing)). Moroccan buyers seem to get either the USD/EUR list price or a quote from a partner.
- **Business Central has been in Morocco since July 2021.** Its Moroccan features come from partner apps, not from Microsoft ([Microsoft docs](https://github.com/MicrosoftDocs/dynamics365smb-devitpro-pb/blob/main/dev-itpro/compliance/apptest-countries-and-translations.md); [2021 release plan](https://learn.microsoft.com/tr-tr/dynamics365-release-plan/2021wave1/smb/dynamics365-business-central/countryregional-expansion--morocco)).
- **Odoo's Moroccan module has no SIMPL-TVA export:** it installs itself for Moroccan companies in versions 18.0 and 19.0, and its VAT report follows the DGI return lines (10, 20, 30, 40 ...). But the open-source code has no SIMPL-TVA or DGI file export ([Odoo code](https://github.com/odoo/odoo/blob/18.0/addons/l10n_ma/__manifest__.py)). Odoo Enterprise was not checked.
- **Dolibarr is free** (open source) and includes a Moroccan chart of accounts. The cost of hosting and setup is not given ([Dolibarr code](https://github.com/Dolibarr/dolibarr)).

## 2. Fleet tracking: competitors

| Name | Origin | Price as published | Notable features | Source |
|---|---|---|---|---|
| None verified | – | – | – | – |

No fleet competitor, price or feature passed fact-checking this round. The names we found but could not check are in section 7.

**Where RIVENA Fleet is stronger or weaker:** we cannot say yet, because we have no verified competitor features to compare with. Next round, compare on: price per vehicle, Arabic interface, CAN and fuel data, engine hours for machines, and driver ID.

## 3. ERP for SMEs: competitors

| Name | Origin | Price as published | Notable features | Source |
|---|---|---|---|---|
| Microsoft Dynamics 365 Business Central | Microsoft, USA. Sold in Morocco through partners. | US: Essentials $80.00, Premium $110.00, Team Members $8.00 per user per month, paid yearly. The page shows "$" with no currency code ([US](https://www.microsoft.com/en-us/dynamics-365/products/business-central/pricing)). France: 69,30 / 95,30 / 6,90 EUR excl. VAT per user per month, billed yearly ([FR](https://www.microsoft.com/fr-fr/dynamics-365/products/business-central/pricing)). Morocco: page returns HTTP 404 ([MA](https://www.microsoft.com/fr-ma/dynamics-365/products/business-central/pricing)). Microsoft says these prices are only a guide and the final price shows at checkout. | Three licence tiers. Yearly commitment. Available in Morocco since July 2021, with Moroccan features from partner apps ([docs](https://github.com/MicrosoftDocs/dynamics365smb-devitpro-pb/blob/main/dev-itpro/compliance/apptest-countries-and-translations.md)). Not verified: CGNC, SIMPL-TVA, e-invoicing, payroll, Arabic. | [US pricing](https://www.microsoft.com/en-us/dynamics-365/products/business-central/pricing), [FR pricing](https://www.microsoft.com/fr-fr/dynamics-365/products/business-central/pricing), [docs](https://github.com/MicrosoftDocs/dynamics365smb-devitpro-pb/blob/main/dev-itpro/compliance/apptest-countries-and-translations.md) |
| Odoo, "Morocco - Accounting" module | Odoo SA | Not verified (see section 7) | Moroccan chart of accounts, built with help from Caudigef. Installs itself for Moroccan companies in versions 18.0 and 19.0. The VAT report follows DGI return sections A-D and lines 10, 20, 30, 40 ..., and some lines can be edited by hand ([code](https://github.com/odoo/odoo/blob/18.0/addons/l10n_ma/__manifest__.py)). No SIMPL-TVA or DGI file export in the open-source module. Enterprise not checked. | [Odoo code](https://github.com/odoo/odoo/blob/18.0/addons/l10n_ma/__manifest__.py) |
| Dolibarr | Foreign open-source project, not a Moroccan company | Free (open source). Hosting and setup cost not given ([code](https://github.com/Dolibarr/dolibarr)). | Moroccan chart of accounts, quotes and invoices, CRM. The customer hosts, sets up and maintains it. | [Dolibarr code](https://github.com/Dolibarr/dolibarr) |

**Where RIVENA ERP is stronger or weaker (verified features only):**
- **Stronger, SIMPL-TVA:** RIVENA ERP exports the deduction statement as Excel and EDI XML. Odoo's open-source Moroccan module has a VAT report but no SIMPL-TVA or DGI file export ([Odoo code](https://github.com/odoo/odoo/blob/18.0/addons/l10n_ma/__manifest__.py)). For Business Central, Moroccan tax features come from partner apps that we could not check.
- **Stronger, local fit:** RIVENA ERP is in French and priced in MAD. Business Central has no Moroccan price page ([HTTP 404](https://www.microsoft.com/fr-ma/dynamics-365/products/business-central/pricing)), lists prices in USD/EUR with a yearly commitment, and needs a partner for Moroccan features ([docs](https://github.com/MicrosoftDocs/dynamics365smb-devitpro-pb/blob/main/dev-itpro/compliance/apptest-countries-and-translations.md)).
- **Stronger than Dolibarr's verified features** (chart of accounts, quotes and invoices, CRM): RIVENA ERP also has e-signature on quotes, dunning with payment promises, recurring contracts and a client portal. Dolibarr may have more features that we did not check.
- **Weaker, price:** Dolibarr's licence is free. The customer pays for hosting and setup instead, and that amount is not given ([Dolibarr code](https://github.com/Dolibarr/dolibarr)).
- **Weaker, scope:** RIVENA ERP has no payroll and handles only one company today. We could not check whether competitors cover Moroccan payroll or several companies.

## 4. Regulations and deadlines that drive demand

| What | Date | Who is affected | Source |
|---|---|---|---|
| Nothing verified this round | – | – | – |

Do not quote any e-invoicing, SIMPL-TVA, CNDP, ANRT or tachograph rule or date until it has been checked on an official site. These topics are listed in section 7.

## 5. Channels and partners

| Channel | Size / number | How to approach | Source |
|---|---|---|---|
| Nothing verified this round | – | – | – |

The only related fact is that Business Central reaches Morocco through partners and their apps ([Microsoft docs](https://github.com/MicrosoftDocs/dynamics365smb-devitpro-pb/blob/main/dev-itpro/compliance/apptest-countries-and-translations.md)). No Moroccan partner was named or checked.

## 6. Input costs

Nothing verified this round. No price for trackers, SIM cards, installation or hosting passed fact-checking. See section 7, and check the FMC150 status first.

## 7. What we could not verify (do not rely on these)

We found these but could not check them. They may be true or false.

- **Check first:** a claim that Teltonika now lists the FMC150 (our tracker) as "End of life", with the FMx250 series as its replacement. Also unchecked: any Moroccan price or ANRT approval for Teltonika trackers.
- **Fleet competitors (prices and features unchecked):** 7DAYS Techno, Mia Fleet, Navfleet/GeoFlotte, StarGPS, GPS Tracker Maroc, Mobitrack, GeoBox, GEOCOM Maroc, GeoPrime, STG Maroc, Frotcom Morocco, Fleeti, Optimum Automotive / Mapping Control / eDrive, AFAQY, Maroc Telecom (MT-Track, Smart Car), Dakitrack, Navigeo, T&T (FINOU Maps), MAGPS, Digiparc, Uplogistix, Allo GPS, EmiDATA, Sendatrack, Geo4Net, Synapsis KS (icFleet), Wialon partners (HTC Solutions Maroc, Adfeed, Détroit Hi-Tech), MiX (via Farep), MICHELIN Connected Fleet (via Mobiz), Webfleet, CleanMob, Track Prime, and AXA Assurance Maroc with Pematech. We found no Moroccan reseller for Geotab, Webfleet, Ctrack, Cartrack or Samsara. That does not mean there is none.
- **ERP competitors:** Sage 50 and Sage 100 (Sage Maroc), Odoo prices and Moroccan Odoo partners, Odoo payroll add-ons, SAP Business One and its Moroccan partners, Moroccan Business Central partners and localisation apps, Zoho Books, EBP Maroc, WaveSoft, Inyad, Wakingo, Factura MA, Generafi, OJRA, Humantal, ClicPaie, Aliphia, Kolonell, AY Automate. One vendor guide says Odoo gives a VAT return "ready for SIMPL-TVA". Odoo's open-source code does not support this, and Odoo Enterprise was not checked.
- **Rules and deadlines:** e-invoicing start date and the planned free DGI portal; SIMPL-TVA obligations and file format; Finance Law 2026 changes and current VAT rates; required invoice mentions (ICE, IF); reporting under the payment-terms law; CNSS/AMO rates (sources disagree); CNDP rules for GPS in employee vehicles; ANRT approval for trackers; tachograph rules and the May 2026 Ministry/CDG digital tachograph platform; car-rental rules; dashcam rules.
- **Market figures:** size of the vehicle fleet, new-vehicle sales for 2025 and 2026, fleet-telematics market size, number of SMEs, number of accountants, price ranges from local blogs and guides, fuel-saving claims.
- **Channels:** insurers bundling GPS with fleet insurance, fuel-card offers (Afriquia Solutions Pro), accountants' professional bodies, transport federations (FNTR, AMTRI), public tenders, leasing and rental companies, trade fairs (GITEX Africa and others), SME digitalisation funding (Maroc PME, Tamwilcom).
- **Input costs:** tracker prices in Morocco (Teltonika and others), M2M/IoT SIM prices from Maroc Telecom, Orange Maroc and inwi, foreign IoT SIMs (Telnyx, Domotec), Odoo hosting prices.
