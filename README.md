----------------- Tabelas do banco de dados -----------------

→ profile 
→ achievements 
→ education 
→ technologies 
→ experiences 
→ experiences_technologies 
→ skills 

----------------- Rotas para as tabelas -----------------

→ profile 
    → "app/profile.js" READ ✅ 

→ achievements 
    → "api/achievements" READ ✅

→ education 
    → "api/education" READ ✅

→ technologies 
    → "api/technologies" READ ✅  
        → Ligada a experiences skill → technologies where skill ≠ Softskill E visible_on_panel
       

→ experiences 
    → "api/experiences" READ ✅ 
        → ligada a experiences_technologies, que por sua viz pega a lista de tecnologias da experiencia

→ skills
    → "api/softskills" 


----------------- Passo a passo de como esse sistema foi feito, em detalhes:

1 - Desenhe o resultado esperado do sistema (Ferramenta Figma)
2 - Desenhe o banco de dados, imaginandi futuras impletamentasoes e suprindo todas as necessidades do prototipo. 
3 - Crie o banco de dados em SUPABASE, com tabelas e relacionamentos. 
    3.1 - Configure todas as tables com Polica de privacidade "Enable read access for all users" -> Voce pode achar nos templates prontos de politicas!
4 - Crie o ambiente se desenvolvimento com: node, express, supabase, cors e dotenv.
5 - Crie as rotas para as tabelas criadas. 
6 - Crie os controllers para as rotas. 
7 - Crie os services para as rotas. 
