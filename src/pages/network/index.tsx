import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { db } from "../../services/firebaseConnection";
import { doc, getDoc, setDoc } from "firebase/firestore";

export function Network() {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef)
        .then((snapshot) => {
          if (snapshot.data() !== undefined) {
            setFacebook(snapshot.data()?.facebook);
            setInstagram(snapshot.data()?.instagram);
            setYoutube(snapshot.data()?.youtube);
          }
        })
        .catch((error) => {
          console.log("ERRO:" + error);
        });
    }

    loadLinks();
  }, []);

  function handleRegister(e: React.FormEvent) {
      e.preventDefault();
      
      

    setDoc(doc(db, "social", "link"), {
      facebook,
      instagram,
      youtube,
    })
      .then(() => {
        alert("ALTERADO COM SUCESSO!");
        
      })
      .catch((error) => {
        alert("ERRO:" + error);
      });
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-4">
      <Header />

      <h1 className="text-white text-2xl font-bold font medium mt-8 mb-4">
        Minhas redes sociais
      </h1>
      <form
        onSubmit={handleRegister}
        className="flex flex-col max-w-xl w-full"
        action=""
      >
        <label className="text-white font-medium mt-2 mb-2" htmlFor="">
          Link do Facebook
        </label>
        <Input
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
          type="url"
          placeholder="Digite a url do facebook..."
        />
        <label className="text-white font-medium mt-2 mb-2" htmlFor="">
          Link do Facebook
        </label>
        <Input
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
          type="url"
          placeholder="Digite a url do instagram..."
        />
        <label className="text-white font-medium mt-2 mb-2" htmlFor="">
          Link do Facebook
        </label>
        <Input
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
          type="url"
          placeholder="Digite a url do youtube..."
        />

        <button
          type="submit"
          className="text-white bg-blue-600 h-9 rounded items-center justify-center flex mb-7 mt-3 cursor-pointer hover:bg-blue-500 duration-300"
        >
          Salvar Links
        </button>
      </form>
    </div>
  );
}
