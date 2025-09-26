
import { useMemo } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import type { ThreeEvent } from '@react-three/fiber';


interface ModelProps{
    modelLink: string
    position: [number, number, number]
    onHover: (mesh: THREE.Object3D | null) => void
    onClick: (modelLink: string, targetPosition: THREE.Vector3) => void
}


export default function Model({modelLink, position, onHover, onClick} : ModelProps){
    const { scene } = useGLTF(`/modelos/${modelLink}.glb`)

    const clonedScene = useMemo(() => {
        const clone = scene.clone()
        clone.traverse(child => {
            if(child instanceof THREE.Mesh) {
                child.userData = {link: modelLink}
            }
        })
        return clone
    }, [scene, modelLink])

    

    function handleClick(event: ThreeEvent<MouseEvent>) {
        event.stopPropagation()
        const targetPosition = new THREE.Vector3()
        event.object.getWorldPosition(targetPosition)
        onClick(modelLink, targetPosition)
    }
    function handlePointerOver(event: ThreeEvent<PointerEvent>) {
        event.stopPropagation()
        document.body.style.cursor = 'pointer'
        onHover(event.object)
    }

    function handlePointerOut(event: ThreeEvent<PointerEvent>){
        event.stopPropagation();
        document.body.style.cursor = 'default'
        onHover(null)
    }

     return (
        <primitive
            object={clonedScene}
            position={position}
            onClick={handleClick}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
        />
    )

}