
import { supabase } from "../services/supabase.js";

export const getSoftSkills = async (req, res) => {
  const { data, error } = await supabase
    .from("skills")
    .select("*")
    .eq("type", "softskill");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.json(data);
};
