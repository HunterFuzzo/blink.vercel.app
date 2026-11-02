// api/version.js - Blink Version & OTA Manifest Service
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 'public, max-age=30, s-maxage=30');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  res.status(200).json({
    version: "1.1.1",
    publishedAt: "2026-11-02T15:00:00Z",
    notes: "Mise à jour automatique : nouveau logo squircle, liaison d'abonnement Stripe par email en 1 clic, bot support optimisé.",
    bundleUrl: "https://thisisblink.vercel.app/updates/bundle-latest.zip",
    fallbackBundleUrl: "https://raw.githubusercontent.com/HunterFuzzo/goblink/main/updates/bundle-latest.zip"
  });
};
