/* ================================================================
   TÓPICOS
================================================================ */
const topics = [
    { label: "JavaScript",      icon: "⚡", count: "1.2k" },
    { label: "React",           icon: "⚛️",  count: "742"  },
    { label: "Python",          icon: "🐍", count: "638"  },
    { label: "MachineLearning", icon: "🤖", count: "893"  },
    { label: "UIDesign",        icon: "🎨", count: "521"  },
    { label: "Git",             icon: "🗂️", count: "380"  },
    { label: "DevCareer",       icon: "🚀", count: "410"  },
];

function displayName(label) {
    if (label === "MachineLearning") return "Machine Learning";
    if (label === "UIDesign")        return "UI Design";
    return label;
}

let currentTopic = topics[0].label;

/* ================================================================
   POSTS DATA
================================================================ */
const posts = [
    // ── JavaScript ────────────────────────────────────────────
    {
        id: 1,
        user: { name: "Paulo Fischer",   avatar: "https://i.pravatar.cc/50?img=1",  university: "PUCRS",   role: "Engenharia de Software" },
        title: "Como aprendi JavaScript em 3 meses partindo do zero",
        excerpt: "Começar na programação pode parecer assustador, mas com método certo e consistência diária é possível evoluir muito rápido. Vou compartilhar o que funcionou na minha jornada.",
        cover: "https://picsum.photos/800/400?random=10",
        tags: ["JavaScript", "DevCareer"],
        timeAgo: "2h atrás", readTime: "4 min", likes: 142,
        comments: [
            { user: "Joana Prado", text: "Muito inspirador! Estou começando agora também." },
            { user: "Gabriel G.", text: "Qual material você usou?" }
        ]
    },
    {
        id: 6,
        user: { name: "Marcos Silva",    avatar: "https://i.pravatar.cc/50?img=15", university: "UFSC",    role: "Desenvolvimento Web" },
        title: "Closures e Hoisting: os conceitos de JS que todo dev precisa dominar",
        excerpt: "JavaScript tem particularidades que confundem muita gente. Neste artigo explico closures e hoisting de forma prática, com exemplos reais do dia a dia que você pode testar agora mesmo.",
        cover: "https://picsum.photos/800/400?random=60",
        tags: ["JavaScript"],
        timeAgo: "4h atrás", readTime: "5 min", likes: 87,
        comments: []
    },
    {
        id: 7,
        user: { name: "Ana Beatriz",     avatar: "https://i.pravatar.cc/50?img=16", university: "UFC",     role: "Front-end Developer" },
        title: "Async/Await na prática: chega de callback hell",
        excerpt: "Promessas e async/await transformaram a forma de lidar com operações assíncronas em JavaScript. Veja como migrar seu código e torná-lo mais legível.",
        cover: "https://picsum.photos/800/400?random=61",
        tags: ["JavaScript"],
        timeAgo: "1d atrás", readTime: "6 min", likes: 203,
        comments: [{ user: "Marcos Silva", text: "Finalmente entendi Promises!" }]
    },
    // ── React ─────────────────────────────────────────────────
    {
        id: 8,
        user: { name: "Thiago Costa",    avatar: "https://i.pravatar.cc/50?img=17", university: "PUC-Rio", role: "Desenvolvimento Web" },
        title: "useEffect sem mistério: o guia que eu gostaria de ter tido",
        excerpt: "O hook useEffect confunde muitos iniciantes em React. Neste artigo desmonto os mitos e explico o ciclo de vida com exemplos práticos e diagramas claros.",
        cover: "https://picsum.photos/800/400?random=62",
        tags: ["React", "JavaScript"],
        timeAgo: "3h atrás", readTime: "7 min", likes: 318,
        comments: [{ user: "Joana Prado", text: "Melhor explicação de useEffect que já vi!" }]
    },
    {
        id: 9,
        user: { name: "Letícia Ramos",   avatar: "https://i.pravatar.cc/50?img=18", university: "UFBA",    role: "Front-end" },
        title: "Context API vs Redux: quando usar cada um?",
        excerpt: "Gerenciamento de estado em React pode ser simples ou complexo dependendo da escala. Veja uma comparação honesta entre Context API e Redux para saber qual usar no seu projeto.",
        cover: "https://picsum.photos/800/400?random=63",
        tags: ["React"],
        timeAgo: "2d atrás", readTime: "8 min", likes: 412,
        comments: []
    },
    {
        id: 14,
        user: { name: "Bruno Alves",     avatar: "https://i.pravatar.cc/50?img=23", university: "UFRJ",    role: "Front-end Developer" },
        title: "React Query: o fim das chamadas de API bagunçadas",
        excerpt: "Gerenciar estado assíncrono com useState e useEffect manualmente é trabalhoso. React Query resolve isso de forma elegante — veja como integrar no seu projeto.",
        cover: "https://picsum.photos/800/400?random=70",
        tags: ["React", "JavaScript"],
        timeAgo: "1d atrás", readTime: "6 min", likes: 256,
        comments: []
    },
    // ── Python ────────────────────────────────────────────────
    {
        id: 10,
        user: { name: "Diego Fernandes", avatar: "https://i.pravatar.cc/50?img=19", university: "UFMG",    role: "Data Science" },
        title: "Python para iniciantes: do zero ao primeiro projeto em 30 dias",
        excerpt: "Python é a linguagem mais acessível para quem está começando. Neste guia mostro um plano de estudos de 30 dias com projetos práticos a cada semana.",
        cover: "https://picsum.photos/800/400?random=64",
        tags: ["Python", "DevCareer"],
        timeAgo: "5h atrás", readTime: "9 min", likes: 521,
        comments: [
            { user: "Camila Torres", text: "Seguindo esse plano agora!" },
            { user: "Rafael Moura",  text: "Adicionei nos favoritos." }
        ]
    },
    {
        id: 11,
        user: { name: "Fernanda Luz",    avatar: "https://i.pravatar.cc/50?img=20", university: "USP",     role: "Machine Learning" },
        title: "Pandas e NumPy: manipulação de dados que todo cientista precisa saber",
        excerpt: "Antes de treinar qualquer modelo de ML, você precisa dominar a manipulação de dados. Aprenda os principais métodos com datasets reais do Kaggle.",
        cover: "https://picsum.photos/800/400?random=65",
        tags: ["Python", "MachineLearning"],
        timeAgo: "1d atrás", readTime: "10 min", likes: 389,
        comments: []
    },
    {
        id: 15,
        user: { name: "Carla Mendonça",  avatar: "https://i.pravatar.cc/50?img=24", university: "UNIFESP", role: "Back-end Developer" },
        title: "FastAPI: crie APIs REST modernas com Python em minutos",
        excerpt: "FastAPI é o framework Python mais rápido para criar APIs. Neste tutorial você vai criar uma API completa com autenticação JWT e documentação automática.",
        cover: "https://picsum.photos/800/400?random=71",
        tags: ["Python"],
        timeAgo: "3d atrás", readTime: "8 min", likes: 301,
        comments: [{ user: "Diego Fernandes", text: "Migrei de Flask para FastAPI e foi a melhor decisão!" }]
    },
    // ── Machine Learning ──────────────────────────────────────
    {
        id: 3,
        user: { name: "Gabriel Gouveia", avatar: "https://i.pravatar.cc/50?img=3",  university: "UNICAMP", role: "Inteligência Artificial" },
        title: "Machine Learning explicado para quem nunca programou",
        excerpt: "A inteligência artificial não é magia — é matemática e dados. Vou descomplicar os conceitos principais de ML usando analogias do dia a dia, sem fórmulas que assustam.",
        cover: "https://picsum.photos/800/400?random=32",
        tags: ["MachineLearning"],
        timeAgo: "1d atrás", readTime: "8 min", likes: 531,
        comments: [{ user: "Paulo Fischer", text: "Melhor explicação que já li!" }]
    },
    {
        id: 12,
        user: { name: "Renata Braga",    avatar: "https://i.pravatar.cc/50?img=21", university: "ITA",     role: "IA e Robótica" },
        title: "Redes Neurais do zero: entenda backpropagation de vez",
        excerpt: "Backpropagation é o coração do treinamento de redes neurais. Construo uma rede do zero em Python e explico cada passo — sem pular a matemática.",
        cover: "https://picsum.photos/800/400?random=66",
        tags: ["MachineLearning", "Python"],
        timeAgo: "3d atrás", readTime: "12 min", likes: 748,
        comments: [{ user: "Gabriel Gouveia", text: "Excelente didática, Renata!" }]
    },
    {
        id: 16,
        user: { name: "Henrique Dias",   avatar: "https://i.pravatar.cc/50?img=25", university: "UFCG",    role: "NLP Researcher" },
        title: "Como os LLMs funcionam: transformers sem mistério",
        excerpt: "GPT, Gemini, Claude — todos são baseados na arquitetura Transformer. Explico o mecanismo de atenção e por que ele revolucionou o processamento de linguagem natural.",
        cover: "https://picsum.photos/800/400?random=72",
        tags: ["MachineLearning"],
        timeAgo: "5d atrás", readTime: "14 min", likes: 923,
        comments: []
    },
    // ── UI Design ─────────────────────────────────────────────
    {
        id: 4,
        user: { name: "Jaqueline Maraci",avatar: "https://i.pravatar.cc/50?img=4",  university: "FGV",     role: "Design de Produto" },
        title: "UI Design para devs: o básico que transforma seus projetos",
        excerpt: "Você não precisa ser designer para criar interfaces bonitas. Com princípios de hierarquia visual, espaçamento e tipografia, seus projetos vão parecer profissionais.",
        cover: "https://picsum.photos/800/400?random=43",
        tags: ["UIDesign"],
        timeAgo: "2d atrás", readTime: "5 min", likes: 198,
        comments: [{ user: "Gabriel Gouveia", text: "Finalmente alguém explica espaçamento direito!" }]
    },
    {
        id: 13,
        user: { name: "Vitor Henrique",  avatar: "https://i.pravatar.cc/50?img=22", university: "ESPM",    role: "Product Design" },
        title: "Design System do zero: como criei o meu em Figma e CSS",
        excerpt: "Design Systems são a base de produtos escaláveis. Mostro como criei um do zero — dos tokens de cor até os componentes finais em CSS.",
        cover: "https://picsum.photos/800/400?random=67",
        tags: ["UIDesign"],
        timeAgo: "4d atrás", readTime: "11 min", likes: 267,
        comments: []
    },
    {
        id: 17,
        user: { name: "Isabela Fonseca", avatar: "https://i.pravatar.cc/50?img=26", university: "PUC-MG",  role: "UX/UI Designer" },
        title: "Dark Mode bem feito: além de inverter as cores",
        excerpt: "Implementar dark mode de verdade vai além de trocar fundo branco por preto. Aprenda sobre contraste, cores adaptativas e como garantir acessibilidade.",
        cover: "https://picsum.photos/800/400?random=73",
        tags: ["UIDesign"],
        timeAgo: "6d atrás", readTime: "7 min", likes: 445,
        comments: [{ user: "Vitor Henrique", text: "Esse artigo mudou como eu penso em dark mode!" }]
    },
    // ── Git ───────────────────────────────────────────────────
    {
        id: 5,
        user: { name: "Lucas Mendes",    avatar: "https://i.pravatar.cc/50?img=5",  university: "UFMG",    role: "Desenvolvimento Web" },
        title: "Git e GitHub: guia completo para estudantes iniciantes",
        excerpt: "Controle de versão é uma habilidade essencial que todo dev precisa dominar. Aprenda os comandos mais importantes e como colaborar em equipe.",
        cover: "https://picsum.photos/800/400?random=54",
        tags: ["Git", "DevCareer"],
        timeAgo: "3d atrás", readTime: "7 min", likes: 412,
        comments: [
            { user: "Joana Prado",    text: "Finalmente entendi o git rebase!" },
            { user: "Gabriel Gouveia",text: "Muito bem explicado." }
        ]
    },
    {
        id: 18,
        user: { name: "Felipe Souza",    avatar: "https://i.pravatar.cc/50?img=27", university: "UFG",     role: "DevOps" },
        title: "Git Flow na prática: organize seu repositório como um profissional",
        excerpt: "Trabalhar com branches de forma organizada é fundamental em times. Veja como implementar o Git Flow e nunca mais ter conflito de merge desnecessário.",
        cover: "https://picsum.photos/800/400?random=74",
        tags: ["Git"],
        timeAgo: "5d atrás", readTime: "9 min", likes: 334,
        comments: []
    },
    // ── DevCareer ─────────────────────────────────────────────
    {
        id: 2,
        user: { name: "Joana Prado",     avatar: "https://i.pravatar.cc/50?img=2",  university: "USP",     role: "Ciência da Computação" },
        title: "5 projetos que todo estudante de dev deveria ter no portfólio",
        excerpt: "Construir projetos reais é a melhor forma de aprender e de impressionar recrutadores. Aqui estão os projetos que mais agregaram ao meu GitHub.",
        cover: "https://picsum.photos/800/400?random=21",
        tags: ["DevCareer"],
        timeAgo: "5h atrás", readTime: "6 min", likes: 289,
        comments: []
    },
    {
        id: 19,
        user: { name: "Samuel Rocha",    avatar: "https://i.pravatar.cc/50?img=28", university: "UNESP",   role: "Desenvolvedor Júnior" },
        title: "Meu primeiro emprego como dev: o que aprendi no processo seletivo",
        excerpt: "Passei por 12 processos seletivos antes de conseguir meu primeiro emprego. Compartilho os erros, acertos e o que realmente importa para os recrutadores.",
        cover: "https://picsum.photos/800/400?random=75",
        tags: ["DevCareer"],
        timeAgo: "1d atrás", readTime: "8 min", likes: 672,
        comments: [
            { user: "Paulo Fischer",   text: "Muito obrigado por compartilhar!" },
            { user: "Diego Fernandes", text: "Esse relato me deu esperança. Valeu!" }
        ]
    },
    {
        id: 20,
        user: { name: "Natália Vieira",  avatar: "https://i.pravatar.cc/50?img=29", university: "UFPR",    role: "Tech Lead" },
        title: "Como sair de júnior para pleno em 1 ano: meu roadmap real",
        excerpt: "Evoluir de júnior para pleno exige mais do que código. Soft skills, comunicação, entrega consistente e visibilidade são tão importantes quanto a habilidade técnica.",
        cover: "https://picsum.photos/800/400?random=76",
        tags: ["DevCareer"],
        timeAgo: "2d atrás", readTime: "10 min", likes: 891,
        comments: []
    }
];

/* ================================================================
   ESTADO LOCAL
================================================================ */
const likedPosts = new Set();
const savedPosts = new Set();
let activeCommentPostId = null;

/* ================================================================
   BUILD FEED 2D
================================================================ */
function buildFeed2D() {
    const feed = document.getElementById("feed-2d");
    feed.innerHTML = "";

    topics.forEach((topic, topicIndex) => {
        const topicPosts = posts.filter(p => p.tags.includes(topic.label));
        if (topicPosts.length === 0) return;

        const prev = topics[topicIndex - 1];
        const next = topics[topicIndex + 1];

        const row = document.createElement("div");
        row.classList.add("topic-row");
        row.dataset.topic = topic.label;

        /* ── topic header ── */
        row.innerHTML = `
            <div class="topic-header">
                <div class="topic-badge">
                    <span class="topic-badge-icon">${topic.icon}</span>
                    <span class="topic-badge-name">${displayName(topic.label)}</span>
                </div>
                <span class="topic-counter" id="counter-${topic.label}">1 / ${topicPosts.length}</span>
                <div class="topic-nav-hints">
                    ${prev ? `<button class="hint-btn" onclick="jumpToTopic('${prev.label}')">↑ ${displayName(prev.label)}</button>` : ""}
                    ${next ? `<button class="hint-btn" onclick="jumpToTopic('${next.label}')">↓ ${displayName(next.label)}</button>` : ""}
                </div>
            </div>
        `;

        /* ── post slider ── */
        const slider = document.createElement("div");
        slider.classList.add("post-slider");
        slider.dataset.topic = topic.label;

        topicPosts.forEach((post, postIndex) => {
            const slide = document.createElement("div");
            slide.classList.add("post-slide");
            slide.innerHTML = buildPostCard(post, postIndex, topicPosts.length);
            slider.appendChild(slide);
        });

        /* atualiza counter e dots no scroll horizontal */
        slider.addEventListener("scroll", () => {
            const total   = topicPosts.length;
            const current = Math.round(slider.scrollLeft / slider.offsetWidth);
            const counter = document.getElementById(`counter-${topic.label}`);
            if (counter) counter.textContent = `${current + 1} / ${total}`;

            /* atualiza dots */
            const dots = row.querySelectorAll(".slide-dot");
            dots.forEach((d, i) => d.classList.toggle("active", i === current));
        }, { passive: true });

        row.appendChild(slider);
        feed.appendChild(row);
    });

    /* rastreia tópico atual no scroll vertical */
    feed.addEventListener("scroll", onFeedScroll, { passive: true });
}

function buildPostCard(post, index, total) {
    const isLiked = likedPosts.has(post.id);
    const isSaved = savedPosts.has(post.id);

    const dots = Array.from({ length: total }, (_, i) =>
        `<span class="slide-dot ${i === index ? "active" : ""}"></span>`
    ).join("");

    return `
        <div class="post-card">
            <img class="post-cover" src="${post.cover}" alt="" loading="lazy">
            <div class="post-content">
                <div class="post-tags">
                    ${post.tags.map(t => `<span class="tag">${displayName(t)}</span>`).join("")}
                </div>
                <h2 class="post-title">${post.title}</h2>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <img class="meta-avatar" src="${post.user.avatar}" alt="${post.user.name}">
                    <div class="meta-info">
                        <strong class="meta-name">${post.user.name}</strong>
                        <span class="meta-details">${post.user.university} · ${post.user.role} · ${post.timeAgo} · ${post.readTime} de leitura</span>
                    </div>
                </div>
                <div class="post-actions">
                    <button class="action_btn like_btn ${isLiked ? "liked" : ""}" onclick="toggleLike(${post.id}, this)">
                        <span class="action_icon">👍</span>
                        <span class="action_count">${post.likes}</span>
                    </button>
                    <button class="action_btn comment_btn" onclick="openComments(${post.id})">
                        <span class="action_icon">💬</span>
                        <span>${post.comments.length}</span>
                    </button>
                    <button class="action_btn share_btn">
                        <span class="action_icon">🔗</span>
                        <span>Compartilhar</span>
                    </button>
                    <button class="action_btn save_btn ${isSaved ? "saved" : ""}" onclick="toggleSave(${post.id}, this)">
                        <span class="action_icon">${isSaved ? "🔖" : "🏷️"}</span>
                        <span>${isSaved ? "Salvo" : "Salvar"}</span>
                    </button>
                </div>
                ${total > 1 ? `<div class="slide-dots">${dots}</div>` : ""}
            </div>
        </div>
    `;
}

/* ================================================================
   SCROLL VERTICAL: atualiza tópico ativo
================================================================ */
function onFeedScroll() {
    const feed = document.getElementById("feed-2d");
    const rows = feed.querySelectorAll(".topic-row");
    const snapY = feed.scrollTop;

    rows.forEach(row => {
        if (Math.abs(row.offsetTop - snapY) < row.offsetHeight * 0.5) {
            const label = row.dataset.topic;
            if (label !== currentTopic) {
                currentTopic = label;
                renderTopics();
            }
        }
    });
}

/* ================================================================
   NAVEGAÇÃO POR TÓPICO
================================================================ */
function jumpToTopic(label) {
    const feed = document.getElementById("feed-2d");
    const row  = feed.querySelector(`.topic-row[data-topic="${label}"]`);
    if (row) {
        feed.scrollTo({ top: row.offsetTop, behavior: "smooth" });
    }
}

/* setTopic() é chamado pelo topic_nav (left panel) */
function setTopic(label) {
    currentTopic = label;
    renderTopics();
    jumpToTopic(label);
}

/* ================================================================
   RENDER TOPIC NAV (left panel)
================================================================ */
function renderTopics() {
    const nav = document.getElementById("topicNav");
    if (!nav) return;

    nav.innerHTML = `
        <p class="topic_nav_title">Explorar por tema</p>
        ${topics.map(t => `
            <button class="topic_btn ${currentTopic === t.label ? "active" : ""}"
                    onclick="setTopic('${t.label}')">
                <span class="topic_icon">${t.icon}</span>
                <span class="topic_label">${displayName(t.label)}</span>
                <span class="topic_count">${t.count}</span>
            </button>
        `).join("")}
    `;
}

/* ================================================================
   AÇÕES: LIKE / SAVE
================================================================ */
function toggleLike(postId, btn) {
    const post = posts.find(p => p.id === postId);
    if (!post) return;
    if (likedPosts.has(postId)) {
        post.likes--; likedPosts.delete(postId); btn.classList.remove("liked");
    } else {
        post.likes++; likedPosts.add(postId);    btn.classList.add("liked");
    }
    btn.querySelector(".action_count").textContent = post.likes;
}

function toggleSave(postId, btn) {
    if (savedPosts.has(postId)) {
        savedPosts.delete(postId);
        btn.classList.remove("saved");
        btn.querySelector(".action_icon").textContent    = "🏷️";
        btn.querySelector("span:last-child").textContent = "Salvar";
    } else {
        savedPosts.add(postId);
        btn.classList.add("saved");
        btn.querySelector(".action_icon").textContent    = "🔖";
        btn.querySelector("span:last-child").textContent = "Salvo";
    }
}

/* ================================================================
   COMMENTS MODAL
================================================================ */
function openComments(postId) {
    activeCommentPostId = postId;
    const post   = posts.find(p => p.id === postId);
    const modal  = document.getElementById("cm-modal");
    const list   = document.getElementById("cm-list");

    list.innerHTML = post.comments.length
        ? post.comments.map(c => `
            <div class="comment">
                <strong class="comment_user">${c.user}</strong>
                <span class="comment_text">${c.text}</span>
            </div>`).join("")
        : `<p class="cm-empty">Nenhum comentário ainda. Seja o primeiro!</p>`;

    document.getElementById("cm-text").value = "";
    modal.classList.remove("cm-hidden");
    document.body.style.overflow = "hidden";
}

function closeComments() {
    document.getElementById("cm-modal").classList.add("cm-hidden");
    document.body.style.overflow = "";
    activeCommentPostId = null;
}

function submitComment() {
    if (!activeCommentPostId) return;
    const input = document.getElementById("cm-text");
    const text  = input.value.trim();
    if (!text) return;

    const post = posts.find(p => p.id === activeCommentPostId);
    post.comments.push({ user: "Você", text });

    /* atualiza a lista no modal */
    const list = document.getElementById("cm-list");
    list.innerHTML = post.comments.map(c => `
        <div class="comment">
            <strong class="comment_user">${c.user}</strong>
            <span class="comment_text">${c.text}</span>
        </div>`).join("");
    list.scrollTop = list.scrollHeight;

    /* atualiza counter no card */
    const counterBtns = document.querySelectorAll(`.comment_btn`);
    counterBtns.forEach(btn => {
        const card = btn.closest(".post-card");
        if (card) {
            const titleEl = card.querySelector(".post-title");
            if (titleEl && titleEl.textContent.trim() === post.title) {
                btn.querySelector("span:last-child").textContent = post.comments.length;
            }
        }
    });

    input.value = "";
}

/* Enter para enviar comentário */
document.addEventListener("DOMContentLoaded", () => {
    const cmText = document.getElementById("cm-text");
    if (cmText) {
        cmText.addEventListener("keydown", e => {
            if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); submitComment(); }
        });
    }
});

/* ================================================================
   STORY VIEWER (mantido para o ícone de stories via sidebar)
================================================================ */
const viewer   = document.getElementById("storyViewer");
const storyImg = document.getElementById("storyImg");

if (viewer) {
    viewer.addEventListener("click", () => {
        viewer.classList.add("hidden");
        document.body.style.overflow = "";
    });
}

/* ================================================================
   INIT
================================================================ */
buildFeed2D();
renderTopics();
