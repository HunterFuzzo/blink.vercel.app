// api/version.js - Blink Version & OTA Manifest Service
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 'public, max-age=30, s-maxage=30');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  res.status(200).json({
    version: "1.2.0",
    publishedAt: "2026-11-02T16:00:00Z",
    notes: "Mise à jour v1.2.0 : Système d'auto-update OTA transparent, nouveau logo squircle, liaison d'abonnement Stripe par email en 1 clic.",
    bundleUrl: "https://thisisblink.vercel.app/updates/bundle-latest.zip",
    fallbackBundleUrl: "https://thisisblink.vercel.app/updates/bundle-latest.zip"
  });
};
