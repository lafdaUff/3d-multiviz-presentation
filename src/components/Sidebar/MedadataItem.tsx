import schema from "../../data/dataschema.json";

interface MetadataItemProps {
  metadataEntry: Record<string, any>;
}

export default function MetadataItem({ metadataEntry }: MetadataItemProps) {
  const metaKey = Object.keys(metadataEntry)[0];
  const metaValue = Object.values(metadataEntry)[0];
  
  // Find the schema for this key
  const schemaEntry = schema.find(obj => Object.keys(obj)[0] === metaKey);
  if (!schemaEntry) {
    return null; // Don't render if no schema found
  }
  
  const schemaType = Object.values(schemaEntry)[0].type;
  
  const renderValue = () => {
    switch (schemaType) {
      case 'string':
      case 'date':
        return <small>{String(metaValue)}</small>;
        
      case 'number':
        return <small>{Number(metaValue).toLocaleString()}</small>;
        
      case 'array':
        if (Array.isArray(metaValue)) {
          return <small>{metaValue.join('; ')}</small>;
        }
        return <small>{String(metaValue)}</small>;
        
      case 'link':
        if (typeof metaValue === 'object' && metaValue !== null && 'link' in metaValue && 'nome' in metaValue) {
          return (
            <a href={metaValue.link} target="_blank" rel="noopener noreferrer">
              <small>{metaValue.nome}</small>
            </a>
          );
        }
        return <small>{String(metaValue)}</small>;
        
      default:
        return <small>{String(metaValue)}</small>;
    }
  };

  return (
    <li className="metadata-item">
      <p className="bold">{metaKey}: </p>
      {renderValue()}
    </li>
  );
}