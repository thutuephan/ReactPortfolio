const Header = () => {
    const style = {
        card: {
            fontSize: 10,
            fontFamily: 'Karla',
        },
        heading: {
            backgroundColor: "#B4F8C8",
            color: 'blue',
            
        }
    }
    return (
        
        <div style= {style.card}>
            <Navigation currentPage/>
            
        </div>
    )
}

export default Header
