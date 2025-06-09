import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Social } from "../../components/social";
import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

export function Home() {
  interface LinkProps {
    id: string;
    name: string;
    url: string;
    color: string;
    bg: string;
  }

  interface SocialLinksProps {
    instagram: string;
    facebook: string;
    youtube: string;
  }

  const [links, setLinks] = useState<LinkProps[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialLinksProps>();

  useEffect(() => {
    function loadLinks() {
      const linksRef = collection(db, "links");
      const queryRef = query(linksRef, orderBy("created", "asc"));

      getDocs(queryRef).then((snapshot) => {
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
    }

    loadLinks();
  }, []);

  useEffect(() => {
    function loadSocialLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot !== undefined) {
          setSocialLinks({
            facebook: snapshot.data()?.facebook,
            instagram: snapshot.data()?.instagram,
            youtube: snapshot.data()?.youtube,
          });
        }
      });
    }
    loadSocialLinks();
  }, []);

  return (
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className="md:text-4xl text-3xl font-bold text-white mt-20">
        Gabriel Pimenta
      </h1>
      <span className="text-gray-100 mb-5 mt-4">Veja meus links 👇</span>

      <main className="flex flex-col w-11/12 max-w-2xl text-center">
        {links.map((link) => (
          <section
            id={link.id}
            className=" mb-4 w-full py-2 rounded-lg select-none transition-transform duration-300 hover:scale-105"
            style={{ background: link.bg, color: link.color }}
          >
            <a href={link.url} target="_blank">
              <p className="text-base md:text-lg">{link.name}</p>
            </a>
          </section>
        ))}

        {socialLinks && Object.keys(socialLinks).length > 0 && (
          <footer className="flex justify-center gap-4 my-4">
            <Social url={socialLinks?.facebook}>
              <FaFacebook
                className="hover:opacity-70 duration-200"
                size={35}
                color="#FFFFFF"
              />
            </Social>
            <Social url={socialLinks?.instagram}>
              <FaYoutube
                className="hover:opacity-70 duration-200"
                size={35}
                color="#FFFFFF"
              />
            </Social>
            <Social url={socialLinks?.youtube}>
              <FaInstagram
                className="hover:opacity-70 duration-200"
                size={35}
                color="#FFFFFF"
              />
            </Social>
          </footer>
        )}
      </main>
    </div>
  );
}
