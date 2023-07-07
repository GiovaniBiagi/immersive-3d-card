import {
  Environment,
  MeshPortalMaterial,
  OrbitControls,
  RoundedBox,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { Fish } from "./Fish";
import { Dragon } from "./Dragon";
import { Cactus } from "./Cactus";

export const Experience = () => {
  return (
    <>
      <Environment preset="sunset" />
      <ambientLight intensity={0.5} />
      <OrbitControls />
      <MonsterStage texture={"/textures/water.jpg"}>
        <Fish scale={0.6} position-y={-1} />
      </MonsterStage>
      <MonsterStage
        texture={"/textures/lava.jpg"}
        position-x={-2.5}
        rotation-y={Math.PI / 8}
      >
        <Dragon scale={0.6} position-y={-1} />
      </MonsterStage>
      <MonsterStage
        texture={"/textures/cactus.jpg"}
        position-x={2.5}
        rotation-y={-Math.PI / 8}
      >
        <Cactus scale={0.6} position-y={-1} />
      </MonsterStage>
    </>
  );
};

export const MonsterStage = ({ children, texture, ...props }) => {
  const map = useTexture(texture);
  return (
    <group {...props}>
      <RoundedBox args={[2, 3, 0.1]}>
        <MeshPortalMaterial side={THREE.DoubleSide}>
          <Environment preset="sunset" />
          <ambientLight intensity={1} />s{children}
          <mesh>
            <sphereBufferGeometry attach="geometry" args={[5, 32, 32]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  );
};
