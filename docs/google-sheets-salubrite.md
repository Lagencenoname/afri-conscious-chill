# Inscriptions « Campagne Salubrité » → Google Sheets (téléchargeable en .xlsx)

Le formulaire de la page `/salubrite` envoie chaque inscription vers une **Google Sheet**
via un petit script **Google Apps Script**. Tu peux ensuite télécharger la feuille en
`.xlsx` à tout moment (Fichier → Télécharger → Microsoft Excel).

## 1. Créer la feuille
1. Va sur https://sheets.google.com et crée une nouvelle feuille (ex. « ACC – Salubrité 2026 »).
2. Renomme l'onglet en `Inscriptions` (en bas à gauche).

## 2. Coller le script
1. Dans la feuille : menu **Extensions → Apps Script**.
2. Remplace tout le contenu par le code ci-dessous, puis **Enregistrer**.

```javascript
const SHEET_NAME = "Inscriptions";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    // En-têtes si la feuille est vide
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Date", "Nom et prénom", "Ville", "Contact WhatsApp", "Connaît l'ACC ? Comment"]);
    }

    const data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      data.at ? new Date(data.at) : new Date(),
      data.fullName || "",
      data.city || "",
      "", // le numéro est écrit juste après, en format texte
      data.heardAbout || "",
    ]);

    // Colonne D (Contact WhatsApp) en TEXTE pour garder le "+" et les zéros initiaux
    // (sinon Google Sheets interprète "+229..." comme une formule -> #ERROR!).
    const row = sheet.getLastRow();
    const phoneCell = sheet.getRange(row, 4);
    phoneCell.setNumberFormat("@");
    phoneCell.setValue(String(data.phone || ""));

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

## 3. Déployer en application web
1. En haut à droite : **Déployer → Nouveau déploiement**.
2. Type : **Application web**.
3. Description : `ACC Salubrité`.
4. **Exécuter en tant que** : *Moi*.
5. **Qui a accès** : **Tout le monde** (indispensable pour recevoir les envois du site).
6. **Déployer**, autoriser l'accès quand Google le demande.
7. Copie l'**URL de l'application web** (se termine par `/exec`).

## 4. Brancher le site
1. Ouvre [`src/lib/constants.ts`](../src/lib/constants.ts).
2. Remplace la valeur de `SALUBRITE_ENDPOINT` par l'URL `/exec` copiée.
3. Reconstruire / redéployer le site.

## 5. Récupérer le fichier Excel
Dans la Google Sheet : **Fichier → Télécharger → Microsoft Excel (.xlsx)**.
La feuille se met à jour en direct à chaque nouvelle inscription.

> Remarque : chaque inscription est aussi conservée dans le navigateur du visiteur
> (`localStorage`, clé `acc-salubrite`) comme filet de sécurité hors-ligne.
> Si tu modifies le script après un premier déploiement, fais **Déployer → Gérer les
> déploiements → (crayon) → Nouvelle version** pour que les changements prennent effet.
