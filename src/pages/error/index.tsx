import { Link } from "react-router";

export function ErrorPage() {
    return (
        <div className="flex w-full justify-center items-center min-h-screen flex-col px-8 md:px-0">
            <h1 className="font-bold text-4xl mb-4 text-white">Página não encontrada</h1>
            <p className="italic text-2xl mb-4 text-white">Você caiu em uma página que não existe</p>

            <Link className="bg-gray-50/20 text-white py-2 px-5 rounded cursor-pointer mt-2 hover:opacity-70 duration-200" to="/">Voltar para Home</Link>
        </div>
    )
}