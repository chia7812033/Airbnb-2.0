import data from "../../data/cardData.json";

export default function handler(req, res) {
  res.status(200).json({ cardData: data });
}
