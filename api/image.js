export default async function handler(req, res) {
  try {
    const response = await fetch('https://bopz-pics-production.up.railway.app/api/random-image', {
      headers: { 'Authorization': 'Bearer 12345' }
    });
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch image' });
  }
}
