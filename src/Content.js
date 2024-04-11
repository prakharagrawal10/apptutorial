const Content = () => {
    const title = 'Welcome to the new blog';
    


    return (
        <div className="home">
            <h2>{title}</h2>
            <button onclick={handleclick}>Click me</button>
            <button onclick={handleclickAgain}>Click me Again</button>
        </div>
    );
}
 
export default Content;