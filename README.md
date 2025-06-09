# DevLink 🔗

DevLink é uma aplicação web para criar e compartilhar seus links personalizados, ideal para perfis profissionais, influenciadores, criadores de conteúdo e pequenas empresas. Com uma interface simples e intuitiva, você pode reunir todos os seus links importantes em um só lugar e disponibilizá-los facilmente por meio de um link único.

### 🌐 Acesse o projeto online:
**[https://devlink-two-flame.vercel.app](https://devlink-two-flame.vercel.app)**  
Login de teste:  
📧 `teste@gmail.com`  
🔑 `teste123`

---

## ✨ Funcionalidades

- ✅ Autenticação de usuários (login e cadastro)
- ✅ Cadastro e edição de links personalizados
- ✅ Personalização visual da página de links
- ✅ Visualização pública do perfil com os links
- ✅ Interface responsiva (mobile e desktop)

---

## 🚀 Tecnologias utilizadas

- **React**
- **TypeScript**
- **Tailwind CSS**
- **Firebase (Authentication + Firestore)**
- **Vite**
- **Phosphor Icons / React Icons**
- **Vercel** (Hospedagem)

---

## 📁 Estrutura de pastas (resumo)

```bash
src/
├── components/        # Componentes reutilizáveis
├── pages/             # Páginas da aplicação
├── services/          # Configurações do Firebase
├── utils/             # Utilitários gerais
├── App.tsx            # Componente principal
├── main.tsx           # Entrada da aplicação

---
## 🛠️ Como rodar localmente

### 1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/devlink.git
cd devlink
2. Instale as dependências:
bash
Copiar
Editar
npm install
3. Configure o Firebase:
Crie um arquivo .env na raiz do projeto com as variáveis de ambiente do Firebase:

env
Copiar
Editar
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_APP_ID=your_app_id
4. Rode o projeto:
bash
Copiar
Editar
npm run dev
🧪 Login de teste
Use as credenciais abaixo para explorar o sistema sem precisar se cadastrar:

text
Copiar
Editar
Email: teste@gmail.com
Senha: teste123
📦 Deploy
Hospedado com Vercel:
🔗 https://devlink-two-flame.vercel.app

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

🙋‍♂️ Autor
Desenvolvido por Gabriel Pimenta.
