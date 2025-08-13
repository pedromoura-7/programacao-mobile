// 2️⃣ Array de usuários
var listaDeUsuarios = [];
// 3️⃣ Função para cadastrar usuários
function cadastrarUsuario(usuario) {
    listaDeUsuarios.push(usuario);
    console.log("\u2705 Usu\u00E1rio \"".concat(usuario.nome, "\" cadastrado com sucesso!"));
}
// 4️⃣ Função para listar usuários
function listarUsuarios() {
    console.log("\n📋 Lista de Usuários:");
    if (listaDeUsuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.");
        return;
    }
    listaDeUsuarios.forEach(function (usuario, index) {
        console.log("\n        Usu\u00E1rio #".concat(index + 1, "\n        Nome: ").concat(usuario.nome, "\n        Email: ").concat(usuario.email, "\n        Idade: ").concat(usuario.idade, "\n        Status: ").concat(usuario.status ? "Ativo" : "Inativo", "\n        "));
    });
}
// 5️⃣ Testando o sistema
cadastrarUsuario({ nome: "Ana Silva", email: "ana@example.com", idade: 28, status: true });
cadastrarUsuario({ nome: "Carlos Souza", email: "carlos@example.com", idade: 35, status: false });
cadastrarUsuario({ nome: "Beatriz Lima", email: "bia@example.com", idade: 22, status: true });
// Listando os usuários cadastrados
listarUsuarios();
