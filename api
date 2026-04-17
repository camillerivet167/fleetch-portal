export default async function handler(req, res) {
  const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRnDr2RMxxIhmjL8vFRTjul3ie1RU9zPeRoicAC_QOnPZqG-ci09MUndS4kIQGwPHxxgREvm3rMGbk_/pub?gid=372197913&single=true&output=csv';
  const response = await fetch(url);
  const csv = await response.text();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(csv);
}
