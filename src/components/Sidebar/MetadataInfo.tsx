import {type ModelData} from '../viewport/Experience';
import MetadataItem from './MedadataItem';

export default function MetadataInfo({ objectData }: { objectData: ModelData}) {
  
  return (
    <div className="metadata-div">
      <ul id="objetos" className="objetos">
        <h5 className="bold">{objectData.nome}</h5>
        <small>{objectData.descricao}</small>
        {objectData.customdata && objectData.customdata.map((metadataEntry, index) => (
            <MetadataItem key={index} metadataEntry={metadataEntry} />
        ))}
      </ul>
    </div>
  );
}