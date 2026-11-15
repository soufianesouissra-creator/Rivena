# Client feature and bug triage

One line per request. Products agent keeps it sorted; Soufiane decides what goes into a roadmap.
No client names while this repo is public: use a short code.

| Date | Product | Client code | Type (bug / feature / question) | Request | Severity | Proposed action | Status |
|---|---|---|---|---|---|---|---|
| 2026-11-15 | ERP | interne | bug | Portail client : une facture de solde payée montre l'acompte déduit comme reste dû (aussi dans l'encours et l'échu) | Haute : le client croit devoir de l'argent | Corrigé sur `claude/portal-deposit`, vérifié par `verify:portail` | En attente d'accord |
| 2026-11-15 | Fleet | interne | bug | Les alertes en direct n'arrivent pas dans l'app web : le serveur envoie `{ alert }`, le web lit l'enveloppe nue (pop-ups et couleur d'alerte sur la carte jamais affichées) | Haute | Corrigé : commit `0378e07` (branche `claude/fleet-live-alerts`, repris dans `claude/fleet-fixes`), tests à l'appui | En attente d'accord |
| 2026-11-15 | Fleet | interne | bug | Mes notifications : les lignes jamais enregistrées s'affichent cochées, mais le worker n'envoie qu'aux abonnements enregistrés | Moyenne | À vérifier puis corriger | À vérifier |
| 2026-11-15 | Fleet | interne | bug | Rapports générés avec l'interface en arabe : la base n'accepte que `fr` et `en` (contrainte CHECK), la génération échoue sans doute | Moyenne | À vérifier puis corriger | À vérifier |
| 2026-11-15 | Fleet | interne | bug | « Envoyer un test » pour le push répond « non configuré » (traité comme un e-mail) | Basse | À vérifier puis corriger | À vérifier |
| 2026-11-15 | Fleet | interne | manque | Échéance SIM et fiche de pose : aucun formulaire pour les saisir | Basse | Roadmap | Proposé |
| 2026-11-15 | ERP | interne | manque | Pas de « mot de passe oublié » : seul un administrateur peut réinitialiser | Moyenne | Roadmap | Proposé |
| 2026-11-15 | ERP | interne | manque | Révocation d'un lien de signature : la route existe, aucun bouton ne l'appelle | Basse | Roadmap | Proposé |
| 2026-11-15 | Fleet | interne | décision | Couleur « alerte » (violet) sur la carte : jamais affichée aujourd'hui ; si on l'active, rien ne l'efface (le serveur n'envoie pas la clôture d'une alerte) | Moyenne | Soufiane choisit : quand le violet doit-il disparaître ? (alerte traitée, ou après X minutes) | Décision |
