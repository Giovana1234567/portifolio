import { supabase } from "../services/supabase.js";

export const getProfile = async (req, res) => {
  const { data, error } = await supabase
    .from("profile")
    .select("*")
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
};


