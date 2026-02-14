import { supabase } from "../services/supabase.js";

export const getTechnologies = async (req, res) => {
  const { data, error } = await supabase
    .from("technologies")
    .select(`
      *,
      skills!fk_skill (
        id,
        type
      )
    `)
    .eq("visible_on_panel", true)
    .neq("skills.type", "softskill");


  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
};


