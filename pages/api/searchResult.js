export default async function handler(req, res) {
  const searchResult = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  res.status(200).json({ searchResult });
}
