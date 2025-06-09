import { Link } from "react-router";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";

export function Header() {
  async function handleLogout() {
    await signOut(auth);
  }
  return (
    <header className="w-full max-w-2xl mt-4 px-1">
      <nav className="w-full h-12 bg-white flex items-center justify-between rounded-md px-3">
        <div className="flex gap-4 font-medium text-gray-700">
          <Link className="hover:text-gray-900 hover:scale-105 duration-400" to="/">Home</Link>
          <Link className="hover:text-gray-900 hover:scale-105 duration-400" to="/admin">Links</Link>
          <Link className="hover:text-gray-900 hover:scale-105 duration-400" to="/admin/social">Redes sociais</Link>
        </div>
        <button
          onClick={handleLogout}
          className="cursor-pointer hover:scale-110 duration-200"
        >
          <BiLogOut size={30} color="#db2629" />
        </button>
      </nav>
    </header>
  );
}
