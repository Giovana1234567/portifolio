import { supabase } from "../services/supabase.js";

export const getEducation = async (req, res) => {
  const { data, error } = await supabase
    .from("education")
    .select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
};


