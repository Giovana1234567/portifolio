import { supabase } from "../services/supabase.js";

export const getAchievements = async (req, res) => {
  const { data, error } = await supabase
    .from("achievements")
    .select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
};


