import { Search } from "lucide-react";

export function AttandeeList() {
    return (
        <div className="flex gap-3 items-center">
            <h1 className="text-2xl font-bold">Participantes</h1>
            <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
                <Search />
                <input
                    className="bg-transparent flex-1 outline-none"
                    placeholder="buscar participante..."
                />