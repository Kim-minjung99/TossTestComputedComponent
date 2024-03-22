function ErrorboundaryTest(){
    
    const name: undefined = undefined;
    if(!name) throw Error("name is undefined")

    // const name="kim";
    
    return (
        <div>
            {name}
        </div>
    );
}
export default ErrorboundaryTest;