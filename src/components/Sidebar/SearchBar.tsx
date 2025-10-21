import { type ModelData } from "../viewport/Experience"
import searchInItems from "./search"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

export default function SearchBar({ onSearch, database }: { onSearch: (items: ModelData[]) => void, database: ModelData[] }) {

    const { t } = useTranslation();

    function handleSearch(searchTerm: string) {
        const getSearch = searchInItems(database, searchTerm)
        onSearch(getSearch)
    }

    useEffect(() => {
        onSearch(database) 
    }, [database, onSearch])

    return(
        <div className="searchBar flex">
            <input
                type="text"
                id="searchField"
                placeholder={t("search.placeholder")}
                className="search"
                onChange={(e) => handleSearch(e.target.value)}
            />
            <p id="searchBTN"><i className="fa-solid fa-magnifying-glass"></i></p>
            </div>
    )
}