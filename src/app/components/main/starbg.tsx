"use client"
import { useState, useRef, Suspense } from "react"
import * as THREE from 'three'
import {Canvas,useFrame} from "@react-three/fiber"
import { Points,PointMaterial } from "@react-three/drei"
// @ts-expect-error maath/random doesn't have proper TypeScript types for this version
import * as random from "maath/random/dist/maath-random.esm"





import { FC } from "react";

interface StarbgProps {
    [key: string]: any;
}

interface SphereState {
    radius: number;
}

function Starbg(props: StarbgProps) {
    const ref = useRef<THREE.Points>(null!);
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(5000), { radius: 1.2 } as SphereState)
    );
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 10;
    });
    return (
        <>
            <group rotation={[0, 0, Math.PI / 4]}>
                <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                    <PointMaterial
                        transparent
                        color="#fff"
                        size={0.002}
                        sizeAttenuation={true}
                        depthWrite={false}
                    />
                </Points>
            </group>
        </>
    );
}

const starCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[20]">
        <Canvas camera={{position:[0,0,1]}}>
            <Suspense fallback={null}>
                <Starbg/>
            </Suspense>

        </Canvas>

    </div>
    
)

export default starCanvas