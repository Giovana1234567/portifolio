import { supabase } from "../services/supabase.js";


export const getExperiences = async (req, res) => {
  const { data, error } = await supabase
.from("experiences")
    .select(`
      *,
      technologies:experiences_technologies (
        technologies (
          id,
          name,
          image
        )
      )
    `);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
};
