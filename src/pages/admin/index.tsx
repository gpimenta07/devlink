import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { FiTrash } from "react-icons/fi";
import { db } from "../../services/firebaseConnection";
import {
  addDoc,
  deleteDoc,
  doc,
  orderBy,
  query,
  collection,
  onSnapshot,
} from "firebase/firestore";

export function Admin() {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [linkColor, setLinkColor] = useState("#ffffff");
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [links, setLinks] = useState<LinkProps[]>([]);

  interface LinkProps {
    id: string;
    name: string;
    url: string;
    color: string;
    bg: string;
  }

  useEffect(() => {
    const linksRef = collection(db, "links");
    const queryRef = query(linksRef, orderBy("created", "asc"));

    const unsub = onSnapshot(queryRef, (snapshot) => {
      let lista = [] as LinkProps[];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          name: doc.data().name,
          url: doc.data().url,
          color: doc.data().color,
          bg: doc.data().bg,
        });
      });
      setLinks(lista);
    });

    return () => {
      unsub();
    };
  }, []);

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    addDoc(collection(db, "links"), {
      name: nameInput,
      url: urlInput,
      color: linkColor,
      bg: backgroundColor,
      created: new Date(),
    })
      .then(() => {
        setNameInput("");
        setUrlInput("");
        setLinkColor("#ffffff");
        setBackgroundColor("#000000");
        alert("Link cadastrado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao cadastrar link:", error);
      });
  }

  async function handleDelete(id: string) {
    const docRef = doc(db, "links", id);
    await deleteDoc(docRef);
  }

  return (
    <div className="flex flex-col items-center pb-7 px-2 min-h-screen">
      <Header />

      <form
        className="flex flex-col mt-8 mb-3 w-full max-w-xl"
        onSubmit={handleRegister}
      >
        <label className="text-white font-medium mt-2 mb-2" htmlFor="">
          Nome do link
        </label>
        <Input
          placeholder="Digite o nome do link..."
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <label className="text-white font-medium mt-2 mb-2" htmlFor="">
          URL do link
        </label>
        <Input
          placeholder="Digite a URL..."
          type="url"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />

        <section className="flex my-5 gap-5">
          <div className="flex items-center gap-2">
            <label className="text-white font-medium mt-2 mb-2">
              Cor do Link
            </label>
            <input
              className="bg-white rounded cursor-pointer    "
              type="color"
              value={linkColor}
              onChange={(e) => setLinkColor(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-white font-medium mt-2 mb-2">
              Fundo do Link
            </label>
            <input
              className="bg-white rounded cursor-pointer"
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
            />
          </div>
        </section>

        {nameInput !== "" && (
          <div className="flex items-center justify-center flex-col mb-7 p-1 border border-gray-100/25 rounded-md">
            <label className="text-white font-medium mt-2 mb-3">
              Veja como ficará o seu link:
            </label>
            <article
              className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-2"
              style={{
                backgroundColor: backgroundColor,
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <p
                className="font-medium"
                style={{
                  color: linkColor,
                }}
              >
                {nameInput}
              </p>
            </article>
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 cursor-pointer mb-7 h-9 rounded text-white font-medium gap-4 flex justify-center items-center"
        >
          Cadastrar
        </button>
      </form>

      <h2 className="font-bold text-2xl text-white mb-4">Meus links</h2>
      {links.map((link) => (
        <article
          id={link.id}
          className="flex items-center justify-between w-11/12 max-w-xl rounded px-2 py-2.5 mb-2 select-none cursor-pointer"
          style={{
            backgroundColor: link.bg,
            color: link.color,
          }}
        >
          <p>{link.name}</p>
          <div>
            <button
              onClick={() => handleDelete(link.id)}
              className="border border-dashed p-1 cursor-pointer hover:opacity-70 duration-150"
            >
              <FiTrash size={18} color="#FFF" />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
