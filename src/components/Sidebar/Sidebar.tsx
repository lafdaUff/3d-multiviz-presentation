import ItemList from "../Items/ItemList"
import SearchBar from "./SearchBar"
import {  useState  } from "react"
import { type ModelData } from "../viewport/Experience"
import MetadataInfo from "./MetadataInfo"

export default function Sidebar({ objectData, cleanMetadata }: { objectData: ModelData | null, cleanMetadata: () => void }) {

  // const backBtn = useRef<HTMLButtonElement>(null)
  
  // useGSAP(() => {
  //   if (!objectData) return;
  //   gsap.from(backBtn.current, {
  //     duration: 0.3,
  //     scale: 0,
  //     ease: 'back.out',
  //   })
  // }, [objectData])

  const [filteredItems, setFilteredItems] = useState<ModelData[]>([])

  return(
      <div className="side-menu flex" id="side-menu">
          <div className="sidebar-header flex">
              { objectData && (
                <button onClick={cleanMetadata} ><i className="fa-solid fa-arrow-left"></i></button>
              )}
              <SearchBar onSearch={setFilteredItems}/>
          </div>
          {objectData ? (
            <MetadataInfo objectData={objectData} />
          ) : (
            <ItemList list={filteredItems}/>
          )}
      </div>
      
  )
}