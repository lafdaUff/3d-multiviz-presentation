import {type ModelData} from '../viewport/Experience';
import MetadataItem from './MedadataItem';

export default function MetadataInfo({ objectData }: { objectData: ModelData}) {
  
  return (
    <div className="metadata-div">
        <h5 className="bold">{objectData.nome}</h5>
      <ul id="objetos" className="objetos">
        <small className='metadata-item description'>{objectData.descricao}</small>
        {objectData.customdata && objectData.customdata.map((metadataEntry, index) => (
            <MetadataItem key={index} metadataEntry={metadataEntry} />
        ))}
      </ul>
    </div>
  );
}