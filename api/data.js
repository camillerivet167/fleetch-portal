export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const response = await fetch(
      'https://script.google.com/macros/s/AKfycbyOsndgveHKAs139EVcZZGR87d3py19BhDhrs_U4KjHN2ZeLpISrlVFUlmFYU1VsD1B/exec',
      { redirect: 'follow' }
    );
    const text = await response.text();
    res.status(200).send(text);
  } catch(e) {
    res.status(500).send('Erreur: ' + e.message);
  }
}
