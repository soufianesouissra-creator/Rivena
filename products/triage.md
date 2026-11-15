# Client feature and bug triage

One line per request. Products agent keeps it sorted; Soufiane decides what goes into a roadmap.
No client names while this repo is public: use a short code.

| Date | Product | Client code | Type (bug / feature / question) | Request | Severity | Proposed action | Status |
|---|---|---|---|---|---|---|---|
| 2026-11-15 | ERP | interne | bug | Portail client : une facture de solde payée montre l'acompte déduit comme reste dû (aussi dans l'encours et l'échu) | Haute : le client croit devoir de l'argent | Corrigé sur `claude/portal-deposit`, vérifié par `verify:portail` | En attente d'accord |
| 2026-11-15 | Fleet | interne | bug | Les alertes en direct n'arrivent pas dans l'app web : le serveur envoie `{ alert }`, le web lit l'enveloppe nue (pop-ups et couleur d'alerte sur la carte jamais affichées) | Haute | Corrigé : commit `0378e07` sur `claude/fleet-fixes`, relu sans problème | En attente d'accord |
| 2026-11-15 | Fleet | interne | bug | Mes notifications : les cases e-mail et push jamais enregistrées s'affichent cochées, mais le worker n'envoie qu'aux abonnements enregistrés (l'utilisateur croit être prévenu d'un choc, il ne l'est pas) | Haute | Corrigé : commit `d9da273` sur `claude/fleet-fixes` (e-mail/push décochés par défaut, in-app coché), relu sans problème | En attente d'accord |
| 2026-11-15 | Fleet | interne | bug | Interface en arabe : « Générer », « Enregistrer le modèle », « Programmer » et l'export PDF des trajets envoient la langue `ar`, que la base refuse (seuls `fr` et `en`) : échec | Moyenne | Corrigé : commit `f130dc1` sur `claude/fleet-fixes` (document en français), relu sans problème | En attente d'accord |
| 2026-11-15 | Fleet | interne | bug | « Envoyer un test » pour le push répond « non configuré » (traité comme un e-mail) : le push n'est jamais testé | Basse | Corrigé : commits `db4fe26` et `4adb6f1` (suite à la relecture) sur `claude/fleet-fixes` ; le test base de données reste à passer en CI | En attente d'accord |
| 2026-11-15 | Fleet | interne | manque | Échéance SIM et fiche de pose : aucun formulaire pour les saisir | Basse | Roadmap | Proposé |
| 2026-11-15 | ERP | interne | manque | Pas de « mot de passe oublié » : seul un administrateur peut réinitialiser | Moyenne | Roadmap | Proposé |
| 2026-11-15 | ERP | interne | manque | Révocation d'un lien de signature : la route existe, aucun bouton ne l'appelle | Basse | Roadmap | Proposé |
| 2026-11-15 | Fleet | interne | décision | Couleur « alerte » (violet) sur la carte : jamais affichée aujourd'hui ; si on l'active, rien ne l'efface (le serveur n'envoie pas la clôture d'une alerte) | Moyenne | Soufiane choisit : quand le violet doit-il disparaître ? (alerte traitée, ou après X minutes) | Décision |
| 2026-11-15 | Fleet | interne | décision | Durée de conservation : trajets et arrêts sans limite, synthèses horaires et journalières 5 ans (`0002_continuous_aggregates.sql:261-264`, rien dans `0003_trips.sql`) ; la CNDP (délibération 17-2014) fixe 1 an maximum pour les véhicules de salariés | Haute avant de vendre « conforme CNDP » | Soufiane choisit : limite fixe à 1 an, ou réglable par client | Décision |
| 2026-11-15 | Fleet | interne | bug | Mes notifications : la plage « heures calmes » s'ouvre vide au lieu de la valeur enregistrée ; enregistrer une autre case l'efface | Moyenne | À corriger | Proposé |
| 2026-11-15 | Fleet | interne | bug | Décocher l'in-app masque le type dans le fil, mais les pop-ups en direct arrivent quand même (le pont ne filtre pas par préférence) | Basse | À corriger | Proposé |
| 2026-11-15 | Fleet | interne | test | Test `alerts-working-hours` « reads the hours in the organisation zone » échoue : il suppose Casablanca à UTC+1, les données de fuseau de Node (tz 2026e) donnent UTC+0 en octobre 2026. Échouait déjà avant ces corrections | Basse | Vérifier l'heure légale au Maroc puis corriger le test (ou le code) | À vérifier |
