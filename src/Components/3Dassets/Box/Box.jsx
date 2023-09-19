function Box() {
    return (
      <mesh> 
        <boxGeometry args={[1,1,1]}> </boxGeometry>
        <meshLambertMaterial color="white" ></meshLambertMaterial>
      </mesh>
    )
  }

export default Box;