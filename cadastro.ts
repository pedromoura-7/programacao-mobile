// Definição da Interface
interface Usuario {
    nome: string;
    email: string;
    idade: number;
    status: boolean; // true = ativo, false = inativo
}

// Array de usuários
let listaDeUsuarios: Usuario[] = [];

// Função para cadastrar usuários
function cadastrarUsuario(usuario: Usuario): void {
    listaDeUsuarios.push(usuario);
    console.log(`✅ Usuário "${usuario.nome}" cadastrado com sucesso!`);
}

// Função para listar usuários
function listarUsuarios(): void {
    console.log("\n📋 Lista de Usuários:");
    if (listaDeUsuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.");
        return;
    }

    listaDeUsuarios.forEach((usuario, index) => {
        console.log(`
        Usuário #${index + 1}
        Nome: ${usuario.nome}
        Email: ${usuario.email}
        Idade: ${usuario.idade}
        Status: ${usuario.status ? "Ativo" : "Inativo"}
        `);
    });
}

// Testando o sistema
cadastrarUsuario({ nome: "Ana Silva", email: "ana@example.com", idade: 28, status: true });
cadastrarUsuario({ nome: "Carlos Souza", email: "carlos@example.com", idade: 35, status: false });
cadastrarUsuario({ nome: "Beatriz Lima", email: "bia@example.com", idade: 22, status: true });

// Listando os usuários cadastrados
listarUsuarios();
